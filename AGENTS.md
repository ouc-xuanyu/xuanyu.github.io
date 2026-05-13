# AGENTS.md

## Cursor Cloud specific instructions

Static personal homepage for 罗梒, deployed via GitHub Pages.

**Stack:** HTML + CSS + vanilla JS. No package manager, no build step, no dependencies.

**Files:** `index.html` (page structure), `style.css` (styles/animations), `script.js` (nav/scroll interactions), `CNAME` (custom domain `xuanyu.top`).

**Dev server:** `python3 -m http.server 8080` — serves the site at http://localhost:8080/.

**Testing:** No automated tests. Verify changes by loading the page in a browser (use the `computerUse` subagent for visual checks).

**Lint/Build:** None configured. No linter, no bundler, no build command.

**Custom domain:** `xuanyu.top` is configured via `CNAME` file. DNS must point to GitHub Pages IPs (A records: `185.199.108-111.153`) at the domain registrar. If DNS is not configured, the site is still accessible at `https://ouc-xuanyu.github.io/`.
