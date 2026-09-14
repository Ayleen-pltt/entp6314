/* ============================================================
   IMPO AI — reference data
   All figures below are simplified, illustrative examples for
   demo purposes only. They are NOT legal or tax advice and may
   not reflect current regulations. Always confirm with a
   licensed customs broker before making import/export decisions.

   Bilingual fields use the shape { en: "...", es: "..." }.
   ============================================================ */

// ---------- 0. Static UI strings ----------
const UI_STRINGS = {
  tagline: {
    en: "Foreign trade, customs & cross-border logistics for U.S. – Latin America importers/exporters",
    es: "Comercio exterior, aduanas y logística transfronteriza para importadores/exportadores entre EE. UU. y América Latina"
  },
  tab_chat: { en: "AI Advisor Chat", es: "Chat Asesor IA" },
  tab_classifier: { en: "Tariff Classifier", es: "Clasificador Arancelario" },
  tab_calculator: { en: "Landed Cost Calculator", es: "Calculadora de Costo Total" },
  tab_incoterms: { en: "Incoterms 2020 Guide", es: "Guía de Incoterms 2020" },
  tab_directory: { en: "Directory & Checklist", es: "Directorio y Lista de Documentos" },
  tab_sources: { en: "Legal Sources", es: "Fuentes Legales" },

  chat_heading: { en: "AI Advisor — Foreign Trade Chat", es: "Asesor IA — Chat de Comercio Exterior" },
  chat_intro: {
    en: "Click a quick scenario below, or type your own question in plain language.",
    es: "Haga clic en un escenario rápido abajo, o escriba su propia pregunta en lenguaje natural."
  },
  chat_greeting: {
    en: "Hi! I'm your foreign trade advisor. Ask me about customs regulations, tariff classification, or cross-border logistics between the U.S. and Latin America — or click a quick scenario above to get started.",
    es: "¡Hola! Soy su asesor de comercio exterior. Pregúnteme sobre regulaciones aduaneras, clasificación arancelaria o logística transfronteriza entre EE. UU. y América Latina — o haga clic en un escenario rápido arriba para comenzar."
  },
  chat_placeholder: { en: "Type your question... (e.g. FDA, USMCA, DDP, NOM)", es: "Escriba su pregunta... (p. ej. FDA, T-MEC, DDP, NOM)" },
  chat_send: { en: "Send", es: "Enviar" },
  chat_you: { en: "You", es: "Usted" },
  chat_ai: { en: "IMPO AI", es: "IMPO AI" },
  chat_legal_basis_prefix: { en: "Legal basis: ", es: "Base legal: " },
  chat_open_source: { en: "Open official source →", es: "Abrir fuente oficial →" },
  chat_level_question: {
    en: "Before we start — are you new to importing/exporting, or do you already have experience in foreign trade?",
    es: "Antes de comenzar — ¿es usted nuevo en el mundo de las importaciones/exportaciones, o ya tiene experiencia en comercio exterior?"
  },
  chat_level_beginner_btn: { en: "I'm new to this", es: "Soy nuevo en esto" },
  chat_level_expert_btn: { en: "I have experience", es: "Tengo experiencia" },
  chat_level_beginner_confirm: {
    en: "Great — I'll keep things simple and explain any terms you might not know.",
    es: "Perfecto — usaré un lenguaje sencillo y explicaré cualquier término que pueda ser nuevo para usted."
  },
  chat_level_expert_confirm: {
    en: "Understood — I'll keep responses concise and technical.",
    es: "Entendido — mantendré las respuestas concisas y técnicas."
  },
  chat_level_current_prefix: { en: "Answering at level:", es: "Respondiendo en nivel:" },
  chat_level_change_link: { en: "Change", es: "Cambiar" },
  chat_source_beginner_prefix: {
    en: "This is a technical legal source, so here's the short version:",
    es: "Esta es una fuente legal técnica, así que aquí va la versión resumida:"
  },

  classifier_heading: { en: "Smart Tariff Classifier", es: "Clasificador Arancelario Inteligente" },
  classifier_intro: {
    en: "Select a product category and destination country to see the tariff classification breakdown.",
    es: "Seleccione una categoría de producto y el país de destino para ver el desglose de la clasificación arancelaria."
  },
  classifier_label_product: { en: "Product", es: "Producto" },
  classifier_label_country: { en: "Destination country", es: "País de destino" },
  classifier_button: { en: "Classify", es: "Clasificar" },
  classifier_hs_label: { en: "HS Code (6-digit, WCO)", es: "Código SA (6 dígitos, OMA)" },
  classifier_national_label: { en: "National tariff subheading", es: "Subpartida arancelaria nacional" },
  classifier_nomenclature_label: { en: "National nomenclature", es: "Nomenclatura nacional" },
  classifier_advalorem_label: { en: "Ad valorem duty?", es: "¿Arancel ad valorem?" },
  classifier_advalorem_yes: { en: "Yes — calculated as a percentage of the customs value", es: "Sí — se calcula como un porcentaje del valor en aduana" },
  classifier_fta_status_label: { en: "Free trade agreement applies?", es: "¿Aplica un tratado de libre comercio?" },
  classifier_fta_yes_prefix: { en: "Yes — ", es: "Sí — " },
  classifier_fta_parties_prefix: { en: "Parties: ", es: "Partes: " },
  classifier_fta_no: { en: "No — MFN (most-favored-nation) rates apply instead.", es: "No — en su lugar aplican tasas NMF (nación más favorecida)." },
  classifier_fta_label: { en: "Tariff preference / FTA note:", es: "Preferencia arancelaria / Nota de TLC:" },
  classifier_ntr_label: { en: "Non-tariff requirements:", es: "Requisitos no arancelarios:" },

  calc_heading: { en: "Landed Cost Calculator", es: "Calculadora de Costo Total de Importación" },
  calc_intro: {
    en: "Enter shipment details to calculate the total landed cost and unit cost delivered to your warehouse.",
    es: "Ingrese los datos del envío para calcular el costo total de importación y el costo unitario entregado en su bodega."
  },
  calc_label_country: { en: "Destination country", es: "País de destino" },
  calc_label_fob: { en: "FOB value (US$)", es: "Valor FOB (US$)" },
  calc_label_freight: { en: "International freight (US$)", es: "Flete internacional (US$)" },
  calc_label_insurance: { en: "Insurance (US$)", es: "Seguro (US$)" },
  calc_label_duty: { en: "Duty rate (%)", es: "Arancel (%)" },
  calc_label_vat: { en: "VAT / import tax rate (%)", es: "Tasa de IVA / impuesto de importación (%)" },
  calc_label_fee: { en: "Customs handling fee (%)", es: "Tasa de trámite aduanero (%)" },
  calc_label_units: { en: "Number of units", es: "Número de unidades" },
  calc_button: { en: "Calculate landed cost", es: "Calcular costo total" },
  calc_result_heading: { en: "Landed Cost Breakdown", es: "Desglose del Costo Total" },
  calc_valuation_basis_label: { en: "Valuation basis:", es: "Base de valoración:" },
  calc_customs_value_label: { en: "Customs value", es: "Valor en aduana" },
  calc_freight_insurance_label: { en: "Freight + insurance (not in customs value)", es: "Flete + seguro (no incluido en el valor en aduana)" },
  calc_duty_label: { en: "Duty", es: "Arancel" },
  calc_vat_label: { en: "VAT / import tax", es: "IVA / impuesto de importación" },
  calc_total_label: { en: "Total landed cost", es: "Costo total de importación" },
  calc_unit_cost_label: { en: "Cost per unit", es: "Costo por unidad" },
  calc_units_suffix: { en: "units", es: "unidades" },
  calc_tip: {
    en: "💡 Strategic tip: confirm whether your product qualifies for a lower duty rate under an applicable FTA (USMCA, CAFTA-DR, or a bilateral TPA) — a qualifying Certificate of Origin can legally reduce the duty portion of your taxable base to $0.",
    es: "💡 Consejo estratégico: confirme si su producto califica para un arancel preferencial bajo un TLC aplicable (T-MEC, CAFTA-DR o un TPC bilateral) — un Certificado de Origen válido puede reducir legalmente el arancel a $0."
  },

  incoterms_heading: { en: "Incoterms® 2020 Tactical Guide", es: "Guía Táctica de Incoterms® 2020" },
  incoterms_intro: {
    en: "Click a term to see risk transfer, freight, insurance, and customs clearance responsibilities.",
    es: "Haga clic en un término para ver la transferencia de riesgo, el flete, el seguro y las responsabilidades del despacho aduanero."
  },
  incoterms_warning_heading: {
    en: "Critical considerations for the U.S. & Latin America",
    es: "Consideraciones críticas para EE. UU. y América Latina"
  },
  incoterms_detail_mode: { en: "Transport mode", es: "Modo de transporte" },
  incoterms_detail_risk: { en: "Risk transfer point", es: "Punto de transferencia de riesgo" },
  incoterms_detail_freight: { en: "Freight payment", es: "Pago del flete" },
  incoterms_detail_insurance: { en: "Insurance", es: "Seguro" },
  incoterms_detail_clearance: { en: "Customs clearance", es: "Despacho aduanero" },

  directory_heading: { en: "Customs Directory", es: "Directorio Aduanero" },
  directory_intro: { en: "Official portals, agencies, and taxes by country.", es: "Portales oficiales, agencias e impuestos por país." },
  directory_agency_label: { en: "Customs agency", es: "Agencia aduanera" },
  directory_portal_label: { en: "Official portal", es: "Portal oficial" },
  directory_taxes_label: { en: "Taxes", es: "Impuestos" },
  directory_notes_label: { en: "Notes", es: "Notas" },

  checklist_heading: { en: "Document Checklist Generator", es: "Generador de Lista de Documentos" },
  checklist_intro: {
    en: "Check off documents as you prepare your shipment. Your progress is saved automatically in this browser.",
    es: "Marque los documentos a medida que prepara su envío. Su progreso se guarda automáticamente en este navegador."
  },

  sources_heading: { en: "Legal Sources — Knowledge Base", es: "Fuentes Legales — Base de Conocimiento" },
  sources_intro: {
    en: "This is the reference index the AI Advisor Chat searches when answering your questions — official primary sources only, grouped by jurisdiction. Click a source to open the official government page directly. IMPO AI does not store or reproduce the underlying legal text; always read the official source.",
    es: "Este es el índice de referencia que consulta el Chat Asesor IA al responder sus preguntas — únicamente fuentes primarias oficiales, agrupadas por jurisdicción. Haga clic en una fuente para abrir directamente la página oficial del gobierno. IMPO AI no almacena ni reproduce el texto legal subyacente; lea siempre la fuente oficial."
  },
  sources_cta: { en: "Open official source →", es: "Abrir fuente oficial →" },

  footer_text: {
    en: "IMPO AI — a student demo project. Illustrative data only, not a substitute for professional customs advice.",
    es: "IMPO AI — un proyecto de demostración estudiantil. Datos ilustrativos únicamente, no sustituye la asesoría aduanera profesional."
  },

  lang_toggle: { en: "ES", es: "EN" },
  lang_toggle_title: { en: "Switch to Spanish", es: "Switch to English" }
};

