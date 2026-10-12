'use client';

import { useRef } from 'react';
import Button from './Button.jsx';
import { CORE_LABELS, LOCATION } from '../data.js';

export default function Hero() {
  const stageRef = useRef(null);

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

        <h1>
          <span>Information</span>
          <span>Technology</span>
          <span>Student</span>
          <span>Association</span>
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
