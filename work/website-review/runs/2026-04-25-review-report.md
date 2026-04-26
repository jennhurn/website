# Website Review Report

Date: 2026-04-25  
Scope: `index.html`  
Audience: Executive recruiters and hiring managers  
Agents run: 6 persona + 4 discipline (all fixed agents)

## Executive Summary

- Strong outcomes and breadth are present, but role-fit and value proposition are not explicit enough in the first 10 seconds.
- Contact exists (`mailto` + LinkedIn), but conversion is weaker than it could be because the CTA is not recruiter-specific.
- Proof quality is good but inconsistent at card-level; many claims need clearer context (timeframe, baseline, ownership).
- Semantic/accessibility gaps (headings, focus states, modal focus trap, non-native clickable cards) create usability risk.
- SEO discoverability is constrained by weak metadata and non-crawlable/deep-link-unfriendly proof content.

## Categorized Findings

### UX/Content

- **Must**: Hero positioning is abstract and role-ambiguous.
  - **Evidence**: Hero language centers on "projects, puzzles, and problems" and rotating identity descriptors, rather than a stable, explicit role + outcomes statement.
  - **Recommended fix**: Replace hero manifesto with a concrete role/value line and keep one stable descriptor.
- **Must**: Contact copy is conversational but not recruiter-optimized.
  - **Evidence**: "Got a puzzle you're looking to solve?" plus only email/LinkedIn creates extra interpretation/work for hiring flows.
  - **Recommended fix**: Add hiring-specific CTA language and one primary action pattern.
- **Should**: About/work framing is copy-dense before proof.
  - **Evidence**: Long narrative blocks require inference before outcome proof is fully understood.
  - **Recommended fix**: Tighten top narrative and surface concise outcome framing earlier.
- **Should**: Writing section appears unfinished.
  - **Evidence**: Entries are "Coming soon" only.
  - **Recommended fix**: Publish one item or relabel/move section to avoid credibility drag.

### UI/Design

- **Must**: Missing consistent `:focus-visible` styles on primary interactive elements.
  - **Evidence**: Hover affordances exist widely; explicit keyboard focus treatment is not consistently defined for key controls.
  - **Recommended fix**: Add consistent focus tokens to nav links, cards, CTA links, and modal controls.
- **Must**: Small muted microtype weakens scan readability.
  - **Evidence**: Very small metadata/label text with muted color appears in multiple high-scan areas.
  - **Recommended fix**: Increase minimum small-text size for critical labels and darken muted token where needed.
- **Should**: Contact CTA visual prominence is low relative to surrounding UI.
  - **Evidence**: CTA styling reads as secondary.
  - **Recommended fix**: Introduce a clear primary CTA style and secondary action hierarchy.
- **Should**: Mobile nav/readability can feel dense.
  - **Evidence**: Small, wrapped nav text and crowded top area on narrow screens.
  - **Recommended fix**: Simplify/compact nav behavior and improve tap/read spacing.

### Code/Semantics

- **Must**: Several major sections are not represented with semantic headings.
  - **Evidence**: Key labels (e.g., About/Writing) are presented as text elements rather than heading structure.
  - **Recommended fix**: Normalize section heading hierarchy under one clear `h1`.
- **Must**: Clickable project cards rely on JS-applied button semantics.
  - **Evidence**: Non-native interactive elements are upgraded via JS handlers.
  - **Recommended fix**: Use native `<button>`/`<a>` interaction semantics in markup.
- **Must**: Modal interactions lack full focus-trap behavior.
  - **Evidence**: Open/close focus behavior exists, but tab containment in active dialogs is incomplete.
  - **Recommended fix**: Add tabbable-cycle focus trap and preserve robust focus return.
- **Should**: No `main` landmark for primary content.
  - **Evidence**: Core page structure lacks explicit landmark wrapper.
  - **Recommended fix**: Wrap primary content in `<main>`.
