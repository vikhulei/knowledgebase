# Personal IT Knowledge Base — Application Sitemap

**Stage:** 02 — Sketches & UI/UX Design  
**Status:** Initial sitemap (v1)  
**Purpose:** Define the application pages, hierarchy, navigation and routes before creating wireframes.

## 1. Navigation concept

The application uses a **top bar + collapsible sidebar + Home dashboard**:

- **Top bar:** application name/logo, global search access, user menu and (for admins) administration access.
- **Sidebar:** eight main knowledge categories, with expandable subcategories. It remains available while browsing content and collapses on smaller screens.
- **Home dashboard:** global search, six **Quick Access** cards pointing to *specific popular articles, templates or subcategories*, plus recently updated content. **Do not repeat the eight sidebar category cards on Home.**
- **Breadcrumbs:** show the current location on category, subcategory and article pages.
- **Footer:** optional and minimal; not a primary navigation element.

## 2. Application hierarchy

```text
Personal IT Knowledge Base
|
+-- Home / Dashboard
|   +-- Global search
|   +-- Quick Access (4–6 curated links; initial suggestions below)
|   +-- Recently Updated articles
|
+-- IT Service Management
|   +-- Incidents & Service Requests
|   +-- Problem Management
|   +-- Change Management
|   +-- ITSM Best Practices
|
+-- IT Infrastructure
|   +-- Windows Server & Active Directory
|   +-- Networking
|   +-- Microsoft 365 & Cloud
|   +-- Virtualisation & Storage
|   +-- Endpoints & Printing
|
+-- Troubleshooting Guides
|   +-- Microsoft 365 Issues
|   +-- Windows & Endpoints
|   +-- Network Connectivity
|   +-- Applications & Software
|   +-- Printers & Peripherals
|
+-- Response Templates
|   +-- Ticket Acknowledgements
|   +-- Progress Updates
|   +-- Resolution & Closure
|   +-- Escalations & Follow-ups
|
+-- Scripts & Commands
|   +-- PowerShell
|   +-- Windows CMD
|   +-- Networking Commands
|   +-- SQL & Other Tools
|
+-- Learning & Onboarding
|   +-- Getting Started
|   +-- Learning Paths
|   +-- Practical Exercises
|   +-- Training Checklists
|
+-- Security & Compliance
|   +-- Identity & Access
|   +-- Endpoint & Network Security
|   +-- Security Operations
|   +-- Policies & Best Practices
|
+-- Quick Reference
|   +-- Useful Links
|   +-- Cheat Sheets
|   +-- Checklists
|   +-- Technical References
|
+-- Shared Pages
|   +-- Category / Subcategory Listing
|   +-- Article / Guide Detail
|   +-- Search Results
|   +-- Login
|   +-- Access Denied
|   +-- Not Found
|
+-- Administration (Admin role only)
    +-- Admin Dashboard
    +-- Manage Articles
    |   +-- Create Article
    |   +-- Edit Article
    +-- Manage Categories & Subcategories
    +-- Manage Response Templates
    +-- Manage Users & Roles
    +-- Manage Dashboard Quick Access
```

**Hierarchy rule:** Main category → Subcategory → Article. These are **data-driven categories**, not separate hardcoded React pages. The same reusable category and article views serve all sections. Additional subcategories can be added without changing the routing architecture.

## 3. Home / Dashboard

The dashboard is a **shortcut and discovery page**, not a duplicate of the sidebar.

### Main areas

1. **Welcome / heading:** short introduction.
2. **Global search:** search across permitted articles, guides, templates and commands.
3. **Quick Access:** six curated cards linking directly to useful content. Cards can point to an article, template or subcategory.
4. **Recently Updated:** list of newly created or recently revised content, with title, category and update date.

### Initial Quick Access card placeholders

