import { COMPANY } from '../config/constants';

export function TopContactBar() {
  return (
    <div className="border-b border-slate-200/80 bg-gradient-to-r from-mew-blue/5 via-white to-mew-orange/5 transition-all duration-300 dark:border-slate-800/80 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 text-xs text-mew-blue transition-colors dark:text-blue-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-sm">
        <p className="transition-colors hover:text-mew-orange">
          <span className="font-semibold text-mew-blue dark:text-blue-400">Proprietor:</span>{' '}
          <span className="text-slate-700 dark:text-slate-300">{COMPANY.proprietor}</span>
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1 sm:justify-end">
          <p>
            <span className="font-semibold text-mew-blue dark:text-blue-400">Mobile:</span>{' '}
            <a
              href={COMPANY.phoneTel}
              className="font-medium text-slate-700 underline-offset-2 transition-colors hover:text-mew-orange hover:underline dark:text-slate-300"
            >
              98453 98542
            </a>
          </p>
          <p>
            <span className="font-semibold text-mew-blue dark:text-blue-400">Fax:</span>{' '}
            <span className="text-slate-700 dark:text-slate-300">{COMPANY.fax}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
