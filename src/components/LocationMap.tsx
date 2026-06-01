import { COMPANY, MAP_EMBED_URL } from '../config/constants';
import { Reveal } from './Reveal';

export function LocationMap() {
  return (
    <section
      id="location"
      className="scroll-mt-28 bg-white py-16 transition-colors duration-300 dark:bg-slate-900 sm:py-20"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <header className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-mew-orange">
              Visit us
            </span>
            <h2
              id="location-heading"
              className="mt-2 text-2xl font-bold text-mew-blue transition-colors dark:text-blue-400 sm:text-3xl"
            >
              Find Us on the Map
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-mew-blue transition-colors dark:text-blue-300">
              {COMPANY.address}
            </p>
          </header>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="group overflow-hidden rounded-2xl border-2 border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-mew-blue/40 hover:shadow-[0_12px_40px_rgba(0,112,187,0.15)] dark:border-slate-800 dark:shadow-[0_4px_24px_rgba(0,0,0,0.25)] dark:hover:border-mew-blue/40 dark:hover:shadow-[0_12px_40px_rgba(0,112,187,0.3)]">
            <iframe
              title="M.M. Engineering Works location on Google Maps"
              src={MAP_EMBED_URL}
              className="h-80 w-full transition-transform duration-500 group-hover:scale-[1.01] sm:h-96"
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
              className="inline-flex items-center gap-2 rounded-full border border-mew-blue/30 bg-mew-blue/5 px-5 py-2 text-sm font-semibold text-mew-blue transition-all duration-300 hover:-translate-y-0.5 hover:border-mew-blue hover:bg-mew-blue hover:text-white dark:border-mew-blue/40 dark:bg-mew-blue/10 dark:text-blue-400 dark:hover:bg-mew-blue dark:hover:text-white"
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
