export default function manifest() {
  return {
    name: 'ITSA — Information Technology Student Association',
    short_name: 'ITSA VPPCOEVA',
    description: 'Official student association of Information Technology Department at VPPCOEVA, Mumbai. Discover Techgyanathon, workshops, team leadership, and student initiatives.',
    start_url: '/',
    display: 'standalone',
    background_color: '#06070d',
    theme_color: '#070812',
    icons: [
      {
        src: '/itsa-mark.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  };
}
