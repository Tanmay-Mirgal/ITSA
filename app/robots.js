export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'bingbot',
        allow: '/',
      },
    ],
    sitemap: 'https://itsa-xi.vercel.app/sitemap.xml',
    host: 'https://itsa-xi.vercel.app',
  };
}
