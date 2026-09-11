/* ============================================================
   IMPO AI — app logic
   ============================================================ */

const LANG_KEY = "impoai-lang";
let currentLang = localStorage.getItem(LANG_KEY) === "es" ? "es" : "en";

// UI string lookup
function t(key) {
  const entry = UI_STRINGS[key];
  return entry ? entry[currentLang] : key;
}

// Bilingual data-field lookup: td({en:"...", es:"..."}) -> current language string
function td(field) {
  if (!field) return "";
  return typeof field === "string" ? field : field[currentLang];
}

document.addEventListener("DOMContentLoaded", () => {
  initLangToggle();
  applyStaticText();
  initTabs();
  initChat();
  initClassifier();
  initCalculator();
  initIncoterms();
  initDirectory();
  initChecklist();
  initSources();
});

/* ---------------- Language toggle ---------------- */
function initLangToggle() {
  const btn = document.getElementById("lang-toggle");
  updateLangToggleButton(btn);
  btn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    localStorage.setItem(LANG_KEY, currentLang);
    document.documentElement.lang = currentLang;
    updateLangToggleButton(btn);
    applyStaticText();
    resetChat();
    renderClassifierOptions();
    hideEl("classifier-result");
    renderCalculatorOptions();
    hideEl("calc-result");
    renderIncoterms();
    renderDirectory();
    renderChecklist();
    renderSources();
  });
}

function updateLangToggleButton(btn) {
  btn.textContent = t("lang_toggle");
  btn.title = t("lang_toggle_title");
}

function hideEl(id) {
  const el = document.getElementById(id);
  if (el) el.hidden = true;
}

/* ---------------- Static text ---------------- */
function applyStaticText() {
  document.documentElement.lang = currentLang;
  document.getElementById("ui-tagline").textContent = t("tagline");
  document.getElementById("ui-disclaimer").textContent = t("disclaimer");

  document.getElementById("ui-tab-chat").textContent = t("tab_chat");
  document.getElementById("ui-tab-classifier").textContent = t("tab_classifier");
  document.getElementById("ui-tab-calculator").textContent = t("tab_calculator");
  document.getElementById("ui-tab-incoterms").textContent = t("tab_incoterms");
  document.getElementById("ui-tab-directory").textContent = t("tab_directory");
  document.getElementById("ui-tab-sources").textContent = t("tab_sources");

  document.getElementById("ui-chat-heading").textContent = t("chat_heading");
  document.getElementById("ui-chat-intro").textContent = t("chat_intro");
  document.getElementById("ui-chat-send").textContent = t("chat_send");
  document.getElementById("chat-input").placeholder = t("chat_placeholder");

  document.getElementById("ui-classifier-heading").textContent = t("classifier_heading");
  document.getElementById("ui-classifier-intro").textContent = t("classifier_intro");
  document.getElementById("ui-classifier-label-product").textContent = t("classifier_label_product");
  document.getElementById("ui-classifier-label-country").textContent = t("classifier_label_country");
  document.getElementById("classify-btn").textContent = t("classifier_button");

  document.getElementById("ui-calc-heading").textContent = t("calc_heading");
  document.getElementById("ui-calc-intro").textContent = t("calc_intro");
  document.getElementById("ui-calc-label-country").textContent = t("calc_label_country");
  document.getElementById("ui-calc-label-fob").textContent = t("calc_label_fob");
  document.getElementById("ui-calc-label-freight").textContent = t("calc_label_freight");
  document.getElementById("ui-calc-label-insurance").textContent = t("calc_label_insurance");
  document.getElementById("ui-calc-label-duty").textContent = t("calc_label_duty");
  document.getElementById("ui-calc-label-vat").textContent = t("calc_label_vat");
  document.getElementById("ui-calc-label-fee").textContent = t("calc_label_fee");
  document.getElementById("ui-calc-label-units").textContent = t("calc_label_units");
  document.getElementById("ui-calc-button").textContent = t("calc_button");

  document.getElementById("ui-incoterms-heading").textContent = t("incoterms_heading");
  document.getElementById("ui-incoterms-intro").textContent = t("incoterms_intro");
  document.getElementById("ui-incoterms-warning-heading").textContent = t("incoterms_warning_heading");

  document.getElementById("ui-directory-heading").textContent = t("directory_heading");
  document.getElementById("ui-directory-intro").textContent = t("directory_intro");
  document.getElementById("ui-checklist-heading").textContent = t("checklist_heading");
  document.getElementById("ui-checklist-intro").textContent = t("checklist_intro");

  document.getElementById("ui-sources-heading").textContent = t("sources_heading");
  document.getElementById("ui-sources-intro").textContent = t("sources_intro");

  document.getElementById("ui-footer-text").textContent = t("footer_text");
}

