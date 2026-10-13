import Image from 'next/image';
import SectionHeader from './SectionHeader.jsx';
import ScrollReveal from './reactbits/ScrollReveal.jsx';
import { IMAGES } from '../data.js';

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

      <div className="about-body">
        <figure className="about-frame reveal-image">
          <Image
            src={IMAGES.collab}
            alt="Students collaborating around a laptop"
            fill
            sizes="(max-width: 1050px) 100vw, 42vw"
          />
        </figure>

        <div className="about-copy reveal">
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
    </section>
  );
}
