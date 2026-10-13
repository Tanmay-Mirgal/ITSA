'use client';

import dynamic from 'next/dynamic';

// Decorative WebGL: its own chunk, client-only.
const Aurora = dynamic(() => import('./reactbits/Aurora.jsx'), { ssr: false });

export default function AuroraBackdrop(props) {
  return <Aurora {...props} />;
}
