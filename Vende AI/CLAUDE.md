# CLAUDE.md: VendeAI

Rules for everything in this folder. Read `prd.md` for what to build.

## How to work

- Build one milestone at a time, in the order in `prd.md`. Do not start the next milestone until the user says so.
- After each milestone, check the result against the test case in `prd.md` (Spanish and Portuguese messages) and say whether every number matches.

## Technical limits (prototype)

- The app is one file, `app/index.html`, holding all HTML, CSS and JavaScript. It opens by double-clicking it.
- No framework, no build step, no server, no login, no API key, no external requests. Use system fonts, not Google Fonts (see `legal/politica-de-cookies.md`).
- In the prototype, simple rules in JavaScript read sale messages in place of the AI. Keep them behind one `parseSale()` function so a real AI call can replace it later.
- Data lives in `localStorage` under `vendeai_datos` and `vendeai_preferencias`, wrapped in try/catch. The app must still work without it.
- Every piece of screen text comes from the `I18N` object (`es` and `pt`). Never write screen text directly in the markup.
- The app does all the math. Money is rounded to cents.

## Look

- Same look as `landing/index.html`: off-white background, near-black text, one green accent, plenty of space.
- Phone-first, max width about 560px. No sideways scrolling.
- Plain words only. Follow the plain-language table in `prd.md`.
