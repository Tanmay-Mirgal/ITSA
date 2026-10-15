'use client';

import { useEffect, useRef, useState } from 'react';

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
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize dots
    const initializeDots = () => {
      const newDots = Array.from({ length: dotCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: dotSize + Math.random() * 2,
        opacity: Math.random() * opacity,
        direction: Math.random() > 0.5 ? 1 : -1,
        blinkOffset: Math.random() * Math.PI * 2
      }));
      setDots(newDots);
    };

    initializeDots();

    const animate = () => {
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw dots
      const time = Date.now() * 0.001;
      dots.forEach(dot => {
        // Calculate blinking effect
        const blink = Math.sin(time * blinkSpeed + dot.blinkOffset) * 0.5 + 0.5;
        const currentOpacity = dot.opacity * blink;

        // Convert hex color to rgb
        const rgb = hexToRgb(color);
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${currentOpacity})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [dotCount, dotSize, blinkSpeed, opacity, color]);

  // Helper function to convert hex to rgb
  const hexToRgb = (hex) => {
    // Remove # if present
    const cleanHex = hex.replace('#', '');

    // Handle 3-digit hex codes
    if (cleanHex.length === 3) {
      const r = parseInt(cleanHex.substring(0, 1) + cleanHex.substring(0, 1), 16);
      const g = parseInt(cleanHex.substring(1, 2) + cleanHex.substring(1, 2), 16);
      const b = parseInt(cleanHex.substring(2, 3) + cleanHex.substring(2, 3), 16);
      return { r, g, b };
    }

    // Handle 6-digit hex codes
    if (cleanHex.length === 6) {
      const r = parseInt(cleanHex.substring(0, 2), 16);
      const g = parseInt(cleanHex.substring(2, 4), 16);
      const b = parseInt(cleanHex.substring(4, 6), 16);
      return { r, g, b };
    }

    // Default to fallback color if invalid
    return { r: 155, g: 108, b: 255 };
  };

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