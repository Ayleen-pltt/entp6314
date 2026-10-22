# Complaints About Sales, Inventory, and Bookkeeping Apps for Small Sellers (Mar 2025 – Sep 2026)

**Companion to:** [opportunity-scan-vendeai.md](opportunity-scan-vendeai.md) (VendeAI, an AI business assistant for informal sellers).
**Window:** 18 months, **2025-03-29 → 2026-09-29**. Compiled 2026-09-29.
**Tool category (my reading of the prompt's placeholder):** apps small sellers use to record sales, track stock, and see profit.

## Method, and what I could not reach

| Source | Status | What I got |
|---|---|---|
| **Apple App Store** | ✅ Worked | I pulled **1,064 negative (1–3★) reviews** dated in the window from Apple's public review feed (`itunes.apple.com/{country}/rss/customerreviews/…/sortby=mostrecent/json`). They cover **13 apps** in **8 storefronts** (US, Mexico, Colombia, Peru, Argentina, Chile, Brazil, India). Quotes are copied **verbatim from the feed**. Spanish and Portuguese translations are mine. |
| **Capterra** | ⚠️ Partial | Fetched through a page-summarizing tool, so the wording is close to verbatim but not guaranteed. I used three in-window quotes as backup (see Theme 3 and the end of this file). |
| **G2** | ❌ Blocked | HTTP 403 on product review pages. |
| **Reddit** | ❌ Blocked | Blocked by the page fetcher and refused by web search ("not accessible to our user agent"). **No Reddit data in this file.** |

**The apps, in three groups.** Frequency counts below use the **core seller apps** as the denominator unless noted, because they match VendeAI's users most closely.

| Group | Apps | Negative reviews in window |
|---|---|---|
| **Core seller apps** (sales + stock + catalog for micro-sellers) | Treinta (117), Kyte (104), Sortly (15), Square for Retail (15), Zoho Inventory (7), Loyverse POS (6) | **264** |
| **India ledger apps** | OkCredit (141), myBillBook (56), Khatabook (17), Vyapar (6) | 220 |
| **General small-business apps** | QuickBooks (358), Wave (117), Square POS (105) | 580 |

**How the counting works.** Each review was tagged by keyword rules written in English, Spanish, and Portuguese. One review can fall into several themes. Keyword tags miss some reviews, so treat those counts as **minimums**. I read every Treinta and Kyte review myself and hand-counted the two themes where the keyword rules clearly under-counted: themes 1 and 3 below. Apple's feed returns at most 500 reviews per app per country, so QuickBooks (US) is under-counted.

---

## Summary

| # | Theme | Core-app reviews (of 264) | Share | Product or pricing? |
|---|---|---|---|---|
| 1 | Basics moved behind a paywall, no free trial | **~75** (hand count) | 28% | **Pricing** |
| 2 | Crashes, freezes, slowness, login loops | **74+** | 28% | Product |
| 3 | Stock counts and records wrong or lost | **35** (hand count); **27 of Kyte's 104** | 13% (Kyte: 26%) | **Product** (the most serious one) |
| 4 | Missing features (variants, installments, invoices, wholesale prices) | **61+** | 23% | Product |
| 5 | Support that does not answer | **37+** | 14% | Product (service) |
| 6 | Billing errors: paid but not activated, can't cancel, charged after cancelling | **26+** | 10% | Product (the billing system is broken, and it hits the customer's wallet) |
| 7 | Sudden price hikes for existing subscribers | **17+** | 6% | **Pricing** |
| — | Payment holds and frozen accounts (**general SMB apps only**) | **55 of 580** | 9% | Product / policy |

**Overall:** about **one-third of core-app complaints are about pricing** (themes 1 and 7). About **two-thirds are about the product** failing at basic jobs. Theme 1 is concentrated in a single event: **Treinta removed its free tier around June–September 2026**, and roughly 70 of its 117 in-window negative reviews are about that change.

---

## Theme 1: Basics moved behind a paywall, no free trial (Pricing)

