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
      className="hero-mesh relative min-h-[min(520px,85vh)] overflow-hidden border-b border-white/10 transition-colors duration-200"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_340px] lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded border border-white/10 bg-ind-surf px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ind-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-ind-primary-container" />
              Est. fabricators · Bangalore
            </p>

            <h1
              id="hero-heading"
              className="mt-4 font-sans text-3xl font-bold leading-tight text-ind-primary-container sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              {COMPANY.name}
            </h1>

            <p className="mt-2 text-lg font-semibold text-ind-primary">
              Quality metalwork for every project
            </p>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ind-on-surface/90 lg:mx-0">
              Manufacturers of trusses, rolling shutters, gates, window grills, doors,
              sheet metal works, and aluminum partitions — built to spec and delivered
              across Bangalore.
            </p>

            <p className="mt-3 font-sans text-sm text-ind-on-surface/85">
              <span className="font-semibold text-ind-primary">Proprietor:</span>{' '}
              <span className="text-ind-on-surface">{COMPANY.proprietor}</span>
            </p>

            <ul className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="rounded border border-white/10 bg-ind-surf-low px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ind-primary"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <WhatsAppButton>Contact Us</WhatsAppButton>
              <a
                href={COMPANY.phoneTel}
                className="group inline-flex w-full items-center justify-center gap-2 rounded border border-white/20 px-5 py-2.5 text-sm font-semibold text-ind-on-surface transition-all duration-200 hover:bg-white/5 sm:w-auto"
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

          {/* Shop Specification Aside Sheet */}
          <aside
            className="mx-auto w-full max-w-sm rounded border border-white/10 bg-ind-surf p-6 transition-all duration-200 lg:mx-0 lg:max-w-none"
            aria-label="Company overview"
          >
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <MewLogo className="h-16 w-16 shrink-0" animated />
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-ind-primary-container">
                  {COMPANY.shortName}
                </p>
                <p className="text-sm font-semibold text-ind-primary">Since Bangalore</p>
                <p className="mt-1 font-mono text-[10px] uppercase text-ind-on-surface/60">Trusted local fabricators</p>
              </div>
            </div>

            <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-ind-on-surface/50">
              We specialize in
            </p>
            <ul className="mt-2 space-y-2">
              {SERVICES.slice(0, 4).map((service) => (
                <li
                  key={service.id}
                  className="flex items-center gap-2 font-sans text-sm font-medium text-ind-on-surface/90"
                >
                  <span className="h-1 w-1 shrink-0 rounded-sm bg-ind-primary-container" />
                  {service.title}
                </li>
              ))}
              <li className="font-mono text-[10px] font-medium uppercase text-ind-primary-container">
                + {SERVICES.length - 4} more services below
              </li>
            </ul>

            <a
              href="#services"
              className="mt-5 flex w-full items-center justify-center rounded border border-white/15 bg-ind-surf-low py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-ind-primary transition-colors hover:bg-white/5"
            >
              View all services ↓
            </a>
          </aside>
        </div>

        <ServiceMarquee />

        <p className="mt-8 flex items-center justify-center gap-2 text-center font-mono text-[10px] uppercase tracking-wider text-ind-primary sm:text-xs">
          <svg
            className="h-4 w-4 shrink-0 text-ind-primary-container"
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
