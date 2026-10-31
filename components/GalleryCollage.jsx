'use client';

import Image from 'next/image';
import { GALLERY } from '../data.js';

/** Static editorial collage: the fallback when WebGL2 is unavailable. */
export default function GalleryCollage({ onSelectImage }) {
  return (
    <div className="gallery-grid">
      {GALLERY.map((item, index) => {
        const { tag, caption, image, src, alt } = item;
        return (
          <figure
            key={tag || index}
            className={`gallery-item gallery-item-${index + 1} reveal-image`}
            data-cursor="VIEW"
            onClick={() => onSelectImage?.(item)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectImage?.(item);
              }
            }}
            aria-label={`View ${caption || alt || `ITSA Gallery Image ${index + 1}`}`}
          >
            <Image
              src={src || image}
              alt={alt || caption || `ITSA Gallery Image ${index + 1}`}
              fill
              sizes="(max-width: 720px) 84vw, 58vw"
              loading={index < 2 ? 'eager' : 'lazy'}
              quality={85}
            />
            <figcaption>
              <span>{tag}</span>
              <p>{caption}</p>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
