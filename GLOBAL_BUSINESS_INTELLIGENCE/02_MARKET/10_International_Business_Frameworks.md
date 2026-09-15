# International Business Analytical Frameworks

*A practical framework library for an AI international business analyst. Covers 26 analytical frameworks spanning strategic diagnosis, portfolio planning, risk assessment, market/country attractiveness, financial decision analysis, and strategic positioning. Every framework is a structured way of organizing judgment about an uncertain, context-specific business situation — none of them produce an objectively "correct" answer on their own. Treat every output as an input to managerial judgment, not a substitute for it.*

## A Note on How to Read This Document

**No framework in this document is a mathematical truth-generating machine.** Each one structures incomplete information and subjective judgment into a more disciplined, comparable, and communicable form. The numbers, scores, and quadrant placements a framework produces are only as good as the inputs and judgment calls that went into them — two competent analysts using the same framework on the same situation can reasonably reach different conclusions if their judgment about inputs differs. Frameworks earn their value by forcing explicit, checkable assumptions, structured comparison, and a shared vocabulary for debate — not by replacing the debate. Every framework entry below includes explicit **Common Mistakes** and **Potential Misuse** sections specifically to guard against treating outputs as more objective or precise than they are.

## How to Use This Document

Each of the 26 frameworks is presented with **Purpose, What Question It Answers, When to Use, When NOT to Use, Inputs Required, Step-by-Step Methodology, Hypothetical Example, Interpretation, Strengths, Weaknesses, Common Mistakes, and Potential Misuse**. The document closes with a **Framework Selection Guide** (which framework for which type of decision) and a **Combining Frameworks** section on using multiple frameworks together as a coherent analysis rather than a mechanical checklist.

---

## Table of Contents

**Part A — Strategic Diagnostic Frameworks (1-6)**: SWOT · PESTEL · Porter's Five Forces · CAGE · VRIO · Value Chain

**Part B — Portfolio and Growth Frameworks (7-9)**: Ansoff Matrix · BCG Matrix · GE/McKinsey Matrix

**Part C — Risk and Uncertainty Frameworks (10-11)**: Scenario Planning · Risk Matrix

**Part D — Country and Market Attractiveness Matrices (12-13)**: Country Attractiveness Matrix · Market Attractiveness / Competitive Strength Matrix

**Part E — Decision and Financial Analysis Tools (14-23)**: Cost-Benefit Analysis · Decision Matrix · Weighted Scoring Model · Break-Even Analysis · NPV · IRR · Sensitivity Analysis · Scenario Analysis · Total Cost of Ownership · Total Landed Cost

**Part F — Strategic Positioning and Entry Frameworks (24-26)**: Porter's Generic Strategies · Entry Mode Matrix · Global Integration / Local Responsiveness Matrix

