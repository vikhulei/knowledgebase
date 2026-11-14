# Dialogs, Notifications & Application States

## Purpose

Define reusable interface components for confirmations, warnings, notifications, validation and common application states across the IT Knowledge Base. Use the existing Charcoal & Teal design system on desktop, tablet and mobile.

## Design references

- `DialogsAndNotifications.png` — confirmation and warning dialogs, toast notifications and form validation.
- `ApplicationStates.png` — loading, empty results, access denied and session expired, shown in desktop and mobile layouts.

These images are visual references; the rules below define intended behaviour.

## 1. Confirmation dialog

**Example: Delete article?**

- Message: “Are you sure you want to delete this article? You can restore it later.”
- Actions: **Cancel** and **Delete**.
- Cancel, close (×) and Escape dismiss the dialog without deleting anything.
- Delete triggers the backend operation; show a loading state while it runs, then a success or error notification.
- Use the same reusable dialog for deleting categories or removing users, with context-specific wording.
- Only promise restoration where recoverable deletion is implemented; otherwise clearly explain the consequences.
- For categories with articles or child categories, prevent deletion until the contents are moved or resolved.

## 2. Unsaved changes warning

**Example: Unsaved changes**

- Message: “You have unsaved changes in this article. Do you want to leave this page without saving?”
- Actions: **Stay on page** and **Leave without saving**.
- Trigger when navigating away from a modified, unsaved form, including Cancel or sidebar navigation.
- Stay on page preserves all current form input.
- Leave without saving discards only unsaved changes and continues to the intended destination.
- No warning is necessary when the form has not changed or changes have been saved.

## 3. Notifications (toasts)

| Type | Example | Behaviour |
|---|---|---|
| Success | Article saved successfully. | Appears after confirmed success; dismisses automatically after a short interval and can be closed manually. |
| Error | Unable to save article. Please try again. | Appears after failure; remains visible long enough to read and offers retry where appropriate. |
| Information | Invitation email has been sent. | Confirms a completed informational action. |
| Warning | Some selected articles could not be updated. | Explains partial success and provides details or next steps. |

- Place notifications consistently, without covering important page controls.
- Use icon and text as well as colour to communicate meaning.
- Never show a success message before the server confirms the operation.
- Avoid exposing technical secrets or raw server errors to users.

## 4. Form validation

**Example: Article Title \***

- If empty when required, show: “Article title is required.”
- Mark the field with a visible error border and place the message directly below it.
- Validate required fields before publishing or submitting a form.
- Move focus to the first invalid field or provide an accessible error summary when several fields fail.
- Clear or update the error once the field is corrected.
- Keep validation messages specific and actionable.

## 5. Loading state

**Example: Loading articles…**

- Show a spinner or skeleton while data is being requested.
- Preserve the page layout where possible to minimise jumping.
- For buttons that submit changes, show a progress indicator and prevent duplicate submissions.
- If loading fails, replace the loading state with a clear error and a **Retry** action where appropriate.
- Announce loading and completion accessibly.

## 6. Empty state

**Example: No articles found**

- Message: “Try adjusting your search or filters.”
- Action: **Clear filters**, when filters or a search query are active.
- Distinguish between *no matching results* and *no articles created yet*.
- For a genuinely empty article library, authorised editors may see **Create new article** instead.
- Avoid showing an empty table with no explanation.

## 7. Access denied

**Example: Access denied**

- Message: “You don't have permission to access this page.”
- Display when an authenticated user lacks the required permission.
- Provide a safe route back to the Knowledge Base or dashboard where useful.
- Permissions must be enforced by the backend, not merely by hiding buttons.
- Do not reveal restricted content in the page or API response.

## 8. Session expired

**Example: Session expired**

- Message: “Your session has expired. Please sign in again.”
- Action: **Sign in**.
- Trigger when the user's session is no longer valid and cannot be renewed.
- Clear invalid authentication state and redirect to the login flow.
- Where practical, return the user to their intended page after successful login.
- Warn about unsaved work when possible, without exposing sensitive content.

## 9. Responsive behaviour

| Component | Desktop / tablet | Mobile |
|---|---|---|
| Dialogs | Centred, constrained-width modal over a backdrop | Fit within viewport with comfortable margins; buttons may stack |
| Toasts | Consistent corner or edge placement | Fit screen width without obscuring primary actions |
| Validation | Inline beneath the affected field | Same behaviour, full-width fields |
| Loading / empty / denied / expired | Centred within the relevant content area | Single-column layout with readable text and touch-friendly actions |

- Keep dialogs usable with keyboard, screen readers and touch.
- Trap keyboard focus within an open modal and restore focus when it closes.
- Support Escape to close non-critical dialogs, and ensure destructive actions always require an explicit choice.
- Maintain readable contrast and visible focus indicators.

## 10. Suggested reusable React components

```text
components/ui/
├── ConfirmDialog.jsx
├── UnsavedChangesDialog.jsx
├── Toast.jsx
├── FormFieldError.jsx
├── LoadingState.jsx
├── EmptyState.jsx
├── AccessDeniedState.jsx
└── SessionExpiredState.jsx
```

Use shared design tokens and styled-components rather than page-specific duplicated styles. Centralise toast management and navigation-blocking behaviour where practical.

## Acceptance checklist

- [ ] Confirmations do not perform actions until confirmed.
- [ ] Unsaved changes are protected on navigation.
- [ ] Success and failure messages reflect real operation results.
- [ ] Required-field errors are clear and accessible.
- [ ] Loading, empty and failed requests have distinct states.
- [ ] Access denied and expired sessions are handled safely.
- [ ] Dialogs and notifications work on desktop, tablet and mobile.
- [ ] Keyboard navigation, focus management and screen-reader announcements are tested.
