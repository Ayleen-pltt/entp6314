// Shared helper (not a page: Vercel skips api/ files that start with "_").
// Sends one email through Resend's API. Runs on the server only; reads RESEND_API_KEY.
//
// No verified domain yet, so for now:
//   - every email is sent FROM onboarding@resend.dev (Resend's shared test sender)
//   - every email goes TO RESEND_TEST_TO (the address the Resend account was opened with),
//     whatever address the seller has. Resend refuses any other address until a domain is verified.
// To email real sellers later: verify a domain in Resend, set RESEND_FROM (e.g. "VendeAI <hola@tudominio.com>")
// and remove RESEND_TEST_TO. Then each email goes to the seller's own address.
//
// sendEmail() never throws: it returns true or false, and logs why on the server.

const TIMEOUT_MS = 6000;
const TEST_FROM = 'VendeAI <onboarding@resend.dev>';

export async function sendEmail({ to, subject, html, text }) {
  const key = (process.env.RESEND_API_KEY || '').trim();
  if (!key) { console.error('RESEND_API_KEY is not set; email skipped'); return false; }
  const testTo = (process.env.RESEND_TEST_TO || '').trim();
  const from = (process.env.RESEND_FROM || '').trim() || TEST_FROM;
  const recipient = testTo || to;
  if (!recipient) { console.error('No recipient; email skipped'); return false; }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [recipient], subject, html, text }),
      signal: AbortSignal.timeout(TIMEOUT_MS)
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      console.error('Resend refused the email:', res.status, String(body.message || '').slice(0, 200));
      return false;
    }
    return true;
  } catch (e) {
    console.error('Resend unreachable:', e && e.name);
    return false;
  }
}

/* ------------------------------------------------------------------
   Email templates (es, pt, en), in the brand colors. Plain words.
------------------------------------------------------------------ */
export const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const APP_URL = 'https://vendeai-pi.vercel.app/app/';

export function layout(lang, title, paragraphs, button, link = APP_URL, foot = '') {
  return `<!DOCTYPE html><html lang="${lang}"><body style="margin:0;background:#F3ECDC;font-family:Arial,Helvetica,sans-serif;color:#111111">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3ECDC;padding:24px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px">
<tr><td style="background:#111111;border-radius:16px 16px 0 0;padding:22px 28px;font-family:Georgia,'Times New Roman',serif;font-size:24px;color:#F3ECDC">Vende<i style="color:#C9B48F">AI</i></td></tr>
<tr><td style="background:#FFFFFF;border-radius:0 0 16px 16px;padding:28px">
<h1 style="font-family:Georgia,'Times New Roman',serif;font-size:24px;line-height:1.25;margin:0 0 16px">${esc(title)}</h1>
${paragraphs.map(p => `<p style="font-size:15px;line-height:1.55;color:#4C5A62;margin:0 0 14px">${p}</p>`).join('')}
${button ? `<p style="margin:22px 0 4px"><a href="${esc(link)}" style="display:inline-block;background:#111111;color:#F3ECDC;text-decoration:none;font-weight:bold;border-radius:999px;padding:12px 24px">${esc(button)}</a></p>` : ''}
</td></tr>
<tr><td style="padding:16px 8px;font-size:12px;line-height:1.5;color:#4C5A62;text-align:center">VendeAI · ${esc(FOOT[lang] || FOOT.es)}${foot ? '<br>' + foot : ''}</td></tr>
</table></td></tr></table></body></html>`;
}
const FOOT = { es: 'Todas tus ventas en un solo lugar', pt: 'Todas as suas vendas num só lugar', en: 'All your sales in one place' };

