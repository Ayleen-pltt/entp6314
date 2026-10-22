# PRD: VendeAI

**PRODUCT:** VendeAI, a phone-first app that brings everything a seller sells into one place (every channel, every customer, every product) and uses that full picture to tell them what to do next.

**USER:** A seller in Latin America with no business background: a catalog seller, a reseller, or anyone selling through WhatsApp, social media, or in person.

**PROBLEM:** These sellers keep sales in notebooks, in their memory, or in WhatsApp chats. They sell on credit and in installments, and they forget direct costs like shipping when they set prices. Apps exist for each piece: one for stock, one for debts, one for price, one for promo posts. None of them puts it all together, so the seller still has to work out alone who to chase, what to restock, and what to raise. Those apps also use forms and business words, so sellers give up on them.

**CORE USER STORY:** As a seller, I can tell the app about each sale the way I'd tell a friend, so that every morning it tells me, in plain words, who to remind, what to restock, and what to change, with the message or action ready in one tap.

## What makes it different

Each feature on its own already exists in other apps. VendeAI's value is the **bundle**: sales, stock, costs, debts, and channels live together, so the assistant can connect them. "Carla owes you 22, it's been 12 days, here's a polite message" needs the debt, the date, and the customer's phone. "Restock lipstick before Friday" needs the sales pace and the stock. A single-purpose app can't give these nudges because it only sees one piece.

## Plain-language rule

Every screen uses everyday words in the seller's language. No business or technical terms.

| Instead of | Say (Spanish) | Say (Portuguese) |
|---|---|---|
| Margen / utilidad · Margem / lucro | Lo que ganaste | O que você ganhou |
| Cuentas por cobrar · Contas a receber | Quién te debe | Quem te deve |
| Inventario · Estoque | Lo que tienes | O que você tem |
| Costo unitario · Custo unitário | Lo que te costó | Quanto te custou |
| Rotación baja · Baixo giro | Se vende poco | Vende pouco |

A Brazilian seller should check the Portuguese words before launch.

## Languages

- The app supports **Spanish and Portuguese** from day one, plus **English** for presenting the app to non-Spanish speakers. The legal documents exist only in Spanish for now. The seller picks a language the first time they open the app and can change it in Ajustes.
- Every piece of screen text lives in one translation file per language, never written directly into the screens, so adding a language later means adding one file.
- The AI reads sale messages and voice notes in either language and writes nudges and WhatsApp messages in the seller's language.
- **Launch order:** Spanish first. Portuguese, and with it Brazil and Pix, is switched on once the Portuguese legal documents have been reviewed by a Brazilian lawyer.

## The three screens

1. **Anotar una venta.** The seller types or records a message, for example: "Vendí 2 labiales a María, pagó la mitad y el resto el viernes." The app shows a confirm card with product, size and color, quantity, price, customer, channel (WhatsApp, Instagram, Facebook, in person, catalog), how much was paid, how much is owed, and when it's due. If the product or customer is new, the card offers to add it on the spot: stock and cost for a product, phone number for a customer. One tap saves it.
2. **Todo en un lugar.** One home screen with what you really earned this week (sales minus all direct costs), who owes you and how much, what you have in stock, your best sellers, and sales by channel. Tapping any part opens the detail.
3. **Lo que te toca hoy.** A short list of nudges, each in plain words and each with one action ready to tap:
   - **Cobrar:** a payment is due or late → a polite WhatsApp reminder, ready to send.
   - **Reponer:** stock is running low → how many to buy.
   - **Precio:** a product's price is below, or too close to, its real cost → a suggested price.
   - **Promocionar:** a product isn't selling → a ready-to-post promo message.
   - **Buenas noticias:** the product that earns the most per sale, or a customer who paid everything.

## First use

