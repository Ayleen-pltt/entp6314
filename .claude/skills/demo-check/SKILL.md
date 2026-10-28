---
name: demo-check
description: Pre-demo check for VendeAI. Confirms the app builds (every served file is valid), the live URL loads, the sign-up flow works end to end, and the browser console shows no errors. Use when the user types /demo-check or asks whether VendeAI is ready to demo or present.
---

# demo-check: is VendeAI ready to show?

Run the four checks below in order, then report one line per check: PASS, FAIL (with the reason in plain words), or WAITING ON YOU. Keep the report short. Do not fix anything during the check: list what failed and offer to fix it afterwards.

The app is in `Vende AI/`. The live site is https://vendeai-pi.vercel.app unless the user names another URL.

## 1. The app builds

VendeAI has no build step, so "builds" means every file Vercel serves or runs is valid.

Run the helper script, which also covers checks 2 and 3a:

```bash
node .claude/skills/demo-check/check.mjs
```

The script checks:
- The inline scripts of every page parse.
- `node --check` passes on `api/*.js`, `app/sw.js` and `dev-server.mjs`.
- The JSON files are valid.
- `APP_VERSION` equals the `sw.js` `VERSION`.
- The packages are installed.

## 2. The live URL loads

From the same script's output:
- `/` (landing), `/app/`, `/api/config` (not demo mode), `/api/weather`, the privacy policy, and a 404 for a missing page.
- The live app version equals the version on this computer. If it doesn't, say that a deploy is needed. Never deploy during this check.

## 3. Sign-up works end to end

**a. Settings (automatic).** The script checks that Supabase has email sign-up on, new sign-ups allowed, and email confirmation required.

**b. The form (built-in browser, live site).** Open `<live URL>/app/` in a fresh tab. If the browser is already signed in, use "Salir" first only if the user agrees. Then:
- Pick Español in the language picker if it shows.
- Confirm the sign-up form shows these fields: `ob-name`, `ob-email`, `ob-pass`, `ob-country`, the two boxes `ob-terms` and `ob-privacy` (both unticked), and the optional `ob-news` (unticked).
- Confirm `ob-submit` stays disabled until both required boxes are ticked.
- Confirm the links next to the boxes open the legal pages.

**c. Creating the account (the user does this).** Claude never creates accounts on the real Supabase project and never types passwords. Ask the user to do these themselves in that tab:
1. Fill the form with a test email they own and a new password.
2. Press **Crear cuenta**.
3. Open the confirmation email and tap the link.

Then wait for them to say "done".

**d. After sign-in (Claude checks).** Confirm each of these:
- The account form is gone, and "Tu negocio" (the business questions) shows.
- The header shows "Salir" and the weather in the top-left corner (a city and °C, or the friendly "El clima no cargó" note). Nothing overlaps at phone width: use `resize_window` with the mobile preset, then reset it.
- The welcome email arrived: ask the user, since it goes to `RESEND_TEST_TO`.

If the user can't make a new account right now, mark 3c and 3d as WAITING ON YOU and continue.

## 4. No errors in the browser console

On the live site, use `read_console_messages` with `onlyErrors: true` after each of these:
- Loading `/` (the landing).
- Loading `/app/`.
- Switching to each tab: Anotar, Todo en un lugar, Conectar.
- Reading one example sale. Tap an example, but don't save it on a real account unless the user agrees.

Any error is a FAIL: quote the first line of the message and say on which page it appeared. Warnings are not failures; mention them only if there are many.

## Report

End with a short table:

| Check | Result |
|---|---|
| 1. Builds | PASS / FAIL |
| 2. Live URL | PASS / FAIL |
| 3. Sign-up | PASS / FAIL / WAITING ON YOU |
| 4. Console | PASS / FAIL |

Then one line: "Ready to demo" or "Not ready: <the first thing to fix>".
