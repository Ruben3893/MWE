import { useCallback, useState } from 'react';
import { COMPANY, NAV_SECTIONS } from '../config/constants';
import { useActiveSection } from '../hooks/useActiveSection';
import { useDarkMode } from '../hooks/useDarkMode';
import { MewLogo } from './MewLogo';
import { TopContactBar } from './TopContactBar';
import { WhatsAppButton } from './WhatsAppButton';

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const { theme, toggleTheme } = useDarkMode();

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  }, []);

  const themeToggleBtn = (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded border border-white/10 p-2 text-ind-primary transition-all duration-200 hover:border-ind-outline/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ind-primary"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? (
        <svg
          className="h-5 w-5 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"
          />
        </svg>
      ) : (
        <svg
          className="h-5 w-5 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ind-bg/95 backdrop-blur-md transition-all duration-200">
      <TopContactBar />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-3"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('top');
          }}
        >
          <MewLogo className="h-11 w-11 transition-transform duration-300 group-hover:scale-105" />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-ind-primary-container transition-colors group-hover:text-ind-primary sm:text-base">
              {COMPANY.name}
            </p>
            <p className="truncate font-mono text-[10px] uppercase tracking-wider text-ind-primary/75">{COMPANY.shortName}</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV_SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className={`nav-link ${activeSection === section.id ? 'nav-link-active' : ''}`}
            >
              {section.label}
            </button>
          ))}
          {themeToggleBtn}
          <WhatsAppButton>Inquire Now</WhatsAppButton>
        </nav>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {themeToggleBtn}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded border border-white/10 p-2 text-ind-primary transition-colors hover:border-ind-primary hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ind-primary"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <nav
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/10 bg-ind-bg transition-all duration-200 md:hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-label="Mobile"
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {NAV_SECTIONS.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full rounded px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-ind-primary-container/10 text-ind-primary-container'
                    : 'text-ind-on-surface hover:bg-ind-surf-low'
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <WhatsAppButton className="w-full">Inquire Now</WhatsAppButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
