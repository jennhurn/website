# Next Steps — Personal Website (hurn.co)

*Last updated: 2026-04-15 (agent handoff)*

This is the live execution plan. **Read this file first** when picking up the project in a new session.

---

## Current status (snapshot)


| Phase       | Meaning here                                        | State                                                                                              |
| ----------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Phase 0** | Brief, IA, design direction                         | **Done**                                                                                           |
| **Phase 1** | Static homepage prototype in `work/index.html`      | **Done — evolved** (long-form Selected work copy, Work Sans stack, contact/footer use **hurn.co**) |
| **Phase 2** | Copy approval + fact-check + writing stubs resolved | **In progress / next**                                                                             |
| **Phase 3** | GitHub Pages + DNS for custom domain                | **Not started** (waiting on domain/DNS)                                                            |


**Single source of truth for the live page:** `work/index.html` (single-file HTML/CSS/JS; year script only).

**Do not assume** older docs match the file: typography and Selected work were heavily updated after Phase 1 was first marked complete. See `work/project-brief.md` and `context/design-direction.md` for aligned specs.

---

## Now (priority order)

1. **Jenny — fact-check Selected work**
  Cards include specific metrics and claims (registrants, leads, eNPS, onboarding %, Built In years, etc.). Confirm each against internal records or soften wording before public deploy.
2. **GitHub + domain**
  **Repo:** [github.com/jennyhurn/website](https://github.com/jennyhurn/website) (`git clone https://github.com/jennyhurn/website.git`). Push `work/index.html` (and assets) to repo root; enable Pages per `work/DEPLOY-GITHUB-PAGES.md`. Site copy references **hurn.co** (`hello@hurn.co`, footer) — add **CNAME** + DNS when domain is ready.
3. **Writing section**
  Replace “Coming soon” / `#` links when ready; paste LinkedIn sources into `work/inputs-needed.md` (or `work/linkedin-source-posts.md`) and adapt into `work/writing-drafts/`.
4. **Phase 2 checklist**
  Run `work/CHECKLIST-phase2-approval.md` before deploy.

---

## Up next (after above)

- Deploy via `work/DEPLOY-GITHUB-PAGES.md`.
- Optional: shorten Selected work cards for scanability, or move long case copy to dedicated `/writing/` or case pages later (IA still homepage-first).

---

## Blocked / waiting on

- Domain purchase and DNS (custom domain to **hurn.co** per site copy).
- LinkedIn (or other) source posts for Writing pieces not yet published as HTML pages.
- Explicit sign-off on **metric accuracy** in Selected work.

---

## Open questions

- Whether to move this folder to `marketing/` if it becomes clearly marketing-owned (see `decisions.md`).
- Optional: trim card body length on the homepage vs. keep long-form proof on the main page.

---

## Completed (recent)

- Phase 0: `work/project-brief.md`, `work/homepage-content-outline.md`, `context/design-direction.md`.
- Phase 1: `work/index.html` prototype; `work/writing-drafts/` stubs; no font picker — **Work Sans** (display) + **Source Sans 3** (body) + **JetBrains Mono** (labels/nav).
- Selected work: **title → impact line (with `.card-stat` highlights) → description**; Marketing & Sales (6), People (4), Operations (3) cards.
- Phase 2–3 artifacts: `work/CHECKLIST-phase2-approval.md`, `work/DEPLOY-GITHUB-PAGES.md`, `work/inputs-needed.md`, `work/REVIEW-phase1.md` (refresh when UI changes).

---

## Handoff notes for agents

- **Review checklist** for a browser pass: `work/REVIEW-phase1.md` (updated to match current build).
- **Visual spec:** `context/design-direction.md` includes **shipped** typography; original Syne/Inter plan was superseded by Work Sans / Source Sans 3.
- **Brief** success criteria now allow **stat- and outcome-led** proof in Selected work (see brief).