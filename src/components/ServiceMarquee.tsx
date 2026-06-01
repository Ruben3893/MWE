import { SERVICES } from '../config/constants';

export function ServiceMarquee() {
  const items = SERVICES.map((s) => s.title);
  const doubled = [...items, ...items];

  return (
    <div
      className="relative mt-10 overflow-hidden border-y border-white/5 bg-ind-surf-low/40 py-4 transition-all duration-200"
      aria-hidden
    >
      {/* Precision grid faders matching the #0c141a background */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ind-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ind-bg to-transparent" />
      <div className="flex w-max animate-marquee gap-8">
        {doubled.map((title, i) => (
          <span
            key={`${title}-${i}`}
            className="shrink-0 rounded border border-white/10 bg-ind-surf px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider text-ind-primary"
          >
            {title}
          </span>
        ))}
      </div>
    </div>
  );
}
