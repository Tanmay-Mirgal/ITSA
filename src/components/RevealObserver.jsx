'use client';

import { useReveal } from '../hooks.js';

/** Renders nothing; reveals every `.reveal` / `.reveal-image` in the page as it scrolls into view. */
export default function RevealObserver() {
  useReveal();
  return null;
}
