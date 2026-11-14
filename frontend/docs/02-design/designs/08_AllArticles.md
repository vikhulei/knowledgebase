# All Articles — Admin Management Page

## Purpose
Provide a single place for administrators to find, filter and manage Knowledge Base articles, including drafts and published content. The page must remain efficient with thousands of articles.

**Design reference:** `AllArticles.png`  
**Suggested route:** `/admin/articles`

## Navigation
- **Admin → Articles → All Articles** opens this page without a status filter.
- **Admin → Articles → Drafts** opens this same page with **Draft** selected.
- **Admin → Articles → Published** opens this same page with **Published** selected.
- **Create new article** opens the blank Article Editor at `/admin/articles/new`.
- Selecting **Edit** opens `/admin/articles/:id/edit`.

## Article table
Display the following columns:

| Column | Behaviour |
|---|---|
| Selection | Checkbox for each row; header checkbox selects the current visible page. |
| Title | Article title; opens the article editor when selected. |
| Category | Shows the category/subcategory path. |
| Status | **Draft** or **Published**. |
| Updated | Date of last modification. |
| Views | Recorded view count, where available. |
| Actions | **Edit**, **Delete**, and a three-dot **More** menu. |

### Search, filters and sorting
- Search by article title or keywords.
- Filter by any category or nested subcategory.
- Filter by status: **All**, **Draft**, **Published**.
- Sort by **Recently updated** (default), **Title A–Z**, or **Most viewed**.
- Allow column sorting where supported (for example Title, Updated and Views).
- Display the matching result count.
- Paginate results, with **25 per page** by default and options for **10, 25 or 50**.
- Apply searching, filtering, sorting and pagination on the backend; do not load thousands of articles into the browser at once.

## Individual article actions

### Edit
Open the existing article in the reusable Article Editor, with its current content and category selection populated. Editing and publishing controls belong on that page.

### Delete
Request confirmation before deleting. Prefer a recoverable **soft-delete** approach rather than immediately permanently removing the article. Deleted content should no longer appear to readers.

### More menu (three dots)
- **Preview:** Show the article as it would appear to a reader; admins may preview drafts.
- **Duplicate:** Create a new draft copy of the article for editing. The original remains unchanged.
- **Copy link:** Copy the article's direct URL. For unpublished drafts, clarify that ordinary readers cannot access the link; disable the action where appropriate.

Changing an article's category or publication status can be done in the Article Editor, so separate row actions are not required.

## Bulk actions
Administrators can select multiple articles using row checkboxes. Show the number selected and offer these actions:

| Action | Behaviour |
|---|---|
| **Move to category** | Choose a destination category/subcategory and move selected articles. |
| **Publish** | Publish selected drafts, subject to required-field validation. |
| **Unpublish** | Change selected published articles back to Draft so readers can no longer access them. |
| **Delete** | Request explicit confirmation and use recoverable deletion where possible. |

### Bulk-action behaviour
1. Select one or more articles.
2. Choose an action from the **With selected** dropdown.
3. Show a confirmation dialog, particularly for publishing, unpublishing and deleting.
4. Apply the action only after confirmation and show a success/error summary.
5. If some articles cannot be processed, explain which failed and why; do not report complete success.

The implementation must make selection scope clear: **Select all on this page** is distinct from any future **Select all matching results** action. Do not silently apply bulk actions to articles the administrator has not selected.

**Future options (not required initially):** Bulk export and bulk change of content type.

## Additional behaviour
- Restrict all management actions to users with appropriate permissions.
- Show an empty state when no articles match the filters, with an option to clear filters.
- Preserve search/filter state when returning from the editor where practical.
- On narrower screens, keep the table usable through responsive layout or horizontal scrolling.
- Show loading, error and confirmation states clearly.

## React implementation
- `ArticlesPage.jsx` — list, search, filters, pagination and bulk actions.
- `ArticleEditorPage.jsx` — shared Create/Edit interface.
- Suggested routes:
  - `/admin/articles`
  - `/admin/articles/new`
  - `/admin/articles/:id/edit`

## Agreed scope
**Include initially:** search, category/status filters, sorting, pagination, Edit, Delete, Preview, Duplicate, Copy link, and bulk Move/Publish/Unpublish/Delete.

**Not required initially:** a separate Review workflow, a separate Published page component, version history, bulk export or bulk content-type changes.

*The image is a visual reference; sample counts, titles, dates and statuses are illustrative.*