// ---------- 1. Chat Advisor: quick scenarios ----------
const CHAT_SCENARIOS = [
  {
    id: "usmca-autoparts",
    label: { en: "USMCA rules of origin for auto parts", es: "Reglas de origen del T-MEC para autopartes" },
    keywords: ["usmca", "auto", "parts", "car", "origin", "rvc", "t-mec", "tmec", "autopartes", "origen"],
    answer: {
      title: { en: "USMCA Rules of Origin — Auto Parts", es: "Reglas de Origen del T-MEC — Autopartes" },
      body: {
        en: {
          beginner: "For a car part to cross the US–Mexico–Canada border with $0 duty, a set percentage of it has to be made within North America — this is called \"Regional Value Content\" (RVC), and for core auto parts it's usually 75%. There's also a rule that a chunk of the work (40–45%) has to be done by workers paid at least US$16/hour — that's called \"Labor Value Content.\" To actually get the duty-free treatment, the shipment needs a signed paper called a \"Certification of Origin\" that proves all this.",
          expert: "Most auto parts must meet a Regional Value Content (RVC) threshold — generally 75% for core parts — calculated under the Net Cost or Transaction Value method, plus a Labor Value Content (LVC) requirement (40–45% of content made by workers earning at least US$16/hr). A valid USMCA Certification of Origin (no fixed form required, but specific data elements are mandatory) must accompany the shipment to claim duty-free treatment."
        },
        es: {
          beginner: "Para que una autoparte cruce la frontera entre EE. UU., México y Canadá sin pagar arancel, un porcentaje fijo de ella debe fabricarse en Norteamérica — esto se llama \"Contenido de Valor Regional\" (RVC), y para las partes principales suele ser 75%. También existe una regla que dice que una parte del trabajo (40–45%) debe hacerla personal que gane al menos US$16 por hora — a esto se le llama \"Contenido de Valor Laboral.\" Para obtener realmente el beneficio libre de arancel, el envío necesita un documento firmado llamado \"Certificación de Origen\" que demuestre todo esto.",
          expert: "La mayoría de las autopartes deben cumplir un umbral de Contenido de Valor Regional (RVC) — generalmente 75% para partes principales — calculado bajo el método de Costo Neto o Valor de Transacción, más un requisito de Contenido de Valor Laboral (LVC) (40–45% del contenido elaborado por trabajadores que ganan al menos US$16/hora). Debe acompañar el envío una Certificación de Origen del T-MEC válida (sin formato fijo obligatorio, pero con elementos de datos específicos obligatorios) para reclamar el trato libre de arancel."
        }
      },
      legalBasis: {
        en: "USMCA Chapter 4 (Rules of Origin) and Chapter 4 Annex 4-B (Automotive Product-Specific Rules).",
        es: "Capítulo 4 del T-MEC (Reglas de Origen) y Anexo 4-B del Capítulo 4 (Reglas Específicas para Productos Automotrices)."
      },
      warning: {
        en: "Customs holds are common when the Certification of Origin is missing required data elements (certifier ID, blanket period, origin criterion) — CBP can request a full RVC calculation worksheet on audit.",
        es: "Las retenciones aduaneras son comunes cuando la Certificación de Origen carece de elementos de datos requeridos (ID del certificador, período general, criterio de origen) — CBP puede solicitar una hoja de cálculo completa del RVC en una auditoría."
      },
      followUps: [
        { en: "How is Regional Value Content calculated (Net Cost vs. Transaction Value)?", es: "¿Cómo se calcula el Contenido de Valor Regional (Costo Neto vs. Valor de Transacción)?" },
        { en: "What counts toward Labor Value Content?", es: "¿Qué cuenta para el Contenido de Valor Laboral?" },
        { en: "What data elements must a USMCA certification include?", es: "¿Qué elementos de datos debe incluir una certificación del T-MEC?" }
      ]
    }
  },
  {
    id: "fda-coffee",
    label: { en: "FDA / FSVP requirements for Colombian coffee", es: "Requisitos de la FDA / FSVP para el café colombiano" },
    keywords: ["fda", "fsvp", "coffee", "colombia", "food", "cafe", "café", "alimento"],
    answer: {
      title: { en: "FDA & FSVP — Importing Colombian Coffee/Food Products", es: "FDA y FSVP — Importación de Café/Alimentos Colombianos" },
      body: {
        en: {
          beginner: "If you're bringing coffee (or any food) into the US, the FDA treats it like any other food product. As the importer, you're responsible for checking that your overseas supplier follows safe food practices — this responsibility is called \"FSVP\" (Foreign Supplier Verification Program). The factory that processes the coffee also needs to be registered with the FDA, and you must send a heads-up (called \"Prior Notice\") before each shipment arrives, or it gets turned away at the border.",
          expert: "Green and roasted coffee are regulated as food under the FDA. The U.S. importer of record must act as the Foreign Supplier Verification Program (FSVP) importer: verify the foreign supplier's food safety controls, keep supplier verification records, and ensure the facility is FDA-registered (Food Facility Registration, renewed every even-numbered year). Prior Notice must be filed with FDA before each shipment arrives."
        },
        es: {
          beginner: "Si va a traer café (o cualquier alimento) a EE. UU., la FDA lo trata como cualquier otro producto alimenticio. Como importador, usted es responsable de verificar que su proveedor en el extranjero siga prácticas seguras de manejo de alimentos — esta responsabilidad se llama \"FSVP\" (Programa de Verificación de Proveedores Extranjeros). La planta que procesa el café también debe estar registrada ante la FDA, y usted debe enviar un aviso (llamado \"Aviso Previo\") antes de que llegue cada envío, o será rechazado en la frontera.",
          expert: "El café verde y tostado se regula como alimento bajo la FDA. El importador de registro en EE. UU. debe actuar como importador del Programa de Verificación de Proveedores Extranjeros (FSVP): verificar los controles de inocuidad del proveedor extranjero, mantener registros de verificación y asegurar que la instalación esté registrada ante la FDA (Registro de Instalaciones Alimentarias, renovado cada año par). Debe presentarse un Aviso Previo (Prior Notice) a la FDA antes de que llegue cada envío."
        }
      },
      legalBasis: {
        en: "FDA Food Safety Modernization Act (FSMA) — 21 CFR Part 1, Subpart L (FSVP).",
        es: "Ley de Modernización de la Inocuidad Alimentaria de la FDA (FSMA) — 21 CFR Parte 1, Subparte L (FSVP)."
      },
      warning: {
        en: "Shipments without a valid Prior Notice confirmation number are automatically refused entry at the port. Missing FSVP records is one of the top FDA import detention triggers for Latin American food exporters.",
        es: "Los envíos sin un número de confirmación de Aviso Previo válido son rechazados automáticamente en el puerto. La falta de registros FSVP es una de las principales causas de detención de importaciones de la FDA para exportadores de alimentos latinoamericanos."
      },
      followUps: [
        { en: "What records does an FSVP importer need to keep?", es: "¿Qué registros debe mantener un importador FSVP?" },
        { en: "How do I file FDA Prior Notice?", es: "¿Cómo presento el Aviso Previo de la FDA?" },
        { en: "Does INVIMA certification satisfy FDA requirements?", es: "¿La certificación del INVIMA satisface los requisitos de la FDA?" }
      ]
    }
  },
  {
    id: "nom-vat-china-mexico",
    label: { en: "NOMs & VAT on imports from China to Mexico", es: "NOMs e IVA en importaciones de China a México" },
    keywords: ["nom", "vat", "iva", "china", "mexico", "méxico"],
    answer: {
      title: { en: "NOMs and VAT — China to Mexico Imports", es: "NOMs e IVA — Importaciones de China a México" },
      body: {
        en: {
          beginner: "Many products coming into Mexico — electronics, toys, textiles, chemicals — need to meet a Mexican safety/quality standard called a \"NOM\" before they're allowed through customs; you usually prove this with a label or certificate on the product. Separately, Mexico charges a 16% sales tax on imports (called \"IVA,\" similar to VAT), calculated on the value of the goods plus the import duty.",
          expert: "Many product categories (electronics, toys, textiles, chemicals) require compliance with a Mexican Official Standard (NOM) before customs clearance — typically shown via an NOM compliance label or a certificate issued by an accredited certification body (OCN). Separately, Mexico charges 16% VAT (IVA) on the customs value (CIF) plus duties, calculated at the border and payable through the pedimento."
        },
        es: {
          beginner: "Muchos productos que entran a México — electrónica, juguetes, textiles, químicos — deben cumplir con un estándar mexicano de seguridad/calidad llamado \"NOM\" antes de poder pasar por aduana; normalmente esto se demuestra con una etiqueta o certificado en el producto. Por separado, México cobra un impuesto del 16% sobre las importaciones (llamado \"IVA\"), calculado sobre el valor de la mercancía más el arancel de importación.",
          expert: "Muchas categorías de productos (electrónica, juguetes, textiles, químicos) requieren cumplir con una Norma Oficial Mexicana (NOM) antes del despacho aduanero — típicamente demostrado mediante una etiqueta de cumplimiento NOM o un certificado emitido por un Organismo de Certificación acreditado (OCN). Por separado, México cobra 16% de IVA sobre el valor en aduana (CIF) más aranceles, calculado en la frontera y pagadero mediante el pedimento."
        }
      },
      legalBasis: {
        en: "Ley Federal sobre Metrología y Normalización (NOMs) and Ley del IVA, Art. 27 (import VAT base).",
        es: "Ley Federal sobre Metrología y Normalización (NOMs) y Ley del IVA, Art. 27 (base del IVA de importación)."
      },
      warning: {
        en: "Goods lacking the required NOM label/certificate are held at customs (ANAM) and cannot be released until compliance is demonstrated — this is one of the most common causes of demurrage costs on China–Mexico shipments.",
        es: "Las mercancías sin la etiqueta/certificado NOM requerido quedan retenidas en la aduana (ANAM) y no pueden liberarse hasta demostrar el cumplimiento — esta es una de las causas más comunes de costos de demora en envíos China–México."
      },
      followUps: [
        { en: "Which NOMs commonly apply to electronics?", es: "¿Qué NOMs aplican comúnmente a la electrónica?" },
        { en: "How is the IVA taxable base calculated?", es: "¿Cómo se calcula la base gravable del IVA?" },
        { en: "Can NOM compliance be certified before the goods ship?", es: "¿Se puede certificar el cumplimiento de la NOM antes de embarcar la mercancía?" }
      ]
    }
  },
  {
    id: "ddp-risk",
    label: { en: "Risk analysis for DDP shipments", es: "Análisis de riesgo para envíos DDP" },
    keywords: ["ddp", "risk", "delivered duty paid", "riesgo"],
    answer: {
      title: { en: "Risk Analysis — DDP (Delivered Duty Paid) Shipments", es: "Análisis de Riesgo — Envíos DDP (Entregado con Derechos Pagados)" },
      body: {
        en: {
          beginner: "\"DDP\" is a shipping term meaning the seller pays for everything, including import taxes, and hands you the goods fully ready — you don't deal with customs at all. The catch: in most Latin American countries, only a company registered locally (with a local tax ID) is legally allowed to bring goods through customs. So if the seller doesn't have a local company there, they often can't actually deliver on DDP — and the shipment can get stuck at the border indefinitely.",
          expert: "Under DDP, the seller bears all risk and cost — including import duties, taxes, and customs clearance — until goods reach the buyer's named place. In most Latin American countries, only a locally registered importer (with a local tax ID / RFC / RUT / RUC) can legally clear customs. A foreign seller without a local legal entity often cannot act as importer of record, making DDP legally impossible or requiring a proxy importer, which adds cost and liability risk."
        },
        es: {
          beginner: "\"DDP\" es un término de envío que significa que el vendedor paga todo, incluyendo los impuestos de importación, y le entrega la mercancía completamente lista — usted no tiene que lidiar con la aduana. El problema: en la mayoría de los países latinoamericanos, solo una empresa registrada localmente (con un ID fiscal local) puede legalmente hacer pasar mercancía por aduana. Entonces, si el vendedor no tiene una empresa local ahí, muchas veces no puede cumplir realmente con DDP — y el envío puede quedar atascado en la frontera indefinidamente.",
          expert: "Bajo DDP, el vendedor asume todo el riesgo y costo — incluyendo aranceles de importación, impuestos y despacho aduanero — hasta que la mercancía llega al lugar designado por el comprador. En la mayoría de los países latinoamericanos, solo un importador registrado localmente (con un ID fiscal local / RFC / RUT / RUC) puede despachar legalmente en aduana. Un vendedor extranjero sin entidad legal local a menudo no puede actuar como importador de registro, lo que hace que DDP sea legalmente imposible o requiera un importador apoderado, lo cual añade costo y riesgo de responsabilidad."
        }
      },
      legalBasis: {
        en: "Incoterms® 2020 (ICC Publication 723) — DDP rule; local customs law generally requires a resident importer of record.",
        es: "Incoterms® 2020 (Publicación 723 de la ICC) — regla DDP; la ley aduanera local generalmente exige un importador de registro residente."
      },
      warning: {
        en: "Sellers who quote DDP into Mexico, Colombia, Brazil, etc. without a local tax presence frequently get shipments stuck in customs indefinitely — always confirm the seller has a valid local importer registration before accepting DDP terms.",
        es: "Los vendedores que cotizan DDP hacia México, Colombia, Brasil, etc. sin presencia fiscal local frecuentemente tienen envíos atascados en aduana indefinidamente — confirme siempre que el vendedor tenga un registro de importador local válido antes de aceptar términos DDP."
      },
      followUps: [
        { en: "What is a proxy or 'importer of record' service?", es: "¿Qué es un servicio de 'importador de registro' apoderado?" },
        { en: "How does DDP differ from DAP?", es: "¿En qué se diferencia DDP de DAP?" },
        { en: "Which Incoterm is safer for cross-border e-commerce?", es: "¿Qué Incoterm es más seguro para el comercio electrónico transfronterizo?" }
      ]
    }
  }
];

const CHAT_FALLBACK = {
  title: { en: "Let's narrow this down", es: "Precisemos su consulta" },
  body: {
    en: {
      beginner: "I don't have a ready answer for that specific question yet. Try clicking one of the quick topics above, or ask me something simpler, like \"what does FOB mean?\" — and remember, for anything official, double-check with a licensed customs broker.",
      expert: "I don't have a pre-built answer for that exact question yet. Try one of the quick-scenario buttons above, or rephrase using terms like a country name, product type, or an Incoterm — and for anything binding, always confirm with a licensed customs broker or the relevant customs authority."
    },
    es: {
      beginner: "Todavía no tengo una respuesta lista para esa pregunta específica. Intente hacer clic en uno de los temas rápidos de arriba, o pregúnteme algo más simple, como \"¿qué significa FOB?\" — y recuerde, para cualquier trámite oficial, confírmelo con un agente aduanal certificado.",
      expert: "Todavía no tengo una respuesta preparada para esa pregunta exacta. Intente con uno de los botones de escenario rápido arriba, o reformule usando términos como el nombre de un país, tipo de producto o un Incoterm — y para cualquier asunto vinculante, confirme siempre con un agente aduanal certificado o la autoridad aduanera correspondiente."
    }
  },
  legalBasis: null,
  warning: null,
  followUps: [
    { en: "USMCA rules of origin for auto parts", es: "Reglas de origen del T-MEC para autopartes" },
    { en: "FDA / FSVP requirements for Colombian coffee", es: "Requisitos de la FDA / FSVP para el café colombiano" },
    { en: "Risk analysis for DDP shipments", es: "Análisis de riesgo para envíos DDP" }
  ]
};

