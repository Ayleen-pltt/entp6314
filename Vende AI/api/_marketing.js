// Marketing emails (helper, not a page). Sent only to sellers who said yes to
// "novedades por email" (user_metadata.marketing === true). Every one ends with
// why they got it and a link to stop them (APP_URL#email-off).
//
//   newsEmail(lang, name, edition)   news: what is new in VendeAI, plus a tip; same for everyone
//   upgradeEmail(lang, name)         Freedom sellers: what Standard does for their money
//   tipsEmail(lang, name, tier)      paying sellers: how to get the most from their plan,
//                                    and what the next plan adds (Business gets tips only)
//
// The app does the math; these emails never quote a seller's own numbers.
import { layout, esc, APP_URL } from './_email.js';

const PLANS = { 1: ['Standard', '5.99'], 2: ['Medium', '9.99'], 3: ['Business', '19.99'] };

const FOOT = {
  es: `Recibes este email porque aceptaste recibir novedades de VendeAI. <a href="${APP_URL}#email-off" style="color:#4C5A62">Dejar de recibirlos</a>.`,
  pt: `Você recebe este email porque aceitou receber novidades do VendeAI. <a href="${APP_URL}#email-off" style="color:#4C5A62">Parar de receber</a>.`,
  en: `You get this email because you said yes to VendeAI news. <a href="${APP_URL}#email-off" style="color:#4C5A62">Stop these emails</a>.`
};
const FOOT_TEXT = {
  es: `Para dejar de recibir estos emails: ${APP_URL}#email-off`,
  pt: `Para parar de receber estes emails: ${APP_URL}#email-off`,
  en: `To stop these emails: ${APP_URL}#email-off`
};
const L = lang => (FOOT[lang] ? lang : 'es');
const list = items => `<ul style="padding-left:18px;margin:0;color:#4C5A62">${items.map(i => `<li style="margin:0 0 10px">${i}</li>`).join('')}</ul>`;
const plain = p => p.map(x => x.replace(/<li[^>]*>/g, '\n• ').replace(/<[^>]+>/g, '').trim()).join('\n\n');

function build(lang, m, link) {
  return {
    subject: m.subject,
    html: layout(lang, m.title, m.p, m.button, link, FOOT[lang]),
    text: `${m.title}\n\n${plain(m.p)}\n\n${m.button}: ${link}\n\n${FOOT_TEXT[lang]}`
  };
}

/* ------------------------------------------------------------------
   News. Edit EDITION for each send; the layout stays the same.
------------------------------------------------------------------ */
export const EDITION = {
  es: { label: 'octubre 2026', items: [
    ['Te sugerimos el plan que te conviene', 'Cuéntanos de tu negocio y la inteligencia artificial te recomienda un plan, con la razón. Si Freedom te alcanza, te lo dice.'],
    ['VendeAI ya se instala como app', 'Ábrela en tu teléfono y toca "Instalar": se abre con un toque y funciona aunque no tengas internet.'],
    ['Todas tus ventas en un solo lugar', 'Trae las ventas de Mercado Libre, tus redes o tu Excel desde la pestaña "Conectar".']],
    tip: 'Anota cada venta apenas la cierras, aunque sea con un mensaje corto. Al final de la semana sabrás exactamente cuánto ganaste.' },
  pt: { label: 'outubro 2026', items: [
    ['Sugerimos o plano que combina com você', 'Conte do seu negócio e a inteligência artificial recomenda um plano, com o motivo. Se o Freedom basta, ela fala.'],
    ['O VendeAI já instala como app', 'Abra no celular e toque em "Instalar": abre com um toque e funciona mesmo sem internet.'],
    ['Todas as suas vendas num só lugar', 'Traga as vendas do Mercado Livre, das redes ou do seu Excel pela aba "Conectar".']],
    tip: 'Anote cada venda assim que fechar, mesmo com uma mensagem curta. No fim da semana você sabe exatamente quanto ganhou.' },
  en: { label: 'October 2026', items: [
    ['We suggest the plan that suits you', 'Tell us about your business and the AI recommends a plan, with the reason. If Freedom is enough, it says so.'],
    ['VendeAI now installs as an app', 'Open it on your phone and tap "Install": it opens with one tap and works even without internet.'],
    ['All your sales in one place', 'Bring in sales from Mercado Libre, your social accounts or your Excel from the "Connect" tab.']],
    tip: 'Record each sale as soon as you close it, even with a short message. At the end of the week you will know exactly what you earned.' }
};

