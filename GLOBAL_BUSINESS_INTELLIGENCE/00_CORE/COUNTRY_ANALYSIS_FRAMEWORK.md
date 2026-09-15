# COUNTRY_ANALYSIS_FRAMEWORK.md

## Global Business Intelligence — Country Analysis Framework

*This is an **operational framework**, not an educational article. It defines, step by step, how Global Business Intelligence must analyze a real country and produce an actionable business recommendation. It operates under [MASTER_INSTRUCTIONS.md](MASTER_INSTRUCTIONS.md) (overall behavior) and [RESEARCH_PROTOCOL.md](RESEARCH_PROTOCOL.md) (how to source and verify current information) — both apply throughout every step below and are not restated in full here. Every reference to "verify," "current," or "research" in this document is an instruction to follow RESEARCH_PROTOCOL.md, not an invitation to state a remembered figure.*

---

## PRIMARY OBJECTIVE

Use this framework to evaluate whether a specific country is attractive for a specific business objective. This framework must never be run in the abstract ("tell me about Country X") — it is always run against one or more of the following objectives, and the analysis changes materially depending on which:

- Entering a market (selling into the country)
- Exporting (from the country)
- Importing (from the country)
- Manufacturing (in the country)
- Sourcing (inputs from the country)
- Foreign direct investment
- Establishing a subsidiary
- Establishing a regional headquarters
- Creating a joint venture
- Launching a startup
- Expanding an existing business

A country attractive for one objective can be unattractive for another (a country can be an excellent sourcing location and a poor regional headquarters location at the same time). Never produce a single undifferentiated "is this a good country" verdict — always tie the verdict to the specific objective identified in Step 1.

### Objective-Specific Emphasis

Use this table to weight analytical effort. Every step still gets addressed, but depth should concentrate where the objective makes it decision-relevant.

| Objective | Steps Warranting the Deepest Analysis |
|---|---|
| Market entry (selling) | 4 (Market Attractiveness), 5 (Competitive Environment), 9 (Cultural Environment), 8 (Trade Environment) |
| Exporting | 8 (Trade Environment), 10 (Infrastructure/Logistics), 12 (Financial Environment — currency/payment) |
| Importing / Sourcing | 8 (Trade Environment), 10 (Infrastructure/Logistics), 11 (Labor/Talent — for manufactured inputs), 14 (Environmental) |
| Manufacturing | 10 (Infrastructure/Logistics), 11 (Labor/Talent), 7 (Regulatory), 12 (Financial — currency exposure) |
| Foreign direct investment | 6 (Political), 7 (Regulatory — ownership/screening), 12 (Financial — repatriation), 13 (Geopolitical) |
| Subsidiary | 7 (Regulatory), 11 (Labor/Talent), 12 (Financial), 6 (Political) |
| Regional headquarters | 6 (Political — institutional quality), 10 (Infrastructure — connectivity), 11 (Labor/Talent — management talent), 9 (Cultural — as a hub for a wider region) |
| Joint venture | 9 (Cultural Environment), 6 (Political — partner/government relationship norms), 7 (Regulatory — ownership requirements) |
| Startup launch | 4 (Market Attractiveness), 7 (Regulatory — ease of formation), 11 (Labor/Talent), 12 (Financial — capital availability) |
| Expansion of existing business | 4 (Market Attractiveness — incremental), 5 (Competitive Environment), 19 (Country Score, relative to other expansion candidates) |

---

## HOW TO USE THIS FRAMEWORK

