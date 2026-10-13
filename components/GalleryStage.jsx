'use client';

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import GalleryCollage from './GalleryCollage.jsx';
import { GALLERY } from '../data.js';

// WebGL carousel: its own chunk, client-only; the stage below reserves its height so nothing shifts while it loads.
const FlexCarousel = dynamic(() => import('./reactbits/FlexCarousel.jsx'), { ssr: false });

function supportsWebGL2() {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2');
  if (!gl) return false;
  gl.getExtension('WEBGL_lose_context')?.loseContext();
  return true;
}

/** Liquid-glass image row (React Bits FlexCarousel) with the static collage as fallback. */
export default function GalleryStage() {
  // Optimistic: reserve the carousel's space on the first render, fall back to the collage after mount if needed.
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    if (!supportsWebGL2()) setWebgl(false);
  }, []);

  const items = useMemo(
    () => GALLERY.map(({ tag, caption, image }) => ({ src: image, alt: caption, title: caption, subtitle: tag })),
    [],
  );

  if (!webgl) return <GalleryCollage />;

  return (
    <div className="gallery-stage" data-cursor="DRAG">
      <FlexCarousel
        items={items}
        preset="liquid"
        cardHeight={0.6}
        captureWheel={false}
        ariaLabel="ITSA photo gallery"
      />
    </div>
  );
}