export function newsEmail(lang, name, edition = EDITION) {
  const l = L(lang), e = edition[l] || edition.es;
  const T = { es: ['Novedades de VendeAI', 'Consejo del mes', 'Abrir VendeAI', `Hola, ${name}. Esto es lo nuevo de ${e.label}:`],
              pt: ['Novidades do VendeAI', 'Dica do mês', 'Abrir o VendeAI', `Olá, ${name}. Isto é o que tem de novo em ${e.label}:`],
              en: ['VendeAI news', 'Tip of the month', 'Open VendeAI', `Hi, ${name}. Here is what is new in ${e.label}:`] }[l];
  return build(l, {
    subject: `${T[0]} · ${e.label}`, title: T[0], button: T[2],
    p: [esc(T[3]), list(e.items.map(([h, b]) => `<b style="color:#111111">${esc(h)}.</b> ${esc(b)}`)), `<b style="color:#111111">${esc(T[1])}:</b> ${esc(e.tip)}`]
  }, APP_URL);
}

/* ------------------------------------------------------------------
   Freedom -> Standard
------------------------------------------------------------------ */
const UPGRADE = {
  es: n => ({ subject: '¿Cuánto te deja de verdad cada venta?', title: 'Que cada precio te deje ganancia', button: 'Ver Standard por US$ 5.99',
    p: [`Hola, ${esc(n)}. Con Freedom ya sabes cuánto vendes y quién te debe. Con <b style="color:#111111">Standard</b> sabes además si cada precio te conviene.`,
      list(['<b style="color:#111111">Te avisa</b> cuando un producto está por debajo o muy cerca de lo que te cuesta.',
        '<b style="color:#111111">Te sugiere un precio</b> que cubre el producto, el envío y el empaque.',
        '<b style="color:#111111">Sin cuentas a mano:</b> la app hace los cálculos con lo que ya anotaste.']),
      'Un precio mal puesto se repite en cada venta. Por ejemplo, 20 ventas al mes con 1.50 de menos son 30 que se te van cada mes, más que lo que cuesta Standard.',
      'Cuesta US$ 5.99 al mes y lo cancelas cuando quieras. Si en los primeros 10 días no te convence, te devolvemos todo.'] }),
  pt: n => ({ subject: 'Quanto cada venda te deixa de verdade?', title: 'Que cada preço te dê lucro', button: 'Ver o Standard por US$ 5.99',
    p: [`Olá, ${esc(n)}. Com o Freedom você já sabe quanto vende e quem te deve. Com o <b style="color:#111111">Standard</b> você sabe também se cada preço vale a pena.`,
      list(['<b style="color:#111111">Avisa</b> quando um produto está abaixo ou muito perto do que te custa.',
        '<b style="color:#111111">Sugere um preço</b> que cobre o produto, o frete e a embalagem.',
        '<b style="color:#111111">Sem contas na mão:</b> o app calcula com o que você já anotou.']),
      'Um preço errado se repete em cada venda. Por exemplo, 20 vendas por mês com 1,50 a menos são 30 que vão embora todo mês, mais do que custa o Standard.',
      'Custa US$ 5.99 por mês e você cancela quando quiser. Se nos primeiros 10 dias não gostar, devolvemos tudo.'] }),
  en: n => ({ subject: 'How much does each sale really leave you?', title: 'Make every price pay off', button: 'See Standard for US$ 5.99',
    p: [`Hi, ${esc(n)}. With Freedom you already know how much you sell and who owes you. With <b style="color:#111111">Standard</b> you also know whether each price is worth it.`,
      list(['<b style="color:#111111">It warns you</b> when a product is priced below, or too close to, what it costs you.',
        '<b style="color:#111111">It suggests a price</b> that covers the product, shipping and packaging.',
        '<b style="color:#111111">No math by hand:</b> the app works it out from what you already recorded.']),
      'A wrong price repeats on every sale. For example, 20 sales a month at 1.50 too little is 30 lost every month, more than Standard costs.',
      'It costs US$ 5.99 a month and you can cancel any time. If it does not convince you in the first 10 days, we refund everything.'] })
};
export function upgradeEmail(lang, name) {
  const l = L(lang);
  return build(l, UPGRADE[l](name), APP_URL + '#planes');
}

