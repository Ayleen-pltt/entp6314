/*
 * GLOBAL BUSINESS INTELLIGENCE — Data Layer
 *
 * Structured data only, no rendering logic. Every user-facing string is
 * bilingual: {en:"...", es:"..."}. Resolve with GBI.I18N.L(field) at
 * render time in app.js/engine.js. Status-like codes (readiness levels,
 * project/decision status, Low/Medium/High ratings) are kept as plain
 * English enum values so internal logic (comparisons, badge coloring)
 * stays language-independent — their DISPLAY label is translated via
 * small lookup helpers in app.js, not by changing the enum itself.
 */

window.GBI = window.GBI || {};

// Small helpers so every country entry applies the same fact-discipline
// consistently: only stable, non-time-sensitive structural facts are
// hand-written per country; anything dynamic (macro indicators, current
// risk ratings, current tariffs) always resolves to the same honest
// "Verification Required" text regardless of which country it is.
function _bi(en, es) { return { en, es }; }

function _econVerify() {
  return _bi(
    "Verification Required — current macroeconomic indicators (growth, inflation, currency) must be sourced from a current, authoritative source before use in analysis.",
    "Requiere Verificación — los indicadores macroeconómicos actuales (crecimiento, inflación, moneda) deben obtenerse de una fuente autorizada y actual antes de usarse en el análisis."
  );
}
function _riskVerify() {
  return _bi(
    "Verification Required — current country risk rating should be sourced from an authoritative index before use in a real decision.",
    "Requiere Verificación — la calificación de riesgo país actual debe obtenerse de un índice autorizado antes de usarse en una decisión real."
  );
}
function _attractiveness() {
  return _bi(
    "Objective-specific — see COUNTRY_ANALYSIS_FRAMEWORK.md Step 1; attractiveness depends entirely on the stated business objective.",
    "Específico según el objetivo — ver el Paso 1 de COUNTRY_ANALYSIS_FRAMEWORK.md; el atractivo depende totalmente del objetivo de negocio declarado."
  );
}
function _country(spec) {
  return {
    name: _bi(spec.en, spec.es),
    political: spec.political,
    economic: _econVerify(),
    legal: spec.legal,
    cultural: spec.cultural,
    infrastructure: spec.infrastructure,
    trade: spec.trade,
    risk: _riskVerify(),
    attractiveness: _attractiveness(),
    strategic: spec.strategic
  };
}