- **Should**: Case studies are not deep-linkable/shareable as stable URLs.
  - **Evidence**: Overlay flow is JS-driven without robust project URL state.
  - **Recommended fix**: Add hash/URL state or dedicated case pages.

### SEO/Accessibility

- **Must**: Title/meta do not target recruiter/hiring-manager intent.
  - **Evidence**: Metadata is highly generic and does not include role/function outcomes language.
  - **Recommended fix**: Rewrite title/meta with role + outcomes + audience alignment.
- **Must**: Proof content discoverability is constrained by interaction/crawl pattern.
  - **Evidence**: Important details are concentrated in overlay content not easily crawlable/shareable at card level.
  - **Recommended fix**: Ensure key proof is present in crawlable static structure and expose stable links.
- **Should**: Heading/content partitioning weakens topical clarity for crawlers and assistive tech.
  - **Evidence**: Sparse heading structure with narrative/proof/contact separation mostly visual.
  - **Recommended fix**: Strengthen semantic sectioning and heading structure.

### Persona/Resonance

- **Must**: Role-fit clarity is not immediate enough for executive and recruiter screening.
  - **Evidence**: Multiple persona agents independently flagged first-screen role ambiguity.
  - **Recommended fix**: Stable, explicit role statement + function scope + outcome pattern above fold.
- **Should**: Some personality phrases overpower strategic framing.
  - **Evidence**: "Puzzle" motif appears often across hero/about/contact.
  - **Recommended fix**: Keep voice, but reduce repetition and anchor each section with operator framing.
- **Should**: Outcome claims need stronger verification cues.
  - **Evidence**: Several claims appear without immediate context at first scan.
  - **Recommended fix**: Standardize proof formatting (metric + timeframe + baseline/ownership).

## Prioritized Action Plan

### Must (ordered)

1. Rewrite hero for explicit role-fit and outcome clarity.
  - **Why now**: This is the highest-impact decision bottleneck in the first 10 seconds.
  - **Implementation notes**:
    - Replace rotating identity-heavy descriptor with stable role + scope line.
    - Keep one concise secondary personality line only.
    - Add one visible outcome cue above fold.
2. Make contact CTA recruiter-specific and visibly primary.
  - **Why now**: Even interested reviewers need a lower-friction, clearer next step.
  - **Implementation notes**:
    - Rewrite contact copy for hiring intent.
    - Keep email + LinkedIn but define primary/secondary visual hierarchy.
    - Optionally add scheduling CTA.
3. Standardize proof quality at card-level.
  - **Why now**: Credibility conversion depends on quick verification without deep clicks.
  - **Implementation notes**:
    - Format each key claim as metric + timeframe + context/ownership.
    - Surface one verifiable proof cue directly on each card.
    - Add explicit "View case study" affordance.
4. Fix semantic/accessibility foundations (headings, native interactive controls, modal focus trap, focus-visible states).
  - **Why now**: These are quality and accessibility blockers affecting usability and trust.
  - **Implementation notes**:
    - Normalize heading hierarchy and add `<main>`.
    - Convert card interactions to native controls.
    - Add dialog focus trap and consistent focus-visible styles.
5. Improve metadata and crawl/share structure.
  - **Why now**: Recruiter discovery and external validation improve only when intent and proof are searchable/shareable.
  - **Implementation notes**:
    - Rewrite title/meta to hiring intent.
    - Make proof links/deep links stable and crawl-friendly.
    - Preserve key proof text in static HTML where possible.

### Should (ordered)

1. Reduce repeated puzzle-centric language in critical conversion areas.
2. Tighten long narrative sections for scanability.
3. Improve mobile nav/read density and CTA prominence.
4. Rework Writing section (publish one item or reposition/relabel).

### Nice (ordered)

1. Unify radius/shape token consistency across components.
2. Add one recruiter-facing expectation line (response speed / preferred outreach format).

## Notes on Deduping

- Repeated findings from multiple agents were merged by root cause.
- Distinct root causes were retained separately even when related (e.g., role-fit clarity vs proof-context quality).