/* ------------------------------------------------------------------
   Paying sellers: how to use your plan + what the next plan adds
------------------------------------------------------------------ */
const TIPS = {
  es: {
    title: p => `Saca más provecho de ${p}`, subject: p => `3 formas de usar mejor tu plan ${p}`,
    hello: (n, p) => `Hola, ${esc(n)}. Gracias por usar VendeAI ${esc(p)}. Así le sacas más provecho:`,
    how: {
      1: ['Abre <b style="color:#111111">Cómo te va</b> y mira <b style="color:#111111">Tu asistente</b>: cuando aparece "Precio", te muestra el precio que cubre todo lo que te cuesta.',
          'Anota el costo de envío y empaque en cada producto: así el precio sugerido es exacto.',
          'Revisa tus 3 productos que más vendes: un pequeño ajuste ahí se nota en todo el mes.'],
      2: ['En <b style="color:#111111">Quién te debe</b>, toca el recordatorio y envíalo por WhatsApp: el mensaje ya va escrito, amable y con el monto exacto.',
          'Cuando te paguen, toca "Recibí": la deuda se actualiza sola.',
          'Si vendes en cuotas, escribe "en 3 cuotas" al anotar la venta y la app arma las fechas de pago.'],
      3: ['Antes de cada campaña de catálogo, mira <b style="color:#111111">Lo que tienes</b>: te avisa qué se está acabando para pedirlo a tiempo.',
          'Usa los mensajes de promoción listos para enviar a tus clientas por WhatsApp o Instagram.',
          'Mira <b style="color:#111111">Dónde vendes más</b> para saber qué canal te deja más y dónde poner tu energía.']
    },
    next: {
      1: ['Medium', '9.99', 'Si te deben, <b style="color:#111111">Medium</b> te prepara recordatorios amables listos para enviar por WhatsApp a cada persona que te debe, con el monto y la fecha. Cobras sin incomodar a nadie.'],
      2: ['Business', '19.99', 'Si vendes por catálogo o haces campañas, <b style="color:#111111">Business</b> te da mensajes de promoción listos y te dice qué reponer antes de cada campaña, para no quedarte sin lo que más se vende.']
    },
    up: (p, price) => `Subir a ${p} por US$ ${price}`, open: 'Abrir VendeAI', nextLabel: 'Tu siguiente paso'
  },
  pt: {
    title: p => `Aproveite mais o ${p}`, subject: p => `3 jeitos de usar melhor o seu plano ${p}`,
    hello: (n, p) => `Olá, ${esc(n)}. Obrigado por usar o VendeAI ${esc(p)}. Assim você aproveita mais:`,
    how: {
      1: ['Abra <b style="color:#111111">Como você está indo</b> e veja <b style="color:#111111">Seu assistente</b>: quando aparece "Preço", ele mostra o preço que cobre tudo o que te custa.',
          'Anote o custo de frete e embalagem em cada produto: assim o preço sugerido fica exato.',
          'Revise os 3 produtos que você mais vende: um pequeno ajuste ali faz diferença no mês todo.'],
      2: ['Em <b style="color:#111111">Quem te deve</b>, toque no lembrete e envie pelo WhatsApp: a mensagem já vai escrita, gentil e com o valor exato.',
          'Quando te pagarem, toque em "Recebi": a dívida se atualiza sozinha.',
          'Se você vende parcelado, escreva "em 3 vezes" ao anotar a venda e o app monta as datas.'],
      3: ['Antes de cada campanha de catálogo, veja <b style="color:#111111">O que você tem</b>: ele avisa o que está acabando para pedir a tempo.',
          'Use as mensagens de promoção prontas para enviar às suas clientes pelo WhatsApp ou Instagram.',
          'Veja <b style="color:#111111">Onde você mais vende</b> para saber qual canal te dá mais.']
    },
    next: {
      1: ['Medium', '9.99', 'Se te devem, o <b style="color:#111111">Medium</b> prepara lembretes gentis prontos para enviar pelo WhatsApp a cada pessoa que te deve, com o valor e a data. Você cobra sem constranger ninguém.'],
      2: ['Business', '19.99', 'Se você vende por catálogo ou faz campanhas, o <b style="color:#111111">Business</b> traz mensagens de promoção prontas e diz o que repor antes de cada campanha.']
    },
    up: (p, price) => `Mudar para o ${p} por US$ ${price}`, open: 'Abrir o VendeAI', nextLabel: 'Seu próximo passo'
  },
  en: {
    title: p => `Get more from ${p}`, subject: p => `3 ways to get more from your ${p} plan`,
    hello: (n, p) => `Hi, ${esc(n)}. Thank you for using VendeAI ${esc(p)}. Here is how to get more from it:`,
    how: {
      1: ['Open <b style="color:#111111">How you’re doing</b> and look at <b style="color:#111111">Your assistant</b>: when "Price" shows up, it gives you a price that covers everything it costs you.',
          'Add shipping and packaging costs to each product so the suggested price is exact.',
          'Check your 3 best sellers first: a small change there shows across the whole month.'],
      2: ['In <b style="color:#111111">Who owes you</b>, tap the reminder and send it on WhatsApp: the message is already written, friendly and with the exact amount.',
          'When you get paid, tap "Got": the debt updates by itself.',
          'If you sell in installments, write "in 3 installments" when you record the sale and the app sets the dates.'],
      3: ['Before each catalog campaign, check <b style="color:#111111">What you have</b>: it warns you what is running low so you order in time.',
          'Use the ready-made promo messages for your customers on WhatsApp or Instagram.',
          'Look at <b style="color:#111111">Where you sell most</b> to see which channel earns you the most.']
    },
    next: {
      1: ['Medium', '9.99', 'If people owe you, <b style="color:#111111">Medium</b> writes friendly reminders, ready to send on WhatsApp to each person who owes you, with the amount and date. You collect without the awkwardness.'],
      2: ['Business', '19.99', 'If you sell by catalog or run campaigns, <b style="color:#111111">Business</b> gives you ready-made promo messages and tells you what to restock before each campaign.']
    },
    up: (p, price) => `Move up to ${p} for US$ ${price}`, open: 'Open VendeAI', nextLabel: 'Your next step'
  }
};
export function tipsEmail(lang, name, tier) {
  const l = L(lang), T = TIPS[l], t = PLANS[tier] ? tier : 1, plan = PLANS[t][0];
  const next = T.next[t];
  const p = [T.hello(name, plan), list(T.how[t])];
  if (next) p.push(`<b style="color:#111111">${esc(T.nextLabel)}:</b> ${next[2]}`);
  return build(l, { subject: T.subject(plan), title: T.title(plan), p, button: next ? T.up(next[0], next[1]) : T.open },
    next ? APP_URL + '#planes' : APP_URL);
}
