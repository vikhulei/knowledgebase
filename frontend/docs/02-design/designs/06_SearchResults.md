# Search Results Page — Design and Behaviour

**Design reference:** `SearchResults.png`  
**Checklist item:** 02.06 — Design search and results page  
**Status:** Agreed design specification

## Purpose

Provide a single, searchable view of published Knowledge Base content, including guides, troubleshooting articles, scripts/commands, references and templates. Search operates across the entire Knowledge Base, not only the category currently open in the sidebar.

## Layout

- Retain the shared charcoal sidebar, top header and search bar.
- Show breadcrumbs: **Home > Search results**. Home is clickable; the current page is not.
- Display the current search query, result count, filters, sorting control and paginated results.
- Each result displays its title, category path, a short matching excerpt, last-updated date, estimated reading time and a favourite toggle.
- Highlight matching search terms in result titles and excerpts.
- Clicking a result opens its Article Page. Category-path links may navigate to their corresponding Category Pages.

## Search behaviour

- Search article **titles, descriptions, keywords and body content**.
- Only published content should appear in ordinary user results; respect any access permissions introduced later.
- Search can be submitted from the header on any page.
- The query remains visible in the search field so it can be refined.
- Filters and sorting update the displayed results without requiring a different page design.
- Show a helpful empty-results state, including suggestions to change the query or clear filters.

## Relevance — default sorting

Relevance prioritises how closely each article matches the search query. Initial implementation may assign weighted scores to matches:

1. Exact phrase in the article title — highest priority.
2. All query words in the title — high priority.
3. Matches in the description or keywords — medium priority.
4. Matches in article body content — lower priority.

Avoid rewarding artificial repetition of search words. Relevance should be based primarily on query matching, **not** on view counts or update dates. A simple JavaScript scoring approach is acceptable initially; a future PostgreSQL implementation could use full-text search.

## Sorting options

| Option | Behaviour |
| --- | --- |
| **Relevance** (default) | Best matches to the search query first |
| **Recently updated** | Most recently modified articles first |
| **Most viewed** | Articles with the highest overall view counts first |
| **Title A–Z** | Alphabetical order by article title |

Do not include **Least recently updated** in the initial user-facing sort menu. It may be useful later for administrative content reviews. A new search defaults to Relevance unless the user has explicitly chosen another order for that search.

## Filters

Keep the left-hand filter panel simple:

### Content type

Multi-select checkboxes for:
- Guide
- Troubleshooting
- Script / Command
- Reference
- Template

### Category

Multi-select categories or subcategories relevant to the current results. The available options and their counts should be generated dynamically. Account for nested category hierarchy.

### My content

- **My favourites:** Show only results the signed-in user has starred.
- **Recently viewed:** Show results the signed-in user has previously opened, where viewing history is available.

**Clear all** resets the filters. The **Last updated** date-range filter is not needed in the initial design; recency is handled through the Recently updated sorting option. **Most viewed** belongs in sorting, not as a duplicate checkbox filter. A **Created by me** filter is not part of the initial scope.

## Result list and pagination

- Display **10 results per page**.
- Provide page numbers and previous/next controls.
- Keep the search query, filters and sort order when navigating between pages.
- Show only the results that satisfy the selected filters; result counts and pagination should update accordingly.
- The favourite star can be toggled without opening the article, once favourites are implemented.
- Estimated reading time can be derived from word count, using approximately 200 words per minute; treat this as an estimate for technical material.
- View counts must be recorded before **Most viewed** sorting can be accurate.

## Responsive behaviour

- **Desktop:** Left filter panel and right result list in two columns.
- **Tablet:** Reduce spacing and allow filters to collapse if space is limited.
- **Mobile:** Results use the full width; filters open in a collapsible panel or drawer, with sorting remaining easy to access.
- Long article titles, breadcrumbs and snippets must wrap without horizontal overflow.

## Notes for implementation

- Build one reusable `SearchResultsPage.jsx` with reusable filter, result-row and pagination components.
- Derive results, counts, filters and ordering from article data rather than hardcoding the examples shown in the mockup.
- Keep search logic separate from presentation so it can later move from local/mock data to an API or database.
- The screenshot is a **visual reference**, not an exact functional specification. If it shows an Updated filter or an inconsistent checked filter, follow the behaviour described in this document instead.
