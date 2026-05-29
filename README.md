# FELŌRA — Design System

> For she who carries life.

A premium direct-to-consumer women's lifestyle brand for every woman from the moment she says yes to life — through marriage, pregnancy, birth, postpartum, nursing and raising her child. Light theme. Cormorant Garamond + Jost. Sharp edges everywhere. Gold used with restraint.

**Website:** felora.care (Shopify) · **Market:** United Kingdom · **Hero product:** The Nurture Pro™ — Double Wearable Electric Breast Pump (£230)

---

## Sources

This system was built from:

- `felōra-design/` — Relume export (mounted locally via File System Access API). Provided the page structure, the 12 homepage sections, color schemes, the React component scaffolds, and placeholder imagery. **Relume's defaults (Inter, purple `#7B4E9C` accent) have been deliberately overridden — see brand brief.**
  - `felōra-design/DESIGN.md` — Relume design tokens (machine-readable YAML)
  - `felōra-design/sitemap.md` — page-by-page section list with scheme assignments
  - `felōra-design/react/` — pre-styled Relume components (reference only)
  - `felōra-design/homepage/` — screenshots of the Relume render (Inter, purple — pre-override)
- **Brand brief** (provided in chat) — the source of truth. Defines voice, palette, type, the eyebrow + gold-rule pattern, and the rule that this is not a maternity brand.

The 14 hero/feature/benefit/testimonial photos and both logo SVGs were copied into `assets/` from the Relume export. The Inter font files in the export were discarded.

---

## Index

| Path | What lives here |
|---|---|
| `README.md` | This file. Brand context + manifest. |
| `colors_and_type.css` | All design tokens. CSS vars + semantic type styles + scheme classes + button/input primitives. |
| `SKILL.md` | Agent-skill entry point — load this first if you're an LLM. |
| `assets/` | Logos (`logo-light.svg`, `logo-dark.svg`), product + lifestyle imagery, `images/` |
| `fonts/` | Webfonts — **CDN only** (Cormorant Garamond + Jost from Google Fonts). Bundle locally for production. |
| `preview/` | Design-system cards (palette, type, components) shown in the Design System tab |
| `ui_kits/website/` | High-fidelity recreation of the felora.care marketing site |
| `reference/` | Read-only screenshots of the Relume export — for layout context only |

---

## Content fundamentals — VOICE IS NON-NEGOTIABLE

FELŌRA speaks like **a trusted friend who understands her body better than any clinical product ever has**. Warm without being saccharine. Premium without being cold. Poetic without being pretentious. Every sentence asks: *does this make her feel seen?*

### Tone

- **Emotional first, technical second.** Lead with what she feels. Then the spec.
- **Short sentences. Long pauses.** Whitespace is content. Rhythm matters.
- **"She" and "her" by default; "you" when speaking directly to the customer.** Never "moms" — "she" or "mothers."
- **Third-person reverence.** The brand speaks *of* her, not *at* her. ("She does not stop. Not for the 6am feed.")
- **No exclamation marks.** None.
- **No emoji. Anywhere. Ever.**
- **Capitalisation:** sentence case in body. UPPERCASE with wide letter-spacing for eyebrow labels and buttons only. Italic for the emotional climax of a headline.

### Lexicon — say / never say

✅ **FELŌRA says:**
- "You deserve to feel held."
- "She does not stop. Not for the 6am feed. Not for the work call."
- "For she who carries life."
- "This is what nursing should always have felt like."
- "Time reclaimed." · "Confidence restored." · "Body honoured."
- "Hands free. Whisper quiet. Doctor safe."

❌ **FELŌRA never says:**
- "Don't compromise on comfort"
- "Game changer" / "next-level" / "must-have"
- "Reduces pain by 70%" (clinical claims out of context)
- "Add to bag 🛍️" — or any emoji
- "Limited time offer!" / "Hurry — sale ends soon!"
- "Mompreneur" / "mama bear" / "boss mum"
- ".99" pricing. **£230, never £229.99.**

### Headline pattern

Almost every section follows the same six-beat structure:

1. **Eyebrow** — short uppercase label (e.g. `SEEN`, `RECLAIMED`, `WHAT'S INSIDE`)
2. **Gold rule** — 44×1px gold line
3. **Headline** — Cormorant Garamond, plain + `<em>italic gold phrase</em>` for the emotional climax
4. **Body** — Jost 300, warm terra colour, generous line-height
5. **CTA** — full-width on mobile, sharp edges, dark with ivory text, gold slide-in on hover
6. **Whitespace** — never crowd

