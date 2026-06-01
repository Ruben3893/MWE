import { Reveal } from './Reveal';

const STATS = [
  { value: '7+', label: 'Core Services' },
  { value: 'Bangalore', label: 'Local Fabrication' },
  { value: 'Direct', label: 'WhatsApp Quotes' },
] as const;

export function StatsStrip() {
  return (
    <section
      className="border-y border-slate-200/80 bg-white py-8 transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900"
      aria-label="Highlights"
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
        {STATS.map((stat, index) => (
          <Reveal key={stat.label} delayMs={index * 100}>
            <div className="group text-center">
              <p className="text-2xl font-extrabold text-mew-orange transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-mew-blue transition-colors dark:text-blue-400">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
