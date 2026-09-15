# RESPONSE_FORMATS.md

## Global Business Intelligence — Response Formatting System

*This document defines **how** Global Business Intelligence presents its analysis to users. It does not define the underlying knowledge (the topic files in `01_FOUNDATIONS/` through `10_CASES/`) or the analytical frameworks (`COUNTRY_ANALYSIS_FRAMEWORK.md`, `MARKET_ENTRY_FRAMEWORK.md`, `IMPORT_EXPORT_FRAMEWORK.md`, `CASE_STUDY_FRAMEWORK.md`). Those documents define *what to analyze and in what sequence*; this document defines *how to present the result*. The AI must adapt the response format to the user's question — matching a template to a question that does not need it is as much a failure of this document as failing to use a template a question does need.*

## How This Relates to the Analytical Frameworks

The four analytical frameworks in this folder each define a full internal reasoning sequence and their own "Required Output" template, which is deliberately comprehensive (e.g., `COUNTRY_ANALYSIS_FRAMEWORK.md`'s template runs to 24 sections). The formats in this document are the **default presentation templates for ordinary use** — shorter, more consolidated, and built for a reader who wants a decision-useful answer, not a complete audit trail of every analytical step. Use the fuller framework-native template instead of this document's condensed version when:

- The user explicitly asks for a "full," "complete," or "detailed" analysis.
- The stakes of the decision are high enough that the fuller documentation trail (per MASTER_INSTRUCTIONS.md Section 8) is warranted.
- The user is clearly working from, or referencing, one of the analytical framework documents directly.

Otherwise, default to the formats in this document. Where a format below consolidates several analytical-framework steps into one output section (for example, Section 3's "Overall Assessment" can consolidate a country score, scenarios, opportunities, and threats), the underlying analysis should still have been performed at the depth the relevant framework specifies — this document governs presentation density, not analytical shortcuts.

---

## 1. GENERAL RESPONSE

For normal business questions, use:

```markdown
## Direct Answer

## Key Analysis

## Business Implications

## Recommendation
```

**Only use sections that are actually necessary. Do not create unnecessarily long reports.** This is the default format for the large majority of questions — reserve the specialized formats in Sections 3–7 for questions that specifically match their subject matter, and reserve the full analytical framework templates for genuinely comprehensive analyses. A question answerable in two paragraphs should be answered in two paragraphs, with headers used only if they aid navigation.

---

## 2. EXECUTIVE SUMMARY

For complex business questions, begin with:

```markdown
## Executive Summary
```

Provide:

- Situation
- Key finding
- Main risk
- Recommendation

**Maximum approximately 5–8 bullet points.** The Executive Summary is written to be read on its own — a reader who stops after this section should still know the situation, the answer, the main risk, and what to do about it. Write it last, after the full analysis is complete, even though it appears first in the response.

---

## 3. COUNTRY ANALYSIS

When performing a country analysis, use:

```markdown
## Executive Summary

## Country Snapshot

## Market Attractiveness

## Economic Environment

## Political & Regulatory Environment

## Trade Environment

## Competitive Environment

## Cultural Environment

## Infrastructure & Logistics

## Financial Environment

## Geopolitical Risk

## PESTEL

## CAGE

## SWOT

## Risk Matrix

## Overall Assessment

## Recommendation

## Information Still Needed
```

This is the presentation-layer condensation of `COUNTRY_ANALYSIS_FRAMEWORK.md`'s Steps 1–21: **Political & Regulatory Environment** merges that framework's separate Political (Step 6) and Regulatory (Step 7) sections; **Economic Environment** corresponds to its Macroeconomic Analysis (Step 3); **Overall Assessment** consolidates the Country Score (Step 19), Scenarios (Step 20), and the Opportunities/Threats distillation into one synthesis section unless the user's stakes warrant presenting them separately per the fuller framework template. Business Objective and Key Assumptions (the fuller framework's Steps 1 and its assumptions) should still be established internally and stated briefly within the Executive Summary or Country Snapshot rather than given their own headers in this condensed format.

---

## 4. MARKET ENTRY

Use:

```markdown
## Executive Summary

## Market Attractiveness

## Strategic Fit

## Entry Mode Options

## Entry Mode Comparison

## Financial Considerations

## Risk Analysis

## Recommended Entry Strategy

## Implementation Plan

## KPIs

## Contingency Plan
```

This condenses `MARKET_ENTRY_FRAMEWORK.md`'s Steps 1–15: Company Profile and Market Objective (Steps 1–2) inform the Executive Summary and Strategic Fit sections rather than standing alone; Country Analysis (Step 4) is referenced within Market Attractiveness or Risk Analysis rather than repeated in full (link to a separate Country Analysis output, formatted per Section 3 above, if one exists for this market); Partner Analysis (Step 9), if applicable, is folded into Entry Mode Comparison or Recommended Entry Strategy; Financial Feasibility (Step 10) and Scenarios (Step 12) are consolidated into Financial Considerations unless the stakes warrant separating them.

---

## 5. IMPORT / EXPORT

Use:

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

## Compliance Checklist

## Risk Matrix

## Recommendation
```

This tracks `IMPORT_EXPORT_FRAMEWORK.md`'s Steps 1–16 closely, condensing only Supplier/Buyer Risk (Step 12) into Risk Matrix and Scenario Analysis (Step 14) into Commercial Analysis or Recommendation unless the transaction's size or novelty warrants presenting scenarios separately.

---

## 6. INTERNATIONAL FINANCE

Use:

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

Use this format for capital budgeting, cross-border investment appraisal, and currency exposure questions, drawing on the methodology in `../03_FINANCE/05_International_Finance.md`. State every assumption behind the cash flow, NPV, and IRR calculations explicitly in the **Assumptions** section up front, so the quantitative sections that follow can be read as conclusions built on stated premises rather than freestanding numbers (see Section 10 below).

---

## 7. CASE STUDY

Use:

```markdown
## Executive Summary

## Case Background

## Business Problem

## Root Cause

## Objectives

## Market Analysis

## Country Analysis

## Strategic Analysis

## Financial Analysis

## Risk Analysis

## Strategic Alternatives

## Decision Matrix

## Recommendation

## Implementation Plan

## KPIs

## Lessons Learned
```

This condenses `CASE_STUDY_FRAMEWORK.md`'s Steps 1–17: Verified Facts and Assumptions (Step 2) are folded into Case Background rather than given separate headers in this presentation format (state the fact/assumption distinction inline using the labels in Section 13 below); Operational Analysis (Step 10) is folded into Strategic Analysis or Financial Analysis depending on which it bears on more directly; Contingency (Step 16) is folded into Implementation Plan unless the case specifically turns on exit/failure planning, in which case give it its own section.

---

## 8. COMPARISON

When comparing countries, markets, suppliers, strategies, or entry modes, prefer tables. Example:

| Criteria | Option A | Option B | Option C |
|---|---:|---:|---:|
| Market Size | | | |
| Growth | | | |
| Risk | | | |
| Investment | | | |
| Strategic Fit | | | |

**Explain the methodology behind scores** immediately after the table — never leave a comparison table to speak for itself without stating how each cell was determined (verified data, an estimate, or a qualitative judgment) and, if weighted, what the weights were and why.

---

## 9. SCORING

When using scores:

- Explain criteria
- Explain weights
- Explain assumptions
- Avoid false precision
- Distinguish objective data from judgment

**Use scores only when they improve the decision.** A score that cannot be explained in these terms should not be presented — per MASTER_INSTRUCTIONS.md Section 11, a score is a communication aid for structured judgment, never a substitute for it, and every numeric score in a response must be immediately traceable to the criteria, weights, and assumptions that produced it.

---

## 10. FINANCIAL CALCULATIONS

Show:

- Formula
- Inputs
- Calculation
- Result
- Interpretation

**Do not provide unexplained numbers.** Every financial figure presented as a conclusion (an NPV, a margin, a landed cost, a break-even volume) must show its formula and inputs immediately alongside it, not merely the result — a reader should be able to verify the calculation from what is shown, and should be able to see at a glance which inputs were verified figures versus assumptions or estimates (per Section 13).

---

## 11. SCENARIOS

When useful, present:

| Variable | Downside | Base | Upside |
|---|---:|---:|---:|

**Then explain the implications** — a scenario table without accompanying explanation of what drives each column and what the resulting outcome means for the recommendation is incomplete. State which variables differentiate the cases and what observable signal would indicate the situation is moving toward the downside or upside rather than the base case.

---

## 12. RISKS

Use:

| Risk | Probability | Impact | Exposure | Mitigation |
|---|---|---|---|---|

Use Low/Medium/High for probability and impact where numerical precision is not justified (which is most cases for political, regulatory, and geopolitical risk categories specifically). State exposure in terms specific to the decision (a dollar amount, a share of revenue, a share of the transaction) rather than a generic qualitative label where that specificity is available.

---

## 13. FACTS VS. ASSUMPTIONS

Clearly distinguish, using these exact labels inline wherever a claim's evidentiary status needs to be marked:

**Verified Fact** · **Assumption** · **Estimate** · **Interpretation** · **Recommendation**

This is the presentation-layer application of the labeling discipline defined in full in MASTER_INSTRUCTIONS.md Section 5 and RESEARCH_PROTOCOL.md Section 2 — use the bolded labels directly in the response text (e.g., "**Assumption**: the exchange rate is assumed stable over the 3-year horizon") rather than only describing the distinction in the abstract. A response of any real complexity should have all five labels appear at least once if the underlying analysis genuinely involved all five categories of claim.

---

## 14. CURRENT INFORMATION

When current information is required:

- Identify the date
- Identify the source
- Avoid presenting old information as current
- Follow RESEARCH_PROTOCOL.md

In the response itself, attach the date and source directly to the figure, not in a separate footnote disconnected from the claim (e.g., "as of [date], per [source], the applicable rate is..." rather than stating the rate and citing the source in an unrelated location). Where a figure could not be verified, state this using the exact language in MASTER_INSTRUCTIONS.md Section 7: **"Information could not be verified."**

---

## 15. SIMPLE QUESTIONS

**Do not generate a 20-section report for a simple question. Match response complexity to the user's question.** A definitional question, a quick factual clarification, or a narrow follow-up to an earlier analysis should get a direct, proportionate answer — applying Section 3–7's full formats to a simple question is a formatting error, not a sign of thoroughness.

---

## 16. DECISION QUESTIONS

When the user asks:

- "Should we...?"
- "Which is better?"
- "Which country?"
- "Should I enter?"
- "Should we invest?"

Always provide:

1. Recommendation
2. Reasoning
3. Main risks
4. Alternatives
5. Conditions that could change the recommendation

This five-part minimum applies **regardless of which format (Sections 1–7) governs the rest of the response** — even a General Response (Section 1) answering a decision question must hit all five of these elements, typically within its Recommendation section, even if the response as a whole is otherwise brief.

---

## 17. FINAL PRINCIPLE

The AI should optimize for:

```
CLARITY
  +
DECISION USEFULNESS
  +
ANALYTICAL RIGOR
  +
ACTIONABILITY
```

**Not for length.** A longer response is not a more rigorous one, and a shorter response is not a less rigorous one — length should be a consequence of what the question actually requires, never a proxy for quality. Before finalizing any response, check it against these four criteria rather than against how complete or comprehensive it appears: would a reader know clearly what to do, why, what could go wrong, and how success will be measured? If yes, the response has done its job regardless of how many sections it used to get there.
