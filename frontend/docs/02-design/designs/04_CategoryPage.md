# Category Page — Design and Behaviour

**Design reference:** `CategoryPage.png`  
**Checklist:** 02.05 — Design category, subcategory and article pages  
**Theme:** Charcoal & Teal

## Purpose

The Category Page helps users explore a topic and find relevant knowledge-base articles. The same reusable page template is used for main categories and nested subcategories, at any depth.

## Layout

The approved `CategoryPage.png` is the visual reference. Keep the shared header, charcoal sidebar, teal highlights and main content styling consistent with the Home Dashboard.

The page contains:

1. **Breadcrumb navigation** — the full path from Home to the current category.
2. **Category heading** — title, icon and a short description.
3. **Browse Topics** — cards for immediate child categories, where they exist.
4. **Popular Articles** — up to five relevant articles.
5. **Recently Updated** — up to five recently modified articles.
6. **Article list** — when articles belong directly to the current category, show them as a separate list, alongside any child-category cards.

The screenshot's article counts, dates and titles are illustrative, not fixed content. **Do not show article counts on topic cards** in the implemented design.

## Breadcrumb behaviour

Example: `Home > IT Infrastructure > Networking > DNS Troubleshooting`

- Each earlier level is a clickable link that opens the corresponding page directly.
- The current page is plain text, not a link.
- Generate the path automatically from the category/article hierarchy; support any nesting depth.
- Breadcrumbs remain visible at the top of Category and Article pages.

## Category cards

- Display the current category's immediate child categories only.
- Each card contains a category icon, title, short description and right-arrow indicator.
- **Clicking anywhere on a card, including the arrow, navigates to that category's page.** The arrow does not expand a dropdown.
- Reuse this same Category Page template at the next level, whether it contains more categories, articles or both.
- Do not show large article counts such as “68 articles” on the cards. Keep the interface focused on topics rather than volume.

## Article lists and content organisation

- A category may contain child categories, articles, or both.
- Aim for roughly **5–10 articles per lowest-level subcategory**, where sensible; this is a guideline, **not a hard limit**.
- If a topic grows too broad, introduce meaningful subcategories rather than dividing it solely to meet a number.
- For longer article lists, show **10 articles per page** with pagination or a Load More control.
- Clicking an article opens its Article Page.

## Dynamic content

### Popular Articles

- Show up to **five** published articles with the highest recorded view counts.
- Scope results to the current category **and all its descendant categories**.
- Generate the list dynamically from stored article data; no manual updates required.
- View counts must be tracked for popularity ranking to work.
- **View All** opens an article listing filtered to the current category and sorted by popularity.

### Recently Updated

- Show up to **five** published articles sorted by their latest modification timestamp, newest first.
- Include articles from the current category and its descendants.
- Generate the list dynamically from stored article data.
- **View All** opens an article listing filtered to the current category and sorted by last updated date.

If either list has no matching articles, display a simple empty state rather than placeholder entries.

## Sidebar and header

- Use the shared application header and sidebar defined in `Navigation.md`.
- The sidebar displays main categories and their immediate subcategories, with only one main category expanded at a time.
- Highlight the relevant active section; deeper navigation is handled by category cards and breadcrumbs, not additional sidebar nesting.
- The global search remains available in the header.

## Responsive behaviour

- **Desktop:** topic cards in a multi-column grid; Popular Articles and Recently Updated can appear side by side.
- **Tablet:** reduce the card grid columns and stack lower panels if space is limited.
- **Mobile:** single-column cards and lists; sidebar opens as a navigation drawer; breadcrumbs may wrap or be shortened while preserving navigation access.

## React implementation notes

Use one reusable `CategoryPage.jsx` for all category depths. Populate it from category relationships and published article data, rather than creating separate pages for each category. Build shared components for `Breadcrumbs`, `CategoryCard`, `ArticleList`, `PopularArticles` and `RecentlyUpdated` as appropriate.

The underlying data model should support a category `parentId` (or equivalent parent relationship), so additional category levels can be introduced without redesigning the page.

## Agreed decisions

- Keep the approved Category Page image as the visual reference.
- Reuse the same template for nested categories.
- Make all preceding breadcrumb levels clickable.
- Topic-card arrows navigate; they are not dropdown toggles.
- Remove article counts from category cards.
- Generate Popular Articles and Recently Updated automatically, showing up to five items each.
- Prefer manageable topic groups, without enforcing a maximum article count.
