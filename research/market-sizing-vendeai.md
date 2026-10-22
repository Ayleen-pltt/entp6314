# Bottom-Up Market Sizing: VendeAI (Latin America + U.S.)

**Companion to:** [opportunity-scan-vendeai.md](opportunity-scan-vendeai.md), [complaints-vendeai.md](complaints-vendeai.md), [competitors-vendeai.md](competitors-vendeai.md).
**Compiled:** 2026-09-29. **Revised the same day** to cover all of Latin America, not only Mexico. **Horizon:** annual recurring revenue (ARR) about 5 years after launch.

**Formula:** counted target customers × share who actually resell × share online × share who start using VendeAI for free × share of those who pay × price × 12.

No top-down step is used. Every population number is a headcount from a named source.

---

## 1. Who we count, and why

**Beachhead: direct sellers (catalog, party-plan, and multi-brand resellers) across Latin America, plus the U.S.**

This is the part of VendeAI's target customer that is **counted country by country by a single consistent source**. It also matches the proposal's profile closely:
- they hold a small inventory;
- they sell to people they know, over WhatsApp and in person;
- they often sell on credit;
- they have no ERP.

Broader groups, such as "informal sellers" or "Instagram sellers", have **no reliable headcount**, so they are listed in section 6 as upside only.

**Population source:** the [WFDSA Statistical Database 2021–2024](https://wfdsa.org/wp-content/uploads/2025/12/WFDSA-Statistical-Database-2021-2024.xlsx), published Dec 2025 by the World Federation of Direct Selling Associations and linked from [wfdsa.org/global-statistics](https://wfdsa.org/global-statistics/). I read column "Independent Representatives — Total Number" for data year 2024. The WFDSA notes that its figures cover the entire industry, except Bolivia and Uruguay, which count association members only.

| Country | Independent representatives (2024) | Internet use, % of population (2024) |
|---|---|---|
| Mexico | 3,731,000 | 83.1% |
| Brazil | 2,751,071 | 84.5% |
| Colombia | 2,550,934 | 79.3% |
| Peru | 695,685 | 82.0% |
| Argentina | 648,000 | 89.7% |
| Bolivia (members only) | 449,210 | 79.7% |
| Ecuador | 396,000 | 77.2% |
| Chile | 363,287 | 95.6% |
| Uruguay (members only) | 38,682 | 92.0% |
| Central America / Caribbean (group total) | 566,007 | 83.7% (LatAm & Caribbean aggregate, 2025) |
| Other South & Central America | 25,127 | 83.7% (same aggregate) |
| Venezuela | *no data reported* | — |
| **Latin America total** | **12,215,003** | |
| **U.S.** (sellers only; see A2) | **5,400,000** | 94.7% |

Internet use comes from the [World Bank indicator IT.NET.USER.ZS](https://data.worldbank.org/indicator/IT.NET.USER.ZS) (API pulled 2026-09-29, last updated 2026-07-13).

---

## 2. Assumptions table

| # | Assumption | Conservative | Base | Optimistic | Why it's defensible | Source |
|---|---|---|---|---|---|---|
| A1 | **Latin America headcount** | 12.2M | 12.2M | 12.2M | Counted headcount from one source across all countries. Same in every case. | [WFDSA database](https://wfdsa.org/wp-content/uploads/2025/12/WFDSA-Statistical-Database-2021-2024.xlsx) |
| A2 | **U.S. headcount** | 5.4M | 5.4M | 5.4M | The DSA counts **sellers** separately from discount buyers. The WFDSA's U.S. figure of 12.18M "representatives" equals DSA's 5.4M sellers plus its 6.8M discount buyers, so I use the seller-only 5.4M. | [Direct Selling News / DSA](https://www.directsellingnews.com/2025/08/28/dsa-releases-2025-growth-outlook-study-results/); WFDSA database |
| A3 | **Seller share: share of Latin American "representatives" who actually resell**, not just buy at a discount | **44%** | **64%** | **84%** | WFDSA counts include people who sign up only to buy at a discount. The two ends are anchored to real ratios. **Low end:** U.S. sellers ÷ U.S. representatives = 5.4M ÷ 12.18M = **44%**. **High end:** Mexico's separately reported 3,133,000 independent distributors ÷ WFDSA's 3,731,000 = **84%**. Base = midpoint. | DSA, WFDSA, [La Silla Rota](https://lasillarota.com/negocios/2025/9/17/industria-de-ventas-directas-en-mexico-comercializo-68-billones-de-pesos-en-2024-556984.html). **The midpoint is an assumption.** |
| A4 | **Online share** (per country, from the table above) | per country | per country | per country | World Bank internet use is a proxy for smartphone access. In Mexico, **97.2%** of internet users go online via smartphone (INEGI ENDUTIH 2024, via [Infobae](https://www.infobae.com/mexico/2025/07/13/mexico-alcanza-986-millones-de-usuarios-de-celular-en-2024-96-usa-telefonos-inteligentes/)). Cross-check for the U.S.: Pew finds 91% of adults own a smartphone ([Pew](https://www.pewresearch.org/internet/fact-sheet/mobile/)). | [World Bank](https://data.worldbank.org/indicator/IT.NET.USER.ZS) |
| A5 | **Reach: share of online sellers who try VendeAI for free by year 5** | **2%** | **5%** | **12%** | The optimistic end is anchored to the best-funded competitor. Treinta says 7M businesses use it ([homepage](https://treinta.co/)) after ~6 years and $46M+ raised ([Crowdfund Insider](https://www.crowdfundinsider.com/2022/04/190080-treinta-raises-supersized-series-a-in-latin-america-backed-by-payu/)). Against the 50M LatAm microbusinesses its founder cites ([TechCrunch](https://techcrunch.com/2021/02/11/treinta-announces-500k-in-funding-for-its-microbusiness-financial-app/)), that is ~14%. The conservative end matches a seed-funded pace: Kyte had ~25,000 users after ~3 years ([Baguete](https://www.baguete.com.br/noticias/kyte-recebe-aporte-de-r-55-milhoes)). | Comparables. **The rate itself is an assumption.** |
| A6 | **Free-to-paid conversion** | **2%** | **4%** | **8%** | The median freemium mobile app converts **2.1%** of downloads to paid by day 35, and the best reach **8.2%** ([RevenueCat 2026](https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026), 115,000+ apps). Among 200 software products, 29% convert 2.5–7.5% ([Growth Unhinged 2026](https://www.growthunhinged.com/p/free-to-paid-conversion-report)). | Benchmarks |
| A7 | **Price per paying user, per month (USD)** | **$4** | **$6** | **$9** | The proposal targets $5–10. Current competitor prices: Kyte Pro **$9.99** ([pricing](https://www.kyteapp.com/pricing)); Treinta Esencial **MXN 299 ≈ $16.8** in Mexico ([pricing](https://www.treinta.co/mx/planes-y-precios)) and **COP 39,900** in Colombia ([pricing](https://treinta.co/planes-y-precios)). Users call "$10 a month" excessive ([complaints file](complaints-vendeai.md)). | Pricing pages and reviews |
| A8 | **Same price and rates in every country** | yes | yes | yes | Keeps the model auditable. In reality Bolivia, Ecuador, and Central America will likely pay less, and Chile and Uruguay more. **[UNVERIFIED]** | Simplification |
| A9 | **Revenue is gross** | yes | yes | yes | Before app-store fees, payment fees, taxes, and churn. **[UNVERIFIED: net revenue is lower.]** | Simplification |

---

## 3. The math

**Latin America, by case**

| Case | Online sellers (A1×A3×A4) | Free users (×A5) | Paying (×A6) | Price | **ARR** |
|---|---|---|---|---|---|
| Conservative | 4,492,647 | 89,853 | 1,797 | $4 | **$86,259** |
| Base | 6,490,506 | 324,525 | 12,981 | $6 | **$934,633** |
| Optimistic | 8,518,789 | 1,022,255 | 81,780 | $9 | **$8,832,280** |

**Latin America base case, by country**

| Country | Online sellers | Paying users | ARR |
|---|---|---|---|
| Mexico | 1,984,773 | 3,970 | $285,807 |
| Brazil | 1,487,075 | 2,974 | $214,139 |
| Colombia | 1,295,466 | 2,591 | $186,547 |
| Argentina | 371,879 | 744 | $53,551 |
| Peru | 364,917 | 730 | $52,548 |
| Central America / Caribbean | 303,199 | 606 | $43,661 |
| Bolivia | 229,133 | 458 | $32,995 |
| Chile | 222,250 | 445 | $32,004 |
| Ecuador | 195,580 | 391 | $28,163 |
| Uruguay | 22,773 | 46 | $3,279 |
| Other S. & C. America | 13,460 | 27 | $1,938 |
| **Total** | **6,490,506** | **12,981** | **$934,633** |

**U.S.** (5.4M sellers × 94.7% online = 5,113,260)

| Case | Free users | Paying | **ARR** |
|---|---|---|---|
| Conservative | 102,265 | 2,045 | **$98,175** |
| Base | 255,663 | 10,227 | **$736,309** |
| Optimistic | 613,591 | 49,087 | **$5,301,428** |

**Combined (Latin America + U.S.)**

| Case | Paying users | **ARR at year ~5** |
|---|---|---|
| Conservative | 3,842 | **≈ $0.18M** |
| Base | 23,208 | **≈ $1.67M** |
| Optimistic | 130,868 | **≈ $14.1M** |

**Latin America ceiling** (every online reseller at the base seller share pays $6/month): **~$467M/yr**. This is the most the market could be worth at that price. It is not a forecast.

---

## 4. What changed from the Mexico-only version

- **The Latin American headcount went from 3.1M (Mexico) to 12.2M (10 countries plus Central America).** Mexico, Brazil, and Colombia make up **74%** of it.
- **The base case rose from $1.06M to $1.67M**, and the optimistic case from $7.7M to $14.1M.
- **I added a seller-share step (A3),** because the WFDSA counts discount buyers as "representatives". The Mexico-only version used a count that already excluded them.

---

## 5. What an investor will ask, and the honest answers

**"Is the base case realistic?"**
Base = ~23,000 paying users across two continents after ~5 years. Kyte had **22,000 paying subscribers** within ~3 years on a R$5.5M seed round ([Baguete, 2021](https://www.baguete.com.br/noticias/kyte-recebe-aporte-de-r-55-milhoes)). The base case is in line with a real, modestly funded comparable.

**"Is this venture-scale?"**
Only in the optimistic case. $10M ARR needs **~139,000 paying users at $6** or **~93,000 at $9**. The optimistic case (131k payers at $9) clears it; the base case does not. The paths to get there:
- a higher-priced tier (the proposal's $15–30 Business plan);
- expanding beyond direct sellers (section 6).

**"Which assumption matters most?"**
Reach (A5) × conversion (A6) together change the result **24×** between cases. Seller share (A3) changes it **1.9×**, and price **2.25×**. The 100-user pilot should measure sign-up and paid conversion first.

**"Do you need Brazil?"**
Brazil is **23%** of the Latin American headcount, but it needs a **Portuguese** product, and it is **Kyte's home market** ([Baguete](https://www.baguete.com.br/noticias/kyte-recebe-aporte-de-r-55-milhoes)). Without Brazil, the Latin American base ARR is **~$720K**. A Spanish-speaking launch covering Mexico, Colombia, Peru, Argentina, and Chile holds **~7.99M** representatives, about **65%** of the region.

---

## 6. Expansion segments (counted, but NOT in the numbers above)

| Segment | Count | Source | Why it's excluded |
|---|---|---|---|
| U.S. Etsy active sellers | 5.6M (end of 2025) | [Etsy Q4 2025 results](https://investors.etsy.com/news-events/press-releases/detail/218/etsy-inc-reports-fourth-quarter-and-full-year-2025-results) | They already have Etsy dashboards and overlap with direct sellers. **[UNVERIFIED fit]** |
| WhatsApp Business app monthly users (global) | 200M (2023) | [TechCrunch](https://techcrunch.com/2023/06/27/whatsapp-business-crosses-200m-maus-introduces-personlized-messages-feature/) | No country or product-seller split. |
| Latin American microbusinesses | "50M" | [TechCrunch, founder quote](https://techcrunch.com/2021/02/11/treinta-announces-500k-in-funding-for-its-microbusiness-financial-app/) | A pitch number, not a count. |
| Venezuela direct sellers | none reported | WFDSA | No data in the WFDSA database. |

---

## Could not verify / flags

1. **Seller share (A3) is the newest and weakest input.** The 44% is a U.S. ratio applied to Latin America. The 84% depends on the Mexico headcount in La Silla Rota, whose study author is not clearly named. No Latin American association splits sellers from discount buyers in the sources I found.
2. **Bolivia and Uruguay** count association members only, so they are under-counted. **Central America/Caribbean** is a WFDSA group total with no per-country split.
3. **Internet use ≠ smartphone ownership.** The per-country smartphone check was only done for Mexico (97.2% of internet users go online via smartphone) and the U.S. (Pew 91%).
4. **The U.S. online share changed from Pew's 91% to the World Bank's 94.7%**, to use one source consistently. The U.S. ARR moves about 4% as a result.
5. **Reach (A5) has no direct benchmark.** It is bracketed by competitors' self-reported user counts.
6. **Churn, app-store fees, and local pricing are not modeled.**
7. **The Brazil exclusion figures** (~$720K and ~65%) are computed from the tables above: $934,633 − $214,139, and (3,731,000 + 2,550,934 + 695,685 + 648,000 + 363,287) ÷ 12,215,003.
