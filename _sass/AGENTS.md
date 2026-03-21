# STYLE SYSTEM GUIDE

## OVERVIEW

SCSS source for a heavily customized Chirpy presentation layer; color tokens, shared primitives, and page layouts are split cleanly, and import order matters.

## STRUCTURE

```text
_sass/
├── colors/         # light/dark token maps
├── addon/          # variables, commons, syntax, shared mixins/placeholders
├── layout/         # page-specific layouts: home, post, categories, etc.
├── dist/           # generated bootstrap subset
├── main.scss       # primary import graph
└── main.bundle.scss
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Color system | `colors/typography-light.scss`, `colors/typography-dark.scss` | green accent customization lives here |
| Shared tokens | `addon/variables.scss` | widths, radii, spacing, fonts |
| Global behavior | `addon/commons.scss` | theme switching, topbar/sidebar, shared layout rules |
| Home UI | `layout/home.scss` | category cards, hero, featured, home posts |
| Post UI | `layout/post.scss` | reading column + TOC alignment |
| Category/tag UI | `layout/category-tag.scss` | grouped category cards/list rhythm |

## CONVENTIONS

- Import order in `main.scss` is intentional: colors -> variables -> commons -> page layouts.
- Use existing spacing/radius/font tokens from `addon/variables.scss` before inventing new values.
- Layout-specific styling belongs under `layout/`, not `addon/commons.scss`, unless it is genuinely shared.
- The repo uses legacy Sass import style and stylelint rules tuned for it.

## ANTI-PATTERNS

- Never use `@extend` inside `@media` blocks.
- Never patch visual regressions only in generated CSS; edit SCSS source.
- Never reintroduce home category preview metadata unless unequal card heights are intentional.
- Never widen post/TOC layouts casually; small desktop shifts have already needed multiple follow-up fixes.

## COMMANDS

```bash
npm run lint:scss
npm run lint:fix:scss
```

## NOTES

- `npm run build` will also regenerate Bootstrap-purged CSS inputs used by the site.
- Home and post layout files are the most customized and the easiest places to create visual regressions.
