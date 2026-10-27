// Vercel Function: POST /api/welcome
// Sends the welcome email once per account, right after the seller's first sign-in.
// Runs on the server only (RESEND_API_KEY never reaches the browser).
//
// The page sends its Supabase session token; we ask Supabase who that is, so nobody
// can trigger emails for someone else. After a successful send we mark the account
// (user_metadata.welcome_sent), so signing in again never sends a second welcome.
// Always answers 200: the app ignores the result, and an email problem never shows up for the seller.
import { sendEmail, welcomeEmail } from './_email.js';

const PER_MINUTE = 5;
const hits = new Map();

function json(body) {
  return new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
}

function tooMany(request) {
  const ip = (request.headers.get('x-forwarded-for') || 'local').split(',')[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < 60000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > PER_MINUTE;
}

export async function POST(request) {
  if (tooMany(request)) return json({ sent: false });
  const url = (process.env.SUPABASE_URL || '').trim().replace(/\/+$/, '').replace(/\/rest\/v1$/, '');
  const key = (process.env.SUPABASE_PUBLISHABLE_KEY || '').trim();
  const token = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
  if (!url || !key || !token) return json({ sent: false });
  const auth = { apikey: key, Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' };
  try {
    const res = await fetch(url + '/auth/v1/user', { headers: auth, signal: AbortSignal.timeout(5000) });
    if (!res.ok) return json({ sent: false });
    const user = await res.json();
    const meta = user.user_metadata || {};
    if (meta.welcome_sent) return json({ sent: false, already: true });
    if (!user.email || !user.email_confirmed_at || user.is_anonymous) return json({ sent: false });

    let lang = 'es';
    try { lang = (await request.json()).lang || meta.language || 'es'; } catch { lang = meta.language || 'es'; }
    const sent = await sendEmail(Object.assign({ to: user.email }, welcomeEmail(lang, meta.name)));
    if (sent) {
      await fetch(url + '/auth/v1/user', {
        method: 'PUT', headers: auth, body: JSON.stringify({ data: { welcome_sent: new Date().toISOString() } }),
        signal: AbortSignal.timeout(5000)
      }).catch(() => {});
    }
    return json({ sent });
  } catch (e) {
    console.error('Welcome email skipped:', e && e.name);
    return json({ sent: false });
  }
}
