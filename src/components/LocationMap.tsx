import { COMPANY, MAP_EMBED_URL } from '../config/constants';
import { Reveal } from './Reveal';

export function LocationMap() {
  return (
    <section
      id="location"
      className="scroll-mt-28 bg-ind-bg py-16 transition-colors duration-200 sm:py-20"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <header className="mb-8 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ind-primary-container">
              Visit us
            </span>
            <h2
              id="location-heading"
              className="mt-2 text-2xl font-bold uppercase tracking-wide text-ind-primary sm:text-3xl"
            >
              Find Us on the Map
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ind-on-surface/85">
              {COMPANY.address}
            </p>
          </header>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="group overflow-hidden rounded border border-white/10 shadow-none transition-all duration-350 hover:border-ind-outline/30">
            <iframe
              title="M.M. Engineering Works location on Google Maps"
              src={MAP_EMBED_URL}
              className="h-80 w-full transition-transform duration-500 group-hover:scale-[1.005] sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <p className="mt-6 text-center">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-white/20 bg-ind-surf-low px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-ind-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
            >
              Open in Google Maps
              <span aria-hidden="true">↗</span>
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
