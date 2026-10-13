'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Button from './Button.jsx';
import { LOCATION } from '../data.js';

// Decorative WebGL: their own chunks, client-only.
const Particles = dynamic(() => import('./reactbits/Particles.jsx'), { ssr: false });
const Globe = dynamic(() => import('./reactbits/Globe.jsx'), { ssr: false });

const PARTICLE_COLORS = ['#9b6cff', '#4cd8f8', '#f4f3f7'];

export default function Hero() {
  const [particleCount, setParticleCount] = useState(170);

  // Fewer particles (and fewer connecting lines) on phones.
  useEffect(() => {
    if (window.matchMedia('(max-width: 720px)').matches) setParticleCount(80);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-wash" />
      <div className="hero-particles" aria-hidden="true">
        <Particles
          particleCount={particleCount}
          particleColors={PARTICLE_COLORS}
          particleSpread={6.5}
          particleBaseSize={90}
          cameraDistance={22}
          speed={0.07}
          glow={0.6}
          twinkle={0.4}
          connections
          connectionDistance={150}
          hoverEffect="repel"
          hoverRadius={120}
          clickBurst={false}
          opacity={0.9}
        />
      </div>

      <div className="hero-globe-wrap" aria-hidden="true">
        <Globe
          primaryColor="#9b6cff"
          accentColor="#4cd8f8"
          pinkColor="#f472b6"
          atmosphereColor="#7144e8"
          autoRotateSpeed={0.85}
        />
        <div className="globe-coordinate">
          ITSA / GLOBAL NODE
          <br />
          {LOCATION.coordinates.join(' · ')}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span>{LOCATION.place}</span>
          <span>ITSA DIGITAL UNIVERSE / 2026</span>
        </div>

        <h1 aria-label="ITSA — Information Technology Student Association">
          <span className="sr-only">ITSA — </span>
          <span className="hero-line hero-line-1">Information</span>
          <span className="hero-line hero-line-2">
            <span className="hero-spacer" aria-hidden="true">I</span>Technology
          </span>
          <span className="hero-line hero-line-3">Student</span>
          <span className="hero-line hero-line-4">
            <span className="hero-spacer" aria-hidden="true">S</span>Association
          </span>
        </h1>

        <div className="hero-lower">
          <p>Where technology students collaborate, experiment, compete and create what&rsquo;s next.</p>
          <div>
            <Button href="#about" variant="primary">
              EXPLORE ITSA
            </Button>
            <Button href="#events">VIEW EVENTS</Button>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about">
        <span>SCROLL TO DISCOVER</span>
        <i />
      </a>
    </section>
  );
}
