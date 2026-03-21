# POSTS WORKFLOW

## Purpose

This repo should manage `/_posts/` as a study-series corpus, not as a loose chronological archive.

- `/_posts/` stores published or publish-ready notes.
- `/_tabs/series.md` defines the recommended reading order for the major clusters.
- `categories` support topic hierarchy.
- `tags` support exploration, not canonical sequencing.

## What belongs in `/_posts/`

Keep only content that should behave like a real post:

- cluster posts such as `OS`, `CA`, `SC`, `CN`, `CN+`, `CV`, `JAVA`, `CD`
- rare standalone reference notes that still deserve a public permalink

Do not keep these in `/_posts/`:

- drafts that are not ready for publication
- planning notes
- testing guides or repo-internal operating docs
- temporary scratch files

Use `/_drafts/` for unfinished drafts and keep repo/process docs outside `/_posts/`.

## Physical folder structure

`/_posts/` is organized by cluster for authoring convenience.

```text
_posts/
  os/
  ca/
  sc/
  cn/
  cn-plus/
  cv/
  java/
  cd/
  spring/
  data-structures/
```

Keep only true standalone notes at the root of `/_posts/`.

## Naming rule

Keep the existing filename pattern:

```text
YYYY-MM-DD-SUBJECT(token).md
```

Examples:

- `2025-03-04-OS(1-1).md`
- `2025-06-02-CA(11-1).md`
- `2025-09-05-SC(1).md`
- `2025-03-09-OS(prac_1).md`

Do not casually rename old post files. Existing slugs and internal links depend on them.

## Taxonomy model

### 1. Series page = canonical reading order

`/_tabs/series.md` is the source of truth for guided reading paths.

- If a post belongs to a major cluster already listed there, update `/_tabs/series.md` in the same change.
- Use the series page to define what readers should read first, next, and later.

### 2. Categories = hierarchy

Use categories for subject structure, not reading order.

Examples:

```yaml
categories: [CS, Operating System, OS]
categories: [CS, Computer Architecture, CA, Assembly language]
categories: [Security, Secure Coding]
categories: [Framework, Spring]
```

Keep the local pattern of the cluster you are editing. Do not do global category cleanup while writing a post.

### 3. Tags = discovery

Use tags for search and browsing support.

- Copy the style of nearby posts in the same cluster.
- Keep scope local.
- Do not start broad tag normalization while adding or editing one post.

## Default authoring flow

When adding a new post:

1. Create the file in `/_posts/` using the existing naming pattern.
2. Put it directly into the matching cluster folder when that cluster already exists.
3. Copy the front matter style from a nearby post in the same cluster.
4. Write the article.
5. Decide whether the post belongs to an existing series cluster.
6. If yes, update `/_tabs/series.md` in the same change.
7. Add or update internal reading-flow links if the post sits in the middle of a sequence.
8. Run the normal validation commands before publishing.

## Scalable operating rules

### Established clusters

For clusters already strong enough to act like courses, treat every new post as part of a path:

- Operating System
- Computer Architecture
- Secure Coding / Cybersecurity
- Computer Networking / Internet Protocol

For these clusters:

- update `/_tabs/series.md` every time
- preserve the local filename and category pattern
- think in terms of previous/next/related flow, not isolated posts

### Minor clusters

For smaller clusters such as `CV`, `JAVA`, `CD`, or one-off framework notes:

- keep writing into the existing cluster folder under `/_posts/`
- use categories and tags consistently
- only add them to `/_tabs/series.md` once the cluster has a real path worth guiding

## Copyable template

Use the nearest real post as the first reference. When there is no obvious starting point, copy this shape:

```yaml
---
title: "[OS] Operating System(11-1): Topic title"
date: 2026-03-21 00:00:00 +0900
categories: [CS, Operating System, OS]
tags:
  - [CS, OS, Topic]
toc: true
toc_sticky: true
---

## What this post covers

Write a short opening that explains what the reader will learn and where this post sits in the broader cluster.

## Core concept

Add the main explanation.

## Example or breakdown

Add the concrete details, diagrams, code, or comparisons.

## Reading flow

- Previous: `...`
- Next: `...`
- Series: `/series/`
```

Adjust the cluster token, categories, and tag style to match the subject you are writing.

## Practical defaults by cluster

- `OS`: keep the `OS(x-y)` progression and attach to the OS core path or practice path
- `CA`: keep the chapter progression and existing assembly/cache subtopic style
- `SC`: keep the secure-coding sequence and tie each post back to the broader security path
- `CN` / `CN+`: distinguish networking fundamentals from protocol deep-dive when updating `/_tabs/series.md`

## Non-goals while writing posts

Do not do these as part of normal post authoring:

- rename old files for cosmetic reasons
- redesign taxonomy across the whole archive
- move repo-internal documents into `/_posts/`
- treat categories as a replacement for the series page
- let `/_tabs/series.md` drift out of sync with the major clusters

## Rule of thumb

If a post helps readers move deeper into an existing cluster, it belongs in `/_posts/` and probably also changes `/_tabs/series.md`.

If it only helps repository maintenance, it should live somewhere else.

## Current placement guide

- `/_posts/os/` -> Operating System
- `/_posts/ca/` -> Computer Architecture
- `/_posts/sc/` -> Secure Coding
- `/_posts/cn/` -> Computer Networking fundamentals
- `/_posts/cn-plus/` -> Internet Protocol deep dive
- `/_posts/cv/` -> Computer Vision
- `/_posts/java/` -> Java
- `/_posts/cd/` -> Cloud DB / CD cluster
- `/_posts/spring/` -> Spring
- `/_posts/data-structures/` -> data-structure notes
