# CONTENT AUTHORING GUIDE

## OVERVIEW

This directory is a structured study-note corpus, not a loose blog archive. Most posts belong to subject clusters and should be treated as parts of longer learning paths.

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Naming examples | filenames in this directory | pattern is date + subject/topic token |
| Frontmatter examples | recent subject posts | categories/tags/toc usage is consistent enough to copy |
| Placeholder content to replace | `/_tabs/about.md` | still not finalized |
| Growth plan context | `/.sisyphus/plans/blog-growth-strategy.md` | use for About/Series prioritization |

## CONVENTIONS

- Filename pattern: `YYYY-MM-DD-SUBJECT(topic).md` or close variants (`OS(10-1)`, `CA(11-2)`, `Security(7)`, `Spring`).
- Categories are hierarchical arrays, e.g. `[Security, Cybersecurity]`, `[Framework, Spring]`.
- Tags are sometimes multilingual and inconsistent; preserve local style when editing an existing post, do not attempt global taxonomy cleanup ad hoc.
- `toc: true` is common; some posts also use `toc_sticky: true`.
- Relative images often point to `../assets/img/<Subject>/...`.

## ANTI-PATTERNS

- Never rename old post files casually; URL slugs derive from filenames/titles and existing links may break.
- Never change frontmatter permalink assumptions globally from inside a post.
- Never start a taxonomy cleanup while doing content edits; keep scope local.
- Never treat `TESTING_GUIDE.md` like a normal published series post without checking whether it is meant as content or repo artifact.

## NOTES

- This directory is large enough that future work should favor series curation and internal linking over random one-off additions.
- If you add About/Series pages later, they should point readers into the strongest existing clusters: OS, CA, Security, Networking.
