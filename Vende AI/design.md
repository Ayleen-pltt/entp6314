# VendeAI App: design

How VendeAI looks and feels. `CLAUDE.md` says how to build; `prd.md` says what to build; this file says how it should look. Read it before changing any screen, page or email.

The code is the source of truth: the colors below live as CSS variables at the top of `app/index.html` and `landing/index.html`. If you change a value here, change it there too, and the other way round.

## The problem and the people

Who VendeAI is for, what sellers told us, and what the research shows. Every design choice should trace back to this section.

### Who it's for

**Name:** Mariana, 38, a catalog reseller in Guadalajara, Mexico.

**Situation:** She resells beauty and fashion products from two direct-selling catalogs, plus some items she buys wholesale. She sells mostly to people she knows, through WhatsApp, Instagram, and in person at work or family gatherings: about 15–25 sales a week. Many customers pay in installments or "next week." She tracks everything in a notebook and an Excel sheet she updates when she has time, and she gets paid through Mercado Pago, bank transfers, and cash. She is comfortable with WhatsApp and social media but not with business software or AI. She tried Treinta and stopped when it started charging to record a sale.

**Goal:** To know at a glance who owes her money, what to restock before the next catalog campaign, and whether she is actually making a profit, without spending her evenings on spreadsheets or learning complicated tools.

**Frustration:** Her sales are scattered across chats, her notebook, and her memory, so she forgets who owes her and sometimes sells items she no longer has. She prices by copying the catalog or competitors, without counting shipping or packaging, so she is not sure she earns anything on some sales. The apps she tried felt made for accountants or store owners, not for her:
- They were full of forms, menus, and terms like "SKU," "COGS," or "inventory valuation" that she did not understand, so she gave up before seeing any benefit.
- They charged just to record a sale.
- They got her stock numbers wrong.
- They logged her out when the internet dropped.
- They did not handle sizes, colors, installments, or wholesale prices.

She distrusts apps that replace a real person with a bot.

**What she needs:**
- A free, simple way to record a sale in seconds, in plain everyday Spanish with no technical terms or setup.
- Recording by pasting a chat message or sending a voice note, then confirming with one tap before anything is saved.
- Sizes, colors, installments, and credit handled from day one.
- An app that works even when her signal is weak.

She would only pay for something that clearly brings in or recovers money, like ready-to-send payment reminders, at around $5–6 a month, paid in pesos through Mercado Pago or OXXO.

### What I heard (talk to 3–5 people)

Ask about the past, not the future:
- "Tell me about the last time you **made a sale and had to record it and collect the payment**."
- "How do you handle **tracking who owes you money and what you have left in stock** right now?"
- "What's the hardest part about **knowing whether you actually made a profit on a sale**?"

Who I talked to (3 sellers):
1. **Security products seller:** tracks sales in Excel and by hand.
2. **Fashion seller:** tracks sales in Excel and makes some of her own products.
3. **Multi-platform reseller:** Excel plus manual notes; sells some made-to-order items.

What I heard:
- **Nobody uses a sales app.** All three track sales in Excel, a notebook, or both. They tried or looked at apps but found them hard to understand or not suited to how they sell.
- **Collecting payments is the biggest pain.** Two of the three said tracking who has paid and who still owes them is their main problem, especially with installments and made-to-order products.
- **They don't really know their profit.** The fashion seller has little control over production costs, so her margins are low. The security seller focuses on sales volume more than on whether the business is profitable. Prices are set with simple formulas or by matching competitors.
- **Selling on several platforms doubles the work.** The reseller updates the same stock by hand on each platform, which takes time and causes mistakes.
- **Bundles and product variations are hard to track.** The security seller struggles to record product bundles; none of their tools handle this well.
- **They pay for tools that clearly save them money or time.** Two pay for a payment system and one pays an accountant, but none pays for sales tracking.
- **AI is fine if it's easy.** The security seller uses AI at a basic level and is willing to learn more "if it is more user-friendly."
- **The landing page sparked curiosity.** They liked its ease of use and everyday language and wanted to try it to see if it fits how they already work.

