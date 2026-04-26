# Website Review Report

Date: 2026-04-26  
Scope: full content pass (`index.html`, `blog/index.html`, `projects/index.html`, `projects/*/index.html`, `_posts/*.md`)  
Audience: executive recruiters and hiring managers  
Agents run: 6 persona + 4 discipline (all fixed agents)

## Executive Summary

- Full runbook execution is complete across all required persona and discipline reviewers.
- The strongest recurring risk is trust/credibility friction from inconsistent proof formatting and inconsistent writing metadata across surfaces.
- Structural SEO and accessibility gaps are concentrated in project detail delivery (JS-injected content, weak standalone `/projects/` index, and semantic interaction patterns).
- Positioning is memorable, but role-fit is not explicit enough in first-pass recruiter/executive skim behavior.
- Contact and conversion paths are present, but not yet optimized for recruiter-specific next steps.

## Categorized Findings

### UX/Content

- **Must**: Writing metadata inconsistencies create avoidable trust damage.
  - **Evidence**: Homepage Writing entries do not fully align with post front matter (date/title mismatch for the AI post and title mismatch for the COS post).
  - **Recommended fix**: Source Writing card title/date from canonical post metadata (or manually enforce exact parity).
- **Should**: Role-fit clarity is delayed by personality-first framing above the fold.
  - **Evidence**: Hero/intro language is distinctive but not explicit about role scope in recruiter terms.
  - **Recommended fix**: Add one concise role/scope line near the hero and one compact “fit snapshot” block.
- **Should**: Contact copy is warm but not explicitly hiring-flow oriented.
  - **Evidence**: CTA is conversational and broad; no recruiter-targeted path framing.
  - **Recommended fix**: Add a hiring-specific CTA variant and clearly signal the preferred outreach path.
- **Nice**: Blog landing subtitle is implementation-centric instead of reader-value-centric.
  - **Evidence**: Subtitle describes stack/rendering rather than content value.
  - **Recommended fix**: Rewrite subtitle to express what operators/recruiters learn from the writing.

### UI/Design

- **Must**: Keyboard focus visibility is inconsistent or absent on key controls.
  - **Evidence**: Hover states are present, but shared, explicit `:focus-visible` treatment is not consistently defined across nav, cards, links, and modal controls.
  - **Recommended fix**: Add one shared focus token system and apply it across all interactive components.
- **Should**: Mobile nav behavior appears better handled on homepage than shared templates.
  - **Evidence**: Homepage has tighter mobile nav handling while shared layout nav behavior is less robust on narrow widths.
  - **Recommended fix**: Centralize nav responsiveness in shared layout styles.
- **Nice**: Token discipline drifts in some template CSS via hardcoded colors.
  - **Evidence**: Literal color values are repeated in templates where semantic variables are preferred.
  - **Recommended fix**: Replace repeated literals with existing color variables for maintainability.

### Code/Semantics

- **Must**: Homepage project cards use JS-upgraded list items instead of native link semantics.
  - **Evidence**: Cards are list items made clickable via JS with `role="link"` + `tabIndex`.
  - **Recommended fix**: Render cards as native `<a>` links (or links inside each card) and remove semantic polyfill behavior.
- **Must**: Project detail pages rely on runtime JS injection for primary content.
  - **Evidence**: Project files contain front matter only; critical case-study content is injected client-side.
  - **Recommended fix**: Server-render essential project content in static HTML, then progressively enhance with JS.
- **Should**: Landmark and heading semantics can be strengthened.
  - **Evidence**: Homepage lacks a clear `<main>` region; project detail heading hierarchy starts at visual styles not always semantic top-level headings.
  - **Recommended fix**: Add `<main>` around primary content and ensure each project detail has a true page-level heading structure.
- **Should**: Modal/lightbox focus flow is only partially handled.
  - **Evidence**: Open/close and escape handling exist, but robust focus trapping/return behavior is incomplete.
  - **Recommended fix**: Add focus trap and deterministic focus return to trigger element.

### SEO/Accessibility

- **Must**: Crawl/discovery quality is constrained by thin JS-dependent project pages.
  - **Evidence**: Important project proof is not present as static, crawl-friendly HTML in project URLs.
  - **Recommended fix**: Publish static summaries and core proof on each project page; keep JS as enhancement.
