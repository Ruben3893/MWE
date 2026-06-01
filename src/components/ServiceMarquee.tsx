import { SERVICES } from '../config/constants';

export function ServiceMarquee() {
  const items = SERVICES.map((s) => s.title);
  const doubled = [...items, ...items];

  return (
    <div
      className="relative mt-10 overflow-hidden border-y border-mew-blue/20 bg-white/60 py-4 backdrop-blur-sm transition-all duration-300 dark:border-mew-blue/30 dark:bg-slate-950/60"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f4f7fb] to-transparent transition-all duration-300 dark:from-[#0b0f19]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f4f7fb] to-transparent transition-all duration-300 dark:from-[#0b0f19]" />
      <div className="flex w-max animate-marquee gap-8">
        {doubled.map((title, i) => (
          <span
            key={`${title}-${i}`}
            className="shrink-0 rounded-full border border-mew-blue/20 bg-white px-4 py-1.5 text-sm font-medium text-mew-blue shadow-sm transition-all duration-300 dark:border-mew-blue/30 dark:bg-slate-900 dark:text-blue-300"
          >
            {title}
          </span>
        ))}
      </div>
    </div>
  );
}