1. **Language:** Spanish or Portuguese.
2. **Sign-up:** nickname, one phone or email, country, and two separate checkboxes (terms, privacy).
3. **Tu negocio**, a required form with taps only. It asks what you sell (with an "Otro" box), where you sell, whether you sell on credit or wholesale, how you get paid (options for your country, plus "Otro"), and up to two things that are hardest for you. The app is built from these answers:
   - **What you sell:** sets the starter products, the example sales, and the hint text.
   - **Where you sell and how you get paid:** only those channels and payment methods appear.
   - **Credit:** if you don't sell on credit, "who owes you" is hidden unless someone owes you.
   - **Wholesale:** adds a wholesale price to products.
   - **Hardest things:** the matching panels come first in "Todo en un lugar".
   - **Recommendations:** "Lo que te recomendamos" suggests the paid modules that fit, with the reason for each.

   The seller can change the answers anytime with the "Mi negocio" button in the header.

## Default rules

The app uses these rules unless the seller's message says otherwise.

- **Reponer** shows when a product has **3 or fewer** left.
- **Precio** shows when the price is **less than 20% above the real cost**. For example, a product that costs 10.00 to sell at 11.50.
- **Promocionar** shows when a product has had **no sale in 14 days**.
- **Installments:** when a message says "en N cuotas" (Portuguese: "em N vezes" or "em N parcelas") without dates, the debt is split into N equal **weekly** payments, the first due **7 days** after the sale.
- **Wholesale vs. retail:** a sale uses the **retail** price unless the message says "por mayor" (Portuguese: "no atacado").

## Plans

- **Free forever:** recording sales, the "Todo en un lugar" screen, and the Cobrar and Reponer nudges.
- **Paid modules: the seller pays only for what they use.** There are at most three modules, each named by what it does, never by a plan level:
  - **Cobrar:** ready-to-send payment reminders for every customer who owes.
  - **Precios:** Precio nudges with suggested prices.
  - **Vender más:** Promocionar nudges with promo messages, and restock advice before a catalog campaign.
- **Pricing:** each module costs [$X] a month, and all three together cost less than buying them separately. Charged in local currency through options like Mercado Pago, Pix, OXXO, or Yape. The prices are to be set once payment fees per country are known, since a very small charge may be eaten by fees.
- **No add-on creep:** no more than three modules, and nothing that is free today is ever moved into a paid module.

## Features (build in this order)

1. **M1. Anotar una venta:** a typed message becomes a confirm card. Confirming saves the sale, updates stock, and records any amount owed. New products and customers can be added from the card. Includes the language picker, with all screen text in Spanish and Portuguese translation files.
   Done means: the three test messages below, in either language, produce the expected cards and stock, and switching the language changes every word on screen.
2. **M2. Todo en un lugar:** the home screen, built from the saved sales.
   Done means: after the three test messages, the totals match the test case below.
3. **M3. Lo que te toca hoy:** the nudge list, built from the same data, with one action per nudge. The app decides which nudges to show and calculates every number. The AI only writes the wording and the messages.
   Done means: after the three test messages, the three expected nudges below appear, and tapping the Cobrar nudge opens WhatsApp with a polite message to María.
4. **M4 (stretch). Voice and learning:** record a voice note instead of typing. Remember each seller's usual customers and payment methods, and which nudges they act on or skip, so the list gets more useful over time.
   Done means: saying test message 1 out loud gives the same card as typing it, and a nudge type the seller skipped three times moves down the list.

## Test case

Today is Thursday. Starting products:

| Product | Stock | Real cost | Retail price |
|---|---|---|---|
| Labial rojo | 10 | 3.00 | 6.00 |
| Crema hidratante | 5 | 8.00 | 15.00 |
| Blusa azul talla M | 4 | 10.00 | 22.00 |

Messages and expected results:

1. "Vendí 2 labiales rojos a María, pagó la mitad y el resto el viernes" → total 12.00, paid 6.00, María owes 6.00 due Friday, labial stock 8.
2. "Le vendí una crema a Ana por Instagram, pagó completo" → total 15.00, paid 15.00, channel Instagram, crema stock 4.
3. "Blusa azul talla M a Carla, 22, me paga en 2 cuotas" → total 22.00, paid 0.00, Carla owes 22.00 in two weekly payments of 11.00, the first due next Thursday, blusa stock 3.

