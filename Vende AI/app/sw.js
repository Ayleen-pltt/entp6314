// VendeAI service worker: lets the installed app open without internet.
// - Pages: newest version from the network; the saved copy if offline or slow (4 s).
// - Fonts, icons, the Supabase library: saved copy first.
// - /api/config: network first, last good copy when offline (it holds only public settings).
// - Other /api/* (Gemini) and Supabase itself: never stored, always live.
// Change VERSION on each release so phones drop the old copy.
const VERSION = '0.4.4';
const CACHE = 'vendeai-' + VERSION;
const SHELL = [
  './', 'manifest.webmanifest', 'vendor/supabase.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  '../fonts/bodoni-moda-latin-wght-normal.woff2', '../fonts/bodoni-moda-latin-wght-italic.woff2', '../fonts/manrope-latin-wght-normal.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('vendeai-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request, cacheKey, waitMs) {
  const cache = await caches.open(CACHE);
  const fromNetwork = fetch(request).then(res => {
    if (res.ok) cache.put(cacheKey || request, res.clone());
    return res;
  });
  const timeout = new Promise(resolve => setTimeout(resolve, waitMs, null));
  try {
    const res = await Promise.race([fromNetwork, timeout]);
    if (res) return res;
  } catch (e) { /* offline: fall through to the saved copy */ }
  const saved = await cache.match(cacheKey || request);
  return saved || fromNetwork;
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const saved = await cache.match(request);
  if (saved) return saved;
  const res = await fetch(request);
  if (res.ok) cache.put(request, res.clone());
  return res;
}

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;     // Supabase, uploads: untouched
  if (url.pathname === '/api/config') return event.respondWith(networkFirst(req, '/api/config', 4000));
  if (url.pathname.startsWith('/api/')) return;                            // Gemini: always live
  if (req.mode === 'navigate') return event.respondWith(networkFirst(req, new URL('./', location.href).href, 4000));
  event.respondWith(cacheFirst(req));
});
