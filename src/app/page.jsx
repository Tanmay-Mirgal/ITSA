import SiteChrome from '@/components/SiteChrome';
import RevealObserver from '@/components/RevealObserver';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SystemStrip from '@/components/SystemStrip';
import Impact from '@/components/Impact';
import Featured from '@/components/Featured';
import EventsArchive from '@/components/EventsArchive';
import LiveNow from '@/components/LiveNow';
import Technology from '@/components/Technology';
import People from '@/components/People';
import Bodies from '@/components/Bodies';
import Gallery from '@/components/Gallery';
import Vision from '@/components/Vision';
import Identity from '@/components/Identity';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
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
        <Bodies />
        <Gallery />
        <Vision />
        <Identity />
        <Connect />
      </main>

      <Footer />
      <RevealObserver />
    </>
  );
}
