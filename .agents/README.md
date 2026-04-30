# Agent Workspace (`.agents/`)

This folder is the canonical home for reusable agent instructions and skills in this project.

## Why this exists

- Keep agent logic separate from website code/content files.
- Give future agents one obvious place to look before creating new prompts.
- Avoid duplicating guidance across `work/`, `context/`, and ad-hoc docs.

## Structure

- `skills/` - reusable project skills (one directory per skill).

## Rules of use

- Put durable, reusable guidance in `.agents/skills/`.
- Keep one-off execution artifacts in `work/` (for example review reports in `work/website-review/runs/`).
- Keep output artifacts and reports in `work/` or `outputs/`, not in `.agents/`.

## Current reusable skills

- `.agents/skills/website-review-workflow/` contains the canonical review workflow skill and agent definitions.
- `.agents/skills/human-blog-writing/` contains the evidence-first blog writing and authenticity review workflow.