What surprised me:
- None of them asked for "AI." They asked for something simple that fits the way they already sell.

What I still need to learn:
- I've talked to 3 of my target of 8. I still need catalog/direct sellers (my main market segment) and sellers who rely heavily on credit.

### Affinity map

Interactive version (filter by source): https://claude.ai/artifact/XJCeCSoi64i1ZqUy37HKDz

Observations from 3 seller interviews, 264 negative reviews of the six closest apps, and six years of selling and coaching, grouped into eight themes. Each note's source is in brackets: **[Interview]**, **[Review]** or **[Experience]**.

#### 1. Sales live on paper, Excel, and memory
*Insight: Records are informal and spread across channels, so nothing gives a full picture.*
- [Interview] All 3 sellers track sales in Excel, a notebook, or both.
- [Interview] Excel is the "master copy" used to update each sales platform.
- [Experience] Traditional sellers use a notebook; older sellers have less tech knowledge.
- [Experience] Sales arrive by WhatsApp, Instagram, in person, and catalog at the same time.

#### 2. Collecting money is the biggest pain
*Insight: Credit and installments are normal, and no tool tracks them well.*
- [Interview] Two of three said tracking who paid and who owes is their main problem.
- [Interview, reseller] Made-to-order products make payment tracking harder.
- [Review] Installments and credit options are among the most-requested missing features.
- [Experience] Selling to friends and family on credit is the norm.

#### 3. They don't know their real profit
*Insight: Prices come from habit or competitors, so margins are invisible and often too low.*
- [Interview, fashion seller] Little control over production costs, so profit margins are low.
- [Interview, security seller] Focuses on sales volume more than whether the business is profitable.
- [Experience] Pricing formulas are basic or copy market prices.
- [Experience] Shipping and packaging are rarely counted in the cost.

#### 4. Apps feel too technical and not made for them
*Insight: Sellers give up before seeing value when the app speaks accountant, not seller.*
- [Interview] Existing apps are not tailored to how they sell, and the content isn't clear.
- [Interview] Liked the landing page's everyday language and ease of use.
- [Review] Missing sizes, colors, and wholesale prices (61+ of 264 reviews).
- [Review, Kyte, Peru] "Without sizes and colors, the app is useless to me."

#### 5. Paying to record a sale is a deal-breaker
*Insight: Free basic recording is expected; paid plans must clearly make or recover money.*
- [Review] Basics moved behind a paywall, no free trial (28% of reviews).
- [Review] "$10 a month seems excessive" for basic recording.
- [Review] Sudden 2–4× price hikes push loyal users out (6%).
- [Interview] They do pay for tools that save money: payment systems, an accountant.