// ---------- 2. Tariff Classifier ----------
const PRODUCTS = [
  {
    id: "auto-parts",
    name: { en: "Automotive parts (engine components)", es: "Autopartes (componentes de motor)" },
    hs6: "8409.91",
    national: {
      US: { code: "8409.91.9990", label: "HTSUS 8409.91.9990" },
      MX: { code: "8409.91.01", label: "TIGIE 8409.91.01" },
      CO: { code: "8409.91.00.00", label: "NANDINA 8409.91.00.00" }
    },
    fta: {
      US: { en: "Duty-free under USMCA if RVC and LVC thresholds are met with a valid Certification of Origin.", es: "Libre de arancel bajo el T-MEC si se cumplen los umbrales de RVC y LVC con una Certificación de Origen válida." },
      MX: { en: "Duty-free under USMCA if origin criteria are met; otherwise MFN rate applies.", es: "Libre de arancel bajo el T-MEC si se cumplen los criterios de origen; de lo contrario aplica la tasa NMF." },
      CO: { en: "Preferential rate available under U.S.–Colombia TPA for qualifying originating parts.", es: "Tasa preferencial disponible bajo el TLC EE. UU.–Colombia para partes originarias que califiquen." }
    },
    ntrs: [
      { en: "USMCA Certification of Origin (if claiming preference)", es: "Certificación de Origen del T-MEC (si se reclama preferencia)" },
      { en: "SEMARNAT environmental permit (Mexico, for certain components)", es: "Permiso ambiental de SEMARNAT (México, para ciertos componentes)" }
    ]
  },
  {
    id: "coffee",
    name: { en: "Roasted/green coffee", es: "Café tostado/verde" },
    hs6: "0901.21",
    national: {
      US: { code: "0901.21.0025", label: "HTSUS 0901.21.0025" },
      MX: { code: "0901.21.01", label: "TIGIE 0901.21.01" },
      CO: { code: "0901.21.00.00", label: "NANDINA 0901.21.00.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for most roasted/green coffee regardless of FTA.", es: "Tasa NMF libre de arancel para la mayoría del café tostado/verde, independientemente del TLC." },
      MX: { en: "Preferential access possible; verify country of origin documentation.", es: "Posible acceso preferencial; verifique la documentación de país de origen." },
      CO: { en: "Domestic export — INVIMA sanitary registration required, not an import FTA question.", es: "Exportación nacional — se requiere registro sanitario del INVIMA; no es un tema de TLC de importación." }
    },
    ntrs: [
      { en: "FDA Food Facility Registration + FSVP records (U.S. import)", es: "Registro de Instalación Alimentaria de la FDA + registros FSVP (importación a EE. UU.)" },
      { en: "FDA Prior Notice before arrival", es: "Aviso Previo de la FDA antes de la llegada" },
      { en: "INVIMA export sanitary certificate (Colombia origin)", es: "Certificado sanitario de exportación del INVIMA (origen Colombia)" }
    ]
  },
  {
    id: "electronics",
    name: { en: "Consumer electronics (small appliances)", es: "Electrónica de consumo (pequeños electrodomésticos)" },
    hs6: "8516.79",
    national: {
      US: { code: "8516.79.0000", label: "HTSUS 8516.79.0000" },
      MX: { code: "8516.79.01", label: "TIGIE 8516.79.01" },
      CO: { code: "8516.79.00.00", label: "NANDINA 8516.79.00.00" }
    },
    fta: {
      US: { en: "MFN duty applies; Section 301 additional duties may apply for China-origin goods.", es: "Aplica arancel NMF; pueden aplicar aranceles adicionales de la Sección 301 para mercancía de origen chino." },
      MX: { en: "MFN duty + 16% IVA; NOM compliance required before release.", es: "Arancel NMF + 16% de IVA; se requiere cumplimiento de NOM antes de la liberación." },
      CO: { en: "MFN duty + VAT; RETIE/RETIQ technical compliance may apply.", es: "Arancel NMF + IVA; puede aplicar cumplimiento técnico RETIE/RETIQ." }
    },
    ntrs: [
      { en: "NOM certification/label (Mexico)", es: "Certificación/etiqueta NOM (México)" },
      { en: "RETIE electrical safety certificate (Colombia)", es: "Certificado de seguridad eléctrica RETIE (Colombia)" },
      { en: "FCC ID (U.S., if applicable)", es: "ID de la FCC (EE. UU., si aplica)" }
    ]
  },
  {
    id: "textiles",
    name: { en: "Apparel / textile goods", es: "Prendas de vestir / productos textiles" },
    hs6: "6109.10",
    national: {
      US: { code: "6109.10.0012", label: "HTSUS 6109.10.0012" },
      MX: { code: "6109.10.01", label: "TIGIE 6109.10.01" },
      CO: { code: "6109.10.00.00", label: "NANDINA 6109.10.00.00" }
    },
    fta: {
      US: { en: "CAFTA-DR duty-free if yarn-forward rule of origin is met (Central America origin).", es: "Libre de arancel bajo CAFTA-DR si se cumple la regla de origen \"yarn-forward\" (origen Centroamérica)." },
      MX: { en: "USMCA duty-free if yarn-forward rule is met.", es: "Libre de arancel bajo el T-MEC si se cumple la regla \"yarn-forward\"." },
      CO: { en: "MFN duty + VAT applies unless a qualifying preference program is used.", es: "Aplica arancel NMF + IVA a menos que se use un programa de preferencia que califique." }
    },
    ntrs: [
      { en: "Certificate of Origin (for FTA preference)", es: "Certificado de Origen (para preferencia de TLC)" },
      { en: "NOM-004 labeling requirements (Mexico)", es: "Requisitos de etiquetado NOM-004 (México)" },
      { en: "Textile fiber content labeling (U.S. FTC rules)", es: "Etiquetado de contenido de fibra textil (reglas de la FTC de EE. UU.)" }
    ]
  },
  {
    id: "machinery",
    name: { en: "Industrial machinery", es: "Maquinaria industrial" },
    hs6: "8479.89",
    national: {
      US: { code: "8479.89.9599", label: "HTSUS 8479.89.9599" },
      MX: { code: "8479.89.99", label: "TIGIE 8479.89.99" },
      CO: { code: "8479.89.90.00", label: "NANDINA 8479.89.90.00" }
    },
    fta: {
      US: { en: "Duty-free under USMCA if the good qualifies as originating (tariff shift rule).", es: "Libre de arancel bajo el T-MEC si el bien califica como originario (regla de cambio arancelario)." },
      MX: { en: "Duty-free under USMCA with valid Certification of Origin.", es: "Libre de arancel bajo el T-MEC con Certificación de Origen válida." },
      CO: { en: "Preferential rate under U.S.–Colombia TPA for qualifying machinery.", es: "Tasa preferencial bajo el TLC EE. UU.–Colombia para maquinaria que califique." }
    },
    ntrs: [
      { en: "NOM-safety certification (Mexico, for certain machine types)", es: "Certificación de seguridad NOM (México, para ciertos tipos de máquina)" },
      { en: "OSHA/ANSI compliance documentation (U.S., informational)", es: "Documentación de cumplimiento OSHA/ANSI (EE. UU., informativo)" }
    ]
  },
  {
    id: "avocados",
    name: { en: "Fresh avocados", es: "Aguacates frescos" },
    hs6: "0804.40",
    national: {
      US: { code: "0804.40.0000", label: "HTSUS 0804.40.0000" },
      MX: { code: "0804.40.01", label: "TIGIE 0804.40.01" },
      CO: { code: "0804.40.00.00", label: "NANDINA 0804.40.00.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for most fresh avocados; no FTA preference needed for the tariff itself.", es: "Tasa NMF libre de arancel para la mayoría de los aguacates frescos; no se necesita preferencia de TLC para el arancel en sí." },
      MX: { en: "Duty-free under USMCA for qualifying avocados; access is also conditioned on USDA-APHIS orchard/packinghouse certification, not just origin.", es: "Libre de arancel bajo el T-MEC para aguacates que califiquen; el acceso también depende de la certificación de huerto/empacadora de USDA-APHIS, no solo del origen." },
      CO: { en: "Preferential access under the U.S.–Colombia TPA for qualifying avocados, subject to a phytosanitary work plan.", es: "Acceso preferencial bajo el TLC EE. UU.–Colombia para aguacates que califiquen, sujeto a un plan de trabajo fitosanitario." }
    },
    ntrs: [
      { en: "USDA-APHIS phytosanitary certificate and approved orchard/packinghouse registration (U.S. import)", es: "Certificado fitosanitario de USDA-APHIS y registro de huerto/empacadora aprobado (importación a EE. UU.)" },
      { en: "SENASICA export phytosanitary certificate (Mexico origin)", es: "Certificado fitosanitario de exportación de SENASICA (origen México)" },
      { en: "ICA export phytosanitary certificate (Colombia origin)", es: "Certificado fitosanitario de exportación del ICA (origen Colombia)" }
    ]
  },
  {
    id: "berries",
    name: { en: "Fresh berries (blueberries, etc.)", es: "Berries frescas (arándanos, etc.)" },
    hs6: "0810.40",
    national: {
      US: { code: "0810.40.0000", label: "HTSUS 0810.40.0000" },
      MX: { code: "0810.40.01", label: "TIGIE 0810.40.01" },
      CO: { code: "0810.40.00.00", label: "NANDINA 0810.40.00.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for most fresh berries.", es: "Tasa NMF libre de arancel para la mayoría de las berries frescas." },
      MX: { en: "Duty-free under USMCA for qualifying berries with a valid Certificate of Origin.", es: "Libre de arancel bajo el T-MEC para berries que califiquen con un Certificado de Origen válido." },
      CO: { en: "Preferential access under the U.S.–Colombia TPA for qualifying berries.", es: "Acceso preferencial bajo el TLC EE. UU.–Colombia para berries que califiquen." }
    },
    ntrs: [
      { en: "USDA-APHIS phytosanitary certificate and cold-treatment or fumigation protocol (as required by pest risk)", es: "Certificado fitosanitario de USDA-APHIS y protocolo de tratamiento en frío o fumigación (según el riesgo de plagas)" },
      { en: "FDA Prior Notice before arrival (perishable food)", es: "Aviso Previo de la FDA antes de la llegada (alimento perecedero)" }
    ]
  },
  {
    id: "copper",
    name: { en: "Refined copper (cathodes)", es: "Cobre refinado (cátodos)" },
    hs6: "7403.11",
    national: {
      US: { code: "7403.11.0000", label: "HTSUS 7403.11.0000" },
      MX: { code: "7403.11.01", label: "TIGIE 7403.11.01" },
      CO: { code: "7403.11.00.00", label: "NANDINA 7403.11.00.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for most refined copper cathodes.", es: "Tasa NMF libre de arancel para la mayoría de los cátodos de cobre refinado." },
      MX: { en: "Duty-free under USMCA if originating; MFN rate is already low/zero otherwise.", es: "Libre de arancel bajo el T-MEC si es originario; de lo contrario la tasa NMF ya es baja/cero." },
      CO: { en: "Preferential rate under the U.S.–Colombia TPA for qualifying copper cathodes.", es: "Tasa preferencial bajo el TLC EE. UU.–Colombia para cátodos de cobre que califiquen." }
    },
    ntrs: [
      { en: "Certificate of Origin (for FTA preference claims)", es: "Certificado de Origen (para reclamar preferencia de TLC)" },
      { en: "Metal assay/purity certificate", es: "Certificado de ensayo/pureza del metal" },
      { en: "Supply-chain due-diligence documentation (responsible sourcing, informational)", es: "Documentación de debida diligencia de la cadena de suministro (abastecimiento responsable, informativo)" }
    ]
  },
  {
    id: "crude-oil",
    name: { en: "Crude petroleum oil", es: "Petróleo crudo" },
    hs6: "2709.00",
    national: {
      US: { code: "2709.00.2000", label: "HTSUS 2709.00.2000" },
      MX: { code: "2709.00.01", label: "TIGIE 2709.00.01" },
      CO: { code: "2709.00.00.00", label: "NANDINA 2709.00.00.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for crude petroleum oil regardless of FTA.", es: "Tasa NMF libre de arancel para el petróleo crudo, independientemente del TLC." },
      MX: { en: "Duty-free MFN rate; USMCA preference generally not needed for the tariff itself.", es: "Tasa NMF libre de arancel; la preferencia del T-MEC generalmente no es necesaria para el arancel en sí." },
      CO: { en: "Duty-free MFN rate; preferential rules mainly relevant for refined products, not crude.", es: "Tasa NMF libre de arancel; las reglas preferenciales son relevantes principalmente para productos refinados, no para el crudo." }
    },
    ntrs: [
      { en: "API gravity / quality certificate and vessel inspection report", es: "Certificado de gravedad API / calidad e informe de inspección del buque" },
      { en: "U.S. DOE/EIA import reporting (U.S. import)", es: "Reporte de importación ante el DOE/EIA de EE. UU. (importación a EE. UU.)" }
    ]
  },
  {
    id: "cut-flowers",
    name: { en: "Cut flowers (roses, carnations)", es: "Flores cortadas (rosas, claveles)" },
    hs6: "0603.11",
    national: {
      US: { code: "0603.11.0000", label: "HTSUS 0603.11.0000" },
      MX: { code: "0603.11.01", label: "TIGIE 0603.11.01" },
      CO: { code: "0603.11.00.00", label: "NANDINA 0603.11.00.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for most cut flowers.", es: "Tasa NMF libre de arancel para la mayoría de las flores cortadas." },
      MX: { en: "Duty-free under USMCA for qualifying flowers with a valid Certificate of Origin.", es: "Libre de arancel bajo el T-MEC para flores que califiquen con un Certificado de Origen válido." },
      CO: { en: "Duty-free under the U.S.–Colombia TPA for qualifying cut flowers — Colombia is one of the largest suppliers of cut flowers to the U.S. market.", es: "Libre de arancel bajo el TLC EE. UU.–Colombia para flores cortadas que califiquen — Colombia es uno de los mayores proveedores de flores cortadas al mercado de EE. UU." }
    },
    ntrs: [
      { en: "USDA-APHIS phytosanitary inspection at first port of entry (perishable, time-sensitive clearance)", es: "Inspección fitosanitaria de USDA-APHIS en el primer puerto de entrada (despacho perecedero, sensible al tiempo)" },
      { en: "ICA export phytosanitary certificate (Colombia origin)", es: "Certificado fitosanitario de exportación del ICA (origen Colombia)" }
    ]
  },
  {
    id: "seafood",
    name: { en: "Fish & seafood (salmon, shrimp)", es: "Pescado y mariscos (salmón, camarón)" },
    hs6: "0303.13",
    national: {
      US: { code: "0303.13.0000", label: "HTSUS 0303.13.0000" },
      MX: { code: "0303.13.01", label: "TIGIE 0303.13.01" },
      CO: { code: "0303.13.00.00", label: "NANDINA 0303.13.00.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for most frozen fish; some prepared/processed seafood may carry a low MFN duty.", es: "Tasa NMF libre de arancel para la mayoría del pescado congelado; algunos productos de mar preparados/procesados pueden tener un arancel NMF bajo." },
      MX: { en: "Duty-free under USMCA for qualifying seafood with a valid Certificate of Origin.", es: "Libre de arancel bajo el T-MEC para productos del mar que califiquen con un Certificado de Origen válido." },
      CO: { en: "Preferential access under the U.S.–Colombia TPA for qualifying seafood.", es: "Acceso preferencial bajo el TLC EE. UU.–Colombia para productos del mar que califiquen." }
    },
    ntrs: [
      { en: "NOAA Seafood Import Monitoring Program (SIMP) catch documentation and traceability records (U.S. import)", es: "Documentación de captura y registros de trazabilidad del Programa de Monitoreo de Importaciones de Mariscos (SIMP) de la NOAA (importación a EE. UU.)" },
      { en: "FDA Food Facility Registration + FSVP records", es: "Registro de Instalación Alimentaria de la FDA + registros FSVP" }
    ]
  },
  {
    id: "pharma",
    name: { en: "Pharmaceuticals (medicaments)", es: "Farmacéuticos (medicamentos)" },
    hs6: "3004.90",
    national: {
      US: { code: "3004.90.9200", label: "HTSUS 3004.90.9200" },
      MX: { code: "3004.90.99", label: "TIGIE 3004.90.99" },
      CO: { code: "3004.90.90.00", label: "NANDINA 3004.90.90.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for most finished medicaments.", es: "Tasa NMF libre de arancel para la mayoría de los medicamentos terminados." },
      MX: { en: "Duty-free under USMCA for qualifying medicaments with a valid Certificate of Origin.", es: "Libre de arancel bajo el T-MEC para medicamentos que califiquen con un Certificado de Origen válido." },
      CO: { en: "Preferential access under the U.S.–Colombia TPA for qualifying medicaments.", es: "Acceso preferencial bajo el TLC EE. UU.–Colombia para medicamentos que califiquen." }
    },
    ntrs: [
      { en: "FDA drug establishment registration and NDC listing (U.S. import)", es: "Registro de establecimiento farmacéutico ante la FDA y listado NDC (importación a EE. UU.)" },
      { en: "COFEPRIS sanitary registration (Mexico)", es: "Registro sanitario de COFEPRIS (México)" },
      { en: "INVIMA sanitary registration (Colombia)", es: "Registro sanitario del INVIMA (Colombia)" }
    ]
  },
  {
    id: "footwear",
    name: { en: "Footwear", es: "Calzado" },
    hs6: "6403.99",
    national: {
      US: { code: "6403.99.6075", label: "HTSUS 6403.99.6075" },
      MX: { code: "6403.99.01", label: "TIGIE 6403.99.01" },
      CO: { code: "6403.99.00.00", label: "NANDINA 6403.99.00.00" }
    },
    fta: {
      US: { en: "CAFTA-DR duty-free if the applicable product-specific rule of origin is met (Central America origin).", es: "Libre de arancel bajo CAFTA-DR si se cumple la regla de origen específica aplicable (origen Centroamérica)." },
      MX: { en: "USMCA duty-free if the applicable rule of origin is met.", es: "Libre de arancel bajo el T-MEC si se cumple la regla de origen aplicable." },
      CO: { en: "MFN duty + VAT applies unless a qualifying preference program is used.", es: "Aplica arancel NMF + IVA a menos que se use un programa de preferencia que califique." }
    },
    ntrs: [
      { en: "Certificate of Origin (for FTA preference claims)", es: "Certificado de Origen (para reclamar preferencia de TLC)" },
      { en: "Country-of-origin marking/labeling on the product itself", es: "Marcado/etiquetado de país de origen en el producto mismo" }
    ]
  },
  {
    id: "soybean-oil",
    name: { en: "Soybean oil (crude)", es: "Aceite de soya (crudo)" },
    hs6: "1507.10",
    national: {
      US: { code: "1507.10.0000", label: "HTSUS 1507.10.0000" },
      MX: { code: "1507.10.01", label: "TIGIE 1507.10.01" },
      CO: { code: "1507.10.00.00", label: "NANDINA 1507.10.00.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for most crude soybean oil.", es: "Tasa NMF libre de arancel para la mayoría del aceite de soya crudo." },
      MX: { en: "Duty-free under USMCA for qualifying oil with a valid Certificate of Origin.", es: "Libre de arancel bajo el T-MEC para aceite que califique con un Certificado de Origen válido." },
      CO: { en: "Preferential access under the U.S.–Colombia TPA for qualifying oil.", es: "Acceso preferencial bajo el TLC EE. UU.–Colombia para aceite que califique." }
    },
    ntrs: [
      { en: "FDA Food Facility Registration + FSVP records (U.S. import)", es: "Registro de Instalación Alimentaria de la FDA + registros FSVP (importación a EE. UU.)" },
      { en: "Certificate of analysis (free fatty acid content, quality specs)", es: "Certificado de análisis (contenido de ácidos grasos libres, especificaciones de calidad)" }
    ]
  },
  {
    id: "plastics",
    name: { en: "Plastics (resins & articles)", es: "Plásticos (resinas y artículos)" },
    hs6: "3926.90",
    national: {
      US: { code: "3926.90.9990", label: "HTSUS 3926.90.9990" },
      MX: { code: "3926.90.99", label: "TIGIE 3926.90.99" },
      CO: { code: "3926.90.90.00", label: "NANDINA 3926.90.90.00" }
    },
    fta: {
      US: { en: "MFN duty applies; Section 301 additional duties may apply for China-origin goods.", es: "Aplica arancel NMF; pueden aplicar aranceles adicionales de la Sección 301 para mercancía de origen chino." },
      MX: { en: "Duty-free under USMCA for qualifying articles with a valid Certificate of Origin.", es: "Libre de arancel bajo el T-MEC para artículos que califiquen con un Certificado de Origen válido." },
      CO: { en: "MFN duty + VAT applies unless a qualifying preference program is used.", es: "Aplica arancel NMF + IVA a menos que se use un programa de preferencia que califique." }
    },
    ntrs: [
      { en: "Certificate of Origin (for FTA preference claims)", es: "Certificado de Origen (para reclamar preferencia de TLC)" },
      { en: "Food-contact-grade compliance documentation (if applicable)", es: "Documentación de cumplimiento para contacto con alimentos (si aplica)" }
    ]
  },
  {
    id: "leather-goods",
    name: { en: "Leather goods (handbags, luggage)", es: "Artículos de cuero (bolsos, maletas)" },
    hs6: "4202.21",
    national: {
      US: { code: "4202.21.6000", label: "HTSUS 4202.21.6000" },
      MX: { code: "4202.21.01", label: "TIGIE 4202.21.01" },
      CO: { code: "4202.21.00.00", label: "NANDINA 4202.21.00.00" }
    },
    fta: {
      US: { en: "MFN duty applies to most leather handbags unless a qualifying FTA preference is claimed.", es: "Aplica arancel NMF a la mayoría de los bolsos de cuero, a menos que se reclame una preferencia de TLC que califique." },
      MX: { en: "Duty-free under USMCA if the applicable rule of origin is met.", es: "Libre de arancel bajo el T-MEC si se cumple la regla de origen aplicable." },
      CO: { en: "Preferential rate under the U.S.–Colombia TPA for qualifying goods.", es: "Tasa preferencial bajo el TLC EE. UU.–Colombia para mercancía que califique." }
    },
    ntrs: [
      { en: "Certificate of Origin (for FTA preference claims)", es: "Certificado de Origen (para reclamar preferencia de TLC)" },
      { en: "CITES permit if exotic leather/skins are used", es: "Permiso CITES si se usan cueros/pieles exóticas" }
    ]
  },
  {
    id: "paper",
    name: { en: "Paper & paperboard", es: "Papel y cartón" },
    hs6: "4802.56",
    national: {
      US: { code: "4802.56.3000", label: "HTSUS 4802.56.3000" },
      MX: { code: "4802.56.01", label: "TIGIE 4802.56.01" },
      CO: { code: "4802.56.00.00", label: "NANDINA 4802.56.00.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for most uncoated paper/paperboard.", es: "Tasa NMF libre de arancel para la mayoría del papel/cartón sin recubrir." },
      MX: { en: "Duty-free under USMCA for qualifying paper with a valid Certificate of Origin.", es: "Libre de arancel bajo el T-MEC para papel que califique con un Certificado de Origen válido." },
      CO: { en: "Preferential access under the U.S.–Colombia TPA for qualifying paper.", es: "Acceso preferencial bajo el TLC EE. UU.–Colombia para papel que califique." }
    },
    ntrs: [
      { en: "Certificate of Origin (for FTA preference claims)", es: "Certificado de Origen (para reclamar preferencia de TLC)" },
      { en: "Phytosanitary/fumigation certificate for wood packaging materials (pallets, crates)", es: "Certificado fitosanitario/de fumigación para material de embalaje de madera (tarimas, cajas)" }
    ]
  },
  {
    id: "glassware",
    name: { en: "Glass & glassware", es: "Vidrio y cristalería" },
    hs6: "7013.49",
    national: {
      US: { code: "7013.49.2000", label: "HTSUS 7013.49.2000" },
      MX: { code: "7013.49.01", label: "TIGIE 7013.49.01" },
      CO: { code: "7013.49.00.00", label: "NANDINA 7013.49.00.00" }
    },
    fta: {
      US: { en: "MFN duty applies to most glassware unless a qualifying FTA preference is claimed.", es: "Aplica arancel NMF a la mayoría de la cristalería, a menos que se reclame una preferencia de TLC que califique." },
      MX: { en: "Duty-free under USMCA if the applicable rule of origin is met.", es: "Libre de arancel bajo el T-MEC si se cumple la regla de origen aplicable." },
      CO: { en: "MFN duty + VAT applies unless a qualifying preference program is used.", es: "Aplica arancel NMF + IVA a menos que se use un programa de preferencia que califique." }
    },
    ntrs: [
      { en: "Certificate of Origin (for FTA preference claims)", es: "Certificado de Origen (para reclamar preferencia de TLC)" },
      { en: "Breakage/packaging compliance for fragile goods (carrier requirement, informational)", es: "Cumplimiento de empaque contra roturas para mercancía frágil (requisito del transportista, informativo)" }
    ]
  },
  {
    id: "jewelry",
    name: { en: "Jewelry (gold, precious metal)", es: "Joyería (oro, metal precioso)" },
    hs6: "7113.19",
    national: {
      US: { code: "7113.19.5000", label: "HTSUS 7113.19.5000" },
      MX: { code: "7113.19.01", label: "TIGIE 7113.19.01" },
      CO: { code: "7113.19.00.00", label: "NANDINA 7113.19.00.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for most precious metal jewelry.", es: "Tasa NMF libre de arancel para la mayoría de la joyería de metal precioso." },
      MX: { en: "Duty-free under USMCA for qualifying jewelry with a valid Certificate of Origin.", es: "Libre de arancel bajo el T-MEC para joyería que califique con un Certificado de Origen válido." },
      CO: { en: "Preferential access under the U.S.–Colombia TPA for qualifying jewelry.", es: "Acceso preferencial bajo el TLC EE. UU.–Colombia para joyería que califique." }
    },
    ntrs: [
      { en: "Kimberley Process certificate if diamonds are included", es: "Certificado del Proceso Kimberley si incluye diamantes" },
      { en: "Metal purity/hallmark documentation", es: "Documentación de pureza del metal/contraste" }
    ]
  },
  {
    id: "medical-instruments",
    name: { en: "Medical & surgical instruments", es: "Instrumentos médicos y quirúrgicos" },
    hs6: "9018.90",
    national: {
      US: { code: "9018.90.8000", label: "HTSUS 9018.90.8000" },
      MX: { code: "9018.90.01", label: "TIGIE 9018.90.01" },
      CO: { code: "9018.90.00.00", label: "NANDINA 9018.90.00.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for most medical/surgical instruments.", es: "Tasa NMF libre de arancel para la mayoría de los instrumentos médicos/quirúrgicos." },
      MX: { en: "Duty-free under USMCA for qualifying instruments with a valid Certificate of Origin.", es: "Libre de arancel bajo el T-MEC para instrumentos que califiquen con un Certificado de Origen válido." },
      CO: { en: "Preferential access under the U.S.–Colombia TPA for qualifying instruments.", es: "Acceso preferencial bajo el TLC EE. UU.–Colombia para instrumentos que califiquen." }
    },
    ntrs: [
      { en: "FDA medical device registration/listing and 510(k) clearance (U.S. import, if applicable)", es: "Registro/listado de dispositivo médico ante la FDA y autorización 510(k) (importación a EE. UU., si aplica)" },
      { en: "COFEPRIS sanitary registration (Mexico)", es: "Registro sanitario de COFEPRIS (México)" },
      { en: "INVIMA sanitary registration (Colombia)", es: "Registro sanitario del INVIMA (Colombia)" }
    ]
  },
  {
    id: "furniture",
    name: { en: "Wooden furniture", es: "Muebles de madera" },
    hs6: "9403.60",
    national: {
      US: { code: "9403.60.8081", label: "HTSUS 9403.60.8081" },
      MX: { code: "9403.60.01", label: "TIGIE 9403.60.01" },
      CO: { code: "9403.60.00.00", label: "NANDINA 9403.60.00.00" }
    },
    fta: {
      US: { en: "Duty-free MFN rate for most wooden furniture.", es: "Tasa NMF libre de arancel para la mayoría de los muebles de madera." },
      MX: { en: "Duty-free under USMCA for qualifying furniture with a valid Certificate of Origin.", es: "Libre de arancel bajo el T-MEC para muebles que califiquen con un Certificado de Origen válido." },
      CO: { en: "Preferential access under the U.S.–Colombia TPA for qualifying furniture.", es: "Acceso preferencial bajo el TLC EE. UU.–Colombia para muebles que califiquen." }
    },
    ntrs: [
      { en: "Lacey Act declaration for wood species/origin (U.S. import)", es: "Declaración de la Ley Lacey sobre especie/origen de la madera (importación a EE. UU.)" },
      { en: "Phytosanitary/fumigation certificate for raw wood components", es: "Certificado fitosanitario/de fumigación para componentes de madera sin procesar" }
    ]
  }
];

