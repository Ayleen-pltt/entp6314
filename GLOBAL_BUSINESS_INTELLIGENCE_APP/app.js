/*
 * GLOBAL BUSINESS INTELLIGENCE — Application / Presentation Layer
 *
 * Owns the DOM and nothing else: renders state, reads decisions from
 * GBI.Engine (business logic) and GBI.DATA (structured knowledge), and
 * resolves all display text through GBI.I18N. No recommendation text,
 * gap classification, or routing logic is hardcoded here.
 *
 * Visual language: editorial intelligence platform — sections, rules,
 * typography and whitespace over cards and chips. See styles.css.
 */

window.GBI = window.GBI || {};

GBI.App = (function () {

  const D = GBI.DATA;
  const E = GBI.Engine;
  const I18N = GBI.I18N;
  const L = I18N.L, t = I18N.t;

  const STORAGE_KEY = "gbi_app_state_v2";

  const NAV_GROUPS = () => [
    { label: t("nav_group_workspace"), items: [
      { id: "dashboard", label: t("nav_dashboard") },
      { id: "projects", label: t("nav_projects") }
    ] },
    { label: t("nav_group_intelligence"), items: [
      { id: "country", label: t("nav_country") },
      { id: "entry", label: t("nav_entry") },
      { id: "trade", label: t("nav_trade") },
      { id: "finance", label: t("nav_finance") }
    ] },
    { label: t("nav_group_analysis"), items: [
      { id: "research", label: t("nav_research") },
      { id: "decisions", label: t("nav_decisions") },
      { id: "gaps", label: t("nav_gaps") }
    ] },
    { label: t("nav_group_system"), items: [
      { id: "settings", label: t("nav_settings") }
    ] }
  ];

  const QUICK_ITEMS = [
    { labelKey: "quick_country", starterKey: "starter_country" },
    { labelKey: "quick_entry", starterKey: "starter_entry" },
    { labelKey: "quick_trade", starterKey: "starter_trade" },
    { labelKey: "quick_finance", starterKey: "starter_finance" },
    { labelKey: "quick_research", starterKey: "starter_research" },
    { labelKey: "quick_case", starterKey: "starter_case" }
  ];

  let state = {
    view: "dashboard",
    projects: [],
    activeProjectId: null,
    mode: "consultant",
    countrySelection: { type: "curated", index: 0 },
    chat: []
  };

  // Any country name can be searched. Curated entries (D.COUNTRIES) carry
  // structural notes written for this prototype; anything else falls back
  // to the bare COUNTRY_ANALYSIS_FRAMEWORK.md template — never fabricated
  // country-specific facts.
  function findCuratedCountry(query) {
    const q = query.trim().toLowerCase();
    if (!q) return -1;
    return D.COUNTRIES.findIndex(c => c.name.en.toLowerCase() === q || c.name.es.toLowerCase() === q);
  }

  function genericCountryTemplate(name) {
    const mk = (en, es) => ({ en, es });
    const req = (enTopic, esTopic) => mk(
      `Verification Required — ${enTopic} for ${name} must be sourced from a current, authoritative source before use in analysis.`,
      `Requiere Verificación. Debe confirmarse información actual sobre ${esTopic} en ${name} con una fuente autorizada antes de usarse en el análisis.`
    );
    return {
      name: mk(name, name),
      isTemplate: true,
      political: req("the current political structure and conditions", "la estructura y las condiciones políticas actuales"),
      economic: req("current macroeconomic indicators (growth, inflation, currency)", "los indicadores macroeconómicos actuales (crecimiento, inflación, moneda)"),
      legal: req("the legal system and product-specific regulatory requirements", "el sistema legal y los requisitos regulatorios específicos del producto"),
      cultural: mk(
        `General cultural-distance framing (CAGE / Hofstede) has not been curated for ${name} in this prototype — apply COUNTRY_ANALYSIS_FRAMEWORK.md's cultural step directly.`,
        `El marco general de distancia cultural (CAGE / Hofstede) no se ha preparado para ${name} en este prototipo — aplica directamente el paso cultural de COUNTRY_ANALYSIS_FRAMEWORK.md.`
      ),
      infrastructure: req("current logistics and infrastructure quality", "la calidad actual de la logística e infraestructura"),
      trade: req("current trade-agreement coverage and tariff treatment", "la cobertura de acuerdos comerciales y el tratamiento arancelario actuales"),
      risk: req("a current country risk rating", "una calificación de riesgo país actual"),
      attractiveness: mk(
        "Objective-specific — see COUNTRY_ANALYSIS_FRAMEWORK.md Step 1; attractiveness depends entirely on the stated business objective.",
        "Específico según el objetivo — ver el Paso 1 de COUNTRY_ANALYSIS_FRAMEWORK.md; el atractivo depende totalmente del objetivo de negocio declarado."
      ),
      strategic: mk(
        `No structural pattern has been curated for ${name} in this prototype. Apply the full framework and current research before drawing strategic conclusions.`,
        `No se ha preparado un patrón estructural para ${name} en este prototipo. Aplica el marco completo e investigación actual antes de sacar conclusiones estratégicas.`
      )
    };
  }

  function selectedCountryData() {
    if (state.countrySelection.type === "curated") {
      return D.COUNTRIES[state.countrySelection.index] || D.COUNTRIES[0];
    }
    return genericCountryTemplate(state.countrySelection.name);
  }

  let modePickerOpen = false;

  function loadDemoProject() {
    if (state.projects.some(p => p.id === D.DEMO_PROJECT.id)) {
      state.activeProjectId = D.DEMO_PROJECT.id;
    } else {
      const demo = clone(D.DEMO_PROJECT);
      state.projects.push(demo);
      state.activeProjectId = demo.id;
    }
    save();
    renderAll();
  }

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function activeProject() {
    return state.projects.find(p => p.id === state.activeProjectId) || null;
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({
      projects: state.projects, activeProjectId: state.activeProjectId, mode: state.mode
    })); } catch (e) { /* localStorage unavailable — continue without persistence */ }
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.projects && parsed.projects.length) {
          state.projects = parsed.projects;
          state.activeProjectId = parsed.activeProjectId || parsed.projects[0].id;
          state.mode = parsed.mode || "consultant";
        }
      }
    } catch (e) { /* ignore corrupt storage */ }
  }

  function el(html) {
    const tpl = document.createElement("template");
    tpl.innerHTML = html.trim();
    return tpl.content.firstElementChild;
  }

  function statusClass(readiness) {
    return { GREEN: "status-green", YELLOW: "status-yellow", ORANGE: "status-orange", RED: "status-red" }[readiness] || "status-neutral";
  }

  const readinessLabel = I18N.readinessLabel;
  const levelText = I18N.levelText;

  const STATUS_MAP = { RESEARCH: "status_research", INITIAL: "status_initial", RECOMMENDED: "status_recommended" };
  function statusLabel(code) {
    return STATUS_MAP[code] ? t(STATUS_MAP[code]) : code;
  }

  function yesNo(bool) { return bool ? t("research_yes") : t("research_no"); }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function globeSVG(size, stroke) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="46" stroke="${stroke}" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="46" ry="16" stroke="${stroke}" stroke-width="1"/>
      <ellipse cx="60" cy="60" rx="46" ry="30" stroke="${stroke}" stroke-width="1"/>
      <line x1="60" y1="14" x2="60" y2="106" stroke="${stroke}" stroke-width="1"/>
      <line x1="14" y1="60" x2="106" y2="60" stroke="${stroke}" stroke-width="1"/>
    </svg>`;
  }

  // -------------------------------------------------------------
  // Shell
  // -------------------------------------------------------------
  function init() {
    load();
    document.getElementById("app").innerHTML = `
      <div class="shell">
        <div class="sidebar" id="sidebar"></div>
        <div class="topbar" id="topbar"></div>
        <div class="main" id="main"></div>
      </div>`;
    I18N.onChange(() => renderAll());
    document.addEventListener("click", (e) => {
      if (modePickerOpen && !e.target.closest("#modePicker")) {
        modePickerOpen = false;
        renderTopbar();
      }
    });
    renderAll();
  }

  function renderAll() {
    renderSidebar();
    renderTopbar();
    renderMain();
  }

  function setView(id) {
    state.view = id;
    renderAll();
  }

  function renderSidebar() {
    const sb = document.getElementById("sidebar");
    sb.innerHTML = `
      <div class="brand">
        <div class="brand-line">GLOBAL</div>
        <div class="brand-line">BUSINESS</div>
        <div class="brand-line">INTELLIGENCE</div>
        <div class="brand-sub">${t("app_subtitle")}</div>
      </div>
      ${NAV_GROUPS().map(g => `
        <div class="nav-group">
          <div class="nav-group-label">${escapeHtml(g.label)}</div>
          ${g.items.map(n => `<div class="nav-item ${state.view === n.id ? "active" : ""}" data-nav="${n.id}">${escapeHtml(n.label)}</div>`).join("")}
        </div>
      `).join("")}
      <div class="sidebar-globe">${globeSVG(72, "rgba(255,255,255,0.55)")}</div>
      <div class="sidebar-footer">${t("sidebar_footer_1")}<br/>${t("sidebar_footer_2")}</div>
    `;
    sb.querySelectorAll("[data-nav]").forEach(node => {
      node.addEventListener("click", () => setView(node.getAttribute("data-nav")));
    });
  }

  function renderTopbar() {
    const tb = document.getElementById("topbar");
    const p = activeProject();
    const openQ = p ? p.research.filter(r => r.open).length : 0;
    const lang = I18N.getLang();
    const currentMode = D.MODES.find(m => m.id === state.mode) || D.MODES[0];
    tb.innerHTML = `
      <div class="segment">
        <div class="field">
          <span class="label">${t("topbar_active_project")}</span>
          <span class="value">${p ? escapeHtml(L(p.name)) : t("topbar_none")}</span>
        </div>
        <div class="field">
          <span class="label">${t("topbar_decision_readiness")}</span>
          <span class="value">${p ? `<span class="status ${statusClass(p.gaps.readiness)}">${readinessLabel(p.gaps.readiness)}</span>` : "—"}</span>
        </div>
        <div class="field">
          <span class="label">${t("topbar_research_status")}</span>
          <span class="value">${openQ} ${openQ === 1 ? t("topbar_open_question") : t("topbar_open_questions")}</span>
        </div>
      </div>
      <div class="segment">
        <div class="field">
          <span class="label">${t("topbar_mode")}</span>
          <div class="mode-picker" id="modePicker">
            <button class="mode-picker-trigger" id="modePickerBtn">
              <span class="value">${escapeHtml(L(currentMode.label))}</span>
              <span class="mode-picker-caret">▾</span>
            </button>
            <div class="mode-picker-panel" id="modePickerPanel" ${modePickerOpen ? "" : "hidden"}>
              ${D.MODES.map(m => `
                <div class="mode-option ${m.id === state.mode ? "active" : ""}" data-mode="${m.id}">
                  <div class="mode-option-name">${escapeHtml(L(m.label))}</div>
                  <div class="mode-option-focus">${escapeHtml(L(m.use))}</div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
        <div class="field">
          <span class="label">${t("topbar_user")}</span>
          <span class="value">${t("topbar_guest")}</span>
        </div>
        <div class="field">
          <span class="label">${t("topbar_language")}</span>
          <div class="lang-toggle" id="langToggle">
            <button class="lang-btn ${lang === "en" ? "active" : ""}" data-lang="en">EN</button>
            <span class="lang-sep">/</span>
            <button class="lang-btn ${lang === "es" ? "active" : ""}" data-lang="es">ES</button>
          </div>
        </div>
      </div>
    `;
    document.getElementById("modePickerBtn").addEventListener("click", (e) => {
      e.stopPropagation();
      modePickerOpen = !modePickerOpen;
      renderTopbar();
    });
    tb.querySelectorAll(".mode-option").forEach(opt => {
      opt.addEventListener("click", () => {
        state.mode = opt.getAttribute("data-mode");
        modePickerOpen = false;
        save();
        renderTopbar();
      });
    });
    tb.querySelectorAll("#langToggle [data-lang]").forEach(btn => {
      btn.addEventListener("click", () => I18N.setLang(btn.getAttribute("data-lang")));
    });
  }

  function renderMain() {
    const main = document.getElementById("main");
    main.innerHTML = "";
    const view = views[state.view] || views.dashboard;
    main.appendChild(view());
  }

  // -------------------------------------------------------------
  // VIEW: Dashboard — "start an analysis" hero + chat box
  // -------------------------------------------------------------
  function viewDashboard() {
    const p = activeProject();
    const wrap = el(`<div></div>`);
    wrap.appendChild(el(`
      <div>
        <h1 class="view-title">${t("dash_title")}</h1>
        <div class="view-subtitle">${t("dash_subtitle")}</div>
      </div>
    `));

    wrap.appendChild(renderHero(p));
    wrap.appendChild(renderChatBox());

    setTimeout(() => {
      renderChatHistory(document.getElementById("chatHistory"));
      wireHero(wrap);
      wireChatBox();
    }, 0);

    return wrap;
  }

  // -------------------------------------------------------------
  // Hero — "What are you trying to decide?" (headline + shortcuts only;
  // the actual input lives in the chat box below).
  // -------------------------------------------------------------
  function renderHero(p) {
    const eyebrow = p
      ? `${t("dash_card_active_project").toUpperCase()} — ${escapeHtml(L(p.name))}${p.isDemo ? " (DEMO)" : ""}`
      : t("hero_eyebrow_new").toUpperCase();

    return el(`
      <div class="hero">
        <div class="hero-globe">${globeSVG(96, "var(--stone)")}</div>
        <span class="meta hero-eyebrow">${eyebrow}</span>
        <h2 class="hero-question">${t("hero_question")}</h2>
        <div class="quick-row">
          ${QUICK_ITEMS.map(q => `<div class="quick-item" data-starter="${escapeHtml(t(q.starterKey))}">${escapeHtml(t(q.labelKey))}</div>`).join("")}
        </div>
        ${!p ? `
          <div class="hero-empty-note">
            ${t("hero_no_project")}
            <button class="link-btn" id="heroCreate">${t("hero_create_link")}</button>
            ${t("hero_or")}
            <button class="link-btn" id="heroDemo">${t("hero_demo_link")}</button>
            ${t("hero_to_populate")}
          </div>
        ` : ""}
      </div>
    `);
  }

  function wireHero(root) {
    root.querySelectorAll("[data-starter]").forEach(item => {
      item.addEventListener("click", () => {
        const input = document.getElementById("chatInput");
        input.value = item.getAttribute("data-starter");
        input.focus();
      });
    });
    const createBtn = document.getElementById("heroCreate");
    if (createBtn) createBtn.addEventListener("click", () => setView("projects"));
    const demoBtn = document.getElementById("heroDemo");
    if (demoBtn) demoBtn.addEventListener("click", loadDemoProject);
  }

  // -------------------------------------------------------------
  // Chat box — a contained panel: scrollable message history with
  // the input pinned at its bottom, like a real conversation surface.
  // -------------------------------------------------------------
  function renderChatBox() {
    return el(`
      <div class="chat-box">
        <div class="chat-box-messages" id="chatHistory"></div>
        <div class="chat-box-input">
          <input type="text" id="chatInput" placeholder="${escapeHtml(t("chat_placeholder"))}" />
          <button class="hero-ask" id="chatSend">${t("chat_ask")} →</button>
        </div>
      </div>
    `);
  }

  function wireChatBox() {
    const input = document.getElementById("chatInput");
    document.getElementById("chatSend").addEventListener("click", submitChat);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") submitChat(); });
  }

  // -------------------------------------------------------------
  // Central AI Workspace — chat history / responses
  // -------------------------------------------------------------
  function renderChatHistory(history) {
    if (!history) return;
    if (state.chat.length === 0) {
      history.innerHTML = `<div class="chat-empty">${t("chat_empty_body")}</div>`;
      return;
    }
    history.innerHTML = "";
    state.chat.forEach(msg => history.appendChild(renderChatMessage(msg)));
    history.scrollTop = history.scrollHeight;
  }

  function renderChatMessage(msg) {
    if (msg.type === "user") {
      return el(`<div class="msg-user">${escapeHtml(msg.text)}</div>`);
    }

    const r = msg.response;

    if (r.kind === "education") {
      const eduMetaRows = [
        [t("meta_mode"), escapeHtml(r.mode)]
      ];
      const eduSectionsHtml = Object.entries(r.sections).map(([title, items]) => `
        <h4>${escapeHtml(title)}</h4>
        <ul>${items.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
      `).join("");
      return el(`
        <div class="msg-response">
          <div class="tag tag-demo mb-16">${t("edu_reference_tag")}</div>
          ${eduSectionsHtml}
          <details class="reasoning-details">
            <summary>${t("show_reasoning_details")}</summary>
            <div class="intel-meta">
              ${eduMetaRows.map(([label, val]) => `
                <div class="intel-meta-row">
                  <span class="meta">${label}</span>
                  <div class="val">${val}</div>
                </div>
              `).join("")}
            </div>
          </details>
        </div>
      `);
    }

    const cmdMeta = D.COMMANDS.find(c => c.id === r.command);
    const businessDecision = cmdMeta ? `/${r.command} — ${L(cmdMeta.purpose)}` : `/${r.command}`;
    const researchStatus = msg.intent && msg.intent.researchRequired ? t("resp_research_yes") : t("resp_research_unclear");

    const metaRows = [
      [t("meta_business_decision"), escapeHtml(businessDecision)],
      [t("meta_project_context"), escapeHtml(msg.projectContext || t("meta_no_project"))],
      [t("meta_mode"), escapeHtml(r.mode)],
      [t("meta_frameworks"), escapeHtml(r.frameworks.join(", ") || t("chat_general_framework"))],
      [t("meta_research_status"), escapeHtml(researchStatus)],
      [t("meta_decision_readiness"), `<span class="status ${statusClass(r.readiness)}">${readinessLabel(r.readiness)}</span>`]
    ];

    const recommendationTitle = t("resp_recommendation");
    const sectionsHtml = Object.entries(r.sections)
      .filter(([title]) => title !== recommendationTitle)
      .map(([title, items]) => `
        <h4>${escapeHtml(title)}</h4>
        <ul>${items.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
      `).join("");

    return el(`
      <div class="msg-response">
        <div class="record" style="border-left-color: var(--black); margin-bottom: 8px;">
          <span class="meta">${escapeHtml(recommendationTitle)}</span>
          <div class="record-title" style="margin-top:8px;">${escapeHtml(r.recommendation)}</div>
        </div>
        <div class="tag tag-demo mb-16">${t("chat_demo_tag")} — ${t("chat_confidence")} ${escapeHtml(levelText(r.confidence))}</div>
        ${sectionsHtml}
        <details class="reasoning-details">
          <summary>${t("show_reasoning_details")}</summary>
          <div class="intel-meta">
            ${metaRows.map(([label, val]) => `
              <div class="intel-meta-row">
                <span class="meta">${label}</span>
                <div class="val">${val}</div>
              </div>
            `).join("")}
          </div>
        </details>
      </div>
    `);
  }

  function submitChat() {
    const input = document.getElementById("chatInput");
    const text = input.value.trim();
    if (!text) return;
    input.value = "";

    state.chat.push({ type: "user", text });
    const history = document.getElementById("chatHistory");
    renderChatHistory(history);

    const intent = E.detectIntent(text);
    const steps = E.pipelineSteps(intent);

    // Transient "thinking" indicator — internal process, not kept in chat
    // history. It's replaced by the final response, never left behind.
    const thinking = el(`<div class="msg-pipeline-live"></div>`);
    history.appendChild(thinking);
    history.scrollTop = history.scrollHeight;

    const proj = activeProject();
    const projectContext = proj ? L(proj.name) + (proj.isDemo ? " (DEMO)" : "") : null;

    let i = 0;
    const interval = setInterval(() => {
      if (i >= steps.length) {
        clearInterval(interval);
        thinking.remove();
        const response = E.buildResponse(intent, proj);
        state.chat.push({ type: "response", response, intent, question: text, projectContext });
        renderChatHistory(document.getElementById("chatHistory"));
        return;
      }
      thinking.textContent = steps[i];
      i++;
      history.scrollTop = history.scrollHeight;
    }, 260);
  }

  // -------------------------------------------------------------
  // VIEW: Projects
  // -------------------------------------------------------------
  function viewProjects() {
    const wrap = el(`<div></div>`);
    wrap.appendChild(el(`
      <div class="flex-between mb-16">
        <div>
          <h1 class="view-title">${t("projects_title")}</h1>
          <div class="view-subtitle">${t("projects_subtitle")}</div>
        </div>
        <div class="flex gap-8">
          <button class="btn btn-secondary" id="loadDemoBtn">${t("projects_load_demo")}</button>
          <button class="btn" id="newProjectBtn">${t("projects_new")}</button>
        </div>
      </div>
    `));

    if (!state.projects.length) {
      wrap.appendChild(el(`<div class="empty-note">${t("projects_empty_title")} — ${t("projects_empty_body")}</div>`));
    }

    const list = el(`<div class="section"></div>`);
    state.projects.forEach(p => {
      list.appendChild(el(`
        <div class="field-row" style="cursor:pointer" data-open="${p.id}">
          <div class="flex-between">
            <div class="record-title" style="margin-bottom:0;">${p.isDemo ? `<span class="tag tag-demo">${t("projects_demo_tag")}</span> ` : ""}${escapeHtml(L(p.name))}</div>
            <span class="status ${statusClass(p.gaps.readiness)}">${readinessLabel(p.gaps.readiness)}</span>
          </div>
          <div class="small mt-8">${escapeHtml(L(p.profile.objective))}</div>
          <div class="small mt-8">${t("projects_status_prefix")} ${escapeHtml(statusLabel(p.profile.status))}</div>
        </div>
      `));
    });
    wrap.appendChild(list);

    if (activeProject()) {
      wrap.appendChild(renderProjectDetail(activeProject()));
    }

    setTimeout(() => {
      document.getElementById("loadDemoBtn").addEventListener("click", loadDemoProject);
      document.getElementById("newProjectBtn").addEventListener("click", () => {
        const name = prompt(t("projects_new_prompt"));
        if (!name) return;
        const np = clone(D.DEMO_PROJECT);
        np.id = "project-" + Date.now();
        np.isDemo = false;
        np.name = { en: name, es: name };
        np.profile = Object.assign({}, np.profile, {
          status: "INITIAL",
          objective: { en: "Not yet defined", es: "Aún no definido" }
        });
        np.decisions = [];
        np.research = [];
        np.gaps = { readiness: "YELLOW", confidence: "Low", critical: [], high: [], medium: [], assumptions: [], researchRequired: [], couldChangeDecision: [] };
        state.projects.push(np);
        state.activeProjectId = np.id;
        save();
        renderAll();
      });
      wrap.querySelectorAll("[data-open]").forEach(row => {
        row.addEventListener("click", () => {
          state.activeProjectId = row.getAttribute("data-open");
          save();
          renderAll();
        });
      });
    }, 0);

    return wrap;
  }

  function renderProjectDetail(p) {
    return el(`
      <div class="section mt-16">
        <div class="section-heading">${escapeHtml(L(p.name))} — ${t("projects_memory_heading")}</div>
        <div class="worksheet">
          <div class="worksheet-col">
            <span class="meta">${t("projects_company_profile")}</span>
            <div class="record-line mt-16"><b>${t("field_description")}</b> ${escapeHtml(L(p.company.description))}</div>
            <div class="record-line"><b>${t("field_industry")}</b> ${escapeHtml(L(p.company.industry))}</div>
            <div class="record-line"><b>${t("field_revenue")}</b> ${escapeHtml(L(p.company.revenue))}</div>
            <div class="record-line"><b>${t("field_intl_experience")}</b> ${escapeHtml(L(p.company.internationalExperience))}</div>
            <div class="record-line"><b>${t("field_financial_capacity")}</b> ${escapeHtml(L(p.company.financialCapacity))}</div>
          </div>
          <div class="worksheet-col">
            <span class="meta">${t("projects_market_context")}</span>
            <div class="record-line mt-16"><b>${t("field_target_market")}</b> ${escapeHtml(L(p.marketContext.targetMarket))}</div>
            <div class="record-line">${escapeHtml(L(p.marketContext.notes))}</div>
            <div class="record-line"><b>${t("field_budget")}</b> ${escapeHtml(L(p.profile.budget))}</div>
            <div class="record-line"><b>${t("field_timeline")}</b> ${escapeHtml(L(p.profile.timeline))}</div>
          </div>
        </div>
      </div>
    `);
  }

  // -------------------------------------------------------------
  // VIEW: Country Intelligence
  // -------------------------------------------------------------
  function viewCountry() {
    const wrap = el(`<div></div>`);
    wrap.appendChild(el(`
      <h1 class="view-title">${t("country_title")}</h1>
      <div class="view-subtitle">${t("country_subtitle")}</div>
    `));

    wrap.appendChild(el(`
      <div class="hero-input-row" style="max-width:480px;">
        <input type="text" id="countrySearch" placeholder="${escapeHtml(t("country_search_placeholder"))}" />
        <button class="hero-ask" id="countrySearchBtn">${t("country_search_go")} →</button>
      </div>
    `));

    wrap.appendChild(el(`<span class="meta mt-16" style="display:block;">${t("country_examples_label")}</span>`));
    const pillRow = el(`<div class="pill-row mt-8"></div>`);
    D.COUNTRIES.forEach((c, idx) => {
      const active = state.countrySelection.type === "curated" && state.countrySelection.index === idx;
      pillRow.appendChild(el(`<div class="pill ${active ? "active" : ""}" data-country="${idx}">${escapeHtml(L(c.name))}</div>`));
    });
    wrap.appendChild(pillRow);

    const country = selectedCountryData();
    if (country.isTemplate) {
      wrap.appendChild(el(`<div class="tag tag-demo mt-16">${t("country_template_tag")}</div>`));
    }
    const fields = [
      [t("country_political"), country.political],
      [t("country_economic"), country.economic],
      [t("country_legal"), country.legal],
      [t("country_cultural"), country.cultural],
      [t("country_infrastructure"), country.infrastructure],
      [t("country_trade"), country.trade],
      [t("country_risk"), country.risk],
      [t("country_attractiveness"), country.attractiveness],
      [t("country_strategic"), country.strategic]
    ];
    const grid = el(`<div class="grid grid-2 mt-16"></div>`);
    fields.forEach(([label, value]) => {
      grid.appendChild(el(`
        <div class="field-row">
          <span class="meta">${escapeHtml(label)}</span>
          <div class="field-body">${escapeHtml(L(value))}</div>
        </div>
      `));
    });
    wrap.appendChild(grid);

    setTimeout(() => {
      wrap.querySelectorAll("[data-country]").forEach(pill => {
        pill.addEventListener("click", () => {
          state.countrySelection = { type: "curated", index: parseInt(pill.getAttribute("data-country"), 10) };
          renderMain();
        });
      });
      const searchInput = document.getElementById("countrySearch");
      const runSearch = () => {
        const query = searchInput.value.trim();
        if (!query) return;
        const curatedIdx = findCuratedCountry(query);
        state.countrySelection = curatedIdx >= 0
          ? { type: "curated", index: curatedIdx }
          : { type: "custom", name: query };
        renderMain();
      };
      document.getElementById("countrySearchBtn").addEventListener("click", runSearch);
      searchInput.addEventListener("keydown", (e) => { if (e.key === "Enter") runSearch(); });
    }, 0);

    return wrap;
  }

  // -------------------------------------------------------------
  // VIEW: Market Entry
  // -------------------------------------------------------------
  function viewEntry() {
    const wrap = el(`<div></div>`);
    wrap.appendChild(el(`
      <h1 class="view-title">${t("entry_title")}</h1>
      <div class="view-subtitle">${t("entry_subtitle")}</div>
    `));
    const table = el(`
      <table class="data-table mt-16">
        <thead><tr>
          <th>${t("entry_col_mode")}</th><th>${t("entry_col_control")}</th><th>${t("entry_col_investment")}</th>
          <th>${t("entry_col_speed")}</th><th>${t("entry_col_risk")}</th><th>${t("entry_col_profitability")}</th>
          <th>${t("entry_col_scalability")}</th><th>${t("entry_col_complexity")}</th>
        </tr></thead>
        <tbody>
          ${D.ENTRY_MODES.map(m => `
            <tr>
              <td><b>${escapeHtml(L(m.name))}</b></td>
              <td>${escapeHtml(L(m.control))}</td>
              <td>${escapeHtml(L(m.investment))}</td>
              <td>${escapeHtml(L(m.speed))}</td>
              <td>${escapeHtml(L(m.risk))}</td>
              <td>${escapeHtml(L(m.profitability))}</td>
              <td>${escapeHtml(L(m.scalability))}</td>
              <td>${escapeHtml(L(m.complexity))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `);
    wrap.appendChild(table);
    return wrap;
  }

  // -------------------------------------------------------------
  // VIEW: Trade (landed cost calculator)
  // -------------------------------------------------------------
  function viewTrade() {
    const wrap = el(`<div></div>`);
    wrap.appendChild(el(`
      <h1 class="view-title">${t("trade_title")}</h1>
      <div class="view-subtitle">${t("trade_subtitle")}</div>
    `));

    wrap.appendChild(el(`
      <div class="worksheet">
        <div class="worksheet-col">
          <span class="meta">${t("trade_calc_label")}</span>
          <div class="small mt-8 mb-16">${t("trade_calc_desc")}</div>
          <div id="landedForm"></div>
        </div>
        <div class="worksheet-col">
          <span class="meta">${t("trade_result_label")}</span>
          <div id="landedResult" class="small mt-16">${t("trade_result_placeholder")}</div>
        </div>
      </div>
    `));

    const fields = [
      { id: "value", label: t("trade_field_value") },
      { id: "freight", label: t("trade_field_freight") },
      { id: "duty", label: t("trade_field_duty") },
      { id: "insurance", label: t("trade_field_insurance") },
      { id: "fees", label: t("trade_field_fees") }
    ];

    setTimeout(() => {
      const form = document.getElementById("landedForm");
      fields.forEach(f => {
        form.appendChild(el(`
          <div class="mb-16">
            <label class="small">${escapeHtml(f.label)}</label>
            <input type="number" step="any" id="fld_${f.id}" style="width:100%;padding:8px 0;border:none;border-bottom:1px solid var(--border);margin-top:4px;background:none;font-family:inherit;" />
          </div>
        `));
      });
      const btn = el(`<button class="btn">${t("trade_calculate")}</button>`);
      form.appendChild(btn);
      btn.addEventListener("click", () => {
        const value = parseFloat(document.getElementById("fld_value").value) || 0;
        const freight = parseFloat(document.getElementById("fld_freight").value) || 0;
        const dutyRateRaw = document.getElementById("fld_duty").value;
        const insurance = parseFloat(document.getElementById("fld_insurance").value) || 0;
        const feesVal = parseFloat(document.getElementById("fld_fees").value) || 0;
        const dutyUnresolved = dutyRateRaw === "";
        const dutyRate = dutyUnresolved ? 0 : parseFloat(dutyRateRaw);
        const duty = value * (dutyRate / 100);
        const total = value + freight + duty + insurance + feesVal;
        document.getElementById("landedResult").innerHTML = `
          <table class="data-table">
            <tr><td>${t("trade_row_value")}</td><td>$${value.toFixed(2)}</td></tr>
            <tr><td>${t("trade_row_freight")}</td><td>$${freight.toFixed(2)}</td></tr>
            <tr><td>${t("trade_row_duty")}${dutyUnresolved ? " " + t("trade_row_duty_unresolved") : " (" + dutyRate + "%)"}</td><td>$${duty.toFixed(2)}</td></tr>
            <tr><td>${t("trade_row_insurance")}</td><td>$${insurance.toFixed(2)}</td></tr>
            <tr><td>${t("trade_row_fees")}</td><td>$${feesVal.toFixed(2)}</td></tr>
            <tr><td><b>${t("trade_row_total")}</b></td><td><b>$${total.toFixed(2)}</b></td></tr>
          </table>
          ${dutyUnresolved ? `<div class="small mt-8">${t("tag_verification_required")} — ${t("trade_verification_note")}</div>` : ""}
        `;
      });
    }, 0);

    return wrap;
  }

  // -------------------------------------------------------------
  // VIEW: Finance (NPV/IRR calculator)
  // -------------------------------------------------------------
  function npv(rate, cashflows) {
    return cashflows.reduce((sum, cf, tYear) => sum + cf / Math.pow(1 + rate, tYear), 0);
  }

  function irr(cashflows) {
    let low = -0.99, high = 5, mid;
    for (let i = 0; i < 100; i++) {
      mid = (low + high) / 2;
      const val = npv(mid, cashflows);
      if (Math.abs(val) < 1e-6) return mid;
      if (val > 0) low = mid; else high = mid;
    }
    return mid;
  }

  function viewFinance() {
    const wrap = el(`<div></div>`);
    wrap.appendChild(el(`
      <h1 class="view-title">${t("finance_title")}</h1>
      <div class="view-subtitle">${t("finance_subtitle")}</div>
    `));

    wrap.appendChild(el(`
      <div class="worksheet">
        <div class="worksheet-col">
          <span class="meta">${t("finance_inputs_label")}</span>
          <div id="financeForm" class="mt-16"></div>
        </div>
        <div class="worksheet-col">
          <span class="meta">${t("finance_result_label")}</span>
          <div id="financeResult" class="small mt-16">${t("finance_result_placeholder")}</div>
        </div>
      </div>
    `));

    setTimeout(() => {
      const form = document.getElementById("financeForm");
      form.appendChild(el(`
        <div class="mb-16">
          <label class="small">${t("finance_discount_rate")}</label>
          <input type="number" step="any" id="fin_rate" value="10" style="width:100%;padding:8px 0;border:none;border-bottom:1px solid var(--border);margin-top:4px;background:none;font-family:inherit;" />
        </div>
      `));
      form.appendChild(el(`<label class="small">${t("finance_cashflows_label")}</label>`));
      const cfWrap = el(`<div class="mt-8"></div>`);
      form.appendChild(cfWrap);
      const defaults = [-500000, 150000, 180000, 200000, 220000];
      defaults.forEach((v, idx) => {
        cfWrap.appendChild(el(`
          <div class="mb-16">
            <label class="small">${t("finance_year")} ${idx}</label>
            <input type="number" step="any" class="cf-input" value="${v}" style="width:100%;padding:8px 0;border:none;border-bottom:1px solid var(--border);margin-top:4px;background:none;font-family:inherit;" />
          </div>
        `));
      });
      const btn = el(`<button class="btn">${t("finance_calculate")}</button>`);
      form.appendChild(btn);

      btn.addEventListener("click", () => {
        const rate = (parseFloat(document.getElementById("fin_rate").value) || 0) / 100;
        const cfs = Array.from(document.querySelectorAll(".cf-input")).map(i => parseFloat(i.value) || 0);
        const npvVal = npv(rate, cfs);
        const irrVal = irr(cfs) * 100;

        const scenario = (mult) => npv(rate, cfs.map((v, i) => i === 0 ? v : v * mult));

        document.getElementById("financeResult").innerHTML = `
          <table class="data-table">
            <tr><td>${t("finance_npv_at")} ${(rate * 100).toFixed(1)}%</td><td>$${npvVal.toFixed(2)}</td></tr>
            <tr><td>${t("finance_irr")}</td><td>${isFinite(irrVal) ? irrVal.toFixed(2) + "%" : "N/A"}</td></tr>
          </table>
          <span class="meta mt-16" style="display:block;">${t("finance_scenario_heading")}</span>
          <table class="data-table mt-8">
            <thead><tr><th>${t("finance_scenario")}</th><th>${t("finance_multiplier")}</th><th>NPV</th></tr></thead>
            <tbody>
              <tr><td>${t("finance_downside")}</td><td>0.7×</td><td>$${scenario(0.7).toFixed(2)}</td></tr>
              <tr><td>${t("finance_base_case")}</td><td>1.0×</td><td>$${scenario(1.0).toFixed(2)}</td></tr>
              <tr><td>${t("finance_upside")}</td><td>1.3×</td><td>$${scenario(1.3).toFixed(2)}</td></tr>
            </tbody>
          </table>
          <div class="small mt-16">${t("finance_assumption_note")}</div>
        `;
      });
    }, 0);

    return wrap;
  }

  // -------------------------------------------------------------
  // VIEW: Research
  // -------------------------------------------------------------
  function viewResearch() {
    const p = activeProject();
    const wrap = el(`<div></div>`);
    wrap.appendChild(el(`
      <h1 class="view-title">${t("research_title")}</h1>
      <div class="view-subtitle">${t("research_subtitle")}</div>
    `));

    if (!p) {
      wrap.appendChild(el(`<div class="empty-note">${t("research_empty_title")} — ${t("research_empty_body")}</div>`));
      return wrap;
    }

    const table = el(`
      <table class="data-table mt-16">
        <thead><tr>
          <th>${t("research_col_question")}</th><th>${t("research_col_source")}</th><th>${t("research_col_finding")}</th>
          <th>${t("research_col_relevance")}</th><th>${t("research_col_confidence")}</th><th>${t("research_col_current")}</th><th>${t("research_col_status")}</th>
        </tr></thead>
        <tbody>
          ${p.research.map(r => `
            <tr>
              <td>${escapeHtml(L(r.question))}</td>
              <td>${escapeHtml(t(r.source))}</td>
              <td>${escapeHtml(t(r.finding))}</td>
              <td>${escapeHtml(levelText(r.relevance))}</td>
              <td>${escapeHtml(levelText(r.confidence))}</td>
              <td>${yesNo(r.current)}</td>
              <td>${r.open ? `<span class="status status-orange">${t("research_open")}</span>` : `<span class="status status-green">${t("research_resolved")}</span>`}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <button class="btn mt-16" id="addResearchBtn">${t("research_add")}</button>
    `);
    wrap.appendChild(table);

    setTimeout(() => {
      document.getElementById("addResearchBtn").addEventListener("click", () => {
        const q = prompt(t("research_add_prompt"));
        if (!q) return;
        p.research.push({ id: "r" + Date.now(), question: { en: q, es: q }, date: "date_not_conducted", source: "tag_verification_required", finding: "finding_unresolved", relevance: "Medium", confidence: "Low", current: false, open: true });
        save();
        renderMain();
      });
    }, 0);

    return wrap;
  }

  // -------------------------------------------------------------
  // VIEW: Decisions
  // -------------------------------------------------------------
  function viewDecisions() {
    const p = activeProject();
    const wrap = el(`<div></div>`);
    wrap.appendChild(el(`
      <h1 class="view-title">${t("decisions_title")}</h1>
      <div class="view-subtitle">${t("decisions_subtitle")}</div>
    `));

    if (!p) {
      wrap.appendChild(el(`<div class="empty-note">${t("decisions_empty_title")} — ${t("decisions_empty_body")}</div>`));
      return wrap;
    }

    p.decisions.forEach(d => {
      wrap.appendChild(el(`
        <div class="record">
          <div class="flex-between">
            <div class="record-title">${escapeHtml(L(d.decision))}</div>
            <span class="status status-neutral">${escapeHtml(statusLabel(d.status))}</span>
          </div>
          <div class="record-line"><b>${t("decisions_date")}</b> ${escapeHtml(t(d.date))}</div>
          <div class="record-line"><b>${t("decisions_options")}</b> ${d.options.map(o => escapeHtml(L(o))).join("; ")}</div>
          <div class="record-line"><b>${t("decisions_recommendation")}</b> ${escapeHtml(L(d.recommendation))}</div>
          <div class="record-line"><b>${t("decisions_rationale")}</b> ${escapeHtml(L(d.rationale))}</div>
          <div class="record-line"><b>${t("decisions_assumptions")}</b> ${d.assumptions.map(a => escapeHtml(L(a))).join("; ")}</div>
          <div class="record-line"><b>${t("decisions_risks")}</b> ${d.risks.map(r => escapeHtml(L(r))).join("; ")}</div>
          <div class="record-line"><b>${t("decisions_what_could_change")}</b> ${escapeHtml(L(d.whatCouldChange))}</div>
        </div>
      `));
    });

    if (!p.decisions.length) {
      wrap.appendChild(el(`<div class="empty-note">${t("decisions_none_title")}</div>`));
    }

    return wrap;
  }

  // -------------------------------------------------------------
  // VIEW: Knowledge Gaps
  // -------------------------------------------------------------
  function viewGaps() {
    const p = activeProject();
    const wrap = el(`<div></div>`);
    wrap.appendChild(el(`
      <h1 class="view-title">${t("gaps_title")}</h1>
      <div class="view-subtitle">${t("gaps_subtitle")}</div>
    `));

    if (!p) {
      wrap.appendChild(el(`<div class="empty-note">${t("gaps_empty_title")} — ${t("gaps_empty_body")}</div>`));
      return wrap;
    }

    wrap.appendChild(el(`
      <div class="section">
        <span class="meta">${t("gaps_readiness_label")}</span>
        <div class="status status-lg ${statusClass(p.gaps.readiness)}" style="margin-top:8px;">${readinessLabel(p.gaps.readiness)}</div>
        <div class="small mt-8">${t("gaps_confidence_prefix")} ${escapeHtml(levelText(p.gaps.confidence))}</div>
      </div>
    `));

    function gapList(title, items, recordClass) {
      const box = el(`<div class="section"><div class="section-heading">${title}</div></div>`);
      if (!items.length) { box.appendChild(el(`<div class="small">${t("gaps_none_recorded")}</div>`)); return box; }
      items.forEach(g => {
        box.appendChild(el(`
          <div class="record ${recordClass}">
            <div class="record-title" style="font-size:14px;">${escapeHtml(L(g.item))}</div>
            <div class="record-line">${escapeHtml(L(g.why))}</div>
          </div>
        `));
      });
      return box;
    }

    wrap.appendChild(gapList(t("gaps_critical"), p.gaps.critical, "record-red"));
    wrap.appendChild(gapList(t("gaps_high"), p.gaps.high, "record-orange"));
    wrap.appendChild(gapList(t("gaps_medium"), (p.gaps.medium || []), "record-yellow"));

    const assumptionsBox = el(`<div class="section"><div class="section-heading">${t("gaps_assumptions")}</div></div>`);
    (p.gaps.assumptions || []).forEach(a => {
      assumptionsBox.appendChild(el(`
        <div class="record">
          <div class="record-title" style="font-size:14px;">${escapeHtml(L(a.assumption))}</div>
          <div class="record-line"><b>${t("gaps_impact")}</b> ${escapeHtml(levelText(a.impact))} &nbsp; <b>${t("gaps_validation_required")}</b> ${yesNo(a.validationRequired)}</div>
          <div class="record-line"><b>${t("gaps_why_it_matters")}</b> ${escapeHtml(L(a.whyItMatters))}</div>
        </div>
      `));
    });
    wrap.appendChild(assumptionsBox);

    wrap.appendChild(el(`
      <div class="section">
        <div class="section-heading">${t("gaps_research_required")}</div>
        ${(p.gaps.researchRequired || []).map(r => `<span class="tag">${escapeHtml(L(r))}</span>`).join("") || `<div class="small">${t("gaps_none_recorded")}</div>`}
      </div>
    `));

    wrap.appendChild(el(`
      <div class="section">
        <div class="section-heading">${t("gaps_could_change")}</div>
        <ul>${(p.gaps.couldChangeDecision || []).map(c => `<li class="small">${escapeHtml(L(c))}</li>`).join("")}</ul>
      </div>
    `));

    return wrap;
  }

  // -------------------------------------------------------------
  // VIEW: Settings
  // -------------------------------------------------------------
  function viewSettings() {
    const wrap = el(`<div></div>`);
    wrap.appendChild(el(`
      <h1 class="view-title">${t("settings_title")}</h1>
      <div class="view-subtitle">${t("settings_subtitle")}</div>
    `));

    wrap.appendChild(el(`
      <div class="section">
        <span class="meta">${t("settings_default_mode")}</span>
        <div class="pill-row mt-16" id="modePills">
          ${D.MODES.map(m => `<div class="pill ${m.id === state.mode ? "active" : ""}" data-mode="${m.id}">${escapeHtml(L(m.label))}</div>`).join("")}
        </div>
      </div>
    `));

    setTimeout(() => {
      document.querySelectorAll("#modePills [data-mode]").forEach(pill => {
        pill.addEventListener("click", () => {
          state.mode = pill.getAttribute("data-mode");
          save();
          renderAll();
        });
      });
    }, 0);

    return wrap;
  }

  const views = {
    dashboard: viewDashboard,
    projects: viewProjects,
    country: viewCountry,
    entry: viewEntry,
    trade: viewTrade,
    finance: viewFinance,
    research: viewResearch,
    decisions: viewDecisions,
    gaps: viewGaps,
    settings: viewSettings
  };

  return { init };

})();

document.addEventListener("DOMContentLoaded", GBI.App.init);
