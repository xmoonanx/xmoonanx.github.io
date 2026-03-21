# Blog growth strategy

## Session handoff status

### Recently completed in the repo

- Search UX was restored so the existing search surface behaves like a single flow instead of a broken placeholder.
- Theme toggle behavior was repaired and re-enabled.
- The main accent palette was moved back to green.
- Home category cards were simplified to `name + count` only; the extra preview line was removed because it made `CS` and `framework` appear larger than the other cards.
- Category pages were regrouped by second-level category and sorted newest-first within each group.
- Post page layout was adjusted so the article body reads slightly right of center on desktop, while the TOC stays further right.
- Category page group styling was normalized for more consistent visual rhythm.

### Current verified state

- `npm run lint:scss` passed after the recent styling/layout changes.
- JS bundles were rebuilt successfully during the search/theme work.
- Multiple UI fixes were reviewed with Oracle before shipping.
- The latest pushed commits relevant to this work are:
  - `5c45c7c` `fix: simplify home category cards`
  - `e5dfe17` `fix: tighten category and post page layout`
  - `3b4dd30` `fix: refine category and post page alignment`
  - `9df1778` `fix: resolve home and post layout regressions`
  - `a2c2d25` `feat: improve blog discovery and theme controls`

### Next-session starting point

The UI stabilization pass is mostly done. The next high-value work should return to growth structure:

1. finalize the `About` page as an entry page
2. add a dedicated `Series` / `Learning Path` tab
3. connect core posts with internal reading-flow links
4. optionally choose and scaffold analytics in `/_config.yml`

### Known non-goals for the next session unless explicitly requested

- do not reopen broad homepage redesign work
- do not re-expand home category cards with extra preview metadata
- do not start full tag taxonomy cleanup
- do not introduce comments or social/distribution work before the series/about structure exists

## Goal

Increase blog traffic over the next 4-8 weeks by improving discoverability and reader flow around existing content, not by relying mainly on publishing more posts.

## Current state summary

- The blog already has roughly 100 published posts.
- Strong topic clusters already exist in Operating System, Computer Architecture, Security, Secure Coding, Computer Networking, and Internet Protocol.
- The site already has categories, tags, archives, search, and a customized home page.
- The weak points are entry guidance, learning-path structure, internal linking consistency, and measurement.
- The `About` page is effectively a placeholder.
- There is no dedicated `Series` or `Learning Path` hub.
- Analytics is not configured.
- Tag taxonomy is inconsistent, so full taxonomy cleanup should be scoped carefully.

## Strategic principle

Treat the blog as a set of curriculum clusters.

- `About` should explain why this blog is worth reading and where to start.
- `Series` should turn scattered posts into guided learning paths.
- Internal links should move readers from one useful post to the next.
- New posts should strengthen clusters, not sit alone.

## 4-8 week priority order

### Priority 1 - Turn `About` into a real entry page

#### Why

This page should help first-time visitors understand the blog fast and trust the author enough to continue reading.

#### Deliverables

- Replace placeholder `/_tabs/about.md` content.
- Add a short author intro.
- Add the blog's focus areas: OS, CA, Security, Networking.
- Add a "start here" block with 3-4 recommended entry paths.
- Add a "who this blog is for" section.
- Add a short explanation of how the posts are organized.

#### Success signal

Visitors landing on `About` can immediately choose a next reading path instead of bouncing.

### Priority 2 - Create a `Series` / `Learning Path` page

#### Why

Categories and tags are filters. A series page is a guided path. This is the biggest structural gap in the current blog.

#### Deliverables

- Add a new tab page for series/learning paths.
- Create 4 initial cluster sections:
  - Operating System
  - Computer Architecture
  - Secure Coding / Cybersecurity
  - Computer Networking / Internet Protocol
- For each cluster include:
  - one-line explanation
  - intended reader level
  - recommended first post
  - ordered post list
  - related cluster links
- Optionally mark completion status such as `core`, `advanced`, or `practice`.

#### Success signal

Readers entering from search can discover the full series and move deeper into the site.

### Priority 3 - Strengthen internal linking inside clusters

#### Why

Organic traffic growth improves when isolated articles become connected learning flows.

#### Deliverables