const DEST_COUNTRIES = [
  { id: "US", name: { en: "United States", es: "Estados Unidos" } },
  { id: "MX", name: { en: "Mexico", es: "México" } },
  { id: "CO", name: { en: "Colombia", es: "Colombia" } },
  { id: "AR", name: { en: "Argentina", es: "Argentina" } },
  { id: "BO", name: { en: "Bolivia", es: "Bolivia" } },
  { id: "BR", name: { en: "Brazil", es: "Brasil" } },
  { id: "CL", name: { en: "Chile", es: "Chile" } },
  { id: "CR", name: { en: "Costa Rica", es: "Costa Rica" } },
  { id: "CU", name: { en: "Cuba", es: "Cuba" } },
  { id: "DO", name: { en: "Dominican Republic", es: "República Dominicana" } },
  { id: "EC", name: { en: "Ecuador", es: "Ecuador" } },
  { id: "SV", name: { en: "El Salvador", es: "El Salvador" } },
  { id: "GT", name: { en: "Guatemala", es: "Guatemala" } },
  { id: "HN", name: { en: "Honduras", es: "Honduras" } },
  { id: "NI", name: { en: "Nicaragua", es: "Nicaragua" } },
  { id: "PA", name: { en: "Panama", es: "Panamá" } },
  { id: "PY", name: { en: "Paraguay", es: "Paraguay" } },
  { id: "PE", name: { en: "Peru", es: "Perú" } },
  { id: "UY", name: { en: "Uruguay", es: "Uruguay" } },
  { id: "VE", name: { en: "Venezuela", es: "Venezuela" } }
];