The same three messages in Portuguese must give exactly the same results:

1. "Vendi 2 batons vermelhos para a Maria, ela pagou metade e o resto na sexta"
2. "Vendi um creme para a Ana pelo Instagram, pagou tudo"
3. "Blusa azul tamanho M para a Carla, 22, ela me paga em 2 vezes"

After all three, the home screen shows: sales 49.00, direct costs 24.00, **lo que ganaste 25.00**, **te deben 28.00** (María 6.00, Carla 22.00).

Expected nudges:

- **Cobrar:** "María te paga 6.00 mañana." Action: open WhatsApp with a reminder.
- **Reponer:** "Te quedan 3 blusas azules talla M." Action: see how many to buy.
- **Buenas noticias:** "La blusa azul es la que más te deja: 12.00 por venta."

## Rules for the AI

- The app does all the math and picks which nudges to show. The AI only reads sale messages and writes text, so it never invents a number.
- Nothing is saved until the seller confirms the card.

## Keeping the numbers right

Wrong stock and profit numbers are the top complaint about competing apps, so these rules apply to every sale:

- **Never guess.** If a price, quantity, or customer is missing from the message, the card asks for it instead of filling it in.
- **Pick, don't type.** Products and customers are matched against the seller's own list, and the seller taps the right one ("Labial rojo, quedan 10").
- **Show the effect.** The card shows what will change before confirming: "Stock: 10 → 8. María te deberá 6.00."
- **Easy undo.** Any sale can be undone for 24 hours.
- **Weekly stock check.** Once a week, a 30-second question: "¿Te quedan 8 labiales?" A "no" fixes the stock and is logged.
- **Change history.** Every change to stock or debts is logged with date and reason, and the seller can see it.
- **Accuracy target.** Before launch, run 200 real seller messages through the app. If sellers must fix more than 1 card in 10, the message reader isn't ready.
- Messages to customers are never sent automatically. The seller always presses send.

## Legal requirements

Details are in [legal/compliance-checklist.md](legal/compliance-checklist.md).

- **Documents:** [Términos](legal/terminos-y-condiciones.md), [Privacidad](legal/politica-de-privacidad.md), [Cookies](legal/politica-de-cookies.md), and [Reembolsos](legal/politica-de-reembolsos.md), linked from a "Legal" section in Ajustes. Each one is shown in the seller's language, and the Portuguese versions are needed before the Brazil launch.
- **Two separate checkboxes,** unchecked by default, with a link next to each, on the create-account form and the paid-plan form. One is for the terms and one is for the privacy policy. Submit stays disabled until both are checked.
- **Consent record:** each acceptance is saved with the document version, date and time, form, and method, and is never edited. This needs a server, so it is required before launch but not in the prototype.
- **Minimum data:** only a nickname, one phone or email, and country from the seller. No ID, birth date, or address. Voice notes are deleted after they become text.
- **No non-essential cookies or trackers,** so no cookie banner is needed. Use system fonts, not the Google Fonts CDN.
- **Images:** only own, licensed, or public-domain images, each logged in `legal/image-licenses.md`. No brand logos.

## Out of scope

Real payment processing, sending messages through the WhatsApp API, bank connections, taxes and invoices, accounting reports, several users sharing one store, currency conversion, and languages other than Spanish and Portuguese.

## Data we store

Sellers. Each seller has products, customers, sales, and nudges. Each product has a name, size or color, stock, every direct cost, and retail and wholesale prices. Each customer has a name, a phone number, and what they still owe. Each sale has a date, a customer, a channel, the products sold, how much was paid, and how much is still owed and when. Each nudge records what it suggested and whether the seller acted on it or skipped it.

For the prototype, nothing is on a server. Everything is kept in the browser between visits.
