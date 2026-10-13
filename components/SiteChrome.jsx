'use client';

import { useCallback, useEffect, useState } from 'react';
import { useScrolled } from '../hooks.js';
import Cursor from './Cursor.jsx';
import Navbar from './Navbar.jsx';
import MobileMenu from './MobileMenu.jsx';
import CommandPalette from './CommandPalette.jsx';

/** Skip link, grain, cursor, navbar and the two overlays: everything that holds interactive page-level state. */
export default function SiteChrome() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  // Cmd/Ctrl + K toggles the command palette.
  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Freeze the page behind an open overlay.
  useEffect(() => {
    document.body.style.overflow = menuOpen || paletteOpen ? 'hidden' : '';
  }, [menuOpen, paletteOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="noise" aria-hidden="true" />
      <Cursor />

      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        onOpenMenu={() => setMenuOpen(true)}
        onOpenCommand={() => setPaletteOpen(true)}
      />
      <MobileMenu open={menuOpen} onClose={closeMenu} />
      <CommandPalette open={paletteOpen} onClose={closePalette} />
    </>
  );
}
