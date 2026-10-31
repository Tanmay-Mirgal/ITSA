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
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!supportsWebGL2()) setWebgl(false);
  }, []);

  const items = useMemo(
    () =>
      GALLERY.map(({ tag, caption, image, src, alt, index }) => ({
        src: src || image,
        alt: alt || caption,
        title: caption,
        subtitle: tag,
        index,
      })),
    [],
  );

  // Keyboard Escape listener and body scroll lock for Lightbox
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImage(null);
    };

    if (activeImage) {
      window.addEventListener('keydown', onKeyDown);
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (document.body.dataset.prevPaddingRight === undefined) {
        document.body.dataset.prevPaddingRight = document.body.style.paddingRight || '';
        if (scrollbarWidth > 0) {
          document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        document.body.style.overflow = 'hidden';
      }
      return () => window.removeEventListener('keydown', onKeyDown);
    } else {
      if (document.body.dataset.prevPaddingRight !== undefined) {
        document.body.style.paddingRight = document.body.dataset.prevPaddingRight;
        delete document.body.dataset.prevPaddingRight;
        document.body.style.overflow = '';
      }
    }
  }, [activeImage]);

  return (
    <>
      {!webgl ? (
        <GalleryCollage onSelectImage={(img) => setActiveImage(img)} />
      ) : (
        <div className="gallery-stage" data-cursor="DRAG">
          <FlexCarousel
            items={items}
            preset="liquid"
            cardHeight={0.6}
            captureWheel={false}
            focusOnClick={true}
            onSelect={(index, item) => setActiveImage(item)}
            ariaLabel="ITSA photo gallery"
          />
        </div>
      )}

      {/* Lightbox / Expanded Image View */}
      {activeImage && (
        <div
          className="gallery-lightbox-backdrop"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt || activeImage.title || 'ITSA Gallery Image'}
        >
          <div className="gallery-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close image preview"
            >
              <span>✕</span>
              <span>ESC</span>
            </button>

            <div className="gallery-lightbox-media">
              <img
                src={activeImage.src || activeImage.image}
                alt={activeImage.alt || activeImage.title || 'ITSA Gallery Preview'}
                className="gallery-lightbox-image"
                loading="eager"
              />
            </div>

            <div className="gallery-lightbox-footer">
              <span className="lightbox-tag">
                {activeImage.subtitle || `ARCHIVE / ${activeImage.index || '01'}`}
              </span>
              <p className="lightbox-caption">
                {activeImage.title || activeImage.caption || 'ITSA Gallery Image'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
