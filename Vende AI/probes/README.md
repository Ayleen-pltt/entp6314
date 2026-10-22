# Landing-page probes

Three versions of the same page. Each one pitches a different promise, and everything else is identical: layout, colors, screenshot box, and button position. The question is **which promise makes sellers act**.

| Probe | File | Promise being tested | Why we're testing it |
|---|---|---|---|
| **A** | [a-cobrar.html](a-cobrar.html) | Collect what customers owe you | The independent review said "who owes me" is weakly evidenced. This tests it directly. |
| **B** | [b-gratis.html](b-gratis.html) | A free, trustworthy sales record by message | The review said this is what the evidence supports best: free recording and correct stock. |
| **C** | [c-asistente.html](c-asistente.html) | A daily assistant that tells you what to do | Our current pitch. The research rates the advice part "unproven." |

## The one action we count

Each page has one button that opens WhatsApp with a message ending in the probe's letter, for example "Hola, vi VendeAI y quiero probarlo **(A)**". There's no form, no database, and no tracking on the page, so no cookie banner is needed.

**Before sharing:** replace `52XXXXXXXXXX` in each file with the team's WhatsApp number (international format, no `+` or spaces).

## How to run it

1. **Host the three files** somewhere free that gives a public link, such as GitHub Pages or Netlify Drop.
2. **Give each probe its own short link** (Bitly or similar), so you can see how many people **visited** each one. The link service counts clicks, and the page itself stays tracking-free.
3. **Share in the same places, the same way.** Post A, B and C in different seller groups of similar size, or rotate them in one group on different days. Use the same short intro text for all three: "Estamos probando una app para vendedoras. ¿Qué te parece?"
4. **Run for 7 days,** or until each probe has **at least 100 visits**.
5. **Record each day** in the table below.

| Day | A visits | A messages | B visits | B messages | C visits | C messages |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
| **Total** | | | | | | |

**Message rate** = messages ÷ visits.

## How to read the result

We set these bars ourselves. They are not from research.

- **A probe "wins"** if its message rate is at least **1.5×** the next best, with at least **10 messages**.
- **Under 3% on all three:** none of the promises pulls. Go back to interviews before building.
- **C loses to A or B:** lead with the winner, and keep the daily assistant as a feature rather than the headline.
- **Fewer than 100 visits per probe:** the result means nothing yet. Keep sharing.

## When someone writes in

Be honest that the app isn't built yet. Then interview, don't pitch:

> ¡Hola! Gracias por escribir. VendeAI todavía está en pruebas y buscamos vendedoras que nos ayuden a hacerlo bien. ¿Te puedo hacer 3 preguntas rápidas?
>
> 1. ¿Cómo anotas hoy tus ventas?
> 2. Cuéntame la última vez que una clienta te quedó debiendo. ¿Qué pasó?
> 3. ¿Qué te hizo escribirnos?

Save each answer word for word in `interviews/`, and note which probe the person came from.
