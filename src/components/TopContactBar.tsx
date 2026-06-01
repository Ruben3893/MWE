import { COMPANY } from '../config/constants';

export function TopContactBar() {
  return (
    <div className="border-b border-white/5 bg-ind-surf-low transition-all duration-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-ind-on-surface/80 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-xs">
        <p>
          <span className="font-semibold text-ind-primary">Proprietor:</span>{' '}
          <span className="text-ind-on-surface">{COMPANY.proprietor}</span>
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1 sm:justify-end">
          <p>
            <span className="font-semibold text-ind-primary">Mobile:</span>{' '}
            <a
              href={COMPANY.phoneTel}
              className="font-medium underline-offset-2 transition-colors hover:text-ind-primary-container hover:underline"
            >
              98453 98542
            </a>
          </p>
          <p>
            <span className="font-semibold text-ind-primary">Fax:</span>{' '}
            <span className="text-ind-on-surface">{COMPANY.fax}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