// For the 17 countries above that don't have detailed per-product national
// tariff codes (only US/MX/CO do), the classifier falls back to: the
// universal 6-digit HS code (always accurate) + this real, general context
// about the trade bloc / nomenclature system / U.S. trade relationship.
// This avoids fabricating precise national subheadings we don't have
// verified data for.
const COUNTRY_TRADE_INFO = {
  AR: {
    nomenclature: { en: "NCM (Mercosur Common Nomenclature) — typically an 8-digit code.", es: "NCM (Nomenclatura Común del Mercosur) — típicamente un código de 8 dígitos." },
    ftaNote: { en: "No comprehensive U.S. free trade agreement; MFN (most-favored-nation) rates generally apply.", es: "No existe un TLC integral con EE. UU.; generalmente aplican tasas NMF (nación más favorecida)." }
  },
  BO: {
    nomenclature: { en: "NANDINA (Andean Community) — typically an 8-digit code plus national extension.", es: "NANDINA (Comunidad Andina) — típicamente un código de 8 dígitos más extensión nacional." },
    ftaNote: { en: "No comprehensive U.S. free trade agreement (Andean trade preferences have expired); MFN rates generally apply.", es: "No existe un TLC integral con EE. UU. (las preferencias andinas han expirado); generalmente aplican tasas NMF." }
  },
  BR: {
    nomenclature: { en: "NCM (Mercosur Common Nomenclature) — typically an 8-digit code.", es: "NCM (Nomenclatura Común del Mercosur) — típicamente un código de 8 dígitos." },
    ftaNote: { en: "No comprehensive U.S. free trade agreement; MFN rates generally apply.", es: "No existe un TLC integral con EE. UU.; generalmente aplican tasas NMF." }
  },
  CL: {
    nomenclature: { en: "Chile's national tariff schedule — typically an 8-digit code, flat 6% standard MFN base rate.", es: "Arancel aduanero nacional de Chile — típicamente un código de 8 dígitos, tasa base NMF plana del 6%." },
    ftaNote: { en: "Covered by the U.S.–Chile Free Trade Agreement; duty-free treatment is available if the applicable rule of origin is met.", es: "Cubierto por el TLC EE. UU.–Chile; el trato libre de arancel está disponible si se cumple la regla de origen aplicable." }
  },
  CR: {
    nomenclature: { en: "SAC (Central American Tariff System) — typically an 8-digit code.", es: "SAC (Sistema Arancelario Centroamericano) — típicamente un código de 8 dígitos." },
    ftaNote: { en: "Covered by CAFTA-DR; duty-free treatment is available if the applicable product-specific rule of origin is met.", es: "Cubierto por el CAFTA-DR; el trato libre de arancel está disponible si se cumple la regla de origen específica aplicable." }
  },
  CU: {
    nomenclature: { en: "Cuba's national tariff schedule.", es: "Arancel aduanero nacional de Cuba." },
    ftaNote: { en: "Cuba is subject to a longstanding comprehensive U.S. embargo — most trade is prohibited without specific OFAC/BIS authorization. This tool does not model normal trade scenarios for Cuba.", es: "Cuba está sujeta a un embargo integral y de larga data por parte de EE. UU. — la mayoría del comercio está prohibido sin autorización específica de OFAC/BIS. Esta herramienta no modela escenarios de comercio normal para Cuba." },
    restricted: true
  },
  DO: {
    nomenclature: { en: "National tariff schedule aligned with CAFTA-DR — typically an 8-digit code.", es: "Arancel nacional alineado con el CAFTA-DR — típicamente un código de 8 dígitos." },
    ftaNote: { en: "Covered by CAFTA-DR; duty-free treatment is available if the applicable product-specific rule of origin is met.", es: "Cubierto por el CAFTA-DR; el trato libre de arancel está disponible si se cumple la regla de origen específica aplicable." }
  },
  EC: {
    nomenclature: { en: "NANDINA (Andean Community) — typically an 8-digit code plus national extension.", es: "NANDINA (Comunidad Andina) — típicamente un código de 8 dígitos más extensión nacional." },
    ftaNote: { en: "No comprehensive U.S. free trade agreement; MFN rates generally apply.", es: "No existe un TLC integral con EE. UU.; generalmente aplican tasas NMF." }
  },
  SV: {
    nomenclature: { en: "SAC (Central American Tariff System) — typically an 8-digit code.", es: "SAC (Sistema Arancelario Centroamericano) — típicamente un código de 8 dígitos." },
    ftaNote: { en: "Covered by CAFTA-DR; duty-free treatment is available if the applicable product-specific rule of origin is met.", es: "Cubierto por el CAFTA-DR; el trato libre de arancel está disponible si se cumple la regla de origen específica aplicable." }
  },
  GT: {
    nomenclature: { en: "SAC (Central American Tariff System) — typically an 8-digit code.", es: "SAC (Sistema Arancelario Centroamericano) — típicamente un código de 8 dígitos." },
    ftaNote: { en: "Covered by CAFTA-DR; duty-free treatment is available if the applicable product-specific rule of origin is met.", es: "Cubierto por el CAFTA-DR; el trato libre de arancel está disponible si se cumple la regla de origen específica aplicable." }
  },
  HN: {
    nomenclature: { en: "SAC (Central American Tariff System) — typically an 8-digit code.", es: "SAC (Sistema Arancelario Centroamericano) — típicamente un código de 8 dígitos." },
    ftaNote: { en: "Covered by CAFTA-DR; duty-free treatment is available if the applicable product-specific rule of origin is met.", es: "Cubierto por el CAFTA-DR; el trato libre de arancel está disponible si se cumple la regla de origen específica aplicable." }
  },
  NI: {
    nomenclature: { en: "SAC (Central American Tariff System) — typically an 8-digit code.", es: "SAC (Sistema Arancelario Centroamericano) — típicamente un código de 8 dígitos." },
    ftaNote: { en: "Covered by CAFTA-DR; duty-free treatment is available if the applicable product-specific rule of origin is met.", es: "Cubierto por el CAFTA-DR; el trato libre de arancel está disponible si se cumple la regla de origen específica aplicable." }
  },
  PA: {
    nomenclature: { en: "Panama's national tariff schedule — typically an 8-digit code.", es: "Arancel aduanero nacional de Panamá — típicamente un código de 8 dígitos." },
    ftaNote: { en: "Covered by the U.S.–Panama Trade Promotion Agreement; duty-free treatment is available if the applicable rule of origin is met.", es: "Cubierto por el TLC EE. UU.–Panamá; el trato libre de arancel está disponible si se cumple la regla de origen aplicable." }
  },
  PY: {
    nomenclature: { en: "NCM (Mercosur Common Nomenclature) — typically an 8-digit code.", es: "NCM (Nomenclatura Común del Mercosur) — típicamente un código de 8 dígitos." },
    ftaNote: { en: "No comprehensive U.S. free trade agreement; MFN rates generally apply.", es: "No existe un TLC integral con EE. UU.; generalmente aplican tasas NMF." }
  },
  PE: {
    nomenclature: { en: "NANDINA (Andean Community) — typically a 10-digit code.", es: "NANDINA (Comunidad Andina) — típicamente un código de 10 dígitos." },
    ftaNote: { en: "Covered by the U.S.–Peru Trade Promotion Agreement; duty-free treatment is available if the applicable rule of origin is met.", es: "Cubierto por el TLC EE. UU.–Perú; el trato libre de arancel está disponible si se cumple la regla de origen aplicable." }
  },
  UY: {
    nomenclature: { en: "NCM (Mercosur Common Nomenclature) — typically an 8-digit code.", es: "NCM (Nomenclatura Común del Mercosur) — típicamente un código de 8 dígitos." },
    ftaNote: { en: "No comprehensive U.S. free trade agreement; MFN rates generally apply.", es: "No existe un TLC integral con EE. UU.; generalmente aplican tasas NMF." }
  },
  VE: {
    nomenclature: { en: "Venezuela's national tariff schedule (Arancel de Aduanas).", es: "Arancel de Aduanas nacional de Venezuela." },
    ftaNote: { en: "No comprehensive U.S. free trade agreement; MFN rates generally apply. Trade with Venezuela may also be subject to U.S. sanctions — verify OFAC compliance before shipping.", es: "No existe un TLC integral con EE. UU.; generalmente aplican tasas NMF. El comercio con Venezuela también puede estar sujeto a sanciones de EE. UU. — verifique el cumplimiento con OFAC antes de enviar." },
    restricted: true
  }
};

// Known FTAs, detected from the FTA note text (see findFtaInText() in app.js)
// so a specific agreement name + partner countries can be surfaced without
// having to hand-tag every product/country combination individually.
const FTA_REGISTRY = [
  {
    match: ["usmca"],
    name: { en: "USMCA", es: "T-MEC" },
    parties: { en: "United States, Mexico & Canada", es: "Estados Unidos, México y Canadá" }
  },
  {
    match: ["cafta-dr"],
    name: { en: "CAFTA-DR", es: "CAFTA-DR" },
    parties: {
      en: "United States, Costa Rica, Dominican Republic, El Salvador, Guatemala, Honduras & Nicaragua",
      es: "Estados Unidos, Costa Rica, República Dominicana, El Salvador, Guatemala, Honduras y Nicaragua"
    }
  },
  {
    match: ["u.s.–colombia tpa", "u.s.-colombia tpa"],
    name: { en: "U.S.–Colombia Trade Promotion Agreement", es: "TLC EE. UU.–Colombia" },
    parties: { en: "United States & Colombia", es: "Estados Unidos y Colombia" }
  },
  {
    match: ["u.s.–chile free trade agreement", "u.s.-chile free trade agreement"],
    name: { en: "U.S.–Chile Free Trade Agreement", es: "TLC EE. UU.–Chile" },
    parties: { en: "United States & Chile", es: "Estados Unidos y Chile" }
  },
  {
    match: ["u.s.–peru trade promotion agreement", "u.s.-peru trade promotion agreement"],
    name: { en: "U.S.–Peru Trade Promotion Agreement", es: "TLC EE. UU.–Perú" },
    parties: { en: "United States & Peru", es: "Estados Unidos y Perú" }
  },
  {
    match: ["u.s.–panama trade promotion agreement", "u.s.-panama trade promotion agreement"],
    name: { en: "U.S.–Panama Trade Promotion Agreement", es: "TLC EE. UU.–Panamá" },
    parties: { en: "United States & Panama", es: "Estados Unidos y Panamá" }
  }
];

// ---------- 3. Landed Cost Calculator ----------
// valuation basis by destination: US = FOB, Latin America = CIF
const VALUATION_BASIS = {
  US: { basis: "FOB", label: { en: "FOB (Free on Board) — U.S. Customs value excludes international freight/insurance.", es: "FOB (Libre a Bordo) — El valor en aduana de EE. UU. excluye flete/seguro internacional." } },
  MX: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Mexican customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana mexicano incluye flete y seguro." } },
  CO: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Colombian customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana colombiano incluye flete y seguro." } },
  PE: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Peruvian customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana peruano incluye flete y seguro." } },
  CL: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Chilean customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana chileno incluye flete y seguro." } },
  BR: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Brazilian customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana brasileño incluye flete y seguro." } },
  AR: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Argentine customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana argentino incluye flete y seguro." } },
  BO: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Bolivian customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana boliviano incluye flete y seguro." } },
  CR: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Costa Rican customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana costarricense incluye flete y seguro." } },
  CU: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Cuban customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana cubano incluye flete y seguro." } },
  DO: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Dominican customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana dominicano incluye flete y seguro." } },
  EC: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Ecuadorian customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana ecuatoriano incluye flete y seguro." } },
  SV: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Salvadoran customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana salvadoreño incluye flete y seguro." } },
  GT: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Guatemalan customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana guatemalteco incluye flete y seguro." } },
  HN: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Honduran customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana hondureño incluye flete y seguro." } },
  NI: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Nicaraguan customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana nicaragüense incluye flete y seguro." } },
  PA: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Panamanian customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana panameño incluye flete y seguro." } },
  PY: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Paraguayan customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana paraguayo incluye flete y seguro." } },
  UY: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Uruguayan customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana uruguayo incluye flete y seguro." } },
  VE: { basis: "CIF", label: { en: "CIF (Cost, Insurance, Freight) — Venezuelan customs value includes freight and insurance.", es: "CIF (Costo, Seguro y Flete) — El valor en aduana venezolano incluye flete y seguro." } }
};

const FEE_LABELS = {
  US: { en: "MPF (Merchandise Processing Fee)", es: "MPF (Tarifa de Procesamiento de Mercancía)" },
  MX: { en: "DTA (Derecho de Trámite Aduanero)", es: "DTA (Derecho de Trámite Aduanero)" },
  CO: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  PE: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  CL: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  BR: { en: "Siscomex fee", es: "Tasa Siscomex" },
  AR: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  BO: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  CR: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  CU: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  DO: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  EC: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  SV: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  GT: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  HN: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  NI: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  PA: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  PY: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  UY: { en: "Customs handling fee", es: "Tasa de trámite aduanero" },
  VE: { en: "Customs handling fee", es: "Tasa de trámite aduanero" }
};