1. Execute Steps 1–21 in sequence. Do not skip from Step 1 directly to Step 21 — a recommendation not built on the intervening steps is not a recommendation this framework produces.
2. Scale depth to stakes. A quick preliminary screen may move through each step briefly; a major FDI or subsidiary decision should go deep on every step, especially those flagged in the Objective-Specific Emphasis table above.
3. Apply RESEARCH_PROTOCOL.md to every dynamic data point (Section 2 of that document defines what counts as dynamic). Label every figure as verified fact, current data requiring verification, assumption, or estimate, per MASTER_INSTRUCTIONS.md Section 5.
4. Populate the [Required Output Format](#required-output-format) at the end with the findings from Steps 1–21 — that format is the deliverable; Steps 1–21 are the working process that produces it.
5. State explicit assumptions rather than stalling. If information needed for a step is missing but a useful preliminary analysis can still be produced, make the assumption explicit and proceed (per MASTER_INSTRUCTIONS.md Section 12) — do not halt the analysis to ask a clarifying question unless the missing information would materially change the recommendation.

---

## STEP 1 — DEFINE THE BUSINESS OBJECTIVE

Before analyzing the country, identify:

- Company
- Industry
- Product/service
- Target customer
- Business model
- Investment size
- Time horizon
- Strategic objective
- Risk tolerance
- Expected return
- Required control

If information is missing but the analysis can proceed, make explicit assumptions instead of stopping unnecessarily. State each assumption plainly (e.g., "assuming a mid-market entry with moderate capital commitment, since investment size was not specified") so it can be corrected later without invalidating the rest of the analysis.

**Output of this step**: a one-paragraph statement of what is actually being decided, which of the eleven objectives in the Primary Objective section applies, and the assumptions filling any gaps.

---

## STEP 2 — COUNTRY PROFILE

Analyze:

- Geography
- Population
- Demographics
- Urbanization
- Major cities
- Major industries
- Natural resources
- Infrastructure (high-level; detailed logistics analysis is Step 10)
- Economic structure
- Trade structure

Treat this step as orientation, not analysis — it establishes the factual backdrop the later steps interpret. Keep it concise and flag every figure that is current data (population, urbanization rate, city sizes) per RESEARCH_PROTOCOL.md Section 2.

---

## STEP 3 — MACROECONOMIC ANALYSIS

Evaluate:

- GDP
- GDP growth
- GDP per capita
- Inflation
- Unemployment
- Interest rates
- Exchange rate
- Currency stability
- Fiscal position
- Public debt
- External balance
- Consumer purchasing power
- Economic diversification

**For every factor, state the business implication — do not merely describe the statistic.** Use this structure for each line item:

| Factor | Current Value (flag for verification) | Business Implication for This Objective |
|---|---|---|
| GDP growth | [verify] | e.g., sustained growth above X supports rising demand for the target product category; if growth is volatile, build wider scenario ranges (Step 20) |
| Inflation | [verify] | High or unstable inflation erodes local-currency pricing and complicates long-term contracts; consider price-adjustment clauses |
| Interest rates | [verify] | High local rates raise the cost of local-currency financing; may favor a natural-hedge or parent-financed structure |
| Exchange rate / currency stability | [verify] | Determines transaction and economic currency exposure (see repatriation and hedging considerations in Step 12) |
| Public debt / fiscal position | [verify] | Elevated or worsening public debt is a leading indicator of future tax increases, currency pressure, or reduced government spending relevant to the sector |
| External balance | [verify] | A large, persistently financed current account deficit signals currency and capital-control risk; check how it is financed (FDI vs. volatile short-term flows) |
| Consumer purchasing power | [verify] | Directly bounds achievable pricing (Step 4) and realistic market size for the specific price point |
| Economic diversification | [verify] | A narrowly concentrated economy (e.g., single-commodity dependent) carries higher macro volatility relevant to demand and currency risk |

Never present this table with only the "Current Value" column filled and the "Business Implication" column left generic — a statistic without an implication for the stated objective is not yet analysis.

---

## STEP 4 — MARKET ATTRACTIVENESS

Evaluate:

- Market size
- Market growth
- Demand
- Customer segments
- Purchasing power
- Consumer behavior
- Price sensitivity
- Market maturity
- Unmet needs
- Industry growth
- Profitability potential

**Distinguish clearly between three different things that are commonly and incorrectly treated as synonyms:**

- **Market Size** — the current volume or value of demand in the relevant category (revenue, units, or apparent consumption — see the TAM/SAM/SOM distinction in RESEARCH_PROTOCOL.md Section 11). A snapshot, not a judgment.
- **Market Growth** — the rate of change in that size over time. A large market can be stagnant or shrinking; a small market can be growing rapidly. Neither size nor growth alone determines attractiveness.
- **Market Attractiveness** — a synthesis judgment combining size, growth, competitive intensity (Step 5), structural profitability potential, and — critically — this specific company's ability to capture value in this specific market given its capabilities and the objective defined in Step 1. A large, fast-growing market that is intensely competitive or structurally low-margin can be less attractive than a smaller, calmer market the company can realistically win in.

Never report market size or growth alone as if it settled the attractiveness question. State explicitly how size, growth, and the Step 5 competitive analysis combine into the attractiveness conclusion.

---

## STEP 5 — COMPETITIVE ENVIRONMENT

Analyze:

- Local competitors
- International competitors
- Market concentration
- Barriers to entry
- Distribution structure
- Pricing competition
- Customer loyalty
- Substitutes
- Competitive advantages (the company's own, relative to this specific market's incumbents)

Use Porter's Five Forces when appropriate: threat of new entrants, bargaining power of suppliers, bargaining power of buyers, threat of substitutes, and rivalry among existing competitors. Assess forces at the level of this specific country/market, not the global industry in general — force intensity varies by market. State explicitly whether the company's claimed competitive advantage actually holds against this market's specific competitive set (do not assume a home-market advantage transfers automatically).

---

## STEP 6 — POLITICAL ENVIRONMENT

Evaluate:

- Political stability
- Government effectiveness
- Institutional quality
- Policy predictability
- Rule of law
- Corruption
- Political transitions
- Government intervention (in the specific sector relevant to the objective)
- Business-government relationship

Explain how political factors can affect companies concretely — e.g., low policy predictability raises the discount rate and shortens the payback horizon a rational investor should require; weak rule of law increases reliance on relationship-based rather than contract-based assurance; government intervention history in the specific sector (price controls, nationalization precedent) is a direct input to expropriation risk assessment. Do not present political indicators as background color disconnected from the business decision.

---

## STEP 7 — REGULATORY ENVIRONMENT

Evaluate:

- Foreign ownership restrictions
- Licensing
- Permits
- Product regulations
- Employment regulations
- Intellectual property
- Taxation
- Investment restrictions
- Competition law
- Data/privacy regulations (where relevant to the business model)

**Current regulations must be researched and verified separately, per RESEARCH_PROTOCOL.md Section 9. Never invent regulatory requirements.** Where a specific regulatory requirement is material to the objective (e.g., a foreign ownership cap for FDI, a licensing requirement for market entry) and cannot be verified within the current analysis, state plainly that it requires verification with local qualified counsel or the relevant regulatory authority — do not fill the gap with a plausible-sounding rule.

---

## STEP 8 — TRADE ENVIRONMENT

Evaluate:

- Tariffs
- Trade agreements
- Customs
- Rules of origin
- Non-tariff barriers
- Import restrictions
- Export restrictions
- Trade remedies
- Market access

**If current information is required — and for tariffs, trade agreement terms, and trade remedy status, it almost always is — follow RESEARCH_PROTOCOL.md in full**, including Section 8's specific tariff-research requirements (exporting/importing country, product, HS classification, applicable agreement, origin) before stating any duty rate or preference eligibility. Never state a specific tariff rate, HS code, or trade remedy determination from memory.

---

## STEP 9 — CULTURAL ENVIRONMENT

Evaluate:

- Consumer culture
- Communication (direct/indirect, high-/low-context)
- Negotiation norms
- Management style expectations
- Relationship building
- Business etiquette
- Localization requirements

Use frameworks such as:

- Hofstede
- Hall
- Trompenaars
- GLOBE
- CAGE (cultural distance specifically; the full CAGE analysis is Step 16)

**IMPORTANT — Do not use cultural frameworks to stereotype people. Treat every cultural dimension as a hypothesis about population-level tendencies, never a deterministic prediction about a specific individual, company, or negotiating counterpart.** Explicitly flag cultural findings as hypotheses to validate through direct interaction or local advisors, not conclusions. This mirrors the discipline detailed in full at `../06_PEOPLE/09_Cross_Cultural_Business.md` — consult it for the underlying framework mechanics and their documented limitations before applying any specific dimension to this country.

---

## STEP 10 — INFRASTRUCTURE AND LOGISTICS

Evaluate:

- Ports
- Airports
- Roads
- Rail
- Warehousing
- Telecommunications
- Electricity (reliability, not just availability)
- Logistics providers (local capability and coverage)
- Supply chain reliability
- Delivery infrastructure (last-mile, particularly for e-commerce/market-entry objectives)

Explain business implications for each — e.g., unreliable electricity implies a backup power investment requirement for manufacturing; weak last-mile delivery infrastructure implies a longer path to viable e-commerce unit economics; port congestion or limited capacity implies wider lead-time buffers and higher safety stock in landed cost calculations.

---

## STEP 11 — LABOR AND TALENT

Evaluate:

- Workforce size
- Labor availability
- Skills (specific to the role types the objective requires)
- Education
- Productivity
- Wages
- Talent availability (specifically for the skill profile needed, not general labor statistics)
- Labor regulations (hiring/termination flexibility, collective bargaining norms)
- Management talent (particularly relevant for a subsidiary or regional headquarters objective)

Match this step's depth to the objective — a manufacturing objective needs production-labor availability and wage data; a regional headquarters objective needs management and professional-services talent depth; a startup objective needs technical/founder-adjacent talent availability.

---

## STEP 12 — FINANCIAL ENVIRONMENT

Evaluate:

- Currency risk
- Banking system (depth, stability, foreign bank access)
- Capital availability (local debt and equity financing access)
- Interest rates
- Convertibility
- Repatriation (restrictions, approval requirements, historical reliability)
- Financing (available structures — local currency debt, intercompany financing feasibility)
- Inflation (as it affects financial planning, distinct from its macro treatment in Step 3)
- Financial stability (banking sector health, historical crisis frequency)

Tie every finding back to the specific financial mechanics relevant to the objective — repatriation restrictions matter enormously for FDI/subsidiary objectives and are largely irrelevant for a one-off export transaction; convertibility risk matters for any objective generating local-currency revenue that must eventually be converted.

---

## STEP 13 — GEOPOLITICAL RISK

Evaluate:

- Regional relationships
- Trade conflicts
- Sanctions
- Geopolitical dependencies (the country's dependency on a specific partner/bloc relevant to the business)
- Strategic resources (the country's role in, or dependency on, strategically significant commodities or technology)
- Security
- Supply chain vulnerabilities (chokepoints, concentration)
- Political tensions

**Separate verified facts from scenarios and interpretations.** Use the three-way distinction from RESEARCH_PROTOCOL.md (fact / commentary / prediction, as detailed further in `../08_GEOPOLITICS/18_Geopolitics_and_Business.md`): state what is verified and dated, attribute any interpretation to its source, and frame any forward-looking claim explicitly as one possible scenario, not an assumed certainty.

---

## STEP 14 — ENVIRONMENTAL FACTORS

Evaluate where relevant to the objective:

- Climate
- Natural disasters (frequency/severity relevant to the specific location)
- Environmental regulations
- Water (availability, particularly for water-intensive manufacturing)
- Energy (availability, cost, and sustainability profile)
- Sustainability requirements (regulatory or customer-driven)
- Environmental supply-chain risk

This step can be brief for objectives with low environmental exposure (e.g., a pure market-entry/sales objective with no local physical operations) and should be substantial for manufacturing, sourcing, or infrastructure-heavy objectives.

---

## STEP 15 — PESTEL

Perform a PESTEL analysis: Political, Economic, Social, Technological, Environmental, Legal.

**Do not merely list factors. Explain their implications for the specific business** defined in Step 1 — a PESTEL entry is incomplete if it states a condition without connecting it to a consequence for this objective, this industry, or this company. Draw the six categories' content from Steps 3, 6, 7, 9, 11, 13, and 14 rather than re-researching from scratch — PESTEL at this stage is a synthesis lens on findings already gathered, not a new data-collection exercise.

---

## STEP 16 — CAGE ANALYSIS

Analyze:

- **Cultural Distance** — drawing on Step 9's findings
- **Administrative Distance** — political/legal system differences, trade agreement membership, currency regime, historical/colonial ties
- **Geographic Distance** — physical distance, time zones, climate, transport links (drawing on Step 10)
- **Economic Distance** — income, cost structure, and resource-level differences between the home market and this country

**Explain how each dimension affects the business** — do not present CAGE as four abstract labels. State, for example, whether cultural distance implies a need for a local partner (per Step 5/9 findings), whether administrative distance implies a joint venture requirement (per Step 7), and whether the aggregate distance profile suggests a lower-commitment entry mode is prudent until more market-specific knowledge is built.

---

## STEP 17 — SWOT

Create:

- **Strengths** (internal)
- **Weaknesses** (internal)
- **Opportunities** (external)
- **Threats** (external)

**Distinguish internal factors from external factors explicitly** — Strengths and Weaknesses describe the company's own capabilities and gaps relative to this specific country/objective; Opportunities and Threats describe conditions in the country/market itself, independent of the company. Do not list a market condition (e.g., "growing demand") as a Strength, or a company capability (e.g., "strong balance sheet") as an Opportunity — this is the single most common SWOT construction error and undermines the framework's diagnostic value. Cross-reference each SWOT item to the specific step (2–16) that generated it.

---

## STEP 18 — RISK MATRIX

For each major risk identified across Steps 3, 6, 7, 8, 12, 13, and 14, evaluate:

- Probability
- Impact
- Exposure (how much of the business/investment is actually affected if the risk materializes)
- Mitigation
- Residual risk (after mitigation)

**Use Low / Medium / High when numerical precision is not justified** — which, for most political, regulatory, and geopolitical risk categories, is most of the time. Reserve numerical probability estimates for cases where a genuinely defensible quantitative basis exists (e.g., historical frequency data). Present as a table:

| Risk | Probability | Impact | Exposure | Mitigation | Residual Risk |
|---|---|---|---|---|---|
| [e.g., currency depreciation] | Medium | High | [specific exposed revenue/cost share] | [natural/financial hedge] | Medium |
| [e.g., regulatory change in sector] | [Low/Med/High] | [Low/Med/High] | [specific] | [specific] | [Low/Med/High] |

---

## STEP 19 — COUNTRY SCORE

When useful, create a weighted country attractiveness score. Suggested starting weights:

| Dimension | Suggested Starting Weight |
|---|---|
| Market Attractiveness | 20% |
| Economic Environment | 15% |
| Political/Regulatory Environment | 15% |
| Competitive Environment | 10% |
| Trade Access | 10% |
| Infrastructure/Logistics | 10% |
| Labor/Talent | 5% |
| Financial Environment | 5% |
| Cultural Fit | 5% |
| Geopolitical Risk | 5% |

**These weights MUST NOT be treated as universal. Adapt them according to the user's objective** — per the Objective-Specific Emphasis table at the top of this document. For example: weight Trade Access and Infrastructure/Logistics much higher for an exporting or sourcing objective; weight Political/Regulatory and Geopolitical Risk much higher for FDI or a subsidiary; weight Cultural Fit and Political/Regulatory higher for a joint venture; weight Labor/Talent higher for manufacturing or a regional headquarters.

**Explain the scoring methodology and uncertainty. Avoid false precision.** Score each dimension on a coarse ordinal scale (e.g., 1–5, with each level defined in words) before converting to a 0–100 composite, present the composite as a range (e.g., "60–70") rather than a single point, and disclose which inputs were verified fact versus estimate versus assumption. Never adjust weights after seeing an unfavorable score to produce a more favorable one.

---

## STEP 20 — SCENARIOS

When useful, create:

- **Base Case** — the most likely trajectory given current, verified conditions
- **Upside Case** — a plausible, internally consistent scenario more favorable than the base case
- **Downside Case** — a plausible, internally consistent scenario less favorable than the base case

**Explain which variables drive each scenario** — name the specific 2–4 variables (e.g., currency trajectory, a pending regulatory change, a trade agreement renewal or dispute, a competitive entrant) that differentiate the cases, and state what observable trigger would signal the analysis is moving toward the upside or downside case rather than the base case. Never present the base case as a certainty or the upside/downside cases as decorative afterthoughts — all three should be genuinely plausible and should meaningfully change the recommendation in Step 21 if they materialize.

---

## STEP 21 — FINAL RECOMMENDATION

The AI must answer: **Is this country attractive for the specific business objective defined in Step 1?**

Base the answer on:

- Strategic fit (does this country genuinely serve the strategic objective stated in Step 1, not just present a generically attractive environment)
- Market attractiveness (Step 4's synthesis, not size or growth alone)
- Financial attractiveness (Steps 3, 12, and, where a quantified return is feasible, an explicit return estimate with stated assumptions)
- Operational feasibility (Steps 10, 11 — can the business actually be executed here given the company's real capabilities and resources)
- Risk (Steps 6, 7, 8, 13, 18 synthesized — and whether the residual risk after mitigation is acceptable given the stated risk tolerance from Step 1)
- Scalability (can this country serve as a platform for further regional expansion, or is it a standalone, capped opportunity)

**Do not recommend a country simply because it has low labor costs, a large population, or high GDP growth.** Each of these is one input among many (Steps 3, 4, 11) and none is sufficient alone — a large population with low purchasing power may not support the target price point (Step 4); low labor cost can be offset by low productivity or poor infrastructure (Steps 10–11); high GDP growth concentrated in a sector or region irrelevant to the objective does not translate into demand for this specific business. The recommendation must synthesize across all six criteria above, explicitly state the assumptions it depends on, and be clearly distinguishable from the preceding analysis (per MASTER_INSTRUCTIONS.md Section 5).

---

## REQUIRED OUTPUT FORMAT

Present every completed country analysis using this exact structure:

```markdown
## Executive Summary

## Business Objective

## Key Assumptions

## Country Snapshot

## Market Attractiveness

## Macroeconomic Analysis

## Political Environment

## Regulatory Environment

## Trade Environment

## Competitive Environment

## Cultural Environment

## Infrastructure & Logistics

## Labor & Talent

## Financial Environment

## Geopolitical Risk

## PESTEL

## CAGE

## SWOT

## Risk Matrix

## Country Score

## Scenarios

## Opportunities

## Threats

## Recommendation

## Information Still Needed
```

Notes on populating this template:

- **Executive Summary** is written last, after every other section is complete, even though it appears first.
- **Country Snapshot** corresponds to Step 2. **Macroeconomic Analysis** corresponds to Step 3. **Market Attractiveness** corresponds to Step 4. **Competitive Environment**, **Political Environment**, **Regulatory Environment**, **Trade Environment**, **Cultural Environment**, **Infrastructure & Logistics**, **Labor & Talent**, **Financial Environment**, and **Geopolitical Risk** correspond directly to Steps 5–13. **PESTEL**, **CAGE**, **SWOT**, **Risk Matrix**, **Country Score**, and **Scenarios** correspond to Steps 15–20 respectively (Step 14, Environmental Factors, folds into PESTEL's "Environmental" category and, where material on its own, into the Country Snapshot or a dedicated note).
- **Opportunities** and **Threats** may either stand alone as a distilled summary of the external findings across all sections, or explicitly reference the Opportunities/Threats already identified in the SWOT — do not silently duplicate contradictory content between the two.
- **Recommendation** corresponds to Step 21 and must be clearly separated from the analytical sections that precede it.
- **Information Still Needed** lists every item flagged for verification throughout the analysis (per RESEARCH_PROTOCOL.md) that a decision-maker should confirm with a current, authoritative source before acting — this section should never be empty for a real, non-hypothetical country analysis, since some inputs will always be time-sensitive.
- Omit or condense any section that is genuinely not material to the specific objective (e.g., Labor & Talent can be brief for a pure export-sales objective with no local hiring), but note explicitly that it was scoped down and why, rather than silently deleting it.

---

## IMPORTANT RULES

- **Never fabricate current statistics.**
- **Never fabricate tariffs.**
- **Never fabricate regulations.**
- **Never fabricate political conditions.**
- **Never fabricate rankings.**
- **Current information must be verified through authoritative sources according to RESEARCH_PROTOCOL.md** — every dynamic data point in Steps 3, 6, 7, 8, 12, and 13 specifically is a candidate for this requirement.
- **This framework produces actionable business intelligence, not an academic country report.** Every section must connect back to the specific business objective from Step 1 — a factually accurate section that does not inform the Step 21 recommendation has not fulfilled its purpose in this framework, however complete or well-written it is.
