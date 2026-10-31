'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import MetaLabel from './MetaLabel.jsx';
import Button from './Button.jsx';
import { CONTACT } from '../data.js';
import '../styles/ideathon.css';

/**
 * IdeathonFeatured
 * Cinematic primary featured event section for ITSA IDEATHON.
 * "FROM IDEA → SIGNAL → IMPACT"
 * Positioned above Tech Gyanathon as Chapter 01 of the ITSA digital flagship universe.
 */
export default function IdeathonFeatured() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Smooth springs for scroll-linked camera movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  // Entrance & Exit opacity / scale
  const opacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.8, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [0.15, 1, 1, 0.35]
  );

  const scale = useTransform(
    smoothProgress,
    [0, 0.35, 0.8, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [0.96, 1, 1, 0.98]
  );

  // Scroll parallax for headline layers
  const yHeadline1 = useTransform(
    smoothProgress,
    [0, 0.35, 0.75, 1],
    shouldReduceMotion ? [0, 0, 0, 0] : [48, 0, -12, -45]
  );

  const yHeadline2 = useTransform(
    smoothProgress,
    [0, 0.35, 0.75, 1],
    shouldReduceMotion ? [0, 0, 0, 0] : [72, 0, -6, -30]
  );

  // Idea Matrix 3D drift
  const visualY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [45, 0, -55]
  );

  const visualRotate = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [-8, 0, 10]
  );

  const matrixScale = useTransform(
    smoothProgress,
    [0, 0.4, 0.85, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [0.9, 1, 1, 1.05]
  );

  const telemetryOpacity = useTransform(
    smoothProgress,
    [0, 0.25, 0.8, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [0, 1, 1, 0.4]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="ideathon-section section"
      id="events"
      style={{ opacity, scale }}
    >
      {/* Background ambient lighting */}
      <div className="ideathon-ambient-glow" aria-hidden="true" />
      <div className="ideathon-grid-lines" aria-hidden="true" />

      {/* Top Metadata Strip */}
      <div className="ideathon-top">
        <span>
          <MetaLabel>03 / FEATURED EVENT</MetaLabel>
        </span>
        <span className="ideathon-phase-tag">
          <span className="ideathon-live-dot" />
          ANNUAL INNOVATION SPRINT
        </span>
        <span>VPPCOE · MUMBAI</span>
      </div>

      {/* Centerpiece 3D Idea Matrix / Constellation Visual */}
      <motion.div
        className="ideathon-matrix-object"
        aria-hidden="true"
        style={{
          y: visualY,
          rotateZ: visualRotate,
          scale: matrixScale,
        }}
      >
        {/* Core Luminous Idea Node */}
        <div className="ideathon-core-beacon">
          <div className="beacon-inner-glow" />
          <div className="beacon-radar radar-1" />
          <div className="beacon-radar radar-2" />
          <div className="beacon-radar radar-3" />
        </div>

        {/* Orbiting Telemetry Nodes */}
        <div className="ideathon-satellites">
          <div className="ideathon-sat sat-1">
            <span className="sat-dot" />
            <span className="sat-label">01 / IDEA</span>
          </div>
          <div className="ideathon-sat sat-2">
            <span className="sat-dot" />
            <span className="sat-label">02 / SIGNAL</span>
          </div>
          <div className="ideathon-sat sat-3">
            <span className="sat-dot" />
            <span className="sat-label">03 / PROTOTYPE</span>
          </div>
          <div className="ideathon-sat sat-4">
            <span className="sat-dot" />
            <span className="sat-label">04 / IMPACT</span>
          </div>
        </div>

        {/* SVG Laser Constellation Lattice */}
        <svg className="ideathon-svg-lattice" viewBox="0 0 500 500" fill="none">
          {/* Signal Connection Lines */}
          <line x1="250" y1="250" x2="250" y2="70" className="lattice-line line-pulse-1" />
          <line x1="250" y1="250" x2="430" y2="250" className="lattice-line line-pulse-2" />
          <line x1="250" y1="250" x2="250" y2="430" className="lattice-line line-pulse-3" />
          <line x1="250" y1="250" x2="70" y2="250" className="lattice-line line-pulse-4" />
          <polygon points="250,70 430,250 250,430 70,250" className="lattice-polygon" />
          {/* Dynamic Signal Rings */}
          <circle cx="250" cy="250" r="90" className="lattice-ring" />
          <circle cx="250" cy="250" r="150" className="lattice-ring-outer" />
        </svg>

        {/* Floating Telemetry Badge */}
        <div className="ideathon-badge">
          <span>24H SPRINT</span>
        </div>
      </motion.div>

      {/* Oversized Editorial Typography */}
      <h2 aria-label="Ideathon" className="ideathon-headline">
        <motion.span className="ideathon-line line-idea" style={{ y: yHeadline1 }}>
          IDEA
        </motion.span>
        <motion.span className="ideathon-line line-thon" style={{ y: yHeadline2 }}>
          <span className="stroke-char">TH</span>
          <span className="solid-char">ON</span>
        </motion.span>
      </h2>

      {/* Editorial Footer Strip */}
      <motion.div className="ideathon-footer" style={{ opacity: telemetryOpacity }}>
        <div className="ideathon-thesis">
          <div className="ideathon-kicker-tag">CONCEPT PROTOCOL / 2026</div>
          <p>
            From Idea &rarr; Signal &rarr; Impact. An intensive innovation sprint where engineering curiosity meets
            rapid prototype deployment.
          </p>
        </div>

        {/* Key Metrics / Pillars */}
        <div className="ideathon-facts">
          <div>
            <strong>
              ₹50<small>K</small>
            </strong>
            <span>PRIZE POOL</span>
          </div>
          <div>
            <strong>
              1300<small>+</small>
            </strong>
            <span>PARTICIPANTS</span>
          </div>
          <div>
            <strong>
              24<small>H</small>
            </strong>
            <span>HACK &amp; PITCH</span>
          </div>
          <div>
            <strong>01</strong>
            <span>CAMPUS TROPHY</span>
          </div>
        </div>

        {/* Sophisticated CTA with Micro-interactions */}
        <motion.div
          className="ideathon-cta-wrap"
          whileHover={{ x: 3 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        >
          <Button href={`https://unstop.com/hackathons/ideathon-spark-before-the-code-vasantdada-patil-pratishthans-college-of-engineering-and-visual-arts-mumbai-ma-1718428`}>
            EXPLORE IDEATHON
          </Button>
        </motion.div>
      </motion.div>

      {/* Cinematic Transition Seam into Tech Gyanathon */}
      <div className="ideathon-seam-bottom" aria-hidden="true" />
    </motion.section>
  );
}
