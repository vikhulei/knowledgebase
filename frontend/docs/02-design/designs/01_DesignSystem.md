# IT Knowledge Base — Design System

**Status:** Proposed design tokens (v1)  
**Related checklist task:** 03.06 — Define colours, typography and spacing tokens  
**Visual reference:** `docs/02-design/designs/HomeDashboard.png` (approved dashboard concept)

## 1. Design direction

A professional, readable IT knowledge-base interface with a dark charcoal sidebar, teal accents, a light content background, white cards, and clean sans-serif typography. The dashboard reference establishes the visual direction; token values below are **proposed implementation values**, not pixel-perfect measurements or exact colours extracted from the image.

## 2. Colour tokens

| Token | Hex | Usage |
| --- | --- | --- |
| `sidebarBg` | `#14212A` | Main sidebar background |
| `sidebarBgDeep` | `#101A22` | Sidebar depth and darker areas |
| `sidebarText` | `#F5F8FA` | Sidebar text and icons |
| `sidebarMuted` | `#B3C0C8` | Secondary sidebar text |
| `primary` | `#00B8B0` | Primary teal accent and selected elements |
| `primaryHover` | `#008E8B` | Hover/pressed accent |
| `primarySoft` | `#DDF5F3` | Subtle accent backgrounds and badges |
| `pageBg` | `#F4F8FA` | Main content background |
| `surface` | `#FFFFFF` | Cards, panels and form surfaces |
| `textPrimary` | `#17212B` | Main headings and body text |
| `textSecondary` | `#647582` | Supporting text and metadata |
| `border` | `#DCE5EA` | Dividers and card borders |
| `focusRing` | `#007F7B` | Visible keyboard focus indication |

**Accessibility:** Check actual foreground/background contrast before implementation. Do not assume teal text or white text on teal meets WCAG requirements at every font size. Use darker teal where necessary.

## 3. Typography

**Primary font:** Inter, with fallback `Arial, sans-serif`.  
**Code font:** `Consolas, 'Courier New', monospace` (JetBrains Mono optional).

| Element | Size | Weight | Suggested line-height |
| --- | --- | --- | --- |
| Hero heading | 36px | 700 | 1.15 |
| Page heading | 32px | 700 | 1.2 |
| Section heading | 24px | 600–700 | 1.3 |
| Card heading | 16px | 600 | 1.4 |
| Body | 16px | 400 | 1.6 |
| Supporting text | 14px | 400 | 1.5 |
| Navigation item | 14px | 500–600 | 1.4 |
| Code | 14px | 400 | 1.55 |

Use semantic heading levels, and avoid relying on font size alone to convey hierarchy.

## 4. Spacing and dimensions

Use a 4px-based spacing scale, with 8px as the common rhythm.

| Token | Value |
| --- | --- |
| `space1` | 4px |
| `space2` | 8px |
| `space3` | 12px |
| `space4` | 16px |
| `space5` | 20px |
| `space6` | 24px |
| `space8` | 32px |
| `space10` | 40px |
| `cardPadding` | 20–24px |
| `cardGap` | 16px |
| `contentPadding` | 24–32px |
| `sidebarWidth` | 288px |
| `headerHeight` | 64px |

## 5. Borders, radii and shadows

| Token | Proposed value | Usage |
| --- | --- | --- |
| `radiusSm` | 8px | Small controls and badges |
| `radiusMd` | 12px | Inputs and panels |
| `radiusLg` | 16px | Cards |
| `radiusPill` | 999px | Search field / pill controls |
| `borderDefault` | `1px solid #DCE5EA` | Cards and dividers |
| `shadowCard` | `0 3px 12px rgba(16, 26, 34, 0.08)` | Subtle card elevation |

## 6. Responsive breakpoints

These are initial suggestions; confirm against the existing React template's breakpoint tokens before adding new ones.

| Layout | Suggested range | Behaviour |
| --- | --- | --- |
| Mobile | Below 768px | Sidebar becomes a drawer; cards stack vertically |
| Tablet | 768–1199px | Compact navigation; two-column quick-access cards where space allows |
| Desktop | 1200px and above | Persistent sidebar; three-column quick-access cards |

## 7. Component styling guidelines

- **Sidebar:** Dark charcoal background, light labels, subtle icons, teal active state, expandable category groups.
- **Top bar:** Compact user controls and notifications; do not duplicate category navigation.
- **Hero/search:** Dark teal visual header with a prominent search field; the hero image is a separate asset and is not part of the token definition.
- **Quick-access cards:** Six configurable links to popular articles, templates or subcategories, rather than copies of the eight sidebar categories.
- **Recently updated:** Article title, category and last-modified date.
- **Useful shortcuts:** Compact links to frequently used tools or resources.
- **Article content:** Comfortable reading width, clear heading hierarchy, readable code blocks and copy buttons where relevant.
- **Interactive states:** Define default, hover, active, focus-visible, disabled, loading and error states for relevant components.

## 8. Implementation notes

1. Keep design tokens centralised and reuse them through styled-components rather than hardcoding values in each page.
2. Map these proposed values to the existing React template's colour, typography, spacing and breakpoint files. Avoid creating duplicate token sources.
3. Keep the dashboard image in `docs/02-design/designs/HomeDashboard.png` for checklist item **02.04**.
4. Treat this document as the specification for checklist item **03.06**. Update it whenever final token values change.
5. This file defines appearance only. Content, permissions, authentication and data access belong in separate application specifications.

## 9. Acceptance checklist for 03.06

- [ ] Colours chosen and checked for contrast
- [ ] Typography family, sizes and weights confirmed
- [ ] Spacing scale and layout dimensions confirmed
- [ ] Border, radius and shadow tokens confirmed
- [ ] Responsive breakpoints aligned with template
- [ ] Tokens implemented in shared React styling files
