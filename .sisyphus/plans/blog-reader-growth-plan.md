# Blog reader growth plan

## Goal

Increase qualified reader inflow by turning the existing archive into a search-friendly, guided learning site.

This plan assumes the blog grows mainly through:

- organic search
- internal reading flow
- strong series entry pages

It does **not** assume that traffic will come mainly from posting more often.

## Current leverage points

- The blog already has deep clusters in OS, CA, Security, Networking, Java, and related CS topics.
- `/_tabs/about.md` already acts like a partial entry page.
- `/_tabs/series.md` already acts like a partial guided curriculum.
- The archive is large enough that better packaging can create growth without a major increase in publishing volume.

## Execution guardrails

- Treat `/_tabs/about.md` and `/_tabs/series.md` as assets to optimize, not missing pages to invent.
- Start with **two clusters only** for the first 90 days: Operating System and Security.
- Do not target all high-value posts at once; define a first acquisition shortlist before broad edits.
- Keep analytics lightweight at first. Do not promise detailed click-path reporting before instrumentation exists.

## Core strategy

Treat the site as a learning-path product, not a chronological notebook.

The growth loop should be:

1. Reader searches a specific question.
2. Reader lands on one strong answer page.
3. The page clearly offers the next useful post.
4. The reader enters a series or cluster.
5. The series creates multiple pageviews, trust, and return visits.

## Who to attract first

Focus on readers who are already looking for structured CS learning material.

Primary audience:

- CS students reviewing core fundamentals
- backend or systems-focused developers rebuilding theory depth
- interview-prep readers who need ordered study material
- security learners who want secure-coding foundations, not only exploit trivia

This matters because the blog is strongest when it helps people move through a topic in sequence.

## 90-day priority order

### Phase 0 - Baseline and shortlist (week 1)

#### Objective

Define what will be measured and which files are in scope before editing broadly.

#### Actions

1. Choose one analytics provider supported by `/_config.yml`.
2. Define the first three KPIs only:
   - organic sessions
   - landing pages from search
   - pages per session on priority clusters
3. Create the first acquisition shortlist for OS and Security.
4. Use existing series order, not intuition alone, to choose the first posts to optimize.

#### First acquisition shortlist

Operating System:

1. `/_posts/os/2025-03-04-OS(1-1).md`
2. `/_posts/os/2025-03-08-OS(1-2).md`
3. `/_posts/os/2025-03-17-OS(3-1).md`
4. `/_posts/os/2025-03-24-OS(4-1).md`
5. `/_posts/os/2025-04-07-OS(5-1).md`
6. `/_posts/os/2025-05-26-OS(9-2).md`

Security:

1. `/_posts/sc/2025-09-05-SC(1).md`
2. `/_posts/sc/2025-09-12-SC(2-2).md`
3. `/_posts/sc/2025-09-17-SC(3-1).md`
4. `/_posts/sc/2025-09-24-SC(4-2).md`
5. `/_posts/sc/2025-10-01-SC(5-2).md`
6. `/_posts/sc/2025-10-08-SC(6-2).md`

#### Expected result

The plan has a fixed first workset and a measurable baseline.

### Phase 1 - Fix the entry surfaces (week 1-2)

#### Objective

Make the first click more likely to become the second click.

#### Actions

1. Tighten `/_tabs/about.md` so it behaves like a trust-building landing page.
2. Tighten `/_tabs/series.md` so it behaves like a guided curriculum page, not a list.
3. Add a short "Start here" block to the most important series entry posts.
4. Add a note in the plan or handoff describing the chosen analytics provider and the exact config key to populate in `/_config.yml`.
5. Add a global `social_preview_image` in `/_config.yml` only if a suitable shared image already exists or can be created cheaply.

#### Expected result

New visitors understand what the blog is for and where to begin within 10 seconds.

### Phase 2 - Strengthen post-to-post flow (week 3-8)

#### Objective

Increase pages per session and reduce bounce from isolated posts.

