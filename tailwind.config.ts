import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#102A43',
        'navy-light': '#1a3a52',
        'navy-dark': '#0a1f33',
        accent: '#2563EB',
        'accent-light': '#3b82f6',
        'accent-dark': '#1d4ed8',
        slate: '#334155',
        'slate-light': '#94a3b8',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#334155',
            a: {
              color: '#2563EB',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