#### 6. Reliability and trust break easily
*Insight: The app is used at the moment of sale; one failure or wrong number loses the user.*
- [Review] Crashes, freezes, login loops, fails offline (28%).
- [Review] Stock or profit figures wrong or lost (26% of Kyte's negative reviews).
- [Review, Treinta, Mexico] "Without internet the app logs me out… I cannot record my sales."
- [Review] Billing errors that can't be canceled (10%).

#### 7. Mixed feelings about AI
*Insight: Open to AI only if it's easy and helpful, never when it replaces a person.*
- [Interview, security seller] Uses AI at a basic level; willing to learn if it's more user-friendly.
- [Experience] Most small sellers aren't familiar with AI and struggle to use it.
- [Review] Support that is "just a bot" or never answers (14%).
- [Interview] No one asked for "AI"; they asked for something simple.

#### 8. Selling on several platforms doubles the work
*Insight: One shared stock updated everywhere would save time and stop overselling.*
- [Interview, reseller] Updates the same inventory by hand on each platform.
- [Interview, security seller] Product bundles are hard to record in current tools.
- [Experience] Overselling happens when stock isn't updated in time.

#### What the clusters tell us
1. **Collecting money is the sharpest pain**, ahead of inventory. Payment reminders are the strongest candidate for a paid feature.
2. **Simplicity beats features.** Sellers quit apps that feel built for accountants. Plain Spanish and one-tap confirmation matter more than "AI."
3. **Free recording is the entry ticket.** Charging to record a sale is the fastest way to lose this user.
4. **Trust is fragile.** One wrong stock or profit number and the app is abandoned; offline use is a gap nobody solves.
5. **Evidence gap:** no catalog/direct seller has been interviewed yet, though they are the core market segment.

### The problem

Mariana, an independent catalog reseller who sells through WhatsApp, social media, and in person, needs a simple way to record her sales, track who owes her money, and know her real profit, because her sales are scattered across chats, a notebook, and her memory, and the apps she tried were too technical, charged just to record a sale, or got her numbers wrong.

How might we:
- make recording a sale as easy as sending a WhatsApp message?
- help sellers collect what they're owed without damaging their relationships with customers?
- show sellers their real profit in plain language, without asking them to learn accounting?

## Ideas organized

Ideas that answer the "How might we" questions above, sorted by when to build them. The numbers are the original idea numbers.

### 🟢 Build now (first release)

**Record sales easily**
- **#1** Forward a WhatsApp message → sale, confirmed with one tap
- **#2** Voice-note recording (free plan: 10 voice notes a month; see Decisions) ✅ built
- **#8** Sizes, colors, installments, and wholesale prices built in
- **#10** Import an existing Excel sheet in one step
- **#6** Offline mode that syncs when the internet returns (paid plans; see Decisions)

**Get paid**
- **#3** "Who owes me" list with one-tap payment reminders

**Know the real profit**
- **#4** Profit per sale in plain words
- **#5** Price helper (cost + shipping + packaging → suggested price)
- **#16** "Explain this number" button next to every figure

**Daily guidance**
- **#7** Morning card: whom to collect from, what to restock, which price is too low

**Easy start and growth**
- **#18** First-week guide that starts with one feature: record today's sales
- **#19** Seller referral rewards

### 🟡 Next (after launch)
- **#9** Photo of a notebook page → recorded sales
- **#11** Reminder tone picker (gentle, friendly, firm)
- **#14** Catalog-campaign planner
- **#15** Bundle builder for kits and combos (needs more interviews)
- **#21** Customer notebook: what each customer buys and when
- **#24** Real human help on WhatsApp (paid plans only; see Decisions)

### ⚪ Later
- **#12** Customer payment link (Mercado Pago, Pix, OXXO, Yape)
- **#13** One stock count across all platforms
- **#17** Weekly voice summary on WhatsApp
- **#20** Group mode for catalog leaders (needs direct-seller interviews)
- **#22** Streaks and celebrations
- **#23** Lost-sale log

### 🔴 Drop
- **#25** VendeAI living only inside WhatsApp (depends on Meta, the biggest threat)

### Decisions

| Idea | Decision | Why |
|---|---|---|
| **#2 Voice notes** | Built. **Free plan: 10 voice notes a month**; paid plans have no limit for now. It is a core part of the product. | It helps exactly the seller we target, but turning voice into text is our main cost. A monthly limit keeps it free to try without breaking the free plan. |
| **#6 Offline mode** | Build now, **for paid plans only**. | It is expensive to build, but failing offline is one of the top complaints about competitors, so it is a clear reason to pay. |
| **#24 Human help on WhatsApp** | Next, **for paid plans only**. | A real person wins trust, but it costs too much to offer every free user. |

**Offline: keep the basics free.** Today the app already works without internet for everyone: sales are saved on the phone, and a dropped signal never logs the seller out. That stays free, because "the app logged me out and I couldn't record my sale" is a top complaint about competitors (affinity map, theme 6), and recording a sale must always be free. The paid part of #6 is the **full** offline mode: everything syncs to her account when the internet returns, so sales recorded offline on one phone show up on her other devices and are never lost if the phone is lost.

### Impact and effort (the 🟢 Build now ideas)

**Quick wins** (helps a lot, easier to build):
- **#3** "Who owes me" list with one-tap payment reminders
- **#4** Profit per sale in plain words
- **#5** Price helper (cost + shipping + packaging → suggested price)
- **#16** "Explain this number" button next to every figure
- **#18** First-week guide that starts with one feature
- **#19** Seller referral rewards

**Big bets** (helps a lot, harder to build):
- **#1** Forward a WhatsApp message → sale, confirmed with one tap
- **#2** Voice-note recording
- **#6** Offline mode that syncs when the internet returns
- **#7** Daily morning card (collect, restock, price alerts)
- **#8** Sizes, colors, installments, and wholesale prices built in

### Brainstorm: collecting money

**How might we** help sellers collect what they're owed without damaging their relationships with customers?

For Mariana, a catalog reseller who sells to friends, family, and coworkers on WhatsApp and in person, often on credit or installments. These have their own numbers (C1–C15), separate from the # idea numbers above, and none has been sorted into Build now, Next or Later yet.

**Safe**
- **C1** A "Cobrar hoy" list on the home screen showing who's due today, with the amount and the product.
- **C2** A friendly WhatsApp reminder ready to send with one tap, with the name, product, amount, and date already filled in.
- **C3** Her Mercado Pago, Yape, or bank details added to the reminder automatically, so paying takes one step.
- **C4** A payment plan when she records the sale ("3 payments of $80 on Fridays"), with reminders scheduled for each one.
- **C5** One tap to mark "Ya me pagó" (paid), with a thank-you message ready to send.
- **C6** Partial payments: "Rosa paid $100 of $180, still owes $80."
- **C7** A reminder timing helper: suggests sending on payday (the 15th and 30th) instead of a random day.

**Bolder**
- **C8** "Pide permiso" (ask permission): when recording a credit sale, the app suggests a message agreeing on the payment date up front ("¿Te parece si me pagas el viernes?"), so the later reminder feels expected.
- **C9** A customer "trust score" she alone can see: who always pays on time and who doesn't, so she decides who gets credit next time.
- **C10** A monthly "account statement" for each customer: a simple, friendly image listing what they bought and what they owe, to send on WhatsApp.
- **C11** A gentle-to-firm series: the first reminder is warm, and if there's no answer after a few days, the app suggests a clearer one. She approves each one.
- **C12** A small discount for paying early ("Si me pagas hoy, te regalo el envío"), so the reminder becomes good news.

**Wild**
- **C13** A customer page: a link where the customer sees what they owe and pays, so Mariana never has to ask in person.
- **C14** Voice-note reminders: the app records the reminder in Mariana's own voice from a short script, because a voice message feels warmer than text.
- **C15** "Cobro en grupo" (group collecting): for coworkers who buy together, one message to the office group showing everyone's balance, written as a cheerful list instead of a debt list.

## What this means for the design

Check every screen against Mariana:
- **Recording a sale is always free and always in reach.** The sale box is on Anotar, the first tab. Never put a lock, a price or a "Pro" badge near it. Only voice notes have a monthly limit, and typing or pasting always stays free.
- **No forms first.** One box where she pastes, types or says the sale. Fields only appear on the confirm card, already filled, for her to check.
- **Nothing is saved without her tap.** The confirm card always shows what will be saved, and has one clear button.
- **Her words, not an accountant's.** "Quién te debe", "Lo que tienes", "Lo que ganaste": never SKU, COGS, inventory or margin (the table in `prd.md`).
- **The answers she wants are on top.** Who owes her, what to restock and whether she really earned money are together on "Todo en un lugar": the big number, "Tu asistente" and "Quién te debe" come first, stock and files further down.
- **Sizes, colors, installments and wholesale prices** are part of the normal screens, not hidden settings.
- **Weak signal is normal.** She is never logged out because the internet dropped. When the AI or the weather can't load, one calm line says so and everything else keeps working.
- **The assistant suggests; she decides.** Reminders are written for her to send from her own WhatsApp. VendeAI never writes to her customers by itself, and never pretends to be a person.
- **Paid plans sell money recovered.** Show what a plan brings in, for example "reminders ready to send", next to a price around US$5.99.
- **Familiar feel.** Big, clear buttons, chat-like examples, and WhatsApp-style messages. It should feel as easy as WhatsApp, not like an office program.

From the interviews:
- **Lead with the result, not with "AI".** Nobody asked for AI. Screens and the landing page talk about what she gets ("sabe quién te debe", "anota en segundos"). AI is how it works behind the scenes, not the headline.
- **Collecting comes first.** "Quién te debe" sits right under the numbers, and the assistant's "Cobrar" tips come first.
- **Profit made visible.** Every sale shows what she really earned after costs, in plain words, so a low or negative margin is noticed, not hidden in a report.
- **Meet them where they are: Excel.** All of them use Excel today. Uploading their stock sheet ("Tus archivos" → Stock) is a bridge, not a dead end. Importing it into "Lo que tienes" is a natural next step.
- **Every number must be right and explainable.** One wrong stock or profit figure loses her (affinity map, theme 6). Show where a number comes from ("Vendiste $X y te costó $Y") and log every change so she can check it.
- **Leave room in the design for** bundles (packs or combos), made-to-order items (paid now, delivered later) and one stock shared across several channels. These are not built yet, but screens should not make them hard to add.

## The vibe

*The vibe words come from the owner's vibe picker. The other three of the first four lines are proposed from the research and still need the owner's approval.*

- **How my user should feel in the first 5 seconds:** calm and in control: "this is easy, and it's made for someone like me."
- **My 3–5 vibe words:** warm, playful, familiar, simple, trustworthy
- **It should NOT feel:** like accounting software, a bank, or a bot
- **If my app were a place, it would be:** a friendly neighborhood shop with a neat notebook on the counter, where the owner knows you by name

- **Colors I keep seeing on my board:** Marfil
- **Fonts or lettering I keep seeing:** Bubbly: round, friendly and bold

### Mood board search terms

Prompt: 10 search terms for a mood board for an app that feels warm, playful, familiar, simple, and trustworthy, including things outside of apps, like places, objects, and textures.

| # | Search term | What it's for | Where |
|---|---|---|---|
| 1 | "cuaderno de cuentas tienda de barrio" | Handwritten sales notebooks, matching the notebook lines | Pinterest |
| 2 | "toldo de bodega a rayas" | Striped shop awnings, matching the shop icon | Pinterest |
| 3 | "ivory paper texture black ink" | Marfil paper with dark ink | Pinterest |
| 4 | "sand beige minimal packaging" | The Arena accent, used sparingly | Not assigned |
| 5 | "friendly rounded typography poster" | More bubbly lettering like Baloo | Dribbble |
| 6 | "WhatsApp chat UI design inspiration" | The chat box for adding sales | Dribbble |
| 7 | "confetti celebration app micro-interaction" | The "sale saved" moment | Dribbble |
| 8 | "mercado latino hand-painted signs" | Warm, playful lettering from real places | Pinterest |
| 9 | "friendly fintech app beige black" | Money apps that look calm and trusted | Dribbble |
| 10 | "voice message UI waveform design" | The voice-note recording | Dribbble |

Pinterest is strongest for places and objects; Dribbble has better app designs. Terms 3 and 9 mention black: use them for dark mode and for ink only, because black surfaces stay out of light mode (see "Light and dark").

### Style choices

| Question | Choice |
|---|---|
| 1. Which colors feel like your app? | Marfil |
| 2. Which lettering feels friendly? | Bubbly |
| 3. Which shapes feel right? | Gently round |
| 4. What should the background feel like? | Notebook lines |
| 5. What should she see first when she opens the app? | Today's to-do |
| 6. How should money amounts look? | Big number |
| 7. How should the "who owes me" list look? | Notebook lines |
| 8. How should she start a new sale? | Chat box |
| 9. How should she move around the app? | Tabs at the bottom |

### The mockup

The home screen, from top to bottom:
- **Greeting:** a small shop icon, "¡Hola, Mariana!" in bubbly lettering, and "Mira cómo vas hoy".
- **Background:** Marfil with faint notebook lines.
- **"Para hoy" card:** white and gently round, with a checklist: "Cóbrale a Rosa ($180)", "Pide 2 labiales rojos", "Sube el precio de la crema".
- **"Ganaste esta semana" card:** white, with one big bold number ($1,240).
- **Chat box near the bottom:** "Pega o dicta una venta…" with a round microphone button.
- **Bottom tabs:** Inicio, Cobrar, Stock, Ganancia, each with a small icon.

**What the app took from the mockup:** the look (Marfil, notebook lines, Baloo 2 and DM Sans, the big number, terracotta for money owed). Not the layout: the app keeps its three tabs in the header (Anotar, Todo en un lugar, Conectar), the structure sellers already know.

## Personality

Warm, friendly and trustworthy, like a neat notebook kept by someone who has everything under control. The seller should feel organized and capable, never judged. Plenty of space, few things on screen at once, one clear action per screen.

## Light and dark

The site always has both, and follows the phone's setting. **In light mode, black is for ink, not for surfaces:** text, big numbers and main buttons are Negro, but the background, header, cards and tabs are never black. Whole black surfaces belong to dark mode. Every new color needs both a light and a dark value.

## Color palettes

### 1. Marfil (light site)

Feels like: an elegant notebook. Calm and on brand.

| Color | Hex | Share | Used for |
|---|---|---|---|
| Marfil | `#F3ECDC` | 40% | Background, the notebook page |
| Negro | `#111111` | 30% | Text, big numbers, main buttons |
| Blanco | `#FFFFFF` | 15% | Cards |
| Terracota | `#9A4F36` | 8% | Money owed |
| Arena | `#C9B48F` | 7% | Notebook lines, accents, awning icon (never text) |

### 2. Noche arena (dark site)

Feels like: a shop at night. Premium and easy on the eyes.

| Color | Hex | Share | Used for |
|---|---|---|---|
| Negro | `#111111` | 45% | Background |
| Marfil | `#F3ECDC` | 30% | Text and numbers |
| Carbón | `#1D1D1C` | 12% | Cards |
| Arena | `#C9B48F` | 8% | Main buttons, with black text |
| Terracota claro | `#D9896A` | 5% | Money owed |

### Supporting colors

These are not in the palettes but the app still needs them:

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--secondary` | `#E6DAC0` | `#2B2925` | Selected states, pills, the offline bar |
| `--muted` | `#EAE1CC` | `#2B2925` | Quiet surfaces |
| `--muted-foreground` | `#4C5A62` | `#9AA7AE` | Hints and small labels |
| `--paid` | `#5B7046` | `#A9BE8E` | Paid in full, always with ✓ |
| `--icon-people` | `#5B3F8F` | `#C4B5FD` | A people icon. Not used in the app right now |
| `--destructive` | `#A12E2A` | `#E07A6F` | Real errors and losses. Never money owed |
| `--border`, `--input` | `#DDD3BF` | `#2F2D29` | Lines and form fields |
| `--ring` | `#4C5A62` | `#C9B48F` | Focus outline |
| `--notebook-line` | Arena at 35% | Arena at 20% | The notebook lines |

**`tokens.css` is the single source of truth.** The page `/styleguide/` shows every token and piece, read live from `tokens.css` and the app's CSS. Every page links it, so a color, font or corner changes in that one file. Never write raw hex in a page. Emails, `theme-color` tags and `manifest.webmanifest` can't read CSS variables, so they repeat the same hex by hand.

Money owed uses `--owed`, never `--destructive`. Never color alone: owed amounts also say "debe", paid sales show ✓.

## How to use the colors

The values live in `tokens.css`. If a hex in this file ever disagrees with it, `tokens.css` wins.

- `--primary`: main buttons and key highlights only.
- `--accent`: small highlights and details. Never text in light mode.
- `--muted` and `--muted-foreground`: quiet surfaces and secondary text.
- `--owed`, `--paid`, `--destructive`: status and errors only.
- All text meets WCAG AA: 4.5:1 for body, 3:1 for large text.
- Every screen works in light and dark mode.

## Font pairing

### Baloo 2 + DM Sans

Feels like: fun on top, serious underneath. Best for screens with lots of numbers (who owes, profit, stock); DM Sans keeps tables and lists neat.

| Font | Used for |
|---|---|
| **Baloo 2**, 500–800 (`--font-heading`) | Headings and numbers, logo, plan names and prices |
| **DM Sans**, 400, 500, 700 (`--font-body`) | Body: text, buttons, lists, small labels |

Both are self-hosted in `fonts/`, never loaded from Google Fonts (see `legal/politica-de-cookies.md`).

### Rules for any pairing

- Maximum 2 fonts.
- Money amounts use the `.money` helper: Baloo 2, weight 800, same-width numbers. List numbers use `.num`, also in Baloo 2, because this DM Sans file has no same-width digits.
- Minimum body size 16px on phones, because many sellers read without glasses.
- No all-caps for long text; small labels like "QUIÉN TE DEBE" can be caps with a little letter spacing.

Everything you read is 16px. Only caps labels and tags (12px), and small print and compact controls such as the weather, footer, language and "Mi negocio" buttons (14px), are smaller.

## Type and spacing scales

- **Type scale:** 12 / 14 / 16 / 20 / 24 / 32 / 48. Body text 16px minimum, line height 1.5.
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48.
- **Corners:** radius tokens only, no custom values.

The app uses only the type scale: 12 labels, 14 small print, 16 body, 20 h2 and card numbers, 24 h1 and money stats, 32 plan names, 48 the big number (32 when the amount is longer than 11 characters). **Not in the app yet:** the spacing scale; the app still has gaps such as 10px and 14px.

## Layout

- **Phone first.** Content column max 560px, 16px side padding. No sideways scrolling, ever: check at 360px wide.
- **Background:** notebook lines on every page (`.bg-notebook`), 28px apart, in light and dark.
- **Header:** sticky, 56px high, same color as the page. Left: logo with the weather under it (they never shrink). Right: "Mi negocio", "Salir", ES/PT/EN (smaller under 440px).
- **Three tabs in the header,** under the logo, small caps words with an Arena line under the open one:

| Tab | What's on it |
|---|---|
| **Anotar** | Install card, "Anotar una venta", the sale box with "Leer venta" and the voice button, examples, the confirm card, recent sales |
| **Todo en un lugar** | "Cómo te va" (week or month): the big number, sales, who owes; "Tu asistente"; "Quién te debe" in notebook lines; "Lo que tienes"; "Tus archivos"; best sellers and where she sells |
| **Conectar** | Her sales channels and what VendeAI can read from each |

The app always opens on Anotar.

- **Sale box:** a full-width box in the page, not fixed. "Leer venta" is the main button; "Grabar nota de voz" sits next to it when the phone can record.
- **Shapes:** gently round, from `--radius` (12px): `--radius-sm` 8px, `--radius-md` 10px, `--radius-lg` 12px, `--radius-xl` 16px. Buttons use lg; cards and panels use xl; chips and pills are fully round. No shadows.

## Pieces

| Piece | Look |
|---|---|
| **Main button** (`.btn`) | `--primary` fill, `--radius-lg` corners, weight 700. One per screen if possible. Disabled = 45% opacity |
| **Second button** (`.btn.ghost`) | No fill, thin border, gray text |
| **Text link button** (`.linkbtn`) | No border, small (Abrir, Borrar, Reintentar) |
| **Card / panel** | `--card`, 1px `--border` border, `--radius-xl` corners |
| **Big number** (`.stat.big`) | Card with an uppercase label and a 48px `.money` number (32px for long amounts): the number that matters most |
| **Sale box** (`#saleText` + `.row-actions`) | White box, `--radius-lg`. "Leer venta" (`.btn`) and "Grabar nota de voz" (`.btn.ghost.mic`). Ctrl+Enter reads. While recording: the box pulses, shows the time, the voice button becomes "Detener y enviar" and "Cancelar" appears |
| **Chips** | Round, thin border; selected = `--primary` fill |
| **Pill** | Small round `--secondary` tag: "Se está acabando", "Agotado" |
| **Example buttons** | Dashed border, full width, tap to try |
| **Wallet drop zone** (`.drop`) | Dashed box with an Arena wallet across its bottom edge. The file drops into the wallet while uploading; it shuts with a `--paid` ✓ when saved. Tap or drag. A pill above counts saved files |
| **Toast** | Strip at the bottom of the screen for 3.5 s: "Listo: archivo guardado." |
| **Overlay** (sign-in, "Tu negocio", plans) | Full screen, one column, one main button |
| **Plan suggestion** (`.pl-sug`) | Card with an Arena border and the plan name in Baloo 2 2rem |

## Images and icons

- Only own, licensed or public-domain images, each logged in `legal/image-licenses.md`. No brand logos (no WhatsApp, Instagram or bank logos).
- App icons are in `app/icons/`; the share preview is `og-image.png` (1200×630).
- No stock photos of people. Prefer real app screens or simple shapes in the brand colors.

## Emails

Same brand in a simpler form, light only, because email apps do not load our fonts: white header with "VendeAI" in Trebuchet MS, Marfil background, white card, Trebuchet MS headings, Arial text in Gris azulado, one round Negro button. Max width 520px. Templates: `api/_email.js` and `api/_marketing.js`.

## Accessibility

- Text contrast at least 4.5:1 (that's why Arena is never body text on ivory).
- Everything works with a tap target of at least 40px high and with the keyboard; focus shows a 2px outline.
- Warnings never rely on color alone: they also have words ("Se está acabando", "3 días de atraso").
- Status updates (toasts, upload messages, weather) use `role="status"` so screen readers announce them.

## Do and don't

**Do**
- Reuse the pieces shown on `/styleguide/`.
- Add every new piece to `/styleguide/`.

**Don't**
- Hardcode colors, fonts or sizes.
- Add font sizes outside the scale.

## Before you ship a design change

1. Check light **and** dark mode.
2. Check at 360px and 412px wide (common Android phones), with the signed-in header buttons showing.
3. Check Spanish and Portuguese: Portuguese words are often longer.
4. Bump `APP_VERSION` in `app/index.html` and `VERSION` in `app/sw.js`.
5. Run `/demo-check`.

## Free resources

| For | Where | Why |
| --- | --- | --- |
| Fonts | [Fontsource](https://fontsource.org) | Self-hosted files, so nothing loads from Google. Check that each font is OFL |
| Font licenses | [Open Font License](https://openfontlicense.org) | Confirms a font is free for a paid app |
| Contrast | [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) | Tests any color pair against the 4.5:1 rule |
| Icons | [Tabler Icons](https://tabler.io/icons) | MIT license, one drawn style that takes token colors. Not in the app yet |
| Inspiration | [Figma Community](https://www.figma.com/community), [Dribbble](https://dribbble.com) | Ideas only. Never copy a design or its assets |

## Open questions

- **Logo in Arena:** Arena is "never text", but the logo is letters, and Arena on Marfil is very faint (1.7:1). Keep "Vende" in Negro and only "AI" in Arena, or make the logo Negro in light mode?
- Where does **#10 Import an Excel sheet** go: Quick wins or Big bets? It is in Build now but in neither group.
- Is **The vibe** draft approved? Its first four lines were proposed from the research.
- Do **paid plans** need a voice-note limit? The Decision says "get more"; for now there is no limit.
- Do sellers need a **light/dark button**, or is following the phone's setting enough?
- **Interviews:** 3 of 8 done. Still needed: catalog/direct sellers (the main segment) and sellers who rely heavily on credit.
