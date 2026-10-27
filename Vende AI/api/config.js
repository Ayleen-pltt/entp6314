// Vercel Function: GET /api/config
// Gives the page the Supabase address and the PUBLISHABLE key, as a small script:
//   window.VENDEAI_CONFIG = { supabaseUrl, supabaseKey }
// The publishable key is meant to be public: on its own it can't read any table,
// because row-level security only lets a signed-in user reach their own rows.
// A secret key must never reach the browser, so one is refused here.

function looksSecret(key) {
  if (key.startsWith('sb_secret_')) return true;
  const part = key.split('.')[1];                 // older JWT-style keys: check the role inside
  if (!part) return false;
  try { return JSON.parse(Buffer.from(part, 'base64url').toString()).role === 'service_role'; } catch { return false; }
}

export function GET() {
  const url = (process.env.SUPABASE_URL || '').trim().replace(/\/+$/, '').replace(/\/rest\/v1$/, '');   // people often copy the API address
  const key = (process.env.SUPABASE_PUBLISHABLE_KEY || '').trim();
  let config = null;
  if (!url || !key) console.error('SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY is not set');
  else if (looksSecret(key)) console.error('SUPABASE_PUBLISHABLE_KEY holds a SECRET key; refusing to send it to the browser');
  else if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url)) console.error('SUPABASE_URL does not look like https://<project>.supabase.co');
  else if (!key.startsWith('sb_publishable_') && key.split('.').length !== 3) console.error('SUPABASE_PUBLISHABLE_KEY does not look like a publishable key (sb_publishable_...); staying in demo mode');
  else config = { supabaseUrl: url, supabaseKey: key };
  return new Response(`window.VENDEAI_CONFIG = ${JSON.stringify(config)};\n`, {
    headers: { 'Content-Type': 'text/javascript; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}
