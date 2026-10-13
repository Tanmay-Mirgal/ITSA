'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data.js';

export default function Navbar({ scrolled, menuOpen, onOpenMenu, onOpenCommand }) {
  // Server and first client render agree on "Ctrl K"; Apple devices switch to ⌘K after hydration.
  const [shortcut, setShortcut] = useState('Ctrl K');

  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.userAgent)) setShortcut('⌘K');
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' is-scrolled' : ''}`} aria-label="Primary">
      <a className="brand" href="#home" aria-label="ITSA home">
        <span className="brand-logo" aria-hidden="true">
          <img src="/itsa-mark.png" alt="ITSA logo" className="brand-logo-img" />
        </span>
        <span className="brand-text">ITSA</span>
      </a>

      <div className="nav-links">
        {NAV_LINKS.map(({ id, label }) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <button className="command-trigger" type="button" onClick={onOpenCommand} aria-haspopup="dialog">
          <span>COMMAND</span>
          <kbd>{shortcut}</kbd>
        </button>
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
