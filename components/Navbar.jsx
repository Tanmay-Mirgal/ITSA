'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data.js';
import ITSAHeaderWordmark from './ITSAHeaderWordmark.jsx';

export default function Navbar({ scrolled, menuOpen, onOpenMenu, onOpenCommand }) {
  // Server and first client render agree on "Ctrl K"; Apple devices switch to ⌘K after hydration.
  const [shortcut, setShortcut] = useState('Ctrl K');

  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.userAgent)) setShortcut('⌘K');
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' is-scrolled' : ''}`} aria-label="Primary">
      <a className="brand" href="#home" aria-label="ITSA home">
        <img
          src="https://res.cloudinary.com/dexndlfut/image/upload/v1793464261/2a56216f-fb41-479f-8b8c-1d900ebe7f.jpg"
          alt="ITSA emblem"
          className="brand-logo-img"
          width={34}
          height={34}
          loading="eager"
          decoding="async"
        />
        <ITSAHeaderWordmark />
      </a>

      <div className="nav-links">
        {NAV_LINKS.map(({ id, label }) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </div>

      <div className="nav-actions">

        <a className="button button-line" href="#connect" data-cursor="GO">
          <span>CONNECT</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <button
        className="menu-trigger"
        type="button"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={onOpenMenu}
      >
        <i />
        <i />
      </button>
    </nav>
  );
}
