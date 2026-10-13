'use client';

import MagicBento from './reactbits/MagicBento.jsx';
import { TECH_NODES } from '../data.js';

const pad = (n) => String(n + 1).padStart(2, '0');

// Colours of the site, handed to MagicBento's own CSS variables (the component reads them from its root).
const THEME = {
  '--mb-surface': 'linear-gradient(180deg, #101426 0%, #0a0c18 100%)',
  '--mb-edge': 'rgba(255, 255, 255, 0.08)',
  '--mb-highlight': 'rgba(255, 255, 255, 0.04)',
  '--mb-shadow': 'none',
  '--mb-ink': '#f4f3f7',
  '--mb-muted': '#9b9dac',
  '--mb-spot-alpha': 0.14,
  '--mb-glow-alpha': 1,
  '--mb-pad': '1.4rem',
};

function Topic({ index, label, tags }) {
  return (
    <div className="tb-tile">
      <span className="tb-index">
        {pad(index)}
        <i aria-hidden="true" />
      </span>
      <div>
        <h3 className="tb-title">{label}</h3>
        <ul className="tb-tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Core() {
  return (
    <div className="tb-core">
      <span className="tb-ring tb-ring-a" aria-hidden="true" />
      <span className="tb-ring tb-ring-b" aria-hidden="true" />
      <div className="tb-orb">
        <span>ITSA</span>
        <small>KNOWLEDGE CORE</small>
      </div>
      <span className="tb-core-count">{TECH_NODES.length} DOMAINS</span>
    </div>
  );
}

// Order matters: MagicBento fills a 4-column grid row by row, so the core lands in the middle of rows 1 and 2
// with three topics either side and a full row of four underneath.
const ORDER = [0, 'core', 1, 2, 3, 4, 5, 6, 7];

/** The eight technology topics as a bento around the ITSA core (React Bits MagicBento). */
export default function TechBento() {
  const items = ORDER.map((slot) =>
    slot === 'core'
      ? { id: 'core', colSpan: 2, rowSpan: 2, content: <Core /> }
      : {
          id: TECH_NODES[slot].label,
          content: <Topic index={slot} label={TECH_NODES[slot].label} tags={TECH_NODES[slot].tags} />,
        },
  );

  return (
    <div className="tech-bento">
      <MagicBento
        items={items}
        columns={4}
        rowHeight={212}
        gap={10}
        radius={0}
        glowColor="#9b6cff"
        enableStars
        particleCount={18}
        enableTilt
        spotlightRadius={320}
        style={THEME}
      />
    </div>
  );
}
