# TEMPLATE GUIDE

## OVERVIEW

Page-level Liquid templates live here. This directory is where navigation flow, page composition, and content column structure are decided before shared fragments from `/_includes/` are injected.

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Global page shell | `default.html` | wraps head, sidebar, topbar, footer, search, panel area |
| Home composition | `home.html` | category cards, featured, recent posts |
| Post composition | `post.html` | article shell, TOC/mobile TOC hooks, post metadata |
| Category structures | `categories.html`, `category.html` | hierarchy listing vs single-category listing |
| Generic tabs/pages | `page.html`, `archives.html`, `tags.html`, `tag.html` | mostly simpler layout variants |
| Compression wrapper | `compress.html` | outermost HTML wrapper |

## CONVENTIONS

- Prefer changing structure here and shared fragments in `/_includes/`; avoid embedding duplicated markup across multiple layouts unless the divergence is intentional.
- `default.html` is the high-impact file: small class changes there affect home, post, tabs, and panels at once.
- Home and category templates carry the most custom logic beyond upstream Chirpy defaults.
- Layouts assume accompanying SCSS already exists under `/_sass/layout/`; template-only changes often require style updates.

## ANTI-PATTERNS

- Never assume upstream Chirpy markup still matches this repo; custom home/category/post flows have diverged.
- Never change post/content column classes in `default.html` casually; desktop reading-column alignment has already needed repeated fixes.
- Never add extra metadata rows to home category cards unless you intend to change card height rhythm.
- Never move search or theme-toggle markup without checking the corresponding JS selectors in `/_javascript/modules/components/`.

## NOTES

- If a change touches structure and behavior together, inspect both the layout here and the matching JS entry file before editing.
- `/_includes/` remains the sibling directory to check immediately after this one for shared UI fragments.
