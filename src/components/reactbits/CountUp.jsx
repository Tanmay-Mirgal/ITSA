'use client';

/*
 * React Bits CountUp (https://reactbits.dev), adapted for ITSA. Same props as the original; changes:
 *  - the server and no-JS render show the final value instead of an empty span
 *  - prefers-reduced-motion keeps the final value and skips the animation
 *  - no `motion` dependency: an IntersectionObserver starts a requestAnimationFrame ease-out
 *    (the original used a motion spring), which keeps ~28 KB gzip out of the bundle
 */

import { useCallback, useEffect, useRef, useState } from 'react';

const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

const decimalsOf = num => {
  const str = num.toString();
  if (str.includes('.')) {
    const decimals = str.split('.')[1];
    if (parseInt(decimals) !== 0) return decimals.length;
  }
  return 0;
};

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}) {
  const ref = useRef(null);
  const callbacks = useRef({ onStart, onEnd });
  callbacks.current = { onStart, onEnd };

  // Read after mount so the server HTML and the first client render match.
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const maxDecimals = Math.max(decimalsOf(from), decimalsOf(to));

  const formatValue = useCallback(
    latest => {
      const hasDecimals = maxDecimals > 0;
      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };
      const formatted = Intl.NumberFormat('en-US', options).format(latest);
      return separator ? formatted.replace(/,/g, separator) : formatted;
    },
    [maxDecimals, separator]
  );

  const start = direction === 'down' ? to : from;
  const end = direction === 'down' ? from : to;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (reduceMotion) {
      el.textContent = formatValue(end);
      return undefined;
    }

    el.textContent = formatValue(start);
    if (!startWhen) return undefined;

    let raf = 0;
    let delayTimer = 0;

    const run = () => {
      callbacks.current.onStart?.();
      const startedAt = performance.now();
      const tick = now => {
        const progress = Math.min(1, (now - startedAt) / (duration * 1000));
        el.textContent = formatValue(start + (end - start) * easeOutCubic(progress));
        if (progress < 1) raf = requestAnimationFrame(tick);
        else callbacks.current.onEnd?.();
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      delayTimer = window.setTimeout(run, delay * 1000);
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(delayTimer);
      cancelAnimationFrame(raf);
    };
  }, [reduceMotion, startWhen, start, end, delay, duration, formatValue]);

  return (
    <span className={className} ref={ref} suppressHydrationWarning>
      {formatValue(end)}
    </span>
  );
}
