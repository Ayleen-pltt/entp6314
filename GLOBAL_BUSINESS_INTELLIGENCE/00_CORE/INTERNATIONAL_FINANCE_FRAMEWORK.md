# INTERNATIONAL_FINANCE_FRAMEWORK.md

## Global Business Intelligence — International Finance Framework

*This is an **operational framework**, not a theoretical essay. It defines, step by step, how Global Business Intelligence must analyze an international investment, financing, or currency-risk decision. It operates under [MASTER_INSTRUCTIONS.md](MASTER_INSTRUCTIONS.md) and [RESEARCH_PROTOCOL.md](RESEARCH_PROTOCOL.md), and calls on [COUNTRY_ANALYSIS_FRAMEWORK.md](COUNTRY_ANALYSIS_FRAMEWORK.md) directly in Step 4 for the country-risk input the discount rate and currency analysis depend on. This document provides methodology only — it is not investment, legal, or tax advice, and produces no recommendation to execute any specific financial transaction without qualified professional review.*

---

## PRIMARY OBJECTIVE

Use this framework to determine:

1. Whether a proposed international investment or financial decision creates value on a risk-adjusted basis.
2. What discount rate appropriately reflects the country and currency risk involved.
3. How currency exposure should be measured and, where appropriate, hedged.
4. How the conclusion holds up under sensitivity and scenario stress-testing.
5. What should be monitored going forward, and what would change the recommendation.

This framework applies to capital budgeting decisions (a new foreign investment, an acquisition, a greenfield facility), ongoing currency exposure management decisions, cross-border financing structure decisions, and repatriation/structuring decisions — Step 2 identifies which of these the specific question actually is, since the steps that follow are weighted differently depending on the answer.

---

## HOW TO USE THIS FRAMEWORK

