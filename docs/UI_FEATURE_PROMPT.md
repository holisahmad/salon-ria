# UI Feature Implementation Prompt

Use this prompt when assigning a new UI feature to a coding agent.

---

Implement the requested UI feature according to `UI_DESIGN_INTELLIGENCE.md` and the repository's existing agent instructions.

## Before coding

1. Inspect the existing project, routes, relevant components, styles, tests, and data contracts.
2. Identify the actual user workflow and product-specific requirements.
3. Determine whether existing UI patterns should be reused or improved.
4. Select a design direction based on the product, not generic AI aesthetics.
5. Identify missing backend capabilities instead of fabricating functionality.
6. Check whether existing dependencies can meet the requirements before adding anything.

## Requirements

- No generic AI-slop layouts or unnecessary decoration.
- No paid APIs, subscriptions, premium templates, or unapproved dependencies.
- No fake production data or nonfunctional controls.
- Responsive, accessible, consistent, and maintainable implementation.
- Preserve unrelated functionality.
- Reuse existing components and design tokens where appropriate.
- Handle loading, empty, success, validation, and error states where relevant.
- Respect authentication, authorization, and data boundaries.
- Run the relevant checks and report actual results.

## Implementation sequence

1. Summarize the user workflow and proposed design direction.
2. Identify files and components to reuse or modify.
3. Implement the smallest coherent solution.
4. Test the actual interactions and responsive behavior.
5. Run applicable build, lint, type-check, and test commands.
6. Review the Anti-AI-Slop acceptance gate.
7. Report changes, evidence, test results, and limitations.

Make reasonable design decisions autonomously. Do not ask me to approve minor visual details individually.

Deliver a working implementation, not merely a mockup, unless I explicitly request a mockup.
