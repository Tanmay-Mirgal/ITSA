import { useEffect, useLayoutEffect, useState } from 'react';

/** True once the page has scrolled past `threshold` pixels. */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

/**
 * Adds `.is-visible` to every `.reveal` / `.reveal-image` as it enters the viewport.
 * Anything earlier in the page than a revealed element counts as already scrolled past,
 * so an anchor jump or a fast scroll never leaves hidden blocks behind.
 */
export function useReveal() {
  useEffect(() => {
    const targets = [...document.querySelectorAll('.reveal, .reveal-image')];

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let furthest = -1;
        entries.forEach((entry) => {
          if (entry.isIntersecting) furthest = Math.max(furthest, targets.indexOf(entry.target));
        });

        for (let index = 0; index <= furthest; index += 1) {
          targets[index].classList.add('is-visible');
          observer.unobserve(targets[index]);
        }
      },
      // threshold must stay 0: `.reveal-image` starts fully clipped, so its intersection ratio is 0
      // and any higher threshold would never fire.
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/** Active index plus event handlers that select an item by hover, focus or click. */
export function useSelection(initial = 0) {
  const [active, setActive] = useState(initial);

  const bind = (index) => ({
    onClick: () => setActive(index),
    onMouseEnter: () => setActive(index),
    onFocus: () => setActive(index),
  });

  return [active, bind];
}

/**
 * Moves focus into an overlay when it opens, traps Tab inside it, closes on Escape
 * and returns focus to where it came from. A layout effect keeps the focus move
 * synchronous with the open class, before the browser paints.
 */
export function useOverlayKeys(open, onClose, containerRef) {
  useLayoutEffect(() => {
    if (!open) return undefined;

    const previous = document.activeElement;
    const container = containerRef.current;
    const focusable = () => [...container.querySelectorAll('button, a[href]')];
    focusable()[0]?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previous?.focus?.({ preventScroll: true });
    };
  }, [open, onClose, containerRef]);
}
