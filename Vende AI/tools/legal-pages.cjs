// Converts the four legal .md files into simple, readable .html pages next to them.
// Run after editing a legal .md file:  node tools/legal-pages.cjs
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'legal');
const DESCRIPTIONS = {
  'terminos-y-condiciones': 'Las reglas para usar VendeAI: qué es gratis, qué cuesta cada plan, cómo cancelar y qué hace la inteligencia artificial.',
  'politica-de-privacidad': 'Qué datos guarda VendeAI, para qué, con quién los compartimos y cómo puedes verlos, corregirlos o borrarlos.',
  'politica-de-cookies': 'VendeAI no usa cookies de publicidad ni de seguimiento. Aquí explicamos qué guarda la app en tu teléfono y por qué.',
  'politica-de-reembolsos': 'Si te arrepientes en los primeros 10 días de un plan pagado, te devolvemos todo. Así puedes pedirlo.'
};
const files = ['terminos-y-condiciones', 'politica-de-privacidad', 'politica-de-cookies', 'politica-de-reembolsos'];

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function inline(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, txt, href) => `<a href="${href.replace(/\.md(#|$)/, '.html$1')}">${txt}</a>`);
}

function convert(md) {
  const lines = md.split(/\r?\n/);
  let html = '', i = 0, title = '';
  while (i < lines.length) {
    const l = lines[i];
    if (/^#\s/.test(l)) { title = l.slice(2).trim(); html += `<h1>${inline(title)}</h1>\n`; i++; continue; }
    if (/^##\s/.test(l)) { html += `<h2>${inline(l.slice(3))}</h2>\n`; i++; continue; }
    if (/^>\s?/.test(l)) {
      let q = [];
      while (i < lines.length && /^>/.test(lines[i])) { q.push(lines[i].replace(/^>\s?/, '')); i++; }
      html += `<blockquote>${q.filter(Boolean).map(x => `<p>${inline(x)}</p>`).join('')}</blockquote>\n`; continue;
    }
    if (/^\|/.test(l)) {
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) { rows.push(lines[i]); i++; }
      const cells = r => r.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      const head = cells(rows[0]);
      const body = rows.slice(2).map(cells);
      html += `<div class="table"><table><thead><tr>${head.map(h => `<th>${inline(h)}</th>`).join('')}</tr></thead><tbody>${body.map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>\n`;
      continue;
    }
    if (/^(\s*)[-*]\s/.test(l) || /^\d+\.\s/.test(l)) {
      const ordered = /^\d+\.\s/.test(l);
      const items = [];
      while (i < lines.length && (/^\s*[-*]\s/.test(lines[i]) || /^\d+\.\s/.test(lines[i]))) {
        const nested = /^\s{2,}[-*]\s/.test(lines[i]);
        const text = lines[i].replace(/^\s*([-*]|\d+\.)\s/, '');
        if (nested && items.length) items[items.length - 1].sub.push(text);
        else items.push({ text, sub: [] });
        i++;
      }
      const tag = ordered ? 'ol' : 'ul';
      html += `<${tag}>${items.map(it => `<li>${inline(it.text)}${it.sub.length ? `<ul>${it.sub.map(s => `<li>${inline(s)}</li>`).join('')}</ul>` : ''}</li>`).join('')}</${tag}>\n`;
      continue;
    }
    if (l.trim() === '') { i++; continue; }
    let p = [];
    while (i < lines.length && lines[i].trim() !== '' && !/^(#|>|\||\s*[-*]\s|\d+\.\s)/.test(lines[i])) { p.push(lines[i]); i++; }
    html += `<p>${p.map(inline).join('<br>')}</p>\n`;
  }
  return { title, html };
}

for (const f of files) {
  const { title, html } = convert(fs.readFileSync(path.join(dir, f + '.md'), 'utf8'));
  const page = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(DESCRIPTIONS[f])}">
<link rel="icon" type="image/png" sizes="192x192" href="../app/icons/icon-192.png">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(DESCRIPTIONS[f])}">
<meta property="og:image" content="https://vendeai-pi.vercel.app/og-image.png">
<!-- Generated from ${f}.md. Edit the .md file, then regenerate this page. -->
<style>
  :root { --bg:#f3ecdc; --text:#000000; --muted:#5c6266; --line:#ceccc5; --accent:#4c5a62; --soft:#ffffff; }
  @media (prefers-color-scheme: dark) { :root { --bg:#101314; --text:#f3ecdc; --muted:#ceccc5; --line:#30373b; --accent:#a9b8c0; --soft:#1b1f22; } }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--text); font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif; line-height:1.6; }
  main { max-width:720px; margin:0 auto; padding:24px 16px 64px; }
  h1 { font-size:1.6rem; line-height:1.25; }
  h2 { font-size:1.1rem; margin-top:32px; }
  a { color:var(--accent); }
  blockquote { margin:16px 0; padding:8px 14px; background:var(--soft); border-left:3px solid var(--accent); color:var(--muted); font-size:.92rem; }
  blockquote p { margin:4px 0; }
  .table { overflow-x:auto; }
  table { border-collapse:collapse; width:100%; font-size:.92rem; margin:12px 0; }
  th, td { text-align:left; border-bottom:1px solid var(--line); padding:8px 6px; vertical-align:top; }
  th { color:var(--muted); font-weight:600; }
  code { background:var(--soft); padding:1px 4px; border-radius:4px; font-size:.88em; }
  .back { display:inline-block; margin-bottom:12px; font-size:.9rem; }
</style>
</head>
<body>
<main>
<a class="back" href="#" onclick="if (history.length > 1) { history.back(); } else { window.close(); } return false;">← Volver</a>
${html}</main>
</body>
</html>
`;
  fs.writeFileSync(path.join(dir, f + '.html'), page);
  console.log('wrote', f + '.html');
}
