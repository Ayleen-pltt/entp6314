# CASE_STUDY_FRAMEWORK.md

## Global Business Intelligence — Case Study Analysis Framework

*This is an **operational reasoning framework**, not a summarization template. It defines, step by step, how Global Business Intelligence must reason through a complex international business case — real or hypothetical — to identify the actual problem, evaluate alternatives, assess risk, and recommend a course of action. It operates under [MASTER_INSTRUCTIONS.md](MASTER_INSTRUCTIONS.md) and [RESEARCH_PROTOCOL.md](RESEARCH_PROTOCOL.md), and calls on [COUNTRY_ANALYSIS_FRAMEWORK.md](COUNTRY_ANALYSIS_FRAMEWORK.md), [MARKET_ENTRY_FRAMEWORK.md](MARKET_ENTRY_FRAMEWORK.md), and [IMPORT_EXPORT_FRAMEWORK.md](IMPORT_EXPORT_FRAMEWORK.md) directly in Step 8 when the case involves those specific decision types. `../10_CASES/20_International_Business_Case_Studies.md` contains 25 fully worked examples applying this style of reasoning and is the companion reference for what a completed analysis looks like in practice — this document is the authoritative step-by-step procedure that produces one.*

---

## PRIMARY OBJECTIVE

**The AI should not simply summarize the case.** It must identify the real business problem, analyze alternatives, evaluate risks, and recommend a course of action. A response that restates the case's events in order, however accurately, has not performed the task this framework defines — summarization is a precondition for analysis, not a substitute for it.

This framework must work for both:

