# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the **Vibe Coding Manifesto** — a set of principles for building software systems that remain maintainable, transparent, and trustworthy when automated systems (including AI) produce significant portions of the code.

Published as a VitePress site at [agilevibecoding.org](https://agilevibecoding.org) via GitHub Pages.

## Commands

```bash
npm install           # install dependencies
npm run dev           # local dev server at http://localhost:5173 — use this for development (hot reloads CSS, JS, and markdown)
npm run build         # build to docs/.vitepress/dist
npm run preview       # preview production build (static, no hot reload — only use for final verification)
npm test              # run Playwright tests against a clean production build
```

**Workflow:** always use `npm run dev` (port 5173) during development. Only build + preview to verify the final output before committing.

## Structure

- `README.md` — the manifesto content (single source of truth for both GitHub and the website)
- `docs/.vitepress/config.ts` — VitePress configuration (`srcDir: '../'`, rewrites `README.md` → `index.md`)
- `docs/.vitepress/theme/` — custom theme: `Layout.vue` (scroll-hide nav), `style.css` (initial hidden state)
- `docs/public/CNAME` — custom domain for GitHub Pages
- `.github/workflows/deploy.yml` — builds and deploys on push to `main`

## Content Structure

The manifesto is organized into three sections:

1. **Preamble** — Context for why these principles matter as AI-assisted development grows
2. **Values** — Four core value trade-offs (modeled after the Agile Manifesto format)
3. **Principles** — Twelve numbered principles covering accountability, traceability, understandability, domain structure, discoverability, determinism, automation, and knowledge preservation

## Editing Guidelines

- Maintain the manifesto's tone: concise, authoritative, non-prescriptive
- Each principle follows the pattern: bold one-sentence summary, then 1–2 sentences of elaboration
- Values follow the Agile Manifesto format: `**X over Y**` with a closing statement that both sides have value
- Preserve the numbered principle ordering when possible; if reordering, update all cross-references
