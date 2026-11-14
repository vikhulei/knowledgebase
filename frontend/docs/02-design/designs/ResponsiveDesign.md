# Responsive Design — IT Knowledge Base

**Stage:** 02.08 — Review responsive layouts, interactive states and finalise designs  
**Status:** Design specification  
**Scope:** Reader-facing Knowledge Base and Admin interfaces

## 1. Purpose

Use the existing desktop page designs as the main visual reference and the five mobile mockups as examples of how layouts adapt to smaller screens. All pages must be usable on desktop, tablet and mobile; a separate image is not required for every page.

## 2. Reference designs

| Page | Desktop reference | Mobile reference | Key responsive change |
|---|---|---|---|
| Home Dashboard | HomeDashboard.png | Mobile Home Dashboard mockup | Sidebar becomes a drawer; popular cards and lower panels stack |
| Article Page | ArticlePage.png | Mobile Article Page mockup | Main article is full-width; Overview, Prerequisites and Verification move below the article |
| Admin Dashboard | AdminDashboard.png | Mobile Admin Dashboard mockup | Summary cards become a compact grid; dashboard panels stack |
| All Articles | AllArticles.png | Mobile All Articles mockup | Desktop table becomes a list of article cards |
| Create / Edit Article | ArticleEditor.png | Mobile Article Editor mockup | Editor and optional right-column fields become one vertical form |

*Image filenames are references to the design assets; use the actual saved names in `docs/02-design/designs/`.*

## 3. Breakpoints

Start with two responsive breakpoints and adjust during implementation if the content requires it:

| View | Width | Intended behaviour |
|---|---|---|
| Desktop | 1025px and above | Persistent sidebar, multi-column content |
| Tablet | 768–1024px | Collapsible sidebar; fewer columns and narrower gaps |
| Mobile | 767px and below | Off-canvas navigation drawer, single-column content |

Use responsive CSS and flexible sizing rather than designing for one specific phone. Test at several viewport widths, including around 375px, 390px, 768px, 1024px and desktop widths.

## 4. Shared layout rules

### Header and navigation

- **Desktop:** Keep the sidebar visible; the header provides search, notifications and user menu.
- **Tablet:** Allow the sidebar to collapse so the content has enough space.
- **Mobile:** Hide the sidebar by default. A hamburger button opens a drawer containing the same categories, nested subcategories, favourites and relevant Admin link.
- The drawer must close with its close button, by selecting a destination, and by pressing Escape; support keyboard focus and accessible labels.
- Preserve expandable nested categories in the mobile drawer. Allow scrolling when the navigation is taller than the screen.
- Keep global search accessible on mobile; the search field may move to a second header row.
- Breadcrumbs remain clickable; allow wrapping or horizontal scrolling for long paths without overflowing the page.

### Cards, panels and forms

- Desktop grids may use two, three or four columns depending on the page.
- Tablet layouts should reduce columns as needed.
- Mobile layouts use one column for primary content, except compact dashboard metric cards which may use two columns when they fit comfortably.
- Inputs and buttons must have adequate touch targets and visible focus states.
- Long titles, links, code snippets and category paths must wrap or scroll without breaking the layout.
- Avoid fixed-width content containers on small screens.

### Tables and lists

- Desktop: display full data tables with filtering, sorting, actions and pagination.
- Mobile: use simplified rows or cards for complex tables; do not squeeze all desktop columns into the available width.
- Preserve essential data and actions, even when less important columns are hidden.
- Maintain accessible labels for icon-only actions and checkboxes.
- Pagination and filtering must work consistently across screen sizes.

## 5. Page-specific behaviour

### 5.1 Home Dashboard

- Sidebar becomes a mobile drawer.
- Welcome banner and search remain prominent; decorative imagery may be cropped or reduced to prioritise text and search.
- Popular Content changes from a three-column desktop grid to fewer columns on tablet and a single column on mobile.
- Recently Updated and Useful Shortcuts stack vertically on mobile.
- Favourites remain accessible through the navigation drawer; do not require a permanent mobile sidebar.
- The mobile view must keep the **same reader-facing content** as desktop, not replace it with Admin statistics.

### 5.2 Article Page

- Article title, updated date, calculated reading time and favourite/print/copy-link actions remain accessible.
- Numbered steps remain in the article body when an ordered list is used; articles without steps have no forced Steps heading or numbering.
- The desktop right-column panels — **Overview**, **Prerequisites** and **Verification** — move into the main vertical flow on mobile.
- Optional panels are hidden when their corresponding fields are empty.
- Notes, links, code blocks and lists remain readable; long code lines may scroll horizontally.
- Preserve clickable breadcrumbs and the article hierarchy.

