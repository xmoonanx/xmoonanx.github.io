# CONTENT AUTHORING GUIDE

## OVERVIEW

This directory is a structured study-note corpus, not a loose blog archive. Most posts belong to subject clusters and should be treated as parts of longer learning paths.

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Naming examples | filenames in this directory | pattern is date + subject/topic token |
| Frontmatter examples | recent subject posts | categories/tags/toc usage is consistent enough to copy |
| Authoring workflow | `/POSTS_WORKFLOW.md`, `/POSTS_WORKFLOW.ko.md` | copyable post template and scalable operating rules in English and Korean |
| Placeholder content to replace | `/_tabs/about.md` | still not finalized |
| Growth plan context | `/.sisyphus/plans/blog-growth-strategy.md` | use for About/Series prioritization |

## CONVENTIONS

- Filename pattern: `YYYY-MM-DD-SUBJECT(topic).md` or close variants (`OS(10-1)`, `CA(11-2)`, `Security(7)`, `Spring`).
- Physical storage uses cluster subdirectories under `/_posts/` (for example `/_posts/os/`, `/_posts/ca/`, `/_posts/sc/`, `/_posts/cn/`, `/_posts/cn-plus/`, `/_posts/data-structures/`).
- Categories are hierarchical arrays, e.g. `[Security, Cybersecurity]`, `[Framework, Spring]`.
- Tags are sometimes multilingual and inconsistent; preserve local style when editing an existing post, do not attempt global taxonomy cleanup ad hoc.
- `toc: true` is common; some posts also use `toc_sticky: true`.
- Relative images often point to `../assets/img/<Subject>/...`.
- For major clusters already exposed in `/_tabs/series.md`, update the series page in the same change when adding a new post.

## ANTI-PATTERNS

- Never rename old post files casually; URL slugs derive from filenames/titles and existing links may break.
- Never change frontmatter permalink assumptions globally from inside a post.
- Never start a taxonomy cleanup while doing content edits; keep scope local.
- Never treat `TESTING_GUIDE.md` like a normal published series post without checking whether it is meant as content or repo artifact.

## NOTES

- This directory is large enough that future work should favor series curation and internal linking over random one-off additions.
- If you add About/Series pages later, they should point readers into the strongest existing clusters: OS, CA, Security, Networking.
- Keep `/_posts/` for published content only; keep templates, plans, and repo-operation docs outside the directory.
