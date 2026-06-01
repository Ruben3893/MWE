type MewLogoProps = {
  className?: string;
  animated?: boolean;
};

export function MewLogo({ className = 'h-14 w-14', animated = false }: MewLogoProps) {
  return (
    <div
      className={`flex shrink-0 flex-col overflow-hidden rounded-lg border-2 border-mew-blue shadow-glow-blue transition-shadow duration-300 hover:shadow-glow ${animated ? 'animate-float' : ''} ${className}`}
      aria-hidden
    >
      <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-mew-blue to-[#005a96] px-1 pt-1">
        <svg viewBox="0 0 40 32" className="h-full w-full text-white" fill="currentColor">
          <path d="M4 28V4l10 14L24 4v24h-6V16l-6 9-6-9v12H4z" />
        </svg>
      </div>
      <div className="bg-mew-blue py-1 text-center text-[10px] font-bold tracking-[0.2em] text-white sm:text-xs">
        MEW
      </div>
    </div>
  );
}