// ---------- 4. Incoterms 2020 ----------
const INCOTERMS = [
  { code: "EXW", name: { en: "Ex Works", es: "En Fábrica" }, mode: { en: "Any mode", es: "Cualquier modo" }, riskTransfer: { en: "At seller's premises, before loading.", es: "En las instalaciones del vendedor, antes de la carga." }, freight: { en: "Buyer pays all freight.", es: "El comprador paga todo el flete." }, insurance: { en: "Buyer arranges (not required).", es: "El comprador lo contrata (no obligatorio)." }, clearance: { en: "Buyer handles export AND import clearance.", es: "El comprador gestiona el despacho de exportación Y de importación." } },
  { code: "FCA", name: { en: "Free Carrier", es: "Franco Transportista" }, mode: { en: "Any mode", es: "Cualquier modo" }, riskTransfer: { en: "When goods are handed to the carrier named by the buyer.", es: "Cuando la mercancía se entrega al transportista designado por el comprador." }, freight: { en: "Buyer pays main carriage.", es: "El comprador paga el transporte principal." }, insurance: { en: "Buyer arranges (not required).", es: "El comprador lo contrata (no obligatorio)." }, clearance: { en: "Seller handles export clearance; buyer handles import.", es: "El vendedor gestiona el despacho de exportación; el comprador el de importación." } },
  { code: "CPT", name: { en: "Carriage Paid To", es: "Transporte Pagado Hasta" }, mode: { en: "Any mode", es: "Cualquier modo" }, riskTransfer: { en: "When goods are handed to the first carrier.", es: "Cuando la mercancía se entrega al primer transportista." }, freight: { en: "Seller pays freight to destination.", es: "El vendedor paga el flete hasta el destino." }, insurance: { en: "Buyer arranges (not required).", es: "El comprador lo contrata (no obligatorio)." }, clearance: { en: "Seller handles export clearance; buyer handles import.", es: "El vendedor gestiona el despacho de exportación; el comprador el de importación." } },
  { code: "CIP", name: { en: "Carriage and Insurance Paid To", es: "Transporte y Seguro Pagados Hasta" }, mode: { en: "Any mode", es: "Cualquier modo" }, riskTransfer: { en: "When goods are handed to the first carrier.", es: "Cuando la mercancía se entrega al primer transportista." }, freight: { en: "Seller pays freight to destination.", es: "El vendedor paga el flete hasta el destino." }, insurance: { en: "Seller must insure (Institute Cargo Clauses A, all-risk).", es: "El vendedor debe asegurar (Cláusulas A del Institute Cargo Clauses, todo riesgo)." }, clearance: { en: "Seller handles export clearance; buyer handles import.", es: "El vendedor gestiona el despacho de exportación; el comprador el de importación." } },
  { code: "DAP", name: { en: "Delivered at Place", es: "Entregada en Lugar" }, mode: { en: "Any mode", es: "Cualquier modo" }, riskTransfer: { en: "When goods arrive ready for unloading at named place.", es: "Cuando la mercancía llega lista para descarga en el lugar designado." }, freight: { en: "Seller pays freight to destination.", es: "El vendedor paga el flete hasta el destino." }, insurance: { en: "Seller arranges (not required).", es: "El vendedor lo contrata (no obligatorio)." }, clearance: { en: "Seller handles export; buyer handles import clearance & duties.", es: "El vendedor gestiona la exportación; el comprador el despacho de importación y los aranceles." } },
  { code: "DPU", name: { en: "Delivered at Place Unloaded", es: "Entregada en Lugar Descargada" }, mode: { en: "Any mode", es: "Cualquier modo" }, riskTransfer: { en: "When goods are unloaded at named place.", es: "Cuando la mercancía se descarga en el lugar designado." }, freight: { en: "Seller pays freight and unloading.", es: "El vendedor paga el flete y la descarga." }, insurance: { en: "Seller arranges (not required).", es: "El vendedor lo contrata (no obligatorio)." }, clearance: { en: "Seller handles export; buyer handles import clearance & duties.", es: "El vendedor gestiona la exportación; el comprador el despacho de importación y los aranceles." } },
  { code: "DDP", name: { en: "Delivered Duty Paid", es: "Entregada con Derechos Pagados" }, mode: { en: "Any mode", es: "Cualquier modo" }, riskTransfer: { en: "When goods arrive ready for unloading, duty paid.", es: "Cuando la mercancía llega lista para descarga, con aranceles pagados." }, freight: { en: "Seller pays all freight.", es: "El vendedor paga todo el flete." }, insurance: { en: "Seller arranges (not required).", es: "El vendedor lo contrata (no obligatorio)." }, clearance: { en: "Seller handles BOTH export and import clearance, including duties/taxes.", es: "El vendedor gestiona AMBOS despachos, de exportación e importación, incluyendo aranceles/impuestos." } },
  { code: "FAS", name: { en: "Free Alongside Ship", es: "Franco al Costado del Buque" }, mode: { en: "Sea / inland waterway only", es: "Solo marítimo / vías navegables interiores" }, riskTransfer: { en: "When goods are placed alongside the vessel at the port of shipment.", es: "Cuando la mercancía se coloca al costado del buque en el puerto de embarque." }, freight: { en: "Buyer pays main carriage.", es: "El comprador paga el transporte principal." }, insurance: { en: "Buyer arranges (not required).", es: "El comprador lo contrata (no obligatorio)." }, clearance: { en: "Seller handles export clearance; buyer handles import.", es: "El vendedor gestiona el despacho de exportación; el comprador el de importación." } },
  { code: "FOB", name: { en: "Free on Board", es: "Libre a Bordo" }, mode: { en: "Sea / inland waterway only", es: "Solo marítimo / vías navegables interiores" }, riskTransfer: { en: "When goods are loaded on board the vessel.", es: "Cuando la mercancía se carga a bordo del buque." }, freight: { en: "Buyer pays main carriage.", es: "El comprador paga el transporte principal." }, insurance: { en: "Buyer arranges (not required).", es: "El comprador lo contrata (no obligatorio)." }, clearance: { en: "Seller handles export clearance; buyer handles import.", es: "El vendedor gestiona el despacho de exportación; el comprador el de importación." } },
  { code: "CFR", name: { en: "Cost and Freight", es: "Costo y Flete" }, mode: { en: "Sea / inland waterway only", es: "Solo marítimo / vías navegables interiores" }, riskTransfer: { en: "When goods are loaded on board the vessel.", es: "Cuando la mercancía se carga a bordo del buque." }, freight: { en: "Seller pays freight to destination port.", es: "El vendedor paga el flete hasta el puerto de destino." }, insurance: { en: "Buyer arranges (not required).", es: "El comprador lo contrata (no obligatorio)." }, clearance: { en: "Seller handles export clearance; buyer handles import.", es: "El vendedor gestiona el despacho de exportación; el comprador el de importación." } },
  { code: "CIF", name: { en: "Cost, Insurance and Freight", es: "Costo, Seguro y Flete" }, mode: { en: "Sea / inland waterway only", es: "Solo marítimo / vías navegables interiores" }, riskTransfer: { en: "When goods are loaded on board the vessel.", es: "Cuando la mercancía se carga a bordo del buque." }, freight: { en: "Seller pays freight to destination port.", es: "El vendedor paga el flete hasta el puerto de destino." }, insurance: { en: "Seller must insure (Institute Cargo Clauses C, minimum cover).", es: "El vendedor debe asegurar (Cláusulas C del Institute Cargo Clauses, cobertura mínima)." }, clearance: { en: "Seller handles export clearance; buyer handles import.", es: "El vendedor gestiona el despacho de exportación; el comprador el de importación." } }
];

const INCOTERMS_WARNINGS = [
  {
    en: "DDP into Latin America: the seller must act as importer of record, which legally requires a local tax registration (RFC, RUT, RUC, CNPJ). Without one, DDP shipments frequently get stuck in customs indefinitely.",
    es: "DDP hacia América Latina: el vendedor debe actuar como importador de registro, lo cual requiere legalmente un registro fiscal local (RFC, RUT, RUC, CNPJ). Sin uno, los envíos DDP frecuentemente quedan atascados en aduana indefinidamente."
  },
  {
    en: "CIF port surcharges: many Latin American ports add local terminal handling and documentation surcharges on top of the CIF price that are NOT included in the seller's freight/insurance quote — buyers should budget for these separately.",
    es: "Recargos portuarios CIF: muchos puertos latinoamericanos añaden recargos locales de manejo en terminal y documentación sobre el precio CIF que NO están incluidos en la cotización de flete/seguro del vendedor — los compradores deben presupuestarlos por separado."
  },
  {
    en: "FOB/CIF/CFR/FAS should only be used for true sea or inland-waterway shipments. Using them for containerized/multimodal cargo shifts risk at the ship's rail in a way that rarely matches real handling — FCA/CPT/CIP are the modern recommended equivalents.",
    es: "FOB/CIF/CFR/FAS solo deben usarse para envíos realmente marítimos o por vías navegables interiores. Usarlos para carga contenedorizada/multimodal transfiere el riesgo en la borda del buque de una forma que rara vez coincide con el manejo real — FCA/CPT/CIP son los equivalentes modernos recomendados."
  }
];

// ---------- 5. Customs Directory & Checklist ----------
const COUNTRY_DIRECTORY = [
  {
    id: "US",
    name: { en: "United States", es: "Estados Unidos" },
    agency: { en: "CBP — U.S. Customs and Border Protection", es: "CBP — Oficina de Aduanas y Protección Fronteriza de EE. UU." },
    portal: "ACE (Automated Commercial Environment)",
    taxes: { en: "Ad valorem duty + MPF (Merchandise Processing Fee) + HMF (Harbor Maintenance Fee, ocean only)", es: "Arancel ad valorem + MPF (Tarifa de Procesamiento de Mercancía) + HMF (Tarifa de Mantenimiento Portuario, solo marítimo)" },
    notes: { en: "Importer of record must have a CBP-recognized bond for formal entries over $2,500.", es: "El importador de registro debe contar con una fianza reconocida por CBP para entradas formales mayores a $2,500." }
  },
  {
    id: "MX",
    name: { en: "Mexico", es: "México" },
    agency: { en: "ANAM (Agencia Nacional de Aduanas de México) / SAT", es: "ANAM (Agencia Nacional de Aduanas de México) / SAT" },
    portal: "VUCEM (Ventanilla Única de Comercio Exterior Mexicano)",
    taxes: { en: "General Import Tax (IGI) + DTA fee + 16% IVA", es: "Impuesto General de Importación (IGI) + DTA + 16% de IVA" },
    notes: { en: "A licensed customs broker (agente aduanal) must file the pedimento for most formal imports.", es: "Un agente aduanal debe presentar el pedimento para la mayoría de las importaciones formales." }
  },
  {
    id: "CO",
    name: { en: "Colombia", es: "Colombia" },
    agency: { en: "DIAN (Dirección de Impuestos y Aduanas Nacionales)", es: "DIAN (Dirección de Impuestos y Aduanas Nacionales)" },
    portal: "VUCE (Ventanilla Única de Comercio Exterior)",
    taxes: { en: "Ad valorem duty + 19% VAT (IVA)", es: "Arancel ad valorem + 19% de IVA" },
    notes: { en: "INVIMA registration required for food, cosmetics, and pharmaceutical imports.", es: "Se requiere registro del INVIMA para importaciones de alimentos, cosméticos y productos farmacéuticos." }
  },
  {
    id: "PE",
    name: { en: "Peru", es: "Perú" },
    agency: { en: "SUNAT (Superintendencia Nacional de Aduanas y de Administración Tributaria)", es: "SUNAT (Superintendencia Nacional de Aduanas y de Administración Tributaria)" },
    portal: "VUCE Perú",
    taxes: { en: "Ad valorem duty + 18% IGV (VAT)", es: "Arancel ad valorem + 18% de IGV" },
    notes: { en: "SENASA/DIGESA sanitary permits required for agricultural and food products.", es: "Se requieren permisos sanitarios de SENASA/DIGESA para productos agrícolas y alimentarios." }
  },
  {
    id: "CL",
    name: { en: "Chile", es: "Chile" },
    agency: { en: "Servicio Nacional de Aduanas (Chilean Customs)", es: "Servicio Nacional de Aduanas" },
    portal: "SICEX (Sistema Integrado de Comercio Exterior)",
    taxes: { en: "Ad valorem duty + 19% IVA", es: "Arancel ad valorem + 19% de IVA" },
    notes: { en: "SAG (Servicio Agrícola y Ganadero) clearance required for agricultural imports.", es: "Se requiere autorización del SAG (Servicio Agrícola y Ganadero) para importaciones agrícolas." }
  },
  {
    id: "BR",
    name: { en: "Brazil", es: "Brasil" },
    agency: { en: "Receita Federal do Brasil", es: "Receita Federal do Brasil" },
    portal: "Siscomex (Sistema Integrado de Comércio Exterior)",
    taxes: { en: "Import duty (II) + IPI + PIS/COFINS + ICMS (state-level)", es: "Impuesto de Importación (II) + IPI + PIS/COFINS + ICMS (estatal)" },
    notes: { en: "Radar license (Receita Federal registration) required before an entity can import.", es: "Se requiere la licencia Radar (registro ante la Receita Federal) antes de que una entidad pueda importar." }
  },
  {
    id: "CA",
    name: { en: "Central America (CAFTA-DR region)", es: "Centroamérica (región CAFTA-DR)" },
    agency: { en: "National customs authority varies by country (e.g. DGA in Costa Rica, DGT in Guatemala)", es: "La autoridad aduanera nacional varía por país (p. ej. DGA en Costa Rica, DGT en Guatemala)" },
    portal: { en: "Varies by country — most use a regional single-window system under SIECA coordination", es: "Varía por país — la mayoría usa un sistema regional de ventanilla única bajo coordinación de la SIECA" },
    taxes: { en: "Ad valorem duty + VAT (rate varies by country, ~12-15%)", es: "Arancel ad valorem + IVA (la tasa varía por país, ~12-15%)" },
    notes: { en: "CAFTA-DR preferential access requires a valid Certificate of Origin with the yarn-forward rule (textiles) or applicable product-specific rule.", es: "El acceso preferencial de CAFTA-DR requiere un Certificado de Origen válido con la regla \"yarn-forward\" (textiles) o la regla específica de producto aplicable." }
  }
];