**Closing Sections**: [Framework Selection Guide](#framework-selection-guide) · [Combining Frameworks](#combining-frameworks)

---

# Part A: Strategic Diagnostic Frameworks

## 1. SWOT

**Purpose**: To organize a firm's internal capabilities (Strengths, Weaknesses) alongside external conditions (Opportunities, Threats) relevant to a specific decision.

**What Question It Answers**: "Given our specific capabilities and this specific external situation, what are the strategic implications for this decision?"

**When to Use**: Early in analyzing a specific, well-defined decision (a market entry, a partnership, a product launch) as an organizing device before deeper analysis.

**When NOT to Use**: As a standalone final analysis for a major decision, as a generic exercise disconnected from any specific decision, or as a substitute for the more rigorous frameworks (Five Forces, VRIO, CAGE) that should inform its Opportunities/Threats and Strengths/Weaknesses content.

**Inputs Required**: Firm capability assessment (ideally informed by VRIO, Section 5), and external market/country analysis (ideally informed by PESTEL, Section 2, and Five Forces, Section 3).

**Step-by-Step Methodology**: (1) State the specific decision being analyzed. (2) List internal Strengths and Weaknesses relevant to that decision only. (3) List external Opportunities and Threats relevant to that decision only. (4) Cross-reference each quadrant pair (Strengths-Opportunities, Strengths-Threats, Weaknesses-Opportunities, Weaknesses-Threats) to derive specific strategic actions.

**Hypothetical Example**: A firm evaluating entry into a new market lists a Strength (transferable brand recognition), a Weakness (no local regulatory experience), an Opportunity (a growing target segment), and a Threat (elevated regulatory risk) — the cross-reference of Weakness × Threat suggests a specific action: partner with a local firm to close the regulatory experience gap before proceeding.

**Interpretation**: The lists themselves are of limited value; the value lies entirely in the cross-referenced strategic implications derived in Step 4.

**Strengths**: Simple, flexible, quick to construct, and effective at forcing joint consideration of internal and external factors.

**Weaknesses**: No inherent method for weighting or prioritizing items; prone to superficiality without rigorous underlying research; provides no quantification.

**Common Mistakes**: Building a generic, decision-agnostic SWOT reused across unrelated situations; listing items without cross-referencing them into actions; treating unweighted lists as if all items carry equal importance.

**Potential Misuse**: Presenting a SWOT as if it constitutes a complete strategic analysis, when it is only an organizing first step that still requires the deeper frameworks it should be built upon.

## 2. PESTEL

**Purpose**: To systematically scan a country or market's macro-environment across six dimensions — Political, Economic, Social, Technological, Environmental, Legal.

**What Question It Answers**: "What macro-level external factors could affect this strategy or investment, and along which dimensions?"

**When to Use**: Early-stage country/market screening, or when assessing how a shifting external environment might affect an existing strategy.

**When NOT to Use**: As a substitute for industry-specific analysis (Five Forces) or firm-specific analysis (SWOT, VRIO); PESTEL addresses the macro-environment only and says nothing about competitive structure or firm capability.

**Inputs Required**: Country-level data and analysis across each of the six dimensions — see [08_Country_Risk.md](08_Country_Risk.md) for detailed indicators feeding each PESTEL category.

**Step-by-Step Methodology**: (1) Define the specific country/market and time horizon. (2) Systematically research and document each of the six dimensions. (3) Identify which specific factors are actually relevant and material to the decision at hand (a full PESTEL scan surfaces many factors of varying relevance). (4) Feed prioritized findings into more specific frameworks (Five Forces, country risk, market attractiveness).

**Hypothetical Example**: A PESTEL scan of a candidate market might find political stability adequate, economic growth strong, social trends favorable for the target segment, technological infrastructure sufficient, environmental regulation manageable, but legal/IP enforcement weak — the analyst flags IP enforcement as the single most decision-relevant finding for a firm whose competitive advantage rests on proprietary technology.

**Interpretation**: A PESTEL scan is a comprehensive net, not a conclusion — its value comes from correctly identifying which caught factors actually matter for this specific firm and decision, not from completing all six categories exhaustively.

**Strengths**: Comprehensive macro coverage, reduces risk of overlooking an entire category of external factor (e.g., ignoring environmental regulation entirely).

**Weaknesses**: Can produce an unfocused, undifferentiated list of many factors without a built-in prioritization mechanism; overlaps partially with country risk and Five Forces categories, risking duplicated (or contradictory) effort if not coordinated.

**Common Mistakes**: Treating all six dimensions as equally important for every decision; stopping at the descriptive scan without translating findings into decision-relevant implications.

**Potential Misuse**: Using a lengthy, exhaustive PESTEL document as a way to appear rigorous while avoiding the harder work of prioritizing and acting on the few factors that actually matter.

## 3. Porter's Five Forces

**Purpose**: To assess the structural attractiveness (long-run profit potential) of an industry within a specific market, based on the intensity of five competitive forces.

**What Question It Answers**: "How attractive is this industry's structure likely to be for sustained profitability, in this specific market?"

**When to Use**: Assessing industry attractiveness before market entry or investment, or diagnosing why an industry's profitability is structurally weak or strong.

**When NOT to Use**: As a firm-specific capability assessment (it addresses industry structure, not the specific firm's fit within it — pair with VRIO/SWOT); as a static, one-time analysis for a rapidly evolving industry without periodic reassessment; in industries dominated by ecosystem/complementor dynamics not well captured by the five forces alone.

**Inputs Required**: Data on entry barriers, supplier concentration and switching costs, buyer concentration and price sensitivity, availability and price/performance of substitutes, and competitor count, concentration, and growth rate — assessed specifically for the market/geography in question.

**Step-by-Step Methodology**: (1) Define the specific industry and geographic market (forces vary by market). (2) Assess each of the five forces individually using relevant structural indicators. (3) Synthesize an overall industry attractiveness judgment. (4) Identify which force(s) most constrain profitability and consider strategic responses targeting those specifically.

**Hypothetical Example**: A market shows low entry barriers, concentrated and powerful buyers, several close substitutes, and many similarly sized aggressive competitors — an analyst concludes this market is structurally unattractive for sustained margin, and that any entry strategy would need a specific, defensible differentiation to succeed despite the unfavorable structure.

**Interpretation**: Low aggregate force intensity suggests a structurally attractive market; high intensity suggests entry requires an unusually strong, defensible strategy to earn acceptable returns — the analysis characterizes the industry, not any specific firm's likely success within it.

**Strengths**: Comprehensive view of competitive dynamics beyond direct rivals (suppliers, buyers, substitutes, and potential entrants all included); widely understood, comparable vocabulary.

**Weaknesses**: A static snapshot that does not inherently capture how forces are changing or how a firm's own actions might reshape them; can understate complementor/ecosystem effects; assumes industry boundaries can be cleanly defined, which is not always true.

**Common Mistakes**: Applying one Five Forces analysis to an entire global industry rather than the specific national/regional market in question; treating the analysis as purely descriptive without deriving a strategic response; confusing industry attractiveness with a specific firm's likely success in it.

**Potential Misuse**: Using a favorable Five Forces conclusion to justify entry without separately confirming the specific firm has a genuine, defensible basis for competing (see VRIO, Section 5) — industry attractiveness and firm-specific advantage are different questions.

## 4. CAGE

**Purpose**: To assess the distance between a firm's home market and a candidate country across Cultural, Administrative, Geographic, and Economic dimensions.

**What Question It Answers**: "How different is this candidate market from our home base, along which specific dimensions, and what does that imply for entry mode and adaptation?"

**When to Use**: Comparing or selecting among candidate international markets; diagnosing why a specific market has proven difficult to enter or operate in.

**When NOT to Use**: As a stand-alone market attractiveness assessment (it measures distance/difficulty, not opportunity size or profitability — pair with a market attractiveness framework, Section 13); applying a single generic distance weighting across fundamentally different industries without adjusting which dimensions matter most.

**Inputs Required**: Comparative data across cultural (language, values, norms), administrative (political system, trade agreements, currency, colonial/historical ties), geographic (physical distance, time zones, climate, transport links), and economic (income, cost, resource-level differences) dimensions between the home market and each candidate.

**Step-by-Step Methodology**: (1) Assess each of the four dimensions individually between home market and candidate. (2) Weight the dimensions by relevance to the specific industry (e.g., cultural distance matters more for consumer branded goods than industrial commodities). (3) Use the resulting distance profile to inform entry mode choice (greater distance favoring lower-commitment or partnered modes) and adaptation strategy.

**Hypothetical Example**: A candidate market shows low geographic and administrative distance (a neighboring country in the same trade bloc) but high cultural distance (different dominant language and social norms) — the analysis recommends leveraging the logistics/regulatory ease while still investing meaningfully in local marketing adaptation and partnership for cultural navigation.

**Interpretation**: A single blended CAGE "distance score" is less useful than seeing which specific dimensions drive the distance, since the appropriate strategic response differs by dimension.

**Strengths**: Moves beyond simplistic physical-distance thinking; captures multiple, often more consequential, dimensions of difference; directly actionable for entry-mode and adaptation decisions.

**Weaknesses**: Dimension weighting is itself a judgment call that can be done poorly; qualitative dimensions (especially cultural) are harder to measure precisely than economic/geographic ones.

**Common Mistakes**: Treating physical/geographic distance as the primary or only relevant dimension when administrative or cultural distance is often more consequential; blending all four dimensions into one number without disclosing which dimension actually drives the result.

**Potential Misuse**: Using a low aggregate CAGE score to conclude a market is "easy" without checking whether the specific dimension most relevant to this firm's industry is actually low.

## 5. VRIO

**Purpose**: To formally test whether a specific firm resource or capability constitutes a source of sustainable competitive advantage.

**What Question It Answers**: "Does this specific capability actually give us a durable edge in this specific competitive context, or does it merely meet parity?"

**When to Use**: Validating a claimed competitive advantage before committing significant resources to leverage it in a new market or against a specific competitive set.

**When NOT to Use**: As a substitute for external market/industry analysis (it addresses internal capability only — pair with Five Forces and PESTEL); when reliable competitive intelligence needed to assess "rare" and "inimitable" is unavailable (in which case, treat conclusions as provisional).

**Inputs Required**: An inventory of candidate firm resources/capabilities, and competitive intelligence on the specific market's competitive set sufficient to judge rarity and imitability there.

**Step-by-Step Methodology**: (1) List candidate resources/capabilities. (2) For each, assess in sequence: Is it **V**aluable (enables exploiting an opportunity or neutralizing a threat)? Is it **R**are (few or no competitors possess it)? Is it costly to **I**mitate or substitute? Is the firm **O**rganized to exploit it? (3) A resource failing any one criterion provides at best temporary or parity advantage, not sustained advantage.

**Hypothetical Example**: A firm's proprietary process technology is valuable and rare in its home market, but a specific target market has a local competitor with an equivalent technology — the "rare" criterion fails in that specific market, so the same resource that provides sustained advantage at home offers only parity there.

**Interpretation**: A resource satisfying all four criteria in a given competitive context is a strong candidate for sustainable advantage in that specific context; this must be reassessed market by market, since rarity and inimitability are always relative to a specific competitive set.

**Strengths**: A disciplined, falsifiable test rather than a vague assertion that something is "strategic"; forces explicit consideration of organizational readiness, often the overlooked criterion.

**Weaknesses**: Assessing "rare" and "inimitable" accurately requires genuine, often hard-to-obtain competitive intelligence, especially in unfamiliar international markets.

**Common Mistakes**: Stopping after confirming "valuable and rare" without testing inimitability and organizational readiness, the two criteria most often determining whether advantage is actually sustained; applying VRIO conclusions from one market to a different market without reassessment.

**Potential Misuse**: Using a favorable VRIO conclusion from the home market as if it automatically applies internationally, without reassessing rarity and imitability against the specific new competitive set.

## 6. Value Chain

**Purpose**: To decompose a firm's activities into discrete steps that create value, enabling analysis of where cost and differentiation advantage arise and how activities should be configured internationally.

**What Question It Answers**: "Which specific activities in our business actually generate our advantage (or lack of it), and how should each be configured and coordinated globally?"

**When to Use**: Diagnosing the specific source of a firm's advantage; designing an international value-chain configuration (which activities to centralize/disperse, coordinate tightly/loosely).

**When NOT to Use**: As a purely descriptive, academic mapping exercise disconnected from actual resource allocation or configuration decisions.

**Inputs Required**: A detailed activity map of the firm's operations (primary activities: inbound logistics, operations, outbound logistics, marketing/sales, service; support activities: infrastructure, HR, technology development, procurement) and cost/margin data by activity where available.

**Step-by-Step Methodology**: (1) Map the firm's activities into primary and support categories. (2) Assess each activity's cost and differentiation contribution. (3) Identify which specific activities are the actual source of competitive advantage, rather than assuming it is evenly distributed. (4) For international strategy, assess each activity's configuration (concentrate vs. disperse) and coordination (centralize vs. localize) needs individually — see [03_Global_Strategy.md](../01_FOUNDATIONS/03_Global_Strategy.md) Section 18.

**Hypothetical Example**: A firm's value chain analysis reveals its advantage is concentrated in proprietary technology development (an upstream support activity) while outbound logistics and service are undifferentiated relative to competitors — informing a decision to protect and centrally control technology development while outsourcing logistics to specialist providers.

**Interpretation**: Competitive advantage typically resides in specific activities, not the whole firm uniformly — resource allocation and protection efforts should follow this finding, not be spread evenly across all activities.

**Strengths**: Granular, activity-level insight that avoids the error of treating the whole firm as a single undifferentiated unit; directly actionable for international configuration decisions.

**Weaknesses**: Requires detailed internal cost/activity data that may not always be readily available or cleanly separable; can become an academic mapping exercise if not tied to specific decisions.

**Common Mistakes**: Mapping the value chain without translating findings into specific configuration/coordination decisions; assuming advantage is evenly distributed across all activities rather than identifying where it is actually concentrated.

**Potential Misuse**: Using a value chain map to justify offshoring/outsourcing every non-core-labeled activity without separately evaluating total landed cost, quality, and risk for each specific decision (see Sections 22-23).

---

# Part B: Portfolio and Growth Frameworks

## 7. Ansoff Matrix

**Purpose**: To categorize growth strategy options by whether the firm is pursuing existing or new products, in existing or new markets, structuring and sequencing growth risk.

**What Question It Answers**: "What type of growth move is this, and how much compounded risk does it actually carry?"

**When to Use**: Structuring and communicating growth strategy options, particularly to flag when international expansion is being combined with other simultaneous changes (new product, new business model).

**When NOT to Use**: As a market attractiveness or entry-mode selection tool — it classifies growth-move type and relative risk only, and says nothing about whether a specific market or product opportunity is actually attractive.

**Inputs Required**: A clear description of the proposed growth move — is the product new or existing, is the market new or existing relative to the firm's current position.

**Step-by-Step Methodology**: (1) Classify the proposed move into one of four quadrants: Market Penetration (existing product, existing market), Market Development (existing product, new market), Product Development (new product, existing market), Diversification (new product, new market). (2) Recognize that quadrants further from the current position carry progressively higher risk. (3) Sequence growth initiatives to manage cumulative risk, avoiding stacking multiple new variables (new market AND new product AND new business model) simultaneously without prior experience in at least one dimension.

**Hypothetical Example**: A firm entering a new country with its existing, proven product is in the Market Development quadrant (moderate risk); the same firm simultaneously entering that country with a newly developed product sits in the considerably riskier Diversification quadrant, warranting more rigorous validation before proceeding.

**Interpretation**: The matrix classifies risk type and relative magnitude; it does not by itself tell you whether a specific move within a quadrant is a good idea.

**Strengths**: Simple, clarifying, useful for flagging compounded risk from stacking multiple new variables at once.

**Weaknesses**: Provides no assessment of whether a given growth option is attractive, only its type and relative risk level.

**Common Mistakes**: Pursuing Diversification-quadrant moves without recognizing the compounded risk, or without first building experience in at least one dimension; treating quadrant classification as a complete strategic assessment.

**Potential Misuse**: Using a quadrant classification alone (e.g., "this is just Market Development, so it's low risk") to skip the deeper market-specific and product-specific analysis a real decision requires.

## 8. BCG Matrix

**Purpose**: To classify business units, product lines, or country markets within a portfolio based on market growth rate and relative market share, guiding resource allocation.

**What Question It Answers**: "Given our portfolio of markets/products, where should we direct investment, and where should we harvest or divest?"

**When to Use**: High-level portfolio resource allocation across multiple business units or country markets.

**When NOT to Use**: As the sole basis for a specific country-exit or divestment decision without deeper country-risk and strategic-value analysis; in situations where market share is a poor proxy for competitive position (e.g., fragmented or rapidly changing markets); when a "low-share, low-growth" unit provides strategic option value or market presence needed by other units.

**Inputs Required**: Market growth rate and relative market share (share relative to the largest competitor, not absolute share) for each business unit/country operation, with the relevant market carefully and precisely defined.

**Step-by-Step Methodology**: (1) Define the relevant market for each unit precisely (market definition significantly affects classification). (2) Plot each unit by growth rate (high/low) and relative share (high/low) into one of four quadrants: Stars (high growth, high share), Cash Cows (low growth, high share), Question Marks (high growth, low share), Dogs (low growth, low share). (3) Allocate resources accordingly — typically funding Star growth and selective Question Marks from Cash Cow generation, while minimally investing in or divesting Dogs.

**Hypothetical Example**: A firm's mature, high-share country operation in a slow-growth market (a Cash Cow) funds investment in a newer, high-growth, currently low-share country market (a Question Mark) that the firm believes it can build into a Star with sustained investment.

**Interpretation**: The matrix is a starting resource-allocation heuristic across a portfolio, not a sole or final determinant of individual unit strategy.

**Strengths**: Simple, visual, effective first-pass tool for portfolio-level resource allocation logic.

**Weaknesses**: Oversimplifies strategy to two dimensions, ignoring synergies, competitive dynamics nuance, and strategic/option value; market share as a proxy for position can mislead in fragmented markets.

**Common Mistakes**: Defining the "market" too broadly or narrowly, which can flip a unit's classification; mechanically defunding "Dog" units without considering strategic option value or synergy with other units.

**Potential Misuse**: Using a Dog classification alone to justify a country exit decision without separately assessing country-specific exit costs, strategic value, and stakeholder implications.

## 9. GE/McKinsey Matrix

**Purpose**: To extend the BCG Matrix's two-dimensional logic into a richer, multi-factor assessment of business unit or market portfolio position, using composite "industry attractiveness" and "competitive/business strength" axes each built from multiple weighted criteria.

**What Question It Answers**: "Accounting for a fuller, multi-factor picture (not just growth and share), where does this business unit or market rank, and how should we invest?"

**When to Use**: Portfolio assessment where the BCG Matrix's two-factor simplicity is judged insufficient — e.g., when profitability, competitive intensity, regulatory barriers, and strategic fit all materially affect the assessment beyond growth and share alone.

**When NOT to Use**: When time/data constraints do not support building well-justified composite scores for each axis; when the added complexity would not change the resulting resource allocation decision relative to a simpler BCG-style analysis.

**Inputs Required**: A defined set of weighted criteria for "industry/market attractiveness" (e.g., size, growth, competitive intensity, entry barriers, regulatory environment) and for "competitive/business strength" (e.g., market share, brand strength, cost position, distribution reach, capability fit), scored for each unit/market.

**Step-by-Step Methodology**: (1) Define and weight the criteria composing each of the two axes, tailored to the specific industry and decision. (2) Score each business unit/market against each criterion. (3) Compute a weighted composite score for each axis. (4) Plot each unit on a 3x3 (or similar) grid of high/medium/low on both axes. (5) Apply differentiated strategic guidance by grid position (invest/grow in high-high cells, selectively invest in mixed cells, harvest/divest in low-low cells).

**Hypothetical Example**: A country market scores highly on market attractiveness (strong growth, moderate competitive intensity, manageable entry barriers) but only moderately on the firm's competitive/business strength there (limited brand recognition, no existing distribution) — the resulting grid position suggests selective, staged investment to build strength before committing at scale, rather than either aggressive full investment or avoidance.

**Interpretation**: The matrix should be read as a structured summary of the underlying weighted criteria, not as an independently meaningful position — always be prepared to unpack which specific criteria are driving a unit's placement.

**Strengths**: Richer and more nuanced than the two-factor BCG Matrix, allowing industry- and firm-specific criteria to be incorporated explicitly.

**Weaknesses**: The added richness comes at the cost of more subjective judgment in criteria selection and weighting, which can be manipulated (consciously or not) to justify a pre-determined conclusion; more complex to build, explain, and defend than BCG.

**Common Mistakes**: Selecting and weighting criteria without a clearly documented, defensible rationale; treating the resulting grid position as objective when it is a direct function of the (subjective) weights chosen.

**Potential Misuse**: Adjusting criteria weights after seeing initial results to move a preferred market/unit into a more favorable grid position — a serious analytical integrity failure that undermines the entire exercise.

---

# Part C: Risk and Uncertainty Frameworks

## 10. Scenario Planning

**Purpose**: To stress-test a strategy against multiple plausible, internally consistent future states, rather than relying on a single-point forecast, particularly for major, long-horizon strategic decisions under high uncertainty.

**What Question It Answers**: "Does this strategy remain sound across a range of plausible futures, or does it only work if a specific, optimistic set of assumptions holds?"

**When to Use**: Major, difficult-to-reverse decisions under high uncertainty (large FDI commitments, decisions sensitive to geopolitical or regulatory trajectory) — see [03_Global_Strategy.md](../01_FOUNDATIONS/03_Global_Strategy.md) Section 28.

**When NOT to Use**: For routine, low-stakes, or easily reversible decisions where the analytical cost/time investment exceeds the decision's risk.

**Inputs Required**: Identification of the key uncertain driving forces most material to the strategy (e.g., trade policy direction, technology adoption pace, competitive response), and enough understanding of each to construct plausible, distinct trajectories.

**Step-by-Step Methodology**: (1) Identify the 2-3 most significant, genuinely uncertain driving forces relevant to the strategy. (2) Construct a small number (typically 2-4) of internally consistent, materially different scenarios spanning the plausible range of these uncertainties — avoid a single "most likely" scenario framed as the only outcome. (3) Stress-test the proposed strategy against each scenario. (4) Identify "no-regret" moves that perform reasonably well across all scenarios versus highly scenario-dependent moves, and define contingency triggers for the latter.

**Hypothetical Example**: A firm planning a major market entry builds a base case, a trade-policy-escalation case, and a trade-liberalization case, and finds its planned entry mode and investment level remain viable in all three, while a planned local manufacturing investment is viable only in the liberalization case — leading the firm to proceed with entry but defer the manufacturing investment pending a specific policy trigger.

**Interpretation**: A strategy performing reasonably well across all constructed scenarios is more robust than one succeeding only under a single assumed future; scenario-dependent elements should carry explicit contingency plans, not be assumed away.

**Strengths**: Explicitly addresses uncertainty rather than false precision from a single-point forecast; identifies genuinely robust moves versus fragile ones.

**Weaknesses**: Resource- and time-intensive; can produce analysis paralysis with too many scenarios, or false confidence if scenarios are not genuinely distinct and plausible.

**Common Mistakes**: Building scenarios that are minor variations of the same underlying assumption rather than genuinely distinct plausible futures; failing to translate scenario analysis into specific contingency triggers or decision points.

**Potential Misuse**: Constructing scenarios that are all mild variants clustered around the analyst's preferred conclusion, giving a false appearance of having considered a genuine range of futures.

## 11. Risk Matrix

**Purpose**: To visually organize identified risks by their likelihood and potential impact/severity, prioritizing which risks warrant active management attention.

**What Question It Answers**: "Given everything that could go wrong, which risks actually deserve our limited risk-management attention and resources first?"

**When to Use**: Organizing and prioritizing a broad, previously identified list of risks (political, currency, operational, supply chain) for a specific investment or strategy.

**When NOT to Use**: As a substitute for the substantive underlying risk analysis (e.g., [08_Country_Risk.md](08_Country_Risk.md)) that identifies and characterizes the risks in the first place — the matrix organizes and prioritizes already-identified risks, it does not generate the risk identification itself.

**Inputs Required**: A list of specific, identified risks, and a judgment (ideally evidence-informed) of each risk's likelihood and potential impact/severity if it occurs.

**Step-by-Step Methodology**: (1) List all identified risks specific to the decision. (2) Assess and rate each risk's likelihood (e.g., low/medium/high) and impact/severity (e.g., low/medium/high) if it occurs. (3) Plot each risk on a likelihood-by-impact grid. (4) Prioritize risk management attention and resources toward the high-likelihood, high-impact quadrant first, followed by high-impact/lower-likelihood risks that warrant contingency planning even if less probable.

**Hypothetical Example**: A firm's risk matrix for a foreign investment places currency devaluation risk in the high-likelihood, high-impact quadrant (warranting active hedging), a specific natural disaster risk in the low-likelihood, high-impact quadrant (warranting insurance and a contingency plan but not day-to-day active management), and a minor administrative delay risk in the high-likelihood, low-impact quadrant (accepted and monitored, but not a priority for dedicated mitigation resources).

**Interpretation**: Position on the matrix should directly inform resource allocation for risk mitigation — high-likelihood/high-impact risks justify the most active, resourced mitigation; low-likelihood/low-impact risks may simply be accepted and monitored.

**Strengths**: Simple, visual, effective for communicating risk prioritization to stakeholders and allocating limited risk-management resources rationally.

**Weaknesses**: Likelihood and impact ratings are often subjective judgment calls, sometimes with limited underlying data, especially for novel or rare risk types; a simple grid can understate risk correlation (multiple risks materializing together) and second-order effects.

**Common Mistakes**: Rating likelihood and impact without a clear, documented basis (pure intuition dressed up as an assessment); failing to reassess the matrix as conditions change over the life of a long investment.

**Potential Misuse**: Using a risk matrix to justify ignoring a low-likelihood but catastrophic risk entirely, when even a small probability of a severe, potentially existential outcome may warrant specific contingency planning or insurance regardless of matrix position.

---

# Part D: Country and Market Attractiveness Matrices

## 12. Country Attractiveness Matrix

**Purpose**: To compare and rank candidate countries for market entry or investment using a structured, multi-factor, typically weighted scoring approach combining opportunity and risk dimensions.

**What Question It Answers**: "Among several candidate countries, which offer the best combination of opportunity and manageable risk for this firm specifically?"

**When to Use**: Comparing and prioritizing among multiple candidate countries for market entry, investment, or sourcing (see [08_Country_Risk.md](08_Country_Risk.md), "Building a Country Score" section for detailed scoring methodology).

**When NOT to Use**: As a rigid, mechanical decision rule (e.g., "enter only if score exceeds X") rather than a structured input to judgment; when comparing countries so different in role (e.g., a sales market versus a sourcing location) that a single scoring template does not fit both.

**Inputs Required**: A defined, weighted set of country-level criteria (market size/growth, political/economic/legal risk, cultural distance, regulatory environment, infrastructure) tailored to the specific decision's purpose (see [08_Country_Risk.md](08_Country_Risk.md) Parts A-D for the full indicator set).

**Step-by-Step Methodology**: (1) Define the specific decision purpose (sales market entry, sourcing location, FDI destination) since this determines which criteria matter most. (2) Select and weight criteria accordingly. (3) Score each candidate country against each criterion using a coarse ordinal scale to avoid false precision (see [08_Country_Risk.md](08_Country_Risk.md), scoring methodology). (4) Aggregate into a composite score presented as a range, not a single point. (5) Rank candidates, but review the underlying category scores (not just the composite) before finalizing a recommendation.

**Hypothetical Example**: Three candidate countries are scored on market size/growth, political/economic risk, regulatory ease, and cultural distance, weighted according to this firm's specific priorities (heavily weighting political risk given the firm's planned FDI-level commitment) — the resulting ranking differs from what a simple GDP-based ranking alone would have suggested, since the risk-weighted criteria change the relative attractiveness.

**Interpretation**: Treat the ranking and composite scores as a structured summary of the underlying analysis, always reviewable at the category level — a close overall ranking between two countries may hide a decisive difference in one critical category.

**Strengths**: Forces explicit, documented criteria and weights rather than an unstructured, intuition-only comparison; enables side-by-side comparison across many candidates efficiently.

**Weaknesses**: Highly sensitive to the (subjective) choice of criteria and weights; risks false precision if scores are presented with more granularity than the underlying judgment supports.

**Common Mistakes**: Using the same generic weighting template regardless of the decision's actual purpose; presenting a composite score without disclosing its construction and the confidence level of its inputs.

**Potential Misuse**: Adjusting weights after an initial run to produce a pre-favored country's higher ranking — the same integrity risk noted for the GE/McKinsey Matrix (Section 9).

## 13. Market Attractiveness / Competitive Strength Matrix

**Purpose**: To position specific markets (or market segments) by their intrinsic attractiveness against the firm's specific competitive strength within each, informing where to prioritize entry or investment.

**What Question It Answers**: "Not just how attractive is this market in the abstract, but how likely are we specifically to succeed and capture value in it?"

**When to Use**: Prioritizing among markets where the firm's relative competitive position (not just market-level attractiveness) varies significantly by market.

**When NOT to Use**: When the firm has essentially no prior information about its likely competitive position in a market (in which case, treat the "competitive strength" axis as a provisional hypothesis requiring validation, not a firm input).

**Inputs Required**: Market attractiveness data (size, growth, competitive intensity, entry barriers — see [08_Country_Risk.md](08_Country_Risk.md) Section 38 and [03_Global_Strategy.md](../01_FOUNDATIONS/03_Global_Strategy.md) Section 34) and an honest, evidence-based assessment of the firm's specific competitive strength in each market (transferable brand, existing relationships, cost position, capability fit).

**Step-by-Step Methodology**: (1) Score each candidate market on attractiveness (external, market-level factors). (2) Separately score the firm's competitive strength specifically in that market (internal, firm-specific factors relative to that market's competitive set — see VRIO, Section 5). (3) Plot each market on the two axes. (4) Prioritize markets scoring well on both axes; treat high-attractiveness/low-strength markets as requiring capability-building investment before major commitment; deprioritize low-attractiveness markets regardless of the firm's strength there.

