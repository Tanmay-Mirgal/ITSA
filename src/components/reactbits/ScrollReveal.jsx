'use client';

/*
 * React Bits ScrollReveal (https://reactbits.dev), adapted for ITSA:
 *  - gsap and ScrollTrigger are imported when the effect runs (not at module load), so the ~45 KB gzip
 *    stays out of the initial bundle while the server-rendered text is already readable
 *  - animations live in a gsap.context so only this component's ScrollTriggers are killed on unmount
 *  - skipped entirely under prefers-reduced-motion
 *  - renders a <p> (the original nested a <p> inside an <h2>, which is invalid HTML)
 *  - the word class is namespaced to avoid colliding with other styles
 */

import { useEffect, useMemo, useRef } from 'react';

import './ScrollReveal.css';

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  className = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef(null);

  const words = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((part, index) => {
      if (/^\s+$/.test(part)) return part;
      return (
        <span className="scroll-reveal-word" key={index}>
          {part}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let cancelled = false;
    let ctx;
    let refresh;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const scroller = scrollContainerRef?.current ?? window;

      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { transformOrigin: '0% 50%', rotate: baseRotation },
          {
            ease: 'none',
            rotate: 0,
            scrollTrigger: { trigger: el, scroller, start: 'top bottom', end: rotationEnd, scrub: true }
          }
        );

        const wordElements = el.querySelectorAll('.scroll-reveal-word');
        const wordTrigger = { trigger: el, scroller, start: 'top bottom-=20%', end: wordAnimationEnd, scrub: true };

        gsap.fromTo(
          wordElements,
          { opacity: baseOpacity, willChange: 'opacity' },
          { ease: 'none', opacity: 1, stagger: 0.05, scrollTrigger: wordTrigger }
        );

        if (enableBlur) {
          gsap.fromTo(
            wordElements,
            { filter: `blur(${blurStrength}px)` },
            { ease: 'none', filter: 'blur(0px)', stagger: 0.05, scrollTrigger: wordTrigger }
          );
        }
      }, el);

      // Web fonts and images shift the layout after mount; re-measure once they settle.
      refresh = () => ScrollTrigger.refresh();
      window.addEventListener('load', refresh);
      document.fonts?.ready.then(refresh);
    })();

    return () => {
      cancelled = true;
      if (refresh) window.removeEventListener('load', refresh);
      ctx?.revert();
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <p ref={containerRef} className={`scroll-reveal ${className}`}>
      {words}
    </p>
  );
};

export default ScrollReveal;
