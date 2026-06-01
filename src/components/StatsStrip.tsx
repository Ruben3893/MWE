import { Reveal } from './Reveal';

const STATS = [
  { value: '7+', label: 'Core Services' },
  { value: 'Bangalore', label: 'Local Fabrication' },
  { value: 'Direct', label: 'WhatsApp Quotes' },
] as const;

export function StatsStrip() {
  return (
    <section
      className="border-y border-white/10 bg-ind-surf py-8 transition-colors duration-200"
      aria-label="Highlights"
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
        {STATS.map((stat, index) => (
          <Reveal key={stat.label} delayMs={index * 100}>
            <div className="group text-center sm:border-r sm:border-white/5 sm:last:border-r-0">
              <p className="font-mono text-2xl font-bold uppercase tracking-wider text-ind-primary-container transition-transform duration-200 group-hover:scale-102 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-wider text-ind-on-surface/75">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
