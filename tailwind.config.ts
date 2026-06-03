import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#f8fafc',
          muted: '#e2e8f0',
          dark: '#111827',
          soft: '#0f172a',
        },
        brand: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
      },
      boxShadow: {
        soft: '0 25px 80px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
