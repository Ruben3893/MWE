import { COMPANY } from '../config/constants';
import { WhatsAppButton } from './WhatsAppButton';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ind-surf-low text-ind-on-surface transition-all duration-200">
      {/* Structural technical grid background for subtle blueprint accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 font-sans">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xl font-bold uppercase tracking-wide text-ind-primary">{COMPANY.name}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ind-primary-container">Proprietor: {COMPANY.proprietor}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ind-on-surface/75">
              {COMPANY.address}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-ind-on-surface/50">Fax: {COMPANY.fax}</p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <a
              href={COMPANY.phoneTel}
              className="font-mono text-lg font-bold tracking-wider text-ind-primary hover:text-ind-primary-container hover:underline"
            >
              {COMPANY.phoneDisplay}
            </a>
            <WhatsAppButton
              variant="secondary"
              className="!border-white/20 !text-ind-on-surface hover:!bg-white/5"
            >
              Contact Us
            </WhatsAppButton>
          </div>
        </div>

        <p className="relative mt-10 border-t border-white/5 pt-6 text-center font-mono text-[9px] uppercase tracking-wider text-ind-on-surface/40">
          &copy; {year} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
