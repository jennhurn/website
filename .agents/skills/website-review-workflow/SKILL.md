---

## name: website-review-workflow
description: Run the project's iterative multi-agent website review process with scoring, synthesis, revision loops, and a publish gate at 8.0/10. Use before publishing or after significant copy/UI/structure changes.
disable-model-invocation: true

# Website Review Workflow

Run the project's fixed multi-agent review process with score-driven iteration.

## Use When

- Preparing to publish major content or UI changes.
- Running a quality checkpoint across homepage, blog, and project pages.
- Re-validating site quality after significant edits.

## Required Inputs

- The page scope to review.
- Current site files for those pages.
- `context/code-style-guide.md`
- `context/tone-voice-style-guide.md`

## Workflow Files

- Main runbook: [runbook.md](runbook.md)
- Context packet template: [context-packet-template.md](context-packet-template.md)
- Severity + scoring rubric: [severity-rubric.md](severity-rubric.md)
- Tracking dashboard template: [tracking-dashboard-template.md](tracking-dashboard-template.md)
- Agent definitions: `agents/*.md`

## Execution Rules

1. Fill a context packet before launching any reviewer agents.
2. Always run the fixed 6 persona + 4 discipline reviewers unless scope is explicitly constrained.
3. Require each reviewer to output both issues and numeric scorecards.
4. Synthesize findings and aggregate scores each round.
5. Revise, then re-run review rounds iteratively until:
  - aggregated overall score is `>= 8.00 / 10`, and
  - no unresolved Must issues remain.
6. Maintain a round-by-round tracking dashboard for transparency.
7. Stop when gains are minimal or quality is stably above target.

## Output

- One synthesized report per round with:
  - Executive Summary
  - Categorized Findings
  - Prioritized Action Plan (Must/Should/Nice)
  - Score Summary (dimension averages, overall, delta)
- One tracking dashboard log across rounds.
- Store run outputs in `work/website-review/runs/`.