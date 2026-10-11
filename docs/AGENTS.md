# Repository Agent Rules

## Mandatory UI Design Policy

Before creating or modifying any user interface, read `UI_DESIGN_INTELLIGENCE.md` and follow its requirements.

Inspect the existing project, identify the user workflows, and choose a product-specific design direction before implementation.

Avoid generic AI-slop layouts. Do not introduce paid dependencies or fabricate data. Reuse the existing architecture and design system wherever appropriate.

For substantial UI changes:
1. Document design decisions.
2. Implement the primary workflow first.
3. Validate functionality and responsiveness.
4. Check accessibility and visual consistency.
5. Report test results honestly.

Do not mark the task complete until the mandatory acceptance conditions have been satisfied or explicitly documented as unresolved.

## General Engineering Rules

- Follow existing project conventions and architecture.
- Keep changes scoped to the requested task.
- Do not expose secrets, tokens, or credentials.
- Do not add a framework, paid service, or subscription without approval.
- Never claim that tests, builds, or browser checks passed unless they were actually run.
- When a relevant tool or external reference is unavailable, state the limitation and continue with a reasonable, evidence-based alternative.
