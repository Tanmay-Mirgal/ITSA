'use client';

import { useRef } from 'react';
import { COMMAND_LINKS } from '../data.js';
import { useOverlayKeys } from '../hooks.js';

export default function CommandPalette({ open, onClose }) {
  const ref = useRef(null);
  useOverlayKeys(open, onClose, ref);

  return (
    <div
      className={`command-palette${open ? ' is-open' : ''}`}
      inert={!open}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div ref={ref} className="command-window" role="dialog" aria-modal="true" aria-label="Jump to a section">
        <div className="command-head">
          <span>ITSA / COMMAND</span>
          <button type="button" onClick={onClose} aria-label="Close command palette">
            ESC
          </button>
        </div>

        <p>WHAT ARE YOU LOOKING FOR?</p>

        <div>
          {COMMAND_LINKS.map(({ id, label }, index) => (
            <a key={id} href={`#${id}`} onClick={onClose}>
              <small>{String(index + 1).padStart(2, '0')}</small>
              <span>{label}</span>
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
