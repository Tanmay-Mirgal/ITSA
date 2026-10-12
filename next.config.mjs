/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Community photography is hotlinked from Unsplash for now (see src/data.js).
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
