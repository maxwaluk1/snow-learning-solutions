import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#001f3f',
          light: '#003d5c',
          dark: '#000d1f',
        },
        accent: '#00d4ff',
        slate: {
          DEFAULT: '#64748b',
          light: '#cbd5e1',
          lighter: '#f1f5f9',
        },
      },
      fontSize: {
        'display-xl': '3.75rem',
        'display-lg': '3rem',
        'display-md': '2.25rem',
        'heading-lg': '1.875rem',
        'heading-md': '1.5rem',
        'heading-sm': '1.25rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
