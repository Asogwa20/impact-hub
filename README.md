# Impact Youth Development Initiative

This repository is a framework-free, static website for the Impact Youth Development Initiative (IYDI). It uses HTML, CSS and vanilla JavaScript only. No server-side code, build step, package manager, database or runtime dependency is required.

## Open the website

Open `index.html` directly in a browser, or publish the repository files to any static web host. Keep the page files, `css/`, `js/`, `images/`, `favicon.png`, `robots.txt` and `sitemap.xml` together at the site root.

## Pages

- `index.html` — Home
- `about.html` — Organization, purpose, vision, mission, objectives, values and President profile
- `programmes.html` — Nine programme areas
- `events-gallery.html` — Event information and event-linked photographs
- `impact.html` — Impact approach and intended outcomes
- `contact.html` — Confirmed contact information and an email-draft form

Each page has its own title and description. Internal navigation uses relative `.html` links so the site works from a local folder as well as on static hosting.

## Editing content and photographs

Edit each page’s semantic HTML to update its copy. Shared design tokens and responsive patterns are in `css/style.css`; shared menu, contact form and gallery interactions are in `js/script.js`.

Put original, approved event photographs directly in `images/`. In `js/script.js`, add each photo to the `eventGalleries` array for its event ID, with its relative `src`, accurate `alt` text and optional caption. The existing event gallery automatically creates photo buttons and a keyboard-accessible lightbox with previous/next controls. Do not add photos or event information that IYDI has not confirmed.

The contact form opens a draft addressed to the published IYDI email in the visitor’s email application. It does not submit, send or store information on a server.

## Confirmed information and items to supply

The site carries over the IYDI organizational content and the supplied Ejike Celestine Nnaji biography. The Impact Business Innovation Summit 2026 is listed with its confirmed date, 18 September 2026, and theme, “Innovate, Build and Scale”. Venue, speakers, sponsors and registration information are not published.

The repository contained an IYDI favicon and a Lovable asset reference for a larger logo, but not the logo image itself. The existing favicon is retained. No event photographs or President portrait were present; the `images/` folder is ready for approved photographs.

The organization’s public website domain was not present in the repository. For that reason, `sitemap.xml` contains no invented page URLs. Add absolute page URLs and a sitemap reference in `robots.txt` after the official domain is confirmed. Social links are not published because no confirmed URLs were supplied.
