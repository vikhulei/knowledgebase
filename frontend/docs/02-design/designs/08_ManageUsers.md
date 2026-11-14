# Manage Users — Page Specification

## Purpose
Provide administrators with one place to search, add, edit, enable, disable and remove Knowledge Base user accounts. The page follows the Charcoal & Teal admin design and is accessible only to authorised administrators.

**Design reference:** `ManageUsers.png`  
**Suggested route:** `/admin/users`

## User list

Display a searchable, sortable and paginated table with these columns:

| Column | Behaviour |
| --- | --- |
| Name | Full name; opens user details/edit form when selected |
| Position | Job title or position |
| Email | Unique login email address |
| Role | Assigned access role; exact role definitions will be agreed separately |
| Status | **Pending**, **Active** or **Disabled** |
| Last Active | Optional; display only when activity tracking is implemented |
| Actions | Edit, Disable/Enable and Remove; Pending accounts also allow Resend Invitation |

- Search by name, position or email.
- Filter by role and account status.
- Support sorting and pagination; retrieve results in pages when the user list grows.
- Use an **Add User** button above the table.
- Any illustrative names, roles or counts in the mockup are placeholders.

## Add / Edit User

The **Add User** button opens a blank user form. **Edit** opens the same form with the selected user's details.

Fields:
- **Name** — required.
- **Position** — job title.
- **Email** — required, validated and unique; used for sign-in.
- **Role** — required, chosen from configured roles.

The administrator does **not** set or view the user's password.

### Creating a user and activating the account

1. The administrator enters the user details and selects a role.
2. The backend creates a **Pending** account and generates a secure, single-use invitation token.
3. Resend sends an invitation email containing a link to set the initial password.
4. The user opens the link and sees a **Set Password** form with New Password, Confirm Password, show/hide controls and password requirements.
5. After a valid password is submitted, the token is consumed and the account becomes **Active**.
6. The user can sign in with their email and password.

Reuse the existing Reset Password page/component for initial password setup, with a different heading and **Activate Account** action. Invitation links should expire (proposed initial validity: **24 hours**). A Pending user's invitation can be resent; resending invalidates earlier invitation tokens.

If sending the invitation fails, do not misleadingly claim it was sent. Show the administrator a clear error and a way to retry.

## Account statuses

| Status | Meaning | Sign-in |
| --- | --- | --- |
| Pending | Invitation has not yet been completed | Not allowed |
| Active | User has activated the account | Allowed, subject to permissions |
| Disabled | Access has been suspended by an administrator | Not allowed |

### Row actions

- **Edit:** Update name, position, email or role; save with validation.
- **Disable:** Confirm the action, block future sign-ins and revoke active sessions.
- **Enable:** Restore access for a disabled account; an account that has never set a password must still complete activation.
- **Remove:** Confirm removal. Preserve article content and attribution/history where appropriate; avoid destructive cascading deletion.
- **Resend Invitation:** Available for Pending users; generate a fresh time-limited invitation.

Prevent disabling or removing the **last active administrator**. Prevent accidental loss of the current administrator's access.

## Bulk actions

Checkboxes may allow administrators to select several users and **Enable**, **Disable** or **Remove** them. Confirm destructive or access-changing operations, display the number selected and apply the same last-admin safeguards to bulk actions. No bulk role changes are required initially.

## Password and security rules

- Never email a password or expose stored passwords to administrators.
- Store passwords only as modern salted password hashes (for example, Argon2id), not plaintext or reversible encryption.
- Generate cryptographically secure invitation tokens; store only a token hash server-side and invalidate tokens after use or expiry.
- Validate password requirements on the server, not just in the browser.
- Protect account management and invitation endpoints with authorisation, rate limiting and appropriate auditing.
- Use secure sessions; disabled/removed users must lose active access.
- Use generic authentication errors that do not unnecessarily reveal account existence.
- Browser password managers may save credentials on the Login and Set Password pages.

## Navigation and layout

- Admin sidebar **Users** is a single, non-expandable menu item that opens this page.
- Dashboard **Manage Users** opens the same page.
- Keep the existing admin header and sidebar consistent with the other designs.
- On smaller screens, stack filters and use a responsive table or mobile-friendly row layout without hiding essential actions.
- Show loading, empty, validation, invitation-expired and service-error states.

## Implementation notes

Suggested reusable components: `ManageUsersPage`, `UsersTable`, `UserForm`, `UserStatusBadge`, `InviteUserFlow` and `SetPasswordPage` (shared with reset-password UI).

User-management operations and invitation emails must be performed by the backend. The frontend should never contain Resend API keys or password hashes.

## Decisions still to finalise

- Exact role names and permissions (to be covered in **Roles & Permissions**).
- Whether **Last Active** and bulk user actions are needed in the first release.
- Whether Remove is a soft-delete/archive operation or permanent deletion after a retention period.