Example:
> RECLAIMED
> ────
> She does not stop. Not for the 6am feed. *Not for the work call.*
>
> The Nurture Pro™ moves with her — silent, wire-free, invisible under a shirt.
>
> `[ DISCOVER THE NURTURE PRO ]`

### Email addresses (use everywhere)

- `she@felora.care` — primary customer contact
- `carry@felora.care` — orders & shipping
- `story@felora.care` — press & partnerships

---

## Visual foundations

### Colour

A warm, restrained palette. **Not** a maternity-brand pastel. Not corporate. **Editorial wellness.**

| Token | Hex | Use |
|---|---|---|
| `--felora-noir` | `#2C2C2A` | Primary dark backgrounds (hero, mission, CTA strips). Primary text on light. |
| `--felora-onyx` | `#1A1410` | Deepest, used only for footer + marquee strip. |
| `--felora-mink` | `#7A6055` | Body copy on light backgrounds. |
| `--felora-terra` | `#8B6F5E` | Eyebrows, italic phrase on light, captions. |
| `--felora-gold` | `#C4A882` | **The accent. Used with restraint.** Hairline rules, hover slide-in, italic phrase on dark. Never a background. |
| `--felora-blush` | `#E8D5C4` | Warm blush — Final CTA section only. |
| `--felora-cream` | `#EFE9E0` | Secondary light background — Benefits / How It Works. |
| `--felora-ivory` | `#F7F3EE` | Primary light background. Most pages. |

**Gold rule — read carefully.** Gold (`#C4A882`) is an *accent*, never a background. It appears as a 44×1px rule, an italic word, a 1px hover border, a button slide-in. Its power is restraint. If a section feels "gold-heavy," it is wrong.