| Card | Destination type | Suggested destination |
|---|---|---|
| Exchange Online Cmdlets | Subcategory or article | Scripts & Commands → PowerShell → Exchange Online Cmdlets |
| Remote Support Request | Template | Response Templates → Remote Support Request Email |
| Outlook Troubleshooting | Article | Troubleshooting Guides → Microsoft 365 Issues → Outlook Troubleshooting |
| Active Directory Essentials | Subcategory | IT Infrastructure → Windows Server & Active Directory |
| Network Diagnostic Commands | Article | Scripts & Commands → Networking Commands → Basic Diagnostics |
| New Starter Checklist | Checklist | Learning & Onboarding → Training Checklists → New Starter Checklist |

These are **sample links**, not existing articles. Show cards only when their target content exists; during development use clearly labelled mock data. An admin should eventually be able to select and order the featured links. The initial number is six, but the layout should accommodate four to six cards responsively.

## 4. Shared page templates

| Page | Purpose | Key elements |
|---|---|---|
| Category / Subcategory | Browse organised content | Heading, breadcrumbs, subcategory links, article list, sorting and filtering |
| Article / Guide Detail | Read technical content | Title, category path, structured content, author/review metadata, related links, copyable snippets where appropriate |
| Search Results | Find content across sections | Search term, result list, category/type filters, sorting, empty state and pagination or load more |
| Login | Authenticate users when required | Sign-in form or identity-provider redirect, error state |
| Access Denied | Handle insufficient permissions | Clear message and navigation back to an allowed page |
| Not Found | Handle invalid links | Explanation, Home link and search option |

Specialised content presentation may be added for **Response Templates** (copy response) and **Scripts & Commands** (formatted code and copy command), while retaining the common article model.

## 5. Administration

Admin pages are separate from ordinary reading and browsing. Their functionality is protected by server-side or data-source-enforced permissions, not only by hiding UI controls.

- **Admin Dashboard:** overview and management shortcuts.
- **Manage Articles:** list, create, edit, delete and organise content.
- **Manage Categories:** add, rename, reorder and manage subcategories.
- **Manage Response Templates:** maintain reusable communication text.
- **Manage Users & Roles:** administer User and Admin access, depending on the authentication provider.
- **Manage Dashboard Quick Access:** choose and order featured content links.

## 6. Suggested React routes

| Page | Route |
|---|---|
| Home | `/` |
| Category | `/category/:slug` |
| Subcategory | `/category/:slug/:subSlug` |
| Article / Guide | `/article/:id` |
| Search Results | `/search` |
| Login | `/login` |
| Access Denied | `/access-denied` |
| Admin Dashboard | `/admin` |
| Manage Articles | `/admin/articles` |
| Create Article | `/admin/articles/new` |
| Edit Article | `/admin/articles/:id/edit` |
| Manage Categories | `/admin/categories` |
| Manage Templates | `/admin/templates` |
| Manage Users & Roles | `/admin/users` |
| Manage Quick Access | `/admin/quick-access` |
| Not Found | `*` |

Routes are proposals for the design phase and may be refined during implementation. Article IDs should remain stable even if titles change.

## 7. Responsive navigation

- **Desktop:** top bar, persistent/collapsible sidebar and main content area. Quick Access cards in a responsive grid.
- **Tablet:** narrower or collapsible sidebar; cards flow into fewer columns.
- **Mobile:** sidebar opens via a menu control; search remains accessible; cards stack vertically as needed.

## 8. MVP boundaries and future enhancements

**MVP:** Home with Quick Access, category/subcategory browsing, article detail, search, User/Admin access, article/category editing, responsive navigation and recently updated content.

**Future candidates:** favourites, personalised shortcuts, article feedback, popularity-based automatic ranking, onboarding progress tracking and advanced search. Quick Access can begin as an admin-curated selection; automatic popularity tracking is not required for MVP.

## 9. Design handoff

Use this sitemap to produce wireframes for:

1. Home / Dashboard
2. Header, sidebar and navigation
3. Category, subcategory and article pages
4. Search, login and administration
5. Desktop, tablet and mobile layouts

**Next deliverable:** `02-design/sketches/Home.png` (or an equivalent wireframe).