/* ---------------- Tabs ---------------- */
function initTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`panel-${btn.dataset.tab}`).classList.add("active");
    });
  });
}

/* ---------------- Tab 1: Chat Advisor ---------------- */
function initChat() {
  renderScenarioButtons();
  resetChat();

  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    askScenario(text);
    input.value = "";
  });
}

function renderScenarioButtons() {
  const scenarioWrap = document.getElementById("quick-scenarios");
  scenarioWrap.innerHTML = "";
  CHAT_SCENARIOS.forEach((s) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "scenario-btn";
    btn.textContent = td(s.label);
    btn.addEventListener("click", () => askScenario(td(s.label)));
    scenarioWrap.appendChild(btn);
  });
}

function resetChat() {
  renderScenarioButtons();
  const chatWindow = document.getElementById("chat-window");
  chatWindow.innerHTML = "";
  const greeting = document.createElement("div");
  greeting.className = "chat-msg ai";
  greeting.innerHTML = `<span class="sender">${escapeHtml(t("chat_ai"))}</span><p></p>`;
  greeting.querySelector("p").textContent = t("chat_greeting");
  chatWindow.appendChild(greeting);
}

function askScenario(text) {
  addUserMessage(text);
  const scenarioMatch = findScenario(text);
  if (scenarioMatch) {
    setTimeout(() => addAiMessage(scenarioMatch.answer), 300);
    return;
  }
  const sourceMatch = findLegalSource(text);
  setTimeout(() => addAiMessage(sourceMatch ? buildSourceAnswer(sourceMatch) : CHAT_FALLBACK), 300);
}

function findScenario(text) {
  const lower = text.toLowerCase();
  return CHAT_SCENARIOS.find(
    (s) =>
      s.label.en.toLowerCase() === lower ||
      s.label.es.toLowerCase() === lower ||
      s.keywords.some((k) => lower.includes(k))
  );
}

// Simple client-side "retrieval": scores each knowledge-base entry by how
// many of its keywords appear in the question, and returns the best match
// above a minimum relevance threshold.
function findLegalSource(text) {
  const lower = text.toLowerCase();
  let best = null;
  let bestScore = 0;
  LEGAL_SOURCES.forEach((src) => {
    let score = 0;
    src.keywords.forEach((k) => {
      if (lower.includes(k)) score += k.split(" ").length;
    });
    if (lower.includes(td(src.region).toLowerCase())) score += 1;
    if (score > bestScore) {
      bestScore = score;
      best = src;
    }
  });
  return bestScore > 0 ? best : null;
}

function buildSourceAnswer(src) {
  return {
    title: { en: src.title, es: src.title },
    body: src.subject,
    legalBasis: { en: `${src.issuer} — ${td(src.region)}`, es: `${src.issuer} — ${td(src.region)}` },
    warning: null,
    sourceUrl: src.url,
    followUps: []
  };
}

function addUserMessage(text) {
  const chatWindow = document.getElementById("chat-window");
  const div = document.createElement("div");
  div.className = "chat-msg user";
  div.innerHTML = `<span class="sender">${escapeHtml(t("chat_you"))}</span><p></p>`;
  div.querySelector("p").textContent = text;
  chatWindow.appendChild(div);
  scrollChatToBottom();
}