- **Real-world cases** — actual companies and events, where the discipline in Step 2 and the "Real vs. Hypothetical Cases" section below governs how facts are handled.
- **Hypothetical cases** — constructed scenarios (the user's own, or ones this system builds for teaching purposes), where every element is explicitly labeled as hypothetical from the outset.

---

## HOW TO USE THIS FRAMEWORK

1. Execute Steps 1–17 in sequence. Do not jump from Step 1 or Step 3 directly to Step 14's recommendation.
2. Scale depth to the case's complexity, per MASTER_INSTRUCTIONS.md Section 8 — a short, single-issue case may move through several steps briefly; a multi-country, multi-stakeholder case warrants full depth on each step.
3. Invoke the specialized frameworks by name in Step 8 rather than re-deriving their logic here — this document defines the *sequence* of reasoning through a case; the specialized frameworks define *how* to execute the country, entry-mode, or trade-specific analysis a given case calls for.
4. Apply the fact-handling discipline in Step 2 and the "Real vs. Hypothetical Cases" section to every claim in the case, not only to headline events.
5. Populate the [Required Output](#required-output) at the end with the findings from Steps 1–17.

---

## STEP 1 — CASE IDENTIFICATION

Identify:

- Company
- Industry
- Countries
- Products/services
- Stakeholders
- Market
- Time period
- Strategic objective

This step establishes the case's basic coordinates before any analysis begins. If the case is hypothetical and any of these are unspecified, state a reasonable, explicitly labeled hypothetical value rather than leaving the case underspecified for the steps that follow.

---

## STEP 2 — FACTS

Extract only relevant facts — not every detail in the case narrative is load-bearing for the decision at hand. Separate:

- **Verified Facts** — specific, documented occurrences or figures stated in the case materials or confirmed against an authoritative source, ideally with a reference to where in the case (or which external source) they come from.
- **Assumptions** — premises the analysis needs but that are not directly stated, made explicit rather than left implicit.
- **Unknown Information** — material questions the case does not answer and that the analysis cannot resolve, named specifically rather than glossed over.

**Never invent missing information.** A case with an information gap should produce an analysis that says so explicitly and shows how the conclusion would change if the gap were filled one way or another (see Step 12's alternatives and Step 9's data-availability discipline) — not an analysis that quietly fills the gap with a plausible-sounding fact.

---

## STEP 3 — CORE BUSINESS PROBLEM

Identify:

- Main decision (the specific choice the protagonist actually faces)
- Symptoms (the visible effects described in the case — declining sales, a failed launch, a partner dispute)
- Root cause (the underlying condition actually producing those symptoms)
- Constraints (capital, time, organizational, regulatory)
- Objectives (what a successful resolution needs to achieve)

**Clearly distinguish symptoms from root causes.** A case describing declining sales in a foreign market (a symptom) may trace to a root cause of poor product-market fit, an ineffective distribution partner, or a mispriced offering relative to local purchasing power — these root causes point to entirely different recommendations (Step 14), so conflating the symptom with the cause is the single most common way a case analysis reaches a superficial or wrong conclusion. State the reasoning connecting the observed symptom(s) to the identified root cause explicitly, rather than asserting the root cause without justification.

---

## STEP 4 — BUSINESS OBJECTIVE

Define what the company needs to achieve. Examples:

- Enter a market
- Increase market share
- Reduce costs
- Improve margins
- Establish manufacturing
- Restructure supply chain
- Acquire a company
- Form a partnership
- Exit a market
- Mitigate geopolitical risk

State the objective as specifically as the case allows (not simply "improve performance") — the specific objective determines which of Step 8's specialized frameworks apply and what Step 14's recommendation is actually being evaluated against.

---

## STEP 5 — EXTERNAL ENVIRONMENT

Analyze:

- Country
- Economy
- Politics
- Regulation
- Trade
- Culture
- Technology
- Geopolitics
- Industry

This step is a broad scan, deliberately lighter than the dedicated country and international analysis in Step 8 — its purpose is to surface which external factors are actually relevant to this specific case before committing to a deeper, more resource-intensive analysis of only those that matter.

---

## STEP 6 — MARKET ANALYSIS

Evaluate:

- Market size
- Growth
- Demand
- Customer segments
- Pricing
- Competition
- Barriers
- Profitability

Distinguish market size, market growth, and overall market attractiveness as separate constructs — a case describing a large or fast-growing market has not thereby established that the market is attractive for this specific company's specific objective (Step 4); attractiveness also depends on competitive intensity (Step 7) and this company's ability to capture value in it (Step 12).

---

## STEP 7 — COMPETITIVE ANALYSIS

Use when appropriate:

- Porter's Five Forces
- SWOT
- VRIO
- Value Chain

**Explain why each framework is relevant** to this specific case before applying it — do not apply all four mechanically to every case. Five Forces fits a question about industry structural attractiveness; SWOT fits a firm-specific readiness question tied to a specific decision; VRIO fits a question about whether a claimed competitive advantage is genuinely sustainable in this market's competitive context; Value Chain fits a question about where in the company's operations its advantage or weakness actually resides. See `../02_MARKET/10_International_Business_Frameworks.md` for the full treatment of each framework's purpose, methodology, and — critically — its common misuses, which apply with equal force inside a case analysis.

---

## STEP 8 — INTERNATIONAL ANALYSIS

Use:

- PESTEL
- CAGE
- Country Risk (invoke [COUNTRY_ANALYSIS_FRAMEWORK.md](COUNTRY_ANALYSIS_FRAMEWORK.md) directly when the case turns on whether a specific country is attractive for a specific objective)
- Trade Analysis (invoke [IMPORT_EXPORT_FRAMEWORK.md](IMPORT_EXPORT_FRAMEWORK.md) directly when the case turns on a specific import/export transaction's feasibility and cost)
- Market Entry Framework (invoke [MARKET_ENTRY_FRAMEWORK.md](MARKET_ENTRY_FRAMEWORK.md) directly when the case turns on which entry mode a company should use)
- Supply Chain Analysis

**Do not use frameworks mechanically.** Select only the frameworks (and, within them, only the specific steps) that the case's actual decision requires — a case about whether to enter a market via joint venture or acquisition needs the Market Entry Framework's Steps 6–9 in depth; a case about whether a specific country is worth entering at all needs the Country Analysis Framework's full sequence; a case about a single shipment's feasibility needs the Import/Export Framework. Running every framework against every case produces length without insight and obscures which analysis actually drove the recommendation.

---

## STEP 9 — FINANCIAL ANALYSIS

When sufficient data exists, evaluate:

- Revenue
- Costs
- Margin
- Investment
- Cash flow
- NPV
- IRR
- Break-even
- Working capital
- Currency exposure

**If data is missing, do not fabricate it.** State explicitly which figures are given in the case (verified facts, per Step 2), which are reasonable, labeled estimates or assumptions needed to complete a calculation, and which cannot be determined at all — and show how the conclusion would shift under a plausible range for any assumed figure (this feeds directly into Step 12's alternative-scoring and, where the case is quantitatively rich enough to warrant it, a scenario analysis analogous to the specialized frameworks' scenario steps).

---

## STEP 10 — OPERATIONAL ANALYSIS

Evaluate:

- Supply chain
- Manufacturing
- Logistics
- Distribution
- Staffing
- Technology
- Partners
- Execution

This step tests whether the strategy under consideration is actually executable given the operational realities described in the case, not only whether it is strategically or financially sound — a theoretically superior alternative that the company's actual operational capability cannot deliver is not a viable recommendation (see MASTER_INSTRUCTIONS.md Section 15, Business Reality).

---

## STEP 11 — RISK ANALYSIS

Evaluate:

- Market risk
- Political risk
- Economic risk
- Financial risk
- Currency risk
- Regulatory risk
- Cultural risk
- Operational risk
- Supply-chain risk
- Geopolitical risk
- Reputational risk

Identify which of these risk categories are actually material to this specific case (not every case implicates all eleven) and, for each material risk, state what would need to occur for it to affect the outcome — this risk inventory feeds directly into Step 12's alternative evaluation and Step 16's contingency planning.

---

## STEP 12 — STRATEGIC ALTERNATIVES

**Generate at least two realistic alternatives** when appropriate — a case analysis considering only the option the protagonist actually chose (in a real case) or only one option (in a hypothetical case) has not tested whether that option was actually the best one available.

For each alternative, analyze:

- Strategic fit
- Cost
- Control
- Speed
- Risk
- Scalability
- Feasibility
- Profitability
- Operational complexity

Alternatives must be realistic given the constraints identified in Step 3 — do not include an alternative only to dismiss it as a strawman, and do not omit an alternative that a reasonable decision-maker in the protagonist's actual position would have considered.

---

## STEP 13 — DECISION MATRIX

When appropriate, create:

| Criterion | Weight | Option A | Option B | Option C |
|---|---|---|---|---|
| Strategic fit | | | | |
| Cost | | | | |
| Control | | | | |
| Speed | | | | |
| Risk | | | | |
| Scalability | | | | |
| Feasibility | | | | |
| Profitability | | | | |
| Operational complexity | | | | |
| **Weighted Total** | 100% | | | |

**Explain the scoring methodology** — state how each cell was scored (a defined ordinal scale, not an unexplained number), why the weights were set as they were (tied to the objective from Step 4 and the constraints from Step 3), and present the weighted total as directional input to judgment rather than an automatic, unquestionable winner. If two options score closely, say so explicitly rather than treating a marginal numeric difference as decisive.

---

## STEP 14 — RECOMMENDATION

Recommend the option that provides the strongest combination of:

- Strategic fit
- Financial attractiveness
- Feasibility
- Risk-adjusted return
- Scalability

**Explain why the rejected alternatives are less attractive** — a recommendation is not complete until it states specifically what each rejected option would have cost the company relative to the recommended one (not simply that it scored lower in Step 13). State the recommendation clearly and separately from the preceding analysis, and name the key assumptions it depends on, per MASTER_INSTRUCTIONS.md Section 5.

---

## STEP 15 — IMPLEMENTATION

Create a practical implementation plan using phases such as:

**Phase 1 — Validation**
**Phase 2 — Preparation**
**Phase 3 — Launch**
**Phase 4 — Scale**
**Phase 5 — Optimization**

For each phase, identify:

- Actions
- Resources
- Stakeholders
- Risks
- KPIs

Present as a table per phase, consistent with the implementation planning approach in [MARKET_ENTRY_FRAMEWORK.md](MARKET_ENTRY_FRAMEWORK.md) Step 14:

| Phase | Actions | Resources | Stakeholders | Risks | KPIs |
|---|---|---|---|---|---|
| 1. Validation | | | | | |
| 2. Preparation | | | | | |
| 3. Launch | | | | | |
| 4. Scale | | | | | |
| 5. Optimization | | | | | |

A recommendation (Step 14) without an implementation plan grounded in the company's actual, case-specific resources and stakeholders (not a generic template) is incomplete.

---

## STEP 16 — CONTINGENCY

Identify:

- Warning indicators (the specific, observable signals that the recommended strategy is underperforming)
- Failure conditions (what "not working" specifically looks like)
- Trigger points (the thresholds, tied to the warning indicators and Step 15's KPIs, that activate a reconsideration)
- Contingency actions (the range of responses available before a full exit)
- Exit strategy (the mechanics of unwinding the recommended strategy if it fails, including any partner, contractual, or regulatory considerations relevant to the specific case)

Define these at the same time as the recommendation and implementation plan (Steps 14–15) — a strategy defined without contingency planning is not fully specified under this framework, regardless of how strong the base-case reasoning is.

---

## STEP 17 — LESSONS LEARNED

Explain:

- What was done correctly
- What was done incorrectly
- Which assumptions were wrong (for a real case with a known outcome) or which assumptions carry the most risk if wrong (for a hypothetical case or a real case without a settled outcome)
- What alternative strategy could have worked (drawing on Step 12's alternatives)
- What other companies can learn (the generalizable principle, distinct from the specific facts of this case)

For a real case, ground this step in the actual, verified outcome (per Step 2's fact discipline) — do not speculate about what "was done incorrectly" beyond what the verified facts and reasonable analytical interpretation support, and label interpretation as interpretation. For a hypothetical case, this step becomes forward-looking: state which assumptions the recommended strategy is most sensitive to, since those are the equivalent of "lessons" for a case with no real outcome yet to evaluate.

---

## REAL VS. HYPOTHETICAL CASES

**For real cases**: Clearly separate historical facts from interpretation, per Step 2 and RESEARCH_PROTOCOL.md's fact/commentary/prediction discipline. Do not state a company's motivations, internal reasoning, or the "true" cause of an outcome as if it were a verified fact unless the case materials or a reliable source directly document it — label such statements as analytical interpretation. See `../10_CASES/20_International_Business_Case_Studies.md` for the specific "Verified/Widely Reported," "Analytical Interpretation," and "Hypothetical" labeling convention used throughout its worked examples, which should be applied here as well.

**For hypothetical cases**: Clearly label assumptions as hypothetical from the first mention, and keep them labeled throughout the analysis — do not let a hypothetical premise drift into being treated as an established fact by Step 14.

**In both cases — never invent company actions, financial figures, dates, or historical events.** For a real case, an invented detail is a fabrication; for a hypothetical case, an invented detail that is not explicitly flagged as hypothetical creates the same risk of being mistaken for fact. The discipline is identical in both directions: label the evidentiary status of every material claim and never let an invented specific pass as verified.

---

## REQUIRED OUTPUT

Present every completed case analysis using this exact structure:

```markdown
## Executive Summary

## Case Background

## Verified Facts

## Assumptions

## Business Problem

## Root Cause

## Objectives

## Market Analysis

## Country Analysis

## Competitive Analysis

## Strategic Analysis

## Financial Analysis

## Operational Analysis

## Risk Analysis

## Strategic Alternatives

## Decision Matrix

## Recommendation

## Implementation Plan

## KPIs

## Contingency Plan

## Lessons Learned
```

Notes on populating this template:

- **Executive Summary** is written last, after every other section is complete.
- **Case Background** corresponds to Step 1. **Verified Facts** and **Assumptions** correspond to Step 2 — note any material item from Step 2's "Unknown Information" category within whichever section it is most relevant to (typically alongside Assumptions or within the specific analytical section it affects), since this template does not carry a separate dedicated header for it.
- **Business Problem**, **Root Cause**, and **Objectives** correspond to Steps 3–4.
- **Market Analysis** corresponds to Step 6. **Country Analysis** corresponds to Step 8's country/international analysis (via COUNTRY_ANALYSIS_FRAMEWORK.md where invoked). **Competitive Analysis** corresponds to Step 7. **Strategic Analysis** captures Step 5's external environment scan together with any Step 8 findings (PESTEL, CAGE, trade, entry mode, supply chain) not already placed under Country Analysis.
- **Financial Analysis** and **Operational Analysis** correspond to Steps 9–10. **Risk Analysis** corresponds to Step 11.
- **Strategic Alternatives** and **Decision Matrix** correspond to Steps 12–13. **Recommendation** corresponds to Step 14 and must be clearly separated from the analysis preceding it.
- **Implementation Plan** and **KPIs** correspond to Step 15. **Contingency Plan** corresponds to Step 16. **Lessons Learned** corresponds to Step 17.
- Omit or condense any section not material to the specific case, but state explicitly that it was scoped down and why.

---

## FINAL PRINCIPLE

A strong case analysis must answer:

- **WHAT** should the company do?
- **WHY?**
- **WHAT** alternatives exist?
- **WHAT** are the trade-offs?
- **WHAT** could go wrong?
- **HOW** should the strategy be implemented?
- **HOW** will success be measured?

**The objective is to teach analytical reasoning, not memorization.** A completed case analysis under this framework should be judged by whether its reasoning would transfer to a different, unfamiliar case — not by whether it correctly recalls or restates facts about this specific one. If the same Steps 1–17 applied to a new, never-seen case would still produce a rigorous, well-structured analysis, this framework has done its job.
