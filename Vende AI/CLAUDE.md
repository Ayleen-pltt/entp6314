# CLAUDE.md: VendeAI

Rules for everything in this folder. Read `prd.md` for what to build.

## How to work

- Build one milestone at a time, in the order in `prd.md`. Do not start the next milestone until the user says so.
- After each milestone, check the result against the test case in `prd.md` (Spanish and Portuguese messages) and say whether every number matches.

## Stack

- **App:** plain HTML, CSS and JavaScript in one file (`app/index.html`). No framework and no build step. The only package (`package.json`) is `@google/genai`, used by the server function.
- **Web and installable app (PWA):** the same `app/index.html` works in the browser and installs to the phone's home screen. `app/manifest.webmanifest` (name, colors, icons in `app/icons/`) and `app/sw.js` (offline helper: pages network-first with a 4-second fallback to the saved copy; fonts, icons and `app/vendor/` saved; `/api/ai` and Supabase never stored). Bump `VERSION` in `sw.js` with each release. The install card uses the browser's install prompt on Android and computers, and explains Share > Add to Home Screen on iPhone. Google Play / App Store packaging can wrap this same app later.
- **Hosting:** Vercel, project `vendeai` (https://vendeai-pi.vercel.app). `vercel.json` sends `/` to `/app/`, and `.vercelignore` keeps internal documents (`*.md`, `strategy/`, `probes/`) off the site.
- **Vercel Web Analytics:** the plain-HTML script tag in the `<head>` of `app/index.html`, loading `/_vercel/insights/script.js` from the same site. No `@vercel/analytics` package. It counts page views without cookies and is disclosed in `legal/politica-de-cookies.md` and `legal/politica-de-privacidad.md`.
- **Google Gemini:** model `gemini-3.5-flash` through the `@google/genai` package, called only from the Vercel Function `api/ai.js` (`POST /api/ai`). The key is `GEMINI_API_KEY`: in `.env.local` on this computer and in the Vercel project's environment variables online. It is never sent to the browser. Three tasks: `sale` reads a sale message into fields, `advice` rewrites the assistant's sentences, and `plan` suggests one of the four plans from the "Tu negocio" answers (the app accepts it only if the only number is that plan's price; one result is kept per set of answers in `data.planAI`). The app checks every answer (numbers must come from the message or from the app's own sentence) and falls back to its built-in rules when the AI is slow (9 s on the server, 12 s in the browser), busy, over its free limit (20 requests a day on the free tier) or unreachable. Local testing: `node dev-server.mjs` (the `vendeai` preview), which serves the pages and runs `api/ai.js` like Vercel does.
- **Stripe (sandbox only):** Stripe Checkout, the payment page Stripe hosts, for the three paid plans in `prd.md` (Standard US$5.99, Medium 9.99, Business 19.99 a month, subscriptions; Freedom is free). Server code in `api/checkout.js`: `POST /api/checkout` creates a Checkout Session and returns its Stripe address; `GET /api/checkout?session_id=` asks Stripe whether it was paid. Keys `STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY` in `.env.local` (and Vercel); the secret key never reaches the browser. The function refuses to run unless both are test keys (`pk_test_` / `sk_test_`); any `pk_live` or `sk_live` key stops it. Stripe returns the seller to `pago/exito.html` (checks the payment with our server, then leaves `vendeai_pago` in localStorage for the app to pick up as `data.plan`) or `pago/cancelado.html`. Not yet: a webhook and saving the plan to the account in Supabase, so for now the plan lives on the phone only.
- **Demo mode:** while `/api/config` has no valid Supabase settings (it returns `null`), the app skips sign-in: the seller gives a name, country and the two acceptances, and data stays on that phone (`vendeai_datos:demo`). Real Supabase values in Vercel switch sign-in on by themselves.
- **Data:** the browser's `localStorage` for now. The Supabase schema is ready in `supabase/` but not connected yet.

## Technical limits (prototype)

- The app is one file, `app/index.html`, holding all HTML, CSS and JavaScript. It opens by double-clicking it.
- No framework, no build step, no login. The server code is `api/ai.js`, `api/config.js` and `api/checkout.js`; the browser holds no secret key. The page talks only to its own site (`/api/*` and Vercel Web Analytics), except that "Pagar" sends the seller to Stripe's own payment page. Opened by double-clicking, the AI is unreachable and the app uses its built-in rules. Fonts are self-hosted in `fonts/` (Bodoni Moda and Manrope, SIL Open Font License), never loaded from Google Fonts (see `legal/politica-de-cookies.md`).
- Gemini reads sale messages first; `saleFromAI()` checks its answer. The rule-based `parseSale()` stays as the fallback and fills any field the AI left empty.
- Data lives in `localStorage` under `vendeai_datos` and `vendeai_preferencias`, wrapped in try/catch. The app must still work without it.
- Every piece of screen text comes from the `I18N` object (`es`, `pt` and `en`). Never write screen text directly in the markup.
- The app does all the math. Money is rounded to cents.

## Look

- Same look as `landing/index.html`. Brand colors and share of the screen: Negro `#111111` 40% (header, main buttons, the big stat), Marfil `#F3ECDC` 35% (background), Blanco `#FFFFFF` 15% (cards), Arena `#C9B48F` 6% (details: underlines, bars, the logo "AI" on black; never body text on ivory), Gris azulado `#4C5A62` 4% (secondary text), Piedra `#CECCC5` for lines. Amber and red only for warnings. Plenty of space.
- Fonts: Bodoni Moda for the logo, headings and italic phrases; Manrope for text, numbers and uppercase labels.
- Phone-first, max width about 560px. No sideways scrolling.
- Plain words only. Follow the plain-language table in `prd.md`.
