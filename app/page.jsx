import SiteChrome from '@/components/SiteChrome';
import RevealObserver from '@/components/RevealObserver';
import ClickSpark from '@/components/reactbits/ClickSpark';
import BlinkingDots from '@/components/ui/blinking-dots';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Featured from '@/components/Featured';
import EventsArchive from '@/components/EventsArchive';
import LiveNow from '@/components/LiveNow';
import Team from '@/components/Team';
import Bodies from '@/components/Bodies';
import Gallery from '@/components/Gallery';
import Vision from '@/components/Vision';
import FAQ from '@/components/FAQ';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <ClickSpark sparkColor="#9b6cff" sparkCount={8} sparkRadius={26} sparkSize={12} sparkWidth={2} duration={500} glow={0.4}>
        <SiteChrome />

        <div className="relative min-h-[calc(100vh-var(--nav-height-scrolled))]">
          <BlinkingDots
            className="absolute inset-0 pointer-events-none"
            dotCount={180}
            dotSize={1.5}
            blinkSpeed={2}
            opacity={0.12}
            color="#9b6cff"
          />

          <main id="main" className="relative z-10">
            <Hero />
            <About />
            <Featured />
            <EventsArchive />
            <LiveNow />
            <Team />
            <Bodies />
            <Gallery />
            <Vision />
            <FAQ />
            <Connect />
          </main>
        </div>

        <Footer />
      </ClickSpark>
      <RevealObserver />
    </>
  );
}