**Hypothetical Example**: A firm finds one candidate market highly attractive but assesses its own competitive strength there as weak (no brand recognition, no distribution), while a second, moderately attractive market shows strong competitive strength (existing relationships, transferable brand) — the matrix suggests prioritizing the second market for near-term commitment while treating the first as a longer-term opportunity requiring capability investment first.

**Interpretation**: A market's position on this matrix reflects the interaction of external opportunity and firm-specific fit — a market that is attractive in the abstract may not be a good near-term priority if the firm's specific competitive strength there is weak.

**Strengths**: Directly connects market attractiveness (external) with firm fit (internal), avoiding the error of ranking markets purely on external attractiveness while ignoring the firm's actual ability to compete there.

**Weaknesses**: The "competitive strength" axis is often the more subjective and harder-to-validate of the two, especially before the firm has any actual market experience.

**Common Mistakes**: Scoring competitive strength based on home-market performance without testing whether the same basis of advantage transfers to the specific target market's competitive set (see Section 5, VRIO, and [03_Global_Strategy.md](../01_FOUNDATIONS/03_Global_Strategy.md) Section 29).

**Potential Misuse**: Inflating a self-assessed competitive strength score to justify entry into a market the firm is otherwise eager to enter for other (non-analytical) reasons.

---

# Part E: Decision and Financial Analysis Tools

