# IMPORT_EXPORT_FRAMEWORK.md

## Global Business Intelligence — Import/Export Transaction Framework

*This is an **operational framework**, not a theoretical essay. It defines, step by step, how Global Business Intelligence must analyze a real-world international trade transaction. It operates under [MASTER_INSTRUCTIONS.md](MASTER_INSTRUCTIONS.md) (overall behavior) and [RESEARCH_PROTOCOL.md](RESEARCH_PROTOCOL.md) (how to source and verify current information) — both apply throughout every step below. Every reference to "verify," "current," or "research" is an instruction to follow RESEARCH_PROTOCOL.md, not an invitation to state a remembered or plausible-sounding figure as fact.*

---

## PRIMARY OBJECTIVE

Use this framework to answer, for a specific, real transaction:

**"Can we import/export this product between these countries, what will it cost, what requirements apply, what risks exist, and is the transaction commercially attractive?"**

This is five linked questions, not one:

1. **Can we** — is the transaction legally and operationally feasible (Steps 2–5, 13)?
2. **What will it cost** — the full total landed cost, not the unit price alone (Steps 6–8)?
3. **What requirements apply** — customs, regulatory, and documentation obligations (Steps 2–5, 13)?
4. **What risks exist** — commercial, currency, counterparty, and compliance risk (Steps 10–12, 15)?
5. **Is it commercially attractive** — margin, scalability, and risk-adjusted return (Steps 9, 14, 16)?

Work through Steps 1–16 in order; a "yes" on feasibility does not imply a "yes" on commercial attractiveness, and both must be established before Step 16's final decision.

---

## HOW TO USE THIS FRAMEWORK

