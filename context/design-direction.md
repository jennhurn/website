# Design Direction — Personal Site

**Intent:** **Startup-coded** dark UI: product-like identity — grid, cyan/teal accent system, display + body + mono, glass nav, soft orbs, card hover glow. It should feel like a modern operator / builder site, not a printable document.

**Shipped in `work/index.html` (2026-04):** **Work Sans** (display / headlines), **Source Sans 3** (body), **JetBrains Mono** (nav, section indices, tags). Early exploration used Syne + Inter; the living page uses the stack above — treat it as canonical unless Jenny requests a redesign.

**Why:** The prior editorial serif direction read too flat (“Google Doc”) for this project. Jenny asked for stronger tech-native identity without losing readable copy.

---

## North Star

Dark canvas + **structured UI**: monospace labels, numbered sections, bordered panels, subtle depth. Still human copy — the chrome signals “I work in tech and ship,” not “template resume.”

---

## What to Keep

- **Dark base** — navy-charcoal (`#0b0e18` family), layered surfaces.  
- **Accent system** — blue `#63b3ed` + teal `#4fd1c5` for gradients and highlights.  
- **Grid + atmosphere** — light grid overlay; optional soft blurred orbs (low opacity).  
- **Typography stack** — **Work Sans** display, **Source Sans 3** body, **JetBrains Mono** for nav, tags, section indices, footer. *(Legacy note: Syne + Inter was the first spec; not what ships today.)*  
- **CSS variables** — single source of truth for tokens.  
- **Accessibility** — contrast on body text; `:focus-visible` on links and cards; `prefers-reduced-motion` reduces motion.

---

## What to Avoid

- **Document typography** — long serif-only pages that feel like a memo.  
- **Undifferentiated minimal** — gray text on white or near-white (not the goal here).  
- **Pure gimmick** — marquee tickers or neon overload that fight reading (optional thin accent only if it earns its place).

---

## Components

| Element | Direction |
|--------|-----------|
| **Nav** | Sticky, blur, bottom border; logo wordmark with accent dot; mono nav links. |
| **Hero** | Eyebrow pill + pulse dot; headline split with **gradient line** on key phrase. |
| **Sections** | `01` … mono index + Work Sans title + fading rule. |
| **Work / Writing cards** | Dark surface, border, hover: lift + top gradient hairline + soft glow. |
| **Now** | Bordered panels; `//` label prefix in mono. |
| **Contact** | Gradient on CTA phrase; rows with hover arrow nudge. |

---

## Implementation

Prototype: `work/index.html` (single-file CSS). Writing pages mirror tokens for consistency.

---

## Revision

| Date | Note |
|------|------|
| 2026-04-15 | Pivoted from “editorial serif / grain only” to startup-coded stack per Jenny feedback. |
| 2026-04-15 | **Shipped fonts:** Work Sans + Source Sans 3 + JetBrains Mono (single-file `work/index.html`); font picker removed. |
