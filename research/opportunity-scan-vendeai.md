# Opportunity Scan: VendeAI (AI Business Assistant for Informal Sellers)

**Concept under test:** a phone-first AI assistant for people who sell products through WhatsApp, Instagram, Facebook, marketplaces, or in person. Sellers type or say things like "I sold 3 dresses for $40 each", and the app records the sale, tracks inventory and profit, suggests prices, and writes marketing posts.

**Method:** web search and direct page fetches, 2026-09-29. Every claim has a source link. Anything I could not confirm on the source page is marked **[UNVERIFIED]** and repeated in the flags section at the end. Reddit and G2 blocked my tools again (details in the flags section), so the complaints come from the Apple App Store, Capterra, and Trustpilot.

---

## 1. Who has this problem, and how many?

There is no official count of "people who sell products from their phone." I built the estimate from several partial counts.

### Global and regional counts

| Population | Count | Source | Notes |
|---|---|---|---|
| Workers in informal employment worldwide | **2.019 billion (2023)** | [ILO Director-General remarks, WESO Trends 2024](https://www.ilo.org/resource/statement/world-employment-and-social-outlook-trends-2024-ilo-director-generals) | Outer bound only. Most are not product sellers. |
| WhatsApp Business app monthly active users | **200 million (June 2023)**, up from 50 million in 2020 | [TechCrunch, 2023-06-27](https://techcrunch.com/2023/06/27/whatsapp-business-crosses-200m-maus-introduces-personlized-messages-feature/) | Best single proxy for "businesses that sell over chat." It also includes service businesses. This is the latest figure Meta has confirmed. |
| Facebook Marketplace monthly users | **"over a billion"**, with 430 million items listed each month | [Engadget, 2026-07-24, quoting Meta](https://www.engadget.com/2222363/meta-launches-storefront-platform-facebook-marketplace-seller/) | These are buyers plus sellers. Many listings are one-off used items, not businesses. |
| Latin American microbusinesses | **50 million, 90% still on paper** | [TechCrunch, 2021-02-11, quoting Treinta co-founder](https://techcrunch.com/2021/02/11/treinta-announces-500k-in-funding-for-its-microbusiness-financial-app/) | **[UNVERIFIED]** This is a founder's pitch number, not a survey. |

### U.S. counts

| Population | Count | Source |
|---|---|---|
| Nonemployer businesses (no paid staff) | **29.8 million (2022)** | [U.S. Census Bureau, 2025](https://www.census.gov/library/stories/2025/05/smallest-businesses.html) |
| Direct sellers (catalog, party-plan, and similar) | **5.4 million (2024)** | [Direct Selling News on the DSA 2025 Growth & Outlook study](https://www.directsellingnews.com/2025/08/28/dsa-releases-2025-growth-outlook-study-results/) |
| Etsy active sellers | **5.6 million (end of 2025)** | [Etsy Q4 2025 results](https://investors.etsy.com/news-events/press-releases/detail/218/etsy-inc-reports-fourth-quarter-and-full-year-2025-results) |

### My estimate (reasoning, not a measured figure)

- **Global ceiling for chat-based sellers: about 200 million.** WhatsApp Business is the tool this segment uses most, and it has about 200M monthly users. I found no source on what share of them sell products rather than services. **[UNVERIFIED share]**
- **U.S. core segment: roughly 8–11 million.** Direct sellers (5.4M) and Etsy sellers (5.6M) are the two groups I could count that clearly hold product inventory. The groups overlap, so the true number is below 11M. Instagram and Marketplace resellers are not counted here because I found no reliable count of them.
- **Latin America looks like the strongest first market** if the 50M / 90%-on-paper claim is even partly true. Treinta already reports serving 7 million SMBs across the U.S. and Latin America ([Y Combinator profile](https://www.ycombinator.com/companies/treinta)), which shows the demand is real and can be reached.

---

## 2. What do they use today?

| Tool / workaround | What it does for this seller | Source |
|---|---|---|
| **Paper notebooks** | Still the default in Latin America, if the Treinta figure is right | [TechCrunch 2021](https://techcrunch.com/2021/02/11/treinta-announces-500k-in-funding-for-its-microbusiness-financial-app/) **[UNVERIFIED]** |
| **Excel / Google Sheets templates** | Home-made or bought ledgers; Etsy sells bookkeeping templates for this | [Etsy template listing example](https://www.etsy.com/listing/1352726291/small-business-accounting-excel-template), [QuickBooks on Excel vs. software](https://quickbooks.intuit.com/r/accounting-taxes/shouldnt-use-excel-accounting/) |
| **WhatsApp Business app** | Free catalog, labels, and quick replies. It does not track profit or stock. | [TechCrunch 2023](https://techcrunch.com/2023/06/27/whatsapp-business-crosses-200m-maus-introduces-personlized-messages-feature/) |
| **Meta "Seller" app (new, July 2026)** | Marketplace sales management. AI writes listings from photos, including a **suggested price**. U.S. only for now. | [Engadget, 2026-07-24](https://www.engadget.com/2222363/meta-launches-storefront-platform-facebook-marketplace-seller/) |
| **Meta AI Marketplace features (2026)** | AI listings, AI auto-replies to buyers, shipping labels. No sign of profit or inventory tracking. | [ALM Corp summary](https://almcorp.com/blog/facebook-marketplace-meta-ai-features-2026/) |
| **Treinta** | Sales, expenses, inventory, and digital catalog for microbusinesses. Now charges for basic use (see complaints). | [Y Combinator](https://www.ycombinator.com/companies/treinta), [App Store](https://apps.apple.com/us/app/treinta/id1644703591) |
| **Kyte** | WhatsApp/Instagram order center, catalog link, cost and price, daily profit, top products, and an AI "Smart Assistant" that "analyzes real business data." Plans cost $9.99–$19.99 per month. | [Kyte WhatsApp sales page](https://www.kyteapp.com/selling/whatsapp-sales) |
| **Khatabook / Vyapar (India)** | Digital ledger (Khatabook), plus billing and inventory (Vyapar) | [Mooninvoice comparison](https://www.mooninvoice.com/blog/khatabook-vs-vyapar/) |
| **Square for Retail** | POS with unit cost, COGS, and margin reports. Built around a physical checkout. | [Square support: unit costs](https://squareup.com/help/us/en/article/6472-square-for-retail-reporting-faqs) |
| **Sortly** | Inventory tracking only. | [Capterra](https://www.capterra.com/p/169199/Sortly-Pro/reviews/) |
| **QuickBooks Solopreneur** | Income, expenses, and taxes. **No inventory management.** $20 per month. | [Merchant Maverick](https://www.merchantmaverick.com/reviews/quickbooks-self-employed-review/) |

**Key point for the proposal:** Kyte already sells most of the MVP (WhatsApp orders, cost/price/profit, inventory, catalog, and an AI assistant) at the same $10/month the proposal targets. Meta now suggests prices for free inside Marketplace. The open gap is narrower than the proposal assumes. It is mainly **chat-first data entry** (typing or speaking a sale instead of filling in forms) and **answers grounded in the seller's own numbers**. I could not test how good Kyte's assistant actually is.

---

## 3. Complaints about current solutions (13 quotes)

Spanish quotes are in the original; the English translations are mine. Reviews were read through a page-summarizing fetch tool, so spot-check the exact wording on the linked pages before quoting them in a deck.

**Paywalls on basic record-keeping (Treinta)**
1. "Malísima ahora toca pagar para registrar una venta" (*"Terrible, now you have to pay just to record a sale"*). Negocio-04, 18 Sep. [App Store Colombia](https://apps.apple.com/co/app/1644703591?see-all=reviews&platform=iphone)
2. "Ya no tiene sentido para mi usar una app donde tengo que pagar solo por registrar" (*"It no longer makes sense to use an app where I have to pay just to record things"*). Reyesj1. [App Store Colombia](https://apps.apple.com/co/app/1644703591?see-all=reviews&platform=iphone)
3. "10$ cada mes me parece exagerado" (*"$10 a month seems excessive to me"*). Rei2.56, 11 Sep. [App Store US](https://apps.apple.com/us/app/treinta/id1644703591?see-all=reviews&platform=iphone)

**Missing reports and lost data (Treinta)**

4. "No pierdan su dinero esta aplicación no tiene algo tan básico como un reporte" (*"Don't waste your money, this app doesn't even have something as basic as a report"*). Pedromigama. [App Store Colombia](https://apps.apple.com/co/app/1644703591?see-all=reviews&platform=iphone)
5. "Realmente era buena antes, solo que hicieron modificaciones y mucho de mi inventario se perdio" (*"It was really good before, but they made changes and a lot of my inventory was lost"*). DamarisFdz, April 22. [App Store US](https://apps.apple.com/us/app/treinta/id1644703591?see-all=reviews&platform=iphone)
6. "No actualiza, en la web deja hacer unas cosas y en la app toca otras" (*"It doesn't sync; the web lets you do some things and the app others"*). Jleosan87. [App Store Colombia](https://apps.apple.com/co/app/1644703591?see-all=reviews&platform=iphone)
7. "La aplícacion tiene problemas para generar el catálogo virtual y cuando lo reportas solo te dan espera sin solución" (*"The app has trouble generating the virtual catalog, and when you report it they just tell you to wait, with no fix"*). 2025-07-21. [App Store US](https://apps.apple.com/us/app/treinta/id1644703591?see-all=reviews&platform=iphone)

**Inventory numbers that drift (Square for Retail)**

8. "We constantly count and fix the inventory numbers in the system and within days they're wrong again." Rose F., Owner, Retail, 2022-09-28. [Capterra](https://www.capterra.com/p/170272/Square-for-Retail/reviews/)

**Fees and price hikes that squeeze thin margins**

9. "The flat-rate processing fees and monthly add-ons for essential tools like advanced marketing and loyalty programs begin to eat into tight margins." Samantha S., 2026-08-17. [Capterra: Square for Retail](https://www.capterra.com/p/170272/Square-for-Retail/reviews/)
10. "greedy price increases with little warning to existing customers." Heather D., Owner, Retail, 2025-06-27. [Capterra: Sortly](https://www.capterra.com/p/169199/Sortly-Pro/reviews/?page=2)
11. "the price increase which was more than doubled since we had starting paying." Cara G., 2025-06-13. [Capterra: Sortly](https://www.capterra.com/p/169199/Sortly-Pro/reviews/?page=2)
12. "I found it to be a little pricey, especially compared to the software I currently use." Red C., Owner, 2022-12-06. [Capterra: QuickBooks Solopreneur](https://www.capterra.com/p/212141/QuickBooks-Self-Employed/reviews/)

**Payments and support (Khatabook)**

13. "One of my coustomer pay me 650₹ via KHATABOOK QR code on 15/12/2022. I didn't get any notification or sms as usual." Vishnu kumawat, 1 star, 2022-12-19. [Trustpilot](https://www.trustpilot.com/review/www.khatabook.com)

**What the complaints say:** people complain about the basics (price, lost data, missing reports, stock counts drifting), not about a lack of AI. Two things follow for VendeAI:
- **Price sensitivity is real at the proposal's price point.** Users call $10/month "excessive" when it is charged just to record sales, which is exactly the Pro tier. Recording sales probably needs to stay free.
- **Trust in the numbers is the product.** Drifting inventory and lost records are the top failures. An AI layer that makes numbers feel less reliable would hurt, not help.

---

## 4. Why might this be newly solvable with AI in 2026?

Each item below is a specific capability, with the date it changed.

| Capability | What changed, and when | Why it matters for VendeAI | Source |
|---|---|---|---|
| **Reliable text-to-structured-data** | **May 30, 2024:** Anthropic tool use became generally available. **August 2024:** OpenAI Structured Outputs, which OpenAI says scores 100% on its complex JSON-schema test vs. under 40% for gpt-4-0613. | "Sold 3 dresses for $40" can now be turned into a database row reliably instead of just approximately. This is the core of the "no forms" promise. | [Claude blog](https://claude.com/blog/tool-use-ga); OpenAI figures via [search summary of OpenAI's post](https://openai.com/index/introducing-structured-outputs-in-the-api/) **[UNVERIFIED: openai.com returned 403 to my fetch]** |
| **Querying real data instead of guessing** | The same tool-use release lists "answering questions through database searches" as a supported use. | "How much did I make this week?" can be answered by running a database query, so the AI does not invent numbers. The proposal requires exactly this. | [Claude blog, 2024-05-30](https://claude.com/blog/tool-use-ga) |
| **Evidence that LLMs still get numbers wrong on their own** | **August 2025:** the FAITH benchmark warns that "even minor numerical errors can undermine decision-making" when LLMs extract and calculate from financial tables. | Supports the proposal's rule that the database, not the AI, does the math. | [arXiv 2508.05201](https://arxiv.org/abs/2508.05201) |
| **Cheap enough for a $5–10 plan** | **July 18, 2024:** GPT-4o mini launched at $0.15 per million input tokens, 60% below GPT-3.5, and "dropped by 99% since text-davinci-003" (2022). | Dozens of AI queries per seller per month now cost cents, so a low-priced plan can still cover the AI bill. | [Simon Willison, 2024-07-18](https://simonwillison.net/2024/Jul/18/gpt-4o-mini/) |
| **Accurate voice notes in many languages** | **March 20, 2025:** gpt-4o-transcribe reported 2.46% word error rate in English and better accuracy than Whisper across 100+ languages, including noisy settings. | Sellers can speak sales in Spanish or Portuguese while they work. Whisper existed earlier, but accuracy with accents and background noise is what improved. | [VentureBeat, 2025-03-20](https://venturebeat.com/ai/openais-new-voice-ai-models-gpt-4o-transcribe-let-you-add-speech-to-your-existing-text-apps-in-seconds) |
| **WhatsApp open to any developer** | **May 19, 2022:** Meta opened the cloud-hosted WhatsApp Business Platform "to any business across the world." | Makes the proposal's Phase 2 WhatsApp bot doable for a startup without going through an enterprise vendor. | [Meta newsroom, 2022-05-19](https://about.fb.com/news/2022/05/announcing-new-products-to-make-business-messaging-easier/) |

**The downside of "newly solvable":** the same capabilities are available to incumbents. Meta shipped AI price suggestions in its Seller app in July 2026, and Kyte already advertises an AI assistant over sellers' real data. What changed since 2024 lowers the cost of building VendeAI, but it does not protect VendeAI from competitors.

---

## Could not verify / flags

1. **Reddit and G2 were blocked.** Reddit returned "unable to fetch" and G2 returned 403. No Reddit or G2 quotes are included, so the complaint set leans toward app-store users of Treinta.
2. **openai.com returned 403.** The Structured Outputs date and the 100% vs. <40% figures come from search-result summaries of OpenAI's page, not a direct read.
3. **"50 million LatAm microbusinesses, 90% on paper"** is a founder's quote in TechCrunch, not survey data.
4. **The WhatsApp Business 200M figure is from June 2023** and includes service businesses. I found no split between product and service sellers.
5. **Facebook Marketplace "250 million sellers"** appears on stat-aggregator sites, but I found no Meta source for it, so I left it out.
6. **The DSA fact sheet PDF returned 404.** The 5.4M direct-seller figure comes from Direct Selling News's report on the DSA study. The "12% decrease" in search snippets was not on the page I read.
7. **Star ratings were not visible** for most Treinta App Store reviews I quoted. I included them because the text is clearly negative.
8. **The review quotes were read through a summarizing fetch tool.** The wording looks verbatim, but check it on the linked page before using it publicly.
9. **I found no survey** measuring what share of small sellers use notebooks vs. spreadsheets vs. apps.
10. **I could not test Kyte's AI assistant or Meta's Seller app.** How good they are relative to VendeAI's concept is unknown.