## 14. Cost-Benefit Analysis

**Purpose**: To systematically compare the expected costs and benefits of a proposed decision, expressed where possible in comparable (often monetary) terms, to support a go/no-go or resource-allocation decision.

**What Question It Answers**: "Do the expected benefits of this decision outweigh its expected costs, by enough margin to justify proceeding?"

**When to Use**: Making a go/no-go or resource-allocation decision where costs and benefits can be reasonably estimated, even if some estimation uncertainty exists.

**When NOT to Use**: As the sole basis for a decision with significant benefits or costs that cannot be meaningfully quantified (e.g., pure option/learning value, reputational effects) without at least a qualitative supplement addressing those factors explicitly.

**Inputs Required**: Estimated costs (entry cost, ongoing operating cost, capital cost, risk-adjusted contingencies) and estimated benefits (revenue, cost savings, strategic option value, learning value) over a defined time horizon.

**Step-by-Step Methodology**: (1) Define the decision and time horizon. (2) Identify and estimate all material costs, including less obvious ones (opportunity cost, risk-adjusted contingency). (3) Identify and estimate all material benefits, including harder-to-quantify strategic/option value where relevant (labeled explicitly as an estimate, not a hard figure). (4) Compare using an appropriate method (often NPV, Section 18, for multi-period decisions) and present alongside sensitivity analysis (Section 20) on key assumptions.

**Hypothetical Example**: A firm evaluating a market entry decision totals expected entry and operating costs against expected revenue benefits and an explicitly estimated (and separately labeled) strategic option value from establishing an early market position, concluding the quantified benefits exceed costs even before crediting the option value, strengthening the case for proceeding.

**Interpretation**: A positive net benefit supports proceeding, but the analyst should explicitly state which inputs are hard estimates versus judgment calls, and test the conclusion's sensitivity to the most uncertain inputs.

**Strengths**: Forces explicit, comparable quantification of a decision's trade-offs rather than a purely qualitative debate.

**Weaknesses**: Can create false precision if uncertain inputs (especially benefit estimates) are presented without appropriate ranges or caveats; risks omitting real but hard-to-quantify costs/benefits.

**Common Mistakes**: Quantifying benefits optimistically while quantifying costs conservatively (or vice versa), introducing an unstated bias; presenting a single-point net benefit figure without disclosing the estimation uncertainty behind it.

**Potential Misuse**: Adjusting benefit or cost assumptions after an initial unfavorable result to produce a favorable conclusion — the analysis should be built from independently defensible assumptions, not reverse-engineered from a desired answer.

## 15. Decision Matrix

**Purpose**: To compare multiple discrete options (e.g., candidate entry modes, candidate suppliers, candidate markets) against multiple criteria in a single, structured table.

**What Question It Answers**: "Among these specific, defined alternatives, which best satisfies the criteria that matter to us?"

**When to Use**: Comparing a small number of well-defined, mutually exclusive alternatives against multiple relevant criteria.

**When NOT to Use**: When criteria weights are so contested or uncertain that a false sense of resolved comparison would result; as a substitute for the deeper analysis (e.g., full entry-mode analysis, [04_Market_Entry_Strategies.md](04_Market_Entry_Strategies.md)) that should inform the scores in each cell.

**Inputs Required**: A defined list of alternatives, a defined list of relevant criteria, and either weighted or unweighted scores for each alternative against each criterion (see Weighted Scoring Model, Section 16, for the weighted variant in detail).

**Step-by-Step Methodology**: (1) List the alternatives being compared. (2) List the criteria relevant to the decision. (3) Score each alternative against each criterion (using a consistent scale). (4) Sum or average scores per alternative (weighted, if criteria are not equally important — see Section 16) to produce a comparative ranking. (5) Review the underlying criterion-level scores, not just the total, before finalizing.

**Hypothetical Example**: A firm compares three candidate entry modes (distributor, joint venture, wholly owned subsidiary) against criteria including capital requirement, speed, control, and IP risk, scoring each mode on each criterion — the joint venture scores highest in total, but the analyst notes it scores poorly specifically on IP risk, a criterion of particular importance given the firm's technology-dependent business model, prompting closer scrutiny before finalizing.