- **Should**: `/projects/` is redirect-only instead of a crawlable index hub.
  - **Evidence**: Immediate redirect shell with minimal fallback text.
  - **Recommended fix**: Replace with a lightweight projects index that links to every case study.
- **Should**: Metadata specificity should be expanded per project page.
  - **Evidence**: Project pages largely inherit generic site description.
  - **Recommended fix**: Add page-specific descriptions aligned to each project outcome domain.
- **Nice**: Homepage `<title>` can be more intent-aligned.
  - **Evidence**: Current title is minimal and omits role/value context.
  - **Recommended fix**: Extend title with role + operator context.

### Persona/Resonance

- **Must**: Outcome proof consistency is uneven across projects.
  - **Evidence**: Some case studies are tightly quantified while others use broad qualitative impact labels in equivalent prominence.
  - **Recommended fix**: Normalize impact to bounded format: metric + timeframe + scope/ownership.
- **Should**: AI framing is strong but occasionally competes with operator identity.
  - **Evidence**: Repeated AI-forward cues can overshadow executive operator framing in quick scans.
  - **Recommended fix**: Keep AI as method-level proof, not the first identity cue.
- **Should**: A “coming soon” writing item in top slots can signal unfinished curation.
  - **Evidence**: Placeholder-style entry appears alongside published posts.
  - **Recommended fix**: Reorder published items first or relabel placeholder as draft-in-progress.

## Prioritized Action Plan

### Must (ordered)

1. Resolve writing metadata inconsistencies across homepage/blog/post surfaces.
  - **Why now**: This is the fastest trust recovery win and directly affects reviewer confidence.
  - **Implementation notes**:
    - Make writing card title/date derive from post front matter.
    - Align existing mismatched title/date strings immediately.
    - Add a quick metadata parity check before publish.
2. Convert homepage project cards to native link semantics.
  - **Why now**: This is a major usability/accessibility and semantic correctness issue in core navigation.
  - **Implementation notes**:
    - Replace JS `role="link"`/`tabIndex` approach with native anchors.
    - Preserve current visual layout and hover treatments.
    - Retain keyboard/assistive behavior through native HTML, not polyfills.
3. Make project detail pages static-first instead of JS-content-only.
  - **Why now**: Crawlability and direct-link credibility depend on server-rendered proof.
  - **Implementation notes**:
    - Render project summary, ownership, and impact in static HTML per page.
    - Keep enhanced modules (lightbox/interactions) as progressive enhancement.
    - Add page-level metadata and heading semantics while refactoring.
4. Add a shared focus-visible and modal focus-management accessibility baseline.
  - **Why now**: Keyboard navigation quality is a foundational accessibility blocker.
  - **Implementation notes**:
    - Define one reusable `:focus-visible` pattern for all interactive components.
    - Trap focus in modal/lightbox contexts and return focus on close.
    - Verify keyboard flow on homepage, blog, and project templates.
5. Standardize impact proof formatting across all featured projects.
  - **Why now**: Inconsistent proof rigor undermines overall credibility for executive/recruiter audiences.
  - **Implementation notes**:
    - Rewrite each project impact to include metric/timeframe/scope where possible.
    - Where exact numbers are unavailable, use bounded directional phrasing.
    - Apply the same proof template to card-level summaries and project headers.

### Should (ordered)

1. Add explicit role/scope fit language above the fold and a concise recruiter skim block.
2. Add hiring-oriented CTA copy and a clearer primary outreach path.
3. Replace redirect-only `/projects/` with a lightweight, crawlable project index page.
4. Unify shared mobile nav behavior across homepage, blog, post, and project layouts.
5. Soften abstract or inflated phrases in high-visibility sections to match tone guide precision.

### Nice (ordered)

1. Rewrite blog subtitle to audience value, not implementation details.
2. Reorder or relabel placeholder writing entries to avoid unfinished signaling.
3. Clean minor copy polish issues (spacing/punctuation and small text consistency).

## Notes on Deduping

- Exact duplicate findings and same-root-cause repeats were merged.
- Distinct root causes were kept separate even when related (for example, role-fit clarity vs proof standardization).
- This report intentionally preserves thoroughness while removing redundancy across all 10 reviewers.