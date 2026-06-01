import { COMPANY, SERVICES } from '../config/constants';
import { Reveal } from './Reveal';
import { ServiceIcon } from './ServiceIcon';
import { WhatsAppButton } from './WhatsAppButton';

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-gradient-to-b from-ind-bg to-ind-surf-low py-16 transition-colors duration-200 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <header className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ind-primary-container">
              What we build
            </span>
            <h2
              id="services-heading"
              className="mt-2 text-2xl font-bold uppercase tracking-wide text-ind-primary sm:text-3xl"
            >
              Core Offerings &amp; Services
            </h2>
            <p className="mt-3 text-ind-on-surface/80">
              Precision metal fabrication and installation for commercial and industrial projects.
            </p>
          </header>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <li key={service.id}>
              <Reveal delayMs={index * 80}>
                <article className="service-card group h-full">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded bg-white/5 text-ind-primary transition-colors duration-300 group-hover:bg-ind-primary-container group-hover:text-white">
                      <ServiceIcon id={service.id} className="h-6 w-6" />
                    </div>
                    <span className="rounded border border-ind-primary-container/20 bg-ind-primary-container/10 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-ind-primary-container opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Quote
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-ind-on-surface transition-colors duration-300 group-hover:text-ind-primary-container">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ind-on-surface/70">
                    {service.description}
                  </p>
                  <a
                    href={`https://wa.me/919845398542?text=${encodeURIComponent(`Hi, I'm interested in ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-ind-primary opacity-0 transition-all duration-300 group-hover:opacity-100 hover:text-ind-primary-container"
                  >
                    Ask on WhatsApp
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delayMs={200}>
          <div className="mt-12 rounded border border-white/10 bg-ind-surf p-8 text-center text-ind-on-surface">
            <p className="font-sans text-lg font-bold text-ind-primary">Ready to start your project?</p>
            <p className="mt-2 text-sm text-ind-on-surface/80">
              Get a quick quote directly from {COMPANY.proprietor} on WhatsApp.
            </p>
            <div className="mt-6">
              <WhatsAppButton className="!bg-ind-primary-container !text-white hover:!bg-[#e66000]">
                Inquire Now
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
