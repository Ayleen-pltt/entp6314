// Sends VendeAI's marketing emails. Runs on this computer only (tools/ never goes online).
//
//   node tools/send-campaign.mjs preview            write every email as an .html file in tools/email-previews/ to look at
//   node tools/send-campaign.mjs sample [es|pt|en]  send one of each email to RESEND_TEST_TO (no Supabase needed)
//   node tools/send-campaign.mjs news               who would get the news email (nothing is sent)
//   node tools/send-campaign.mjs upgrade            ... Freedom sellers: why Standard is worth it
//   node tools/send-campaign.mjs tips               ... paying sellers: how to use their plan + the next plan
//   add --send to really send.
//
// Only sellers who ticked "Quiero recibir novedades" (user_metadata.marketing === true) and confirmed
// their email are included. The plan comes from user_metadata.plan (0 Freedom ... 3 Business).
// Reads RESEND_API_KEY, RESEND_TEST_TO, SUPABASE_URL and SUPABASE_SECRET_KEY from .env.local.
// The Supabase SECRET key can read every account: it stays in .env.local, never in Vercel or the browser.
//
// While RESEND_TEST_TO is set (no verified domain), every email goes to that one address, so a
// real send is cut down to one email per kind of message, to avoid flooding that inbox.
import fs from 'node:fs';
import path from 'node:path';
import { sendEmail } from '../api/_email.js';
import { newsEmail, upgradeEmail, tipsEmail } from '../api/_marketing.js';

const ROOT = path.join(import.meta.dirname, '..');
try { process.loadEnvFile(path.join(ROOT, '.env.local')); } catch { /* use the shell's variables */ }
const [cmd, arg] = process.argv.slice(2).filter(a => !a.startsWith('--'));
const SEND = process.argv.includes('--send');
const TEST_TO = (process.env.RESEND_TEST_TO || '').trim();
const wait = ms => new Promise(r => setTimeout(r, ms));   // Resend allows about 2 emails a second

const KINDS = {
  news: { who: () => true, make: u => newsEmail(u.lang, u.name), variant: () => 'news' },
  upgrade: { who: u => u.plan === 0, make: u => upgradeEmail(u.lang, u.name), variant: () => 'upgrade' },
  tips: { who: u => u.plan > 0, make: u => tipsEmail(u.lang, u.name, u.plan), variant: u => 'tips-' + u.plan }
};

function samples(lang) {
  return [['news', newsEmail(lang, 'Ana')], ['upgrade', upgradeEmail(lang, 'Ana')],
    ...[1, 2, 3].map(t => ['tips-' + t, tipsEmail(lang, 'Ana', t)])];
}

async function sellers() {
  const url = (process.env.SUPABASE_URL || '').trim().replace(/\/+$/, '').replace(/\/rest\/v1$/, '');
  const key = (process.env.SUPABASE_SECRET_KEY || '').trim();
  if (!url || !key.startsWith('sb_secret_')) throw new Error('Put the Supabase secret key (sb_secret_...) in .env.local as SUPABASE_SECRET_KEY.');
  const out = [];
  for (let page = 1; ; page++) {
    const res = await fetch(`${url}/auth/v1/admin/users?page=${page}&per_page=500`, { headers: { apikey: key, Authorization: 'Bearer ' + key } });
    if (!res.ok) throw new Error('Supabase refused the user list: ' + res.status);
    const users = (await res.json()).users || [];
    for (const u of users) {
      const m = u.user_metadata || {};
      if (!u.email || !u.email_confirmed_at || m.marketing !== true) continue;
      out.push({ email: u.email, name: String(m.name || '').slice(0, 40) || u.email.split('@')[0],
        lang: ['es', 'pt', 'en'].includes(m.language) ? m.language : 'es', plan: [1, 2, 3].includes(m.plan) ? m.plan : 0 });
    }
    if (users.length < 500) return out;
  }
}

if (cmd === 'preview') {
  const dir = path.join(ROOT, 'tools', 'email-previews');
  fs.mkdirSync(dir, { recursive: true });
  for (const lang of ['es', 'pt', 'en']) for (const [name, mail] of samples(lang)) fs.writeFileSync(path.join(dir, `${lang}-${name}.html`), mail.html);
  console.log('Wrote 15 previews to tools/email-previews/');
} else if (cmd === 'sample') {
  if (!TEST_TO) throw new Error('Set RESEND_TEST_TO in .env.local first.');
  const lang = ['es', 'pt', 'en'].includes(arg) ? arg : 'es';
  for (const [name, mail] of samples(lang)) {
    console.log(name.padEnd(8), (await sendEmail(Object.assign({ to: TEST_TO }, mail))) ? 'sent' : 'FAILED', '-', mail.subject);
    await wait(600);
  }
} else if (KINDS[cmd]) {
  const k = KINDS[cmd];
  const list = (await sellers()).filter(k.who);
  console.log(`${list.length} seller(s) said yes to emails and fit "${cmd}".`);
  let todo = list;
  if (TEST_TO) {
    const seen = new Set();
    todo = list.filter(u => !seen.has(k.variant(u)) && seen.add(k.variant(u)));
    console.log(`Test mode: everything goes to ${TEST_TO}, so only ${todo.length} email(s) (one per kind) will be sent.`);
  }
  if (!SEND) { console.log('Nothing sent. Add --send to send.'); process.exit(0); }
  let ok = 0;
  for (const u of todo) { if (await sendEmail(Object.assign({ to: u.email }, k.make(u)))) ok++; await wait(600); }
  console.log(`Sent ${ok} of ${todo.length}.`);
} else {
  console.log('Use: preview | sample [es|pt|en] | news | upgrade | tips   (add --send to send)');
}
