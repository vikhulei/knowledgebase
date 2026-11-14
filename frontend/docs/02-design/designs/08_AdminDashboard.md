# Admin Dashboard — Design and Behaviour

**Design reference:** `08_AdminDashboard.png` (save or copy as `AdminDashboard.png` alongside this document).

## Purpose

The Admin Dashboard is the landing page for administrators. It provides a quick overview of Knowledge Base content, shortcuts to common management tasks, recent article activity, and system health. Figures and statuses shown in the mock-up are illustrative; the application will obtain them dynamically.

## Layout and navigation

Use the shared Charcoal & Teal admin design: dark left sidebar, top search/header, breadcrumbs, and a responsive main content area.

**Sidebar**

- **Back to Knowledge Base:** return to the reader-facing home page.
- **Dashboard:** open this page.
- **Articles (expandable):** All Articles, Create Article, Drafts (dynamic count), Published.
- **Categories:** open Category Management (not expandable in the sidebar).
- **Users:** open User Management (not expandable).
- **Roles & Permissions:** open permissions management (not expandable).
- **Settings:** open application settings (not expandable).
- **Help:** open help/documentation.

The Drafts and Published links both open **All Articles** with the corresponding status filter applied; they do not require separate page templates.

**Top bar:** application-wide admin search, notifications (if implemented), and account/profile menu. Breadcrumbs show `Admin > Dashboard`.

## Summary cards

| Card | Display | On click |
| --- | --- | --- |
| Articles | Total article count | Open All Articles |
| Categories | Total categories/subcategories | Open Category Management |
| Users | Total user count | Open User Management |
| Total views (30 days) | Article views during the last 30 days | Open article statistics / views report |

Counts come from backend data, not fixed values. Define a consistent counting rule for draft/published articles and nested categories when implementing the backend.

## Recent Articles

- Retrieve the **25 most recently updated articles**, including drafts and published articles.
- Show approximately **five rows** in a fixed-height, vertically scrollable table.
- Display **Title, Status, Updated date, Views** and a row actions menu.
- Clicking an article title or Edit action opens its Article Editor.
- **View all articles** opens All Articles.
- Use the statuses **Draft** and **Published** only in the initial version. The mock-up's **In Review** row is illustrative and must be replaced with Draft; there is no review workflow initially.
- Dates and view counts are retrieved dynamically. A draft may have no public views.

## Quick Actions

| Button | Behaviour |
| --- | --- |
| Create new article | Open a blank Article Editor |
| Add category | Open Category Management in create-category mode |
| Manage users | Open User Management, with search and Add/Edit/Delete/Disable options |
| View drafts (N) | Open All Articles filtered to Draft; N is the current draft count |

## Content Overview

- Display a donut chart of published article counts by **content type**, such as Guides, Troubleshooting, Scripts / Commands, Reference, and Templates.
- Counts and percentages are calculated dynamically.
- **Each chart segment and its corresponding legend label is clickable** and opens All Articles filtered to that content type.
- Clicking the centre total can open All Articles.
- The chart should include text labels so it remains understandable without colour alone.
- Do not confuse content types with the sidebar's category hierarchy; they are different classifications.

## System Status

The System panel shows actual backend health information, not assumed green indicators.

| Item | Behaviour |
| --- | --- |
| Application | Backend health endpoint reports service availability |
| Database | Backend performs a lightweight database connectivity/query check |
| Email (Resend) | Backend checks configuration and API connectivity where supported; successful delivery requires separate evidence (such as events or a test email) |
| Last backup | Show timestamp and success status from the latest **verified** backup record; otherwise show Unknown/Not configured |

Use meaningful statuses such as **Connected/Online, Degraded, Unavailable, Unknown, Not configured**. Run checks on the backend without exposing secrets or API keys to the browser. Restrict system details to authorised administrators.

## Responsive and interaction behaviour

- **Desktop:** full sidebar, four summary cards across where space permits, Recent Articles alongside Quick Actions, Content Overview alongside System.
- **Tablet:** reduce card columns and stack panels as needed.
- **Mobile:** collapsible sidebar, single-column panels, horizontally scrollable or simplified article table.
- Cards and links must have keyboard focus states and clear hover/click behaviour.
- Show loading, empty, and error states if dashboard data cannot be retrieved; never display mock figures as real data.

## Implementation notes

Suggested route: `/admin` (or `/admin/dashboard`).

Suggested reusable components: `AdminLayout`, `AdminSidebar`, `DashboardStatCard`, `RecentArticlesTable`, `QuickActions`, `ContentOverviewChart`, `SystemStatusPanel`.

This document describes the **Admin Dashboard only**. The detailed All Articles, Article Editor, Categories, Users, Roles & Permissions, and Settings behaviours belong in their own specifications.
