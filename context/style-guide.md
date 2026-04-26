# Style Guide Index

This project now uses two dedicated style guides:

- `context/code-style-guide.md` - code conventions for HTML, CSS, JS, and component behavior.
- `context/tone-voice-style-guide.md` - writing voice, tone, and content structure guidance.

When editing this site:

1. Use the code guide for implementation and UI consistency.
2. Use the tone/voice guide for homepage copy, project copy, and blog writing.
# Code Style Guide

**For AI agents building or editing this site.**
Last updated: April 2026

---

## 1. Colors

All colors are defined as CSS custom properties on `:root`. Always reference variables — never hardcode hex values inline unless you are defining the variable itself.

### Core Palette


| Variable      | Hex                      | Usage                                                 |
| ------------- | ------------------------ | ----------------------------------------------------- |
| `--cream`     | `#F6F0E8`                | Background tints, color panels, hover states          |
| `--ink`       | `#1C1917`                | Primary text, headings, icons                         |
| `--rust`      | `#C25435`                | Accent text, eyebrows, descriptor cycling, scroll pip |
| `--warm-gray` | `#9A908A`                | Secondary text, nav links, tags, arrows               |
| `--border`    | `rgba(0,0,0,0.11)`       | Dividers, card borders, rule lines                    |
| `--hover-bg`  | `rgba(255,255,255,0.45)` | Hover state backgrounds                               |


### Rainbow Palette

Used for decorative accents, project card colors, gradient text, section eyebrows, and the hero rule. Cycle through them in order (c1 → c7) for sequential items.


| Variable | Hex       | Name                           |
| -------- | --------- | ------------------------------ |
| `--c1`   | `#e81416` | Red                            |
| `--c2`   | `#ffa500` | Orange                         |
| `--c3`   | `#79c314` | Green                          |
| `--c4`   | `#70369d` | Violet                         |
| `--c5`   | `#487de7` | Blue                           |
| `--c6`   | `#e6d000` | Yellow (darkened for cream bg) |
| `--c7`   | `#4b369d` | Indigo                         |


**Utility classes for rainbow text:** `.rc1` through `.rc7` apply `color: var(--cN)`.

**Gradient text:** Use `.grad-text` for the red→orange→green→blue gradient applied to key phrases:

```css
background: linear-gradient(115deg, var(--c1) 0%, var(--c2) 35%, var(--c3) 70%, var(--c5) 100%);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
```

**Rainbow gradient text** (hero manifesto highlight):

```css
background: linear-gradient(105deg, var(--c1) 0%, var(--c2) 14%, var(--c6) 28%, var(--c3) 42%, var(--c5) 56%, var(--c4) 72%, var(--c7) 88%, var(--c2) 100%);
background-size: 120% 100%;
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
```

### Background

The page background is `#ffffff` (pure white). The floating orbs and grain overlay create visual warmth on top of it — do not change to cream or off-white.

### Glass / Backdrop Blur

Used on section cards, nav (when scrolled), hero, footer, and marquee:

```css
background: rgba(255, 255, 255, 0.72);
backdrop-filter: blur(22px);
-webkit-backdrop-filter: blur(22px);
border: 1px solid rgba(255, 255, 255, 0.88);
box-shadow: 0 4px 32px rgba(0, 0, 0, 0.05);
```

The utility class `.glass` provides this pattern. Lighter variants (0.65 opacity, 16px blur) are used on the marquee and footer.

---

## 2. Typography

### Font Stack


| Variable | Font                | Fallback                | Role               |
| -------- | ------------------- | ----------------------- | ------------------ |
| `--fd`   | `Fraunces`          | `Georgia, serif`        | Display / headings |
| `--fb`   | `Plus Jakarta Sans` | `system-ui, sans-serif` | Body / UI          |


Both fonts are loaded from Google Fonts. Always include both font link tags. No other fonts are used on this site.

**Fraunces** is a variable font. Always set `font-variation-settings: 'opsz' [value]` alongside size:

- Large display (hero name, contact heading, overlay title): `'opsz' 144`
- Mid-size headings (work intro, about pull, overlay impact): `'opsz' 72`
- Small italics (writing titles, project titles): `'opsz' 36`

### Type Scale

#### Display — Fraunces


