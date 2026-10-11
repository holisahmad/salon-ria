# Project Design System

> This is a project-specific template. The coding agent must fill it using the actual product and existing implementation. Do not apply arbitrary defaults without inspection.

## 1. Design principles

1. **Product-specific:** visual decisions must serve the product and its users.
2. **Clear hierarchy:** make the most important information and actions easy to find.
3. **Purposeful restraint:** avoid decoration without a functional or brand rationale.
4. **Consistency:** reuse tokens and components across the application.
5. **Accessibility:** aim for WCAG 2.2 AA where applicable.
6. **Honest states:** do not fabricate production data or successful actions.
7. **Free-first:** no paid service, template, or dependency without approval.

## 2. Product context

- **Product:**
- **Users:**
- **Primary tasks:**
- **Brand personality:**
- **Information density:**
- **Target devices:**

## 3. Color tokens

Define tokens in the project's existing token system or CSS custom properties.

| Token | Value | Intended use |
|---|---|---|
| `--color-brand` | TODO | Primary brand action or identity |
| `--color-accent` | TODO | Selective emphasis |
| `--color-background` | TODO | Main page background |
| `--color-surface` | TODO | Panels and controls |
| `--color-text-primary` | TODO | Main readable text |
| `--color-text-secondary` | TODO | Supporting text |
| `--color-border` | TODO | Boundaries and separators |
| `--color-success` | TODO | Success state, with non-color cue |
| `--color-warning` | TODO | Warning state, with non-color cue |
| `--color-danger` | TODO | Error/destructive state, with non-color cue |
| `--color-info` | TODO | Informational state |

Check contrast before finalizing token values. Do not rely on color alone to convey meaning.

## 4. Typography

- **Primary font:**
- **Fallback stack:**
- **Display/heading scale:**
- **Body scale:**
- **Small/supporting text:**
- **Line-height rules:**
- **Numerical data rules:** use tabular numerals when useful for comparison.

Use a restrained type system. Avoid adding remote fonts unless licensing, performance, and privacy are acceptable.

## 5. Spacing and layout

- **Spacing scale:**
- **Content max-widths:**
- **Page gutters:**
- **Grid rules:**
- **Responsive breakpoints:**
- **Dense data/table behavior:**

Use the project's existing conventions where possible. Avoid arbitrary values when a token already exists.

## 6. Surfaces and shape

- **Border radius scale:**
- **Border policy:**
- **Shadow/elevation policy:**
- **Card usage criteria:**
- **Modal/dialog policy:**

Do not put every element inside a card. Use cards only when grouping and separation improve comprehension.

## 7. Components

Document actual shared components and their usage.

| Component | Purpose | Variants/states | Accessibility requirements |
|---|---|---|---|
| Button | | | Keyboard, focus, accessible name |
| Input | | | Label, validation, error text |
| Select | | | Keyboard and accessible label |
| Dialog | | | Focus management and Escape behavior |
| Data table | | | Headers, responsive behavior |
| Status indicator | | | Text/icon in addition to color |
| Empty state | | | Clear next action where applicable |
| Notification | | | Appropriate announcement behavior |

Remove rows for components the project does not need and add project-specific components.

## 8. Interaction states

Define expected behavior for:
- Default
- Hover, where relevant
- Focus-visible
- Active/pressed
- Disabled
- Loading
- Success
- Validation error
- Empty result
- Network/server error

## 9. Motion

- Use motion only when it communicates state or supports orientation.
- Respect reduced-motion preferences.
- Avoid decorative animations that distract from the task.
- Keep transitions short and consistent.

## 10. Icons and imagery

- **Icon library already in use:**
- **Image style:**
- **Asset source and license:**
- **Fallback behavior:**

Prefer one consistent icon system. Do not use emoji as a substitute for professional interface icons unless the product intentionally uses emoji.

## 11. Responsive rules

- **Mobile navigation:**
- **Table behavior:**
- **Form layout:**
- **Dialogs and menus:**
- **Touch target considerations:**
- **Critical actions that must remain visible:**

## 12. Quality gate

- [ ] Design is appropriate for this product.
- [ ] No unnecessary decorative elements.
- [ ] Shared tokens and components are used consistently.
- [ ] Controls have meaningful behavior.
- [ ] Loading, empty, error, and success states are covered where relevant.
- [ ] Target viewport sizes are checked.
- [ ] Accessibility has been reviewed.
- [ ] No unapproved paid dependency or asset.
- [ ] Build and relevant tests have been run or limitations documented.
