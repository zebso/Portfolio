# AGENTS.md

# Purpose

Build a maintainable, scalable, and timeless portfolio for the Zebso brand.

This repository prioritizes long-term maintainability over short-term speed.

Every implementation should strengthen the Zebso brand while remaining simple, predictable, and easy to modify.

---

# Project Philosophy

This portfolio is **not a resume**.

It is a product.

The goal is to communicate the way Zebso thinks, designs, and builds products.

Always prioritize:

1. Clarity
2. Simplicity
3. Consistency
4. Maintainability

Do not optimize for cleverness.

Optimize for readability.

---

# Source of Truth

Always read these documents before making significant changes.

1. AGENTS.md
2. PORTFOLIO.md
3. DESIGN.md

Responsibilities:

- AGENTS.md → Development rules
- PORTFOLIO.md → Information architecture
- DESIGN.md → Visual language

Never duplicate responsibilities across these files.

---

# Scope and Intent (Highest Priority)

Implement only what was explicitly requested.

Never:

- add features
- redesign UI
- rename components
- reorganize architecture
- optimize code
- refactor unrelated files

unless:

- required for correctness
- explicitly requested

If multiple interpretations exist:

- ask first

or

- clearly state assumptions.

If improvements are discovered outside the requested scope:

Do not implement them automatically.

Mention them separately after completing the requested task.

---

# Architecture

Separate responsibilities.

Preferred dependency flow

Pages
→ Features
→ Shared Components
→ Utilities

Shared code must never depend on features.

Organize code by feature rather than file type whenever practical.

Business logic should never live inside reusable UI components.

---

# React

## Components

Every component should have a single responsibility.

Extract components only when they:

- improve readability
- are reused
- evolve independently

Do not split components simply to reduce file length.

Pages should compose features rather than contain business logic.

---

## State

Prefer the smallest possible state scope.

Priority

1. Derived values
2. Local state
3. URL state
4. Server state
5. Global state

Never duplicate derived state.

Avoid useEffect when values can be computed during render.

---

## Performance

Do not prematurely optimize.

Avoid introducing:

- React.memo
- useMemo
- useCallback
- lazy loading

unless measurable benefit exists.

Measure first.

Optimize second.

---

# UI

Always reuse existing UI primitives.

Never duplicate:

- buttons
- cards
- typography
- layout components

Do not introduce new design patterns without updating DESIGN.md.

Accessibility is mandatory for interactive elements.

---

# Styling

Never use arbitrary values if an existing design token exists.

Prefer:

- shared spacing
- shared colors
- shared typography

Avoid

- !important
- inline styles
- duplicated CSS

---

# Business Logic

Business rules belong outside UI.

Prefer pure functions whenever practical.

Each rule should have exactly one implementation.

---

# API

Presentation components must never directly contain API logic.

Separate

- transport models
- domain models
- mapping

Always handle

- loading
- success
- empty
- recoverable errors
- unexpected errors

Never silently ignore failures.

---

# TypeScript

Avoid any.

Prefer

- explicit types
- discriminated unions
- exhaustive checking

Validate external data.

Never trust

- APIs
- Local Storage
- URL parameters
- cookies
- user input

because TypeScript compiles.

---

# Reuse

Before creating

- components
- hooks
- utilities
- types

search the repository first.

Do not create abstractions for hypothetical future requirements.

Rule:

Implement

↓

Observe duplication

↓

Extract abstraction

---

# Dependencies

Avoid adding dependencies.

Only introduce a dependency when:

- existing tools cannot solve the problem reasonably
- long-term value clearly outweighs maintenance cost

---

# Naming

Names should describe intent.

Good

CreateProjectCard

useCurrentProject

isProjectVisible

Avoid

temp

data

helper

utils2

newComponent

---

# Comments

Code explains **what**.

Comments explain **why**.

Do not comment obvious code.

---

# Temporary Code

Never leave

- console.log
- debugger
- mock values
- TODO without context
- commented-out code

If temporary code is unavoidable,

explain

- why it exists
- when it should be removed

---

# Testing

Before finishing work:

- format
- lint
- type check
- run relevant tests
- build when practical

If something cannot be executed,

report:

- what was skipped
- why
- remaining risks

---

# AI Behavior

Never assume project requirements.

Never invent UI.

Never redesign existing layouts.

Never rename files for preference.

Never replace an established pattern with a new one without approval.

When uncertain,

ask.

Do not guess.

---

# Final Response

Every completed task should include

1. What changed
2. Files changed
3. Why the implementation is maintainable
4. Checks performed
5. Remaining assumptions or risks

---

# Golden Rule

If multiple implementations are possible,

choose the one that is

- easiest to understand
- easiest to maintain
- most consistent with the existing project

Consistency is more valuable than cleverness.