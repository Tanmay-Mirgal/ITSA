'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import TechText from './reactbits/TechText.jsx';

const FALLBACK_INK = '#f4f3f7';
const isInvisible = color => color === 'transparent' || /,\s*0\)$/.test(color);

/**
 * Keeps the text in the DOM (search engines, selection, screen readers) and, once fonts and the intro animation
 * are done, draws each `[data-tech-line]` again on a canvas with React Bits TechText, exactly on top of it.
 * The DOM text turns transparent behind the canvas (see `[data-tech]` in reactbits.css).
 *
 * Per line: `data-tech-hollow` draws it as an outline, `data-tech-color` overrides the CSS colour.
 */
export default function TechHost({ as: Tag = 'div', children, className = '', delay = 0, accent = '#4cd8f8', ...rest }) {
  const hostRef = useRef(null);
  const activeRef = useRef(false);
  const [active, setActive] = useState(false);
  const [boxes, setBoxes] = useState([]);

  const measure = useCallback(() => {
    const host = hostRef.current;
    if (!host) return;
    const probe = document.createElement('canvas').getContext('2d');
    if (!probe) return;
    // Once the overlay is on, the DOM text is transparent. Switch it off for this synchronous read (no paint can
    // happen in between) so the real CSS colour is always what gets drawn.
    const wasOn = host.hasAttribute('data-tech');
    if (wasOn) host.removeAttribute('data-tech');
    const hostRect = host.getBoundingClientRect();
    const next = [];

    host.querySelectorAll('[data-tech-line]').forEach((el, index) => {
      const style = getComputedStyle(el);
      const raw = el.textContent.trim();
      // The page shows these lines through CSS text-transform; the canvas has to draw what is shown.
      const text =
        style.textTransform === 'uppercase' ? raw.toUpperCase() : style.textTransform === 'lowercase' ? raw.toLowerCase() : raw;
      if (!text) return;

      const size = parseFloat(style.fontSize);
      const spacing = (parseFloat(style.letterSpacing) || 0) / size;
      probe.font = `${style.fontWeight} ${size}px ${style.fontFamily}`;
      if ('letterSpacing' in probe) probe.letterSpacing = `${spacing * size}px`;
      const m = probe.measureText(text);

      const inkWidth = m.actualBoundingBoxLeft + m.actualBoundingBoxRight;
      const inkHeight = m.actualBoundingBoxAscent + m.actualBoundingBoxDescent;
      // TechText fits the ink into 90% of the width and 66% of the height of its box, so size the box to leave it unscaled.
      const width = Math.ceil(inkWidth / 0.9) + 2;
      const height = Math.ceil(inkHeight / 0.66) + 2;

      const range = document.createRange();
      range.selectNodeContents(el);
      const rect = range.getBoundingClientRect();
      const inkLeft = rect.left - m.actualBoundingBoxLeft - hostRect.left;
      const baseline = rect.top + m.fontBoundingBoxAscent - hostRect.top;

      next.push({
        key: index,
        text,
        family: style.fontFamily,
        weight: style.fontWeight,
        size,
        spacing,
        color: el.dataset.techColor || (isInvisible(style.color) ? FALLBACK_INK : style.color),
        hollow: el.hasAttribute('data-tech-hollow'),
        width,
        height,
        left: inkLeft - (width - inkWidth) / 2,
        top: baseline - ((height - inkHeight) / 2 + m.actualBoundingBoxAscent)
      });
    });

    if (wasOn) host.setAttribute('data-tech', 'on');
    setBoxes(next);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let timer = 0;

    const start = async () => {
      await document.fonts?.ready;
      if (cancelled) return;
      timer = window.setTimeout(() => {
        if (cancelled) return;
        measure();
        activeRef.current = true;
        setActive(true);
      }, delay);
    };
    start();

    const onResize = () => activeRef.current && measure();
    window.addEventListener('resize', onResize);
    const observer = new ResizeObserver(onResize);
    if (hostRef.current) observer.observe(hostRef.current);

    return () => {
      cancelled = true;
      activeRef.current = false;
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      setActive(false);
    };
  }, [delay, measure]);

  return (
    <Tag ref={hostRef} className={`tech-host ${className}`.trim()} data-tech={active ? 'on' : undefined} {...rest}>
      {children}
      {active &&
        boxes.map(box => (
          <div
            key={box.key}
            className="tech-box"
            aria-hidden="true"
            style={{ left: box.left, top: box.top, width: box.width, height: box.height }}
          >
            <TechText
              text={box.text}
              fontFamily={box.family}
              fontWeight={box.weight}
              fontSize={box.size}
              letterSpacing={box.spacing}
              color={box.color}
              accentColor={accent}
              hollow={box.hollow}
              sweep={false}
            />
          </div>
        ))}
    </Tag>
  );
}
