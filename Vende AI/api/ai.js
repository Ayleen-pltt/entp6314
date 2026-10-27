// Vercel Function: POST /api/ai
// Runs on the server only. It reads GEMINI_API_KEY from the server's environment,
// calls Google Gemini, and sends back only the answer, never the key.
//
// Three tasks, following the PRD rule "the app does all the math; the AI only reads
// sale messages and writes text":
//   sale    reads one sale message into fields; the app then checks every number.
//   advice  writes one friendly sentence per check the app already found and calculated.
//   plan    suggests one of the four plans from the seller's business answers; the app checks it.
import { GoogleGenAI, Type } from '@google/genai';

const MODEL = 'gemini-3.5-flash';
const TIMEOUT_MS = 9000;            // the browser gives up at 12 s, so answer before that
const MAX_BODY = 20000;             // bytes
const PER_MINUTE = 20;              // calls per visitor per minute (best effort, per server instance)
const LANGS = { es: 'Spanish', pt: 'Brazilian Portuguese', en: 'English' };
const CHANNELS = ['none', 'whatsapp', 'instagram', 'facebook', 'tiktok', 'mercadolibre', 'persona', 'catalogo'];
const DAYS = ['none', 'tomorrow', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

let client = null;
const hits = new Map();

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}

function tooMany(request) {
  const ip = (request.headers.get('x-forwarded-for') || 'local').split(',')[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < 60000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > PER_MINUTE;
}

const SALE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    product_id: { type: Type.STRING, nullable: true, description: 'id from the product list, or null if no product in the list matches' },
    product_words: { type: Type.STRING, nullable: true, description: 'the words the seller used for the product, only when product_id is null' },
    quantity: { type: Type.INTEGER, nullable: true },
    unit_price: { type: Type.NUMBER, nullable: true, description: 'price per unit, only if the message states it' },
    wholesale: { type: Type.BOOLEAN },
    customer_name: { type: Type.STRING, nullable: true },
    channel: { type: Type.STRING, enum: CHANNELS },
    paid: { type: Type.STRING, enum: ['all', 'half', 'none', 'amount', 'unknown'] },
    paid_amount: { type: Type.NUMBER, nullable: true },
    installments: { type: Type.INTEGER, nullable: true },
    due_day: { type: Type.STRING, enum: DAYS },
    due_date: { type: Type.STRING, nullable: true, description: 'YYYY-MM-DD, only if the message gives an exact date' }
  },
  required: ['product_id', 'quantity', 'unit_price', 'wholesale', 'customer_name', 'channel', 'paid', 'paid_amount', 'installments', 'due_day']
};

const ADVICE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    items: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: { id: { type: Type.STRING }, text: { type: Type.STRING } },
        required: ['id', 'text']
      }
    }
  },
  required: ['items']
};

const PLAN_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    tier: { type: Type.INTEGER, description: '0 Freedom, 1 Standard, 2 Medium, 3 Business' },
    why: { type: Type.STRING }
  },
  required: ['tier', 'why']
};

function salePrompt(b) {
  const products = (Array.isArray(b.products) ? b.products : []).slice(0, 200)
    .map(p => `${String(p.id).slice(0, 40)}: ${String(p.name).slice(0, 80)}`).join('\n');
  return {
    system: `You read one sale message written by a small informal seller in Latin America (Spanish, Portuguese or English).
Fill the fields from what the message says. Never guess: if something is not in the message, use null (or "unknown" / "none").
- product_id: pick the id from the seller's product list that the message refers to, allowing plurals, synonyms and other languages (for example "batons" = "Labial"). If none matches, null, and put the seller's words in product_words.
- quantity: the number of units. "una crema" means 1. If the message gives no quantity, null.
- unit_price: only if the message states a price. If the message states a total for several units, divide it. Never use a price from the product list.
- paid: "all" if paid in full, "half" if paid half, "none" if nothing paid yet (credit, installments, "me paga el viernes"), "amount" with paid_amount if a specific amount was paid, "unknown" if the message does not say.
- installments: the number of payments if the message says "en N cuotas", "em N vezes", "in N installments".
- due_day: the weekday or "tomorrow" when the rest will be paid. due_date only for an exact calendar date.
- wholesale: true only if the message says "por mayor", "al mayoreo", "no atacado" or "wholesale".
- customer_name: the buyer's name exactly as written. Not a platform name.
- channel: where the sale happened, if stated; otherwise "none".`,
    user: `Seller's product list (id: name):\n${products || '(empty)'}\n\nSale message:\n${String(b.text).slice(0, 500)}`,
    schema: SALE_SCHEMA
  };
}