function addAiMessage(answer) {
  const chatWindow = document.getElementById("chat-window");
  const div = document.createElement("div");
  div.className = "chat-msg ai";

  div.innerHTML = `<span class="sender">${escapeHtml(t("chat_ai"))}</span><p class="msg-title"></p><p></p>`;
  div.querySelector(".msg-title").textContent = td(answer.title);
  div.querySelectorAll("p")[1].textContent = td(answer.body);

  if (answer.legalBasis) {
    const legal = document.createElement("p");
    legal.className = "legal-basis";
    legal.textContent = t("chat_legal_basis_prefix") + td(answer.legalBasis);
    div.appendChild(legal);
  }

  if (answer.warning) {
    const warn = document.createElement("div");
    warn.className = "warning";
    warn.textContent = "⚠ " + td(answer.warning);
    div.appendChild(warn);
  }

  if (answer.sourceUrl) {
    const link = document.createElement("a");
    link.className = "source-link";
    link.href = answer.sourceUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = t("chat_open_source");
    div.appendChild(link);
  }

  if (answer.followUps && answer.followUps.length) {
    const wrap = document.createElement("div");
    wrap.className = "followups";
    answer.followUps.forEach((f) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "followup-chip";
      chip.textContent = td(f);
      chip.addEventListener("click", () => askScenario(td(f)));
      wrap.appendChild(chip);
    });
    div.appendChild(wrap);
  }

  chatWindow.appendChild(div);
  scrollChatToBottom();
}

function scrollChatToBottom() {
  const chatWindow = document.getElementById("chat-window");
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------- Tab 2: Tariff Classifier ---------------- */
function initClassifier() {
  renderClassifierOptions();

  document.getElementById("classify-btn").addEventListener("click", () => {
    const productSelect = document.getElementById("product-select");
    const countrySelect = document.getElementById("country-select");
    const result = document.getElementById("classifier-result");

    const product = PRODUCTS.find((p) => p.id === productSelect.value);
    const countryId = countrySelect.value;
    const countryName = td(DEST_COUNTRIES.find((c) => c.id === countryId).name);
    const national = product.national[countryId];
    const ftaNote = td(product.fta[countryId]);

    result.hidden = false;
    result.innerHTML = `
      <h3>${escapeHtml(td(product.name))} → ${escapeHtml(countryName)}</h3>
      <table>
        <tr><td>${escapeHtml(t("classifier_hs_label"))}</td><td>${escapeHtml(product.hs6)}</td></tr>
        <tr><td>${escapeHtml(t("classifier_national_label"))}</td><td>${escapeHtml(national.label)}</td></tr>
      </table>
      <p><strong>${escapeHtml(t("classifier_fta_label"))}</strong> ${escapeHtml(ftaNote)}</p>
      <p><strong>${escapeHtml(t("classifier_ntr_label"))}</strong></p>
      <ul class="tag-list">
        ${product.ntrs.map((n) => `<li>${escapeHtml(td(n))}</li>`).join("")}
      </ul>
    `;
  });
}

function renderClassifierOptions() {
  const productSelect = document.getElementById("product-select");
  const countrySelect = document.getElementById("country-select");
  const prevProduct = productSelect.value;
  const prevCountry = countrySelect.value;

  productSelect.innerHTML = "";
  PRODUCTS.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = td(p.name);
    productSelect.appendChild(opt);
  });
  if (prevProduct) productSelect.value = prevProduct;

  countrySelect.innerHTML = "";
  DEST_COUNTRIES.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = td(c.name);
    countrySelect.appendChild(opt);
  });
  if (prevCountry) countrySelect.value = prevCountry;
}

