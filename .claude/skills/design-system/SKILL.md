---
name: design-system
description: Use when building or changing any screen, page, email or component in VendeAI, so it follows the design system.
---

# Building UI in VendeAI

VendeAI is plain HTML, CSS and JavaScript with no framework, so there is no `components/ui` folder. Its pieces are the CSS classes in `Vende AI/app/index.html`.

1. Read `Vende AI/design.md` for the vibe, the rules and the type scale.
2. Open `/styleguide/` and look for an existing piece. Reuse or extend it before making a new one.
3. Use only the tokens in `Vende AI/tokens.css`. No hex codes, no new fonts, no sizes outside the type scale. Emails, `theme-color` tags and `manifest.webmanifest` can't read tokens, so they repeat the same hex by hand.
4. If you make a new reusable piece, add its CSS to `app/index.html` and its markup to `styleguide/index.html`.
5. Put all screen text in `I18N` (`es`, `pt`, `en`). Fonts stay self-hosted.
6. When done, compare the result to `design.md` and `/styleguide/` in light and dark, and list anything that doesn't match.
