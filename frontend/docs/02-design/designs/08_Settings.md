# Settings — Page Specification

## Purpose
Provide administrators with one place to configure the IT Knowledge Base application. The page uses the existing Charcoal & Teal Admin layout and five tabs: **General, Email, Security, Content and System**.

**Access:** Administrators only. Settings are separate from article, category, user and role management.

**Design reference:** `Settings.png` (General tab shown).

## Layout and navigation

- Admin sidebar: Back to Knowledge Base, Dashboard, Articles, Categories, Users, Roles & Permissions, Total Views, Settings and Help.
- Breadcrumb: **Admin > Settings**.
- Page title: **Settings**; subtitle: **Configure your Knowledge Base application.**
- Five tabs across the page: **General | Email | Security | Content | System**.
- Main settings form on the left; contextual help/explanation panel on the right on desktop.
- Bottom actions: **Cancel** and **Save Changes** for editable tabs. Show unsaved-change confirmation when leaving a modified form.
- On smaller screens, tabs can wrap or scroll horizontally; the help panel moves below the form.

## 1. General

Editable fields:

| Field | Behaviour |
|---|---|
| Application Name | Required. Used in the browser title, login page and navigation. Default: `IT Knowledge Base`. |
| Application Description | Optional short description shown where relevant in the application. |
| Logo | Preview current logo; **Change Logo** and **Remove** actions. Validate file type and size. Suggested PNG or SVG, up to 2 MB; sanitise SVG or restrict to safe image formats. |
| Default Language | Initially **English (UK)**. Additional languages only when translations are implemented. |

The right-hand panel explains what each field affects. Saving applies validated settings to the application.

## 2. Email

Use **Resend** for transactional emails such as account invitations and password-reset links.

- Show email provider and **connection/configuration status**.
- Show and allow editing of the **sender address** only where it is verified and permitted by the email provider.
- Provide a **Send Test Email** action with a recipient field and clear success/failure feedback.
- Show the last test time/result where available.
- Resend API keys are configured and stored securely on the **backend/hosting environment**, never displayed in browser source or returned to the client.
- A configured API key does **not** guarantee delivery; distinguish configuration checks, API checks and confirmed email delivery.

## 3. Security

| Setting | Proposed behaviour |
|---|---|
| Session Duration | Select an approved duration; backend enforces expiry and secure session cookies. |
| Invitation Link Expiry | Default example: **24 hours**; invitations are single-use and time-limited. |
| Password Policy | Display/enforce password requirements for account activation, change and reset. |
| Password Reset | Use time-limited, single-use links; show generic request confirmation to avoid revealing accounts. |

- Only authorised administrators may modify these settings.
- Use secure `HttpOnly`, `Secure` cookies with an appropriate `SameSite` policy for authentication sessions.
- Changes that affect existing sessions or invitations must have explicitly defined behaviour and appropriate confirmation.
- Do not expose secrets or raw password hashes.

## 4. Content

| Setting | Behaviour |
|---|---|
| Default Article Type | Select the initial type for a new article (e.g. Guide, Troubleshooting, Script / Command, Reference or Template). |
| Articles Per Page | Choose **10, 25 or 50**; default **25** for article management lists. |
| Search Settings | Reserve for later configurable search behaviour; do not expose non-functional controls. |

These are application defaults; an individual user may be allowed to temporarily change the results-per-page setting on a list.

## 5. System

Primarily a **read-only** operational status panel, sourced from backend checks.

| Indicator | Source / interpretation |
|---|---|
| Application | Backend health endpoint responds successfully. |
| Database | Lightweight authenticated database query succeeds (e.g. `SELECT 1`). |
| Email (Resend) | Backend checks configuration/API access; clearly separate this from actual email delivery. |
| Last Successful Backup | Timestamp and result of the last **verified** backup, if available. |

- Suggested states: **Connected / Online**, **Degraded**, **Unavailable**, **Not Configured** and **Unknown**.
- Display the **last checked** timestamp and a **Refresh Status** action.
- Do not show a successful backup unless a reliable backup system reports one.
- Database credentials, API keys and infrastructure backup schedules remain managed securely outside the browser UI.

## Save, Cancel and validation

1. Opening a tab loads its current settings from the backend.
2. **Save Changes** validates fields, saves authorised changes and displays success or failure feedback.
3. **Cancel** discards unsaved changes for the current tab after confirmation if needed.
4. Switching tabs or leaving Settings with unsaved changes prompts the administrator.
5. Disable saving when nothing has changed; show loading states during requests.
6. Backend validation and authorisation are required even if the frontend also validates inputs.

## Implementation notes

- Suggested route: `/admin/settings` with selected tab optionally stored in a URL query parameter, e.g. `?tab=email`.
- Suggested React page: `SettingsPage.jsx`, with reusable tab components such as `GeneralSettings`, `EmailSettings`, `SecuritySettings`, `ContentSettings` and `SystemStatus`.
- Use existing design-system tokens, form primitives and responsive layouts.
- Avoid storing credentials, secret keys or security-sensitive configuration in frontend code or browser local storage.
- Settings that require backend support should be displayed as unavailable until implemented, not as working controls.

## Scope decisions

**Included in initial design:** General, Email, Security, Content and System.

**Excluded for now:** Appearance and Audit Logs tabs. User and role management remain on their dedicated Admin pages.
