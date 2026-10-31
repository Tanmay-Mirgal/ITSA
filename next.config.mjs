/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  experimental: {
    agentUpgrade: 'security',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Community photography is hotlinked from Unsplash for now (see data.js).
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
};

export default nextConfig;
