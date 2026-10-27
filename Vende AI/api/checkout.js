// Vercel Function: /api/checkout  (Stripe Checkout, SANDBOX ONLY)
// Runs on the server only. It reads STRIPE_SECRET_KEY from the server's environment
// and talks to Stripe; the browser only ever gets back a Stripe page address.
//
//   POST { tier, lang }   -> creates a Checkout Session and returns { url } (the Stripe-hosted page)
//   GET  ?session_id=...  -> asks Stripe whether that session was paid; returns { paid, tier }
//
// Refuses to work with live keys: both STRIPE_PUBLISHABLE_KEY and STRIPE_SECRET_KEY must be test keys.
// Prices follow prd.md (Plans), in US cents, charged every month.

const TIERS = {
  1: { amount: 599, name: 'VendeAI Standard' },
  2: { amount: 999, name: 'VendeAI Medium' },
  3: { amount: 1999, name: 'VendeAI Business' }
};
const LOCALES = { es: 'es-419', pt: 'pt-BR', en: 'en' };
const TIMEOUT_MS = 10000;
const PER_MINUTE = 5;               // payment pages per visitor per minute (best effort, per server instance)
const hits = new Map();

function tooMany(request) {
  const ip = (request.headers.get('x-forwarded-for') || 'local').split(',')[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < 60000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > PER_MINUTE;
}

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}

// Returns the secret key, or null after logging why it can't be used.
function testKey() {
  const pk = (process.env.STRIPE_PUBLISHABLE_KEY || '').trim();
  const sk = (process.env.STRIPE_SECRET_KEY || '').trim();
  if (pk.startsWith('pk_live') || sk.startsWith('sk_live')) {
    console.error('Stripe LIVE key found. VendeAI is sandbox-only; refusing to take payments.');
    return null;
  }
  if (!pk.startsWith('pk_test_') || !sk.startsWith('sk_test_')) {
    console.error('STRIPE_PUBLISHABLE_KEY / STRIPE_SECRET_KEY are missing or are not test keys (pk_test_ / sk_test_).');
    return null;
  }
  return sk;
}

async function stripe(sk, method, path, form) {
  const res = await fetch('https://api.stripe.com/v1/' + path, {
    method,
    headers: { Authorization: 'Bearer ' + sk, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form ? new URLSearchParams(form) : undefined,
    signal: AbortSignal.timeout(TIMEOUT_MS)
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((body.error && body.error.message) || 'Stripe error ' + res.status);
  return body;
}

export async function POST(request) {
  const sk = testKey();
  if (!sk) return json(503, { error: 'not_ready' });
  if (tooMany(request)) return json(429, { error: 'limit' });
  let input;
  try { input = await request.json(); } catch { return json(400, { error: 'bad_request' }); }
  const tier = TIERS[input && input.tier];
  if (!tier) return json(400, { error: 'bad_tier' });
  const lang = LOCALES[input.lang] ? input.lang : 'es';
  const origin = new URL(request.url).origin;
  try {
    const session = await stripe(sk, 'POST', 'checkout/sessions', {
      mode: 'subscription',
      'line_items[0][quantity]': '1',
      'line_items[0][price_data][currency]': 'usd',
      'line_items[0][price_data][unit_amount]': String(tier.amount),
      'line_items[0][price_data][recurring][interval]': 'month',
      'line_items[0][price_data][product_data][name]': tier.name,
      'metadata[tier]': String(input.tier),
      'subscription_data[metadata][tier]': String(input.tier),
      locale: LOCALES[lang],
      success_url: `${origin}/pago/exito.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pago/cancelado.html`
    });
    return json(200, { url: session.url });
  } catch (e) {
    console.error('Stripe checkout failed:', e.message);
    return json(502, { error: 'down' });
  }
}

export async function GET(request) {
  const sk = testKey();
  if (!sk) return json(503, { error: 'not_ready' });
  const id = new URL(request.url).searchParams.get('session_id') || '';
  if (!/^cs_test_[A-Za-z0-9]+$/.test(id)) return json(400, { error: 'bad_session' });
  try {
    const s = await stripe(sk, 'GET', 'checkout/sessions/' + id);
    // Only what the page needs; never the buyer's email or card details.
    return json(200, { paid: s.status === 'complete' && s.payment_status === 'paid', tier: Number(s.metadata && s.metadata.tier) || null });
  } catch (e) {
    console.error('Stripe session check failed:', e.message);
    return json(502, { error: 'down' });
  }
}