GBI.DATA = {

  APP: {
    name: "GLOBAL BUSINESS INTELLIGENCE"
  },

  // ---------------------------------------------------------------------
  // COMMANDS — mirrors 00_CORE/COMMAND_SYSTEM.md
  // ---------------------------------------------------------------------
  COMMANDS: [
    { id: "country",      cmd: "/country",      purpose: { en: "Country attractiveness and country risk analysis", es: "Análisis de atractivo y riesgo país" }, framework: "COUNTRY_ANALYSIS_FRAMEWORK.md" },
    { id: "market-entry", cmd: "/market-entry",  purpose: { en: "International market-entry decisions", es: "Decisiones de entrada a mercados internacionales" }, framework: "MARKET_ENTRY_FRAMEWORK.md" },
    { id: "import",       cmd: "/import",        purpose: { en: "Import transactions, customs, tariffs, landed cost", es: "Transacciones de importación, aduanas, aranceles, costo en destino" }, framework: "IMPORT_EXPORT_FRAMEWORK.md" },
    { id: "export",       cmd: "/export",        purpose: { en: "Export transactions, market access, documentation", es: "Transacciones de exportación, acceso a mercados, documentación" }, framework: "IMPORT_EXPORT_FRAMEWORK.md" },
    { id: "finance",      cmd: "/finance",       purpose: { en: "International investment, NPV/IRR, currency risk", es: "Inversión internacional, VAN/TIR, riesgo cambiario" }, framework: "INTERNATIONAL_FINANCE_FRAMEWORK.md" },
    { id: "case",         cmd: "/case",          purpose: { en: "Complex, multi-variable business cases", es: "Casos de negocio complejos y multivariable" }, framework: "CASE_STUDY_FRAMEWORK.md" },
    { id: "strategy",     cmd: "/strategy",      purpose: { en: "Strategic questions spanning multiple frameworks", es: "Preguntas estratégicas que abarcan varios marcos" }, framework: "Combined" },
    { id: "risk",         cmd: "/risk",          purpose: { en: "Country, currency, regulatory, and operational risk", es: "Riesgo país, cambiario, regulatorio y operativo" }, framework: "COUNTRY_ANALYSIS_FRAMEWORK.md + others" },
    { id: "compare",      cmd: "/compare",       purpose: { en: "Comparing countries, markets, suppliers, or strategies", es: "Comparar países, mercados, proveedores o estrategias" }, framework: "Combined" },
    { id: "research",     cmd: "/research",      purpose: { en: "Finding and verifying current information", es: "Buscar y verificar información actual" }, framework: "RESEARCH_PROTOCOL.md" },
    { id: "project",      cmd: "/project",       purpose: { en: "Manage project-specific business context", es: "Gestionar el contexto de negocio de un proyecto" }, framework: "PROJECT_MEMORY_SYSTEM.md" },
    { id: "gaps",         cmd: "/gaps",          purpose: { en: "Identify missing information affecting a decision", es: "Identificar información faltante que afecta una decisión" }, framework: "KNOWLEDGE_GAP_ENGINE.md" }
  ],

  // ---------------------------------------------------------------------
  // MODES — mirrors 00_CORE/MODE_SYSTEM.md
  // ---------------------------------------------------------------------
  MODES: [
    { id: "consultant",     label: { en: "Consultant", es: "Consultor" },          command: "/consultant",     question: { en: "What should we do?", es: "¿Qué deberíamos hacer?" },            use: { en: "Recommendation, strategy, decision support", es: "Recomendación, estrategia, apoyo a la decisión" } },
    { id: "analyst",        label: { en: "Analyst", es: "Analista" },              command: "/analyst",        question: { en: "What does the evidence show?", es: "¿Qué muestra la evidencia?" },   use: { en: "Data, quantitative analysis, market intelligence", es: "Datos, análisis cuantitativo, inteligencia de mercado" } },
    { id: "professor",      label: { en: "Professor", es: "Profesor" },           command: "/professor",      question: { en: "Do you understand why?", es: "¿Entiendes por qué?" },                use: { en: "Teaching, explanations, exercises", es: "Enseñanza, explicaciones, ejercicios" } },
    { id: "executive",      label: { en: "Executive", es: "Ejecutivo" },          command: "/executive",      question: { en: "What's the bottom line?", es: "¿Cuál es la conclusión final?" },      use: { en: "Board-ready briefing, compressed decision", es: "Informe listo para directorio, decisión condensada" } },
    { id: "researcher",     label: { en: "Researcher", es: "Investigador" },      command: "/researcher",     question: { en: "What is verified and current?", es: "¿Qué está verificado y es actual?" }, use: { en: "Finding and sourcing information", es: "Buscar y sustentar información" } },
    { id: "devil-advocate", label: { en: "Devil's Advocate", es: "Abogado del Diablo" }, command: "/devil-advocate", question: { en: "Does this survive scrutiny?", es: "¿Esto resiste el escrutinio?" }, use: { en: "Stress-testing an existing recommendation", es: "Poner a prueba una recomendación existente" } }
  ],

  // ---------------------------------------------------------------------
  // FRAMEWORKS — mirrors 00_CORE/*_FRAMEWORK.md
  // ---------------------------------------------------------------------
  FRAMEWORKS: [
    { id: "country",  file: "COUNTRY_ANALYSIS_FRAMEWORK.md",       label: { en: "Country Analysis", es: "Análisis de País" } },
    { id: "entry",    file: "MARKET_ENTRY_FRAMEWORK.md",           label: { en: "Market Entry", es: "Entrada al Mercado" } },
    { id: "trade",    file: "IMPORT_EXPORT_FRAMEWORK.md",          label: { en: "Import / Export", es: "Importación / Exportación" } },
    { id: "finance",  file: "INTERNATIONAL_FINANCE_FRAMEWORK.md",  label: { en: "International Finance", es: "Finanzas Internacionales" } },
    { id: "case",     file: "CASE_STUDY_FRAMEWORK.md",             label: { en: "Case Study", es: "Estudio de Caso" } }
  ],

  // ---------------------------------------------------------------------
  // ENTRY MODES — qualitative characterization per MARKET_ENTRY_FRAMEWORK.md
  // ---------------------------------------------------------------------
  ENTRY_MODES: [
    { name: { en: "Exporting", es: "Exportación" },
      control: { en: "Low", es: "Bajo" }, investment: { en: "Low", es: "Baja" }, speed: { en: "Fast", es: "Rápida" },
      risk: { en: "Low", es: "Bajo" }, profitability: { en: "Low–Moderate", es: "Baja–Moderada" }, scalability: { en: "Moderate", es: "Moderada" }, complexity: { en: "Low", es: "Baja" } },
    { name: { en: "Distributor", es: "Distribuidor" },
      control: { en: "Low", es: "Bajo" }, investment: { en: "Low", es: "Baja" }, speed: { en: "Fast", es: "Rápida" },
      risk: { en: "Low–Moderate", es: "Bajo–Moderado" }, profitability: { en: "Moderate", es: "Moderada" }, scalability: { en: "Moderate", es: "Moderada" }, complexity: { en: "Low–Moderate", es: "Baja–Moderada" } },
    { name: { en: "Sales Agent", es: "Agente de Ventas" },
      control: { en: "Low–Moderate", es: "Bajo–Moderado" }, investment: { en: "Low", es: "Baja" }, speed: { en: "Moderate", es: "Moderada" },
      risk: { en: "Moderate", es: "Moderado" }, profitability: { en: "Moderate", es: "Moderada" }, scalability: { en: "Low–Moderate", es: "Baja–Moderada" }, complexity: { en: "Moderate", es: "Moderada" } },
    { name: { en: "Licensing", es: "Licenciamiento" },
      control: { en: "Low", es: "Bajo" }, investment: { en: "Very Low", es: "Muy Baja" }, speed: { en: "Fast", es: "Rápida" },
      risk: { en: "Low (incl. IP)", es: "Bajo (incl. propiedad intelectual)" }, profitability: { en: "Low–Moderate", es: "Baja–Moderada" }, scalability: { en: "Moderate", es: "Moderada" }, complexity: { en: "Low", es: "Baja" } },
    { name: { en: "Franchising", es: "Franquicia" },
      control: { en: "Low–Moderate", es: "Bajo–Moderado" }, investment: { en: "Low", es: "Baja" }, speed: { en: "Fast", es: "Rápida" },
      risk: { en: "Moderate (brand)", es: "Moderado (marca)" }, profitability: { en: "Moderate", es: "Moderada" }, scalability: { en: "High", es: "Alta" }, complexity: { en: "Moderate", es: "Moderada" } },
    { name: { en: "Joint Venture", es: "Empresa Conjunta (JV)" },
      control: { en: "Moderate", es: "Moderado" }, investment: { en: "Moderate–High", es: "Moderada–Alta" }, speed: { en: "Moderate", es: "Moderada" },
      risk: { en: "Moderate", es: "Moderado" }, profitability: { en: "Moderate–High", es: "Moderada–Alta" }, scalability: { en: "Moderate", es: "Moderada" }, complexity: { en: "High", es: "Alta" } },
    { name: { en: "Acquisition", es: "Adquisición" },
      control: { en: "High", es: "Alto" }, investment: { en: "High", es: "Alta" }, speed: { en: "Fast", es: "Rápida" },
      risk: { en: "High", es: "Alto" }, profitability: { en: "Variable", es: "Variable" }, scalability: { en: "High", es: "Alta" }, complexity: { en: "High", es: "Alta" } },
    { name: { en: "Wholly Owned Subsidiary", es: "Subsidiaria de Propiedad Total" },
      control: { en: "High", es: "Alto" }, investment: { en: "High", es: "Alta" }, speed: { en: "Slow", es: "Lenta" },
      risk: { en: "High", es: "Alto" }, profitability: { en: "High (if successful)", es: "Alta (si tiene éxito)" }, scalability: { en: "High", es: "Alta" }, complexity: { en: "High", es: "Alta" } },
    { name: { en: "Greenfield FDI", es: "IED Greenfield" },
      control: { en: "High", es: "Alto" }, investment: { en: "Very High", es: "Muy Alta" }, speed: { en: "Slow", es: "Lenta" },
      risk: { en: "High", es: "Alto" }, profitability: { en: "High (long-term)", es: "Alta (largo plazo)" }, scalability: { en: "High", es: "Alta" }, complexity: { en: "Very High", es: "Muy Alta" } }
  ],

  // ---------------------------------------------------------------------
  // COUNTRY INTELLIGENCE — structural placeholders only. No tariffs, GDP,
  // or market-size statistics are included; per MASTER_INSTRUCTIONS.md
  // this application never fabricates current country data.
  // ---------------------------------------------------------------------
  COUNTRIES: [
    _country({
      en: "Mexico", es: "México",
      political: _bi("Federal republic; USMCA member alongside the US and Canada (verified structural fact — current political conditions require verification).", "República federal; miembro del T-MEC junto con EE. UU. y Canadá (hecho estructural verificado — las condiciones políticas actuales requieren verificación)."),
      legal: _bi("Civil law system. Product-specific regulatory requirements vary by category — Verification Required for any specific product.", "Sistema de derecho civil. Los requisitos regulatorios varían según la categoría de producto — Requiere Verificación para cualquier producto específico."),
      cultural: _bi("Moderate cultural distance from the US on language; extensive commercial familiarity given trade volume and geographic proximity (general CAGE framing, not a market-specific finding).", "Distancia cultural moderada con EE. UU. en el idioma; amplia familiaridad comercial dado el volumen de comercio y la proximidad geográfica (marco CAGE general, no un hallazgo específico de mercado)."),
      infrastructure: _bi("Land border with the US enables trucking-based logistics — a structural logistics advantage for bulky/heavy goods. Verification Required for current infrastructure quality specifics.", "La frontera terrestre con EE. UU. permite logística por camión — una ventaja logística estructural para bienes voluminosos o pesados. Requiere Verificación para detalles actuales de calidad de infraestructura."),
      trade: _bi("WTO member; covered by USMCA. Verification Required for current tariff treatment of any specific HS classification.", "Miembro de la OMC; cubierto por el T-MEC. Requiere Verificación el tratamiento arancelario actual de cualquier clasificación arancelaria específica."),
      strategic: _bi("Frequently attractive as a first international market for US firms due to geographic and regulatory proximity — a general pattern, not a guarantee for any specific company.", "Frecuentemente atractivo como primer mercado internacional para empresas de EE. UU. por su proximidad geográfica y regulatoria — un patrón general, no una garantía para ninguna empresa en particular.")
    }),
    _country({
      en: "Germany", es: "Alemania",
      political: _bi("Federal parliamentary republic; EU member state (verified structural fact).", "República parlamentaria federal; estado miembro de la UE (hecho estructural verificado)."),
      legal: _bi("Civil law system; EU-wide product safety, chemical (REACH-type), and packaging/labeling regimes generally apply — specific requirements require verification.", "Sistema de derecho civil; generalmente aplican regímenes de seguridad de producto, químicos (tipo REACH) y de empaque/etiquetado a nivel de la UE — los requisitos específicos requieren verificación."),
      cultural: _bi("Moderate cultural distance from the US; strong domestic design and engineering tradition in many product categories (general framing).", "Distancia cultural moderada con EE. UU.; fuerte tradición local de diseño e ingeniería en muchas categorías de producto (marco general)."),
      infrastructure: _bi("Access to the broader EU single market via one entry point — a structural advantage for scaling across Europe. Verification Required for current specifics.", "Acceso al mercado único de la UE a través de un solo punto de entrada — una ventaja estructural para escalar por Europa. Requiere Verificación para detalles actuales."),
      trade: _bi("WTO member; EU member — no comprehensive US-EU free trade agreement; standard WTO/MFN treatment likely applies. Verification Required for current tariff schedules.", "Miembro de la OMC; miembro de la UE — no existe un tratado de libre comercio integral entre EE. UU. y la UE; probablemente aplica el tratamiento estándar OMC/NMF. Requiere Verificación los aranceles actuales."),
      strategic: _bi("Often attractive for design-conscious or premium categories, but frequently more competitive and compliance-intensive than other first-entry markets (general pattern).", "A menudo atractivo para categorías premium o con enfoque en diseño, pero frecuentemente más competitivo y exigente en cumplimiento que otros mercados de primera entrada (patrón general).")
    }),
    _country({
      en: "Australia", es: "Australia",
      political: _bi("Federal parliamentary democracy; common-law legal tradition shared with the US (verified structural fact).", "Democracia parlamentaria federal; tradición jurídica de derecho consuetudinario (common law) compartida con EE. UU. (hecho estructural verificado)."),
      legal: _bi("Common law system — generally lower legal-structure distance from the US than civil-law markets. Specific product requirements require verification.", "Sistema de common law — generalmente menor distancia de estructura legal con EE. UU. que los mercados de derecho civil. Los requisitos específicos de producto requieren verificación."),
      cultural: _bi("Low cultural/language distance from the US — shared primary language (English) (general framing).", "Baja distancia cultural/lingüística con EE. UU. — idioma principal compartido (inglés) (marco general)."),
      infrastructure: _bi("Long geographic distance from the US drives higher freight cost and transit time for physical goods — a structural logistics factor.", "La gran distancia geográfica con EE. UU. genera mayores costos de flete y tiempos de tránsito para bienes físicos — un factor logístico estructural."),
      trade: _bi("WTO member. No comprehensive current US-Australia FTA coverage assumed without verification. Verification Required for current tariff treatment.", "Miembro de la OMC. No se asume cobertura integral de un TLC EE. UU.–Australia sin verificación. Requiere Verificación el tratamiento arancelario actual."),
      strategic: _bi("Southern Hemisphere seasonality is reversed relative to the US — a structural fact relevant to seasonal product categories.", "La estacionalidad del Hemisferio Sur está invertida respecto a EE. UU. — un hecho estructural relevante para categorías de producto estacionales.")
    }),
    _country({
      en: "Brazil", es: "Brasil",
      political: _bi("Federal presidential republic; Mercosur member (verified structural fact).", "República federal presidencialista; miembro del Mercosur (hecho estructural verificado)."),
      legal: _bi("Civil law system with a distinct and often complex import/tax regime — specific requirements require verification with a customs professional.", "Sistema de derecho civil con un régimen de importación/impuestos distintivo y frecuentemente complejo — los requisitos específicos requieren verificación con un profesional de aduanas."),
      cultural: _bi("Higher cultural and language distance from the US than Mexico or Australia (general CAGE framing).", "Mayor distancia cultural e idiomática con EE. UU. que México o Australia (marco CAGE general)."),
      infrastructure: _bi("Verification Required for current logistics/infrastructure specifics.", "Requiere Verificación los detalles actuales de logística/infraestructura."),
      trade: _bi("WTO member; Mercosur member. Verification Required for current tariff treatment and any applicable trade agreement coverage.", "Miembro de la OMC; miembro del Mercosur. Requiere Verificación el tratamiento arancelario actual y la cobertura de cualquier acuerdo comercial aplicable."),
      strategic: _bi("Large domestic market size is a frequently cited general attraction, but import complexity is also frequently cited as a barrier — both require verification for any specific decision.", "El gran tamaño del mercado interno es un atractivo general frecuentemente citado, pero la complejidad de importación también se cita frecuentemente como una barrera — ambos requieren verificación para cualquier decisión específica.")
    }),
    _country({
      en: "United States", es: "Estados Unidos",
      political: _bi("Federal presidential republic (verified structural fact).", "República federal presidencialista (hecho estructural verificado)."),
      legal: _bi("Common law system at the federal level, with separate state-level legal variation — specific requirements require verification per state.", "Sistema de common law a nivel federal, con variación legal adicional a nivel estatal — los requisitos específicos requieren verificación por estado."),
      cultural: _bi("Reference point for the CAGE comparisons elsewhere in this app; internally diverse across regions and states (general framing).", "Punto de referencia para las comparaciones CAGE del resto de esta aplicación; internamente diversa entre regiones y estados (marco general)."),
      infrastructure: _bi("Extensive domestic logistics network and one of the world's largest consumer markets — a structural scale advantage.", "Amplia red logística interna y uno de los mercados de consumo más grandes del mundo — una ventaja estructural de escala."),
      trade: _bi("WTO member; USMCA member alongside Mexico and Canada.", "Miembro de la OMC; miembro del T-MEC junto con México y Canadá."),
      strategic: _bi("Often the benchmark or reference market by GDP size for foreign companies evaluating entry — general pattern, not a guarantee for any specific company.", "A menudo el mercado de referencia por tamaño de PIB para empresas extranjeras que evalúan su entrada — patrón general, no una garantía para ninguna empresa en particular.")
    }),
    _country({
      en: "China", es: "China",
      political: _bi("Unitary one-party socialist republic (verified structural fact).", "República socialista unitaria de partido único (hecho estructural verificado)."),
      legal: _bi("Civil law system with distinct socialist-law characteristics; foreign investment and joint-venture rules are significant and require verification for any specific sector.", "Sistema de derecho civil con características distintivas de derecho socialista; las reglas de inversión extranjera y empresas conjuntas son significativas y requieren verificación para cualquier sector específico."),
      cultural: _bi("High cultural and language distance from the US (Mandarin, distinct business etiquette norms) — general CAGE framing, not a stereotype of individual counterparts.", "Alta distancia cultural e idiomática con EE. UU. (mandarín, normas de etiqueta empresarial distintivas) — marco CAGE general, no un estereotipo de contrapartes individuales."),
      infrastructure: _bi("Large-scale manufacturing base and major global shipping hubs — a structural logistics and production-scale factor.", "Base de manufactura a gran escala y importantes centros de embarque globales — un factor estructural de logística y escala de producción."),
      trade: _bi("WTO member (acceded 2001). Verification Required for current tariff treatment of any specific HS classification.", "Miembro de la OMC (adhesión en 2001). Requiere Verificación el tratamiento arancelario actual de cualquier clasificación arancelaria específica."),
      strategic: _bi("Consistently cited among the world's largest economies and manufacturing bases — a general pattern; specific market-size and growth figures require verification.", "Citada consistentemente entre las economías y bases de manufactura más grandes del mundo — un patrón general; las cifras específicas de tamaño de mercado y crecimiento requieren verificación.")
    }),
    _country({
      en: "Japan", es: "Japón",
      political: _bi("Parliamentary constitutional monarchy (verified structural fact).", "Monarquía constitucional parlamentaria (hecho estructural verificado)."),
      legal: _bi("Civil law system. Specific product certification and regulatory requirements require verification.", "Sistema de derecho civil. Los requisitos específicos de certificación de producto y regulación requieren verificación."),
      cultural: _bi("High cultural and language distance from the US, with a consensus- and relationship-driven business culture (general CAGE framing, not a stereotype).", "Alta distancia cultural e idiomática con EE. UU., con una cultura empresarial orientada al consenso y las relaciones (marco CAGE general, no un estereotipo)."),
      infrastructure: _bi("Highly developed logistics and technology infrastructure — a structural advantage for complex supply chains.", "Infraestructura logística y tecnológica altamente desarrollada — una ventaja estructural para cadenas de suministro complejas."),
      trade: _bi("WTO member; party to the CPTPP.", "Miembro de la OMC; parte del CPTPP."),
      strategic: _bi("A mature, high-income market often entered via local distributors or partners given its relationship-driven business culture — general pattern, not a guarantee.", "Un mercado maduro y de altos ingresos que a menudo se aborda mediante distribuidores o socios locales dada su cultura empresarial orientada a las relaciones — patrón general, no una garantía.")
    }),
    _country({
      en: "United Kingdom", es: "Reino Unido",
      political: _bi("Parliamentary constitutional monarchy (verified structural fact).", "Monarquía constitucional parlamentaria (hecho estructural verificado)."),
      legal: _bi("Common law system.", "Sistema de common law."),
      cultural: _bi("Low cultural/language distance from the US — shared primary language (general framing).", "Baja distancia cultural/lingüística con EE. UU. — idioma principal compartido (marco general)."),
      infrastructure: _bi("Major global financial and logistics hub centered on London.", "Importante centro financiero y logístico global centrado en Londres."),
      trade: _bi("WTO member; no longer an EU member state (post-Brexit) — current UK-EU and UK-US trade terms require verification.", "Miembro de la OMC; ya no es un estado miembro de la UE (posterior al Brexit) — los términos comerciales actuales entre el Reino Unido, la UE y EE. UU. requieren verificación."),
      strategic: _bi("Often an English-speaking first entry point into Europe for US companies, though post-Brexit EU access is no longer automatic and requires separate verification.", "A menudo un primer punto de entrada de habla inglesa a Europa para empresas de EE. UU., aunque el acceso a la UE tras el Brexit ya no es automático y requiere verificación por separado.")
    }),
    _country({
      en: "Canada", es: "Canadá",
      political: _bi("Federal parliamentary constitutional monarchy (verified structural fact).", "Monarquía constitucional parlamentaria federal (hecho estructural verificado)."),
      legal: _bi("Common law system, except Quebec, which uses civil law for private-law matters — a genuinely distinctive structural feature.", "Sistema de common law, excepto Quebec, que usa derecho civil para asuntos de derecho privado — una característica estructural genuinamente distintiva."),
      cultural: _bi("Low cultural/language distance from the US — English and French are both official languages (general framing).", "Baja distancia cultural/lingüística con EE. UU. — el inglés y el francés son idiomas oficiales (marco general)."),
      infrastructure: _bi("Land border with the US enables trucking-based logistics, similar to Mexico's structural advantage for bulky goods.", "La frontera terrestre con EE. UU. permite logística por camión, similar a la ventaja estructural de México para bienes voluminosos."),
      trade: _bi("WTO member; USMCA member alongside the US and Mexico.", "Miembro de la OMC; miembro del T-MEC junto con EE. UU. y México."),
      strategic: _bi("Frequently a low-friction first international market for US companies given USMCA coverage and geographic proximity — general pattern.", "Frecuentemente un primer mercado internacional de baja fricción para empresas de EE. UU. dada la cobertura del T-MEC y la proximidad geográfica — patrón general.")
    }),
    _country({
      en: "India", es: "India",
      political: _bi("Federal parliamentary republic (verified structural fact).", "República parlamentaria federal (hecho estructural verificado)."),
      legal: _bi("Common law system (based on English common law), with separate personal-status laws for some matters — specific requirements require verification.", "Sistema de common law (basado en el common law inglés), con leyes de estatus personal separadas para algunos asuntos — los requisitos específicos requieren verificación."),
      cultural: _bi("Significant cultural and language distance from the US, though English is widely used in business (general CAGE framing).", "Distancia cultural e idiomática significativa con EE. UU., aunque el inglés se usa ampliamente en los negocios (marco CAGE general)."),
      infrastructure: _bi("Logistics and infrastructure quality varies significantly by region — Verification Required for any specific location.", "La calidad de la logística e infraestructura varía significativamente según la región — Requiere Verificación para cualquier ubicación específica."),
      trade: _bi("WTO member. Verification Required for current tariff treatment of any specific HS classification.", "Miembro de la OMC. Requiere Verificación el tratamiento arancelario actual de cualquier clasificación arancelaria específica."),
      strategic: _bi("Frequently cited as one of the world's largest and fastest-growing consumer markets — general pattern; specific figures require verification.", "Frecuentemente citada como uno de los mercados de consumo más grandes y de más rápido crecimiento del mundo — patrón general; las cifras específicas requieren verificación.")
    }),
    _country({
      en: "France", es: "Francia",
      political: _bi("Unitary semi-presidential republic; EU member state (verified structural fact).", "República semipresidencialista unitaria; estado miembro de la UE (hecho estructural verificado)."),
      legal: _bi("Civil law system; EU-wide product regulations generally apply — specific requirements require verification.", "Sistema de derecho civil; generalmente aplican las regulaciones de producto a nivel de la UE — los requisitos específicos requieren verificación."),
      cultural: _bi("Moderate cultural and language distance from the US (general CAGE framing).", "Distancia cultural e idiomática moderada con EE. UU. (marco CAGE general)."),
      infrastructure: _bi("Access to the EU single market via one entry point.", "Acceso al mercado único de la UE a través de un solo punto de entrada."),
      trade: _bi("WTO member; EU member — standard WTO/MFN treatment with the US likely applies absent a specific agreement. Verification Required for current tariff schedules.", "Miembro de la OMC; miembro de la UE — probablemente aplica el tratamiento estándar OMC/NMF con EE. UU. a falta de un acuerdo específico. Requiere Verificación los aranceles actuales."),
      strategic: _bi("Often approached as part of a broader EU market-entry strategy rather than standalone — general pattern.", "A menudo se aborda como parte de una estrategia de entrada a la UE más amplia en lugar de individualmente — patrón general.")
    }),
    _country({
      en: "Italy", es: "Italia",
      political: _bi("Unitary parliamentary republic; EU member state (verified structural fact).", "República parlamentaria unitaria; estado miembro de la UE (hecho estructural verificado)."),
      legal: _bi("Civil law system; EU-wide product regulations generally apply — specific requirements require verification.", "Sistema de derecho civil; generalmente aplican las regulaciones de producto a nivel de la UE — los requisitos específicos requieren verificación."),
      cultural: _bi("Moderate cultural and language distance from the US (general CAGE framing).", "Distancia cultural e idiomática moderada con EE. UU. (marco CAGE general)."),
      infrastructure: _bi("Access to the EU single market; notable regional manufacturing clusters in categories such as fashion and machinery (general pattern).", "Acceso al mercado único de la UE; clusters regionales de manufactura notables en categorías como moda y maquinaria (patrón general)."),
      trade: _bi("WTO member; EU member state. Verification Required for current tariff schedules.", "Miembro de la OMC; estado miembro de la UE. Requiere Verificación los aranceles actuales."),
      strategic: _bi("Often approached as part of a broader EU market-entry strategy rather than standalone — general pattern.", "A menudo se aborda como parte de una estrategia de entrada a la UE más amplia en lugar de individualmente — patrón general.")
    }),
    _country({
      en: "Spain", es: "España",
      political: _bi("Parliamentary constitutional monarchy; EU member state (verified structural fact).", "Monarquía constitucional parlamentaria; estado miembro de la UE (hecho estructural verificado)."),
      legal: _bi("Civil law system; EU-wide product regulations generally apply — specific requirements require verification.", "Sistema de derecho civil; generalmente aplican las regulaciones de producto a nivel de la UE — los requisitos específicos requieren verificación."),
      cultural: _bi("Moderate cultural distance from the US; Spanish-speaking, which may lower distance specifically for Spanish-speaking companies (general framing).", "Distancia cultural moderada con EE. UU.; de habla hispana, lo que puede reducir la distancia específicamente para empresas hispanohablantes (marco general)."),
      infrastructure: _bi("Access to the EU single market; frequently cited as a linguistic/commercial bridge toward Latin America (general pattern).", "Acceso al mercado único de la UE; frecuentemente citada como un puente lingüístico/comercial hacia América Latina (patrón general)."),
      trade: _bi("WTO member; EU member state. Verification Required for current tariff schedules.", "Miembro de la OMC; estado miembro de la UE. Requiere Verificación los aranceles actuales."),
      strategic: _bi("Sometimes used as a bridge market between Europe and Latin America — general pattern, not guaranteed for every company.", "A veces se usa como un mercado puente entre Europa y América Latina — patrón general, no garantizado para cada empresa.")
    }),
    _country({
      en: "South Korea", es: "Corea del Sur",
      political: _bi("Unitary presidential republic (verified structural fact).", "República presidencialista unitaria (hecho estructural verificado)."),
      legal: _bi("Civil law system. Specific product certification requirements require verification.", "Sistema de derecho civil. Los requisitos específicos de certificación de producto requieren verificación."),
      cultural: _bi("High cultural and language distance from the US (general CAGE framing, not a stereotype).", "Alta distancia cultural e idiomática con EE. UU. (marco CAGE general, no un estereotipo)."),
      infrastructure: _bi("Highly developed technology and logistics infrastructure.", "Infraestructura tecnológica y logística altamente desarrollada."),
      trade: _bi("WTO member; has a free trade agreement with the US (KORUS). Verification Required for current tariff schedules under that agreement.", "Miembro de la OMC; tiene un tratado de libre comercio con EE. UU. (KORUS). Requiere Verificación los aranceles actuales bajo ese acuerdo."),
      strategic: _bi("An advanced, high-income market often shaped by relationship- and reputation-driven business norms — general pattern.", "Un mercado avanzado y de altos ingresos a menudo influido por normas empresariales basadas en relaciones y reputación — patrón general.")
    }),
    _country({
      en: "Netherlands", es: "Países Bajos",
      political: _bi("Parliamentary constitutional monarchy; EU member state (verified structural fact).", "Monarquía constitucional parlamentaria; estado miembro de la UE (hecho estructural verificado)."),
      legal: _bi("Civil law system; EU-wide product regulations generally apply.", "Sistema de derecho civil; generalmente aplican las regulaciones de producto a nivel de la UE."),
      cultural: _bi("Low-to-moderate cultural/language distance from the US given widespread English proficiency (general framing).", "Distancia cultural/lingüística baja a moderada con EE. UU. dado el uso generalizado del inglés (marco general)."),
      infrastructure: _bi("Home to Rotterdam, one of the world's largest ports — a major European logistics gateway.", "Sede de Róterdam, uno de los puertos más grandes del mundo — una importante puerta de entrada logística europea."),
      trade: _bi("WTO member; EU member state.", "Miembro de la OMC; estado miembro de la UE."),
      strategic: _bi("Frequently used as a European distribution/logistics hub given port infrastructure and EU market access — general pattern.", "Frecuentemente usado como centro de distribución/logística europeo dada su infraestructura portuaria y acceso al mercado de la UE — patrón general.")
    }),
    _country({
      en: "Switzerland", es: "Suiza",
      political: _bi("Federal semi-direct democracy (confederation); not an EU member state (verified structural fact).", "Democracia semidirecta federal (confederación); no es un estado miembro de la UE (hecho estructural verificado)."),
      legal: _bi("Civil law system.", "Sistema de derecho civil."),
      cultural: _bi("Moderate cultural/language distance from the US; multiple official languages (general framing).", "Distancia cultural/lingüística moderada con EE. UU.; varios idiomas oficiales (marco general)."),
      infrastructure: _bi("Highly developed infrastructure; central European location.", "Infraestructura altamente desarrollada; ubicación central en Europa."),
      trade: _bi("WTO member; not an EU member but maintains extensive bilateral agreements with the EU — current terms require verification.", "Miembro de la OMC; no es miembro de la UE pero mantiene amplios acuerdos bilaterales con la UE — los términos actuales requieren verificación."),
      strategic: _bi("Often associated with financial services, precision manufacturing, and premium/luxury positioning — general pattern.", "A menudo asociada con servicios financieros, manufactura de precisión y posicionamiento premium/de lujo — patrón general.")
    }),
    _country({
      en: "Singapore", es: "Singapur",
      political: _bi("Unitary parliamentary republic (verified structural fact).", "República parlamentaria unitaria (hecho estructural verificado)."),
      legal: _bi("Common law system.", "Sistema de common law."),
      cultural: _bi("Low-to-moderate cultural/language distance from the US — English is an official language (general framing).", "Distancia cultural/lingüística baja a moderada con EE. UU. — el inglés es un idioma oficial (marco general)."),
      infrastructure: _bi("One of the world's busiest shipping ports and a major logistics/financial hub.", "Uno de los puertos de embarque más transitados del mundo y un importante centro logístico/financiero."),
      trade: _bi("WTO member; frequently used as a hub for ASEAN-linked trade agreements.", "Miembro de la OMC; frecuentemente usado como centro para acuerdos comerciales vinculados a la ASEAN."),
      strategic: _bi("Frequently used as a regional headquarters or gateway for Southeast Asian expansion — well-established general pattern.", "Frecuentemente usado como sede regional o puerta de entrada para la expansión al sudeste asiático — patrón general bien establecido.")
    }),
    _country({
      en: "Indonesia", es: "Indonesia",
      political: _bi("Unitary presidential republic (verified structural fact).", "República presidencialista unitaria (hecho estructural verificado)."),
      legal: _bi("Civil law system with elements of customary and religious law in some matters — specific requirements require verification.", "Sistema de derecho civil con elementos de derecho consuetudinario y religioso en algunos asuntos — los requisitos específicos requieren verificación."),
      cultural: _bi("High cultural and language distance from the US (general CAGE framing, not a stereotype).", "Alta distancia cultural e idiomática con EE. UU. (marco CAGE general, no un estereotipo)."),
      infrastructure: _bi("Large archipelago geography makes logistics complexity a structural factor for national distribution.", "La geografía de gran archipiélago hace que la complejidad logística sea un factor estructural para la distribución nacional."),
      trade: _bi("WTO member; ASEAN member.", "Miembro de la OMC; miembro de la ASEAN."),
      strategic: _bi("Large population and consumer market frequently cited as a growth market — general pattern; specific figures require verification.", "Gran población y mercado de consumo frecuentemente citado como mercado de crecimiento — patrón general; las cifras específicas requieren verificación.")
    }),
    _country({
      en: "Vietnam", es: "Vietnam",
      political: _bi("Unitary one-party socialist republic (verified structural fact).", "República socialista unitaria de partido único (hecho estructural verificado)."),
      legal: _bi("Civil law system with socialist-law characteristics — specific requirements require verification.", "Sistema de derecho civil con características de derecho socialista — los requisitos específicos requieren verificación."),
      cultural: _bi("High cultural and language distance from the US (general CAGE framing, not a stereotype).", "Alta distancia cultural e idiomática con EE. UU. (marco CAGE general, no un estereotipo)."),
      infrastructure: _bi("Rapidly developing manufacturing and export infrastructure — specifics require verification.", "Infraestructura de manufactura y exportación en rápido desarrollo — los detalles específicos requieren verificación."),
      trade: _bi("WTO member; ASEAN member; party to the CPTPP.", "Miembro de la OMC; miembro de la ASEAN; parte del CPTPP."),
      strategic: _bi("Frequently cited as a manufacturing-relocation destination (a general \"China+1\" pattern) — requires verification for any specific sourcing decision.", "Frecuentemente citado como destino de relocalización de manufactura (un patrón general \"China+1\") — requiere verificación para cualquier decisión de abastecimiento específica.")
    }),
    _country({
      en: "Thailand", es: "Tailandia",
      political: _bi("Unitary parliamentary constitutional monarchy (verified structural fact).", "Monarquía constitucional parlamentaria unitaria (hecho estructural verificado)."),
      legal: _bi("Civil law system.", "Sistema de derecho civil."),
      cultural: _bi("High cultural and language distance from the US (general CAGE framing, not a stereotype).", "Alta distancia cultural e idiomática con EE. UU. (marco CAGE general, no un estereotipo)."),
      infrastructure: _bi("Established regional manufacturing and logistics hub within ASEAN.", "Centro regional establecido de manufactura y logística dentro de la ASEAN."),
      trade: _bi("WTO member; ASEAN member.", "Miembro de la OMC; miembro de la ASEAN."),
      strategic: _bi("Often used as a regional manufacturing base within Southeast Asia — general pattern.", "A menudo usado como base de manufactura regional dentro del sudeste asiático — patrón general.")
    }),
    _country({
      en: "Poland", es: "Polonia",
      political: _bi("Unitary parliamentary republic; EU member state (verified structural fact).", "República parlamentaria unitaria; estado miembro de la UE (hecho estructural verificado)."),
      legal: _bi("Civil law system; EU-wide product regulations generally apply.", "Sistema de derecho civil; generalmente aplican las regulaciones de producto a nivel de la UE."),
      cultural: _bi("Moderate-to-high cultural and language distance from the US (general CAGE framing).", "Distancia cultural e idiomática moderada a alta con EE. UU. (marco CAGE general)."),
      infrastructure: _bi("Increasingly significant logistics and manufacturing hub in Central Europe.", "Centro logístico y de manufactura cada vez más importante en Europa Central."),
      trade: _bi("WTO member; EU member state.", "Miembro de la OMC; estado miembro de la UE."),
      strategic: _bi("Often cited as a lower-cost EU manufacturing/logistics location — general pattern.", "A menudo citada como una ubicación de manufactura/logística de menor costo dentro de la UE — patrón general.")
    }),
    _country({
      en: "Turkey", es: "Turquía",
      political: _bi("Unitary presidential republic (verified structural fact).", "República presidencialista unitaria (hecho estructural verificado)."),
      legal: _bi("Civil law system.", "Sistema de derecho civil."),
      cultural: _bi("High cultural and language distance from the US (general CAGE framing, not a stereotype).", "Alta distancia cultural e idiomática con EE. UU. (marco CAGE general, no un estereotipo)."),
      infrastructure: _bi("Geographic position bridging Europe and Asia — a significant logistics crossroads.", "Posición geográfica que conecta Europa y Asia — un cruce logístico significativo."),
      trade: _bi("WTO member; maintains a customs union arrangement with the EU for industrial goods — current terms require verification.", "Miembro de la OMC; mantiene un acuerdo de unión aduanera con la UE para bienes industriales — los términos actuales requieren verificación."),
      strategic: _bi("Frequently positioned as a bridge market between European and Middle Eastern/Central Asian trade — general pattern.", "Frecuentemente posicionada como un mercado puente entre el comercio europeo y el de Medio Oriente/Asia Central — patrón general.")
    }),
    _country({
      en: "Saudi Arabia", es: "Arabia Saudita",
      political: _bi("Absolute monarchy (verified structural fact).", "Monarquía absoluta (hecho estructural verificado)."),
      legal: _bi("Legal system based on Islamic law (Sharia) — a genuinely distinctive structural feature compared with common/civil law systems; specific requirements require verification.", "Sistema legal basado en la ley islámica (sharía) — una característica estructural genuinamente distintiva frente a los sistemas de common law/derecho civil; los requisitos específicos requieren verificación."),
      cultural: _bi("High cultural, legal, and language distance from the US (general CAGE framing, not a stereotype).", "Alta distancia cultural, legal e idiomática con EE. UU. (marco CAGE general, no un estereotipo)."),
      infrastructure: _bi("Significant ongoing infrastructure and logistics investment — specifics require verification.", "Importante inversión continua en infraestructura y logística — los detalles específicos requieren verificación."),
      trade: _bi("WTO member; member of the Gulf Cooperation Council (GCC).", "Miembro de la OMC; miembro del Consejo de Cooperación del Golfo (CCG)."),
      strategic: _bi("Frequently discussed in the context of economic diversification initiatives — specifics require verification, not stated as fact here.", "Frecuentemente discutida en el contexto de iniciativas de diversificación económica — los detalles específicos requieren verificación, no se afirman como hecho aquí.")
    }),
    _country({
      en: "United Arab Emirates", es: "Emiratos Árabes Unidos",
      political: _bi("Federation of seven emirates, each a monarchy (verified structural fact).", "Federación de siete emiratos, cada uno una monarquía (hecho estructural verificado)."),
      legal: _bi("Dual legal system — civil law generally, with some free zones (e.g. DIFC) operating under common-law-based frameworks — a genuinely distinctive structural feature.", "Sistema legal dual — derecho civil en general, con algunas zonas francas (p. ej., DIFC) que operan bajo marcos basados en common law — una característica estructural genuinamente distintiva."),
      cultural: _bi("High cultural and language distance from the US, though English is widely used in business (general CAGE framing).", "Alta distancia cultural e idiomática con EE. UU., aunque el inglés se usa ampliamente en los negocios (marco CAGE general)."),
      infrastructure: _bi("Major global logistics and aviation hub (e.g. Dubai).", "Importante centro logístico y de aviación global (p. ej., Dubái)."),
      trade: _bi("WTO member; member of the Gulf Cooperation Council (GCC).", "Miembro de la OMC; miembro del Consejo de Cooperación del Golfo (CCG)."),
      strategic: _bi("Frequently used as a regional hub for Middle East, Africa, and South Asia market entry — well-established general pattern.", "Frecuentemente usado como centro regional para la entrada a mercados de Medio Oriente, África y Asia Meridional — patrón general bien establecido.")
    }),
    _country({
      en: "South Africa", es: "Sudáfrica",
      political: _bi("Unitary parliamentary republic (verified structural fact).", "República parlamentaria unitaria (hecho estructural verificado)."),
      legal: _bi("Mixed legal system — Roman-Dutch civil law combined with English common law — a genuinely distinctive structural feature.", "Sistema legal mixto — derecho civil romano-holandés combinado con common law inglés — una característica estructural genuinamente distintiva."),
      cultural: _bi("Moderate-to-high cultural distance from the US; English is an official language among several others (general framing).", "Distancia cultural moderada a alta con EE. UU.; el inglés es un idioma oficial entre varios otros (marco general)."),
      infrastructure: _bi("Generally considered among the more developed logistics and financial infrastructure in the region (general pattern, not a numeric ranking claim).", "Generalmente considerada entre las infraestructuras logísticas y financieras más desarrolladas de la región (patrón general, no una afirmación de clasificación numérica)."),
      trade: _bi("WTO member; member of the Southern African Development Community (SADC) and the Southern African Customs Union (SACU).", "Miembro de la OMC; miembro de la Comunidad de Desarrollo de África Austral (SADC) y de la Unión Aduanera de África Austral (SACU)."),
      strategic: _bi("Frequently used as a gateway market for broader Sub-Saharan Africa expansion — general pattern.", "Frecuentemente usada como mercado de entrada para la expansión más amplia al África subsahariana — patrón general.")
    }),
    _country({
      en: "Nigeria", es: "Nigeria",
      political: _bi("Federal presidential republic (verified structural fact).", "República federal presidencialista (hecho estructural verificado)."),
      legal: _bi("Mixed legal system — English common law, customary law, and Sharia law in some states — a genuinely distinctive structural feature; specific requirements require verification.", "Sistema legal mixto — common law inglés, derecho consuetudinario y ley sharía en algunos estados — una característica estructural genuinamente distintiva; los requisitos específicos requieren verificación."),
      cultural: _bi("High cultural distance from the US; English is the official language (general framing).", "Alta distancia cultural con EE. UU.; el inglés es el idioma oficial (marco general)."),
      infrastructure: _bi("Logistics and infrastructure quality varies significantly by region — Verification Required for any specific location.", "La calidad de la logística e infraestructura varía significativamente según la región — Requiere Verificación para cualquier ubicación específica."),
      trade: _bi("WTO member; member of the Economic Community of West African States (ECOWAS).", "Miembro de la OMC; miembro de la Comunidad Económica de Estados de África Occidental (CEDEAO)."),
      strategic: _bi("Frequently cited as one of Africa's largest economies and consumer markets by population — general pattern; specific figures require verification.", "Frecuentemente citada como una de las economías y mercados de consumo más grandes de África por población — patrón general; las cifras específicas requieren verificación.")
    }),
    _country({
      en: "Argentina", es: "Argentina",
      political: _bi("Federal presidential republic (verified structural fact).", "República federal presidencialista (hecho estructural verificado)."),
      legal: _bi("Civil law system.", "Sistema de derecho civil."),
      cultural: _bi("High cultural and language distance from the US; Spanish-speaking (general framing).", "Alta distancia cultural e idiomática con EE. UU.; de habla hispana (marco general)."),
      infrastructure: _bi("Verification Required for current logistics and infrastructure specifics.", "Requiere Verificación los detalles actuales de logística e infraestructura."),
      trade: _bi("WTO member; Mercosur member alongside Brazil.", "Miembro de la OMC; miembro del Mercosur junto con Brasil."),
      strategic: _bi("Historically subject to significant currency and macroeconomic volatility — a general pattern meaning current economic verification is especially important here.", "Históricamente sujeta a una volatilidad cambiaria y macroeconómica significativa — un patrón general que hace especialmente importante la verificación económica actual.")
    }),
    _country({
      en: "Chile", es: "Chile",
      political: _bi("Unitary presidential republic (verified structural fact).", "República presidencialista unitaria (hecho estructural verificado)."),
      legal: _bi("Civil law system.", "Sistema de derecho civil."),
      cultural: _bi("High cultural and language distance from the US; Spanish-speaking (general framing).", "Alta distancia cultural e idiomática con EE. UU.; de habla hispana (marco general)."),
      infrastructure: _bi("Significant Pacific coast port access.", "Acceso portuario significativo en la costa del Pacífico."),
      trade: _bi("WTO member; maintains an extensive network of bilateral free trade agreements, including with the US — current terms require verification.", "Miembro de la OMC; mantiene una amplia red de tratados de libre comercio bilaterales, incluido uno con EE. UU. — los términos actuales requieren verificación."),
      strategic: _bi("Frequently cited as one of the more open, stable economies in Latin America for trade purposes — general pattern.", "Frecuentemente citada como una de las economías más abiertas y estables de América Latina para fines comerciales — patrón general.")
    }),
    _country({
      en: "Colombia", es: "Colombia",
      political: _bi("Unitary presidential republic (verified structural fact).", "República presidencialista unitaria (hecho estructural verificado)."),
      legal: _bi("Civil law system.", "Sistema de derecho civil."),
      cultural: _bi("High cultural and language distance from the US; Spanish-speaking (general framing).", "Alta distancia cultural e idiomática con EE. UU.; de habla hispana (marco general)."),
      infrastructure: _bi("Verification Required for current logistics and infrastructure specifics.", "Requiere Verificación los detalles actuales de logística e infraestructura."),
      trade: _bi("WTO member; maintains a free trade agreement with the US — current terms require verification.", "Miembro de la OMC; mantiene un tratado de libre comercio con EE. UU. — los términos actuales requieren verificación."),
      strategic: _bi("Frequently considered alongside Mexico as a Latin American entry point for US companies — general pattern.", "Frecuentemente considerada junto con México como un punto de entrada latinoamericano para empresas de EE. UU. — patrón general.")
    }),
    _country({
      en: "Ireland", es: "Irlanda",
      political: _bi("Unitary parliamentary republic; EU member state (verified structural fact).", "República parlamentaria unitaria; estado miembro de la UE (hecho estructural verificado)."),
      legal: _bi("Common law system — a distinctive combination alongside EU membership, since most EU member states use civil law.", "Sistema de common law — una combinación distintiva junto con su membresía en la UE, ya que la mayoría de los estados miembros de la UE usan derecho civil."),
      cultural: _bi("Low cultural/language distance from the US — shared primary language (general framing).", "Baja distancia cultural/lingüística con EE. UU. — idioma principal compartido (marco general)."),
      infrastructure: _bi("Access to the EU single market.", "Acceso al mercado único de la UE."),
      trade: _bi("WTO member; EU member state.", "Miembro de la OMC; estado miembro de la UE."),
      strategic: _bi("Frequently used by US companies as an English-speaking, common-law entry point into the EU single market — well-established general pattern.", "Frecuentemente usada por empresas de EE. UU. como punto de entrada de habla inglesa y common law al mercado único de la UE — patrón general bien establecido.")
    }),
    _country({
      en: "Sweden", es: "Suecia",
      political: _bi("Parliamentary constitutional monarchy; EU member state (verified structural fact).", "Monarquía constitucional parlamentaria; estado miembro de la UE (hecho estructural verificado)."),
      legal: _bi("Civil law system; EU-wide product regulations generally apply.", "Sistema de derecho civil; generalmente aplican las regulaciones de producto a nivel de la UE."),
      cultural: _bi("Low-to-moderate cultural/language distance from the US given widespread English proficiency (general framing).", "Distancia cultural/lingüística baja a moderada con EE. UU. dado el uso generalizado del inglés (marco general)."),
      infrastructure: _bi("Access to the EU single market and the broader Nordic region.", "Acceso al mercado único de la UE y a la región nórdica en general."),
      trade: _bi("WTO member; EU member state.", "Miembro de la OMC; estado miembro de la UE."),
      strategic: _bi("Often used as a gateway to the broader Nordic market — general pattern.", "A menudo usada como puerta de entrada al mercado nórdico en general — patrón general.")
    })
  ],

  // ---------------------------------------------------------------------
  // GLOSSARY — established, non-time-sensitive academic/practitioner
  // definitions (per MODE_PROFESSOR.md's teaching template). These are
  // textbook concepts, not current data, so including them is not a
  // fact-fabrication concern the way inventing a tariff or statistic is.
  // ---------------------------------------------------------------------
  GLOSSARY: [
    {
      keys: ["cage"],
      concept: { en: "CAGE Distance Framework", es: "Marco de Distancia CAGE" },
      explanation: { en: "A framework (Ghemawat) for assessing the distance between two countries across four dimensions: Cultural, Administrative, Geographic, and Economic. Larger distance on any dimension generally means a market-entry or trade decision carries more friction and risk.", es: "Un marco (Ghemawat) para evaluar la distancia entre dos países en cuatro dimensiones: Cultural, Administrativa, Geográfica y Económica. Una mayor distancia en cualquier dimensión generalmente implica más fricción y riesgo en una decisión de entrada al mercado o comercio." },
      example: { en: "The US and Mexico have low geographic distance (shared border) but moderate cultural/administrative distance (language, legal system) — CAGE makes each dimension explicit instead of collapsing them into a single vague 'similarity' judgment.", es: "EE. UU. y México tienen baja distancia geográfica (frontera compartida) pero distancia cultural/administrativa moderada (idioma, sistema legal) — CAGE hace explícita cada dimensión en vez de resumirlas en un juicio vago de 'similitud'." },
      application: { en: "Use CAGE early in a country analysis to identify which specific frictions (not just 'how different is this market') will matter most for your entry mode and operating model.", es: "Usa CAGE al inicio de un análisis de país para identificar qué fricciones específicas (no solo 'qué tan diferente es este mercado') importarán más para tu modo de entrada y modelo operativo." },
      takeaways: [
        { en: "CAGE has four dimensions: Cultural, Administrative, Geographic, Economic.", es: "CAGE tiene cuatro dimensiones: Cultural, Administrativa, Geográfica, Económica." },
        { en: "It structures relative distance between two specific countries — it is not an absolute country score.", es: "Estructura la distancia relativa entre dos países específicos — no es una puntuación absoluta de un país." },
        { en: "See COUNTRY_ANALYSIS_FRAMEWORK.md for how it fits into a full country analysis.", es: "Ver COUNTRY_ANALYSIS_FRAMEWORK.md para cómo encaja en un análisis de país completo." }
      ]
    },
    {
      keys: ["pestel", "pest analysis"],
      concept: { en: "PESTEL Analysis", es: "Análisis PESTEL" },
      explanation: { en: "A framework for scanning the macro-environment across six factors: Political, Economic, Social, Technological, Environmental, and Legal. It identifies external forces a company does not control but must plan around.", es: "Un marco para explorar el macroentorno en seis factores: Político, Económico, Social, Tecnológico, Ambiental y Legal. Identifica fuerzas externas que la empresa no controla pero debe planificar." },
      example: { en: "A company evaluating a new market might flag: Political (regulatory stability), Economic (currency volatility), Legal (import compliance) as the PESTEL factors most relevant to a market-entry decision.", es: "Una empresa que evalúa un nuevo mercado podría señalar: Político (estabilidad regulatoria), Económico (volatilidad cambiaria), Legal (cumplimiento de importación) como los factores PESTEL más relevantes para una decisión de entrada al mercado." },
      application: { en: "Use PESTEL to make sure a country or market analysis doesn't miss an entire category of external risk — then prioritize only the factors that are actually decision-relevant.", es: "Usa PESTEL para asegurar que un análisis de país o mercado no omita una categoría completa de riesgo externo — luego prioriza solo los factores realmente relevantes para la decisión." },
      takeaways: [
        { en: "Six factors: Political, Economic, Social, Technological, Environmental, Legal.", es: "Seis factores: Político, Económico, Social, Tecnológico, Ambiental, Legal." },
        { en: "It's a scanning tool, not a decision rule — it surfaces factors, it doesn't weigh them for you.", es: "Es una herramienta de exploración, no una regla de decisión — señala factores, no los pondera por ti." }
      ]
    },
    {
      keys: ["swot"],
      concept: { en: "SWOT Analysis", es: "Análisis FODA" },
      explanation: { en: "A framework comparing a company's internal Strengths and Weaknesses against external Opportunities and Threats.", es: "Un marco que compara las Fortalezas y Debilidades internas de una empresa con las Oportunidades y Amenazas externas." },
      example: { en: "Strength: strong brand loyalty. Weakness: no international logistics experience. Opportunity: underserved premium segment abroad. Threat: an established local competitor.", es: "Fortaleza: fuerte lealtad de marca. Debilidad: sin experiencia en logística internacional. Oportunidad: segmento premium desatendido en el extranjero. Amenaza: un competidor local establecido." },
      application: { en: "Use SWOT to organize findings from other frameworks (CAGE, PESTEL) into a single internal-vs-external view before moving to strategic alternatives.", es: "Usa FODA para organizar hallazgos de otros marcos (CAGE, PESTEL) en una sola vista interna-vs-externa antes de pasar a alternativas estratégicas." },
      takeaways: [
        { en: "Strengths/Weaknesses are internal; Opportunities/Threats are external.", es: "Fortalezas/Debilidades son internas; Oportunidades/Amenazas son externas." },
        { en: "A common mistake is listing generic items instead of ones specific and decision-relevant to the company.", es: "Un error común es listar elementos genéricos en vez de específicos y relevantes para la decisión de la empresa." }
      ]
    },
    {
      keys: ["porter", "five forces"],
      concept: { en: "Porter's Five Forces", es: "Las Cinco Fuerzas de Porter" },
      explanation: { en: "A framework for assessing industry competitiveness through five forces: threat of new entrants, bargaining power of suppliers, bargaining power of buyers, threat of substitutes, and rivalry among existing competitors.", es: "Un marco para evaluar la competitividad de una industria mediante cinco fuerzas: amenaza de nuevos competidores, poder de negociación de proveedores, poder de negociación de compradores, amenaza de sustitutos y rivalidad entre competidores existentes." },
      example: { en: "In a market with low entry barriers and many substitute products, Five Forces would flag both 'threat of new entrants' and 'threat of substitutes' as high — signaling a structurally difficult market to sustain margin in.", es: "En un mercado con bajas barreras de entrada y muchos productos sustitutos, las Cinco Fuerzas señalarían tanto la 'amenaza de nuevos competidores' como la 'amenaza de sustitutos' como altas — indicando un mercado estructuralmente difícil para sostener márgenes." },
      application: { en: "Use it to assess the attractiveness of an industry in a target market, separate from the attractiveness of the country itself.", es: "Úsalo para evaluar el atractivo de una industria en un mercado objetivo, por separado del atractivo del país en sí." },
      takeaways: [
        { en: "Five forces: new entrants, supplier power, buyer power, substitutes, rivalry.", es: "Cinco fuerzas: nuevos competidores, poder de proveedores, poder de compradores, sustitutos, rivalidad." },
        { en: "It assesses industry structure, not company-specific competitive advantage — pair it with VRIO for that.", es: "Evalúa la estructura de la industria, no la ventaja competitiva específica de la empresa — combínalo con VRIO para eso." }
      ]
    },
    {
      keys: ["entry mode", "entry modes", "modos de entrada", "modo de entrada"],
      concept: { en: "Market Entry Modes", es: "Modos de Entrada al Mercado" },
      explanation: { en: "The set of structural options a company can use to enter a foreign market — exporting, licensing, franchising, joint ventures, acquisitions, and wholly owned subsidiaries — each trading off control, investment, speed, and risk differently.", es: "El conjunto de opciones estructurales que una empresa puede usar para entrar a un mercado extranjero — exportación, licenciamiento, franquicia, empresas conjuntas, adquisiciones y subsidiarias de propiedad total — cada una con un balance distinto de control, inversión, velocidad y riesgo." },
      example: { en: "See the Markets workspace in this app for a structural comparison of nine entry modes across Control, Investment, Speed, Risk, Profitability, Scalability, and Complexity.", es: "Ver el espacio de Mercados en esta aplicación para una comparación estructural de nueve modos de entrada según Control, Inversión, Velocidad, Riesgo, Rentabilidad, Escalabilidad y Complejidad." },
      application: { en: "Match the entry mode to the company's actual risk tolerance and capital availability — see MARKET_ENTRY_FRAMEWORK.md for the full selection process.", es: "Ajusta el modo de entrada a la tolerancia al riesgo y disponibilidad de capital reales de la empresa — ver MARKET_ENTRY_FRAMEWORK.md para el proceso completo de selección." },
      takeaways: [
        { en: "More control and profit potential generally means more investment and risk — there is no free option.", es: "Más control y potencial de utilidad generalmente implica más inversión y riesgo — no existe una opción gratuita." },
        { en: "Many firms start with low-commitment modes (exporting) and escalate as they gain market knowledge (the Uppsala model).", es: "Muchas empresas comienzan con modos de bajo compromiso (exportación) y escalan a medida que ganan conocimiento del mercado (el modelo Uppsala)." }
      ]
    }
  ],

  // ---------------------------------------------------------------------
  // DEMO PROJECT — clearly labeled demo data. Not real research.
  // ---------------------------------------------------------------------
  DEMO_PROJECT: {
    id: "demo-mexico-expansion",
    isDemo: true,
    name: { en: "Mexico Market Expansion", es: "Expansión al Mercado de México" },
    profile: {
      objective: { en: "Identify and validate the best first-market entry approach into Mexico.", es: "Identificar y validar el mejor enfoque de entrada como primer mercado en México." },
      strategicQuestion: { en: "Should the company enter Mexico, and if so, through which entry mode?", es: "¿Debería la empresa entrar a México y, de ser así, mediante qué modo de entrada?" },
      decision: { en: "Select market-entry strategy", es: "Seleccionar estrategia de entrada al mercado" },
      timeline: { en: "6–9 months to pilot decision", es: "6–9 meses para la decisión piloto" },
      budget: { en: "$500,000 (DEMO)", es: "$500,000 (DEMO)" },
      geographicScope: { en: "Mexico (initial), broader Latin America under consideration later", es: "México (inicial), América Latina en general bajo consideración más adelante" },
      products: { en: "Premium reusable water bottles", es: "Botellas de agua reutilizables premium" },
      targetMarkets: [{ en: "Mexico", es: "México" }],
      constraints: { en: "No existing international operations or export experience", es: "Sin operaciones internacionales ni experiencia exportadora previas" },
      riskTolerance: { en: "Moderate — willing to invest to test the market, not willing to commit to a subsidiary yet", es: "Moderada — dispuesta a invertir para probar el mercado, no dispuesta aún a comprometerse con una subsidiaria" },
      successCriteria: { en: "Positive unit economics and validated demand within 2 pilot quarters", es: "Economía unitaria positiva y demanda validada dentro de 2 trimestres piloto" },
      status: "RESEARCH"
    },
    company: {
      description: { en: "US-based consumer goods company (DEMO)", es: "Empresa de bienes de consumo con sede en EE. UU. (DEMO)" },
      industry: { en: "Consumer goods — premium reusable water bottles", es: "Bienes de consumo — botellas de agua reutilizables premium" },
      businessModel: { en: "DTC + select retail, US-only today", es: "Venta directa al consumidor + retail selecto, hoy solo en EE. UU." },
      revenue: { en: "$8,000,000 annual (DEMO)", es: "$8,000,000 anuales (DEMO)" },
      margins: { en: "Verification Required — not yet modeled for this project", es: "Requiere Verificación — aún no modelado para este proyecto" },
      geographicPresence: { en: "United States only", es: "Solo Estados Unidos" },
      internationalExperience: { en: "None", es: "Ninguna" },
      financialCapacity: { en: "$500,000 allocated for international expansion (DEMO)", es: "$500,000 asignados para expansión internacional (DEMO)" }
    },
    marketContext: {
      targetMarket: { en: "Mexico", es: "México" },
      notes: { en: "See Country Intelligence → Mexico for the structural framework view. No current market-size, competitor, or regulatory statistics have been verified for this project yet.",
               es: "Ver Inteligencia de País → México para la vista estructural del marco. Aún no se han verificado estadísticas actuales de tamaño de mercado, competencia o regulación para este proyecto." },
      lastUpdated: { en: "Demo data — not date-stamped", es: "Datos de demostración — sin fecha registrada" }
    },
    decisions: [
      {
        id: "d1",
        date: "date_demo_entry",
        decision: { en: "Select initial Mexico entry mode", es: "Seleccionar el modo inicial de entrada a México" },
        options: [
          { en: "Direct export via e-commerce/DTC", es: "Exportación directa vía comercio electrónico/venta directa" },
          { en: "Distributor partnership", es: "Alianza con distribuidor" },
          { en: "Company-owned retail", es: "Tienda propia de la empresa" },
          { en: "Joint venture", es: "Empresa conjunta (JV)" }
        ],
        recommendation: { en: "Direct export via e-commerce/DTC, paired with immediate Mexican trademark registration", es: "Exportación directa vía comercio electrónico/venta directa, junto con el registro inmediato de la marca en México" },
        rationale: { en: "Minimizes initial capital commitment and risk while testing demand, consistent with a first-time international entrant's stated risk tolerance (DEMO reasoning).",
                     es: "Minimiza el compromiso de capital inicial y el riesgo mientras se prueba la demanda, en línea con la tolerancia al riesgo declarada de una empresa que se internacionaliza por primera vez (razonamiento DEMO)." },
        assumptions: [
          { en: "Product does not require significant local adaptation", es: "El producto no requiere una adaptación local significativa" },
          { en: "Demand can be validated via online sales before committing to physical retail", es: "La demanda puede validarse mediante ventas en línea antes de comprometerse con retail físico" }
        ],
        risks: [
          { en: "Currency exposure (MXN/USD)", es: "Exposición cambiaria (MXN/USD)" },
          { en: "Unverified import/regulatory requirements for this product category", es: "Requisitos de importación/regulación sin verificar para esta categoría de producto" }
        ],
        status: "RECOMMENDED",
        whatCouldChange: { en: "Verified tariff/regulatory findings that materially change landed cost or legality of the current approach.",
                            es: "Hallazgos arancelarios/regulatorios verificados que cambien materialmente el costo en destino o la legalidad del enfoque actual." }
      }
    ],
    research: [
      {
        id: "r1",
        question: { en: "What is the current USMCA tariff treatment for this product's HS classification?", es: "¿Cuál es el tratamiento arancelario actual bajo el T-MEC para la clasificación arancelaria de este producto?" },
        date: "date_not_conducted",
        source: "tag_verification_required",
        finding: "finding_unresolved",
        relevance: "High",
        confidence: "Low",
        current: false,
        open: true
      },
      {
        id: "r2",
        question: { en: "What product-safety or import documentation requirements apply to reusable water bottles in Mexico?", es: "¿Qué requisitos de seguridad de producto o documentación de importación aplican a las botellas de agua reutilizables en México?" },
        date: "date_not_conducted",
        source: "tag_verification_required",
        finding: "finding_unresolved",
        relevance: "High",
        confidence: "Low",
        current: false,
        open: true
      },
      {
        id: "r3",
        question: { en: "What is the competitive landscape for premium reusable bottles in major Mexican metro markets?", es: "¿Cómo es el panorama competitivo de las botellas reutilizables premium en las principales zonas metropolitanas de México?" },
        date: "date_not_conducted",
        source: "tag_verification_required",
        finding: "finding_unresolved",
        relevance: "Medium",
        confidence: "Low",
        current: false,
        open: true
      }
    ],
    gaps: {
      readiness: "ORANGE",
      confidence: "Medium",
      critical: [
        { item: { en: "Current USMCA tariff / HS classification treatment", es: "Tratamiento arancelario actual bajo el T-MEC / clasificación arancelaria" },
          why: { en: "Directly affects landed cost and whether the entry model is financially viable.", es: "Afecta directamente el costo en destino y si el modelo de entrada es financieramente viable." } },
        { item: { en: "Product-safety / import documentation requirements", es: "Requisitos de seguridad de producto / documentación de importación" },
          why: { en: "Could block the shipment or require redesign/certification before entry.", es: "Podría bloquear el envío o requerir rediseño/certificación antes de la entrada." } }
      ],
      high: [
        { item: { en: "Competitor pricing in target metro markets", es: "Precios de la competencia en las zonas metropolitanas objetivo" },
          why: { en: "Affects pricing strategy and margin assumptions.", es: "Afecta la estrategia de precios y los supuestos de margen." } },
        { item: { en: "Actual freight cost for e-commerce-scale shipments", es: "Costo real de flete para envíos a escala de comercio electrónico" },
          why: { en: "Affects unit economics of the DTC channel.", es: "Afecta la economía unitaria del canal de venta directa." } }
      ],
      medium: [
        { item: { en: "Preferred local payment methods", es: "Métodos de pago locales preferidos" },
          why: { en: "Affects conversion rate assumptions, not the core viability of the decision.", es: "Afecta los supuestos de tasa de conversión, no la viabilidad central de la decisión." } }
      ],
      assumptions: [
        { assumption: { en: "Distributor margin (if used later) estimated at 25%", es: "Margen del distribuidor (si se usa más adelante) estimado en 25%" },
          impact: "High", validationRequired: true,
          whyItMatters: { en: "A margin above 35% could make a distributor-led model financially unattractive.", es: "Un margen superior al 35% podría hacer financieramente poco atractivo un modelo liderado por un distribuidor." } },
        { assumption: { en: "No significant product adaptation required for the Mexican market", es: "No se requiere una adaptación significativa del producto para el mercado mexicano" },
          impact: "Medium", validationRequired: true,
          whyItMatters: { en: "If adaptation is required, timeline and budget assumptions would need revision.", es: "Si se requiere adaptación, los supuestos de cronograma y presupuesto tendrían que revisarse." } }
      ],
      researchRequired: [
        { en: "Tariff/HS classification", es: "Arancel/clasificación arancelaria" },
        { en: "Import documentation", es: "Documentación de importación" },
        { en: "Competitor pricing", es: "Precios de la competencia" },
        { en: "Freight cost", es: "Costo de flete" }
      ],
      couldChangeDecision: [
        { en: "If tariff + freight push landed cost above target retail price minus margin, the DTC export model becomes unattractive and a distributor model should be reconsidered.",
          es: "Si el arancel más el flete elevan el costo en destino por encima del precio de venta objetivo menos el margen, el modelo de exportación directa deja de ser atractivo y debería reconsiderarse un modelo con distribuidor." },
        { en: "If import documentation requirements are extensive, the timeline should extend and a customs broker should be engaged before further commitment.",
          es: "Si los requisitos de documentación de importación son extensos, el cronograma debería ampliarse y contratarse a un agente aduanal antes de avanzar más." }
      ]
    }
  }
};
