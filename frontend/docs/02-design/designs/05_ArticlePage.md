# Article Page — Design and Behaviour

## Purpose

The Article Page is a reusable template for displaying Knowledge Base content, including step-by-step guides, troubleshooting articles, general reference information, scripts and commands. It uses the same charcoal-and-teal header, sidebar and navigation as the rest of the application.

**Visual reference:** `ArticlePage.png` (in this folder).

## Page layout

- **Top header:** Global search and user controls, consistent with the Home Dashboard.
- **Left sidebar:** Main navigation. The relevant main category and subcategory are highlighted or expanded as appropriate.
- **Breadcrumbs:** Show the full path, for example `Home > IT Infrastructure > Microsoft 365 & Cloud > Exchange Online > How to Configure Mailbox Permissions`. Every preceding level is clickable; the current article title is not a link.
- **Main content column:** Article title, metadata, article content and optional notes/warnings.
- **Right column:** Optional cards in this order: **Overview**, **Prerequisites**, **Verification**.

## Article title and metadata

- Display the article title prominently.
- Display **Last updated**, based on the article's saved modification timestamp.
- Display an **estimated reading time**, calculated automatically from the article's word count. A starting formula is `Math.max(1, Math.ceil(wordCount / 200))` minutes.
- Recalculate the estimate when the article is created or updated. This is only an estimate: commands, diagrams, screenshots and technical instructions can take longer to follow than to read.
- Do **not** show a prominent **Step-by-step Guide** label in the header. An article type may still be stored as metadata for filtering, search and administration.
- Provide article actions such as **Favourite**, **Print** and **Copy link**. Their functionality can be implemented during development.

## Flexible main article content

**The “Steps” heading and numbered steps are optional, not hard-coded into the page template.**

- **Step-by-step guide:** May use an optional Steps heading and a numbered sequence.
- **General article:** May use ordinary headings, paragraphs, bullet points, links, tables and images, without a Steps heading or numbering.
- **Script or command reference:** May use code blocks, descriptions, warnings and examples, without numbered steps unless helpful.
- **Troubleshooting article:** May use checks, decision points and resolution instructions, with or without numbering.

The editor should allow the author to choose content blocks and whether to use numbered lists. Empty headings or unused sections must not appear on the published page. This should be handled by reusable content rendering, rather than separate page components for each article type.

## Right-column information cards

Cards appear in the following order, when content is provided:

1. **Overview:** A brief summary of what the article covers.
2. **Prerequisites:** Requirements, permissions, tools or conditions needed before following the article.
3. **Verification:** How to confirm that the procedure or solution worked.

Each card is **optional** and is hidden if no content is provided. For lengthy verification instructions, screenshots or detailed procedures, allow that content to appear in the main column instead.

**Do not include** the former right-column panels **Related Articles**, **In This Article** or **Tags** in this design.

## Notes, warnings and supporting content

- Support optional highlighted **Note**, **Tip** and **Warning** blocks within the main article content.
- Support links, images/screenshots, code snippets, numbered and unnumbered lists, and tables where relevant.
- Keep the main content readable and uncluttered.

## Responsive behaviour

- **Desktop:** Wide main content column with a narrower right column.
- **Tablet/mobile:** Stack right-column cards below the main article content, or place them in a clearly accessible position without obstructing the instructions.
- Preserve readable line lengths, usable links and code-block horizontal scrolling where needed.
- The navigation sidebar follows the responsive behaviour defined in `Navigation.md`.

## Implementation notes

- Use one reusable React component, for example `ArticlePage.jsx`, for all article types.
- Store structured article content and optional fields separately from the page layout.
- Generate breadcrumbs from the category hierarchy, not hard-coded page labels.
- Derive reading time from article content; don't require authors to enter it manually.
- Only render optional cards and headings when the corresponding content exists.

## Agreed design decisions

- Overview moved to the right column, above Prerequisites and Verification.
- Step-by-step Guide badge removed from the article header.
- Reading time calculated automatically.
- Steps heading and numbered steps optional for each article.
- Related Articles, In This Article and Tags panels removed.
- One Article Page template supports guides, reference articles, scripts and troubleshooting content.
