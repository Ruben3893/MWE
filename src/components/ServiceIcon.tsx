import type { ReactNode } from 'react';

type ServiceIconProps = {
  id: string;
  className?: string;
};

const ICONS: Record<string, ReactNode> = {
  trusses: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M4 18l8-12 8 12M6 18h12M8 14h8"
    />
  ),
  'rolling-shutters': (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M4 6h16v12H4V6zm2 2v8m4-8v8m4-8v8m4-8v8"
    />
  ),
  gates: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M6 20V8l6-4 6 4v12M9 20v-6h6v6"
    />
  ),
  'window-grills': (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M4 6h16v12H4V6zm4 0v12m4-12v12m4-12v12M4 10h16M4 14h16"
    />
  ),
  doors: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M8 4h8v16H8V4zm2 8h.01"
    />
  ),
  'sheet-metal': (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M4 8l8-4 8 4v8l-8 4-8-4V8z"
    />
  ),
  'aluminum-partition': (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M5 5h6v14H5V5zm8 0h6v14h-6V5zM8 12h0"
    />
  ),
};

export function ServiceIcon({ id, className = 'h-6 w-6' }: ServiceIconProps) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      {ICONS[id] ?? ICONS['sheet-metal']}
    </svg>
  );
}