**Interpretation**: The total score is a useful summary, but a single dominant concern on one important criterion can and should override a marginally higher aggregate score for a competing alternative.

**Strengths**: Simple, transparent, easy to communicate and audit; forces explicit criteria rather than an unstructured comparison.

**Weaknesses**: Can imply false objectivity if scores and criteria are not well-justified; unweighted matrices treat all criteria as equally important, which is rarely accurate.

**Common Mistakes**: Using an unweighted matrix when criteria clearly differ in importance; focusing only on the total score without examining which specific criteria drove it.

**Potential Misuse**: Constructing the criteria list or scores after the fact to justify an already-preferred alternative.

## 16. Weighted Scoring Model

**Purpose**: To extend the basic Decision Matrix (Section 15) by explicitly weighting criteria according to their relative importance, producing a more defensible composite comparison.

**What Question It Answers**: "Accounting for the fact that some criteria matter more than others to this decision, which alternative scores best overall?"

**When to Use**: Any Decision Matrix-style comparison where criteria clearly differ in importance to the decision-maker (which is the typical case).

**When NOT to Use**: When weights cannot be defended with a clear rationale (in which case, disclose this limitation explicitly rather than presenting arbitrary weights as if authoritative); when the weighting process itself becomes a proxy battleground for stakeholders to force a pre-determined outcome (a governance issue as much as an analytical one).

**Inputs Required**: A list of alternatives, a list of criteria, an explicit weight for each criterion (ideally derived through a structured method — e.g., stakeholder consensus, or a pairwise comparison technique), and scores for each alternative against each criterion.

**Step-by-Step Methodology**: (1) List alternatives and criteria (as in the Decision Matrix). (2) Assign an explicit weight to each criterion (e.g., weights summing to 100%), documenting the rationale. (3) Score each alternative against each criterion on a consistent scale. (4) Multiply each score by its criterion's weight and sum to produce a weighted composite score per alternative. (5) Test sensitivity of the ranking to plausible variation in the weights (Section 20) before finalizing, since rankings can be sensitive to weighting choices.

**Hypothetical Example**: A firm weights "IP protection" at 35% (given its technology-dependent business), "speed to market" at 15%, "capital requirement" at 20%, and "local market knowledge gained" at 30% when comparing entry modes — the weighted result favors a wholly owned subsidiary over a joint venture specifically because of the heavy IP-protection weighting, a conclusion that would reverse under a different, equally plausible weighting (e.g., if speed were weighted much more heavily), which the analyst discloses explicitly.

**Interpretation**: A weighted composite score is only as defensible as its weights — always disclose the weights and test how sensitive the ranking is to reasonable variation in them.

**Strengths**: More defensible and nuanced than an unweighted Decision Matrix; makes the relative importance of criteria explicit and debatable rather than implicit and hidden.

**Weaknesses**: Weight assignment is inherently subjective and can be a significant source of hidden bias; a seemingly rigorous numeric output can mask arbitrary or self-serving weight choices.

**Common Mistakes**: Assigning weights without a documented rationale; failing to test how sensitive the final ranking is to the specific weights chosen.

**Potential Misuse**: Reverse-engineering weights to produce a pre-determined preferred outcome, then presenting the resulting score as if it were an objective, quantitative conclusion — this is one of the most common ways a seemingly rigorous framework is used to launder a subjective preference as an objective result.

## 17. Break-Even Analysis

**What It Measures**: Break-even analysis measures the sales volume (or price) at which total revenue equals total cost, so a decision-maker can see the minimum performance level needed for a decision to avoid a loss.

**Formula**:
```
Break-Even Volume (Units) = Fixed Costs ÷ (Price per Unit − Variable Cost per Unit)
```

**What Question It Answers**: "How much do we need to sell (or at what price) before this specific investment or decision stops losing money?"

**When to Use**: Assessing the minimum viable scale of a new market entry, product launch, or facility investment, particularly useful for quick, early-stage feasibility screening.

**When NOT to Use**: As a substitute for full capital budgeting (NPV, Section 18) for a major, multi-period investment decision — break-even analysis is typically a simplified, single-period or steady-state view, not a full accounting of the time value of money or the entire cash flow profile.

**Inputs Required**: Fixed costs, variable cost per unit, and price per unit for the specific market/decision being assessed.

**Step-by-Step Methodology**: (1) Identify all relevant fixed costs for the decision (e.g., a new facility's fixed operating costs, or a market entry's fixed marketing/setup costs). (2) Identify the variable cost per unit specific to the target market (which can differ from the home market due to local input costs, tariffs, and logistics — see [07_Global_Supply_Chain.md](../04_OPERATIONS/07_Global_Supply_Chain.md) Section 41). (3) Apply the formula to calculate break-even volume. (4) Compare the break-even volume to a realistic demand estimate for the market to assess feasibility.

**Hypothetical Example**: A firm entering a new market estimates fixed local setup and marketing costs of 500,000 (currency units), a price of 50 per unit, and a variable cost of 30 per unit: Break-Even Volume = 500,000 ÷ (50 − 30) = 25,000 units. If realistic market demand estimates suggest achievable volume well above 25,000 units within a reasonable timeframe, the entry appears feasible on this basis; if realistic demand falls well short, the entry warrants reconsideration or a different cost/price structure.

**Interpretation**: Achieving break-even volume means the decision covers its costs, not that it is a good investment — profitability above break-even, and the time required to reach break-even volume, both matter for a full assessment.

**Strengths**: Simple, fast, intuitive, and useful for early-stage feasibility screening before investing in more detailed analysis.

**Weaknesses**: Assumes a simplified, often linear cost structure and a single time period or steady state; does not account for the time value of money or the full multi-period cash flow profile a real decision usually involves.

**Common Mistakes**: Using home-market cost and price assumptions for a break-even calculation intended for a different target market; treating break-even as equivalent to a sufficient return, when it only indicates the point of zero profit.

**Potential Misuse**: Presenting a favorable break-even volume relative to an overly optimistic demand estimate to make a marginal opportunity appear more attractive than a rigorous demand forecast would support.

## 18. NPV (Net Present Value)

**What It Measures**: NPV measures the present value of a project's expected future cash flows, net of the initial investment, discounted at a rate reflecting the project's risk and the time value of money — see [05_International_Finance.md](../03_FINANCE/05_International_Finance.md) Section 24 for the full formula, methodology, and worked example.

**What Question It Answers**: "Does this investment, over its full life and accounting for the time value of money and risk, create or destroy value?"

**When to Use**: Evaluating a multi-period capital investment decision (FDI, a major facility, an acquisition) where cash flows occur over multiple future periods.

**When NOT to Use**: As a mechanical, single-point-estimate conclusion without accompanying sensitivity (Section 20) and scenario (Section 21) analysis, given how sensitive NPV outcomes typically are to discount rate and cash flow assumptions in an international context (currency, country risk).

**Inputs Required**: Initial investment, projected cash flows for each future period, and a risk-adjusted discount rate (see [05_International_Finance.md](../03_FINANCE/05_International_Finance.md) Sections 26-27 on cost of capital and WACC, including country risk premium adjustment).

**Step-by-Step Methodology**: See [05_International_Finance.md](../03_FINANCE/05_International_Finance.md) Section 24 for the full formula and the worked hypothetical example integrating currency conversion and country risk premium adjustment.

**Hypothetical Example**: See [05_International_Finance.md](../03_FINANCE/05_International_Finance.md)'s worked numerical example, which calculates NPV for a hypothetical foreign investment incorporating currency conversion via interest rate parity and a country-risk-adjusted discount rate.

**Interpretation**: A positive NPV indicates the project is expected to create value in excess of its cost of capital; a negative NPV indicates expected value destruction — always state the discount rate and its country-risk-premium basis explicitly alongside the result, since NPV conclusions can flip with reasonable variation in this assumption.

**Strengths**: Theoretically the most rigorous single metric for value creation, since it accounts for the full cash flow timing and the time value of money, unlike break-even analysis or simple payback period.

**Weaknesses**: Highly sensitive to the discount rate and cash flow forecast assumptions, both of which involve significant judgment in an international context (currency forecasting, country risk premium estimation).

**Common Mistakes**: Using a domestic discount rate for a foreign project without a country risk premium adjustment; presenting a single-point NPV without disclosing the discount rate and cash flow assumptions or testing their sensitivity.

**Potential Misuse**: Selecting an artificially low discount rate or optimistic cash flow forecast to produce a positive NPV for a project the decision-maker is otherwise inclined to approve.

## 19. IRR (Internal Rate of Return)

**What It Measures**: IRR measures the discount rate at which a project's NPV equals exactly zero — the project's implied compound annual rate of return — see [05_International_Finance.md](../03_FINANCE/05_International_Finance.md) Section 25 for the full formula and methodology.

**What Question It Answers**: "What rate of return does this investment imply, and does that exceed our required hurdle rate?"

**When to Use**: Alongside NPV, as a complementary, more intuitively communicable metric (a percentage return rather than a currency amount) for capital investment decisions.

**When NOT to Use**: As the sole metric for comparing mutually exclusive projects of different scale, or for projects with unconventional (multiple sign-change) cash flow patterns, where IRR can be misleading or produce multiple mathematically valid solutions — NPV is the more reliable metric in these cases.

**Inputs Required**: The same cash flow data as NPV (initial investment and projected future cash flows).

**Step-by-Step Methodology**: See [05_International_Finance.md](../03_FINANCE/05_International_Finance.md) Section 25 — IRR is generally solved iteratively/numerically for projects with more than two cash flow periods.

