# Create / Edit Article — Design and Behaviour

**Design reference:** `ArticleEditor.png`  
**Page templates:** One reusable Create / Edit Article interface  
**Routes:** `/admin/articles/new` and `/admin/articles/:id/edit`

## 1. Purpose

Allow authorised administrators or editors to create, edit, preview, save and publish Knowledge Base articles. The same interface is used for new and existing articles.

- **Create Article:** Empty form, with the heading **Create Article**.
- **Edit Article:** Existing data is loaded, with the heading **Edit Article**.
- No separate Create/Edit mode buttons are needed within the page.

## 2. Page layout

Use the existing Admin header, sidebar and Charcoal & Teal design system.

### Main column

1. **Article Title** — required text field.
2. **Category** — required hierarchical selector, supporting any nesting depth. Display the full path, for example `IT Infrastructure / Microsoft 365 & Cloud / Exchange Online`. Use one selector rather than separate category and subcategory fields.
3. **Content Type** — select Guide, Troubleshooting, Script / Command, Reference or Template. Required for published articles.
4. **Article Content** — structured rich-text editor. Required for publishing.

### Right column

1. **Status** — read-only label, such as Draft or Published; not an editable dropdown.
2. **Overview** — optional short introduction.
3. **Prerequisites** — optional requirements, permissions, tools or preparations.
4. **Verification** — optional instructions for confirming a successful outcome.

Empty optional fields are omitted from the reader-facing Article Page. The reader-facing page displays Overview, Prerequisites and Verification in its right column.

## 3. Rich-text editor and formatting

Provide a **simplified toolbar** for:

- Paragraph and predefined heading levels.
- Bold and italic text.
- Bulleted and numbered lists.
- Code blocks.
- Links and images.

The editor stores **content structure**; the application design system and CSS control font families, sizes, colours, spacing and the appearance of lists and code blocks. Do not offer arbitrary fonts, font sizes or colours that would conflict with the design system.

### Optional steps and numbering

- There is **no mandatory Steps heading** and no global Show Numbering switch.
- Authors add a **Steps** heading only when appropriate.
- Authors use an ordered list for numbered instructions; numbering is generated automatically.
- For articles that do not need steps, authors can use normal paragraphs, headings, bullets, tables or code blocks instead.
- The same Article Page template renders all article types.

## 4. Bottom actions

| Action | Behaviour |
|---|---|
| **Cancel** | Return to the previous management page. Warn if there are unsaved changes. |
| **Preview** | Show the article using the reader-facing layout, including optional right-column sections, without publishing it. |
| **Save Draft** | Save unpublished content without making it visible to ordinary readers. |
| **Publish** | Validate required fields and make the article available to authorised readers and search. |

For an already published article, **saving a draft must not unintentionally unpublish the live version**. The precise handling of unpublished revisions/version history will be decided during implementation. Likewise, the Publish action should clearly distinguish publishing a new article from publishing changes to an existing article.

**Delete** is available for existing articles through the All Articles management page, with confirmation; it is not required on the Create Article screen.

## 5. Validation and status

- Show clear inline validation messages for missing or invalid required fields when publishing.
- Allow incomplete content to be saved as a draft, subject to minimal data needed to identify the draft.
- Display the current status as a non-editable label, controlled by save/publish actions.
- Prevent accidental loss of unsaved work when navigating away.
- Use only **Draft** and **Published** statuses initially; no Review workflow.

## 6. Category selection

- Support nested categories without a fixed depth limit.
- Show the full parent path to distinguish similarly named subcategories.
- When opened from **Create Article** within Category Management, preselect that category.
- When editing, preselect the article's existing category.
- If the hierarchy becomes large, a searchable tree selector can replace a long dropdown without changing the underlying data model.

## 7. Reader-facing behaviour

- Article Title, Category, Content Type and body content are stored as article data.
- Overview, Prerequisites and Verification appear only when populated.
- The reader-facing page automatically generates breadcrumbs from the selected category hierarchy.
- Reading time is calculated from article text (approximately 200 words per minute), rather than entered manually.
- Numbered steps appear only when the author uses a numbered list.
- Published articles are eligible for search; drafts are restricted to authorised management/preview access.

## 8. Responsive behaviour

- **Desktop:** Wide content editor on the left, narrower optional-fields panel on the right.
- **Tablet/mobile:** Stack the optional fields below the main editor; keep controls accessible and prevent horizontal overflow.
- Action buttons remain easy to reach and clearly labelled.

## 9. Suggested React structure

```text
pages/admin/
  ArticleEditorPage.jsx   # Shared create/edit page

components/admin/articles/
  ArticleForm.jsx
  ArticleContentEditor.jsx
  CategoryTreeSelect.jsx
  ArticleSideFields.jsx
  ArticleEditorActions.jsx
```

The component names are suggestions, not a final implementation requirement.

## 10. Design reference notes

`ArticleEditor.png` is a visual guide. The actual interface should use the agreed data-driven category tree, read-only status, optional sidebar sections and simplified toolbar. Dates, counts and example category names in mock-ups are illustrative.