/* ---------------- Tab 3: Landed Cost Calculator ---------------- */
function initCalculator() {
  renderCalculatorOptions();

  const form = document.getElementById("calc-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const countrySelect = document.getElementById("calc-country");
    const result = document.getElementById("calc-result");
    const countryId = countrySelect.value;
    const fob = parseFloat(document.getElementById("calc-fob").value) || 0;
    const freight = parseFloat(document.getElementById("calc-freight").value) || 0;
    const insurance = parseFloat(document.getElementById("calc-insurance").value) || 0;
    const dutyRate = parseFloat(document.getElementById("calc-duty").value) || 0;
    const vatRate = parseFloat(document.getElementById("calc-vat").value) || 0;
    const feeRate = parseFloat(document.getElementById("calc-fee").value) || 0;
    const units = parseInt(document.getElementById("calc-units").value) || 1;

    const basisInfo = VALUATION_BASIS[countryId];
    const customsValue = basisInfo.basis === "CIF" ? fob + freight + insurance : fob;

    const duty = customsValue * (dutyRate / 100);
    const fee = customsValue * (feeRate / 100);
    const vatBase = customsValue + duty + fee;
    const vat = vatBase * (vatRate / 100);

    const nonCifExtras = basisInfo.basis === "FOB" ? freight + insurance : 0;
    const totalLandedCost = customsValue + duty + fee + vat + nonCifExtras;
    const unitCost = totalLandedCost / units;

    const feeLabel = td(FEE_LABELS[countryId]);

    result.hidden = false;
    result.innerHTML = `
      <h3>${escapeHtml(t("calc_result_heading"))}</h3>
      <p><strong>${escapeHtml(t("calc_valuation_basis_label"))}</strong> ${escapeHtml(td(basisInfo.label))}</p>
      <table>
        <tr><td>${escapeHtml(t("calc_customs_value_label"))} (${basisInfo.basis})</td><td>$${fmt(customsValue)}</td></tr>
        ${basisInfo.basis === "FOB" ? `<tr><td>${escapeHtml(t("calc_freight_insurance_label"))}</td><td>$${fmt(nonCifExtras)}</td></tr>` : ""}
        <tr><td>${escapeHtml(t("calc_duty_label"))} (${dutyRate}%)</td><td>$${fmt(duty)}</td></tr>
        <tr><td>${escapeHtml(feeLabel)} (${feeRate}%)</td><td>$${fmt(fee)}</td></tr>
        <tr><td>${escapeHtml(t("calc_vat_label"))} (${vatRate}%)</td><td>$${fmt(vat)}</td></tr>
        <tr class="total"><td>${escapeHtml(t("calc_total_label"))}</td><td>$${fmt(totalLandedCost)}</td></tr>
        <tr class="total"><td>${escapeHtml(t("calc_unit_cost_label"))} (${units} ${escapeHtml(t("calc_units_suffix"))})</td><td>$${fmt(unitCost)}</td></tr>
      </table>
      <p class="legal-basis" style="margin-top:14px;">${escapeHtml(t("calc_tip"))}</p>
    `;
  });
}

function renderCalculatorOptions() {
  const countrySelect = document.getElementById("calc-country");
  const prevCountry = countrySelect.value;
  countrySelect.innerHTML = "";
  Object.keys(VALUATION_BASIS).forEach((id) => {
    const entry = COUNTRY_DIRECTORY.find((c) => c.id === id);
    const name = entry ? td(entry.name) : id;
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = name;
    countrySelect.appendChild(opt);
  });
  if (prevCountry) countrySelect.value = prevCountry;
}

function fmt(n) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/* ---------------- Tab 4: Incoterms Guide ---------------- */
let selectedIncotermCode = null;

function initIncoterms() {
  renderIncoterms();
}

function renderIncoterms() {
  const grid = document.getElementById("incoterms-grid");
  const detail = document.getElementById("incoterms-detail");
  const warningsList = document.getElementById("incoterms-warnings");

  grid.innerHTML = "";
  INCOTERMS.forEach((term) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "incoterm-btn";
    btn.textContent = term.code;
    if (term.code === selectedIncotermCode) btn.classList.add("active");
    btn.addEventListener("click", () => {
      document.querySelectorAll(".incoterm-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedIncotermCode = term.code;
      showIncotermDetail(term);
    });
    grid.appendChild(btn);
  });

  function showIncotermDetail(term) {
    detail.hidden = false;
    detail.innerHTML = `
      <h3>${escapeHtml(term.code)} — ${escapeHtml(td(term.name))}</h3>
      <table>
        <tr><td>${escapeHtml(t("incoterms_detail_mode"))}</td><td>${escapeHtml(td(term.mode))}</td></tr>
        <tr><td>${escapeHtml(t("incoterms_detail_risk"))}</td><td>${escapeHtml(td(term.riskTransfer))}</td></tr>
        <tr><td>${escapeHtml(t("incoterms_detail_freight"))}</td><td>${escapeHtml(td(term.freight))}</td></tr>
        <tr><td>${escapeHtml(t("incoterms_detail_insurance"))}</td><td>${escapeHtml(td(term.insurance))}</td></tr>
        <tr><td>${escapeHtml(t("incoterms_detail_clearance"))}</td><td>${escapeHtml(td(term.clearance))}</td></tr>
      </table>
    `;
  }

  warningsList.innerHTML = "";
  INCOTERMS_WARNINGS.forEach((w) => {
    const li = document.createElement("li");
    li.textContent = td(w);
    warningsList.appendChild(li);
  });

  const activeCode = selectedIncotermCode || INCOTERMS[0].code;
  const activeTerm = INCOTERMS.find((term) => term.code === activeCode);
  selectedIncotermCode = activeTerm.code;
  const btnToActivate = [...grid.children].find((b) => b.textContent === activeTerm.code);
  if (btnToActivate) btnToActivate.classList.add("active");
  showIncotermDetail(activeTerm);
}

