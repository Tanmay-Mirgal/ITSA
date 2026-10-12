# ITSA — Information Technology Student Association

Website for the ITSA committee at VPPCOEVA, Sion, Mumbai. Built from the Figma Make design *Redesign ITSA Website*.

Stack: **Next.js 16 (App Router)**, React 19 and hand-written CSS. No shadcn/ui, no React Bits, no UI library.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. Other scripts: `npm run build` (production build; the page is prerendered as static HTML) and `npm start` (serve the build).

## Where things live

```
src/app/layout.jsx      fonts (next/font), metadata, global CSS
src/app/page.jsx        the page: sections in order
src/app/globals.css     imports every stylesheet in src/styles (responsive.css last)
src/app/icon.svg        favicon
src/data.js             all copy, links, events, teams, tech topics, images
src/hooks.js            scroll state, reveal-on-scroll, list selection, overlay focus
src/components/         one file per section or widget
src/styles/             tokens, base, then one stylesheet per area
DESIGN-SYSTEM.md        tokens, components and what differs from Figma
```

Server vs client: sections that only render content (About, Impact, Featured, Gallery, Footer, ...) are Server Components. Anything with state or events (`SiteChrome`, `Hero`, `EventsArchive`, `Technology`, `People`, the overlays and cursor) starts with `'use client'`.

## Updating content

Edit `src/data.js`:

- **Impact numbers** are still the `XX+` placeholders from the design. Replace them in `IMPACT_STATS`.
- **Contact links** are in `CONTACT` (email, Instagram, LinkedIn).
- **Photos** are Unsplash stand-ins from the design (`IMAGES`). They are served through `next/image`; the allowed host is set in `next.config.mjs`. When you switch to real ITSA photos, put them in `public/` (or add their host to `next.config.mjs`) and update the credit line in `src/components/Gallery.jsx`.
- **Events, teams and technology topics** are `EVENTS`, `TEAMS` and `TECH_NODES`.

New pages (for example a dedicated `/events` page) go in `src/app/<name>/page.jsx`.
