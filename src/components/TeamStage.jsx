'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { TEAM_CARDS } from '../data.js';

// CSS-3D ring: its own chunk, client-only; the stage below reserves its height so nothing shifts while it loads.
const CircularCarousel = dynamic(() => import('./reactbits/CircularCarousel.jsx'), { ssr: false });

const FADE = '#0b0d18'; // --surface, so the far side of the ring dissolves into the section background

/** Card width follows the viewport so the ring never overflows on phones. */
function useCardWidth() {
  const [width, setWidth] = useState(250);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      setWidth(vw <= 520 ? 180 : vw <= 1050 ? 270 : 360);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return width;
}

/** 3D ring of team cards (React Bits CircularCarousel). Drag, arrow keys or click a card to bring it forward. */
export default function TeamStage() {
  const cardWidth = useCardWidth();

  return (
    <div className="team-stage" data-cursor="DRAG">
      <CircularCarousel
        items={TEAM_CARDS}
        preset="cylinder"
        cardWidth={cardWidth}
        aspectRatio={0.8}
        gap={18}
        cornerRadius={0}
        fadeColor={FADE}
        captions
        speed={7}
        ariaLabel="ITSA team"
      />
    </div>
  );
}
