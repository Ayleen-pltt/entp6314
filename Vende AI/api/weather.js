// Vercel Function: GET /api/weather?country=PE  ->  { city: 'Lima', temp: 19 }  (°C, rounded)
// Live temperature from Open-Meteo (https://open-meteo.com), which needs no API key.
// The place is the main city of the seller's country, so we never ask the phone for its location,
// and the seller's own address never reaches Open-Meteo: only our server talks to it.
// Vercel's cache keeps each country's answer for 15 minutes, so Open-Meteo is asked at most
// about 4 times an hour per country, however many sellers open the app.

const CITIES = {
  MX: { city: 'Ciudad de México', lat: 19.43, lon: -99.13 },
  CO: { city: 'Bogotá', lat: 4.71, lon: -74.07 },
  PE: { city: 'Lima', lat: -12.05, lon: -77.04 },
  AR: { city: 'Buenos Aires', lat: -34.61, lon: -58.38 },
  CL: { city: 'Santiago', lat: -33.45, lon: -70.67 },
  BR: { city: 'São Paulo', lat: -23.55, lon: -46.63 }
};
const TIMEOUT_MS = 4000;

const json = (body, status, cache) => new Response(JSON.stringify(body), {
  status, headers: { 'Content-Type': 'application/json', 'Cache-Control': cache }
});

export async function GET(request) {
  const place = CITIES[new URL(request.url).searchParams.get('country')];
  if (!place) return json({ error: 'country' }, 400, 'no-store');
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${place.lat}&longitude=${place.lon}`
    + '&current=temperature_2m&temperature_unit=celsius&timezone=auto';
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!res.ok) throw new Error('Open-Meteo answered ' + res.status);
    const temp = ((await res.json()).current || {}).temperature_2m;
    if (typeof temp !== 'number' || !isFinite(temp)) throw new Error('no temperature in the answer');
    return json({ city: place.city, temp: Math.round(temp) }, 200, 'public, max-age=600, s-maxage=900');
  } catch (e) {
    console.error('Weather unavailable:', e && (e.name === 'TimeoutError' ? 'timeout' : e.message));
    return json({ error: 'weather' }, 502, 'no-store');
  }
}
