// Vercel Function: POST /api/stripe-webhook  (Stripe webhook, SANDBOX ONLY)
// Stripe calls this when a payment or subscription changes. We check Stripe's signature,
// then save the plan on the seller's account in Supabase (app_metadata.plan), the part of
// the account only our server can write. The app reads it from there, so the plan follows
// the seller to any phone, and a cancelled subscription goes back to Freedom.
//
//   checkout.session.completed      -> paid: plan = the tier bought
//   customer.subscription.updated   -> active, trialing or past_due (Stripe is still retrying the card) keep the tier; anything else = Freedom
//   customer.subscription.deleted   -> Freedom
//
// Keys (server only, never in the browser): STRIPE_WEBHOOK_SECRET (whsec_..., from the Stripe
// dashboard), STRIPE_SECRET_KEY (must be sk_test_), SUPABASE_URL and SUPABASE_SECRET_KEY (sb_secret_...).
// Live keys or live events are refused. The seller is found by the user id that /api/checkout
// put on the session (client_reference_id and metadata.user_id).
import crypto from 'node:crypto';

const TIERS = [1, 2, 3];
const TOLERANCE_S = 300;            // Stripe's own default: refuse events signed more than 5 minutes ago
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function json(status, body) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
}

// Stripe-Signature: t=<time>,v1=<hex HMAC-SHA256 of "<time>.<raw body>">
function signedByStripe(raw, header, secret) {
  const parts = Object.fromEntries((header || '').split(',').map(p => p.split('=')).filter(p => p.length === 2 && p[0] !== 'v1'));
  const sigs = (header || '').split(',').filter(p => p.startsWith('v1=')).map(p => p.slice(3));
  const time = Number(parts.t);
  if (!time || !sigs.length || Math.abs(Date.now() / 1000 - time) > TOLERANCE_S) return false;
  const want = crypto.createHmac('sha256', secret).update(time + '.' + raw).digest();
  return sigs.some(s => { const got = Buffer.from(s, 'hex'); return got.length === want.length && crypto.timingSafeEqual(got, want); });
}

async function savePlan(userId, plan) {
  const url = (process.env.SUPABASE_URL || '').trim().replace(/\/+$/, '').replace(/\/rest\/v1$/, '');
  const key = (process.env.SUPABASE_SECRET_KEY || '').trim();
  if (!url || !key.startsWith('sb_secret_')) throw new Error('SUPABASE_URL / SUPABASE_SECRET_KEY missing');
  const res = await fetch(`${url}/auth/v1/admin/users/${userId}`, {
    method: 'PUT',
    headers: { apikey: key, Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
    body: JSON.stringify({ app_metadata: { plan } }),
    signal: AbortSignal.timeout(8000)
  });
  if (!res.ok) throw new Error('Supabase answered ' + res.status);
}

export async function POST(request) {
  const secret = (process.env.STRIPE_WEBHOOK_SECRET || '').trim();
  const sk = (process.env.STRIPE_SECRET_KEY || '').trim();
  if (!secret.startsWith('whsec_') || !sk.startsWith('sk_test_')) {
    console.error('Stripe webhook not ready: STRIPE_WEBHOOK_SECRET missing, or STRIPE_SECRET_KEY is not a test key.');
    return json(503, { error: 'not_ready' });
  }
  const raw = await request.text();
  if (!signedByStripe(raw, request.headers.get('stripe-signature'), secret)) return json(400, { error: 'bad_signature' });

  let event;
  try { event = JSON.parse(raw); } catch { return json(400, { error: 'bad_request' }); }
  if (event.livemode) { console.error('Live Stripe event refused: VendeAI is sandbox-only.'); return json(400, { error: 'live' }); }

  const o = (event.data && event.data.object) || {};
  const meta = o.metadata || {};
  const userId = o.client_reference_id || meta.user_id;
  const at = new Date((event.created || Date.now() / 1000) * 1000).toISOString();
  let plan = null;
  if (event.type === 'checkout.session.completed' && o.payment_status === 'paid' && TIERS.includes(Number(meta.tier))) {
    plan = { tier: Number(meta.tier), status: 'active', subscription: o.subscription || null, at };
  } else if (event.type === 'customer.subscription.updated') {
    const on = ['active', 'trialing', 'past_due'].includes(o.status) && TIERS.includes(Number(meta.tier));
    plan = { tier: on ? Number(meta.tier) : 0, status: o.status, subscription: o.id, at };
  } else if (event.type === 'customer.subscription.deleted') {
    plan = { tier: 0, status: 'canceled', subscription: o.id, at };
  }
  // Events we don't use, and payments made without an account (demo mode), are simply acknowledged.
  if (!plan || !UUID.test(userId || '')) return json(200, { received: true });

  try {
    await savePlan(userId, plan);
    return json(200, { received: true, saved: true });
  } catch (e) {
    console.error('Could not save the plan:', e.message);
    return json(500, { error: 'save_failed' });   // Stripe retries for up to 3 days
  }
}
