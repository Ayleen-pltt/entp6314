# Legal compliance checklist: VendeAI

**Status:** draft, written by an AI assistant, not a lawyer. Every item marked **[VERIFY]** and every document in this folder needs review by a licensed lawyer in each launch country before going live.
**Countries covered:** Mexico, Colombia, Peru, Argentina, Chile, Brazil. `prd.md` names no first country yet (spec-audit GAPS #1).

## Documents

| Document | File | Language |
|---|---|---|
| Terms and conditions | [terminos-y-condiciones.md](terminos-y-condiciones.md) | Spanish |
| Privacy policy | [politica-de-privacidad.md](politica-de-privacidad.md) | Spanish |
| Cookie policy | [politica-de-cookies.md](politica-de-cookies.md) | Spanish |
| Refund policy | [politica-de-reembolsos.md](politica-de-reembolsos.md) | Spanish |

**Brazil needs Portuguese versions of all four.** The CDC and LGPD require consumer information in Portuguese. The app now supports Portuguese (`prd.md` "Languages"), and Brazil launches only once these versions are written and reviewed by a Brazilian lawyer. They should be adapted to Brazilian law, not just translated. For example, the refund policy cites the CDC first, and the privacy policy names the ANPD as the authority.

**Consent records must include the language.** Add a `document_language` field (`es` or `pt`) to the consent log in §3, because each language version is a separate document with its own hash.

---

## 1. Do we need cookie consent?

**No, as long as the app only uses strictly necessary storage.**

- The prototype uses only browser storage for the seller's own data, which is needed for the app to work.
- The future login cookie is needed for the app to work too.
- None of the six countries' laws require prior consent for storage that is strictly necessary to provide a service the user asked for. **[VERIFY]** Brazil's ANPD cookie guide (2022) is the most detailed of the six, and it treats necessary cookies as not needing consent.

**Vercel Web Analytics (added to `app/index.html`):** cookieless and anonymous. Visitors are counted with a request hash that is discarded after 24 hours, and IP addresses are not stored (per Vercel's Web Analytics privacy page). It is disclosed in the cookie and privacy policies. We treat it as not needing a banner, but this is a cross-border transfer to the US, and it should be confirmed per country. **[VERIFY]**

**Consent becomes required the moment we add any of these:** analytics (Google Analytics, Hotjar), ad pixels (Meta, TikTok), social embeds, or **Google Fonts loaded from Google's servers**, which sends the user's IP address to Google. To stay banner-free, use system fonts or self-host the font files.

**If we ever add non-essential cookies:** show a banner before setting them, make "Rechazar" as easy as "Aceptar," keep the app working on reject, and log the choice like any other consent.

## 2. Forms and checkboxes

**Which forms get the two checkboxes:**

| Form | Two checkboxes? | Why |
|---|---|---|
| Create account | **Yes** | The person gives us personal data and enters the contract. |
| Choose a paid plan / pay | **Yes** | A new contract with payment. The refund policy is linked here too. |
| Re-acceptance after a document changes | **Yes**, only the changed document | A new version needs new consent. |
| Contact / support form (if built) | **Privacy only** | Personal data, no contract. |
| Anotar una venta confirm card | No | The seller is recording their own business data under terms already accepted. A checkbox on every sale would break the "one tap" promise and add no legal value. |
| Add a customer | No | The seller is responsible for their customers' data under Terms §6. |

**How each checkbox must work:**

- **Two separate checkboxes**, never one combined "I accept everything."
- **Unchecked by default.** A pre-ticked box is not valid consent under the LGPD, Mexico's LFPDPPP, or Colombia's Ley 1581.
- **A link next to each one** that opens the full document without losing what the person already typed.
- The submit button stays disabled until both boxes are checked.
- Suggested text:
  - ☐ He leído y acepto los [Términos y condiciones](terminos-y-condiciones.md). Confirmo que soy mayor de 18 años.
  - ☐ He leído y acepto la [Política de privacidad](politica-de-privacidad.md).
- **If we ever send marketing messages,** add a third, optional checkbox for them. Mexico's law requires consent for secondary purposes to be separate from the main one. Today the app sends no marketing, so no third box is needed.

## 3. Consent record (traceability)

**The prototype cannot do this.** It has no server, and a record kept only in the user's own browser can be edited or deleted, so it proves nothing to an authority. This needs the server and account system from spec-audit GAPS #3 and #4 before launch.

**One row per checkbox, per acceptance, written on the server and never edited or deleted** (append-only):

| Field | Example | Why |
|---|---|---|
| `id` | `c_8f21…` | Unique record |
| `user_id` | `u_1042` | Who accepted |
| `document` | `terminos` or `privacidad` | What they accepted |
| `document_version` | `1.0` | Which text |
| `document_language` | `es` or `pt` | Which language version was shown |
| `document_hash` | SHA-256 of the exact text shown | Proves the text wasn't changed later |
| `action` | `accepted` or `withdrawn` | Withdrawal is a new row, never an edit |
| `accepted_at` | `2026-10-17T14:03:22Z` | When (UTC, server clock) |
| `method` | `checkbox, signup form` | How |
| `form_id` | `signup_v1` | Which screen |
| `app_version` | `0.3.1` | Which build showed it |
| `ip_address` | `201.140.12.7` | Supporting evidence |
| `user_agent` | `Android 14, Chrome 129` | Supporting evidence |

**Also keep:**
- an archived copy of every published version of each document, matched by `document_hash`;
- the records for **[5] years** after the account closes **[VERIFY]** per country's limitation period. This is disclosed in Privacy policy §5.

## 4. Asking only for what we need

Review of `prd.md` "Data we store":

| Data | Keep? | Note |
|---|---|---|
| Seller name or nickname | Keep | Used in messages. A nickname is enough. |
| Seller phone **or** email | Keep **one** | For login by code. No password needed. |
| Seller country | Keep | Currency and which law applies. |
| ID number, birth date, address, gender | **Do not ask** | Not needed. An 18+ checkbox replaces the birth date. |
| Card or bank details | **Never store** | The payment provider handles them. |
| Customer name | Keep | Needed for "Quién te debe." |
| Customer phone | Keep, **optional** | Only needed for WhatsApp reminders. |
| Products, costs, sales, debts | Keep | The core of the product. |
| Nudge acted or skipped | Keep | Needed for M4 learning. |
| Raw messages and voice notes | **Delete** | Voice is deleted after transcription, text after the card is confirmed. Disclosed in Privacy policy §3, and closes spec-audit GAPS #2. |
| Text sent to the AI provider | Strip seller name and phone first | Reduces what leaves our systems. |

## 5. Image rights

**Checked on 2026-10-17: the VendeAI folder has no images.** Nothing to clear yet.

Rules for when images are added:

- Use only images we made, images with a written license, or public-domain images.
- Log each one in `legal/image-licenses.md` with the file name, source, license, date, and proof (a receipt or license link).
- **No catalog brand logos or product photos** (such as Natura, Avon, or Yanbal) without written permission. They are trademarks.
- Product photos sellers upload are covered by Terms §8, where the seller confirms they own the rights.
- Icons and fonts count too: record their license (for example MIT or SIL Open Font License).

## 6. Local laws by country

| Requirement | Mexico | Colombia | Peru | Argentina | Chile | Brazil |
|---|---|---|---|---|---|---|
| **Privacy law** | LFPDPPP (new law, March 2025) | Ley 1581/2012 + Decreto 1377/2013 | Ley 29733 + new reglamento (2025) | Ley 25.326 | Ley 19.628 → **Ley 21.719** (in force Dec 2026) **[VERIFY]** | LGPD |
| **Privacy notice required** | Yes ("aviso de privacidad") | Yes (política de tratamiento) | Yes | Yes | Yes | Yes |
| **Register databases** | No | Only above 100,000 UVT in assets, so not us at the start | **Yes**, with the national authority | **Yes**, with AAIP | No **[VERIFY under 21.719]** | No |
| **Cross-border transfer (AI and hosting providers abroad)** | Disclose in the notice | Disclose; destination must be adequate or covered by contract | Disclose; contract safeguards | Disclose; contract safeguards | Contract safeguards | Contract clauses (ANPD standard clauses) |
| **Breach notification** | To users | To SIC and users | To authority within 48 h **[VERIFY]** | To AAIP | To agency and users | To ANPD and users |
| **Withdrawal right** | 5 business days | 5 business days | No general rule | 10 days + "botón de arrepentimiento" | 10 days | 7 days |
| **Other consumer musts** | Price in pesos including taxes | Price in pesos including taxes | **Libro de Reclamaciones virtual** | "Botón de baja," cancellation by the same channel | Cancellation by the same channel | Cancellation by the same channel; Portuguese |

**How the refund policy covers all six:** 10 days for a full refund everywhere meets or beats every country's legal minimum, so we can use one rule.

**Also check before launch [VERIFY]:**
- Where the company is incorporated. This affects taxes, invoicing, and which privacy law applies to us directly.
- Tax on digital services: VAT on foreign digital services applies in Mexico, Colombia, Chile, Argentina, and Peru.
- AI rules: Peru has an AI law (Ley 31814) with regulations, and Brazil is debating an AI bill. Both point toward disclosing that texts are AI-written, which Terms §7 already does.
- Debt-collection rules: reminders must not harass. Terms §6 makes the seller responsible, and our message tone should stay polite by design.

## 7. Before launch

- [ ] Lawyer review in each launch country
- [ ] Fill in every `[PLACEHOLDER]` (company name, address, emails, providers)
- [ ] Build server-side consent log (§3)
- [ ] Add a "Mis datos" screen: see, download, delete
- [ ] Argentina: arrepentimiento and baja buttons. Peru: Libro de Reclamaciones.
- [ ] Register databases in Peru and Argentina if we launch there
- [ ] Sign data processing agreements with the AI and hosting providers
- [ ] Portuguese versions of all four documents, reviewed by a Brazilian lawyer (needed before turning on Portuguese)
- [ ] Self-host fonts or use system fonts (no Google Fonts CDN)
