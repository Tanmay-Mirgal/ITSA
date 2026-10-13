# React Bits components

The files in this folder are copied from React Bits (https://reactbits.dev, https://github.com/DavidHDev/react-bits), JavaScript + plain CSS variant, and used here as part of the ITSA website.

React Bits is licensed under "MIT + Commons Clause License Condition v1.0", Copyright (c) 2026 David Haz. The licence allows using, copying and modifying the components inside an application or website, provided this notice is kept and the components themselves are not sold, sublicensed or redistributed as a bundle or port. Do not republish this folder as a component library.

| File | Used for | Changes made for ITSA |
|------|----------|-----------------------|
| `Particles` | Hero background network | removed the forced `loseContext()` on cleanup (React StrictMode re-runs the effect on the same canvas, which then rendered nothing) |
| `Aurora` | Connect section glow | same `loseContext()` change |
| `ClickSpark` | Click sparks across the page | none |
| `SpotlightCard` | Impact and live cards | added an `as` prop for the element tag |
| `FlexCarousel` | Gallery (liquid-glass image row) | added an `ariaLabel` prop |
| `CircularCarousel` | ITSA Team (3D ring) | added an `ariaLabel` prop |
| `TechText` | Hero headline and the big ITSA wordmarks | added a `hollow` prop (outline-only resting letters) |
| `CountUp` | Techgyanathon facts, numeric impact stats | final value in the server HTML, reduced-motion support, no `motion` dependency (an IntersectionObserver plus an ease-out replaces the spring) |
| `DecryptedText` | Section labels, featured thesis | real text for screen readers, reduced-motion support, plain `<span>` wrapper instead of `motion.span` |
| `ScrollReveal` | About lead paragraph | gsap imported lazily, scoped ScrollTrigger cleanup, reduced-motion support, valid `<p>` markup |

Dependencies: `ogl` (FlexCarousel) and `gsap` (ScrollReveal). Particles, Aurora, SpotlightCard, ClickSpark, CircularCarousel, TechText, CountUp and DecryptedText need only React.
