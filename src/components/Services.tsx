import { COMPANY, SERVICES } from '../config/constants';
import { Reveal } from './Reveal';
import { ServiceIcon } from './ServiceIcon';
import { WhatsAppButton } from './WhatsAppButton';

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-gradient-to-b from-white to-slate-50 py-16 transition-colors duration-300 dark:from-slate-950 dark:to-slate-900 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <header className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-mew-orange">
              What we build
            </span>
            <h2
              id="services-heading"
              className="mt-2 text-2xl font-bold text-mew-blue transition-colors dark:text-blue-400 sm:text-3xl"
            >
              Core Offerings &amp; Services
            </h2>
            <p className="mt-3 text-slate-600 transition-colors dark:text-slate-350">
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mew-blue/10 text-mew-blue transition-colors duration-300 dark:bg-mew-blue/20 dark:text-blue-300 group-hover:bg-mew-orange group-hover:text-white">
                      <ServiceIcon id={service.id} className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-mew-orange/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-mew-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Quote
                    </span>
                  </div>
                  <h3 className="font-semibold text-mew-blue transition-colors duration-300 dark:text-blue-300 group-hover:text-mew-orange dark:group-hover:text-mew-orange">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors dark:text-slate-400">
                    {service.description}
                  </p>
                  <a
                    href={`https://wa.me/919845398542?text=${encodeURIComponent(`Hi, I'm interested in ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-mew-blue opacity-0 transition-all duration-300 dark:text-blue-400 group-hover:opacity-100 hover:text-mew-orange dark:hover:text-mew-orange"
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
          <div className="mt-12 rounded-2xl border border-mew-blue/20 bg-gradient-to-r from-mew-blue to-[#005a96] p-8 text-center text-white shadow-glow-blue transition-all duration-300 dark:border-slate-800 dark:from-[#004f85] dark:to-[#003d66] dark:shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
            <p className="text-lg font-semibold">Ready to start your project?</p>
            <p className="mt-2 text-sm text-blue-100 transition-colors dark:text-blue-200">
              Get a quick quote directly from {COMPANY.proprietor} on WhatsApp.
            </p>
            <div className="mt-6">
              <WhatsAppButton className="!bg-white !text-mew-blue hover:!bg-blue-50 hover:!shadow-glow">
                Inquire Now
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