**~75 of 264 core reviews (28%).** Almost all are Treinta (~70). The rest are Kyte (3, free features made paid) and Sortly (2, no trial, 100-item cap). The anger is less about the price itself than about **paying just to write down a sale**, and about **not being able to try the app first**.

1. "Hace unas semanas todavía era una app muy buena, pero ahora ya cobra por añadir un producto y también por marcar como vendido, no recomiendo" (*"A few weeks ago it was still a very good app, but now it charges to add a product and to mark something as sold"*). Mcredyy, 1★, 2026-09-15, Treinta. [App Store MX](https://apps.apple.com/mx/app/id1644703591?see-all=reviews)
2. "Era una buena app para personas que solo necesitábamos registrar las ventas, ahora ya te cobran y pues ni ocuparía lo que ofrecen" (*"It was a good app for people who only needed to record sales. Now they charge, and I wouldn't even use what they offer"*). Tfdernghis, 1★, 2026-09-09, Treinta. [App Store MX](https://apps.apple.com/mx/app/id1644703591?see-all=reviews)
3. "La desinstale porque ni siquiera me dejó probarla sin antes pagar. No voy a pagar un servicio que ni siquiera probé antes." (*"I uninstalled it because it wouldn't let me try it without paying first. I'm not paying for a service I haven't tried."*) Debi Pedano, 1★, 2026-05-28, Treinta. [App Store AR](https://apps.apple.com/ar/app/id1644703591?see-all=reviews)

## Theme 2: Crashes, freezes, slowness, login loops (Product)

**74+ of 264 (28%).** Kyte 46, Treinta 19, and a few each for Loyverse, Square for Retail, and Sortly. These sellers use the app at the moment of sale, so downtime means lost sales. Two reviewers say offline mode fails when their internet drops.

1. "It's excellent until it locks up after every sale and has to be closed out and restarted. Very frustrating." Sjs38, 3★, 2025-10-31, Loyverse POS. [App Store US](https://apps.apple.com/us/app/id1070865387?see-all=reviews)
2. "Péssimo sistema vem ficando fora sem sistema por diversas vezes, gerando prejuízos em vendas e clientes insatisfeitos" (*"Terrible system, it keeps going down, causing lost sales and unhappy customers"*). It Distri, 1★, 2026-02-05, Kyte. [App Store BR](https://apps.apple.com/br/app/id1345983058?see-all=reviews)
3. "Donde vivo seguido se va el internet y la aplicación si no tengo internet me saca y me pide iniciar sección … el no poder registrar mis ventas" (*"Where I live the internet often drops, and without internet the app logs me out … I can't record my sales"*). DaniGlezRx, 1★, 2026-09-09, Treinta. [App Store MX](https://apps.apple.com/mx/app/id1644703591?see-all=reviews)

## Theme 3: Stock counts and records wrong or lost (Product)

**35 of 264 (13%), hand-counted.** It is concentrated in Kyte: **27 of its 104 negative reviews (26%)**. Stock changes by itself, sold items are not deducted, products disappear, and updates wipe inventory. This is the theme that matters most for VendeAI: **once sellers stop trusting the numbers, the app is worthless to them.**

1. "siempre cambia las cantidades y constantemente debo revisar nuevamente mi stock para corroborar. También tiene muchos errores en calcular la ganancia" (*"It keeps changing the quantities and I constantly have to recheck my stock. It also makes many errors calculating profit"*). Javier Ramirez3034, 1★, 2026-07-27, Kyte. [App Store MX](https://apps.apple.com/mx/app/id1345983058?see-all=reviews)
2. "O aplicativo "some" com as peças no estoque ou então não desconta quanto é feito a venda e a peça (no meu caso trabalho com roupas) fica disponível sem realmente está." (*"The app 'loses' items from stock, or doesn't deduct them when a sale is made, so the item (I sell clothes) shows as available when it isn't."*) PatriEMME, 2★, 2025-09-25, Kyte. [App Store BR](https://apps.apple.com/br/app/id1345983058?see-all=reviews)
3. "Acabo de actualizar y se borró todo mi inventario" (*"I just updated and my whole inventory was erased"*). Antony torres27, 1★, 2025-09-23, Treinta. [App Store PE](https://apps.apple.com/pe/app/id1644703591?see-all=reviews)

Backup from Capterra (read through the summarizing tool): "We constantly count and fix the inventory numbers in the system and within days they're wrong again." Rose F., Square for Retail. That review is dated 2022, which is **outside the window**, so it is not counted. [Capterra](https://www.capterra.com/p/170272/Square-for-Retail/reviews/)

## Theme 4: Missing features (Product)

**61+ of 264 (23%).** Kyte 30, Treinta 22. The most requested features: **sizes and colors (variants)**, **installment sales and credit ("fiado")**, **wholesale and retail prices**, invoices, printer support, and product categories. These are the everyday details of how informal sellers actually sell.

1. "Hace años que vengo esperando que se pueda poner las tallas y colores de los productos, sin eso no me sirve la app" (*"I've waited years to be able to add sizes and colors; without that the app is useless to me"*). Lil2189, 3★, 2025-06-10, Kyte. [App Store PE](https://apps.apple.com/pe/app/id1345983058?see-all=reviews)
2. "Quando faço uma venda no cartão de crédito parcelado ex. R$800,00 em 4X não encontrei a opção de informar o parcelamento … eu não consigo controlar o que entra cada mês no caixa." (*"When I sell on a credit card in installments, e.g. R$800 in 4 payments, there's no option to record that … I can't track what comes in each month."*) amarcilene, 2★, 2026-08-06, Kyte. [App Store BR](https://apps.apple.com/br/app/id1345983058?see-all=reviews) (Note: the feed text repeats "no cartão" twice. I removed the duplicate.)
3. "Coloque a opção de 2 preços atacado e varejo ! Super difícil achar um catálogo que tenha essa opção" (*"Add the option of two prices, wholesale and retail! It's super hard to find a catalog that has this"*). Karolfonsecaa., 3★, 2026-03-11, Kyte. [App Store BR](https://apps.apple.com/br/app/id1345983058?see-all=reviews)

## Theme 5: Support that does not answer (Product/service)

**37+ of 264 (14%)** in core apps, and **122 of 580 (21%)** in general SMB apps. Replies are slow, and several reviewers say the "support" is a bot.

1. "Yo pago el pro y no puedo actualizar inventario, Escribes a servicio al cliente y te responden de 1 día para otro … no solucionan el problema" (*"I pay for Pro and can't update inventory. You write to support and they answer a day later … they don't fix it"*). Pierina lbibi, 1★, 2025-10-24, Kyte. [App Store PE](https://apps.apple.com/pe/app/id1345983058?see-all=reviews)
2. "pagué 20USD para poder usar el plan premium desde el celu y mi compu y nunca pude usar nada, me comuniqué con soporte y solo te responde un bot que no ayuda para nada" (*"I paid $20 for premium on my phone and computer and could never use anything. Support is just a bot that doesn't help"*). Faruela, 1★, 2026-05-13, Treinta. [App Store AR](https://apps.apple.com/ar/app/id1644703591?see-all=reviews)
3. "Their customer service hotline is an ai chatty bot. Then, when you finally get a person, it's a tier one rep who is about as useful as the ai bot." hamncheezz, 1★, 2026-08-14, Wave. [App Store US](https://apps.apple.com/us/app/id881629660?see-all=reviews)

## Theme 6: Billing errors (Product, felt as pricing)

**26+ of 264 (10%).** Treinta 13, Kyte 10, Sortly 2, Square for Retail 1. Typical cases: people paid for Pro and the app still says "Free", can't cancel, or keep getting charged after cancelling. The price is not the issue. The billing system is broken.

1. "Sou assinante pro e no meu acesso dizendo que sou Free oferecendo um plano que já paguei" (*"I'm a Pro subscriber and my account says I'm Free, offering me a plan I already paid for"*). rdlopess, 1★, 2026-05-07, Kyte. [App Store BR](https://apps.apple.com/br/app/id1345983058?see-all=reviews)
2. "ES UNA TRAMPA casi imposible cancelar la suscripción!!!!!! Te siguen cobrando y cobrando" (*"IT'S A TRAP, almost impossible to cancel!!! They keep charging and charging"*). Eri Her, 1★, 2026-08-16, Treinta. [App Store MX](https://apps.apple.com/mx/app/id1644703591?see-all=reviews)
3. "Signed up for what we thought was an $800 plan. Next thing we know we are getting charged $1,400 & it won't allow me to change to the free plan" BDBandit787, 1★, 2025-06-30, Sortly. [App Store US](https://apps.apple.com/us/app/id529353551?see-all=reviews)

## Theme 7: Sudden price hikes for existing subscribers (Pricing)

**17+ of 264 (6%).** Kyte 9, Sortly 6, Treinta 2. The complaints are mostly about loyal users getting hikes of **2–4×** with little notice. Several reviewers say they are switching apps.

1. "the annual rate would increase by over 300% in 30 days (from $468 to $1428). Needless to say the subscription has been cancelled" walletvoter, 1★, 2025-09-08, Sortly. [App Store US](https://apps.apple.com/us/app/id529353551?see-all=reviews)
2. "De un año a otro subieron más del 100% el costo de suscripción sin previo aviso y sin considerar a quienes llevamos años siendo suscriptores" (*"From one year to the next they raised the subscription more than 100% with no notice, ignoring those of us who've subscribed for years"*). DNMex, 3★, 2026-06-09, Kyte. [App Store MX](https://apps.apple.com/mx/app/id1345983058?see-all=reviews)
3. "minha assinatura irá passar de 19,90 para 49,90 de uma vez. … Muito tenso para micro empreendedores." (*"My subscription is going from R$19.90 to R$49.90 all at once … very hard on micro-entrepreneurs."*) JulianaGuimaraes, 1★, 2025-08-18, Kyte. [App Store BR](https://apps.apple.com/br/app/id1345983058?see-all=reviews)

Backup from Capterra (summarizing tool): "greedy price increases with little warning to existing customers." Heather D., Owner, Retail, 2025-06-27, Sortly. [Capterra](https://www.capterra.com/p/169199/Sortly-Pro/reviews/?page=2)

## Also seen: payment holds and frozen accounts (general SMB apps only)

**55 of 580 (9%)** across Square POS (25), Wave (17), and QuickBooks (13). This theme only applies if VendeAI ever handles payments, and the proposal rules payments out of the MVP. One example: "my account was deactivated & my funds are automatically held for 60 days". Kat0568, 1★, 2026-08-26, Square POS. [App Store US](https://apps.apple.com/us/app/id335393788?see-all=reviews)

---

## What companies pay humans to do this work

The job is recording sales, keeping stock counts right, and producing simple profit numbers. Small businesses hire this out as **part-time bookkeeping, inventory, or e-commerce assistant** work.

| Role | Pay | Source | Verified? |
|---|---|---|---|
| Bookkeeping, accounting, and auditing clerks (US) | **Median $24.36/hr ($50,670/yr, 2025)**. 1.53M jobs, **projected to decline 6% from 2025 to 2035** | [BLS Occupational Outlook](https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-accounting-and-auditing-clerks.htm) | ✅ fetched |
| Bookkeeper, from job postings (US) | **Average $24.04/hr, typical range $15.99–$36.13/hr** (12.7k postings, last 36 months, updated 2026-09-20) | [Indeed salaries](https://www.indeed.com/career/bookkeeper/salaries) | ✅ fetched |
| Individual small-shop postings (US) | Bookkeeper + inventory manager at a retail boutique, Carmel IN: **$20–30/hr**. Part-time bookkeeper with inventory duties, Orem UT: **$20/hr**. Etsy studio order fulfillment + inventory, Cameron Park CA: **$18–28/hr**. ZipRecruiter search ranges: "Shopify Inventory" **$15–20/hr**, "Etsy Order" **$18–33/hr** | [ZipRecruiter: Bookkeeping Boutique](https://www.ziprecruiter.com/Jobs/Bookkeeping-Boutique), [Shopify Inventory](https://www.ziprecruiter.com/Jobs/Shopify-Inventory), [Etsy Order](https://www.ziprecruiter.com/Jobs/Etsy-Order) | ⚠️ **search snippets only**. ZipRecruiter returned 403 to my fetch. |
| Freelance virtual assistant (Upwork) | Median about **$13/hr**, typical **$10–20/hr**. Shopify-skilled VAs **$18–35/hr** | [Upwork VA cost page](https://www.upwork.com/hire/virtual-assistants/cost/), [eComposer guide](https://ecomposer.io/blogs/shopify-knowledge/hire-shopify-virtual-assistant) | ⚠️ **search snippets only**. Upwork returned 403. |
| Auxiliar de inventario (Mexico) | **MXN $10,264/month** average (2.4k reports, updated 2026-09-20) | [Indeed México](https://mx.indeed.com/career/auxiliar-de-inventario/salaries) | ✅ fetched |
| Auxiliar contable, i.e. junior bookkeeper (Mexico) | **MXN $11,522/month** average (27.6k reports, updated 2026-09-21) | [Indeed México](https://mx.indeed.com/career/auxiliar-contable/salaries) | ✅ fetched |

**What this means for VendeAI:**
- **A human costs far more than any app.** Just 5 hours a week of a US bookkeeper at ~$24/hr is about **$500 a month**. That is 50× VendeAI's planned $10 Pro tier. In Mexico, a full-time junior bookkeeper costs about MXN 11,500 a month.
- **But informal sellers mostly don't hire anyone.** The postings above are for boutiques and Shopify shops that already have revenue. Informal sellers do this work themselves or skip it. So the real "competitor" is the seller's own evening time, not a wage bill. That fits the complaint data: users object to paying even about $10/month for basic record-keeping (Theme 1).
- **BLS projects bookkeeping-clerk jobs to shrink 6% over 2025–2035.** That suggests software is already taking over this task. It does not prove anything about AI specifically.

---

## Takeaways for the VendeAI proposal

1. **Keep recording sales free.** Treinta's switch to paid produced the biggest wave of complaints in this dataset, from exactly VendeAI's users (LatAm micro-sellers who "only needed to record sales"). Charge for the advisor, pricing, and marketing features instead.
2. **Stock accuracy is the product.** Kyte, the closest competitor, loses 1 in 4 of its negative reviews to wrong or vanishing stock. An assistant that records sales from chat must be **visibly correct**: confirm each entry and make it easy to undo.
3. **Build variants, credit sales, and installments early.** Sizes and colors, fiado, installments, and wholesale vs. retail pricing are the most-requested missing features. An AI chat interface could capture them more naturally than forms ("sold 2 black M dresses, she'll pay half Friday").
4. **Work offline, and don't use a bot as your only support.** Both show up repeatedly. Several reviewers are specifically angry about AI-bot support.

---

## Could not verify / flags

1. **Reddit and G2 were blocked.** Web search refused reddit.com, and G2 and Upwork returned 403. This file has no Reddit or G2 quotes.
2. **ZipRecruiter and Upwork pay figures come from search-result snippets**, not pages I could open. The individual postings (Carmel IN, Orem UT, Cameron Park CA) are unverified.
3. **Theme counts are keyword-based minimums**, except themes 1 and 3, which I hand-counted from reading every Treinta and Kyte review. The keyword precision of the other themes was spot-checked, not measured.
4. **The App Store feed caps at 500 reviews per app per country**, so QuickBooks (US) is under-counted.
5. **The Colombian store returned no in-window Treinta reviews** through the feed. In the earlier [opportunity scan](opportunity-scan-vendeai.md), three Treinta quotes are labeled "App Store Colombia", and they came from a summarizing fetch. They may be from another storefront, or they may be paraphrased. Re-check them before reuse.
6. **The two Capterra quotes (Heather D., Rose F.)** were read through a summarizing tool. Rose F.'s review predates the window and is not counted.
7. **Complaint rates are shares of negative reviews, not of all users.** Kyte had 227 in-window reviews in total, of which 104 were negative. Treinta had 158 in total, of which 117 were negative.