**Hypothetical Example**: See [05_International_Finance.md](../03_FINANCE/05_International_Finance.md) Section 25's worked example, showing IRR calculated for the same hypothetical project used in the NPV example, and the consistency check between the two metrics' conclusions.

**Interpretation**: If IRR exceeds the project's appropriate risk-adjusted cost of capital/hurdle rate, the project is expected to create value, consistent with a positive NPV at that same discount rate — always interpret IRR and NPV together, not IRR alone.

**Strengths**: Intuitive, percentage-based communication of return that is often easier for stakeholders to compare across opportunities than an absolute NPV figure.

**Weaknesses**: Can be misleading for comparing projects of different scale or duration, and mathematically unreliable (multiple or no real solutions) for cash flow patterns with more than one sign change.

**Common Mistakes**: Using IRR alone to rank mutually exclusive projects of different scale (a smaller project can have a higher IRR but create less absolute value than a larger project with a lower IRR); ignoring the unconventional-cash-flow-pattern caveat.

**Potential Misuse**: Selecting the project with the highest IRR without checking whether this ranking is consistent with the NPV ranking, especially when project scales differ substantially.

## 20. Sensitivity Analysis

**What It Measures**: Sensitivity analysis measures how a financial outcome changes in response to a change in a single input variable, holding all other variables constant, identifying which assumptions the outcome is most sensitive to — see [05_International_Finance.md](../03_FINANCE/05_International_Finance.md) Section 46 for the full methodology and worked example.

**What Question It Answers**: "Which of our assumptions, if wrong, would actually change the decision — and by how much do they need to be wrong before that happens?"

**When to Use**: Alongside any point-estimate financial analysis (NPV, break-even, cost-benefit) to identify which specific assumptions deserve the most forecasting rigor and ongoing monitoring.

**When NOT to Use**: As a substitute for scenario analysis (Section 21) when multiple inputs are likely to move together in a correlated way (e.g., a country crisis affecting both currency and demand simultaneously) — sensitivity analysis varies one input at a time and can understate risk from correlated, simultaneous shocks.

**Inputs Required**: A base-case financial model, and a plausible range for each key input variable to be tested.

**Step-by-Step Methodology**: (1) Build the base-case financial model (e.g., NPV). (2) Select the key input variables most material to the outcome (e.g., discount rate, exchange rate, sales volume, unit cost). (3) Recalculate the outcome while varying each input individually across its plausible range, holding all others at base case. (4) Identify which variables produce the largest swing in the outcome (often visualized as a "tornado chart") — these deserve the most forecasting rigor and closest monitoring.

**Hypothetical Example**: See [05_International_Finance.md](../03_FINANCE/05_International_Finance.md) Section 46's worked example, showing that a hypothetical project's NPV conclusion flips from negative to positive within a plausible discount rate range, revealing that the country risk premium assumption embedded in the discount rate is the single most decision-relevant input to scrutinize further.

**Interpretation**: A decision whose conclusion is stable across the plausible range of its most uncertain inputs is more robust than one that flips sign within that range — the latter warrants either further research to narrow the uncertain input or an explicit acknowledgment of the fragility in the recommendation.

**Strengths**: Directly identifies which assumptions matter most, focusing further research and monitoring effort efficiently.

**Weaknesses**: Varies one input at a time, which can understate risk when multiple inputs are likely to move together (a limitation scenario analysis, Section 21, addresses).

**Common Mistakes**: Testing only inputs that are convenient or already well understood, while neglecting the input that is actually most uncertain and consequential; failing to test a wide enough range to reveal a sign change in the outcome.

**Potential Misuse**: Selectively reporting sensitivity results that support a favorable base-case conclusion, while omitting a tested variable that reveals the conclusion is fragile.

## 21. Scenario Analysis

**What It Measures**: Scenario analysis measures how a financial or strategic outcome changes under a small number of distinct, internally consistent alternative future states (scenarios), in which multiple inputs move together in a coordinated way — distinguishing it from sensitivity analysis's one-variable-at-a-time approach (Section 20); see [05_International_Finance.md](../03_FINANCE/05_International_Finance.md) Section 45 for the finance-specific formula-level treatment and Section 10 above for the broader strategic scenario planning treatment.

**What Question It Answers**: "Under a small number of genuinely different, coherent futures — not just one input moving in isolation — does this decision remain sound?"

**When to Use**: Whenever multiple key inputs are likely to be correlated (e.g., a country crisis scenario affecting currency, demand, and political risk simultaneously), which is common in international business decisions.

**When NOT to Use**: As a replacement for sensitivity analysis (Section 20) — the two are complementary; scenario analysis reveals correlated, "everything moves together" risk, while sensitivity analysis reveals which single input matters most in isolation.

**Inputs Required**: A defined set of scenarios (e.g., base case, currency-stress case, political-risk case), each with a complete, internally consistent set of assumptions across all relevant inputs, not just one.

**Step-by-Step Methodology**: (1) Identify the most significant sources of correlated uncertainty for this decision (e.g., a country risk event that would simultaneously affect currency, demand, and repatriation). (2) Construct 2-4 distinct, internally consistent scenarios, each specifying a complete, coherent set of input values. (3) Recalculate the full financial/strategic model under each scenario's complete input set. (4) Compare outcomes across scenarios to assess overall robustness, distinct from the single-variable view sensitivity analysis provides.

**Hypothetical Example**: See [05_International_Finance.md](../03_FINANCE/05_International_Finance.md) Section 45's worked example, comparing a base case, a currency-stress case, and a political-risk case for a hypothetical foreign investment, each varying multiple related inputs together rather than one at a time.

**Interpretation**: A decision remaining acceptable under most plausible, coherent scenarios is more robust than one relying on a single favorable base case; the specific scenario(s) that would produce an unacceptable outcome should be flagged explicitly as monitoring triggers.

**Strengths**: Captures correlated risk that sensitivity analysis (varying one variable at a time) can miss; produces a more realistic picture of true downside risk in international decisions where shocks tend to affect multiple inputs simultaneously.

**Weaknesses**: More time-intensive to build than sensitivity analysis; the choice of which scenarios to construct is itself a judgment call that can be done narrowly or broadly.

**Common Mistakes**: Constructing scenarios that are not actually internally consistent (e.g., assuming currency devaluation with no corresponding effect on inflation or demand); building too few or too narrowly clustered scenarios to reveal genuine downside risk.

**Potential Misuse**: Building an overly narrow set of scenarios (e.g., only mild variations around the base case) to give the appearance of stress-testing without genuinely probing the decision's vulnerability to a severe, plausible adverse scenario.

## 22. Total Cost of Ownership

**What It Measures**: Total cost of ownership (TCO) measures the full lifecycle cost of an input, supplier relationship, or asset — extending beyond initial purchase/acquisition price to include quality/defect cost, supplier relationship management cost, and (for capital assets) installation, operating, maintenance, and disposal costs — see [07_Global_Supply_Chain.md](../04_OPERATIONS/07_Global_Supply_Chain.md) Section 42 for the full formula and methodology.

**What Question It Answers**: "Accounting for the complete lifecycle cost, not just the purchase price, which sourcing or asset alternative is actually cheapest?"

**When to Use**: Comparing sourcing alternatives or capital asset purchases where quality, lifecycle operating cost, or supplier management cost differ materially between alternatives.

**When NOT to Use**: For simple, low-value, low-risk purchases where the analytical effort of a full TCO calculation exceeds its decision value.

**Inputs Required**: Total landed cost (Section 23) plus quality/defect/rework cost history, supplier relationship management cost estimates, and (for capital assets) installation, operating, maintenance, and disposal cost estimates over the asset's useful life.

**Step-by-Step Methodology**: See [07_Global_Supply_Chain.md](../04_OPERATIONS/07_Global_Supply_Chain.md) Section 42 and the Total Landed Cost worked numerical example in that document, which extends into a full TCO comparison.

**Hypothetical Example**: See [07_Global_Supply_Chain.md](../04_OPERATIONS/07_Global_Supply_Chain.md)'s worked example, where a lower-unit-price, lower-total-landed-cost sourcing location is shown to have a *higher* total cost of ownership than a higher-priced alternative once a historically higher defect rate is included.

**Interpretation**: TCO is the most complete cost basis for comparing sourcing or asset alternatives; a location or supplier that appears cheapest on unit price or even total landed cost can be more expensive on a full TCO basis.

**Strengths**: Captures cost dimensions (quality, lifecycle operating cost) that unit price and even total landed cost calculations miss.

**Weaknesses**: Requires more extensive data (quality history, lifecycle operating cost estimates) than unit price or total landed cost, which may not always be readily available, especially for a new supplier or asset type without a track record.

**Common Mistakes**: Comparing alternatives on unit price or total landed cost alone when quality or lifecycle cost differences are known to be material; using industry-average quality/defect assumptions for a specific supplier without adjusting for that supplier's own track record where available.

**Potential Misuse**: Selectively including or excluding TCO cost components to favor a pre-preferred sourcing alternative.

## 23. Total Landed Cost

**What It Measures**: Total landed cost measures the complete cost of sourcing, transporting, and delivering a product to its point of use — unit price plus freight, insurance, duties/tariffs, customs compliance cost, inventory carrying cost, currency hedging cost, and risk-adjusted disruption cost — see [07_Global_Supply_Chain.md](../04_OPERATIONS/07_Global_Supply_Chain.md) Section 41 for the full formula and worked numerical example.

**What Question It Answers**: "Beyond the unit purchase price, what does it actually cost to get this product from this specific source to where we need it?"

**When to Use**: Comparing sourcing or production location alternatives, which is the specific purpose for which unit-price-only comparison most frequently misleads (see [07_Global_Supply_Chain.md](../04_OPERATIONS/07_Global_Supply_Chain.md), "How Companies Evaluate Sourcing Locations").

