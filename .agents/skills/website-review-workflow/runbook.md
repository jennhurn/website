# Website Review Runbook (Multi-Agent, Iterative)

Version: 2.0  
Scope: all published pages by default.

This process is iterative and score-driven. The orchestrator runs review -> synthesis -> revision loops until quality gains are minimal and publish criteria are met.

## Inputs to provide per run

Create a context packet using `.agents/skills/website-review-workflow/context-packet-template.md`.

Required context packet fields (must be filled by the orchestrator):

- `Review scope:` all pages (or explicitly constrained run scope)
- `Pages:` explicit page list for this run
- `Code style guide:` `context/code-style-guide.md`
- `Tone/voice style guide:` `context/tone-voice-style-guide.md`
- `What changed:` copy/UI/structure changes since last review
- `Audience assumption:` executive recruiters and hiring managers
- `Success definition:` recruiter/hiring manager can understand value quickly and take a low-friction next step (contact) with credible proof
- `Known constraints:` static HTML/CSS/JS; follow both guides for recommendations
- `Scoring target:` aggregated overall score >= `8.00 / 10`
- `Minimal gain threshold:` stop when round-over-round gain is `< 0.20` for two consecutive rounds

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

## Reviewer scoring contract (required each round)

Each reviewer must:

1. Follow its issue schema.
2. Apply `.agents/skills/website-review-workflow/severity-rubric.md`.
3. Output:
  - `Dimension Scores` (5 dimensions, 0-10 each)
  - `Overall Score` (weighted, 0-10, 2 decimals)
  - `Confidence` (`High | Medium | Low`)
  - `Top 3 score drivers`

## Workflow phases (per round)

### Phase 0: Orchestrator setup

1. Confirm the page list is exactly the `Pages:` from the context packet.
  - Default page set (if not constrained): `index.html`, `blog/index.html`, `projects/index.html`, and `projects/*/index.html`.
2. Load per-agent definition files from `.agents/skills/website-review-workflow/agents/`.
3. Require reviewer outputs to include both issues and scorecards.
4. Initialize or update the tracking dashboard using `.agents/skills/website-review-workflow/tracking-dashboard-template.md`.

### Phase 1: Persona scan

Run all 6 persona agents in parallel.

### Phase 2: Discipline deep-dive

Run all 4 discipline specialists in parallel.

### Phase 3: Synthesis + aggregation

Synthesizer must:

1. Dedup only exact duplicates and same-root-cause repeats.
2. Preserve thoroughness (do not remove meaningful evidence).
3. Aggregate all reviewer scores into:
  - round-level average per dimension
  - round-level aggregated overall score
  - score delta vs previous round
4. Output:
  - `Executive Summary` (3-6 bullets)
  - `Categorized Findings` (UX/Content, UI/Design, Code/Semantics, SEO/Accessibility, Persona/Resonance)
  - `Prioritized Action Plan` (Must/Should/Nice)
  - `Score Summary` (dimension averages + overall + delta)
  - `Top blockers to 8.0`

### Phase 4: Revision pass

Revision agent(s) implement highest-leverage fixes from synthesis, in this order:

1. Resolve all open Must issues.
2. Fix highest-impact Should issues tied to low-scoring dimensions.
3. Defer Nice issues unless they materially affect the target score.

### Phase 5: Continue-or-stop gate

After each round, orchestrator decides:

- **Continue** if:
  - aggregated overall score `< 8.00`, or
  - any Must issue remains unresolved.
- **Stop** if all are true:
  - aggregated overall score `>= 8.00`,
  - no unresolved Must issues,
  - gains are minimal (`< 0.20`) or score is stable at/above target.

## Tracking dashboard (required)

The orchestrator must maintain a round-by-round dashboard containing:

- round number
- date/time
- reviewer count
- each dimension average
- aggregated overall score
- delta vs previous round
- Must/Should/Nice counts
- key changes implemented
- notes on what improved or regressed

Use `.agents/skills/website-review-workflow/tracking-dashboard-template.md` as the canonical format.

# Website Review Runbook (Multi-Agent)

Version: 1.0
Scope: all published pages by default.

## Inputs to provide per run

Create a context packet using `.agents/skills/website-review-workflow/context-packet-template.md`.

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
2. Load the per-agent definition files from `.agents/skills/website-review-workflow/agents/`:
  - Each agent must receive ONLY:
    - the filled context packet
    - the page(s) to review (default all pages)
    - `context/code-style-guide.md`
    - `context/tone-voice-style-guide.md`
    - its own definition file from `.agents/skills/website-review-workflow/agents/`
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