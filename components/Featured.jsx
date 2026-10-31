'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion, useMotionValue } from 'framer-motion';
import Button from './Button.jsx';
import MetaLabel from './MetaLabel.jsx';
import CountUp from './reactbits/CountUp.jsx';
import DecryptedText from './reactbits/DecryptedText.jsx';
import { CONTACT, FEATURED_FACTS } from '../data.js';
import '../styles/featured.css';

// Deterministic atmospheric particles around the event visual (zero hydration mismatch)
const PARTICLES = [
  { id: 1, top: '18%', left: '22%', size: 2.5, duration: 14, delay: 0 },
  { id: 2, top: '26%', left: '76%', size: 1.8, duration: 18, delay: 2.5 },
  { id: 3, top: '46%', left: '14%', size: 3, duration: 20, delay: 5 },
  { id: 4, top: '64%', left: '84%', size: 2, duration: 16, delay: 1.2 },
  { id: 5, top: '78%', left: '36%', size: 2.2, duration: 22, delay: 7 },
  { id: 6, top: '14%', left: '58%', size: 1.5, duration: 15, delay: 3.8 },
  { id: 7, top: '34%', left: '44%', size: 2.8, duration: 19, delay: 6.2 },
  { id: 8, top: '68%', left: '60%', size: 1.8, duration: 17, delay: 4.1 },
  { id: 9, top: '82%', left: '72%', size: 2.4, duration: 21, delay: 8.5 },
  { id: 10, top: '30%', left: '26%', size: 2, duration: 16, delay: 9.3 },
  { id: 11, top: '52%', left: '86%', size: 1.6, duration: 18, delay: 11 },
  { id: 12, top: '38%', left: '90%', size: 2.2, duration: 15, delay: 0.8 },
];

/**
 * Featured: TECH GYANATHON
 * Living, breathing cinematic featured-event exhibition.
 * Continuous orbital movement, core energy pulses, dynamic lighting,
 * and subtle pointer/scroll depth while preserving exact design fidelity.
 */
export default function Featured() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress across section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  // Section atmospheric entrance and exit depth
  const sectionOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.82, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [0.35, 1, 1, 0.45]
  );

  const sectionScale = useTransform(
    smoothProgress,
    [0, 0.35, 0.8, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [0.97, 1, 1, 0.985]
  );

  // Object vertical drift through scroll
  const visualScrollY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [35, 0, -45]
  );

  const visualScale = useTransform(
    smoothProgress,
    [0, 0.4, 0.8, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [0.95, 1, 1, 1.02]
  );

  // Typography micro-motion with optical depth between solid and outline layers
  const ySolid1 = useTransform(smoothProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [10, 0, -8]);
  const yOutline = useTransform(smoothProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [22, 0, -16]);
  const ySolid2 = useTransform(smoothProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [12, 0, -10]);

  // Mouse / Pointer Parallax Springs (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const objectParallaxX = useTransform(springX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-5, 5]);
  const objectParallaxY = useTransform(springY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-4, 4]);
  const outlineParallaxX = useTransform(springX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-3, 3]);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.section
      ref={sectionRef}
      className="featured section"
      id="techgyanathon"
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient Atmospheric Violet Aura */}
      <div className="gyanathon-ambient-aura" aria-hidden="true" />

      {/* Atmospheric Micro-Particles */}
      <div className="feature-particles-wrap" aria-hidden="true">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="gyanathon-drift-particle"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              '--p-duration': `${p.duration}s`,
              '--p-delay': `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="feature-top">
        <span className="feature-top-meta">
          <MetaLabel>04 / FEATURED EVENT</MetaLabel>
          <span className="live-signal-badge" aria-label="System Active">
            <span className="signal-dot-wrap">
              <span className="signal-core-dot" />
              <span className="signal-ring" />
            </span>
            <span className="signal-text">SYS·ACTIVE</span>
          </span>
        </span>
        <span>16—18 MARCH 2026</span>
        <span>VPPCOE · MUMBAI</span>
      </div>

      {/* Living 3D Tech Core */}
      <motion.div
        className="feature-object"
        aria-hidden="true"
        style={{
          y: visualScrollY,
          scale: visualScale,
          x: objectParallaxX,
        }}
      >
        <motion.div className="feature-object-inner" style={{ y: objectParallaxY }}>
          {/* Breathing Expanding Energy Pulses */}
          <div className="event-pulse-aura" />
          <div className="event-pulse-aura pulse-2" />

          {/* Core Sphere with Dynamic Shifting Light */}
          <div className="event-sphere">
            <div className="sphere-light-sheen" />
            <div className="sphere-specular-dot" />
          </div>

          {/* Multiaxial Living Orbital System */}
          <div className="event-disc disc-a">
            <span className="orbital-node node-a" />
          </div>
          <div className="event-disc disc-b">
            <span className="orbital-node node-b" />
          </div>
          <div className="event-disc disc-c" />

          {/* Telemetry Indicator */}
          <div className="event-tag-badge">
            <span className="tag-pulse" />
            <span>03 DAYS</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Layered Typography with Depth Parallax */}
      <h2 aria-label="Techgyanathon">
        <motion.span style={{ y: ySolid1 }} aria-hidden="true">
          TECH
        </motion.span>
        <motion.span
          style={{ y: yOutline, x: outlineParallaxX }}
          aria-hidden="true"
          className="headline-outline"
        >
          GYANA
        </motion.span>
        <motion.span style={{ y: ySolid2 }} aria-hidden="true">
          THON
        </motion.span>
      </h2>

      <div className="feature-footer">
        <p className="feature-thesis">
          <DecryptedText
            text={'A technical autopsy\nin three acts.'}
            animateOn="view"
            sequential
            speed={32}
            encryptedClassName="decrypt-scramble"
          />
        </p>

        {/* Staggered Entrance for Event Metric Nodes */}
        <div className="feature-facts">
          {FEATURED_FACTS.map(({ prefix, to, suffix, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.12 + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <strong>
                {prefix}
                <CountUp to={to} duration={1.6} />
                {suffix}
              </strong>
              <span>{label}</span>
            </motion.div>
          ))}
        </div>

        <Button href={`mailto:${CONTACT.email}`}>EXPLORE EVENT</Button>
      </div>
    </motion.section>
  );
}