/* ---------------- Tab 5a: Directory ---------------- */
function initDirectory() {
  renderDirectory();
}

function renderDirectory() {
  const grid = document.getElementById("directory-grid");
  grid.innerHTML = "";
  COUNTRY_DIRECTORY.forEach((c) => {
    const card = document.createElement("div");
    card.className = "country-card";
    card.innerHTML = `
      <h4>${escapeHtml(td(c.name))}</h4>
      <dl>
        <dt>${escapeHtml(t("directory_agency_label"))}</dt><dd>${escapeHtml(td(c.agency))}</dd>
        <dt>${escapeHtml(t("directory_portal_label"))}</dt><dd>${escapeHtml(td(c.portal))}</dd>
        <dt>${escapeHtml(t("directory_taxes_label"))}</dt><dd>${escapeHtml(td(c.taxes))}</dd>
        <dt>${escapeHtml(t("directory_notes_label"))}</dt><dd>${escapeHtml(td(c.notes))}</dd>
      </dl>
    `;
    grid.appendChild(card);
  });
}

/* ---------------- Tab 5b: Checklist ---------------- */
function initChecklist() {
  renderChecklist();
}

function renderChecklist() {
  const wrap = document.getElementById("checklist");
  wrap.innerHTML = "";
  const storageKey = "impoai-checklist";
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch (e) {
    saved = {};
  }

  CHECKLIST_ITEMS.forEach((item) => {
    const row = document.createElement("div");
    row.className = "checklist-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `chk-${item.id}`;
    checkbox.checked = !!saved[item.id];

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = td(item.label);
    if (checkbox.checked) label.classList.add("done");

    checkbox.addEventListener("change", () => {
      saved[item.id] = checkbox.checked;
      label.classList.toggle("done", checkbox.checked);
      try {
        localStorage.setItem(storageKey, JSON.stringify(saved));
      } catch (e) {
        /* localStorage unavailable — ignore, checklist still works for this session */
      }
    });

    row.appendChild(checkbox);
    row.appendChild(label);
    wrap.appendChild(row);
  });
}

/* ---------------- Tab 6: Legal Sources ---------------- */
function initSources() {
  renderSources();
}

function renderSources() {
  const wrap = document.getElementById("sources-list");
  wrap.innerHTML = "";
  const regions = [...new Set(LEGAL_SOURCES.map((s) => td(s.region)))];

  regions.forEach((region) => {
    const heading = document.createElement("h3");
    heading.className = "sources-region";
    heading.textContent = region;
    wrap.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "sources-grid";

    LEGAL_SOURCES.filter((s) => td(s.region) === region).forEach((src) => {
      const card = document.createElement("a");
      card.className = "source-card";
      card.href = src.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.innerHTML = `
        <h4>${escapeHtml(src.title)}</h4>
        <p class="source-issuer">${escapeHtml(src.issuer)}</p>
        <p class="source-subject">${escapeHtml(td(src.subject))}</p>
        <span class="source-cta">${escapeHtml(t("sources_cta"))}</span>
      `;
      grid.appendChild(card);
    });

    wrap.appendChild(grid);
  });
}