**When NOT to Use**: As a complete cost comparison where quality or lifecycle cost differences are material — in that case, extend to full Total Cost of Ownership (Section 22).

**Inputs Required**: Unit price, freight (inbound/outbound), insurance, duties/tariffs, customs brokerage and compliance cost, inventory carrying cost (driven by lead time), currency hedging cost, and an estimated risk-adjusted disruption cost.

**Step-by-Step Methodology**: See [07_Global_Supply_Chain.md](../04_OPERATIONS/07_Global_Supply_Chain.md) Section 41 for the full formula and the detailed worked numerical example comparing two hypothetical sourcing locations.

**Hypothetical Example**: See [07_Global_Supply_Chain.md](../04_OPERATIONS/07_Global_Supply_Chain.md)'s worked example, where a location with a 20%-lower unit price shows a nearly identical total landed cost to a higher-unit-price alternative once freight, duties, lead-time-driven inventory carrying cost, and risk are included.

**Interpretation**: A sourcing location with the lowest unit price is not necessarily the lowest total landed cost — always calculate the full formula before ranking alternatives.

**Strengths**: Directly corrects the most common and consequential error in international sourcing comparison (unit-price-only comparison).

**Weaknesses**: Requires more data than a simple unit price comparison, and some components (risk-adjusted disruption cost, inventory carrying cost) require estimation and judgment rather than being directly observable.

**Common Mistakes**: Omitting inventory carrying cost (driven by lead time) or risk-adjusted disruption cost from the calculation, understating the true cost of a distant, long-lead-time source.

**Potential Misuse**: Selectively adjusting the risk-adjusted disruption cost estimate (the most judgment-dependent component) to favor a pre-preferred sourcing location.

---

# Part F: Strategic Positioning and Entry Frameworks

## 24. Porter's Generic Strategies

**Purpose**: To classify a firm's fundamental competitive approach into one of a small number of coherent, internally consistent strategic postures — Cost Leadership, Differentiation, and Focus — see [03_Global_Strategy.md](../01_FOUNDATIONS/03_Global_Strategy.md) Sections 11-13 for the full treatment.

**What Question It Answers**: "What is our fundamental basis for competing in this market, and are our specific choices internally consistent with it?"

**When to Use**: Clarifying or auditing a firm's competitive positioning in a specific market, particularly to check for internal consistency across the firm's actual choices (pricing, cost structure, marketing, product development).

**When NOT to Use**: As a rigid constraint preventing any firm from ever combining elements thoughtfully (e.g., a "focused differentiation" strategy targeting a specific segment with a differentiated offering is a coherent, recognized combination) — the framework's value is consistency-checking, not forcing an artificially narrow choice among only three pure options.

**Inputs Required**: A clear view of the firm's cost position, differentiation basis (if any), and target segment scope relative to competitors in the specific market.

**Step-by-Step Methodology**: (1) Assess the firm's actual cost position relative to competitors in the specific market. (2) Assess whether the firm has a genuine, valued point of differentiation in that market. (3) Assess whether the firm is targeting the broad market or a specific, narrow segment. (4) Classify the firm's coherent strategic posture and check that its specific tactical choices (pricing, marketing, operations) are internally consistent with that posture, flagging any contradictions (e.g., premium marketing messaging paired with aggressive, margin-eroding discounting).

**Hypothetical Example**: A firm believes it is pursuing a differentiation strategy in a target market but is found, on review, to be pricing at parity with cost-focused competitors and investing minimally in the specific attributes it claims differentiate it — the framework surfaces this inconsistency, prompting either a genuine differentiation investment or a deliberate, coherent shift toward cost leadership instead.

**Interpretation**: A firm's competitive posture should be judged by whether its actual choices are internally consistent with a coherent strategy, not merely by which label management applies to it.

**Strengths**: Simple, memorable vocabulary for auditing strategic coherence; highlights the risk of being "stuck in the middle" (pursuing inconsistent elements of multiple strategies simultaneously without excelling at any).

**Weaknesses**: The three-category framework can feel artificially limiting for genuinely hybrid, well-executed strategies (e.g., focused differentiation) if applied too rigidly.

**Common Mistakes**: Declaring a strategic posture without checking whether the firm's actual tactical choices are consistent with it; treating the three generic strategies as the only viable options rather than as a starting vocabulary for a more nuanced, context-specific strategy.

**Potential Misuse**: Using the "differentiation" label to justify premium pricing without evidence that customers actually perceive and value a genuine point of difference.

## 25. Entry Mode Matrix

**Purpose**: To compare candidate market entry modes (exporting, licensing, joint venture, wholly owned subsidiary, and others) across consistent dimensions — control, risk, speed, capital, IP exposure — to inform entry mode selection; see [04_Market_Entry_Strategies.md](04_Market_Entry_Strategies.md) for the full 19-mode treatment and comparison tables.

**What Question It Answers**: "Given our specific control needs, risk tolerance, and resource constraints for this market, which entry mode fits best?"

**When to Use**: Selecting an entry mode for a specific market, informed by that market's CAGE distance, regulatory environment, and competitive structure.

**When NOT to Use**: As a mechanical, one-size-fits-all decision rule applied identically across all markets — entry mode should be reassessed for each specific market's conditions (see [04_Market_Entry_Strategies.md](04_Market_Entry_Strategies.md), "Market Entry Decision Framework").

**Inputs Required**: The firm's control needs, risk tolerance, capital availability, and IP sensitivity, alongside the target market's regulatory constraints, CAGE distance, and competitive structure.

**Step-by-Step Methodology**: See [04_Market_Entry_Strategies.md](04_Market_Entry_Strategies.md)'s full "How to Select an Entry Mode" section and decision tree for the complete step-by-step methodology across all 13 selection factors.

**Hypothetical Example**: See [04_Market_Entry_Strategies.md](04_Market_Entry_Strategies.md)'s comparison tables and decision tree for worked entry-mode selection logic across multiple scenario types.

**Interpretation**: The best entry mode is the one best matched to this specific market's distance/risk profile and the firm's specific needs — there is no universally optimal entry mode across all markets.

**Strengths**: Provides a systematic, comparable basis for entry-mode choice rather than defaulting to a single familiar mode across all markets.

**Weaknesses**: Entry-mode decisions are often difficult and costly to reverse (particularly FDI-based modes), so errors in the underlying comparison compound over the life of the investment.

**Common Mistakes**: Selecting an entry mode based on internal precedent ("we always use joint ventures") rather than fresh, market-specific analysis.

**Potential Misuse**: Using a favorable entry-mode comparison score to justify a mode the firm was already organizationally inclined toward, without genuinely testing it against the specific market's actual conditions.

## 26. Global Integration / Local Responsiveness Matrix

**Purpose**: To position a firm's (or a specific value-chain activity's) strategic posture on the trade-off between global integration (standardization, scale, centralization) and local responsiveness (adaptation to local conditions), informing organizational structure and strategy — see [03_Global_Strategy.md](../01_FOUNDATIONS/03_Global_Strategy.md) Sections 2-7 and 18 for the full treatment.

**What Question It Answers**: "Given the actual pressures in our industry, should this specific activity (or the firm overall) be organized for global standardization, local adaptation, or both simultaneously?"

**When to Use**: Determining a firm's overall global strategic posture (international, multidomestic, global, transnational), or — more precisely — assessing each major value-chain activity individually for its specific integration/responsiveness positioning.

**When NOT to Use**: As a single, whole-firm classification applied uniformly to every activity — the more rigorous and useful application assesses each major activity (R&D, manufacturing, marketing, sales) individually, since integration and responsiveness pressures typically differ by activity.

**Inputs Required**: An assessment of the industry's/activity's specific integration pressures (scale economies, global customers, universal technical standards) and responsiveness pressures (regulatory divergence, cultural/taste differences, differentiated channel structures) — see [03_Global_Strategy.md](../01_FOUNDATIONS/03_Global_Strategy.md) Sections 6-7.

**Step-by-Step Methodology**: (1) For the firm overall or, more precisely, for each major value-chain activity, assess the strength of integration pressure and responsiveness pressure separately. (2) Plot the resulting position on the two-axis matrix (high/low integration by high/low responsiveness). (3) Match organizational structure and decision authority (centralized vs. localized) to the resulting position for each activity — see [03_Global_Strategy.md](../01_FOUNDATIONS/03_Global_Strategy.md) Section 40 on matching organizational structure to strategic posture.

**Hypothetical Example**: A firm assesses its R&D/technology-platform activity as facing high integration pressure (large fixed costs, universal technical standards) and low responsiveness pressure, warranting centralization, while its marketing/sales activity faces low integration pressure and high responsiveness pressure (significant local taste and regulatory variation), warranting local autonomy — resulting in a deliberately mixed organizational structure rather than a single uniform posture applied to the whole firm.

**Interpretation**: A firm's position on this matrix, assessed activity by activity, should directly inform organizational design (centralized versus decentralized decision authority) for each specific activity — a single overall label (e.g., "we are a global company") often obscures important activity-level variation that the more granular application reveals.

**Strengths**: Directly connects strategic analysis to organizational design implications; the activity-level application (rather than whole-firm) produces a more accurate and actionable picture than treating the whole firm as a single point on the matrix.

**Weaknesses**: Whole-firm application (a common simplification) can oversimplify and obscure important activity-level variation; assessing "pressure" levels still requires substantial qualitative judgment.

**Common Mistakes**: Classifying the whole firm with a single posture label without examining whether individual activities actually face different integration/responsiveness pressures; declaring a "transnational" aspiration without building the organizational coordination mechanisms the posture actually requires.

