# ITSA — Information Technology Student Association

Website for the ITSA committee at VPPCOEVA, Sion, Mumbai. Built from the Figma Make design *Redesign ITSA Website*.

Stack: **Next.js 16 (App Router)**, React 19, hand-written CSS and selected **React Bits** components. No shadcn/ui.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. Other scripts: `npm run build` (production build; the page is prerendered as static HTML) and `npm start` (serve the build).

## Where things live

```
src/app/layout.jsx           fonts (next/font), metadata, global CSS
src/app/page.jsx             the page: sections in order
src/app/globals.css          imports every stylesheet in src/styles (responsive.css last)
src/data.js                  all copy, links, events, teams, tech topics, images
src/hooks.js                 scroll state, reveal-on-scroll, list selection, overlay focus
src/components/              one file per section or widget
src/components/reactbits/    React Bits components (see NOTICE.md there for licence and local changes)
src/styles/                  tokens, base, one stylesheet per area, reactbits.css for the glue
DESIGN-SYSTEM.md             tokens, components and what differs from Figma
```

Server vs client: sections that only render content (About, Impact, Featured, Footer, ...) are Server Components. Anything with state, events or canvas (`SiteChrome`, `Hero`, `TechHost`, `TeamStage`, `GalleryStage`, the lists and overlays) starts with `'use client'`.

## React Bits in the site

| Where | Component |
|-------|-----------|
| Hero headline, the big ITSA wordmarks (system strip, identity, footer) | `TechText` via `TechHost` |
| Hero background | `Particles` |
| About lead paragraph | `ScrollReveal` |
| Impact cards (photo that turns to colour around the cursor) | `ChromaGrid` |
| Technology (8 topics as a bento around the ITSA core) | `MagicBento` |
| Live cards | `SpotlightCard` |
| Techgyanathon facts, numeric impact stats | `CountUp` |
| Section labels, featured thesis | `DecryptedText` |
| ITSA Team | `CircularCarousel` |
| Gallery | `FlexCarousel` (static collage when WebGL2 is missing) |
| Connect | `Aurora` |
| Whole page | `ClickSpark` |

All of them respect `prefers-reduced-motion`. The WebGL ones load in their own chunks. `TechHost` keeps the real text in the DOM and draws a canvas copy on top.

## Updating content

Edit `src/data.js`:

- **Impact numbers** are still the `XX+` placeholders from the design. Replace `value: 'XX+'` in `IMPACT_STATS` with `to: 40, suffix: '+'` and it counts up. Each entry also holds the card photo (`image`) and glow colour (`accent`).
- **Technology topics** are `TECH_NODES` (name plus tags). The bento layout (core tile in the middle) is set in `src/components/TechBento.jsx`.
- **ITSA Team ring**: `TEAM_CARDS`. The cards are the five teams for now because no member photos were available. For people, use `{ title: 'Full Name', subtitle: 'Role', src: '<portrait url>', alt: 'Full Name' }`; 8 to 12 cards fill the ring best.
- **Contact links** are in `CONTACT` (email, Instagram, LinkedIn).
- **Photos** are Unsplash stand-ins from the design (`IMAGES`, `GALLERY`). The People, Events and About photos go through `next/image` (allowed host in `next.config.mjs`); the carousels load their images directly. Swap in real ITSA photos and update the credit line in `src/components/Gallery.jsx`.
- **Events, teams and technology topics** are `EVENTS`, `TEAMS` and `TECH_NODES`.

New pages (for example a dedicated `/events` page) go in `src/app/<name>/page.jsx`.
