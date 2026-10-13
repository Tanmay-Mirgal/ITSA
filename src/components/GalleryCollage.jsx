import Image from 'next/image';
import { GALLERY } from '../data.js';

/** Static editorial collage: the fallback when WebGL2 is unavailable. */
export default function GalleryCollage() {
  return (
    <div className="gallery-grid">
      {GALLERY.map(({ tag, caption, image }, index) => (
        <figure key={tag} className={`gallery-item gallery-item-${index + 1} reveal-image`} data-cursor="VIEW">
          <Image src={image} alt={caption} fill sizes="(max-width: 720px) 84vw, 58vw" />
          <figcaption>
            <span>{tag}</span>
            <p>{caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
