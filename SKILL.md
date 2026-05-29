---
name: felora-design
description: Use this skill to generate well-branded interfaces and assets for FELŌRA — a premium women's wellness brand (felora.care). Contains essential design guidelines, the brand voice, the palette, the typography rules, fonts, the logo, real lifestyle imagery, and a high-fidelity UI kit recreation of the marketing site for prototyping.
user-invocable: true
---

# FELŌRA — design skill

FELŌRA is a premium direct-to-consumer women's lifestyle brand. **For she who carries life.** It is not a maternity brand. It speaks like a trusted friend who understands her body better than any clinical product ever has.

## How to use this skill

1. **Read `README.md` first.** It contains the voice rules, the palette, the typography spec, and the iconography rules. It is the source of truth.
2. **Open `colors_and_type.css`.** Every token is here as a CSS variable. Use the semantic vars (`--bg`, `--fg-soft`, `--accent`) and the scheme classes (`.scheme-noir`, `.scheme-ivory`, `.scheme-cream`, `.scheme-blush`, `.scheme-onyx`).
3. **Open `ui_kits/website/index.html`** for the worked example of the homepage. Copy the section patterns directly — the eyebrow → gold rule → headline-with-italic-em → body → CTA structure is the FELŌRA template.
4. **Browse `preview/`** for atomic specimens (palette, type, buttons, FAQ, quote card).
5. **Use the assets in `assets/`** — logo SVGs and 14 lifestyle photos.

## Hard rules (never break)

- **Zero border radius.** Sharp edges on buttons, cards, inputs, images, modals. Always.
- **No emoji.** Anywhere. In any component. In any copy. Ever.
- **No .99 pricing.** £230, never £229.99.
- **Gold (`#C4A882`) is an accent, never a background.** Hairline rules, italic phrases, hover slide-in only.
- **Whitespace is content.** Never crowd.
- **Buttons:** full-width on mobile, sharp edges, noir bg + ivory text, gold `::after` slide-in on hover.
- **Inter is banned.** Cormorant Garamond for headings (300 / 400, italic for emotional climax). Jost for body and labels (300 / 400).

## If invoked without guidance

Ask the user what they want to build (slide, page, prototype, email, social post). Ask which page or product. Ask about audience and any specific tone notes. Then act as a senior FELŌRA designer — output static HTML or production-ready CSS/JSX, with the tokens above wired in.

## For production code use

The tokens in `colors_and_type.css` map cleanly to a Shopify theme. Fonts currently load from Google Fonts CDN; bundle them locally for production. The UI kit components are pixel-faithful and modular — copy the section structure, then replace placeholder copy with real product detail.

## What's in this folder

- `README.md` — brand context, voice, visual foundations, iconography (read first)
- `colors_and_type.css` — all design tokens + semantic type styles + scheme classes + button + input primitives
- `assets/` — logo SVGs (light + dark), product + lifestyle imagery
- `ui_kits/website/` — worked homepage recreation
- `preview/` — design-system specimen cards
- `reference/` — original Relume export screenshots (pre-override, for layout context only)