#### Actions

1. Update the 12 shortlisted foundational posts across OS and Security.
2. Add a consistent reading-flow block near the top or bottom of each priority post.
3. Ensure each priority post links to:
   - one prior concept when needed
   - one next recommended post
   - the relevant series page
   - one related cluster page where it helps
4. Rewrite weak introductions so the reader immediately knows what problem the post solves.

#### Expected result

More readers move from a search landing page into a deeper cluster.

### Phase 3 - Improve click-through from titles and snippets (week 6-10)

#### Objective

Make search and social previews more clickable without changing the substance of the posts.

#### Actions

1. Add or improve `description` in front matter for priority posts.
2. Rewrite titles that are too notebook-like and too weak for search.
3. Keep the cluster token style if you want, but move the reader-intent phrase earlier when possible.
4. Treat preview-image work as optional unless search/snippet improvements are already in place.

#### Example title upgrades

- from: `[OS] Operating System(5-1): CPU Scheduling`
- to: `CPU Scheduling in Operating Systems: FCFS, SJF, and Round Robin`

- from: `[Security] Secure Coding(6-2) - SQL Injection`
- to: `SQL Injection Explained: Why It Happens and How to Prevent It`

#### Expected result

Better click-through from search results and shared links.

## Content system to use going forward

Do not treat all posts the same. Use a small set of repeatable content types.

### Type 1 - Search-intent explainer

Use for topics people directly search.

Examples:

- what is paging
- what is thread pool
- what is sql injection
- tcp handshake explained

Best for:

- concept discovery
- beginner traffic
- interview-prep traffic

### Type 2 - Comparison / decision post

Use for queries where the reader is deciding between concepts.

Examples:

- process vs thread
- paging vs segmentation
- jwt vs session
- udp vs tcp

Best for:

- high click potential
- strong related-post linking

### Type 3 - Practical bridge post

Use for turning theory into action.

Examples:

- how to practice SQL injection safely
- kernel build after studying OS basics
- how to review cache concepts for interviews

Best for:

- improving trust
- attracting implementation-minded readers

## Recommended post template

Use this as the default template for posts that are meant to bring in new readers.

```yaml
---
title: "CPU Scheduling in Operating Systems: FCFS, SJF, and Round Robin"
description: "A beginner-friendly explanation of CPU scheduling goals and major algorithms, with examples and a reading path to deeper OS posts."
date: 2026-03-30 00:00:00 +0900
categories: [CS, Operating System, OS]
tags:
  - OS
  - CPU Scheduling
  - Operating System
  - Interview Prep
toc: true
toc_sticky: true
---

## Who this post is for

- Readers learning this topic for the first time
- Readers reviewing before an interview or exam

## What this post answers

- Why does CPU scheduling matter?
- What is the difference between FCFS, SJF, and Round Robin?
- When should I study the next scheduling topic?

## One-minute answer

Give a short, plain-language explanation for impatient readers and search engines.

## Core concept

Explain the concept in a clean structure.

## Example or comparison

Use a table, code, diagram, or concrete walkthrough.

## Common confusion

Answer the 2-3 misunderstandings readers usually have.

## Key takeaway

Compress the idea into a short conclusion.

## Reading flow

- Previous: `...`
- Next: `...`
- Series: `/series/`
- Related: `...`
```

## Title formula

For growth-oriented posts, prefer titles that match reader language.

Good formulas:

- `[topic] explained: [benefit]`
- `[topic A] vs [topic B]: [decision angle]`
- `How to study [subject]: [audience/use case]`
- `What is [topic]? [plain-language payoff]`

Avoid titles that only make sense inside your own notebook sequence unless the series already has strong traffic.

## Metadata checklist for priority posts

For every post you expect to attract new readers, check:

- clear `title`
- clear `description`
- stable category pattern matching nearby posts
- practical tags, but no large-scale taxonomy cleanup
- one featured image or default preview strategy
- explicit next-click links

## Internal-linking standard

