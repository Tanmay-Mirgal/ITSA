import Image from 'next/image';
import SectionHeader from './SectionHeader.jsx';
import { GALLERY } from '../data.js';

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <SectionHeader
        meta="08 / GALLERY"
        title={
          <>
            THE MEMORY
            <br />
            <em>ARCHIVE.</em>
          </>
        }
      />

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

      <div className="image-credit">
        COMMUNITY IMAGERY SHOWN AS VISUAL DIRECTION · PHOTOGRAPHY VIA UNSPLASH
      </div>
    </section>
  );
}
