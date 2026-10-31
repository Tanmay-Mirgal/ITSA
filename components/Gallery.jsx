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
        OFFICIAL ITSA COMMUNITY ARCHIVE · DRAG OR USE ARROW KEYS TO EXPLORE
      </div>
    </section>
  );
}
