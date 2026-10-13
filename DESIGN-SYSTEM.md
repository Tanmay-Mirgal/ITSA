# ITSA Design System

Source: the Figma Make file *Redesign ITSA Website*. The build is Next.js (App Router) with hand-written CSS in `src/styles/` plus selected React Bits components (`src/components/reactbits/`). There is no component library on top: no shadcn/ui.

## Tokens (`src/styles/tokens.css`)

### Color

| Token | Value | Use |
|-------|-------|-----|
| `--ink` | `#06070d` | Page background, darkest sections |
| `--surface` | `#0b0d18` | About, archive, gallery |
| `--surface-2` | `#101426` | People section base, palette window |
| `--navy` | `#111936` | Live section, image placeholders |
| `--event-void` | `#090711` | Featured event |
| `--footer-void` | `#030407` | Footer |
| `--purple` | `#7144e8` | Brand, identity block, mobile menu, hover fills |
| `--violet` | `#9b6cff` | Emphasis words (`<em>`), hover text, focus accents |
| `--blue` | `#4f7cff` | Reserved (defined in the design, not yet used) |
| `--cyan` | `#4cd8f8` | Live status, tech headline, gallery tags, focus ring |
| `--white` | `#f4f3f7` | Text on dark, light sections |
| `--muted` | `#9b9dac` | Secondary text on dark |
| `--muted-on-light` | `#5c5a66` | Secondary text on the white sections |
| `--line` / `--line-strong` | white at 14% / 28% | Borders on dark |
| `--line-on-light` | ink at 20% | Borders on light |

Contrast, measured (WCAG ratio): white on ink 18.2, muted on ink 7.5, muted on navy 6.4, violet on navy 4.9, cyan on ink 12.0, white on purple 5.2, muted-on-light on white 6.1. **Never put `--muted` on `--purple`** (2.1:1).

### Typography

| Role | Family | Notes |
|------|--------|-------|
| Display | Space Grotesk 400–700 | Headlines, numbers, list rows. Tight tracking (`-0.03em` to `-0.11em`), uppercase |
| Body | Manrope 400–700 | Copy and small caps labels |

Both are loaded with `next/font/google` in `src/app/layout.jsx` (self-hosted at build time, `latin` + `latin-ext` for the ₹ sign) and exposed as `--font-display` and `--font-sans`, which `--display` and `--sans` wrap.

Labels use a four-step floor so nothing is smaller than 10px: `--fs-nano` .625rem, `--fs-micro` .66rem, `--fs-label` .7rem, `--fs-small` .82rem, `--fs-body` .95rem. (The Figma export used sizes down to 8px.)

### Layout, motion, stacking

- `--gutter` is `clamp(1.25rem, 5.5vw, 6.5rem)`, the side padding of every section.
- `--ease` is `cubic-bezier(.22, 1, .36, 1)`, used by every transition.
- Breakpoints: 1200px (live section goes single column), 1050px (hamburger nav, tablet), 720px (phone).
- z-index: noise 95, nav 80, mobile menu 110, palette 150, cursor 200.

## Components

