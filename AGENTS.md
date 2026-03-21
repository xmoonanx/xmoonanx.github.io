# PROJECT KNOWLEDGE BASE

**Generated:** 2026-03-19
**Commit:** `5c45c7c`
**Branch:** `main`

## OVERVIEW

Customized Chirpy/Jekyll technical blog. Main complexity is not Jekyll itself; it is the customized presentation layer, JS asset pipeline, and a large `_posts` corpus organized as study-series content.

## STRUCTURE

```text
./
├── _config.yml          # site config, analytics/theme/comments/PWA/permalinks
├── _layouts/            # page-level Liquid templates
├── _includes/           # shared UI + loaders + metadata fragments
├── _javascript/         # JS source; bundled into assets/js/dist
├── _sass/               # theme tokens, commons, page layouts
├── _posts/              # dated study-note content; many series-like clusters
├── _tabs/               # nav tabs: about, archives, categories, tags
├── assets/js/dist/      # built JS artifacts committed to repo
├── tools/               # local run/test/release shell scripts
└── .sisyphus/plans/     # session planning notes; not site content
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Site-wide config | `/_config.yml` | permalink, theme_mode, analytics, PWA, tabs defaults |
| Home page | `/_layouts/home.html`, `/_sass/layout/home.scss`, `_javascript/home.js` | most recent custom UI work lands here |
| Post page | `/_layouts/post.html`, `/_layouts/default.html`, `/_sass/layout/post.scss`, `_javascript/post.js` | TOC + reading-column layout |
| Category pages | `/_layouts/categories.html`, `/_layouts/category.html`, `/_sass/layout/category-tag.scss`, `_javascript/categories.js` | hierarchical grouping logic |
| Shared UI | `/_includes/topbar.html`, `/_includes/sidebar.html`, `/_includes/footer.html`, `/_includes/search-loader.html` | search/theme/footer changes often cross here |
| JS bundling | `/rollup.config.js`, `/_javascript/`, `/assets/js/dist/` | source changes require rebuild |
| Style system | `/_sass/main.scss`, `/_sass/colors/`, `/_sass/addon/`, `/_sass/layout/` | import order matters |
| Content authoring | `/_posts/`, `/_tabs/` | see child AGENTS in `_posts/` |
| Local validation | `/tools/test.sh`, `/package.json` | `npm run build` is not optional before Jekyll |

## CONVENTIONS

- Theme is gem-based Chirpy, but layouts/includes/styles are materially customized; do not assume upstream structure blindly.
- JS source lives in `/_javascript/`; deployed code is committed from `/assets/js/dist/*.min.js`.
- SCSS source is split by concern: `colors` -> `addon` -> `layout`, imported through `/_sass/main.scss`.
- Posts use hierarchical categories heavily; the blog behaves like clustered course notes more than generic chron posts.
- Post filenames follow `YYYY-MM-DD-SUBJECT(topic).md` style and often map to course/series progress.
- Relative image references in posts commonly point to `../assets/img/<Subject>/...`.
- `About` is still placeholder and `Series/Learning Path` does not exist yet; growth work should start there, not by reopening broad homepage redesign.

## ANTI-PATTERNS (THIS PROJECT)

- Never modify `permalink: /posts/:title/` in `/_config.yml` casually; existing links depend on it.
- Never use `@extend` inside `@media` blocks in SCSS; this already caused a real Sass failure here.
- Never assume CI covers everything: multiple workflows still target `master` or `production`, while active work happens on `main`.
- Never edit `/_javascript/` without rebuilding `assets/js/dist/`.
- Never assume `npm test` is a real test suite; it is SCSS lint only.
- Never re-add metadata-heavy home category previews unless you intentionally want unequal card heights again.
- Never treat `.sisyphus/` as site content; it is planning/handoff only.

## UNIQUE STYLES

- Home/category/post layouts were recently tuned repeatedly; small visual tweaks can have visible knock-on effects.
- Theme toggle and search were fixed via defensive JS guards and page-specific interaction flow; preserve those checks.
- This repo prefers concise, reviewable fixes over sweeping theme rewrites.

## COMMANDS

```bash
npm install
npm run build
npm run build:js
npm run lint:scss
bash tools/run.sh
bash tools/test.sh
bundle exec jekyll build --baseurl ""
```

## NOTES

- `jekyll.yml` on `main` is the functional deploy workflow; several other workflows are currently branch-misaligned.
- Local HTML can differ from CI because `compress_html` is inactive in development.
- `_site/`, `node_modules/`, `.bundle/`, and `Gemfile.lock` are ignored; built JS is committed, built site is not.
- Child guidance exists in `/_javascript/AGENTS.md`, `/_sass/AGENTS.md`, `/_layouts/AGENTS.md`, and `/_posts/AGENTS.md`.
