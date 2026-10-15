import SectionHeader from './SectionHeader.jsx';
import ScrollReveal from './reactbits/ScrollReveal.jsx';

const PRINCIPLES = ['Student-led', 'Technology-driven', 'Built in Mumbai'];

export default function About() {
  return (
    <section className="about section" id="about">
      <SectionHeader
        meta="01 / ABOUT"
        title={
          <>
            WE BUILD
            <br />
            THE PEOPLE
            <br />
            WHO BUILD
            <br />
            <em>TECHNOLOGY.</em>
          </>
        }
      />

      <div className="about-media">
        <div className="about-image-wrapper">
          <img
            src="https://res.cloudinary.com/dexndlfut/image/upload/v1792083126/7fb0a1e1-6313-41ca-8c30-fbfa63a48379.jpg"
            alt=""
            className="about-photo-ambient"
            aria-hidden="true"
          />
          <img
            src="https://res.cloudinary.com/dexndlfut/image/upload/v1792083126/7fb0a1e1-6313-41ca-8c30-fbfa63a48379.jpg"
            alt="ITSA community, faculty, and student organizers at VPPCOEVA Ideathon"
            className="about-photo"
            loading="eager"
            decoding="async"
          />
          <div className="about-scrim" aria-hidden="true" />
        </div>

        <div className="about-overlay">
          <div className="about-content">
            <ScrollReveal className="about-lead">
              ITSA is a student initiative of the Information Technology Department at VPPCOEVA—an active community
              for collaboration, learning, innovation and professional growth.
            </ScrollReveal>

            <div className="about-support">
              <p>
                Through workshops, competitions, industry exposure and shared experimentation, students turn academic
                curiosity into real-world capability.
              </p>

              <ul className="about-principles">
                {PRINCIPLES.map((principle, index) => (
                  <li key={principle}>
                    <small>{String(index + 1).padStart(2, '0')}</small>
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