| Component | File | Variants / states | Notes |
|-----------|------|-------------------|-------|
| Button | `components/Button.jsx` | `primary` (white fill, turns purple), `line` (outlined) | Anchor styled as a button; arrow nudges on hover |
| SectionHeader | `components/SectionHeader.jsx` | optional intro paragraph | `meta` label + `h2`; fades up on scroll |
| Selectable list | `EventsArchive`, `People` | default / hover / active | Buttons with `aria-pressed`; hover, focus and click all select |
| Tech node | `Technology.jsx` | default / active | Positioned by `.node-1…8`; detail panel is `aria-live` |
| Mobile menu | `MobileMenu.jsx` | closed / open | Full-screen purple sheet, staggered links |
| Command palette | `CommandPalette.jsx` | closed / open | Ctrl/⌘ + K, Esc to close |
| Cursor | `Cursor.jsx` | dot / labelled disc | Only on fine pointers; label from `data-cursor` |
| Tech wordmark | `TechHost.jsx` + `reactbits/TechText` | resting / hovered letter | Real text stays in the DOM; a canvas copy sits on top. Hover turns a letter into a dashed outline with a measurement frame; letters can be dragged |
| Team ring | `TeamStage.jsx` + `reactbits/CircularCarousel` | drift / paused / focused card | Drag, arrow keys or click; drifts slowly and pauses on hover |
| Gallery row | `GalleryStage.jsx` + `reactbits/FlexCarousel` | resting / dragging / focused | Vertical wheel scrolls the page (`captureWheel` off); collage fallback without WebGL2 |
| Spotlight card | `reactbits/SpotlightCard` via `spotlight.js` | idle / cursor near | Flat variant (live cards): no surface, radius or border of its own, because the hairline grid draws them |
| Impact photo card | `Impact.jsx` + `reactbits/ChromaGrid` | grey / colour near cursor | Square hairline cells; the figure sits over a dimmed photo with top and bottom scrims for contrast |
| Technology tile | `TechBento.jsx` + `reactbits/MagicBento` | idle / border glow / tilt | Index, topic, tag chips. The ITSA core is a 2×2 tile with two orbiting satellites. 4 columns, 2 below 960px, 1 below 520px (set in `techbento.css`, not in JS, so there is no layout jump on phones) |
| Decrypting label | `MetaLabel.jsx` + `reactbits/DecryptedText` | on first view | Scrambled characters read violet until resolved |

### Motion layer (React Bits)

Where each component is used is listed in `README.md`. Rules every use follows:

- `prefers-reduced-motion`: no animation, final state shown (Particles, Aurora and the carousels freeze or skip their intro).
- Decorative WebGL (Particles, Aurora, FlexCarousel) loads in its own chunk and only renders while visible.
- Text that matters stays real text in the DOM (headline, lead paragraph, numbers); canvases and counters are layered on or computed from it.
- Overlays on dark/light grounds keep contrast: the Aurora is masked to the bottom third of Connect so headline and copy stay on a dark ground.

### Accessibility behaviour

- Skip link, one `h1`, `h2` per section, landmark `nav`, `main`, `footer`.
- Overlays use `inert` while closed, move focus in on open, trap Tab, close on Esc and return focus to the trigger.
- Visible focus ring: 2px cyan (white inside the purple menu).
- `prefers-reduced-motion` shortens every transition and animation to ~0.
- Stacked preview images keep `alt` only on the active one; decorative orbs and giant wordmarks are `aria-hidden`.
- Touch targets: nav button, menu, close and list rows are at least 44px.

## Differences from the Figma export

| Change | Reason |
|--------|--------|
| Smallest label size 8px → 10px | Legibility |
| `--muted-on-light` darkened from `#696773` to `#5c5a66` | Contrast margin on white |
| Hamburger pinned to the right of the nav | In the export it dropped to a second row on tablet and phone |
| "CONSTELLATION." scaled down on phones | It overflowed a 375px screen |
| Constellation nodes repositioned (Design node up on desktop and tablet, bottom nodes in `rem` on phones), detail panel capped at 30% width | The Design node sat on top of the selected-topic panel, and on phones the Cybersecurity node covered it for four-tag topics |
| Live section stacks below 1200px | The module grid overflowed section padding between 1050 and ~1150px |
| Archive and people rows use `minmax(0, 1fr)` | Long words no longer widen the page at 320px |
| LinkedIn link points at the public company page | The export linked to an `/admin/` URL that visitors cannot open |
| Mouse parallax on the hero orb is a little stronger | Original was barely visible |
| Connect copy moved below the headline | In the export it overlapped the second headline line and was unreadable over the violet letters |
| New "ITSA Team" section (07); later sections renumbered 08–11 | Requested after the Figma export |
| About: photo left (4:5), lead paragraph in a wide right column, principles as a list | The export set the lead in a narrow column that broke into 11 lines and left a large empty area |
| Technology: constellation of floating nodes replaced by a bento of tiles around the ITSA core | The nodes were sparse, their lines did not meet the nodes, and the selected topic hid the other seven topics' tags |
| Impact cards carry photos and a colour reveal | The export had empty cells |
