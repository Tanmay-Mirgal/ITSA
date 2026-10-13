import SiteChrome from '@/components/SiteChrome';
import RevealObserver from '@/components/RevealObserver';
import ClickSpark from '@/components/reactbits/ClickSpark';
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

        <main id="main">
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

        <Footer />
      </ClickSpark>
      <RevealObserver />
    </>
  );
}
