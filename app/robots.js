export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://itsa-xi.vercel.app/sitemap.xml',
    host: 'https://itsa-xi.vercel.app',
  };
}