### 5.3 Admin Dashboard

- The four summary cards (Articles, Categories, Users, Total Views) reflow into two columns when space allows, otherwise one.
- Recent Articles becomes a compact, scrollable list. The design target is about five visible items, with up to 20–25 items available in the scroll area.
- Quick Actions stack as full-width buttons.
- Content Overview chart and its clickable categories reflow without clipping or losing labels.
- System status cards stack below the other dashboard panels.
- Mobile navigation retains access to Dashboard, Articles, Categories, Users, Settings and Help.

### 5.4 All Articles — Management

- Search, category filter, status filter and sort control stack vertically.
- The desktop table becomes article cards or compact list rows on mobile.
- Each item retains title, category path, Draft/Published status, updated date and available actions; views may be shown where space permits.
- The three-dot menu provides **Preview**, **Duplicate** and **Copy Link**, subject to article permissions and publication state.
- Individual **Edit** and **Delete** actions remain available, either directly or in an accessible actions menu.
- Preserve multi-selection and bulk **Move**, **Publish**, **Unpublish** and **Delete** actions on mobile.
- Pagination and results-per-page controls remain usable without horizontal overflow.
- Deletion requires confirmation and should be recoverable where supported.

### 5.5 Create / Edit Article

- Use one template, with heading **Create Article** or **Edit Article** according to mode.
- On mobile, stack title, hierarchical category selector, content type, article editor, status and optional fields in one column.
- Category selection displays the full nested path (for example, `IT Infrastructure / Microsoft 365 & Cloud / Exchange Online`).
- Keep the formatting toolbar simple: semantic headings, bold, italic, bullets, numbered lists, code, links and images; visual styling comes from the Design System.
- The rich-text toolbar may wrap or scroll horizontally on narrow screens; it must not obscure the editor.
- The status is **read-only**; Save Draft and Publish control publication actions.
- Overview, Prerequisites and Verification remain optional and follow the main editor on mobile.
- Keep **Cancel**, **Preview**, **Save Draft** and **Publish** visible and usable. Buttons may wrap or stack; avoid overlapping content.
- Warn about unsaved changes when navigating away.

## 6. Other pages without separate mobile mockups

| Page | Responsive implementation |
|---|---|
| Category / nested subcategory | Reflow category cards into one column; preserve hierarchy, article counts if displayed, and clickable breadcrumbs |
| Search Results | Stack filters or use a filter drawer; present readable result cards and mobile-friendly pagination |
| Login / Reset Password | Centre a single-column form; use full-width inputs and clear error/success messages |
| Category Management | Stack category tree and Create/Edit form; keep Add Subcategory, Create Article, Edit and Delete accessible |
| Manage Users | Convert the table into user cards or simplified rows; retain Add, Edit, Disable/Enable and Remove |
| Settings | Make General, Email, Security, Content and System tabs horizontally scrollable or use a compact selector; forms stack |
| Total Views / Statistics | Stack summary cards and charts; maintain legible legends, filters and clickable article/category links |

## 7. Interactive states to check

- Default, hover, focus-visible, active, selected and disabled states.
- Navigation drawer open/closed; nested categories expanded/collapsed.
- Loading, empty results, error and success feedback.
- Form validation, password visibility, unsaved changes and confirmation dialogs.
- Search/filter/sort/pagination interactions.
- Keyboard navigation, accessible names and sufficient contrast.
- Long text, large article counts and deeply nested category paths.

## 8. Implementation approach

- Reuse the existing React, styled-components and design-token architecture.
- Define responsive breakpoints once in the shared design system, rather than repeating numeric values in every component.
- Prefer CSS Grid/Flexbox and reusable responsive primitives.
- Keep the underlying page data and behaviour the same across screen sizes; adapt presentation rather than creating separate mobile applications.
- Use actual browser testing to refine the image mockups. Mockups illustrate intent and are not pixel-perfect implementation requirements.

## 9. Stage 02.08 completion checklist

- [ ] Desktop design references saved.
- [ ] Five mobile reference images saved.
- [ ] Shared responsive behaviour documented.
- [ ] Mobile navigation and nested categories specified.
- [ ] Table, chart and editor adaptations specified.
- [ ] Interactive and accessibility states reviewed.
- [ ] All pages tested at desktop, tablet and mobile sizes during implementation.

**Suggested location:** `docs/02-design/ResponsiveDesign.md`
