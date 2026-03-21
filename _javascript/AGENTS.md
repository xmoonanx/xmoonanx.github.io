# JS MODULE GUIDE

## OVERVIEW

Source JS for page-specific behavior, shared layout behavior, theme handling, and PWA registration; bundled into committed files under `assets/js/dist/`.

## STRUCTURE

```text
_javascript/
├── commons.js      # shared layout init
├── home.js         # home page entry
├── categories.js   # categories page entry
├── page.js         # generic page entry
├── post.js         # post page entry
├── misc.js         # archives/tag/category misc entry
├── modules/
│   ├── components/ # TOC, search, clipboard, mode toggle, etc.
│   ├── layouts/    # sidebar/topbar/basic init
│   └── theme.js    # sync-loaded Theme object
└── pwa/            # app + service worker
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Page boot order | `commons.js`, `home.js`, `post.js`, `page.js`, `categories.js`, `misc.js` | one entry per page family |
| Theme toggle | `modules/theme.js`, `modules/components/mode-toggle.js` | `theme.min.js` loads synchronously from `head.html` |
| Search behavior | `modules/components/search-display.js` | home/search regressions were fixed here |
| TOC behavior | `modules/components/toc.js` | singleton-sensitive |
| Image loading | `modules/components/img-loading.js` | cached-image and LQIP edge cases |

## CONVENTIONS

- Keep page entries tiny; they mostly compose exported initializers.
- The global `Theme` object comes from `modules/theme.js`; consumers must degrade gracefully if it is absent.
- `head.html` and `js-selector.html` determine load order; do not assume every module is present on every page.
- Defensive DOM guards are the norm: if an element may not exist, bail early.

## ANTI-PATTERNS

- Never edit `/_javascript/` without rebuilding `/assets/js/dist/*.min.js`.
- Never assume a queried DOM node exists; guard and return.
- Never assume `Theme` exists globally; use `typeof Theme === 'undefined'` checks.
- Never create multiple Tocbot instances.
- Never rely on `load` firing for cached or LQIP images without handling `img.complete`/conversion cases.

## COMMANDS

```bash
npm run build:js
npm run watch:js
```

## NOTES

- Page-specific bundles are committed artifacts.
- If a UI feature looks broken, inspect both source in `/_javascript/` and generated output in `/assets/js/dist/`.
