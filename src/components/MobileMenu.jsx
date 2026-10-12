'use client';

import { useRef } from 'react';
import { MENU_LINKS, LOCATION } from '../data.js';
import { useOverlayKeys } from '../hooks.js';

export default function MobileMenu({ open, onClose }) {
  const ref = useRef(null);
  useOverlayKeys(open, onClose, ref);

  return (
    <div
      id="mobile-menu"
      ref={ref}
      className={`mobile-menu${open ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      inert={!open}
    >
      <div className="mobile-menu-top">
        <span>ITSA / 2026</span>
        <button type="button" onClick={onClose}>
          CLOSE ×
        </button>
      </div>

      <div className="mobile-links">
        {MENU_LINKS.map(({ id, label }, index) => (
          <a key={id} href={`#${id}`} style={{ '--delay': `${index * 55}ms` }} onClick={onClose}>
            <small>{String(index + 1).padStart(2, '0')}</small>
            <span>{label}</span>
            <span aria-hidden="true">→</span>
          </a>
        ))}
      </div>

      <p>{LOCATION.place}</p>
    </div>
  );
}
