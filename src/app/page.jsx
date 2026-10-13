import SiteChrome from '@/components/SiteChrome';
import RevealObserver from '@/components/RevealObserver';
import ClickSpark from '@/components/reactbits/ClickSpark';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SystemStrip from '@/components/SystemStrip';
import Impact from '@/components/Impact';
import Featured from '@/components/Featured';
import EventsArchive from '@/components/EventsArchive';
import LiveNow from '@/components/LiveNow';
import Technology from '@/components/Technology';
import People from '@/components/People';
import Team from '@/components/Team';
import Bodies from '@/components/Bodies';
import Gallery from '@/components/Gallery';
import Vision from '@/components/Vision';
import Identity from '@/components/Identity';
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
          <SystemStrip />
          <Impact />
          <Featured />
          <EventsArchive />
          <LiveNow />
          <Technology />
          <People />
          <Team />
          <Bodies />
          <Gallery />
          <Vision />
          <Identity />
          <Connect />
        </main>

        <Footer />
      </ClickSpark>
      <RevealObserver />
    </>
  );
}
