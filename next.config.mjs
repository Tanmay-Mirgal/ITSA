/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Community photography is hotlinked from Unsplash for now (see data.js).
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
};

export default nextConfig;
