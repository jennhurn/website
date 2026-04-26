# Website Review Runbook (Multi-Agent)

Version: 1.0
Scope: all published pages by default.

## Inputs to provide per run
Create a context packet using `work/website-review/runbook/context-packet-template.md`.

Required context packet fields (must be filled by the orchestrator):
- `Review scope:` all pages (or explicitly constrained run scope)
- `Pages:` explicit page list for this run
- `Code style guide:` `context/code-style-guide.md`
- `Tone/voice style guide:` `context/tone-voice-style-guide.md`
- `What changed:` copy/UI/structure changes since last review
- `Audience assumption:` executive recruiters and hiring managers
- `Success definition:` recruiter/hiring manager can understand value quickly and take a low-friction next step (contact) with credible proof
- `Known constraints:` static HTML/CSS/JS; follow both guides for recommendations

## Fixed run set (ALWAYS run; do not omit)
Personas (always all 6):
- `ceo-exec`
- `chief-of-staff-recruiter`
- `technical-ceo`
- `startup-exec-cofounder`
- `people-ops-hr`
- `culture-values`

Disciplines (always all 4):
- `ux-content`
- `ui-design-systems`
- `code-semantics`
- `seo-accessibility`

## Workflow phases
### Phase 0: Orchestrator setup
1. Confirm the page list is exactly the `Pages:` from the context packet.
   - Default page set (if not constrained): `index.html`, `blog/index.html`, `projects/index.html`, and `projects/*/index.html`.
2. Load the per-agent definition files from `work/website-review/agents/`:
   - Each agent must receive ONLY:
     - the filled context packet
     - the page(s) to review (default all pages)
     - `context/code-style-guide.md`
     - `context/tone-voice-style-guide.md`
     - its own definition file from `work/website-review/agents/`
3. Tell agents:
   - Do not reference other agents.
   - Do not add "generic advice." Every issue must be tied to a specific section/phrase/element on the page.

### Phase 1: Persona Scan
Run all 6 persona agents in parallel.

For each persona agent:
- The agent must follow its own output schema exactly (see its definition file).

### Phase 2: Discipline Deep-Dive
Run all 4 discipline specialists in parallel.

For each discipline specialist:
- The agent must follow its own output schema exactly (see its definition file).

### Phase 3: Synthesizer merge + dedupe + prioritize (keep it thorough)
Synthesizer must:
1. Dedup only exact duplicates and same-root-cause repeats.
   - If agents report different root causes (even if they feel similar), keep them separate.
2. Preserve thoroughness: do not compress by deleting evidence; shorten only by deduping exact duplicates.
3. Output a single final report with:
   - `Executive Summary:` 3-6 bullets
   - `Categorized Findings:` grouped into:
     - UX/Content
     - UI/Design
     - Code/Semantics
     - SEO/Accessibility
     - Persona/Resonance
   - `Prioritized Action Plan:` ordered buckets:
     - `Must` (ordered)
     - `Should` (ordered)
     - `Nice` (ordered)
   - For every `Must` item include:
     - `Why now:` 1 sentence
     - `Implementation notes:` 1-3 bullets
