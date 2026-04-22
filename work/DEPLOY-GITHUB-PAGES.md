# Deploy — GitHub Pages

## Canonical repo (Jenny)


|                              |                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| **Repository**               | [github.com/jennyhurn/website](https://github.com/jennyhurn/website)                 |
| **Clone**                    | `git clone https://github.com/jennyhurn/website.git`                                 |
| **Pages URL (project site)** | `https://jennyhurn.github.io/website/` — after enabling Pages from `main` / `(root)` |


Treat `**work/index.html`** in this workspace as the authoring copy; **publish** by placing `index.html` (and `writing-drafts/` when used) at the **root** of `jennyhurn/website` (see Option B below).

---

Deploy the static site from `work/` (or promote `index.html` + `writing-drafts/` to repo root — see below).

## Option A — Site at `https://USERNAME.github.io/`

1. Create a **public** GitHub repository named `**USERNAME.github.io`** (replace `USERNAME` with your GitHub username).
2. Copy the contents of `work/` to the **root** of that repo:
  - `index.html`
  - `writing-drafts/` (entire folder)
3. Commit and push to `**main`**.
4. In the repo: **Settings → Pages → Build and deployment → Source**: **Deploy from a branch**, branch `**main`**, folder `**/ (root)`**.
5. Wait a few minutes; site should load at `https://USERNAME.github.io/`.

## Option B — Project repo (**this project: `jennyhurn/website`**)

1. Use the public repo **[jennyhurn/website](https://github.com/jennyhurn/website)** (already chosen).
2. Put `index.html` and `writing-drafts/` at the **root** of the repo (same as Option A).
3. **Settings → Pages → Source**: branch `**main`**, folder `**/ (root)`**.
4. Site URL: `**https://jennyhurn.github.io/website/**` — **all internal links must use relative paths** (current prototype uses `writing-drafts/...` which works for both root and project Pages).

## Custom domain

1. Purchase a domain at your registrar.
2. In GitHub: **Settings → Pages → Custom domain** — enter e.g. `jennyhurn.com`.
3. In the repo root, add a file named `**CNAME`** with one line: your apex or `www` hostname (match what you configure at the registrar).
4. At your registrar, add DNS per [GitHub’s docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site):
  - **Apex** (`example.com`): A records to GitHub’s IPs.
  - **Subdomain** (`www`): CNAME to `USERNAME.github.io`.
5. Wait for DNS propagation; enable **Enforce HTTPS** in GitHub Pages when available.

## Local preview

Open `index.html` locally, or run a quick static server from the folder containing `index.html`:

```bash
cd work && python3 -m http.server 8080
```

Then visit `http://localhost:8080`.