const WELCOME = {
  es: n => ({ subject: '¡Bienvenida a VendeAI!', title: `Hola, ${n}`, button: 'Abrir VendeAI', p: [
    'Ya tienes tu cuenta. Desde hoy, todas tus ventas quedan en un solo lugar.',
    'Para empezar, anota tu primera venta como se la contarías a una amiga, por ejemplo: <i>"Vendí 2 labiales a María, pagó la mitad"</i>.',
    'VendeAI te dirá cuánto ganaste, quién te debe y qué te conviene reponer. Anotar ventas es gratis, siempre.'] }),
  pt: n => ({ subject: 'Boas-vindas ao VendeAI!', title: `Olá, ${n}`, button: 'Abrir o VendeAI', p: [
    'Sua conta está pronta. A partir de hoje, todas as suas vendas ficam num só lugar.',
    'Para começar, anote sua primeira venda como contaria para uma amiga, por exemplo: <i>"Vendi 2 batons para a Maria, ela pagou metade"</i>.',
    'O VendeAI mostra quanto você ganhou, quem te deve e o que vale a pena repor. Anotar vendas é grátis, sempre.'] }),
  en: n => ({ subject: 'Welcome to VendeAI!', title: `Hi, ${n}`, button: 'Open VendeAI', p: [
    'Your account is ready. From today, all your sales are in one place.',
    'To start, record your first sale the way you would tell a friend, for example: <i>"Sold 2 lipsticks to María, she paid half"</i>.',
    'VendeAI will tell you how much you earned, who owes you and what to restock. Recording sales is free, always.'] })
};

const RECEIPT = {
  es: (plan, price) => ({ subject: `Tu plan ${plan} de VendeAI`, title: '¡Pago recibido!', button: 'Abrir VendeAI', p: [
    `Ya tienes <b>VendeAI ${esc(plan)}</b> por <b>US$ ${esc(price)} al mes</b>. Se renueva cada mes hasta que lo canceles, y te avisamos antes de cada cobro.`,
    'Si te arrepientes en los primeros 10 días, te devolvemos todo, sin preguntas. Puedes cancelar cuando quieras desde la app.',
    'Modo de prueba: este pago se hizo en el entorno de prueba de Stripe y no se cobró dinero real.'] }),
  pt: (plan, price) => ({ subject: `Seu plano ${plan} do VendeAI`, title: 'Pagamento recebido!', button: 'Abrir o VendeAI', p: [
    `Você já tem o <b>VendeAI ${esc(plan)}</b> por <b>US$ ${esc(price)} por mês</b>. Ele se renova todo mês até você cancelar, e avisamos antes de cada cobrança.`,
    'Se você se arrepender nos primeiros 10 dias, devolvemos tudo, sem perguntas. Você pode cancelar quando quiser pelo app.',
    'Modo de teste: este pagamento foi feito no ambiente de teste da Stripe e nenhum dinheiro real foi cobrado.'] }),
  en: (plan, price) => ({ subject: `Your VendeAI ${plan} plan`, title: 'Payment received!', button: 'Open VendeAI', p: [
    `You now have <b>VendeAI ${esc(plan)}</b> for <b>US$ ${esc(price)} a month</b>. It renews every month until you cancel, and we tell you before each charge.`,
    'If you change your mind within the first 10 days, we refund everything, no questions asked. You can cancel any time in the app.',
    'Test mode: this payment was made in Stripe’s test environment and no real money was charged.'] })
};

const plain = p => p.map(x => x.replace(/<[^>]+>/g, '')).join('\n\n');

export function welcomeEmail(lang, name) {
  const l = WELCOME[lang] ? lang : 'es';
  const m = WELCOME[l](String(name || '').trim().slice(0, 40) || 'VendeAI');   // layout() escapes the title
  return { subject: m.subject, html: layout(l, m.title, m.p, m.button), text: `${m.title}\n\n${plain(m.p)}\n\n${APP_URL}` };
}

export function receiptEmail(lang, plan, price) {
  const l = RECEIPT[lang] ? lang : 'es';
  const m = RECEIPT[l](plan, price);
  return { subject: m.subject, html: layout(l, m.title, m.p, m.button), text: `${m.title}\n\n${plain(m.p)}\n\n${APP_URL}` };
}
