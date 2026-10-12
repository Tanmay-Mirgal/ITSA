import Image from 'next/image';
import SectionHeader from './SectionHeader.jsx';
import { IMAGES } from '../data.js';

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

      <div className="about-copy reveal">
        <p>
          ITSA is a student initiative of the Information Technology Department at VPPCOEVA&mdash;an active
          community for collaboration, learning, innovation and professional growth.
        </p>
        <p>
          Through workshops, competitions, industry exposure and shared experimentation, students turn academic
          curiosity into real-world capability.
        </p>
      </div>

      <div className="about-frame reveal-image">
        <Image
          src={IMAGES.collab}
          alt="Students collaborating around a laptop"
          fill
          sizes="(max-width: 720px) 100vw, 35vw"
        />
      </div>

      <div className="about-side" aria-hidden="true">
        STUDENT-LED
        <br />
        TECHNOLOGY-DRIVEN
        <br />
        BUILT IN MUMBAI
      </div>
    </section>
  );
}
