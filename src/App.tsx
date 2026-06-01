import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LocationMap } from './components/LocationMap';
import { Services } from './components/Services';
import { StatsStrip } from './components/StatsStrip';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-mew-blue focus:shadow"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <StatsStrip />
        <Services />
        <Contact />
        <LocationMap />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