| Element               | Size                           | Weight | Style  | Notes                                          |
| --------------------- | ------------------------------ | ------ | ------ | ---------------------------------------------- |
| Hero name             | `clamp(2.8rem, 14vw, 14rem)`   | 900    | italic | `letter-spacing: -0.03em`, `line-height: 0.88` |
| Contact heading       | `clamp(2.5rem, 5vw, 4.5rem)`   | 900    | italic | `line-height: 1.05`                            |
| Overlay title         | `clamp(2.2rem, 5vw, 4.2rem)`   | 900    | italic | `letter-spacing: -0.02em`, `line-height: 1.04` |
| Overlay impact number | `clamp(2.8rem, 5vw, 4rem)`     | 900    | italic | gradient text                                  |
| About pull quote      | `clamp(2rem, 3.6vw, 3.1rem)`   | 900    | italic | `line-height: 1.18`                            |
| Work intro            | `clamp(1.9rem, 3.2vw, 2.8rem)` | 700    | italic | `line-height: 1.15`                            |
| Project card title    | `clamp(1.15rem, 2vw, 1.5rem)`  | 700    | italic | `line-height: 1.15`                            |
| Writing row title     | `1.15rem`                      | 700    | italic | `line-height: 1.3`                             |


#### UI / Body — Plus Jakarta Sans


| Element                     | Size          | Weight  | Notes                                    |
| --------------------------- | ------------- | ------- | ---------------------------------------- |
| Body prose (about, overlay) | `0.9375rem`   | 300     | `line-height: 1.78`                      |
| Overlay body paragraphs     | `1.0625rem`   | 300     | `line-height: 1.86`                      |
| Project description         | `0.82rem`     | 300     | `line-height: 1.72`                      |
| Nav links                   | `0.7rem`      | 400     | `letter-spacing: 0.12em`, uppercase      |
| Nav name (logo)             | `0.7rem`      | 600     | `letter-spacing: 0.18em`, uppercase      |
| Section eyebrow             | `0.65rem`     | 500     | `letter-spacing: 0.2em`, uppercase       |
| Marquee items               | `0.68rem`     | 500     | `letter-spacing: 0.16em`, uppercase      |
| Tag / category labels       | `0.6–0.65rem` | 500–600 | `letter-spacing: 0.12–0.18em`, uppercase |
| AI pill                     | `0.58rem`     | 700     | `letter-spacing: 0.14em`, uppercase      |


### Key Rules

- **Fraunces is always italic** in display use. Only use it roman (non-italic) when explicitly overriding with `font-style: normal` for a reason (e.g., the `.grad-text` inline span inside a Fraunces heading).
- **Plus Jakarta Sans is never used for display headings.** It handles all labels, eyebrows, body copy, UI elements, and tags.
- **font-weight: 300** is the default for all body prose — do not use 400 for body text.
- Line heights: display text uses 0.88–1.18. Body prose uses 1.65–1.86. Never use the browser default (1.2) for anything.

---

## 3. Spacing & Layout

### Page Layout

- **Max content width:** `1160px` (on `.section-wrap`)
- **Horizontal padding:** `clamp(1.5rem, 5vw, 3.5rem)` on most containers
- **Section padding:** `40–56px` top and bottom

### Section Wrap

All main content sections use `.section-wrap`:

```css
max-width: 1160px;
margin: 0 auto;
padding: clamp(2.5rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 3.5rem);
border-radius: 20px;
```

Plus the glass effect (see Colors section).

### Grid Patterns


| Pattern         | Columns     | Gap    | Used in            |
| --------------- | ----------- | ------ | ------------------ |
| About           | `1fr 1fr`   | `88px` | About section      |
| Writing / Now   | `1fr 1fr`   | `88px` | Writing section    |
| Project row     | `165px 1fr` | —      | Each project card  |
| Screenshot grid | `1fr 1fr`   | `14px` | Overlay case study |


Breakpoint: grids collapse to single column at `max-width: 820px`.

### Component Spacing

- Card gap in project list: `12px`
- Gap between nav links: `40px`
- Footer padding: `32px` vertical
- Section eyebrow → heading margin: `14px`
- Heading → body margin: `18–22px`
- Overlay inner padding: `48px` top, `clamp(2rem, 7vw, 5rem)` horizontal, `100px` bottom
- Tag gap: `6px`
- Contact link gap: `16px`

### Border Radius


| Element                         | Radius                      |
| ------------------------------- | --------------------------- |
| Section cards (`.section-wrap`) | `20px`                      |
| Project cards (`.project-item`) | `16px`                      |
| Screenshot thumbnails           | `12px`                      |
| Contact links                   | `2px` (intentionally small) |
| Pills (AI badge, tags)          | `20px`                      |
| Arrow button (`.p-arrow`)       | `50%`                       |
| Close button                    | `50%`                       |


---

## 4. Component Patterns

### Navigation

