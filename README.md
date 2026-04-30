# jennyhurn/website

Static personal website published with **GitHub Pages**.

## Live Site

- **URL:** [jennyhurn.github.io/website](https://jennyhurn.github.io/website/)
- **Published branch/folder:** `main` / `(root)`

## Repository Structure

- `index.html` - homepage
- `blog/index.html` - writing index page
- `projects/index.html` - projects index page
- `projects/*/index.html` - individual project pages
- `_posts/` - markdown blog posts with front matter
- `_layouts/` - Jekyll layout templates
- `assets/`, `img/`, `final-images/` - static assets

## Local Development

1. Install dependencies:
  - `bundle install`
2. Run local server:
  - `bundle exec jekyll serve`
3. Build for production check:
  - `bundle exec jekyll build`

## Publishing Workflow

- Commit changes to `main`.
- Confirm GitHub Pages is configured to deploy from root.
- Verify:
  - Homepage loads
  - Blog index and post routes load
  - Project index and project detail pages load

## Agent Workflow Documents

- `next-steps.md` - operational execution plan
- `decisions.md` - key decisions and rationale
- `.agents/README.md` - reusable agent workspace and conventions
- `.agents/skills/` - project-specific reusable skill definitions
- `.agents/skills/website-review-workflow/SKILL.md` - multi-agent review skill entrypoint
- `.agents/skills/website-review-workflow/runbook.md` - multi-agent review process
- `context/style-guide.md` - index for active style guides
- `context/code-style-guide.md` - implementation conventions
- `context/tone-voice-style-guide.md` - writing and narrative standards

## Content and Style Rules

- Treat files in this repo as publish-ready.
- Follow `context/tone-voice-style-guide.md` for copy work.
- Follow `context/code-style-guide.md` for code and UI edits.
- Keep claims specific and verifiable; soften unverified numbers.
- Keep navigation labels and CTA text clear and action-oriented.

## Post Conventions

- Use `layout: post` in front matter.
- Match the post filename date to the front matter `date` (`YYYY-MM-DD-title.md`).
- Include `title`, `date`, and `description` in every post.