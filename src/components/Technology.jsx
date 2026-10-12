'use client';

import SectionHeader from './SectionHeader.jsx';
import { TECH_NODES } from '../data.js';
import { useSelection } from '../hooks.js';

const pad = (n) => String(n + 1).padStart(2, '0');

export default function Technology() {
  const [active, bind] = useSelection(0);
  const current = TECH_NODES[active];

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
      />

      <div className="constellation">
        <div className="constellation-grid" />
        <div className="constellation-core">
          <span>ITSA</span>
          <small>KNOWLEDGE CORE</small>
        </div>

        <svg viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
          <path d="M500 350 L155 125 M500 350 L420 70 M500 350 L780 110 M500 350 L880 350 M500 350 L750 610 M500 350 L430 640 M500 350 L140 510 M500 350 L110 330" />
        </svg>

        {TECH_NODES.map((node, index) => (
          <button
            key={node.label}
            type="button"
            className={`tech-node node-${index + 1}${index === active ? ' active' : ''}`}
            data-cursor="DISCOVER"
            aria-pressed={index === active}
            {...bind(index)}
          >
            <small>{pad(index)}</small>
            <span>{node.label}</span>
          </button>
        ))}

        <div className="tech-detail" aria-live="polite">
          <span>SELECTED / {pad(active)}</span>
          <h3>{current.label}</h3>
          <div>
            {current.tags.map((tag) => (
              <b key={tag}>{tag}</b>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
