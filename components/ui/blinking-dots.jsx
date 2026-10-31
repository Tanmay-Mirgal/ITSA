'use client';

import { useEffect, useRef } from 'react';

// Pre-parse hex color once
function parseHexToRgb(hex) {
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    const r = parseInt(cleanHex[0] + cleanHex[0], 16);
    const g = parseInt(cleanHex[1] + cleanHex[1], 16);
    const b = parseInt(cleanHex[2] + cleanHex[2], 16);
    return `${r}, ${g}, ${b}`;
  }
  if (cleanHex.length === 6) {
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  }
  return '155, 108, 255';
}

const BlinkingDots = ({
  className = '',
  dotCount = 150,
  dotSize = 2,
  blinkSpeed = 3,
  opacity = 0.15,
  color = '#9b6cff'
}) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let alive = true;
    const rgbPrefix = parseHexToRgb(color);

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        // Re-scatter dots to fill parent dimensions
        dotsRef.current = Array.from({ length: dotCount }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: dotSize + Math.random() * 2,
          opacity: Math.random() * opacity,
          direction: Math.random() > 0.5 ? 1 : -1,
          blinkOffset: Math.random() * Math.PI * 2
        }));
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    const ctx = canvas.getContext('2d', { alpha: true });

    const animate = () => {
      if (!alive || document.hidden) return;
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;
      if (w === 0 || h === 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      const time = Date.now() * 0.001;
      const dots = dotsRef.current;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const viewTop = scrollY - 100;
      const viewBottom = scrollY + window.innerHeight + 100;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        // Skip drawing dots that are well outside the visible viewport
        if (dot.y < viewTop || dot.y > viewBottom) continue;

        const blink = Math.sin(time * blinkSpeed + dot.blinkOffset) * 0.5 + 0.5;
        const currentOpacity = dot.opacity * blink;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgbPrefix}, ${currentOpacity})`;
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const wake = () => {
      if (!alive || document.hidden) return;
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameRef.current);
      } else {
        wake();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    wake();

    return () => {
      alive = false;
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', onVisibility);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [dotCount, dotSize, blinkSpeed, opacity, color]);

  return (
    <div className={className}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default BlinkingDots;