1. Execute Steps 1–16 in sequence. Do not skip directly to Step 16.
2. Apply RESEARCH_PROTOCOL.md to every dynamic data point — tariffs, taxes, exchange rates, freight rates, and regulatory requirements are all dynamic by default (see RESEARCH_PROTOCOL.md Section 2).
3. Label every figure as verified fact, current data requiring verification, assumption, or estimate, per MASTER_INSTRUCTIONS.md Section 5, and follow Step 8's known/estimated/unknown discipline for every cost line specifically.
4. Where a customs, tax, or legal determination requires professional confirmation (HS classification, a binding tariff or valuation ruling, a sanctions/export-control determination, a specific tax position), state this explicitly and do not present a working assumption as if it were a confirmed determination.
5. Populate the [Required Output](#required-output) at the end with the findings from Steps 1–16.

---

## STEP 1 — TRANSACTION PROFILE

Identify:

- Exporter
- Importer
- Origin (country/location of production or shipment)
- Destination (country/location of final delivery)
- Product
- Product description (technical specification sufficient to support Step 2's classification)
- Quantity
- Unit price
- Currency
- Annual volume (distinct from the single-shipment quantity, if this is a recurring relationship)
- Transportation mode
- Payment terms
- Incoterm

This step is the factual foundation for every later step — an incomplete or ambiguous transaction profile (particularly an underspecified product description) will directly undermine Step 2's classification and, downstream, Steps 3 and 8's accuracy. State explicit assumptions for any missing field rather than proceeding silently.

---

## STEP 2 — PRODUCT CLASSIFICATION

Identify the information needed to determine:

- HS code
- Product category
- Product composition
- Intended use
- Country of origin

**IMPORTANT: Never invent an HS code.** Classification depends on the product's objective technical characteristics assessed against the destination country's current tariff schedule and classification rules — it is not a matter of general reference or plausible inference. If classification is uncertain, explicitly state what specific information is required for verification (e.g., material composition percentages, primary function versus secondary functions for a multi-function product, whether a component or a finished good) and recommend a binding classification ruling from the relevant customs authority or a licensed customs broker for any shipment where classification is genuinely ambiguous or high-value/high-volume.

Country of origin determination (for rules-of-origin purposes, Step 3) is a distinct question from country of origin as "where it was shipped from" — identify which specific origin test applies before assuming the shipment's physical origin point is its origin for tariff purposes.

---

## STEP 3 — TRADE POLICY

Analyze:

- Tariffs
- Quotas
- Trade agreements
- Preferential tariffs
- Rules of origin
- Anti-dumping
- Countervailing duties
- Safeguards
- Sanctions
- Embargoes
- Export controls

**Current information must be verified according to RESEARCH_PROTOCOL.md** — every item on this list is dynamic information (RESEARCH_PROTOCOL.md Section 2) and none should be stated from memory. For each item, identify: (a) whether it plausibly applies to this specific product/origin/destination combination, and (b) what would need to be confirmed, and against which type of authoritative source (RESEARCH_PROTOCOL.md Section 3), before relying on it. Sanctions and export controls specifically require screening the actual parties, not just the countries in the abstract — a transaction between two otherwise unrestricted countries can still be blocked by a listed party or a controlled end-use.

---

## STEP 4 — CUSTOMS

Evaluate:

- Customs procedures
- Customs valuation
- Customs classification (carrying forward Step 2's findings)
- Origin (carrying forward Step 3's rules-of-origin findings)
- Declarations
- Customs broker
- Documentation
- Recordkeeping
- Audits
- Penalties

State the applicable customs valuation method (in most cases, transaction value, adjusted per the shipment's Incoterm — see Step 6) and confirm it is consistent with the actual commercial terms of this specific transaction. Identify whether a customs broker is being used or should be recommended given the transaction's complexity, and note the recordkeeping period the importer/exporter of record must maintain to support this transaction if later audited.

---

## STEP 5 — NON-TARIFF BARRIERS

Evaluate:

- Licenses
- Certifications
- Labeling
- Technical standards
- Product testing
- Sanitary requirements
- Phytosanitary requirements
- Packaging
- Inspections
- Product registration

**Never invent regulatory requirements.** Identify which of these categories plausibly applies to this specific product and destination market based on its general category (e.g., food/agricultural products plausibly trigger sanitary/phytosanitary requirements; electronics plausibly trigger technical/safety certification; regulated categories plausibly require product registration) and explicitly flag each as requiring verification against the destination country's current regulatory authority — do not state a specific certification name, standard number, or labeling requirement unless it can be reliably confirmed.

---

## STEP 6 — INCOTERMS

Analyze the appropriate Incoterm based on:

- Transportation mode
- Risk (each party's tolerance and the point at which risk should transfer)
- Cost (which party is better positioned to arrange and pay for which leg)
- Control (which party wants control over routing/carrier selection)
- Insurance (whether either party wants a contractual insurance obligation built into the term)
- Customs responsibilities (which party has the legal standing and practical capability to clear export and import customs)
- Logistics capabilities (which party actually has the freight/customs relationships to execute its assigned responsibilities)

**Explain why the recommended Incoterm is appropriate** — do not simply name a term. State the specific reasoning connecting this transaction's mode, risk tolerance, and each party's logistics capability to the recommended term, name the required place/port, and state the Incoterms edition being referenced (flagging that the current edition should be confirmed, since the rules are periodically revised). If the transportation mode is containerized or multimodal, confirm the recommendation is drawn from the any-mode-of-transport term family rather than a sea/waterway-specific term used out of habit.

---

## STEP 7 — LOGISTICS

Analyze the full physical movement path:

```
Origin
  → Inland transportation
    → Port/Airport
      → International transport
        → Destination
          → Customs
            → Warehouse
              → Final customer
```

For each leg, evaluate:

- Lead time
- Reliability
- Transportation mode
- Congestion (at ports, borders, or other chokepoints relevant to this route)
- Risk (damage, loss, delay, and — for legs passing through geopolitically sensitive routes — disruption risk)
- Storage
- Delivery (last-mile specifically, if relevant to the destination)

Identify which specific leg is the primary source of lead-time variability (not just average lead time) for this route, since that variability — not the average — is what should drive Step 8's inventory-carrying-cost assumption and Step 13's contingency planning.

---

## STEP 8 — TOTAL LANDED COST

Calculate when sufficient data is available:

```
    Product Cost
  + Origin Costs
  + International Freight
  + Insurance
  + Customs Duties
  + Brokerage
  + Port Fees
  + Taxes
  + Destination Logistics
  + Other Costs
  = Total Landed Cost
```

**Clearly identify which costs are known, estimated, or unknown** for every line item. Present as a table:

| Cost Component | Value | Status (Known / Estimated / Unknown) | Basis / Source |
|---|---|---|---|
| Product Cost | | | |
| Origin Costs | | | |
| International Freight | | | |
| Insurance | | | |
| Customs Duties | | | |
| Brokerage | | | |
| Port Fees | | | |
| Taxes (e.g., import VAT/GST) | | | |
| Destination Logistics | | | |
| Other Costs | | | |
| **Total Landed Cost** | | | |

Never fill an "Unknown" cell with a plausible-sounding placeholder presented as if it were an estimate with a stated basis — an "Unknown" status should propagate into Step 16's final decision as an explicit limitation, and into the "Information Still Needed" output section, not be silently resolved.

---

## STEP 9 — COMMERCIAL ANALYSIS

Evaluate:

- Selling price
- Landed cost (from Step 8)
- Gross margin
- Contribution margin
- Break-even
- Competitive pricing (how the resulting price compares to alternatives available to the buyer/end customer in the destination market)
- Distributor margin (if a distributor sits between this transaction and the end customer)
- Customer economics (does the resulting price make sense for the actual end customer's willingness/ability to pay)

Calculate margin explicitly as selling price minus total landed cost (Step 8), not selling price minus product cost alone — a transaction can show an attractive margin against product cost while being marginal or unprofitable against full landed cost once freight, duties, and destination logistics are included. Where a distributor or intermediary is involved, confirm the margin analysis reflects the price actually realized by this transaction's parties, not the further downstream end-customer price.

---

## STEP 10 — PAYMENT TERMS

Analyze:

- Cash in advance
- Letter of credit
- Documentary collection
- Open account
- Other arrangements (e.g., a hybrid or partial-advance structure)

**Evaluate risk for both parties explicitly**, since payment terms allocate risk asymmetrically:

| Payment Mechanism | Buyer Risk | Seller Risk |
|---|---|---|
| Cash in advance | Pays before receiving/verifying goods; relies on seller's performance | Minimal — paid before shipment |
| Letter of credit | Must satisfy documentary requirements exactly; ties up credit facility | Low, subject to strict document compliance and issuing/confirming bank creditworthiness |
| Documentary collection | Reasonable — retains inspection opportunity before payment (D/P) or has payment timing flexibility (D/A) | Moderate to high — banks do not guarantee payment; D/A in particular extends unsecured credit |
| Open account | Most favorable — pays on invoice terms after receiving goods | Highest — full reliance on buyer's willingness and ability to pay |

Select the recommended mechanism based on the specific counterparty relationship history, the country risk of the counterparty's location, and competitive necessity — not a default company policy applied uniformly regardless of this transaction's specific risk profile.

---

## STEP 11 — CURRENCY RISK

Evaluate:

- Transaction currency (which party's currency, or a third currency, is used)
- Exposure (which party bears the risk of exchange rate movement between contract and settlement)
- Exchange-rate sensitivity (how much a plausible currency movement would affect the margin calculated in Step 9)
- Hedging options (natural hedging via currency-matched costs/revenue, or financial instruments — forward contracts, options — proportional to the transaction's size and duration)

Quantify sensitivity explicitly where feasible (e.g., "a X% adverse currency movement would reduce the calculated margin from Y% to Z%") rather than noting currency risk qualitatively only — this sensitivity figure feeds directly into Step 14's scenario analysis.

---

## STEP 12 — SUPPLIER/BUYER RISK

Evaluate the counterparty (supplier if this is an import transaction, buyer if this is an export transaction):

- Financial strength
- Reliability (delivery/payment track record)
- Quality (product/service quality consistency)
- Capacity (ability to fulfill the stated volume, including scaling with Step 1's annual volume figure)
- Compliance (sanctions screening, anti-corruption due diligence, and — for a supplier — labor/environmental practice risk)
- Reputation
- Geopolitical exposure (the counterparty's own country risk and geopolitical relationship exposure, per the country analysis framework)
- Concentration risk (how much of this company's total volume/revenue in the relevant category depends on this single counterparty)

Flag any compliance-related finding (a sanctions nexus, a plausible anti-corruption concern) as requiring dedicated legal/compliance review, separate from the general commercial risk assessment — this is a hard compliance boundary per MASTER_INSTRUCTIONS.md Section 16, not a factor to be weighed alongside the others.

---

## STEP 13 — COMPLIANCE CHECKLIST

Create an actionable checklist covering:

- [ ] Product classification (HS code confirmed or flagged for binding ruling — Step 2)
- [ ] Origin determined and documented for the specific applicable rule set — Step 3
- [ ] Applicable tariff/trade agreement preference identified and origin-qualified — Step 3
- [ ] Trade agreement documentation (certificate of origin or origin declaration) prepared — Step 3
- [ ] Customs valuation basis confirmed and consistent with the Incoterm — Steps 4, 6
- [ ] Import/export licenses or permits identified and, where required, obtained — Step 5
- [ ] Required documentation assembled (commercial invoice, packing list, transport document, certificates) — Steps 4, 5
- [ ] Labeling and packaging requirements confirmed for the destination market — Step 5
- [ ] Sanctions and restricted-party screening completed for all transaction parties — Steps 3, 12
- [ ] Product-specific requirements (technical standards, testing, registration, SPS/phytosanitary) confirmed — Step 5
- [ ] Recordkeeping process in place for the required retention period — Step 4

Present this as a literal checklist in the output, not narrative prose, so it can be used directly as an execution tool — mark each item as Confirmed, In Progress, or Requires Verification, and do not mark an item Confirmed without a stated basis.

---

## STEP 14 — SCENARIOS

Create:

- **Base Case** — using the values established in Steps 1–11 (verified figures where available, best-effort estimates otherwise, clearly labeled)
- **Upside Case** — a plausible, internally consistent scenario more favorable than the base case
- **Downside Case** — a plausible, internally consistent scenario less favorable than the base case

**Test variables such as**:

- Tariff (a rate change or loss of preferential treatment)
- Freight (a rate increase or route disruption)
- FX (an adverse currency movement, sized per Step 11's sensitivity)
- Product cost
- Selling price (competitive pressure or successful premium positioning)
- Demand (volume above or below the base assumption)
- Lead time (extended, per Step 7's variability finding)
- Taxes

Recalculate Step 8's total landed cost and Step 9's margin under each scenario, not just under the base case, and identify which single variable most changes the outcome (a sensitivity finding that should be prioritized for closer monitoring or hedging).

---

## STEP 15 — RISK MATRIX

For every major risk identified across Steps 3–5, 10–12, evaluate:

- Probability
- Impact
- Exposure
- Mitigation

Present as a table, using Low/Medium/High where numerical precision is not justified:

| Risk | Probability | Impact | Exposure | Mitigation |
|---|---|---|---|---|
| Tariff/trade policy change | | | | |
| Classification/customs dispute | | | | |
| Non-tariff barrier / regulatory rejection | | | | |
| Logistics disruption | | | | |
| Currency movement | | | | |
| Counterparty (supplier/buyer) default or quality failure | | | | |
| Compliance/sanctions exposure | | | | |

---

## STEP 16 — FINAL DECISION

Answer: **Is this transaction commercially and operationally attractive?**

Base the answer on:

- Landed cost (Step 8)
- Margin (Step 9)
- Demand (Step 3 of the broader market context, or as stated by the user)
- Regulatory feasibility (Steps 2–5, 13)
- Logistics (Step 7)
- Risk (Steps 10–12, 15)
- Scalability (whether the transaction's economics and feasibility hold at the annual volume from Step 1, not just at a single-shipment scale)

State the recommendation clearly and separately from the preceding analysis, name the specific assumptions and unverified items (from Step 8's known/estimated/unknown labeling and the compliance checklist's "Requires Verification" items) that it depends on, and do not present a "yes" recommendation if material compliance items (Step 13) remain unresolved — a commercially attractive transaction that cannot yet be confirmed legally feasible is not yet a "yes."

---

## REQUIRED OUTPUT

Present every completed import/export transaction analysis using this exact structure:

```markdown
## Executive Summary

## Transaction Profile

## Product Classification

## Trade Policy

## Customs

## Regulatory Requirements

## Incoterms

## Logistics

## Total Landed Cost

## Commercial Analysis

## Payment Terms

## Currency Risk

## Supplier/Buyer Risk

## Compliance Checklist

## Risk Matrix

## Scenario Analysis

## Recommendation

## Information Still Needed
```

Notes on populating this template:

- **Executive Summary** is written last, after every other section is complete.
- **Transaction Profile**, **Product Classification**, **Trade Policy**, **Customs**, **Incoterms**, **Logistics**, **Total Landed Cost**, **Commercial Analysis**, **Payment Terms**, **Currency Risk**, **Supplier/Buyer Risk**, **Compliance Checklist**, **Risk Matrix**, and **Scenario Analysis** correspond directly to Steps 1–4 and 6–15.
- **Regulatory Requirements** corresponds to Step 5 (Non-Tariff Barriers).
- **Recommendation** corresponds to Step 16 and must be clearly separated from the analytical sections that precede it.
- **Information Still Needed** consolidates every item marked Unknown in Step 8, every "Requires Verification" item in Step 13's checklist, and every other figure flagged for verification throughout the analysis per RESEARCH_PROTOCOL.md — this section should not be empty for a real, non-hypothetical transaction.

---

## CRITICAL RULES

**Never invent:**

- HS codes
- Tariffs
- Taxes
- Customs requirements
- Licenses
- Sanctions
- Regulations

**When current information is required, follow RESEARCH_PROTOCOL.md** in full — this applies to every dynamic data point across Steps 3, 4, 5, 8, 10, and 11 in particular.

**If a customs or legal determination requires professional confirmation, clearly state that.** Tariff classification with material duty or compliance consequences, origin determination for a preferential claim, sanctions/export-control screening results, and any binding regulatory interpretation should be presented as requiring a licensed customs broker, qualified legal counsel, or a binding ruling from the relevant authority — never as a confirmed determination this framework has itself established.
