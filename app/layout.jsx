import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

// latin-ext carries the ₹ sign used in the Techgyanathon prize pool.
const display = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Manrope({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://itsa-xi.vercel.app'),
  title: {
    default: 'ITSA — Information Technology Student Association | VPPCOE&VA Mumbai',
    template: '%s | ITSA VPPCOE&VA',
  },
  description:
    "Official website of the Information Technology Student Association (ITSA) at Vasantdada Patil Pratishthan's College of Engineering and Visual Arts (VPPCOEVA), Sion, Mumbai. Discover Techgyanathon, workshops, coding challenges, hackathons, executive team roster, and tech initiatives.",
  keywords: [
    'ITSA',
    'ITSA VPPCOE',
    'ITSA VPPCOEVA',
    'ITSA Mumbai',
    'Information Technology Student Association',
    'Vasantdada Patil Pratishthan College of Engineering',
    'VPPCOEVA',
    'Techgyanathon',
    'Techgyanathon 2026',
    'Technical Festival Mumbai',
    'Engineering Student Body',
    'IT Engineering Mumbai',
    'Student Council VPPCOE',
    'Coding Hackathon Mumbai',
    'Technical Workshops Mumbai',
    'Web Development Club',
    'Artificial Intelligence Workshops',
    'Sion Engineering College',
  ],
  authors: [{ name: 'ITSA Technical Team', url: 'https://itsa-xi.vercel.app' }],
  creator: 'ITSA VPPCOEVA',
  publisher: 'Information Technology Student Association',
  applicationName: 'ITSA Official Portal',
  generator: 'Next.js',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://itsa-xi.vercel.app',
  },
  icons: {
    icon: [
      { url: '/itsa-mark.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    shortcut: '/itsa-mark.png',
    apple: [
      { url: '/itsa-mark.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'ITSA — Information Technology Student Association | VPPCOE&VA Mumbai',
    description:
      'Official student-led technology association of VPPCOEVA, Mumbai. Flagship events like Techgyanathon, hands-on workshops, student leadership roster, and innovation labs.',
    url: 'https://itsa-xi.vercel.app',
    siteName: 'ITSA — Information Technology Student Association',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/itsa-logo.png',
        width: 1200,
        height: 630,
        alt: 'ITSA — Information Technology Student Association, VPPCOEVA Mumbai',
        type: 'image/png',
      },
      {
        url: '/itsa-mark.png',
        width: 512,
        height: 512,
        alt: 'ITSA Official Emblem',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITSA — Information Technology Student Association | VPPCOE&VA Mumbai',
    description:
      'Official technology student association of VPPCOEVA, Mumbai. Explore Techgyanathon 2026, workshops, hackathons, and community.',
    images: ['/itsa-logo.png'],
    creator: '@itsa_vppcoe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'Education / Technology / Student Organization',
  verification: {
    google: 'google2b623abada48dbcf',
  },
};

export const viewport = {
  themeColor: '#070812',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': 'https://itsa-xi.vercel.app/#organization',
      name: 'Information Technology Student Association',
      alternateName: ['ITSA', 'ITSA VPPCOEVA', 'ITSA VPPCOE'],
      url: 'https://itsa-xi.vercel.app',
      logo: 'https://itsa-xi.vercel.app/itsa-logo.png',
      image: 'https://itsa-xi.vercel.app/itsa-mark.png',
      description:
        "Official student association of the Department of Information Technology at Vasantdada Patil Pratishthan's College of Engineering and Visual Arts, Sion, Mumbai.",
      parentOrganization: {
        '@type': 'CollegeOrUniversity',
        name: "Vasantdada Patil Pratishthan's College of Engineering and Visual Arts",
        url: 'https://pvppcoe.ac.in',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Eastern Express Highway, Near Everard Nagar, Chunabhatti',
          addressLocality: 'Sion, Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400022',
          addressCountry: 'IN',
        },
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sion, Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400022',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://instagram.com/itsa_vppcoe',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://itsa-xi.vercel.app/#website',
      url: 'https://itsa-xi.vercel.app',
      name: 'ITSA — Information Technology Student Association',
      description: 'Official website of ITSA at VPPCOEVA, Mumbai. Explore tech fests, workshops, coding competitions, and team.',
      publisher: {
        '@id': 'https://itsa-xi.vercel.app/#organization',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Event',
      '@id': 'https://itsa-xi.vercel.app/#event-techgyanathon',
      name: 'Techgyanathon 2026',
      description: 'Flagship annual technical festival hosted by ITSA VPPCOEVA featuring coding competitions, hackathons, robotics, project exhibitions, and workshops.',
      startDate: '2026-03-16T09:00:00+05:30',
      endDate: '2026-03-18T18:00:00+05:30',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'VPPCOEVA Campus Auditorium & Labs',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Eastern Express Highway, Near Everard Nagar, Chunabhatti',
          addressLocality: 'Sion, Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400022',
          addressCountry: 'IN',
        },
      },
      organizer: {
        '@id': 'https://itsa-xi.vercel.app/#organization',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Without JavaScript nothing would ever reveal, so show everything. */}
        <noscript>
          <style>{`.reveal,.reveal-image,.magic-bento__cell{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
