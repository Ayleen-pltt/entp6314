# Spec audit: VendeAI

**Sources read:** [`Vende AI/prd.md`](../prd.md), the version updated for the bundle-plus-nudges approach, and [`research/competitors-vendeai.md`](../../research/competitors-vendeai.md). The file `research/competitors.md` belongs to the supplier-card project, so I used the VendeAI version instead.
**Rule:** quotes come from `prd.md` unless a different file is named. Anything I worked out myself rather than read is marked **[INFERRED]**. This file gives no advice.

---

## 1. The user

> "A seller in Latin America with no business background: a catalog seller, a reseller, or anyone selling through WhatsApp, social media, or in person."

This is a **broad category, not one identifiable group.** The quote itself names at least three kinds of seller:

- **Catalog sellers.** "Catalog campaign" appears in the "Vender más" module. **[INFERRED]** These sellers buy from one brand and sell on that brand's campaign cycle.
- **Resellers.** **[INFERRED]** These sellers buy from various suppliers and set their own prices.
- **Anyone selling through WhatsApp, social media, or in person.** This covers any product category and any channel.

The category also spans:

- **Many countries.** It covers "Latin America," with no country named. The payment options listed, "Mercado Pago, Pix, OXXO, or Yape," point to at least Brazil, Mexico, and Peru. **[INFERRED]**
- **Retail and wholesale.** Products carry "retail and wholesale prices," so some users also sell to other sellers. **[INFERRED]**

The only things every user shares are "no business background" and "sells on their own."

---

## 2. Where the work happens

| Feature | What VendeAI does itself | What the user still does by hand or in another tool |
|---|---|---|
| **M1. Anotar una venta** | Reads a typed message and fills a confirm card. On confirm, it saves the sale, updates stock, and records the amount owed. It offers to add a new product ("stock and cost") or a new customer ("phone number") from the card. | Makes the sale somewhere else (WhatsApp chat, Instagram, in person), then **types it again** into VendeAI. Checks the card and taps confirm. Types in stock, costs, and phone numbers the first time each one appears. Collects the money outside the app. **[INFERRED]** |
| **M2. Todo en un lugar** | Builds one home screen with "what you really earned this week," "who owes you," "what you have in stock," "best sellers," and "sales by channel." | Checks cash or a bank app to see whether a customer actually paid, then records it. Buys new stock elsewhere. **[INFERRED]** |
| **M3. Lo que te toca hoy** | Decides which nudges to show and calculates every number in them ("The app decides which nudges to show and calculates every number"). Has the AI write the wording, the payment reminders, and the promo messages. Prepares one action per nudge. | Sends every message: "The seller always presses send." Posts promos on social media. Changes prices wherever customers see them (catalogs, posts, WhatsApp status). Buys the restock. **[INFERRED]** |
| **M4. Voice and learning** | Turns a voice note into the same card. Remembers "usual customers and payment methods, and which nudges they act on or skip," and moves skipped nudge types down the list. | Records the note inside VendeAI. **[INFERRED]** The spec doesn't say whether voice notes already sent in WhatsApp can be forwarded in. |

**Pattern [INFERRED]:** the sale, the payment, and the customer conversation still happen outside VendeAI. What changed with this version is the step after recording. Before, the seller read the numbers and decided what to do. Now VendeAI makes that decision and hands over a ready action, and the seller only carries it out in WhatsApp or another tool.

---

## 3. What we hold

**Held inside the product** (from "Data we store"):

- **Products:** "name, size or color, stock, every direct cost, and retail and wholesale prices."
- **Customers:** "a name, a phone number, and what they still owe."
- **Sales:** "a date, a customer, a channel, the products sold, how much was paid, and how much is still owed and when."
- **Nudges:** "what it suggested and whether the seller acted on it or skipped it."
- **Seller habits:** "usual customers and payment methods" (M4).

**Where it is held:** "For the prototype, nothing is on a server. Everything is kept in the browser between visits." **[INFERRED]** So in the prototype, all of this sits on the seller's own device, and the company holds none of it.

**Passed through, apparently not kept** (the spec does not say either way):

- The typed messages and voice notes the seller sends to create a sale.
- The text of the drafted reminders and promo messages, which go to WhatsApp. The spec keeps whether a nudge was acted on, but not the message itself.

---

## 4. Does it get better with use

- **For one user: yes, and the spec says so directly.** M4: "which nudges they act on or skip, so the list gets more useful over time." **[INFERRED]** More recorded sales also make Reponer ("at this week's pace") and best-seller nudges more accurate for that seller.
- **For everyone as more people join: nothing in `prd.md` says so.** **[INFERRED]** Data lives in each seller's browser, so nothing is pooled across sellers. The seller's customers receive messages but never use the app, so there is no network between users either.

