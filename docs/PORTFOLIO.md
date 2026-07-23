# PORTFOLIO.md

# Purpose

Define the structure, content, and responsibilities of the Zebso portfolio.

This document describes **what the portfolio should contain**.

It does not define implementation details (AGENTS.md) or visual rules (DESIGN.md).

---

# Vision

The portfolio exists to showcase how Zebso thinks, designs, and builds products.

Visitors should understand:

- what I build
- why I build it
- how I solve problems
- how I grow as a developer

The portfolio should feel like a product itself.

---

# Core Principles

## Products tell the story

Projects are the main content.

Everything else exists to support them.

---

## Show the process

Do not only show finished work.

Explain:

- problems
- decisions
- trade-offs
- failures
- improvements

---

## Keep it focused

Every page should have a clear purpose.

Avoid unnecessary sections.

Avoid filler content.

---

## Build in public

Whenever appropriate, document ongoing work instead of waiting until it is finished.

---

# Audience

Primary

- Developers
- Engineers
- Recruiters
- Indie Hackers
- Designers

Secondary

- Friends
- Students
- Anyone interested in building products

---

# Site Structure

The portfolio consists of the following pages only.

```
Home
Projects
Experiments
Writing
Now
About
Contact
```

Do not add additional top-level pages unless explicitly requested.

---

# Navigation

Global navigation should contain

- Home
- Projects
- Experiments
- Writing
- Now
- About
- Contact

The current page should always be visually distinguishable.

Navigation should remain consistent across every page.

---

# Home

## Goal

Introduce the Zebso brand.

Highlight current work.

Guide visitors toward projects.

---

## Sections

### Hero

Purpose

Introduce Zebso in one screen.

Contains

- Name
- Short description
- Primary CTA
- Secondary CTA

Do not include:

- long biography
- large paragraphs
- unnecessary graphics

---

### Featured Projects

Display the most important projects.

Usually between

3–6 projects.

Each card should include

- title
- short description
- technologies
- status

---

### Current Focus

Show what is currently being built.

Examples

- Hugg!
- AI tools
- Experiments

This section should change over time.

---

### Latest Writing

Display recent articles.

Maximum 3.

---

### Footer

Contains

- GitHub
- X
- Email

Optional

- RSS

---

# Projects

## Goal

Projects are the heart of the portfolio.

Every project should explain:

- why it exists
- how it was built
- what was learned

---

## Project List

Each card should contain

- title
- description
- thumbnail
- status
- technologies

Cards should link to the project page.

---

# Project Detail

Every project follows the same structure.

## Hero

- Title
- Tagline
- Year
- Status
- Links

---

## Overview

Summarize the project.

Keep it concise.

---

## Problem

Explain

- what problem existed
- who experienced it
- why it mattered

---

## Research

Include

- observations
- ideas
- iterations

---

## Design

Explain

- UI decisions
- UX decisions
- architecture

---

## Development

Discuss

- technologies
- implementation
- challenges

---

## Result

Include

- screenshots
- demos
- outcomes

---

## Reflection

Explain

- what went well
- what failed
- what would change

---

# Project Data Model

Every project should contain

```
title

slug

description

status

year

thumbnail

tags

technologies

repository

demo

startedAt

updatedAt
```

Optional

```
blogPosts

gallery

videos

downloads
```

---

# Experiments

## Goal

Document ideas, prototypes, and technical explorations.

Experiments do not need to become products.

Examples

- AI
- Graphics
- Hardware
- Web APIs
- UI Concepts

---

# Writing

Purpose

Share knowledge and thinking.

Writing categories

- Development
- Design
- AI
- Engineering
- Product
- Learning

Avoid writing purely for SEO.

Prioritize useful content.

---

# Now

The Now page describes what is currently happening.

Include

- Building
- Learning
- Reading
- Thinking

Keep this page lightweight.

Update frequently.

---

# About

Purpose

Introduce the person behind Zebso.

Include

- Short biography
- Philosophy
- Timeline
- Skills
- Tools

Avoid turning this into a resume.

---

# Contact

Purpose

Allow people to reach out.

Include

- GitHub
- X
- Email

Do not include unnecessary contact forms unless required.

---

# Content Rules

Every piece of content should provide value.

Avoid

- lorem ipsum
- fake statistics
- exaggerated claims
- buzzwords
- marketing language

Prefer

- honesty
- clarity
- evidence

---

# Writing Style

Use short paragraphs.

Use descriptive headings.

Prefer active voice.

Avoid unnecessary technical jargon.

Explain concepts clearly.

---

# SEO

Every page should include

- title
- description
- Open Graph image
- canonical URL

Projects should have descriptive URLs.

Example

```
/projects/hugg
```

Avoid numeric IDs.

---

# Future Expansion

Potential additions

- Search
- Tags
- Dark/Light preference
- RSS
- Changelog
- Timeline
- Talks
- Open Source
- Uses page

These features are optional and should not be implemented unless requested.

---

# Success Criteria

A successful portfolio should allow visitors to answer these questions within a few minutes.

- Who is Zebso?
- What kinds of products does Zebso build?
- How does Zebso think?
- How does Zebso solve problems?
- What is Zebso currently working on?

If the portfolio communicates these clearly, it has achieved its purpose.