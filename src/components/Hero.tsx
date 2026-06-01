import { COMPANY, SERVICES } from '../config/constants';
import { MewLogo } from './MewLogo';
import { ServiceMarquee } from './ServiceMarquee';
import { WhatsAppButton } from './WhatsAppButton';

const HIGHLIGHTS = [
  'Custom fabrication',
  'On-site installation',
  'Commercial & industrial',
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="hero-mesh relative min-h-[min(520px,85vh)] overflow-hidden border-b border-slate-200 transition-colors duration-300 dark:border-slate-800"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mew-orange/10 blur-3xl dark:bg-mew-orange/5"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-mew-blue/10 blur-3xl dark:bg-mew-blue/5"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_340px] lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-mew-blue/20 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-mew-blue shadow-sm dark:border-mew-blue/30 dark:bg-slate-900/90 dark:text-blue-400">
              <span className="h-2 w-2 rounded-full bg-mew-orange" />
              Est. fabricators · Bangalore
            </p>

            <h1
              id="hero-heading"
              className="mt-4 text-3xl font-extrabold leading-tight text-mew-orange sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              {COMPANY.name}
            </h1>

            <p className="mt-2 text-lg font-semibold text-mew-blue dark:text-blue-400">
              Quality metalwork for every project
            </p>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 lg:mx-0">
              Manufacturers of trusses, rolling shutters, gates, window grills, doors,
              sheet metal works, and aluminum partitions — built to spec and delivered
              across Bangalore.
            </p>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-350">
              <span className="font-semibold text-mew-blue dark:text-blue-400">Proprietor:</span>{' '}
              {COMPANY.proprietor}
            </p>

            <ul className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-mew-blue shadow-sm ring-1 ring-mew-blue/15 dark:bg-slate-900/90 dark:text-blue-300 dark:ring-mew-blue/30"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <WhatsAppButton>Contact Us</WhatsAppButton>
              <a
                href={COMPANY.phoneTel}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-mew-blue px-5 py-2.5 text-sm font-semibold text-mew-blue transition-all duration-300 hover:bg-mew-blue hover:text-white dark:border-mew-blue dark:text-blue-400 dark:hover:bg-mew-blue dark:hover:text-white sm:w-auto"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>

          <aside
            className="mx-auto w-full max-w-sm rounded-2xl border border-white/80 bg-white/90 p-6 shadow-[0_8px_32px_rgba(0,112,187,0.12)] backdrop-blur-sm transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-900/85 dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] lg:mx-0 lg:max-w-none"
            aria-label="Company overview"
          >
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4 dark:border-slate-800">
              <MewLogo className="h-20 w-20 shrink-0" animated />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-mew-orange">
                  {COMPANY.shortName}
                </p>
                <p className="text-sm font-semibold text-mew-blue dark:text-blue-400">Since Bangalore</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Trusted local fabricators</p>
              </div>
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-450">
              We specialize in
            </p>
            <ul className="mt-2 space-y-2">
              {SERVICES.slice(0, 4).map((service) => (
                <li
                  key={service.id}
                  className="flex items-center gap-2 text-sm font-medium text-mew-blue dark:text-blue-300"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mew-orange" />
                  {service.title}
                </li>
              ))}
              <li className="text-sm font-medium text-mew-orange">
                + {SERVICES.length - 4} more services below
              </li>
            </ul>

            <a
              href="#services"
              className="mt-5 flex w-full items-center justify-center rounded-lg bg-mew-blue/10 py-2.5 text-sm font-semibold text-mew-blue transition-colors hover:bg-mew-blue hover:text-white dark:bg-mew-blue/20 dark:text-blue-300 dark:hover:bg-mew-blue dark:hover:text-white"
            >
              View all services ↓
            </a>
          </aside>
        </div>

        <ServiceMarquee />

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-mew-blue dark:text-blue-400 sm:text-base">
          <svg
            className="h-4 w-4 shrink-0 text-mew-orange"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {COMPANY.address}
        </p>
      </div>
    </section>
  );
}
