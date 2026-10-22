# Moat ranking: VendeAI

**Sources:** [`spec-audit.md`](spec-audit.md), [`prd.md`](../prd.md) (the bundle-plus-nudges version), and [`research/competitors-vendeai.md`](../../research/competitors-vendeai.md). `research/competitors.md` holds the supplier-card project's research, so I used the VendeAI file instead.
**Rule:** anything I worked out myself rather than read in a file is marked **[INFERRED]**. This file suggests no fixes.

**What changed with the new approach:** `prd.md` now says "Each feature on its own already exists in other apps. VendeAI's value is the bundle." The benefit is no longer any single feature. It is the nudges that only make sense when sales, stock, costs, debts, and channels sit together. That moves process power up, and makes switching costs matter even more.

---

## Table 1: How much it matters

The ranking asks one question: if we never got this, how easily could a competitor take our customers? Rank 1 is the one whose absence hurts most.

| Rank | Source | Why | Supporting line |
|---|---|---|---|
| 1 | **Switching costs** | The nudges are only as good as the history behind them. A seller who leaves loses their records, and also loses every nudge that depends on them: who owes, sales pace, real costs, which nudges they skip. Every individual feature already exists elsewhere, so without this cost, a seller can rebuild the same set from other apps. | `prd.md`: "Each feature on its own already exists in other apps"; "Each nudge records what it suggested and whether the seller acted on it or skipped it." Audit §5: every dependency is "Yes" for buyable. |
| 2 | **Scale economies** | Recording, the home screen, and two nudge types are free forever, and each of them runs through an AI model we pay for. Rivals with more users, more funding, or their own AI can carry free users more cheaply. One of them already gives AI help away for free. | `prd.md`: "Free forever: recording sales, the 'Todo en un lugar' screen, and the Cobrar and Reponer nudges." Competitors: Meta's Seller app "is free"; Treinta raised "$46M Series A." Audit GAPS #5: the cost is unknown. |
| 3 | **Process power** | The benefit is now *which* nudge to show, *when*, and in *what words*. A competitor can see our nudges and copy the list of nudge types. Copying the tuning is harder: thresholds, timing, and tone learned from which nudges real sellers act on or skip. That only matters if we actually build up that record. | `prd.md` M4: "which nudges they act on or skip, so the list gets more useful over time." `prd.md` "Default rules": the thresholds start as fixed defaults (3 left, 20% over cost, 14 days), so any tuning beyond them has to be learned. |
| 4 | **Brand** | Our sellers have been burned before: paywalls added after launch, billing traps, and wrong numbers. **[INFERRED]** A nudge only gets acted on if the seller trusts it, and they often pick apps on a friend's word. But they are price-sensitive, so brand matters as trust more than as a price premium. | Competitors: Treinta "ES UNA TRAMPA casi imposible cancelar"; "Basics moved behind a paywall (~70 reviews)." Kyte: "Stock counts wrong or disappearing (27)." |
| 5 | **Cornered resource** | Nothing in the spec is exclusive, and no competitor has one either. The one exception is Meta, which owns WhatsApp, where every Cobrar and Promocionar nudge ends up. That is Meta's resource, not one we could hold. **[INFERRED]** Catalog campaign dates are the only exclusive resource the spec even hints at. | Audit §5: WhatsApp is "Yes" for buyable; the source of catalog campaign dates is "Unknown." |
| 6 | **Network effects** | **Irrelevant to this business as specified.** One seller keeps one record and gets one nudge list. Customers receive messages but never use the app, and nothing is pooled across sellers. | Audit §4: "Customers receive messages but never use the app… nothing is pooled across sellers." |

---

## Table 2: Could we build it

The ranking asks whether we could plausibly start building each barrier in the next 12 months, at our current size, with what `prd.md` already commits us to.

### Available to us now

| Rank | Source | Why |
|---|---|---|
| 1 | **Switching costs** | This starts with M1: every confirmed sale, debt, cost, and phone number adds to the seller's history, and M3 makes that history useful every day. It leaks badly in the prototype, though. Data sits "in the browser," with no account or export defined (audit GAPS #3, #4). If the seller loses their phone, the history goes with it, and so does the switching cost. |
| 2 | **Process power** | M4 commits us to recording whether each nudge was acted on or skipped. That record starts building with the first user. **[INFERRED]** It only becomes a barrier after many sellers, across countries and product types, have produced enough act-or-skip data to tune the nudges better than a copy could. |

### Not available to us yet

| Rank | Source | Why it isn't available | What would have to change |
|---|---|---|---|
| 3 | **Brand** | A trusted name comes from a reputation we have not earned. We have no users and no track record of staying free or of giving good advice. | A large group of sellers would need to have used VendeAI long enough to see that it stayed free, kept correct numbers, and gave nudges that paid off. They would then recommend it without being paid to. |
| 4 | **Scale economies** | Cost per user only falls with volume we don't have. The incumbents already have it: Treinta claims "más de 7 millones de negocios," Loyverse "350,000+ active merchants," and Meta runs its own AI. | We would need enough free users that our cost per message and per nudge drops close to what Kyte or Meta pay. The spec doesn't say what that cost is (audit GAPS #5). |
| 5 | **Cornered resource** | The spec names no exclusive partner, data source, or channel. | We would need a signed, exclusive agreement with something sellers need, such as a catalog brand's product lists and campaign calendar, on terms a competitor can't get. |
| 6 | **Network effects** | The spec has no feature where one user's activity benefits another. | Either customers would have to start using the app (to see what they owe or to pay), or nudges would have to learn from all sellers together. `prd.md` rules out the first (no payment processing, "the seller always presses send") and doesn't plan the second (audit GAPS #8). |

---

## The gap

**Scale economies rank 2nd in Table 1 and 4th in Table 2, in the "not available" group.**

The new approach makes this sharper. Our pitch is now "everything in one place, plus an assistant." That means more AI work per seller than a plain sales notebook: reading every sale, and writing nudges and messages every day. Much of it is free, because recording, the home screen, and Cobrar and Reponer nudges cost the seller nothing. Meta already gives AI help away for free, Kyte already sells an AI assistant to a paying base, and Treinta raised $46M. For the next year, each new free seller costs us more than the same seller costs them. **[INFERRED]** The more sellers the free bundle attracts, the more exposed we are, until we reach a size we are nowhere near. Switching costs and process power are the barriers we can start on now. Both grow only with each seller's history, so neither helps win a seller who is choosing between us and a free Meta tool on day one.
