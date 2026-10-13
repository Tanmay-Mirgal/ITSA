import SectionHeader from './SectionHeader.jsx';
import GalleryStage from './GalleryStage.jsx';

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <SectionHeader
        meta="09 / GALLERY"
        title={
          <>
            THE MEMORY
            <br />
            <em>ARCHIVE.</em>
          </>
        }
      />

      <GalleryStage />

      <div className="image-credit">
        COMMUNITY IMAGERY SHOWN AS VISUAL DIRECTION · PHOTOGRAPHY VIA UNSPLASH · DRAG OR USE ARROW KEYS
      </div>
    </section>
  );
}
