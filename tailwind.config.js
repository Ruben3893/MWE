/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ind: {
          bg: 'var(--color-bg)',
          surf: 'var(--color-surf)',
          'surf-low': 'var(--color-surf-low)',
          'surf-lowest': 'var(--color-surf-lowest)',
          primary: 'var(--color-primary)',
          'primary-container': 'var(--color-primary-container)',
          'on-primary': 'var(--color-on-primary)',
          'on-surface': 'var(--color-on-surf)',
          outline: 'var(--color-outline)',
          'outline-variant': 'var(--color-outline-variant)',
        },
        mew: {
          orange: 'var(--color-primary-container)', // Map to dynamic Safety Orange
          blue: 'var(--color-primary)',             // Map to dynamic Safety Coral
        },
      },
      fontFamily: {
        sans: [
          '"IBM Plex Sans"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'monospace',
        ],
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        full: '9999px',
      },
      boxShadow: {
        none: 'none',
        glow: '0 0 16px rgba(255, 107, 0, 0.2)', // Dynamic safety outline glow
        'glow-blue': '0 0 16px rgba(255, 182, 147, 0.12)',
        card: 'none',
        'card-hover': 'none',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