- Add a reusable reading-flow block to key posts or update high-value posts manually.
- Ensure each important post links to:
  - previous concept if needed
  - next recommended post
  - series hub
  - adjacent related cluster where relevant
- Start with the top 20 foundational posts, not the entire archive.

#### Success signal

Readers visit more than one post per session from the same topic cluster.

## Content actions after the structure work

### Strengthen existing clusters with practical bridge posts

Create a small number of high-intent, practical pages that connect theory posts together.

Suggested examples:

- `How to study Operating System from this blog`
- `Secure Coding roadmap for backend developers`
- `Computer Architecture reading order for interview prep`
- `Networking essentials: what to read first`

These should act as search-friendly, high-intent entry pages.

## Measurement plan

Configure analytics lightly. Do not overbuild dashboards first.

For the next session, treat analytics as **provider selection plus config scaffolding only** unless a real provider ID is already available.

- Supported providers already exist in `/_config.yml`.
- Recommended first choice: GoatCounter or Google Analytics.
- If no real ID is available, stop at selecting the provider, documenting the exact config keys, and preparing the page flow to measure later.

Track only a few things:

- visits to `About`
- visits to `Series`
- clicks from `About` to a post
- clicks from `Series` to a post
- whether readers move from one post to another inside a cluster

## What to postpone

- full homepage redesign
- complete tag taxonomy rewrite across all posts
- comments system
- broad social-media-first distribution strategy
- rewriting old posts wholesale

## Guardrails

- Do not try to fix every taxonomy inconsistency before launching the new entry surfaces.
- Do not make `Series` a category dump; it must feel like a learning guide.
- Do not optimize for vanity metrics first.
- Do not treat new publishing volume as the main growth lever before the site structure is fixed.

## Immediate execution checklist

1. Write final `About` page content.
2. Add `Series` tab and page structure.
3. Select the first 4 learning paths.
4. Choose the first post for each path.
5. Add internal links to the top 20 foundational posts.
6. Promote the strongest 3-5 foundational posts through home/featured surfaces.
7. Add lightweight analytics.

## Later opportunities

- clean up tag formatting gradually in priority clusters only
- add per-series cover sections or overview blurbs
- create curated "start here" landing pages for OS, Security, and CA separately
- cross-post selected practical guides to developer platforms with canonical links

## QA scenarios

### QA for Priority 1 - About page

- Tool: `bundle exec jekyll build --baseurl ""`
- Expectation: build completes successfully.
- Tool: browser/manual verification
- Steps:
  1. Open `/about/`.
  2. Confirm the page explains who the blog is for.
  3. Confirm it lists focus areas.
  4. Confirm it includes clear "start here" links.
- Expectation: a first-time visitor can choose a next reading path without using categories/tags first.

### QA for Priority 2 - Series / Learning Path page

- Tool: `bundle exec jekyll build --baseurl ""`
- Expectation: build completes successfully.
- Tool: browser/manual verification
- Steps:
  1. Open `/series/` or the final tab permalink.
  2. Confirm the 4 core clusters are visible.
  3. Confirm each cluster has a recommended first post.
  4. Click at least one first-post link and one related-cluster link.
- Expectation: links land on valid pages and the page reads like a guided path, not a category dump.

### QA for Priority 3 - Internal linking

- Tool: browser/manual verification
- Steps:
  1. Open 3 foundational posts from different clusters.
  2. Confirm each includes a path back to the series hub.
  3. Confirm each includes a next recommended post or equivalent reading flow.
  4. Follow one full chain from hub -> post -> next post.
- Expectation: readers can move through a cluster without relying on browser back navigation.

### QA for featured entry posts

- Tool: browser/manual verification on `/`
- Steps:
  1. Open the home page.
  2. Confirm 3-5 foundational posts are promoted clearly.
  3. Confirm these posts match the intended learning-path entry points.
- Expectation: the homepage points users toward strongest entry content, not only latest posts.

### QA for lightweight analytics setup

- Tool: file inspection in `/_config.yml`
- Steps:
  1. Confirm a single analytics provider is selected.
  2. Confirm the exact config key location is documented.
  3. If a real ID exists, confirm it is wired in the selected provider block.
  4. If no real ID exists, confirm the plan explicitly stops at scaffolding.
- Expectation: the next session does not get blocked by ambiguous analytics scope.