const CHECKLIST_ITEMS = [
  { id: "invoice", label: { en: "Commercial Invoice", es: "Factura Comercial" } },
  { id: "packing", label: { en: "Packing List", es: "Lista de Empaque" } },
  { id: "bol", label: { en: "Bill of Lading (B/L) or Air Waybill (AWB)", es: "Conocimiento de Embarque (B/L) o Guía Aérea (AWB)" } },
  { id: "origin", label: { en: "Certificate of Origin (for FTA preference claims)", es: "Certificado de Origen (para reclamar preferencia de TLC)" } },
  { id: "health", label: { en: "Health/Sanitary/Phytosanitary Certificate (if applicable)", es: "Certificado Sanitario/Fitosanitario (si aplica)" } },
  { id: "insurance", label: { en: "Insurance Certificate (if CIF/CIP)", es: "Certificado de Seguro (si es CIF/CIP)" } },
  { id: "broker-poa", label: { en: "Customs Broker Power of Attorney", es: "Poder para Agente Aduanal" } },
  { id: "importer-id", label: { en: "Importer Tax ID / Registration (RFC, RUT, RUC, CNPJ, etc.)", es: "ID Fiscal / Registro del Importador (RFC, RUT, RUC, CNPJ, etc.)" } }
];

// ---------- 6. Legal Sources / Knowledge Base ----------
// A citation index of official primary sources, grouped by jurisdiction.
// This is the AI Advisor's "knowledge base": the chat searches these
// entries by keyword and cites the matching official source — it does
// NOT download, store, or reproduce the underlying legal text. Always
// read the official source directly before relying on it.
const LEGAL_SOURCES = [
  // United States
  {
    id: "us-19cfr",
    region: { en: "United States", es: "Estados Unidos" },
    title: "19 CFR — Customs Duties (Title 19, Chapter I)",
    issuer: "Electronic Code of Federal Regulations (eCFR)",
    subject: { en: "Complete federal customs regulations: entry procedures, country-of-origin marking, valuation, recordkeeping, and Section 321 de minimis entries.", es: "Reglamento aduanero federal completo: procedimientos de entrada, marcado de país de origen, valoración, mantenimiento de registros y entradas de minimis de la Sección 321." },
    url: "https://www.ecfr.gov/current/title-19/chapter-I",
    keywords: ["19 cfr", "cfr", "entry procedures", "origin marking", "de minimis", "section 321", "recordkeeping", "valuation regulation"]
  },
  {
    id: "us-htsus",
    region: { en: "United States", es: "Estados Unidos" },
    title: "HTSUS — Harmonized Tariff Schedule of the United States",
    issuer: "U.S. International Trade Commission (USITC)",
    subject: { en: "Statutory tariff rates, General Notes (trade agreements, rules of origin), chapter/subheading legal notes, and General Rules of Interpretation (GRIs).", es: "Tasas arancelarias legales, Notas Generales (acuerdos comerciales, reglas de origen), notas legales de capítulo/subpartida y Reglas Generales de Interpretación (RGI)." },
    url: "https://hts.usitc.gov/search",
    keywords: ["htsus", "hts", "tariff schedule", "gri", "general rules of interpretation", "tariff rate", "usitc"]
  },
  {
    id: "us-cross",
    region: { en: "United States", es: "Estados Unidos" },
    title: "CROSS — Customs Rulings Online Search System",
    issuer: "U.S. Customs and Border Protection (CBP)",
    subject: { en: "Legally binding administrative rulings issued by CBP covering tariff classification, valuation, and marking.", es: "Resoluciones administrativas legalmente vinculantes emitidas por CBP sobre clasificación arancelaria, valoración y marcado." },
    url: "https://rulings.cbp.gov/",
    keywords: ["cross", "ruling", "cbp ruling", "binding ruling", "classification ruling"]
  },
  {
    id: "us-icp",
    region: { en: "United States", es: "Estados Unidos" },
    title: "Informed Compliance Publications (ICPs)",
    issuer: "U.S. Customs and Border Protection (CBP)",
    subject: { en: "CBP's mandatory compliance guidelines covering Reasonable Care, Customs Valuation, Bona Fide Sales, and specific commodity classifications.", es: "Guías de cumplimiento obligatorio de CBP sobre Debido Cuidado, Valoración Aduanera, Ventas de Buena Fe y clasificaciones de mercancías específicas." },
    url: "https://www.cbp.gov/trade/rulings/informed-compliance-publications",
    keywords: ["icp", "informed compliance", "reasonable care", "bona fide sale"]
  },
  {
    id: "us-fda",
    region: { en: "United States", es: "Estados Unidos" },
    title: "FDA Import Program (21 CFR)",
    issuer: "U.S. Food and Drug Administration (FDA)",
    subject: { en: "Foreign facility registrations, Prior Notice requirements, and labeling regulations for food, supplements, cosmetics, and medical devices.", es: "Registro de instalaciones extranjeras, requisitos de Aviso Previo y regulaciones de etiquetado para alimentos, suplementos, cosméticos y dispositivos médicos." },
    url: "https://www.fda.gov/industry/import-program-food-and-drug-administration-fda",
    keywords: ["fda", "prior notice", "facility registration", "fsvp", "food safety", "cosmetics", "medical device", "21 cfr"]
  },

  // Peru
  {
    id: "pe-customs-law",
    region: { en: "Peru", es: "Perú" },
    title: "General Customs Law (Legislative Decree No. 1053) & Regulations",
    issuer: "SUNAT",
    subject: { en: "Primary customs law: clearing regimes, mandatory advance declarations, customs warehousing, and the administrative infractions/penalties regime.", es: "Ley aduanera primaria: regímenes de despacho, declaraciones anticipadas obligatorias, almacenamiento aduanero y régimen de infracciones/sanciones administrativas." },
    url: "https://www.sunat.gob.pe/legislacion/procedim/normasadua/gja-03.htm",
    keywords: ["peru customs law", "legislative decree 1053", "sunat", "advance declaration", "customs warehousing peru"]
  },
  {
    id: "pe-despa-pg01",
    region: { en: "Peru", es: "Perú" },
    title: "Import for Consumption Procedure (DESPA-PG.01)",
    issuer: "SUNAT",
    subject: { en: "Operational procedure governing formal import-for-consumption customs clearance in Peru.", es: "Procedimiento operativo que rige el despacho aduanero formal de importación para el consumo en Perú." },
    url: "https://www.sunat.gob.pe/legislacion/procedim/despacho/importacion/importac/procGeneral/index.html",
    keywords: ["despa-pg.01", "import for consumption", "peru import procedure"]
  },
  {
    id: "pe-despa-pg28",
    region: { en: "Peru", es: "Perú" },
    title: "Express Courier Shipments Procedure (DESPA-PG.28)",
    issuer: "SUNAT",
    subject: { en: "Fast-track clearance procedure for express courier and small-parcel shipments.", es: "Procedimiento de despacho rápido para envíos de mensajería urgente y paquetería pequeña." },
    url: "https://www.sunat.gob.pe/legislacion/procedim/despacho/enviosEntregaRapida/procGeneral/index.html",
    keywords: ["despa-pg.28", "courier peru", "express shipment peru", "small parcel peru"]
  },
  {
    id: "pe-despa-pe0006",
    region: { en: "Peru", es: "Perú" },
    title: "Restricted and Prohibited Goods Procedure (DESPA-PE.00.06)",
    issuer: "SUNAT",
    subject: { en: "Procedure covering goods subject to import restrictions or prohibitions in Peru.", es: "Procedimiento que cubre mercancías sujetas a restricciones o prohibiciones de importación en Perú." },
    url: "https://www.sunat.gob.pe/legislacion/procedim/despacho/especiales/pe-00-06.htm",
    keywords: ["despa-pe.00.06", "restricted goods peru", "prohibited goods peru"]
  },
  {
    id: "pe-tariff",
    region: { en: "Peru", es: "Perú" },
    title: "National Customs Tariff Schedule (NANDINA-based)",
    issuer: "SUNAT / ADUANET",
    subject: { en: "10-digit tariff code based on the Andean Community NANDINA nomenclature, ad valorem duties, VAT/IPM tax rates, and excise taxes.", es: "Código arancelario de 10 dígitos basado en la nomenclatura NANDINA de la Comunidad Andina, aranceles ad valorem, tasas de IGV/IPM e impuestos selectivos." },
    url: "https://www.aduanet.gob.pe/servlet/Aduana.clases.arancel.SAran01S1",
    keywords: ["nandina", "peru tariff", "igv peru", "ipm peru", "aduanet"]
  },
  {
    id: "pe-vuce",
    region: { en: "Peru", es: "Perú" },
    title: "Single Window for Foreign Trade (VUCE Peru)",
    issuer: "Government of Peru",
    subject: { en: "Technical, sanitary, and homologation permits issued by DIGESA, DIGEMID, SENASA, and MTC.", es: "Permisos técnicos, sanitarios y de homologación emitidos por DIGESA, DIGEMID, SENASA y el MTC." },
    url: "https://www.vuce.gob.pe/",
    keywords: ["vuce peru", "digesa", "digemid", "senasa", "mtc peru"]
  },

  // Mexico
  {
    id: "mx-customs-law",
    region: { en: "Mexico", es: "México" },
    title: "Customs Law and General Regulations (Ley Aduanera)",
    issuer: "Cámara de Diputados",
    subject: { en: "Federal customs statute: entry regimes, formal pedimento declarations, and legal liabilities of customs brokers (agentes aduanales).", es: "Estatuto aduanero federal: regímenes de entrada, declaraciones formales de pedimento y responsabilidades legales de los agentes aduanales." },
    url: "https://www.diputados.gob.mx/LeyesBiblio/ref/ladua.htm",
    keywords: ["ley aduanera", "mexico customs law", "pedimento", "agente aduanal", "customs broker mexico"]
  },
  {
    id: "mx-rgce",
    region: { en: "Mexico", es: "México" },
    title: "General Foreign Trade Rules (RGCE)",
    issuer: "SAT / ANAM",
    subject: { en: "Annual operational and procedural administrative rules (e.g. Rule 3.7.3/3.7.5 courier thresholds, Rule 1.3.1 Importers Registry requirements).", es: "Reglas administrativas operativas y procedimentales anuales (p. ej. Regla 3.7.3/3.7.5 umbrales de mensajería, Regla 1.3.1 requisitos del Registro de Importadores)." },
    url: "https://www.sat.gob.mx/normatividad/62575/reglas-generales-de-comercio-exterior-(rgce)",
    keywords: ["rgce", "reglas generales de comercio exterior", "importers registry mexico", "courier threshold mexico"]
  },
  {
    id: "mx-ligie",
    region: { en: "Mexico", es: "México" },
    title: "LIGIE and SNICE (National Foreign Trade Information System)",
    issuer: "Ministry of Economy (Secretaría de Economía)",
    subject: { en: "General Import and Export Tax Law, 10-digit tariff classification (8-digit tariff fraction + 2-digit NICO), and NOM technical non-tariff regulations.", es: "Ley de los Impuestos Generales de Importación y Exportación, clasificación arancelaria de 10 dígitos (fracción arancelaria de 8 dígitos + NICO de 2 dígitos) y regulaciones técnicas no arancelarias NOM." },
    url: "https://www.snice.gob.mx/",
    keywords: ["ligie", "snice", "tigie", "nico", "nom", "tariff fraction mexico"]
  },
  {
    id: "mx-vucem",
    region: { en: "Mexico", es: "México" },
    title: "Mexican Digital Foreign Trade Window (VUCEM)",
    issuer: "Government of Mexico",
    subject: { en: "Digital management of e-documents, Value Electronic Receipts (COVE), and prior import licenses.", es: "Gestión digital de documentos electrónicos, Comprobantes de Valor Electrónico (COVE) y permisos previos de importación." },
    url: "https://www.ventanillaunica.gob.mx/",
    keywords: ["vucem", "cove", "prior import license mexico"]
  },

  // Colombia
  {
    id: "co-decree-1165",
    region: { en: "Colombia", es: "Colombia" },
    title: "Customs Statute (Decree 1165 of 2019)",
    issuer: "DIAN",
    subject: { en: "Primary national customs framework: entry regimes, express courier/postal traffic rules, valuation guidelines, and sanction procedures.", es: "Marco aduanero nacional primario: regímenes de entrada, reglas de tráfico postal y mensajería urgente, lineamientos de valoración y procedimientos sancionatorios." },
    url: "https://www.dian.gov.co/aduanas/Regimen-de-Aduanas/Presentacion/Documents/Presentacion_1165_2019.pdf",
    keywords: ["decree 1165", "colombia customs statute", "dian regime", "postal traffic colombia"]
  },
  {
    id: "co-muisca",
    region: { en: "Colombia", es: "Colombia" },
    title: "Electronic Tariff Schedule (Muisca)",
    issuer: "DIAN",
    subject: { en: "10-digit tariff schedule based on NANDINA, applicable duties, and VAT/IVA obligations.", es: "Arancel de 10 dígitos basado en NANDINA, aranceles aplicables y obligaciones de IVA." },
    url: "https://muisca.dian.gov.co/WebArancel/DefMenuConsultas.faces",
    keywords: ["muisca", "colombia tariff", "iva colombia", "dian arancel"]
  },
  {
    id: "co-vuce",
    region: { en: "Colombia", es: "Colombia" },
    title: "Single Window for Foreign Trade (VUCE Colombia)",
    issuer: "Government of Colombia",
    subject: { en: "Prior import authorizations, agricultural inspections (ICA), and health/food/drug registrations (INVIMA).", es: "Autorizaciones previas de importación, inspecciones agrícolas (ICA) y registros sanitarios/alimentarios/farmacéuticos (INVIMA)." },
    url: "https://www.vuce.gob.co/",
    keywords: ["vuce colombia", "ica colombia", "invima"]
  },

  // Chile
  {
    id: "cl-ordinance",
    region: { en: "Chile", es: "Chile" },
    title: "Customs Ordinance (DFL No. 30) & Compendium of Customs Regulations",
    issuer: "Servicio Nacional de Aduanas / BCN",
    subject: { en: "Comprehensive Chilean customs statute, simplified courier import clearances (DIPS), and formal import entry declarations (DIN).", es: "Estatuto aduanero chileno integral, despachos simplificados de envíos de mensajería (DIPS) y declaraciones formales de ingreso de importación (DIN)." },
    url: "https://www.bcn.cl/leychile/navegar?i=283482&f=2008-11-17",
    keywords: ["dfl 30", "chile customs ordinance", "dips", "din chile"]
  },
  {
    id: "cl-tariff",
    region: { en: "Chile", es: "Chile" },
    title: "National Customs Tariff Schedule",
    issuer: "Servicio Nacional de Aduanas",
    subject: { en: "8-digit tariff nomenclature based on the WCO Harmonized System, flat 6% standard ad valorem rate, and FTA preferential rates.", es: "Nomenclatura arancelaria de 8 dígitos basada en el Sistema Armonizado de la OMA, tasa ad valorem plana del 6% y tasas preferenciales de TLC." },
    url: "https://www.aduana.cl/arancel-aduanero-nacional-vigente/aduana/2018-12-13/164925.html",
    keywords: ["chile tariff", "arancel aduanero", "6% chile"]
  },

  // Brazil
  {
    id: "br-decree-6759",
    region: { en: "Brazil", es: "Brasil" },
    title: "Customs Regulations (Decree No. 6,759/2009)",
    issuer: "Receita Federal do Brasil",
    subject: { en: "Federal inspection, control, valuation, and taxation of foreign trade operations in Brazil.", es: "Fiscalización, control, valoración y tributación federal de las operaciones de comercio exterior en Brasil." },
    url: "https://www.gov.br/empresas-e-negocios/pt-br/invest-export-brasil/exportar/consulte-a-legislacao/regulamento-aduaneiro-1",
    keywords: ["decree 6759", "regulamento aduaneiro", "brazil customs regulation"]
  },
  {
    id: "br-remessa",
    region: { en: "Brazil", es: "Brasil" },
    title: "Remessa Conforme Program & RFB Normative Instructions",
    issuer: "Receita Federal do Brasil",
    subject: { en: "Cross-border e-commerce tax regimes, simplified postal clearance rules, federal import taxes, and state ICMS calculation standards.", es: "Regímenes fiscales de comercio electrónico transfronterizo, reglas simplificadas de despacho postal, impuestos federales de importación y estándares de cálculo del ICMS estatal." },
    url: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa",
    keywords: ["remessa conforme", "icms", "brazil e-commerce import", "postal clearance brazil"]
  },
  {
    id: "br-siscomex",
    region: { en: "Brazil", es: "Brasil" },
    title: "Single Foreign Trade Portal (Pucomex / SISCOMEX)",
    issuer: "Receita Federal do Brasil",
    subject: { en: "Single Import Declaration (DUIMP) architecture and Mercosur Common Nomenclature (NCM) 8-digit tariff lookup.", es: "Arquitectura de la Declaración Única de Importación (DUIMP) y consulta arancelaria de 8 dígitos de la Nomenclatura Común del Mercosur (NCM)." },
    url: "https://www.gov.br/siscomex/pt-br",
    keywords: ["siscomex", "pucomex", "duimp", "ncm", "mercosur nomenclature"]
  },

  // Argentina
  {
    id: "ar-customs-code",
    region: { en: "Argentina", es: "Argentina" },
    title: "Customs Code (Código Aduanero, Ley 22.415)",
    issuer: "AFIP — Dirección General de Aduanas",
    subject: { en: "Primary national customs statute: import/export regimes, valuation, and customs offenses/penalties.", es: "Estatuto aduanero nacional primario: regímenes de importación/exportación, valoración e infracciones/sanciones aduaneras." },
    url: "https://www.afip.gob.ar/aduana/",
    keywords: ["argentina customs code", "codigo aduanero", "afip aduana", "ley 22415"]
  },

  // Bolivia
  {
    id: "bo-customs-law",
    region: { en: "Bolivia", es: "Bolivia" },
    title: "General Customs Law (Ley General de Aduanas, Ley 1990)",
    issuer: "Aduana Nacional de Bolivia",
    subject: { en: "National customs framework: import/export regimes, valuation, and the customs brokerage system.", es: "Marco aduanero nacional: regímenes de importación/exportación, valoración y el sistema de agentes despachantes de aduana." },
    url: "https://www.aduana.gob.bo/",
    keywords: ["bolivia customs law", "ley general de aduanas", "aduana nacional bolivia"]
  },

  // Costa Rica
  {
    id: "cr-customs-law",
    region: { en: "Costa Rica", es: "Costa Rica" },
    title: "General Customs Law (Ley General de Aduanas, Ley 7557)",
    issuer: "Dirección General de Aduanas — Ministerio de Hacienda",
    subject: { en: "National customs framework, aligned with the CAUCA/RECAUCA Central American customs code.", es: "Marco aduanero nacional, alineado con el Código Aduanero Uniforme Centroamericano (CAUCA/RECAUCA)." },
    url: "https://www.hacienda.go.cr/",
    keywords: ["costa rica customs law", "ley general de aduanas", "cauca", "recauca"]
  },

  // Cuba
  {
    id: "cu-customs-system",
    region: { en: "Cuba", es: "Cuba" },
    title: "Customs System Law (Ley del Sistema Aduanero)",
    issuer: "Aduana General de la República",
    subject: { en: "Cuba's national customs framework. Note: comprehensive U.S. sanctions/embargo apply to most trade with Cuba — see the DDP scenario warning in the AI Advisor Chat.", es: "Marco aduanero nacional de Cuba. Nota: aplican sanciones/embargo integral de EE. UU. a la mayoría del comercio con Cuba — vea la advertencia del escenario DDP en el Chat Asesor IA." },
    url: "https://www.aduana.gob.cu/",
    keywords: ["cuba customs", "aduana general de la republica", "cuba embargo"]
  },

  // Dominican Republic
  {
    id: "do-customs-law",
    region: { en: "Dominican Republic", es: "República Dominicana" },
    title: "Customs Law (Ley 3489) & CAFTA-DR Implementing Rules",
    issuer: "Dirección General de Aduanas (DGA)",
    subject: { en: "National customs framework and CAFTA-DR implementing regulations for preferential trade with the U.S.", es: "Marco aduanero nacional y reglamentación de implementación del CAFTA-DR para comercio preferencial con EE. UU." },
    url: "https://www.dga.gob.do/",
    keywords: ["dominican republic customs", "ley 3489", "dga", "cafta-dr dominican republic"]
  },

  // Ecuador
  {
    id: "ec-copci",
    region: { en: "Ecuador", es: "Ecuador" },
    title: "Production, Trade and Investment Code (COPCI)",
    issuer: "SENAE — Servicio Nacional de Aduana del Ecuador",
    subject: { en: "National customs and foreign trade framework, including NANDINA-based tariff classification.", es: "Marco aduanero y de comercio exterior nacional, incluida la clasificación arancelaria basada en NANDINA." },
    url: "https://www.aduana.gob.ec/",
    keywords: ["ecuador customs", "copci", "senae", "andean community ecuador"]
  },

  // El Salvador
  {
    id: "sv-customs",
    region: { en: "El Salvador", es: "El Salvador" },
    title: "Customs Simplification Law & CAUCA/RECAUCA",
    issuer: "Dirección General de Aduanas — Ministerio de Hacienda",
    subject: { en: "National customs procedures, aligned with the CAUCA/RECAUCA Central American customs code.", es: "Procedimientos aduaneros nacionales, alineados con el Código Aduanero Uniforme Centroamericano (CAUCA/RECAUCA)." },
    url: "https://www.mh.gob.sv/",
    keywords: ["el salvador customs", "cauca", "recauca", "direccion general de aduanas el salvador"]
  },

  // Guatemala
  {
    id: "gt-customs",
    region: { en: "Guatemala", es: "Guatemala" },
    title: "Customs Law & CAUCA/RECAUCA",
    issuer: "SAT — Superintendencia de Administración Tributaria (Intendencia de Aduanas)",
    subject: { en: "National customs procedures, aligned with the CAUCA/RECAUCA Central American customs code.", es: "Procedimientos aduaneros nacionales, alineados con el Código Aduanero Uniforme Centroamericano (CAUCA/RECAUCA)." },
    url: "https://portal.sat.gob.gt/",
    keywords: ["guatemala customs", "sat guatemala", "cauca", "recauca"]
  },

  // Honduras
  {
    id: "hn-customs",
    region: { en: "Honduras", es: "Honduras" },
    title: "Customs Law & CAUCA/RECAUCA",
    issuer: "SAR — Servicio de Administración de Rentas",
    subject: { en: "National customs procedures, aligned with the CAUCA/RECAUCA Central American customs code.", es: "Procedimientos aduaneros nacionales, alineados con el Código Aduanero Uniforme Centroamericano (CAUCA/RECAUCA)." },
    url: "https://www.sar.gob.hn/",
    keywords: ["honduras customs", "sar honduras", "cauca", "recauca"]
  },

  // Nicaragua
  {
    id: "ni-customs",
    region: { en: "Nicaragua", es: "Nicaragua" },
    title: "Customs Law & CAUCA/RECAUCA",
    issuer: "DGA — Dirección General de Servicios Aduaneros",
    subject: { en: "National customs procedures, aligned with the CAUCA/RECAUCA Central American customs code.", es: "Procedimientos aduaneros nacionales, alineados con el Código Aduanero Uniforme Centroamericano (CAUCA/RECAUCA)." },
    url: "https://www.dga.gob.ni/",
    keywords: ["nicaragua customs", "dga nicaragua", "cauca", "recauca"]
  },

  // Panama
  {
    id: "pa-customs-law",
    region: { en: "Panama", es: "Panamá" },
    title: "General Customs Law (Ley 20 de 2012)",
    issuer: "Autoridad Nacional de Aduanas (ANA)",
    subject: { en: "National customs framework and U.S.–Panama Trade Promotion Agreement implementing rules.", es: "Marco aduanero nacional y reglamentación de implementación del TLC EE. UU.–Panamá." },
    url: "https://www.ana.gob.pa/",
    keywords: ["panama customs law", "ley 20 de 2012", "ana panama", "us panama tpa"]
  },

  // Paraguay
  {
    id: "py-customs-code",
    region: { en: "Paraguay", es: "Paraguay" },
    title: "Customs Code (Código Aduanero, Ley 2422/04)",
    issuer: "Dirección Nacional de Aduanas (DNA)",
    subject: { en: "National customs framework and Mercosur Common Nomenclature (NCM) tariff classification.", es: "Marco aduanero nacional y clasificación arancelaria de la Nomenclatura Común del Mercosur (NCM)." },
    url: "https://www.aduana.gov.py/",
    keywords: ["paraguay customs code", "codigo aduanero paraguay", "dna paraguay", "mercosur ncm"]
  },

  // Uruguay
  {
    id: "uy-carou",
    region: { en: "Uruguay", es: "Uruguay" },
    title: "Customs Code of Uruguay (CAROU, Ley 19.276)",
    issuer: "Dirección Nacional de Aduanas (DNA)",
    subject: { en: "National customs framework and Mercosur Common Nomenclature (NCM) tariff classification.", es: "Marco aduanero nacional y clasificación arancelaria de la Nomenclatura Común del Mercosur (NCM)." },
    url: "https://www.aduanas.gub.uy/",
    keywords: ["uruguay customs", "carou", "ley 19276", "dna uruguay", "mercosur ncm"]
  },

  // Venezuela
  {
    id: "ve-customs-law",
    region: { en: "Venezuela", es: "Venezuela" },
    title: "Organic Customs Law (Ley Orgánica de Aduanas)",
    issuer: "SENIAT — Servicio Nacional Integrado de Administración Aduanera y Tributaria",
    subject: { en: "Venezuela's national customs framework. Note: trade with Venezuela may be subject to U.S. sanctions — verify OFAC compliance before shipping.", es: "Marco aduanero nacional de Venezuela. Nota: el comercio con Venezuela puede estar sujeto a sanciones de EE. UU. — verifique el cumplimiento con OFAC antes de enviar." },
    url: "https://www.seniat.gob.ve/",
    keywords: ["venezuela customs", "ley organica de aduanas", "seniat", "venezuela sanctions"]
  },

  // Supranational
  {
    id: "can-571",
    region: { en: "Supranational", es: "Supranacional" },
    title: "Andean Community (CAN) — Customs Valuation",
    issuer: "Comunidad Andina",
    subject: { en: "Decision 571 (Customs Value of Imported Goods) and Resolution 1684 (Community Valuation Regulations).", es: "Decisión 571 (Valor en Aduana de las Mercancías Importadas) y Resolución 1684 (Reglamento Comunitario de Valoración)." },
    url: "https://www.comunidadandina.org/",
    keywords: ["decision 571", "can valuation", "andean community", "resolution 1684"]
  },
  {
    id: "wto-valuation",
    region: { en: "Supranational", es: "Supranacional" },
    title: "WTO Customs Valuation Agreement (GATT Article VII)",
    issuer: "World Trade Organization",
    subject: { en: "Agreement on Implementation of Article VII of GATT 1994 — the customs valuation agreement and its six valuation methods.", es: "Acuerdo relativo a la Aplicación del Artículo VII del GATT de 1994 — el acuerdo de valoración aduanera y sus seis métodos de valoración." },
    url: "https://www.wto.org/english/docs_e/legal_e/20-val_01_e.htm",
    keywords: ["wto valuation", "gatt article vii", "six valuation methods", "transaction value method"]
  },
  {
    id: "usmca-legal",
    region: { en: "Supranational", es: "Supranacional" },
    title: "USMCA / T-MEC Legal Texts",
    issuer: "Office of the U.S. Trade Representative (USTR)",
    subject: { en: "Official treaty chapters: Chapter 4 (Rules of Origin), Chapter 5 (Origin Procedures), Chapter 7 (Customs Administration and Trade Facilitation).", es: "Capítulos oficiales del tratado: Capítulo 4 (Reglas de Origen), Capítulo 5 (Procedimientos de Origen), Capítulo 7 (Administración Aduanera y Facilitación del Comercio)." },
    url: "https://ustr.gov/trade-agreements/free-trade-agreements/united-states-mexico-canada-agreement/agreement-between",
    keywords: ["usmca text", "t-mec", "chapter 5 origin procedures", "chapter 7 customs administration"]
  }
];
