import { COMPANY } from '../config/constants';
import { WhatsAppButton } from './WhatsAppButton';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-blue-400/30 bg-gradient-to-br from-mew-blue to-[#004d80] text-white transition-all duration-300 dark:border-slate-800 dark:from-slate-950 dark:to-slate-950/90">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xl font-bold">{COMPANY.name}</p>
            <p className="mt-1 text-sm text-blue-100 transition-colors dark:text-slate-300">Proprietor: {COMPANY.proprietor}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-blue-100 transition-colors dark:text-slate-300">
              {COMPANY.address}
            </p>
            <p className="mt-2 text-sm text-blue-200 transition-colors dark:text-slate-400">Fax: {COMPANY.fax}</p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <a
              href={COMPANY.phoneTel}
              className="text-lg font-bold transition-transform duration-300 hover:scale-105 hover:underline"
            >
              {COMPANY.phoneDisplay}
            </a>
            <WhatsAppButton
              variant="secondary"
              className="!border-white !text-white hover:!bg-white hover:!text-mew-blue dark:!border-slate-700 dark:hover:!border-white"
            >
              Contact Us
            </WhatsAppButton>
          </div>
        </div>

        <p className="relative mt-10 border-t border-white/20 pt-6 text-center text-xs text-blue-200 transition-colors dark:border-slate-800 dark:text-slate-400">
          &copy; {year} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
