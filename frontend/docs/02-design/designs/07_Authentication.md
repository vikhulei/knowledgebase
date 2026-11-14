# Authentication — Design and Behaviour

## Purpose
Provide secure, straightforward access to the IT Knowledge Base using email and password. The authentication screens use the approved charcoal-and-teal visual design, with a centred card and no application sidebar.

## Design references
- `LoginPage.png` — sign-in screen.
- `ResetPassword.png` — new-password screen reached through a reset email.

Other authentication states reuse the same card layout; separate design images are not required.

## Authentication approach
- Email and password authentication.
- Accounts are created or invited by an administrator; no public self-registration in the initial release.
- Support role-based authorisation, initially **Admin** and **Reader**, with scope for **Editor** later.
- Browser password managers should be supported through standard form fields and autocomplete attributes (`username`, `current-password`, `new-password`). Browsers decide whether to offer credential saving.
- Use secure, persistent server-managed sessions where appropriate; prefer `HttpOnly`, `Secure`, `SameSite` cookies, suitable session expiry, and CSRF protection where needed. Do not store plaintext passwords or session secrets in browser local storage.

## 1. Login page
**Fields and controls**
- Email address.
- Password, masked by default, with show/hide toggle.
- **Forgot password?** link.
- **Sign in** button.

**Behaviour**
- Validate required fields and email format before submission.
- Show a loading state while signing in; prevent accidental repeated submissions.
- On success, redirect to the intended protected page, or Home if no destination was saved.
- On incorrect credentials, show a generic message such as **“Incorrect email or password.”** Do not disclose whether an account exists.
- On network or server errors, show a clear retry message.
- Apply server-side rate limiting and other safeguards against repeated login attempts.

## 2. Forgot password
- Opened from the login page.
- User enters their email address and submits a reset request.
- Always display a neutral confirmation, for example: **“If an account exists for this email address, we'll send password reset instructions.”**
- Send a password-reset email only for eligible accounts; do not reveal account existence in the UI.
- Provide a way to return to Sign in.

## 3. Reset-password email and link
- Email contains a single-use, time-limited password-reset link.
- The link leads to the Reset Password page, not directly into an authenticated session.
- Reset tokens should be unpredictable, validated server-side, and stored securely (for example, as hashes).
- Invalid, used or expired links show an error state with **Request a new link**.

## 4. Reset Password page
**Fields and controls**
- New password.
- Confirm new password.
- Show/hide controls for both fields.
- Password requirements displayed clearly.
- **Reset password** button and **Back to sign in** link.

**Behaviour**
- Validate password strength and matching confirmation before submission.
- The design image illustrates at least eight characters, mixed case, a number and a special character. Final password policy should be confirmed during implementation; prefer a modern length-focused policy and allow password-manager-generated passwords.
- Show inline validation messages and a loading state.
- On success, invalidate the reset token, revoke existing sessions as appropriate, and display **Password reset successful** with a link to Sign in.
- Never email the new password.

## 5. Other states using the same layout
| State | Expected behaviour |
| --- | --- |
| Check your email | Neutral confirmation after a reset request; option to return to login. |
| Reset successful | Confirmation and link to sign in. |
| Invalid or expired reset link | Explain the link cannot be used; offer a new reset request. |
| Session expired | Explain that sign-in is required again; preserve the intended destination where safe. |
| Access denied | Explain that the signed-in account lacks permission; offer a route back to Home. |
| Sign out | End the server-side session, clear the authentication cookie, and return to Login. |
| Change password | Accessible to signed-in users; require appropriate verification of the existing account and apply the same password rules. |

## 6. Session and navigation rules
- Protected pages require a valid authenticated session.
- Authorisation checks must run on the backend as well as in the React interface.
- An unauthenticated visitor opening a protected URL is sent to Login and returned to that URL after successful sign-in where appropriate.
- A signed-in user without the required role sees Access Denied rather than a blank page.
- Session persistence is separate from browser password saving.
- Avoid exposing sensitive information in URLs or error messages.

## 7. Responsive and accessible design
- Centre the authentication card on desktop and tablet; allow it to fill most of the width on mobile.
- Use visible labels, keyboard-operable controls, appropriate focus indicators, and accessible error announcements.
- Maintain sufficient colour contrast and do not rely on colour alone for validation.
- Keep the login and reset layouts consistent with `LoginPage.png` and `ResetPassword.png`.

## 8. Implementation notes
- Reuse a shared `AuthLayout` and form input/button components for all authentication screens.
- Suggested React routes: `/login`, `/forgot-password`, `/reset-password`, `/access-denied`, and an authenticated `/account/change-password` route.
- Actual email delivery, password hashing, reset-token handling, authentication and permissions belong to the backend; the mockups describe appearance and user behaviour only.
- Exact session lifetimes, password policy, email provider and initial account-invitation process will be decided during backend implementation.