Every high-priority post should include four link roles:

1. entry link from a hub or series page
2. previous concept link when context matters
3. next-step link for continued reading
4. adjacent-topic link for exploration

If a post gets traffic but has no obvious next click, it will underperform even if the post itself is strong.

## KPI set

Track a small set of useful metrics.

Primary KPIs:

- organic sessions
- landing pages from search
- pages per session on priority clusters
- average engaged time on priority posts

Secondary KPIs:

- click-through from `About` and `Series`
- return visitors
- top-performing titles by entry volume

Detailed internal-link path reporting is a later upgrade, not a day-one expectation.

## Weekly operating rhythm

### Every week

1. Publish or update one search-entry post.
2. Improve internal links on two older foundational posts.
3. Rewrite one weak title or description from a priority cluster.
4. Review analytics for entry pages and pages per session.

### Every month

1. Refresh the top entry page of each active cluster.
2. Identify one cluster gap that deserves a new bridge post.
3. Remove or postpone work that does not improve discovery, click-through, or reader flow.

## 30-day checkpoint

At day 30, stop and review before expanding scope.

Questions to answer:

1. Did revised titles and descriptions improve entry traffic?
2. Did the updated entry surfaces improve pages per session?
3. Did the updated priority posts become more meaningful landing pages?

If the answer is mostly no, pause further content expansion and inspect content quality, title quality, and internal-link placement before scaling to more clusters.

## What not to spend time on first

- broad homepage redesign
- full archive taxonomy cleanup
- comments system
- posting more often without improving entry flow
- social distribution before the landing structure is stronger

## Concrete first moves

If execution starts now, do these in order:

1. Choose one analytics provider and document the exact key under `/_config.yml`.
2. Refine `/_tabs/about.md` into a stronger entry page.
3. Refine `/_tabs/series.md` into a more search- and reader-friendly curriculum hub.
4. Add reading-flow blocks to the 12 shortlisted foundational posts.
5. Rewrite titles and descriptions for the same 12 shortlisted posts.
6. Add `social_preview_image` in `/_config.yml` only if a reusable image asset is ready.

## QA scenarios

### QA for Phase 0 - Baseline and shortlist

- Tool: file inspection in `/_config.yml`
- Steps:
  1. Confirm exactly one analytics provider is chosen for the first pass.
  2. Confirm the selected config key is documented.
  3. Confirm the first 12 post files are listed in the plan before content edits begin.
- Expectation: scope and measurement are fixed before execution expands.

### QA for Phase 1 - Entry surface updates

- Tool: `bundle exec jekyll build --baseurl ""`
- Expectation: build completes successfully.
- Tool: browser/manual verification
- Steps:
  1. Open `/about/`.
  2. Confirm the page explains audience, focus areas, and where to start.
  3. Open `/series/`.
  4. Confirm OS and Security clusters are easy to scan and have a clear first click.
- Expectation: a first-time reader can choose a path without using categories first.

### QA for Phase 2 - Shortlisted post updates

- Tool: `bundle exec jekyll build --baseurl ""`
- Expectation: build completes successfully.
- Tool: browser/manual verification
- Steps:
  1. Open three updated OS posts and three updated Security posts.
  2. Confirm each has a clear intro, next click, and series link.
  3. Follow one chain from entry page -> post -> next post in each cluster.
- Expectation: readers can move through the cluster without relying on back navigation.

### QA for Phase 3 - Title and metadata updates

- Tool: file inspection in priority post front matter
- Steps:
  1. Confirm each shortlisted post has a clearer `title`.
  2. Confirm each shortlisted post has a non-empty `description`.
  3. Confirm title style matches reader intent better than notebook-only naming.
- Expectation: priority posts are more understandable in search and share previews.

## Success condition after 90 days

This plan is working if:

- search brings readers into foundational explainers and strengthened entry pages
- readers move from one post to another inside the same cluster
- the top traffic pages are no longer only chronological notes
- the site behaves more like a learning product than a static archive
