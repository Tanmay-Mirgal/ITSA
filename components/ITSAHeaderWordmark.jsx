'use client';

import { useEffect, useState } from 'react';
import TechText from './reactbits/TechText.jsx';

/**
 * ITSAHeaderWordmark
 * Compact, interactive, technical wordmark for the ITSA navbar.
 * Renders the React Bits TechText canvas with continuous technical scanning
 * and independent per-letter inspection/expansion on hover.
 */
export default function ITSAHeaderWordmark({ className = '' }) {
  const [config, setConfig] = useState({
    reach: 70,
    specks: 6,
    speed: 0.8
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 720) {
        // Mobile: compact, reduced intensity
        setConfig({
          reach: 45,
          specks: 3,
          speed: 0.65
        });
      } else if (width <= 1050) {
        // Tablet: slightly reduced reach and specks
        setConfig({
          reach: 55,
          specks: 4,
          speed: 0.75
        });
      } else {
        // Desktop: full fidelity
        setConfig({
          reach: 70,
          specks: 6,
          speed: 0.8
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`itsa-header-wordmark ${className}`.trim()}>
      <TechText
        text="ITSA"
        fontWeight={600}
        fontSize={64}
        letterSpacing={-0.05}
        color="#FFFFFF"
        accentColor="#A855F7"
        reveal="letter"
        reach={config.reach}
        softness={0.7}
        dashLength={3}
        dashGap={2}
        strokeWidth={1.2}
        specks={config.specks}
        selection={true}
        labels={false}
        draggable={false}
        sweep={true}
        speed={config.speed}
      />
    </div>
  );
}
