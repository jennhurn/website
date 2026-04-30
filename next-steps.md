# Next Steps - Personal Website

*Last updated: 2026-04-26 (operational rewrite)*

Operational plan only. This file must reference current files and executable actions.

## Current state

- Source site is Jekyll-based with homepage at `index.html`.
- Live content surfaces include:
  - `index.html`
  - `blog/index.html`
  - `projects/index.html`
  - `projects/*/index.html`
- Publish target is GitHub Pages from `main` branch, repo root.

## Immediate priorities (in order)

1. **Fact-check claim-heavy content**
   - Verify metrics and outcome claims on homepage and project pages.
   - If a number cannot be verified quickly, soften the phrasing before publish.

2. **Apply remaining full-site review findings**
   - Completed in current pass: metadata parity, native project card links, mobile nav simplification, keyboard focus visibility, semantic heading/landmark improvements, crawlable `projects/index.html`, static-first project summaries, and SEO/crawl baseline metadata (`canonical`/OG/Twitter, JSON-LD, `robots.txt`, `sitemap.xml`).
   - Source report: `work/website-review/runs/2026-04-26-full-content-review-report.md`.
   - Remaining high-priority work: proof-format standardization and claim fact-checking across cards/project narratives.

3. **Finalize and publish writing**
   - Keep `_posts/` front matter and filename dates aligned.
   - Confirm `blog/index.html` and post permalinks render correctly after edits.

4. **Prepare domain cutover**
   - Keep on-page contact/domain references consistent with intended public domain.
   - When domain is ready: add CNAME + DNS and validate routing.

## Blockers

- Domain purchase and DNS are still pending.
- Some impact claims still need explicit verification.

## Agent handoff checklist

- Read `README.md` for project structure and build/publish commands.
- Read `context/tone-voice-style-guide.md` before writing or editing copy.
- Read `context/code-style-guide.md` before making UI or code changes.
- For quality passes, follow `.agents/skills/website-review-workflow/runbook.md` and maintain the round-tracking dashboard template.
- Log meaningful strategy choices in `decisions.md`.