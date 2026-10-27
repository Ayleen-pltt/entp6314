// Local stand-in for Vercel: serves the pages and runs the files in api/ on this computer.
// Reads GEMINI_API_KEY, the Stripe test keys and the Supabase settings from .env.local. Never serves hidden files, api/ source or node_modules.
// Start: node dev-server.mjs   (then open http://localhost:5180)
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import * as ai from './api/ai.js';
import * as config from './api/config.js';
import * as checkout from './api/checkout.js';

const ROOT = import.meta.dirname;
const API = { ai, config, checkout };   // /api/<name> -> api/<name>.js, like Vercel
const PORT = 5180;
try { process.loadEnvFile(path.join(ROOT, '.env.local')); } catch { console.warn('No .env.local found; the AI will use its fallback.'); }

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.csv': 'text/csv', '.webmanifest': 'application/manifest+json', '.xml': 'application/xml'
};
const BLOCKED = new Set(['api', 'node_modules', 'supabase', 'strategy', 'probes', 'tools', 'package.json', 'package-lock.json', 'dev-server.mjs']);

http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname.startsWith('/api/')) {
    const handler = (API[url.pathname.slice(5)] || {})[req.method];
    if (!handler) { res.writeHead(404); return res.end('not found'); }
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const response = await handler(new Request(url, { method: req.method, headers: req.headers, body: req.method === 'GET' ? undefined : Buffer.concat(chunks) }));
    res.writeHead(response.status, Object.fromEntries(response.headers));
    return res.end(await response.text());
  }

  if (url.pathname === '/') { res.writeHead(302, { Location: '/landing/' }); return res.end(); }
  const parts = decodeURIComponent(url.pathname).split('/').filter(Boolean);
  const notFound = async () => { res.writeHead(404, { 'Content-Type': TYPES['.html'] }); res.end(await fs.readFile(path.join(ROOT, '404.html'))); };   // like Vercel
  if (parts.some(p => p.startsWith('.')) || BLOCKED.has(parts[0]) || parts.at(-1)?.endsWith('.md')) return notFound();
  let file = path.join(ROOT, ...parts);
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  try {
    if ((await fs.stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const body = await fs.readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(body);
  } catch { await notFound(); }
}).listen(PORT, () => console.log(`VendeAI on http://localhost:${PORT}`));
