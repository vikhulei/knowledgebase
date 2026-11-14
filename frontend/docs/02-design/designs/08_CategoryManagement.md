# Category Management — Design and Behaviour

**Design reference:** `CategoryManagement.png`  
**Page:** Admin → Categories  
**Route:** `/admin/categories`  
**Access:** Administrators with category-management permission.

## Purpose

Manage the Knowledge Base category hierarchy from one page. The **Categories** navigation item, **Add Category** dashboard action and category editing all use the same page, with different form states. Categories can contain articles and further subcategories, with no fixed nesting depth.

## Page layout

- **Shared admin header and sidebar:** The same navigation and Charcoal & Teal styles as the Admin Dashboard.
- **Left panel — Category tree:** Searchable, expandable hierarchy. Includes **Expand all** and **Collapse all** controls, selection highlighting, category names and dynamically calculated article counts.
- **Right panel — Category form:** Create or edit the selected category. Shows **Category Name** (required), **Parent Category** (optional), **Description** (optional), and an informational count of articles and child categories when editing.
- **Top-right action:** **Add Category** opens a blank form.

## Entry points and form states

| User action | Behaviour |
| --- | --- |
| Click **Categories** in admin sidebar | Open Category Management and show the category tree. Select a category to edit it. |
| Click **Add Category** from dashboard or page | Open a blank **Create Category** form; parent is unset by default (top-level category). |
| Select a category in the tree | Show its details in **Edit Category** form. |
| Click **Add Subcategory** on a category | Open the same blank form with that category preselected as parent. |
| Click **Create Article** for a category | Open the Article Editor with that category preselected. |

## Three-dot menu (⋯)

The menu on each category row provides quick actions:

1. **Edit:** Select the category and populate the form on the right.
2. **Add Subcategory:** Start creating a child category with the current category as its parent.
3. **Create Article:** Open the Create Article page with this category selected.
4. **Delete:** Open a confirmation dialogue; deletion is blocked if the category still contains articles or subcategories.

**Moving a category:** Change **Parent Category** in the Edit Category form and save. A separate Move menu item is unnecessary. The app must prevent a category from being its own parent or being moved below one of its descendants.

## Category form

| Field | Behaviour |
| --- | --- |
| Category Name | Required; validate non-empty text. |
| Parent Category | Optional; empty means a top-level category. Show the full nested path, e.g. `IT Infrastructure / Microsoft 365 & Cloud`. |
| Description | Optional short explanation of the category's purpose. |
| Article count | Read-only, calculated dynamically from stored articles. Specify clearly whether a displayed count includes descendants. |
| Subcategory count | Read-only, calculated from direct children. |

**Create mode:** Show **Cancel** and **Create Category**.  
**Edit mode:** Show **Cancel**, **Save Changes** and **Delete**.  
Cancel discards uncommitted changes after warning if necessary.

## Category tree behaviour

- Expand or collapse each node independently; provide **Expand all** and **Collapse all**.
- Search by category name; reveal matching nodes and their ancestor paths.
- Support unlimited nesting using a recursive tree component.
- Selecting a node updates the right-hand form without navigating to another page.
- Keep article counts up to date when articles are created, moved, published or deleted, according to the agreed counting rule.
- Provide clear empty states when there are no categories or no search matches.

## Deletion safeguards

- Always require explicit confirmation before deleting a category.
- **Do not delete** a category that still contains articles or subcategories. Explain what must be moved or removed first.
- Avoid cascading deletion of articles or entire category branches.
- Confirm that the user has permission to delete categories.

## Validation and permissions

- Validate required fields and prevent invalid parent relationships, circular hierarchies and conflicting category names within the same parent where appropriate.
- Enforce authorisation on the backend, not just by hiding UI controls.
- Save changes to persistent storage; update the tree and related navigation after successful changes.

## Responsive behaviour

- **Desktop:** Category tree on the left, create/edit form on the right.
- **Tablet:** Narrower columns or stacked panels depending on available width.
- **Mobile:** Stack the tree above the form; keep search, selection and actions accessible.

## Suggested React structure

```text
pages/admin/CategoryManagementPage.jsx
components/admin/categories/CategoryTree.jsx
components/admin/categories/CategoryForm.jsx
components/admin/categories/CategoryActionsMenu.jsx
components/admin/categories/DeleteCategoryDialog.jsx
```

Both **Create Category** and **Edit Category** use `CategoryForm`, controlled by the selected category and form mode.

## Visual reference notes

The mockup is a layout reference, not a source of final category names, article counts or sample content. The actual application will use the agreed eight top-level Knowledge Base categories and their configured descendants. Any extra actions shown in the mockup should follow the behaviour defined in this document.
