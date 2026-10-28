// demo-check helper: the parts of the check that need no browser.
//   node .claude/skills/demo-check/check.mjs [live URL]     (default https://vendeai-pi.vercel.app)
// 1. Build: VendeAI has no build step, so "builds" means every file Vercel serves or runs is valid.
// 2. Live: the main pages and APIs answer, and the live app is the same version as this computer.
// 3. Sign-up settings: Supabase accepts email sign-ups and asks for email confirmation.
// Prints one PASS/FAIL line per check and exits 1 if anything failed. Never prints keys.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const APP = path.join(import.meta.dirname, '..', '..', '..', 'Vende AI');
const LIVE = (process.argv[2] || 'https://vendeai-pi.vercel.app').replace(/\/+$/, '');
let failed = 0;
const report = (ok, name, note = '') => { if (!ok) failed++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${note ? '  - ' + note : ''}`); };
const read = f => fs.readFileSync(path.join(APP, f), 'utf8');
const tryIt = fn => { try { return [true, fn()]; } catch (e) { return [false, String(e.message || e).split('\n')[0]]; } };

console.log('--- 1. Build (files are valid) ---');
for (const page of ['app/index.html', 'landing/index.html', 'pago/exito.html', 'pago/cancelado.html', '404.html']) {
  if (!fs.existsSync(path.join(APP, page))) { report(false, page, 'missing'); continue; }
  const scripts = [...read(page).matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  const bad = scripts.map(s => tryIt(() => new Function(s))).find(([ok]) => !ok);
  report(!bad, `${page} scripts`, bad ? bad[1] : `${scripts.length} script block(s)`);
}
for (const f of [...fs.readdirSync(path.join(APP, 'api')).map(f => 'api/' + f), 'app/sw.js', 'dev-server.mjs']) {
  const [ok, note] = tryIt(() => execFileSync(process.execPath, ['--check', path.join(APP, f)], { stdio: 'pipe' }));
  report(ok, f, ok ? '' : note);
}
for (const f of ['vercel.json', 'app/manifest.webmanifest', 'package.json']) {
  const [ok, note] = tryIt(() => JSON.parse(read(f)));
  report(ok, f, ok ? 'valid JSON' : note);
}
const appV = (read('app/index.html').match(/APP_VERSION = '([\d.]+)'/) || [])[1];
const swV = (read('app/sw.js').match(/VERSION = '([\d.]+)'/) || [])[1];
report(appV && appV === swV, 'APP_VERSION matches sw.js VERSION', `${appV} / ${swV}`);
report(fs.existsSync(path.join(APP, 'node_modules', '@google', 'genai')), 'packages installed', 'npm install if this fails');

console.log(`--- 2. Live site (${LIVE}) ---`);
async function get(u) {
  const res = await fetch(LIVE + u, { redirect: 'follow', signal: AbortSignal.timeout(10000) });
  return { status: res.status, text: await res.text() };
}
const checks = [
  ['/', r => r.status === 200 && /VendeAI/.test(r.text), 'front door (landing)'],
  ['/app/', r => r.status === 200 && r.text.includes('id="ob-submit"'), 'app with the sign-up form'],
  ['/api/config', r => r.status === 200 && /supabaseUrl/.test(r.text), 'sign-in switched on (not demo mode)'],
  ['/api/weather?country=PE', r => r.status === 200 && typeof JSON.parse(r.text).temp === 'number', 'weather'],
  ['/legal/politica-de-privacidad.html', r => r.status === 200, 'privacy policy'],
  ['/this-page-does-not-exist', r => r.status === 404, 'missing pages give 404']
];
let liveApp = '';
for (const [u, test, name] of checks) {
  const [ok, r] = await get(u).then(r => [true, r], e => [false, e.name === 'TimeoutError' ? 'over 10 s' : e.message]);
  if (u === '/app/' && ok) liveApp = r.text;
  report(ok && tryIt(() => test(r))[1] === true, `${u}  ${name}`, ok ? `HTTP ${r.status}` : r);
}
const liveV = (liveApp.match(/APP_VERSION = '([\d.]+)'/) || [])[1];
report(liveV === appV, 'live app is the latest version', liveV === appV ? liveV : `live ${liveV || '?'}, this computer ${appV}: deploy needed`);

console.log('--- 3. Sign-up settings (Supabase) ---');
const cfg = await get('/api/config').then(r => JSON.parse((r.text.match(/=\s*(.*);/) || [])[1] || 'null')).catch(() => null);
if (!cfg) report(false, 'Supabase settings from /api/config', 'none: the live app is in demo mode');
else {
  const s = await fetch(cfg.supabaseUrl + '/auth/v1/settings', { headers: { apikey: cfg.supabaseKey }, signal: AbortSignal.timeout(10000) })
    .then(r => r.json()).catch(() => null);
  report(!!s, 'Supabase Auth answers');
  if (s) {
    report(s.external && s.external.email === true, 'email sign-up is on');
    report(s.disable_signup === false, 'new sign-ups are allowed');
    report(s.mailer_autoconfirm === false, 'email confirmation is required');
  }
}

console.log(failed ? `\n${failed} check(s) FAILED.` : '\nAll automatic checks passed.');
process.exit(failed ? 1 : 0);
