# Navigation — Personal IT Knowledge Base

**Status:** Approved concept for implementation  
**Related deliverables:** `../Sitemap.md`, `SidebarNavigation.png`, `HomeDashboard.png`

## 1. Navigation layout

- **Top header:** application name/logo, global search access, notifications (optional), and user profile menu.
- **Left sidebar:** Home, eight main knowledge categories, Favourites, and Admin (visible only to authorised administrators).
- **Main content area:** displays the selected category, subcategory, article, or dashboard.
- **Footer:** optional and minimal; not required for the initial version.

The sidebar uses the approved **dark charcoal and teal** visual direction. Home and the selected navigation item use a teal highlight; inactive items use light text and icons.

## 2. Main sidebar categories

| Main category | Subcategories |
|---|---|
| IT Service Management | Incidents & Service Requests; Problem Management; Change Management; ITSM Best Practices |
| IT Infrastructure | Windows Server & Active Directory; Networking; Microsoft 365 & Cloud; Virtualisation & Storage; Endpoints & Printing |
| Troubleshooting Guides | Microsoft 365 Issues; Windows & Endpoints; Network Connectivity; Applications & Software; Printers & Peripherals |
| Response Templates | Ticket Acknowledgements; Progress Updates; Resolution & Closure; Escalations & Follow-ups |
| Scripts & Commands | PowerShell; Windows CMD; Networking Commands; SQL & Other Tools |
| Learning & Onboarding | Getting Started; Learning Paths; Practical Exercises; Training Checklists |
| Security & Compliance | Identity & Access; Endpoint & Network Security; Security Operations; Policies & Best Practices |
| Quick Reference | Useful Links; Cheat Sheets; Checklists; Technical References |

These categories and subcategories should be **data-driven and configurable**, not hardcoded as separate React pages.

## 3. Accordion behaviour

1. Each main category shows an icon, label, and expand/collapse chevron.
2. Selecting a category expands its subcategories; any previously expanded main category collapses.
3. Selecting a subcategory navigates to its listing page and highlights that item in teal.
4. When viewing a subcategory or article, its parent category expands automatically.
5. Clicking an already expanded category may collapse it, except where route-driven expansion is needed to show the current selection.
6. Subcategories are indented one level. **Individual articles do not appear in the sidebar**; they appear in the subcategory listing and search results.
7. The sidebar scrolls independently if its contents exceed the available height.

**Reference state for the design screenshot:** *IT Infrastructure* expanded, *Microsoft 365 & Cloud* selected.

## 4. Home and dashboard navigation

- **Home** returns to the dashboard.
- The dashboard shows global search, **six quick-access cards** for popular articles/templates/subcategories, and recently updated content.
- Quick-access cards **do not duplicate the eight main sidebar categories**.
- Cards should eventually be configurable by an administrator.
- **Favourites** provide personal shortcuts to saved content; they may be deferred until after the MVP.

## 5. Header, breadcrumbs and links

- Keep the header available across the main application pages.
- Provide global search from the header; the dashboard may also show a larger search field.
- Show breadcrumbs on category, subcategory and article pages, for example: `IT Infrastructure / Microsoft 365 & Cloud / Article title`.
- Use clear active, hover, focus and expanded states for navigation items.
- The user menu should contain relevant account actions such as sign out. Admin access is displayed only for users with the Admin role.

## 6. Responsive behaviour

| Layout | Behaviour |
|---|---|
| Desktop | Persistent left sidebar with independently scrollable category navigation; main content alongside it. |
| Tablet | Sidebar may be narrower or collapsible to preserve content width. |
| Mobile | Sidebar becomes a hamburger-triggered drawer; it closes after selecting a destination. |

Use the breakpoints defined in `DesignSystem.md`; confirm final widths during React implementation.

## 7. Accessibility and interaction

- Use semantic navigation links for destinations and buttons for expanding/collapsing categories.
- Support keyboard navigation and visible focus indicators.
- Expose expanded state (`aria-expanded`) and current page (`aria-current`) appropriately.
- Ensure selected states are recognisable beyond colour alone.
- Keep text contrast and touch targets usable across desktop and mobile.

## 8. Implementation notes

- Build the sidebar from a shared navigation configuration or category data returned by the chosen data provider.
- Reuse a single category/subcategory/article page template for all eight sections.
- Determine active and expanded items from the current React route.
- Enforce Admin permissions in the application/backend, not only by hiding the Admin menu item.
- Treat the visual screenshot as a design reference, not a pixel-perfect specification.

## 9. Acceptance checklist

- [ ] All eight categories and their subcategories appear in the sidebar.
- [ ] Only one main category is expanded at a time.
- [ ] Current subcategory is highlighted and its parent is expanded.
- [ ] Articles are accessible from listings rather than nested sidebar entries.
- [ ] Home, breadcrumbs, search and user navigation work consistently.
- [ ] Admin navigation is restricted to authorised users.
- [ ] Sidebar works on desktop, tablet and mobile, including keyboard interaction.
