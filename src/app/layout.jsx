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
  title: 'ITSA — Information Technology Student Association',
  description: 'ITSA — where VPPCOEVA technology students build, compete, create and connect.',
  openGraph: {
    title: 'ITSA — Information Technology Student Association',
    description: 'A student-led community of technology students at VPPCOEVA, Sion, Mumbai.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#070812',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
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
