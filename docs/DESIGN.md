# DESIGN.md

# Purpose

Define the visual language and design system for the Zebso portfolio.

This document describes **how the portfolio should look and feel**.

It does not define implementation rules (AGENTS.md) or page structure (PORTFOLIO.md).

---

# Brand

## Identity

Zebso is a developer who enjoys building products.

The portfolio should communicate

- curiosity
- craftsmanship
- simplicity
- experimentation
- continuous improvement

The design should feel calm and timeless.

Never feel loud or flashy.

---

# Design Philosophy

## Products tell the story

The design supports the content.

The interface should never compete with the projects.

---

## Simplicity

Reduce visual noise.

Every element should have a reason to exist.

---

## Consistency

Use the same patterns everywhere.

Users should never need to relearn the interface.

---

## Timeless

Avoid following temporary design trends.

The portfolio should still feel modern years later.

---

# Tone

Keywords

- Minimal
- Premium
- Calm
- Technical
- Clean
- Thoughtful

Avoid

- Playful
- Loud
- Colorful
- Over-designed
- Corporate

---

# Color System

## Primary

Background

```
#0B0B0B
```

Primary Text

```
#FFFFFF
```

---

## Secondary

Surface

```
#141414
```

Border

```
#2A2A2A
```

Secondary Text

```
#A0A0A0
```

Muted Text

```
#707070
```

---

## Accent

Accent colors should be used sparingly.

Use them only for

- links
- active states
- important highlights

Avoid colorful interfaces.

---

# Typography

## Primary Font

Geist

Used for

- headings
- paragraphs
- navigation

---

## Monospace

JetBrains Mono

Used for

- code
- file names
- tags
- technical information

---

## Type Scale

Heading 1

Large hero title.

Heading 2

Section titles.

Heading 3

Card titles.

Body

Default reading size.

Caption

Metadata.

Do not introduce additional text sizes unless necessary.

---

# Layout

## Grid

Desktop

12 columns

Tablet

8 columns

Mobile

4 columns

---

## Container

Content should remain centered.

Avoid extremely wide layouts.

Readable line lengths take priority.

---

## Spacing

Use an 8px spacing system.

Allowed spacing

```
4
8
16
24
32
48
64
96
128
```

Avoid arbitrary values.

---

# Border Radius

Sharp corners.

Default

```
0px
```

Only use rounded corners when required by usability.

---

# Shadows

Avoid decorative shadows.

Use borders instead.

Subtle elevation only when absolutely necessary.

---

# Borders

Borders define structure.

Prefer

1px solid border

instead of shadows.

---

# Components

## Buttons

Primary

Filled.

Secondary

Outlined.

Ghost

Text only.

All buttons should

- have consistent height
- have clear hover states
- support keyboard focus

---

## Cards

Cards represent content.

Every card should have

- border
- padding
- title
- supporting text

Avoid excessive decoration.

---

## Navigation

Keep navigation minimal.

Users should always know where they are.

The active page should be clearly indicated.

---

## Footer

Simple.

Contains only essential links.

---

## Tags

Tags describe technology or category.

Tags should never become the visual focus.

---

# Images

Prefer

- screenshots
- product mockups
- diagrams

Avoid

- stock photos
- decorative illustrations
- unrelated imagery

Projects should be shown through their actual interface whenever possible.

---

# Icons

Use one consistent icon library.

Icons should support the content,

not replace labels.

---

# Motion

Animation should improve understanding.

Never animate simply for decoration.

Preferred animations

- fade
- opacity
- translate

Avoid

- bouncing
- spinning
- exaggerated scaling

---

## Duration

Fast interactions

150ms

Normal interactions

200–250ms

Page transitions

250–350ms

---

# Responsive Design

Desktop first.

Then adapt to

- tablet
- mobile

Do not remove important information on smaller screens.

Instead,

reorganize the layout.

---

# Accessibility

Minimum contrast should meet WCAG recommendations.

Every interactive element should support

- keyboard navigation
- visible focus state
- semantic HTML
- screen readers

Respect

```
prefers-reduced-motion
```

---

# Empty States

Every empty state should explain

- what happened
- why
- what the user can do next

Never leave blank screens.

---

# Loading States

Prefer skeleton loading.

Avoid layout shifts.

Loading indicators should not block interaction unnecessarily.

---

# Error States

Errors should be

- understandable
- actionable
- concise

Avoid technical jargon when possible.

---

# Visual Hierarchy

Users should naturally notice

1. Hero
2. Featured Projects
3. Current Work
4. Writing
5. Footer

The interface should guide attention without relying on bright colors.

---

# Do

- Use generous whitespace
- Keep layouts consistent
- Let projects be the focus
- Prefer borders over shadows
- Write readable typography
- Keep interfaces calm

---

# Don't

- Add unnecessary animations
- Introduce random colors
- Mix multiple design styles
- Overuse gradients
- Use stock photography
- Overdecorate components
- Sacrifice readability for aesthetics

---

# Success Criteria

A successful design should make visitors think

- "The interface feels effortless."
- "The projects are easy to explore."
- "Everything feels consistent."
- "The design stays out of the way."

The design succeeds when users remember the products, not the UI itself.