function advicePrompt(b) {
  const items = (Array.isArray(b.items) ? b.items : []).slice(0, 12).map(i => ({
    id: String(i.id).slice(0, 40), kind: String(i.kind).slice(0, 20),
    facts: Object.fromEntries(Object.entries(i.facts || {}).slice(0, 8).map(([k, v]) => [String(k).slice(0, 20), String(v).slice(0, 80)])),
    draft: String(i.draft || '').slice(0, 300)
  }));
  return {
    system: `You are the assistant inside VendeAI, an app for small informal sellers. Write in ${LANGS[b.lang] || 'Spanish'}, warm and plain, like a helpful friend, using "tú" in Spanish and "você" in Portuguese.
For each item, rewrite the draft as one or two short sentences (at most 220 characters) that say what happened and what to do.
Rules:
- Use only the numbers, amounts and dates that appear in the item's facts, written exactly as they appear there. Never add, change or calculate a number.
- No jargon, no emojis, no greetings, no bullet points.
- Return every item with its same id.
Seller's business: ${String(b.sector || 'unknown').slice(0, 60)}.`,
    user: JSON.stringify(items),
    schema: ADVICE_SCHEMA
  };
}

function planPrompt(b) {
  const clip = (v, n) => String(v ?? '').slice(0, n);
  const biz = Object.fromEntries(Object.entries(b.business || {}).slice(0, 12).map(([k, v]) =>
    [clip(k, 20), Array.isArray(v) ? v.slice(0, 10).map(x => clip(x, 40)) : clip(v, 60)]));
  const tiers = (Array.isArray(b.tiers) ? b.tiers : []).slice(0, 4).map(x => ({ tier: Number(x.tier), name: clip(x.name, 20), price: clip(x.price, 10), includes: clip(x.includes, 200) }));
  return {
    system: `You are the assistant inside VendeAI, an app for small informal sellers in Latin America. Write in ${LANGS[b.lang] || 'Spanish'}, warm and plain, using "tú" in Spanish and "você" in Portuguese.
From what the seller told us about their business, pick the ONE plan that fits them best.
- Pick the cheapest plan that covers what they actually need. If the free plan is enough, pick it. Never push a bigger plan without a reason from their answers.
- why: one or two short sentences (at most 220 characters), spoken directly to the seller ("tú" / "você" / "you"), saying why this plan fits them, based on their answers. Mention the plan by name. The only number you may write is that plan's price, exactly as given. No other numbers, no emojis, no greetings.`,
    user: `Seller's answers: ${JSON.stringify(biz)}\n\nPlans (each includes the one before):\n${JSON.stringify(tiers)}`,
    schema: PLAN_SCHEMA
  };
}

export async function POST(request) {
  const raw = await request.text();
  if (raw.length > MAX_BODY) return json(413, { error: 'down' });
  if (tooMany(request)) return json(429, { error: 'limit' });
  let body;
  try { body = JSON.parse(raw); } catch { return json(400, { error: 'down' }); }

  let prompt;
  if (body.task === 'sale' && typeof body.text === 'string' && body.text.trim()) prompt = salePrompt(body);
  else if (body.task === 'advice' && Array.isArray(body.items) && body.items.length) prompt = advicePrompt(body);
  else if (body.task === 'plan' && body.business && Array.isArray(body.tiers)) prompt = planPrompt(body);
  else return json(400, { error: 'down' });

  if (!process.env.GEMINI_API_KEY) { console.error('GEMINI_API_KEY is not set'); return json(503, { error: 'down' }); }
  client = client || new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  try {
    const res = await client.models.generateContent({
      model: MODEL,
      contents: prompt.user,
      config: {
        systemInstruction: prompt.system,
        responseMimeType: 'application/json',
        responseSchema: prompt.schema,
        temperature: body.task === 'sale' ? 0 : 0.6,
        thinkingConfig: { thinkingLevel: 'minimal' }, // fastest; reading a sale needs no long reasoning
        abortSignal: AbortSignal.timeout(TIMEOUT_MS)
      }
    });
    const out = JSON.parse(res.text);
    return json(200, body.task === 'sale' ? { sale: out } : body.task === 'plan' ? { plan: out } : { items: out.items || [] });
  } catch (e) {
    // Only a short code goes back to the browser; the details stay in the server log.
    console.error('Gemini call failed:', e && e.name, e && e.status, String(e && e.message).slice(0, 200));
    if (e && (e.name === 'TimeoutError' || e.name === 'AbortError')) return json(504, { error: 'slow' });
    if (e && e.status === 429) return json(429, { error: 'limit' });   // free usage limit reached
    if (e && e.status === 503) return json(503, { error: 'busy' });    // Google is overloaded right now
    return json(502, { error: 'down' });
  }
}
