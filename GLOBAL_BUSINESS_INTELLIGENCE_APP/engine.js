/*
 * GLOBAL BUSINESS INTELLIGENCE — Reasoning Engine
 *
 * Business logic only: intent detection (mirroring DECISION_ENGINE.md),
 * knowledge-gap evaluation (mirroring KNOWLEDGE_GAP_ENGINE.md), and
 * structured response construction (mirroring RESPONSE_FORMATS.md).
 * Never touches the DOM — app.js is the only file allowed to render.
 *
 * All user-facing text goes through GBI.I18N (t/tf for fixed phrases,
 * L for bilingual data fields), so the reasoning output respects the
 * active language without duplicating logic per language.
 *
 * HONESTY NOTE: this is a static, client-side demo with no live research
 * or language-model connection. It demonstrates the ARCHITECTURE and
 * REASONING STRUCTURE defined in the Markdown intelligence layer — it
 * never presents its output as verified real-world business intelligence.
 */

window.GBI = window.GBI || {};

GBI.Engine = (function () {

  const D = GBI.DATA;
  const I18N = GBI.I18N;

  // -----------------------------------------------------------------
  // STEP 1–6 (DECISION_ENGINE.md): detect command, frameworks, modes
  // Keyword heuristic only — recognizes both English and Spanish input.
  // -----------------------------------------------------------------
  function detectIntent(rawText) {
    const text = (rawText || "").toLowerCase();

    const has = (...words) => words.some(w => text.includes(w));

    let command = null;
    const frameworks = new Set();
    let researchRequired = false;
    let financialAnalysisRequired = false;

    if (has("compare", " vs ", "versus", "which country", "which market", "comparar", "cuál país", "qué país")) {
      command = "compare";
      frameworks.add("country");
    }
    if (has("teach", "explain", "what is", "how does", "learn", "study", "exam",
             "enseña", "enséñame", "explica", "qué es", "cómo funciona", "aprender", "estudiar", "examen")) {
      command = command || "help";
    }
    // Market-entry phrasing is checked before the plain import/export keywords
    // below, so a question comparing entry modes ("...through a distributor,
    // direct export, or a subsidiary") is recognized by its actual business
    // decision (market entry) rather than by an incidental mode name it mentions.
    if (has("enter", "entry", "market entry", "expand into", "should we enter", "which entry mode",
             "entrar", "entrada al mercado", "expandir", "qué modo de entrada")) {
      command = command || "market-entry";
      frameworks.add("entry");
      frameworks.add("country");
    }
    if (has("import", "tariff", "customs", "hs code", "landed cost", "incoterm",
             "importar", "arancel", "aduana", "costo en destino")) {
      command = command || "import";
      frameworks.add("trade");
    }
    if (has("export", "exportar")) {
      command = command || "export";
      frameworks.add("trade");
    }
    if (has("invest", "npv", "irr", "cash flow", "currency", "hedg", "capital budgeting",
             "invertir", "van", "tir", "flujo de caja", "moneda", "cobertura")) {
      command = command || "finance";
      frameworks.add("finance");
      financialAnalysisRequired = true;
    }
    if (has("risk", "riesgo")) {
      command = command || "risk";
      frameworks.add("country");
    }
    if (has("country", "political", "regulatory environment", "cage", "pestel", "país", "entorno político")) {
      frameworks.add("country");
      command = command || "country";
    }
    if (has("case", "scenario", "what should this company do", "caso", "escenario", "qué debería hacer esta empresa")) {
      command = command || "case";
      frameworks.add("case");
    }
    if (has("research", "current", "verify", "source", "up to date", "investigar", "actual", "verificar", "fuente")) {
      researchRequired = true;
      command = command || "research";
    }
    if (has("challenge", "stress test", "devil", "what could go wrong", "poke holes",
             "cuestiona", "desafía", "pon a prueba", "qué podría salir mal")) {
      command = command || "strategy";
    }

    if (!command) command = "strategy";
    if (frameworks.size === 0) frameworks.add("entry");

    // Mode inference (MODE_SYSTEM.md Section 3)
    let modes = [];
    if (has("teach", "explain", "what is", "how does", "learn", "study", "exam", "exercise",
             "enseña", "enséñame", "explica", "qué es", "aprender", "examen", "ejercicio")) {
      modes.push("professor");
    } else if (has("challenge", "stress test", "devil", "what could go wrong", "poke holes",
                    "cuestiona", "desafía", "pon a prueba", "qué podría salir mal")) {
      modes.push("devil-advocate");
    } else if (has("brief", "board", "executive summary", "bottom line", "one-pager",
                    "informe ejecutivo", "directorio", "conclusión final")) {
      modes.push("executive");
    } else if (has("research", "verify", "current", "source", "investigar", "verificar", "actual", "fuente")) {
      modes.push("researcher");
    } else if (has("data", "evidence", "quantitative", "how confident", "npv", "irr",
                    "datos", "evidencia", "cuantitativo", "van", "tir")) {
      modes.push("analyst");
    } else {
      modes.push("consultant");
    }

    // Research trigger list (KNOWLEDGE_GAP_ENGINE.md Research Triggers)
    if (has("tariff", "regulat", "sanction", "exchange rate", "tax", "market size",
             "competitor", "political condition", "trade agreement", "ownership",
             "price", "logistics cost",
             "arancel", "regulaci", "sanción", "tipo de cambio", "impuesto", "tamaño del mercado",
             "competidor", "condición política", "acuerdo comercial", "propiedad", "precio", "costo logístico")) {
      researchRequired = true;
    }

    return {
      command,
      frameworks: Array.from(frameworks),
      modes,
      researchRequired,
      financialAnalysisRequired,
      rawText
    };
  }

  // -----------------------------------------------------------------
  // Activity indicator sequence (translated status messages)
  // -----------------------------------------------------------------
  function pipelineSteps(intent) {
    const steps = [I18N.t("pipe_understanding"), I18N.t("pipe_project_context")];
    steps.push(I18N.t("pipe_framework"));
    if (intent.researchRequired) steps.push(I18N.t("pipe_research"));
    steps.push(I18N.t("pipe_gaps"));
    steps.push(I18N.t("pipe_analyzing"));
    if (intent.modes.includes("devil-advocate")) steps.push(I18N.t("pipe_stress_test"));
    if (intent.modes.includes("executive")) steps.push(I18N.t("pipe_brief"));
    steps.push(I18N.t("pipe_preparing"));
    return steps;
  }

  // -----------------------------------------------------------------
  // Lightweight target extraction — pulls the place name a question
  // mentions ("...market entry into Vietnam") so a general, no-project
  // recommendation still speaks to what was actually asked rather than
  // reading as generic boilerplate. This only ever echoes text the user
  // themselves typed — it never looks up or invents facts about the place.
  // -----------------------------------------------------------------
  function extractTarget(rawText) {
    const match = (rawText || "").match(/\b(?:into|in|to|para|en)\s+([A-Za-zÀ-ÿ\s]{2,30})$/i);
    if (!match) return null;
    let place = match[1].trim().replace(/\s+/g, " ");
    // Strip a leading preposition left behind by a run-together phrase
    // (e.g. a quick-workflow starter "...into " plus typed "in China").
    place = place.replace(/^(?:into|in|to|para|en)\s+/i, "").trim();
    if (!place) return null;
    return place.replace(/\b\w/g, c => c.toUpperCase());
  }

  // -----------------------------------------------------------------
  // KNOWLEDGE_GAP_ENGINE.md — evaluate against the active project
  // -----------------------------------------------------------------
  function evaluateGaps(project) {
    if (!project || !project.gaps) {
      return { readiness: "YELLOW", confidence: "Low", critical: [], high: [] };
    }
    return project.gaps;
  }

  // -----------------------------------------------------------------
  // GENERAL QUESTIONS (DECISION_ENGINE.md / MODE_PROFESSOR.md) — an
  // educational "/help" question never requires a project and never
  // goes through the Knowledge Gap Engine's decision-readiness gate.
  // It answers from the static glossary or, if the term isn't curated,
  // says so honestly rather than forcing it through the decision template.
  // -----------------------------------------------------------------
  function findGlossaryEntry(rawText) {
    const text = (rawText || "").toLowerCase();
    return D.GLOSSARY.find(g => g.keys.some(k => text.includes(k))) || null;
  }

  function buildEducationResponse(intent) {
    const L = I18N.L, t = I18N.t, tf = I18N.tf;
    const professorLabel = L(D.MODES.find(m => m.id === "professor").label);
    const entry = findGlossaryEntry(intent.rawText);

    if (!entry) {
      return {
        kind: "education",
        mode: professorLabel,
        command: intent.command,
        frameworks: [],
        sections: {
          [t("edu_not_curated_title")]: [tf("edu_not_curated_body", { term: intent.rawText })]
        }
      };
    }

    return {
      kind: "education",
      mode: professorLabel,
      command: intent.command,
      frameworks: [],
      sections: {
        [t("edu_concept")]: [L(entry.concept)],
        [t("edu_explanation")]: [L(entry.explanation)],
        [t("edu_example")]: [L(entry.example)],
        [t("edu_application")]: [L(entry.application)],
        [t("edu_takeaways")]: entry.takeaways.map(L)
      }
    };
  }

  // -----------------------------------------------------------------
  // RESPONSE_FORMATS.md — build a structured, translated response object.
  // -----------------------------------------------------------------
  function buildResponse(intent, project) {
    const L = I18N.L, t = I18N.t, tf = I18N.tf;

    if (intent.command === "help") {
      return buildEducationResponse(intent);
    }

    const gaps = evaluateGaps(project);
    const fw = intent.frameworks.map(id => {
      const f = D.FRAMEWORKS.find(x => x.id === id);
      return f ? L(f.label) : null;
    }).filter(Boolean);
    const modeLabels = intent.modes.map(id => {
      const m = D.MODES.find(x => x.id === id);
      return m ? L(m.label) : null;
    }).filter(Boolean);

    const projectContext = project
      ? `${t("resp_project_scope")} "${L(project.name)}"${project.isDemo ? " " + t("resp_demo_project_tag") : ""}.`
      : t("resp_no_project_scope");

    const riskRows = project
      ? (project.decisions[0] ? project.decisions[0].risks.map(L) : [])
      : [t("resp_risk_generic")];

    const target = extractTarget(intent.rawText);
    const noProjectRecommendation = intent.command === "market-entry"
      ? (target ? tf("resp_recommendation_no_project_entry_named", { place: target }) : t("resp_recommendation_no_project_entry"))
      : t("resp_recommendation_generic");

    const recommendation = (gaps.readiness === "RED")
      ? t("resp_recommendation_red")
      : (gaps.readiness === "ORANGE")
        ? (project && project.decisions[0] ? tf("resp_recommendation_orange_project", { rec: L(project.decisions[0].recommendation) }) : t("resp_recommendation_orange_generic"))
        : (project && project.decisions[0] ? L(project.decisions[0].recommendation) : noProjectRecommendation);

    const executiveSummary = [
      `**${t("resp_situation")}**: ${intent.rawText}`,
      `**${t("resp_recommendation")}**: ${recommendation}`,
      `**${t("resp_risks")}**: ${riskRows[0] || t("resp_risk_generic")}`,
      `**${t("resp_readiness_label")}**: ${gaps.readiness ? I18N.readinessLabel(gaps.readiness) : "—"}.`,
      projectContext
    ];

    const keyFindings = [
      `${t("resp_command_selected")} /${intent.command}`,
      `${t("resp_frameworks_applied")} ${fw.join(", ") || t("resp_frameworks_none")}`,
      `${t("resp_research_required")} ${intent.researchRequired ? t("resp_research_yes") : t("resp_research_unclear")}`,
      `${t("resp_financial_required")} ${intent.financialAnalysisRequired ? t("resp_yes") : t("resp_no")}`
    ];

    const analysis = project
      ? tf("resp_analysis_with_project", { name: L(project.name), objective: L(project.profile.objective), budget: L(project.profile.budget) })
      : t("resp_analysis_no_project");

    const evidence = project
      ? project.research.map(r => `${L(r.question)} — ${r.open ? t("resp_open_tag") : t(r.finding)}`)
      : [t("resp_no_research_log")];

    const options = project && project.decisions.length
      ? project.decisions[0].options.map(L)
      : [t("resp_options_fallback")];

    const knowledgeGapsSection = gaps.critical && gaps.critical.length
      ? gaps.critical.map(g => `${t("gaps_critical").toUpperCase()} — ${L(g.item)}: ${L(g.why)}`)
      : [t("resp_no_critical_gaps")];

    const nextSteps = project
      ? project.gaps.researchRequired.map(r => `${t("resp_next_steps_resolve")} ${L(r)}`)
      : [t("resp_next_steps_fallback")];

    return {
      mode: modeLabels.join(" / ") || L(D.MODES.find(m => m.id === "consultant").label),
      command: intent.command,
      frameworks: fw,
      readiness: gaps.readiness || "YELLOW",
      confidence: gaps.confidence || "Low",
      recommendation,
      sections: {
        [t("resp_exec_summary")]: executiveSummary,
        [t("resp_key_findings")]: keyFindings,
        [t("resp_analysis")]: [analysis],
        [t("resp_evidence")]: evidence,
        [t("resp_options")]: options,
        [t("resp_risks")]: riskRows,
        [t("resp_gaps")]: knowledgeGapsSection,
        [t("resp_recommendation")]: [recommendation],
        [t("resp_next_steps")]: nextSteps
      }
    };
  }

  return {
    detectIntent,
    pipelineSteps,
    evaluateGaps,
    buildResponse
  };

})();
