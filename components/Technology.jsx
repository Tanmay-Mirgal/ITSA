import SectionHeader from './SectionHeader.jsx';
import TechBento from './TechBento.jsx';

export default function Technology() {
  return (
    <section className="technology section" id="technology">
      <SectionHeader
        meta="05 / TECHNOLOGY"
        title={
          <>
            THE ITSA
            <br />
            TECHNOLOGY
            <br />
            <em>CONSTELLATION.</em>
          </>
        }
      >
        Eight domains ITSA builds in, from a first program to cloud, security and what comes next.
      </SectionHeader>

      <TechBento />
    </section>
  );
}
