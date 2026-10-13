'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Button from './Button.jsx';
import TechHost from './TechHost.jsx';
import { CORE_LABELS, LOCATION } from '../data.js';

// Decorative WebGL: its own chunk, client-only, so it never blocks the headline.
const Particles = dynamic(() => import('./reactbits/Particles.jsx'), { ssr: false });

const PARTICLE_COLORS = ['#9b6cff', '#4cd8f8', '#f4f3f7'];

export default function Hero() {
  const stageRef = useRef(null);
  const [particleCount, setParticleCount] = useState(170);

  // Fewer particles (and fewer connecting lines) on phones.
  useEffect(() => {
    if (window.matchMedia('(max-width: 720px)').matches) setParticleCount(80);
  }, []);

  // Nudges the core orb a few pixels toward the pointer.
  const onPointerMove = (event) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    stage.style.setProperty('--x', x.toFixed(3));
    stage.style.setProperty('--y', y.toFixed(3));
  };

  return (
    <section className="hero" id="home" onMouseMove={onPointerMove}>
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

      <div ref={stageRef} className="core-stage" aria-hidden="true">
        <div className="core-aura" />
        <div className="core-ring ring-a">
          <i />
          <i />
        </div>
        <div className="core-ring ring-b">
          <i />
          <i />
          <i />
        </div>
        <div className="core-shell">
          <div className="core-inner">I</div>
        </div>
        {CORE_LABELS.map((label, index) => (
          <span key={label} className={`core-label core-label-${index + 1}`}>
            {label}
          </span>
        ))}
        <div className="core-coordinate">
          CORE / ONLINE
          <br />
          {LOCATION.coordinates.join(' · ')}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span>{LOCATION.place}</span>
          <span>ITSA DIGITAL UNIVERSE / 2026</span>
        </div>

        {/* Real text stays in the h1; TechHost draws it again with React Bits TechText once the intro has played. */}
        <TechHost as="h1" delay={1700} accent="#4cd8f8">
          <span data-tech-line>Information</span>
          <span data-tech-line>Technology</span>
          <span data-tech-line data-tech-hollow data-tech-color="#f4f3f7">
            Student
          </span>
          <span data-tech-line>Association</span>
        </TechHost>

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