1. Execute Steps 1–15 in sequence. Do not skip directly to Step 15's recommendation.
2. Apply RESEARCH_PROTOCOL.md to every dynamic data point — exchange rates, interest rates, inflation, tax rates, and country risk ratings are all dynamic by default (RESEARCH_PROTOCOL.md Section 2).
3. Label every figure as verified fact, current data requiring verification, assumption, or estimate, per MASTER_INSTRUCTIONS.md Section 5, and show every calculation's formula and inputs explicitly per RESPONSE_FORMATS.md Section 10 — never present a financial conclusion as an unexplained number.
4. Use [COUNTRY_ANALYSIS_FRAMEWORK.md](COUNTRY_ANALYSIS_FRAMEWORK.md) as the source of the country risk finding Step 4 requires, rather than re-deriving country risk from scratch here.
5. This framework does not provide investment, legal, or tax advice (see MASTER_INSTRUCTIONS.md Section 16) — state explicitly wherever a conclusion depends on a tax position, legal structure, or regulatory determination that requires qualified professional confirmation.
6. Populate the [Required Output](#required-output) at the end with the findings from Steps 1–15.

---

## STEP 1 — DECISION PROFILE

Identify:

- Company
- Decision type (capital budgeting / currency exposure management / financing structure / repatriation and structuring)
- Home country and currency
- Host/counterparty country and currency
- Investment or transaction size
- Time horizon
- Financing structure assumed (equity, intercompany debt, local currency debt)
- Strategic versus purely financial motivation

State explicit assumptions for any missing field rather than proceeding on an unstated guess, per MASTER_INSTRUCTIONS.md Section 12.

---

## STEP 2 — INVESTMENT OBJECTIVE

Clarify precisely what is being evaluated and what "success" means for it:

- Expected return or hurdle rate
- Risk tolerance
- Desired level of control over the underlying asset or cash flows (if a capital budgeting decision)
- Whether the decision is reversible, and at what cost, if conditions change

A capital budgeting decision (new investment) is evaluated primarily through Steps 6–9 (cash flow, NPV, IRR); a currency exposure management decision is evaluated primarily through Steps 5 and 12 (currency analysis and hedging); a financing structure decision is evaluated primarily through Step 13. State which of these is primary for this specific question before proceeding, so the later steps are weighted correctly rather than applied with uniform depth regardless of relevance.

---

## STEP 3 — ASSUMPTIONS

State every assumption the analysis will depend on, explicitly and up front:

- Demand/revenue forecast basis
- Cost structure basis
- Exchange rate path assumption (e.g., "spot rate held constant" or "per interest rate parity," stated explicitly — never an unstated assumption)
- Tax treatment assumption (flagged as requiring qualified tax counsel confirmation for the actual transaction)
- Discount rate/cost of capital basis (developed fully in Step 7)

**Do not invent market data or financial figures.** Where a needed input is not available, state this plainly, proceed with a labeled assumption or a structural placeholder, and flag the gap in the final "Information Still Needed" output.

---

## STEP 4 — COUNTRY RISK

Invoke [COUNTRY_ANALYSIS_FRAMEWORK.md](COUNTRY_ANALYSIS_FRAMEWORK.md) for the host country involved, or draw on an existing country analysis already produced for this engagement. Extract specifically:

- Political and regulatory risk profile
- Sovereign/credit risk indicators
- Transfer and repatriation risk (capital controls, convertibility restrictions, historical reliability)
- The country risk premium implied by this profile, to be used in Step 7's discount rate

Do not re-derive a full country analysis here — this step's role is to bring the relevant country-risk finding into the financial analysis, not to duplicate COUNTRY_ANALYSIS_FRAMEWORK.md's own sequence.

---

## STEP 5 — CURRENCY ANALYSIS

Evaluate:

- Transaction currency and which party bears risk
- Transaction exposure (specific contracted cash flows)
- Translation exposure (consolidation effect on reported results, if this is an ongoing subsidiary/investment)
- Economic exposure (the effect of sustained currency shifts on competitive position and cash flows over the investment's life)
- Exchange rate regime (floating, managed, pegged) and historical volatility
- Convertibility and any capital control history (carried forward from Step 4)

State exposure type by type — a conclusion that says only "there is currency risk" without specifying which exposure type, and its magnitude, is insufficient. Quantify sensitivity where feasible (e.g., "a 10% adverse currency movement changes the calculated NPV by X"), since this feeds directly into Steps 10–11.

---

## STEP 6 — CASH FLOW ANALYSIS

Build the projected cash flow basis:

- Project-level cash flows (the foreign operation's own local-currency cash flows)
- Parent-level cash flows (what is actually repatriable after local tax, withholding tax, and any transfer/repatriation restriction identified in Step 4) — these two are not the same, and the distinction should be stated explicitly
- Currency of analysis (local currency discounted then converted, or converted period-by-period then discounted) — state which approach is used and confirm internal consistency
- Working capital requirements

Show the cash flow build as a table (period by period) rather than only a summary figure, so the reader can trace how project-level cash flows become parent-level cash flows after the adjustments identified in Step 4 and this step.

---

## STEP 7 — DISCOUNT RATE / COST OF CAPITAL

Determine the discount rate to be applied in Step 8:

- Base cost of capital (WACC), stated with its own inputs (cost of equity, cost of debt, capital structure weights, tax rate) shown explicitly
- Country risk premium adjustment (from Step 4), with the specific method used to derive it stated (e.g., sovereign spread-based, historical volatility-based, or a qualitative risk-rating-based adjustment)
- The resulting risk-adjusted discount rate used in Step 8

State this rate's construction transparently — per RESPONSE_FORMATS.md Section 10, a discount rate presented without its components is an unexplained number, not a finding.

---

## STEP 8 — NPV

Show:

- **Formula**: `NPV = −C₀ + Σ [CFₜ ÷ (1 + r)ᵗ]`
- **Inputs**: initial investment, period cash flows (from Step 6), discount rate (from Step 7)
- **Calculation**: the period-by-period discounting shown explicitly
- **Result**: the resulting NPV
- **Interpretation**: what the result means for the decision — a positive NPV supports proceeding at the assumed discount rate and cash flow forecast; a negative NPV does not, and the specific assumption(s) that would need to change to reverse the conclusion should be named (feeding into Step 10).

---

## STEP 9 — IRR

Show:

- **Formula**: the rate at which `0 = −C₀ + Σ [CFₜ ÷ (1 + IRR)ᵗ]`
- **Inputs**: the same cash flows as Step 8
- **Calculation**: state that IRR is generally solved iteratively for multi-period cash flows
- **Result**: the resulting IRR
- **Interpretation**: compare IRR to the Step 7 discount rate/hurdle rate — consistency with the Step 8 NPV conclusion should be confirmed explicitly. Flag if the cash flow pattern has more than one sign change (multiple/undefined IRR risk) or if comparing IRR across differently sized alternatives, in which case NPV should be treated as the more reliable metric.

---

## STEP 10 — SENSITIVITY ANALYSIS

Vary one input at a time — discount rate, exchange rate, demand/revenue, cost — across a plausible range, and show how NPV changes for each. Identify which single variable produces the largest swing in the outcome; that variable is the one warranting the most forecasting rigor and the closest ongoing monitoring. Present as a table or a stated range (e.g., "NPV becomes negative if the discount rate exceeds X%").

---

## STEP 11 — SCENARIO ANALYSIS

Create:

- **Base Case** — using Step 3's stated assumptions
- **Upside Case** — a plausible, internally consistent combination of more favorable variables (unlike Step 10, multiple variables move together)
- **Downside Case** — a plausible, internally consistent combination of less favorable variables, informed by Step 4's country risk findings and Step 5's currency volatility findings specifically

Recalculate NPV under each case. State the specific variables differentiating the cases and what observable signal would indicate the situation is moving toward the upside or downside rather than the base case.

---

## STEP 12 — HEDGING OPTIONS

Evaluate, based on Step 5's exposure findings:

- Natural hedging options (matching revenue and cost currency, local currency financing per Step 13)
- Financial hedging instruments (forwards, options, swaps) appropriate to the exposure's size and duration
- Cost of each hedging option relative to the risk it mitigates
- The practical limitation that long-duration exposure (e.g., a multi-year investment) is often difficult to fully hedge financially at reasonable cost, making natural hedging a necessary complement, not merely an alternative

State a specific recommended hedging approach (or explicitly state that the exposure is accepted unhedged, and why) rather than listing options without a conclusion.

---

## STEP 13 — FINANCING STRUCTURE

Where relevant to the decision type identified in Step 2, evaluate:

- Equity versus intercompany debt financing mix
- Local-currency versus parent-currency financing (and its natural-hedge implications per Step 12)
- Tax implications of the financing structure (flagged explicitly as requiring qualified tax counsel confirmation, per MASTER_INSTRUCTIONS.md Section 16 — this framework does not finalize a tax position)
- Repatriation mechanism planning (dividends, interest, royalties) and its interaction with Step 4's transfer/repatriation risk findings

---

## STEP 14 — RISK SYNTHESIS

Synthesize the risks identified across Steps 4–7 and 12–13 — country, currency, financing, and repatriation risk — into a brief consolidated view, using Low/Medium/High ratings where numerical precision is not justified, consistent with the risk matrix convention used throughout the other frameworks in this system. Identify mitigation and residual risk for each.

---

## STEP 15 — RECOMMENDATION

State the recommendation clearly, separated from the preceding analysis, addressing:

- Whether to proceed, proceed with specific hedging/structuring conditions, delay, or decline
- The key assumptions (from Step 3) the recommendation depends on
- The specific findings from Steps 8–11 that support it
- What could go wrong (drawing on Step 14)
- What information would change the recommendation

**This framework's output is decision support, not investment, legal, or tax advice.** State explicitly that any actual transaction requires qualified professional confirmation of its legal, tax, and regulatory position before execution, per MASTER_INSTRUCTIONS.md Section 16.

---

## REQUIRED OUTPUT

Present every completed international finance analysis using this exact structure:

```markdown
## Executive Summary

## Investment Objective

## Assumptions

## Currency Analysis

## Cash Flow Analysis

## NPV

## IRR

## Sensitivity Analysis

## Scenario Analysis

## Country Risk

## Currency Risk

## Hedging Options

## Recommendation
```

Notes on populating this template:

- **Executive Summary** is written last, after every other section is complete.
- **Investment Objective** and **Assumptions** correspond to Steps 2–3. **Currency Analysis** and **Currency Risk** both draw on Step 5 — present exposure measurement under Currency Analysis and the resulting risk rating/mitigation under Currency Risk if separating them aids clarity, or consolidate into one section for a simpler case.
- **Cash Flow Analysis**, **NPV**, and **IRR** correspond to Steps 6, 8, and 9 respectively (Step 7's discount rate derivation is shown within the NPV section as part of its stated inputs, per Step 8's requirement to show inputs explicitly).
- **Sensitivity Analysis** and **Scenario Analysis** correspond to Steps 10–11. **Country Risk** corresponds to Step 4. **Hedging Options** corresponds to Step 12.
- **Recommendation** corresponds to Step 15 and must be clearly separated from the analytical sections that precede it.
- This template, per RESPONSE_FORMATS.md Section 6, does not include a separate Risk Matrix or Information Still Needed header — fold Step 14's risk synthesis into Country Risk/Currency Risk, and fold any unresolved data gaps (from Step 3) into the Recommendation section's stated dependencies, unless the analysis's complexity warrants adding a dedicated section (state explicitly if doing so).

---

## IMPORTANT RULES

- **Never invent** exchange rates, interest rates, tax rates, country risk ratings, or financial figures. Every dynamic input must be flagged for verification per RESEARCH_PROTOCOL.md.
- **Never present a financial conclusion as an unexplained number** — every NPV, IRR, or margin figure must show its formula, inputs, and calculation alongside the result (RESPONSE_FORMATS.md Section 10).
- **Never treat this framework's output as investment, legal, or tax advice.** Recommend qualified professional confirmation before any actual transaction, structuring decision, or tax position is finalized.
- **Never let a single-point forecast substitute for sensitivity and scenario analysis** on a decision of any real stakes — Steps 10–11 are not optional refinements when the underlying assumptions (Step 3) carry material uncertainty.