---

## 5. Who we depend on

| Dependency | Where `prd.md` implies it | Could a competitor buy the same thing? |
|---|---|---|
| **An AI language model** to read sale messages and write nudges and messages | "The AI only reads sale messages and writes text." The model is not named. | **Yes [INFERRED].** Language models are sold to anyone. Kyte already sells an AI "Smart Assistant" in its $19.99 Prime tier (`competitors-vendeai.md`). |
| **Speech-to-text** | M4: "record a voice note instead of typing" | **Yes [INFERRED].** It is sold as a commodity service and is also built into browsers and phones. |
| **WhatsApp (Meta)** | M3: "opens WhatsApp with a polite message to María"; WhatsApp is also a sales channel | **Yes [INFERRED].** Any app can open a WhatsApp chat with a prefilled message. Meta also runs its own free "Seller" app with AI pricing help (`competitors-vendeai.md`). |
| **Instagram and Facebook** | Channel labels on a sale; promo messages are posted there | **Yes [INFERRED].** No integration is described. |
| **Local payment providers** to bill the paid plans | "Mercado Pago, Pix, OXXO, or Yape" | **Yes [INFERRED].** These are open to any registered business. |
| **The browser** for storage | "Everything is kept in the browser between visits." | **Yes.** |
| **A source of catalog campaign dates** | "Vender más" module: "restock advice before a catalog campaign" | **Unknown.** `prd.md` does not say where this information comes from. |

---

## 6. What we ruled out

Quoted list: "Real payment processing, sending messages through the WhatsApp API, bank connections, taxes and invoices, accounting reports, several users sharing one store, currency conversion, and languages other than Spanish and Portuguese."

| Parked item | What VendeAI cannot do while it stays parked |
|---|---|
| Real payment processing | It can't take money from customers. "Paid" only means the seller recorded it, so a Cobrar nudge can't tell whether the money already arrived. |
| WhatsApp API | It can't read sales from the seller's chats or send reminders by itself. Every sale is retyped and every nudge's message is sent by hand. |
| Bank connections | It can't see transfers, so it can't close a debt or clear a Cobrar nudge by itself. |
| Taxes and invoices | It can't issue receipts or invoices. **[INFERRED]** A seller who needs to formalize needs another tool. Treinta offers electronic invoicing (`competitors-vendeai.md`). |
| Accounting reports | It can't produce statements a seller could show a lender or an accountant. **[INFERRED]** |
| Several users sharing one store | A seller with a helper, or a catalog leader with a team, can't share one record or one nudge list. |
| Currency conversion | **[INFERRED]** It can't handle a seller who buys stock in one currency and sells in another, so Precio nudges would be wrong for them. |
| Languages other than Spanish and Portuguese | It can't serve sellers who prefer English or an Indigenous language such as Quechua or Guaraní. **[INFERRED]** Brazil is covered, but only once "the Portuguese legal documents have been reviewed." |

---

## GAPS

Things the six questions ask about that `prd.md` does not answer:

1. **Which seller first.** There is no country, no product category, and no choice between catalog seller, reseller, and social seller.
2. ~~Whether raw messages and voice notes are kept.~~ **Closed:** voice notes are deleted after transcription, and text is deleted once the card is confirmed (`legal/politica-de-privacidad.md` §3).
3. **Where data lives after the prototype.** It is unclear whether there is a server, who can see the data, and whether the seller can export it or move it to a new phone.
4. **Accounts and devices.** Login is not mentioned, so it is unclear what happens if the seller changes or loses their phone, along with their whole history and nudge record.
5. **Which AI model and speech service,** and what each sale message and each day's nudges cost to process.
6. **Where catalog campaign dates come from.**
7. **Billing for paid plans.** Plans and prices appear, but billing is in no milestone and not on the out-of-scope list.
8. **Learning across sellers.** The spec doesn't say whether the nudges are meant to get better for everyone, or only for each seller.
9. **Offline use.** It isn't mentioned, although it is a top complaint about Treinta (`competitors-vendeai.md`).
10. ~~Language vs. market.~~ **Closed:** the app now supports Spanish and Portuguese ("Languages" in `prd.md`), so Pix and Brazil fit. Spanish launches first.

**Closed since the first audit:**
- How products get in: now added from the confirm card.
- Customer phone numbers: now stored.
- Nudge thresholds, installment dates, and wholesale vs. retail: now set in `prd.md` under "Default rules." Reponer fires at 3 or fewer left, Precio below 20% over cost, and Promocionar after 14 days with no sale. Installments are weekly, starting in 7 days. Sales use retail unless the message says "por mayor."