**Five schemes** (matches Relume's 5-scheme contract):

1. `.scheme-noir` (dark, `#2C2C2A`) — Hero, Mission, Offer CTA, Expert badge
2. `.scheme-onyx` (deepest, `#1A1410`) — Footer, marquee
3. `.scheme-ivory` (light, `#F7F3EE`) — most content sections
4. `.scheme-cream` (warm light, `#EFE9E0`) — Benefits, How It Works
5. `.scheme-blush` (warm pink, `#E8D5C4`) — Final CTA only

### Typography

- **Headings:** Cormorant Garamond — weights **300** and **400** only. Italic 400 for emotional/gold-accent phrases inside a heading.
- **Body + labels + buttons:** Jost — weights **300** and **400**.
- **Inter:** ❌ banned, despite appearing in the Relume export.

| Style | Family / size / weight |
|---|---|
| Display | Cormorant Garamond 300, `clamp(3rem, 6vw, 5.5rem)`, `letter-spacing: -0.01em` |
| H1 | Cormorant Garamond 300, `clamp(2.5rem, 5vw, 4.5rem)` |
| H2 | Cormorant Garamond 300, `clamp(2rem, 4vw, 3.5rem)` |
| H3 | Cormorant Garamond 300, `clamp(1.5rem, 2.5vw, 2.25rem)` |
| Eyebrow | Jost 400, **9px**, uppercase, `letter-spacing: 0.26em`, colour `--felora-terra` |
| Body | Jost 300, **16px**, `line-height: 1.7`, colour `--felora-mink` |
| Small / caption | Jost 400, 14px |
| Button | Jost 400, 14px, uppercase, `letter-spacing: 0.18em` |
| Italic gold phrase | Cormorant Garamond italic 400, colour `--felora-terra` on light / `--felora-gold` on dark |

> **Font substitution note for the user:** the Relume export bundled only Inter `.woff2` files. We're loading **Cormorant Garamond** and **Jost** from the Google Fonts CDN. For production on Shopify, bundle them locally and serve via `@font-face`. **Please confirm if you'd like a different serif (Playfair Display, EB Garamond, Tenor Sans) or a different sans (Manrope, Inter Tight) — easy swap in `colors_and_type.css`.**

### Spacing & layout

- **8px base grid.**
- Section vertical padding: **64 / 96 / 128px** (mobile / tablet / desktop). FELŌRA breathes.
- Max container width **1280px** with **5%** gutters.
- Generous gaps between adjacent groups: never less than 24px between a paragraph and a button row; 64–96px between section blocks within a section.

### Corners + borders

- **`border-radius: 0` everywhere.** No exceptions. Buttons, inputs, images, cards, modals, photos — all sharp.
- Borders are **1px, hairline,** and use the scheme's contextual border token (`rgba(44,44,42,0.12)` on light, `rgba(247,243,238,0.18)` on dark).
- Cards do not float. They are bounded by hairlines, not shadow.

### Shadow & elevation

Essentially absent. FELŌRA is flat, editorial. The single allowed shadow is `--shadow-card` — used only for cards floating over a photograph background (e.g. the contact card on the hero photo). All other surfaces sit at z=0 with no shadow.

### Backgrounds & imagery

- **Full-bleed warm photography** — natural light, soft skin tones, warm whites and creams.
- Lifestyle scenes: women in domestic, lived-in spaces. Hands. Babies in soft swaddles. Mothers nursing in soft chairs. **No clinical, no studio cutouts.**
- Imagery palette skews **warm** — golden hour, ivory walls, terracotta, cream. Never blue/cool.
- **No gradients as backgrounds.** A photo or a flat scheme colour. That's it.
- **No hand-drawn illustrations. No patterns. No repeating textures.**

### Motion

- **Slow, intentional, never bouncy.** No spring, no overshoot.
- `--ease: cubic-bezier(0.22, 0.61, 0.36, 1)` — the FELŌRA easing curve.
- Durations: 180ms (micro), 320ms (UI), 560ms (gold-slide hover).
- Marquees scroll **continuously and slowly** — 30–50s per loop.
- Page entrances are crossfades, **not** slide-ups.

### Hover & press states

- **Buttons:** `::after` pseudo-element slides in from left in 560ms (`--ease`). Background goes gold, text goes noir. Border becomes gold.
- **Text links:** colour transitions to `--felora-gold` over 320ms. No underline animation.
- **Cards:** the image inside scales gently to 1.03 over 560ms. Card itself does not move.
- **Inputs:** border colour transitions to `--felora-gold` on focus.
- **Press state:** no visible scale or colour shift on tap (intentional restraint).

### Transparency & blur

- **Glass surfaces (backdrop-blur) only on photographic backgrounds**, e.g. the floating contact card on the hero. Never over a flat colour.
- Overlays on full-bleed photos: `rgba(44, 44, 42, 0.45)` solid tint, no gradient.

### Cards

- 1px hairline border, no radius, no shadow (except over photos).
- Internal padding: **32px** (mobile) → **48px** (desktop).
- Image fills card edge-to-edge — image and copy are sibling blocks, not nested with padding inside the image area.

### Fixed elements

- **Navbar:** fixed top, full-width, `.scheme-noir`, 72px tall on desktop, hairline gold underline only on the active link.
- **CTA bars / sticky footers:** none on the marketing site. Buy buttons are inline within the section.

### Iconography

The Relume export includes 14 SVG icons used in the navbar — they ship with `relume-icons` and were not bundled as files we can use. **For FELŌRA's actual surface, iconography is deliberately minimal** — see `ICONOGRAPHY` below.

---

## Iconography

**FELŌRA uses almost no icons.** This is intentional. The brand is editorial — words and photography carry the meaning. When icons must appear, they follow strict rules:

- **Set:** [Lucide](https://lucide.dev) (CDN-linked) — chosen because Lucide's hairline 1.5px-stroke geometry matches FELŌRA's editorial weight. **No filled icons. No two-tone. No multi-colour.**
- **Stroke:** 1.5px, hairline only.
- **Colour:** inherits from current text colour — never coloured independently.
- **Size:** 16px (inline), 20px (button), 24px (max — for feature-list bullets).
- **Where:** social icons in footer, an arrow chevron in CTA links, a hamburger on mobile nav. **Nothing else.**
- **Emoji:** ❌ **never, anywhere, in any component or any copy.**
- **Unicode characters:** ™ (trademark) is allowed and required on `The Nurture Pro™` and `The Carry Belt™`. ™ is the only special character used as a "glyph."

**Logo:** the wordmark is the only branded glyph. It lives at `assets/logo-light.svg` (black, use on light backgrounds) and `assets/logo-dark.svg` (white, use on dark backgrounds). Never recoloured. Never on a busy photo without an overlay.

CDN for Lucide (paste into any HTML head):
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

---

## UI kits

- **`ui_kits/website/`** — felora.care (Shopify storefront). Homepage hero + sections, Nurture Pro product page section, contact card. Pixel-faithful recreation built from the Relume export's structure, with FELŌRA voice + tokens applied. Open `ui_kits/website/index.html` to see it interactive.

---

## Caveats and open questions

- **Fonts are loaded from Google Fonts CDN.** No local woff2 yet — flag the user.
- **No real product photography exists yet.** All imagery is placeholder shot in a similar warm, editorial register from the Relume export. Replace with real Nurture Pro shots before launch.
- **Icon set is Lucide.** If the brand has commissioned a custom icon family, swap it in.
- **The Carry Belt™ product page is described in the brief but not yet designed.**