- Fixed to top, fades in on load with opacity transition
- On scroll past 60px: gains `background: rgba(255,255,255,0.75)`, `backdrop-filter: blur(20px)`, reduced padding (18px vs 28px), subtle box-shadow
- Logo: `.nav-name` in Plus Jakarta Sans, uppercase, `--ink` color, hover to `--rust`
- Nav links: uppercase, `--warm-gray`, hover to `--ink`
- Special link (currently the blog "Writing" link): class `.nav-alt`, color `--c5` (blue)

### Project Cards

Each card has two columns:

1. **Color panel** (165px wide): gradient background using the project's rainbow color, large italic Fraunces number, small label beneath. Background gradient formula: `linear-gradient(to bottom, rgba(COLOR, 0.5), rgba(NEXT_COLOR, 0.1))`
2. **Info panel**: project number in rainbow color, category label, AI pill if applicable, Fraunces italic title, Plus Jakarta Sans body description, arrow button at bottom-right

**Arrow button behavior:** On card hover — background fills `--ink`, border fills `--ink`, SVG stroke turns `--cream`, arrow rotates 45° with a springy cubic-bezier.

**Card interaction:** Cards navigate to `/projects/[id]/` — they do not open an inline overlay. Do not revert this to overlay behavior.

### AI Pill

```html
<span class="ai-pill">✦ AI Assisted</span>
```

Style: blue (`--c5`) text, `rgba(72,125,231,0.1)` background, `rgba(72,125,231,0.3)` border. Hidden on mobile (`display: none` at 560px breakpoint).

### Section Eyebrow

Always use a rainbow color class (`.rc1` through `.rc5`). Always uppercase. Always add class `.rev` for scroll-reveal animation. Example:

```html
<p class="section-eyebrow rc1 rev">Selected Work</p>
```

### Contact Links

```html
<a class="c-link" href="...">Label <span class="arr">→</span></a>
```

Style: `border-radius: 2px`, `1px solid rgba(0,0,0,0.18)`, glass background. On hover: border fills `--ink`, arrow translates right, background lightens.

### Tags

```html
<span class="p-tag">Tag Name</span>
```

Uppercase, 0.6rem, `--warm-gray`, small border (`0.5px solid rgba(28,25,23,0.14)`), `border-radius: 20px`, no background fill.

### Project Overlays (case study detail)

Overlays are built entirely via JS (`buildOverlayHTML`). Key structure:

- **Header panel:** white background, two colored orbs, Fraunces italic title, impact metric in gradient text, category + AI badge
- **Inner panel:** body paragraphs, screenshot grid, AI section (blue left-rule), tags
- **Overlay style:** all projects use `style-scale` (scales up from the click origin)
- **Close button:** fixed, top-right, `border-radius: 50%`, rotates 90° on hover
- **Backdrop:** `rgba(10,10,10,0.5)` when open

**Body content rules:**