**Potential Misuse**: Using a "global" classification to justify centralizing an activity (e.g., marketing execution) that, on genuine analysis, actually faces strong local responsiveness pressure and would perform better with local autonomy.

---

# Framework Selection Guide

Use this guide to identify a reasonable starting set of frameworks for a given type of international business question. This is a starting point for judgment, not an exhaustive or mechanical prescription — most real decisions benefit from combining several frameworks (see [Combining Frameworks](#combining-frameworks) below).

## Country Selection

Start with **PESTEL** (Section 2) for macro screening, layer in **CAGE** (Section 4) for distance assessment, use the **Country Attractiveness Matrix** (Section 12) to compare and rank candidates, and consult [08_Country_Risk.md](08_Country_Risk.md) directly for the full risk assessment underlying the attractiveness scoring. Use **Scenario Planning** (Section 10) for major, high-uncertainty country commitments.

## Market Selection

Use the **Market Attractiveness / Competitive Strength Matrix** (Section 13) to compare specific markets/segments, informed by **Porter's Five Forces** (Section 3) for competitive structure and **CAGE** (Section 4) for distance/fit.

## Competitor Analysis

Use **Porter's Five Forces** (Section 3) for the competitive structure of the industry, **VRIO** (Section 5) to assess the firm's (and, by extension, competitors') sustainable advantage, and **Porter's Generic Strategies** (Section 24) to classify competitors' strategic postures and check for internal consistency.

## Entry Mode

Use the **Entry Mode Matrix** (Section 25) informed by **CAGE** (Section 4) distance and the firm's risk/control needs; supplement with a **Weighted Scoring Model** (Section 16) if comparing several specific candidate modes formally.

## Investment Decision

Use **NPV** (Section 18) and **IRR** (Section 19) as the core financial evaluation tools, supported by **Sensitivity Analysis** (Section 20) and **Scenario Analysis** (Section 21) to test robustness, and **Cost-Benefit Analysis** (Section 14) or **Break-Even Analysis** (Section 17) for earlier-stage, simpler feasibility screening before a full capital budgeting exercise.

## Supply Chain

Use **Total Landed Cost** (Section 23) and **Total Cost of Ownership** (Section 22) for sourcing/location comparisons, and the **Risk Matrix** (Section 11) to prioritize supply chain risk mitigation investment — see [07_Global_Supply_Chain.md](../04_OPERATIONS/07_Global_Supply_Chain.md) for the full supply-chain-specific frameworks and methodology.

## Risk

Use the **Risk Matrix** (Section 11) to organize and prioritize identified risks, **Scenario Planning/Analysis** (Sections 10, 21) to stress-test decisions against major uncertainty, and **Sensitivity Analysis** (Section 20) to identify which specific assumptions matter most — see [08_Country_Risk.md](08_Country_Risk.md) for the substantive country risk content that feeds these frameworks.

## Strategy

Use **SWOT** (Section 1) as an organizing first step, **PESTEL** (Section 2) and **Porter's Five Forces** (Section 3) for external analysis, **VRIO** (Section 5) and the **Value Chain** (Section 6) for internal capability analysis, **Porter's Generic Strategies** (Section 24) and the **Global Integration/Local Responsiveness Matrix** (Section 26) for positioning, and the **Ansoff Matrix** (Section 7) and portfolio matrices (Sections 8-9) for growth and resource allocation decisions.

## Marketing

Use **CAGE** (Section 4) and **PESTEL** (Section 2) to assess adaptation needs, the **Market Attractiveness / Competitive Strength Matrix** (Section 13) for market/segment prioritization, and see [06_Global_Marketing.md](../05_MARKETING/06_Global_Marketing.md) for the dedicated standardization-versus-adaptation decision tree and full marketing-specific methodology.

## International Finance

Use **NPV**, **IRR**, **Sensitivity Analysis**, and **Scenario Analysis** (Sections 18-21) as the core toolkit, supplemented by **Break-Even Analysis** (Section 17) for simpler feasibility questions — see [05_International_Finance.md](../03_FINANCE/05_International_Finance.md) for the full formula treatment, currency and country-risk-adjustment methodology, and worked numerical examples.

---

# Combining Frameworks

**No single framework in this document answers a complete international business question on its own.** Frameworks are complementary lenses, each illuminating a different facet of a decision, and rigorous analysis combines them deliberately rather than running through a checklist mechanically.

## Principle 1: Sequence Frameworks From Broad to Specific

A well-structured analysis typically moves from broad, external screening (PESTEL, Five Forces) to firm-specific assessment (SWOT, VRIO, Value Chain) to specific decision quantification (NPV, Break-Even, Total Landed Cost) to risk stress-testing (Scenario Analysis, Sensitivity Analysis) to a final, explicitly labeled recommendation. Running frameworks out of this sequence — for example, jumping straight to an NPV calculation without first confirming the market is structurally attractive or that the firm has a genuine competitive basis to compete there — risks a technically rigorous-looking calculation built on an unexamined, potentially flawed premise.

## Principle 2: Let Each Framework's Output Feed the Next, Not Run in Isolation

CAGE distance findings (Section 4) should inform Entry Mode Matrix weighting (Section 25); PESTEL and Five Forces findings (Sections 2-3) should populate a SWOT's Opportunities/Threats quadrants (Section 1) rather than being generated independently; country risk assessment (from [08_Country_Risk.md](08_Country_Risk.md)) should directly inform the discount rate used in NPV (Section 18), not sit in a separate, unconnected section of the analysis. Frameworks run in isolation, without this deliberate cross-feeding, produce a collection of disconnected exhibits rather than a coherent analysis.

## Principle 3: Use Frameworks to Cross-Check Each Other, Not Just to Accumulate Evidence

A favorable Porter's Five Forces conclusion (industry structurally attractive) combined with an unfavorable VRIO conclusion (the firm has no defensible advantage in this specific competitive context) should produce caution, not an averaged-out, moderately favorable overall impression — the two frameworks are answering different questions (is the industry attractive vs. can this firm specifically win in it), and a strong answer to one does not compensate for a weak answer to the other. Look for these cross-checks explicitly rather than simply tallying how many frameworks point in a favorable direction.

## Principle 4: Match the Depth of Analysis to the Decision's Stakes and Reversibility

A small, easily reversible market test does not warrant the full sequence of frameworks in this document — a lighter-weight PESTEL scan and break-even check may suffice. A major, difficult-to-reverse FDI commitment warrants the fuller sequence, including scenario analysis and a fully documented, weighted country/market comparison. Applying maximal analytical rigor to every decision regardless of stakes wastes resources and can create analysis paralysis; applying minimal rigor to a major, irreversible decision creates unacceptable risk. Calibrate deliberately.

## Principle 5: Reconcile Disagreement Between Frameworks Explicitly, Not by Picking a Favorite

When frameworks point in different directions (e.g., a Weighted Scoring Model favors Country A while a Scenario Analysis reveals Country A is fragile under a specific plausible adverse scenario that Country B is not exposed to), do not simply choose whichever framework happens to support a pre-existing inclination. Instead, examine why they disagree — often the disagreement itself reveals the single most important, decision-relevant piece of information (in this example, the specific scenario risk), which should be surfaced prominently in the final recommendation rather than smoothed over.

## Principle 6: Maintain the Facts/Assumptions/Analysis/Recommendation Discipline Across the Combined Analysis

As established in [01_International_Business_Fundamentals.md](../01_FOUNDATIONS/01_International_Business_Fundamentals.md) Section 6, every input feeding every framework should be labeled as a verified fact (with source and date), current data requiring verification, an assumption, or an estimate. When frameworks are combined, this discipline becomes even more important, since an unlabeled assumption feeding one framework can silently propagate into every downstream framework that consumes its output (e.g., an unstated optimistic demand assumption feeding a break-even analysis, then an NPV calculation, then a final recommendation, all without ever being flagged as an assumption requiring scrutiny).

## Principle 7: The Final Output Is Managerial Judgment, Informed by Frameworks — Not a Framework's Output Itself

The end product of a combined analysis is a reasoned recommendation made by a human decision-maker (or an AI system supporting one), who weighs the frameworks' outputs alongside factors that resist quantification entirely — organizational readiness, leadership conviction, timing relative to competitors, and factors specific to the situation that no general-purpose framework was designed to capture. Present framework outputs as structured inputs to this judgment, always, and never as a conclusion that relieves the decision-maker of the responsibility to weigh, question, and ultimately own the final call.

## A Worked Illustration of Combination (Hypothetical)

A firm evaluating a significant foreign market entry might combine frameworks as follows: **PESTEL and CAGE** screen and characterize three candidate countries → **Porter's Five Forces**, applied within the two most promising candidates, reveals one has a structurally more attractive industry → **VRIO**, applied against that country's specific competitive set, confirms the firm's core capability remains rare and inimitable there → **SWOT**, built specifically for this decision, synthesizes these external findings against the firm's specific readiness, surfacing a weakness (no local regulatory experience) → the **Entry Mode Matrix**, informed by this weakness and the country's moderate CAGE administrative distance, points toward a joint venture rather than a wholly owned subsidiary → **NPV and IRR**, using a discount rate informed by the country risk assessment, quantify the specific joint venture opportunity → **Sensitivity and Scenario Analysis** reveal the conclusion is robust to normal demand variation but fragile to a specific currency-devaluation scenario → the final recommendation proceeds with the joint venture, explicitly naming the currency scenario as a monitored risk with a pre-defined contingency trigger, and stating the specific assumptions (demand forecast, discount rate, exchange rate path) the recommendation depends on. No single framework in this sequence produced the recommendation — the recommendation is the analyst's judgment, informed by the coherent combination of all of them.
