'use client';

import { useEffect, useRef } from 'react';

/** Mix-blend dot that grows into a labelled disc over any `[data-cursor]` element. */
export default function Cursor() {
  const dotRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;

    const dot = dotRef.current;
    const label = labelRef.current;
    const ease = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 0.22;
    const target = { x: -100, y: -100 };
    const position = { x: -100, y: -100 };
    let frame = 0;

    const render = () => {
      frame = 0;
      position.x += (target.x - position.x) * ease;
      position.y += (target.y - position.y) * ease;
      dot.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;

      if (Math.abs(target.x - position.x) > 0.1 || Math.abs(target.y - position.y) > 0.1) {
        frame = requestAnimationFrame(render);
      }
    };

    const onMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onOver = (event) => {
      const host = event.target.closest?.('[data-cursor]');
      label.textContent = host ? host.dataset.cursor : '';
      dot.classList.toggle('active', Boolean(host));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={dotRef} className="cursor" style={{ transform: 'translate3d(-100px, -100px, 0)' }} aria-hidden="true">
      <span ref={labelRef} />
    </div>
  );
}