- Plain strings → `<p class="p-overlay-p">` (first paragraph also gets `p-overlay-p--lead`)
- `{ kicker, bullets }` → kicker label + `<ul class="p-overlay-list">`
- `{ kicker, numbered }` → kicker label + `<ol class="p-overlay-olist">`
- Kicker color inherits from `--overlay-accent` (the project's `numColor`)

### Scroll Reveal

All below-fold elements use `.rev` class:

```css
opacity: 0;
transform: translateY(14px);
transition: opacity 0.7s ease, transform 0.7s ease;
```

Add class `.in` via IntersectionObserver to trigger. Always add `.rev` to headings, body copy, and project items.

### Floating Orbs

Six fixed-position blurred radial gradient circles that drift slowly with CSS keyframe animations. Each orb uses a different rainbow color at low opacity (0.15–0.28) with `blur(90px)`. Do not remove or disable these — they are the primary visual warmth of the site.

### Grain Overlay

Applied via `body::after` — a fixed SVG fractalNoise texture at `opacity: 0.038`. Do not remove.

### Marquee

Continuous scrolling text strip between hero and about sections. Pauses on hover. Items are duplicate-repeated for seamless looping. `animation: marquee 40s linear infinite`.

---

## 5. Voice & Tone

### Core Voice Principles

hurn.co is a personal professional site. The voice is Jenny's voice — warm, direct, self-aware without being self-deprecating, and genuinely enthusiastic about the work. It reads like a smart colleague talking about what they actually did, not a resume bullet or a brand marketing page.

**The voice is:**

- **First-person and specific.** Real project names, real numbers, real process details. Never generic.
- **Honest about difficulty.** Acknowledge when something was hard, iterative, or figured out in real time. "We didn't have a playbook to copy from" is more credible than "we executed a strategic initiative."
- **Warm but not effusive.** Enthusiasm is real, not performed. 
- **Slightly funny when it fits.** A dry observation or well-placed parenthetical is on-brand. Forced jokes are not.
- **Comfortable with AI.** AI involvement is disclosed openly and described specifically — what tool, what it was used for, what the human judgment layer was. Never hedge or apologize for using AI.

### Fraunces Italic Headlines

Display headings (hero manifesto, about pull quote, work intro, contact heading) should feel like Jenny speaking directly. They have personality:

- Use `<del>` + `<span class="grad-text">` for strikethrough gags: "Projects, puzzles, and other ~~obsessions~~ pursuits."
- Use `<em>` with `color: var(--rust)` for warm emphasis within Fraunces headings
- Keep them punchy. One thought per display line.

### Body Copy Rules

- **Default sentence length:** medium. Not short-punchy (that's brand voice), not long-winded (that's corporate). Conversational.
- **Paragraph length:** 2–4 sentences typically. Long paragraphs are acceptable in case studies when the detail earns it.
- **Kicker sections:** Use when there's a genuine list (3+ items with parallel structure). Don't use kickers for 2-item lists — just write them into prose.
- **Bold:** `<strong>` used sparingly for actual emphasis — a key number, a critical term, a phrase that carries the weight of the paragraph. Not for decoration.
- **Links in overlay body:** Use `<a class="p-overlay-link">` with `↗` external arrow.

### Anti-Patterns to Avoid

**Words and phrases that don't sound like Jenny:**

- "Synergy," "alignment," "stakeholders" in non-ironic use
- "World-class," "best-in-class," "cutting-edge" as empty descriptors
- "Seamlessly" — nothing is seamless, and saying it is reads as corporate fluff
- Any sentence starting with "Excited to share..."
- Bullet points that start with a verb and end with nothing (resume bullets): ✗ "Managed cross-functional stakeholders" → ✓ "I held product, sales, finance, CS, and existing customers in one coherent story"

**Structural anti-patterns:**

- Don't write introductory sentences that just restate the heading: ✗ "The Bootcamp was a major event." The first sentence should say something.
- Don't end case studies with a vague summary. End with something concrete — a number, a quote, a reflection, or a "what I'd do differently."
- Don't use passive voice in first-person copy. "It was built" → "I built it."

**Tone anti-patterns:**

- Overselling without evidence: if there's no number, describe what happened instead of claiming it was great
- False modesty: "I just..." or "I was only..." — own the work
- Overqualifying: "I think," "I believe," "perhaps" in factual sentences. Use hedges only when genuinely uncertain.
- Corporate warmth: "We are thrilled to..." / "It is with great excitement that..." — this is not a press release

### The "Now" Section

This section should stay current and personal. Three items: Working on, Thinking about, For Fun. Each item is 1–2 casual sentences. The "For Fun" item should reflect actual current activities — not placeholder hobbies. Numbered lists within For Fun are fine.

### Contact Section

Headline follows the pattern: "Got a puzzle you're looking to solve? Let's talk." — the hook references the puzzle motif, the second line is an invitation. Subheading is specific about what kind of work Jenny does best: early-stage, unclaimed problems. Do not make it generic ("reach out anytime!").

---

## 6. Animation & Interaction Rules

- **Reduced motion:** All animations and transitions use `@media (prefers-reduced-motion: reduce)` to disable. Orbs hide, all elements are set to `opacity: 1; transform: none`. Always respect this.
- **Hover transitions:** `0.2–0.25s ease` for color/border changes. `0.3s cubic-bezier(0.34,1.56,0.64,1)` for springy scale/rotate effects (arrow button rotation).
- **Page load sequence:** Nav (0ms) → Hero name (80ms) → Rainbow rule (400ms) → Descriptor (600ms) → Manifesto (900ms) → Scroll indicator (1300ms). Do not alter timing.
- **Overlay open:** `0.72s cubic-bezier(0.16,1,0.3,1)` scale animation. Do not flatten to a simple fade.
- **Scroll reveal:** `0.7s ease` for `.rev` elements. Project items stagger at `60ms` intervals.

---

## 7. File & Asset Conventions

- Project images live in `final-images/` directory, referenced as relative paths from the HTML file
- Image format: PNG preferred, JPG acceptable. Always include `width="1200" height="675"` on screenshot thumbnails (16:9 aspect ratio)
- All images use `loading="lazy"` except critical above-fold images
- Favicon and meta: not defined in the provided source — do not invent values; ask
- The `data-project-id` attribute on `.project-item` must exactly match a key in the `PROJECTS` object

