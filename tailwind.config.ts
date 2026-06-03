import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#f4f7fb',
          muted: '#dce5ef',
          dark: '#070b12',
          soft: '#0d1420',
        },
        brand: {
          DEFAULT: '#14b8a6',
          dark: '#0f766e',
          electric: '#38bdf8',
          pulse: '#f43f5e',
          rose: '#b76e79',
          blush: '#ead3d6',
          beige: '#f2e7d9',
        },
      },
      boxShadow: {
        soft: '0 18px 60px rgba(83, 52, 66, 0.11)',
        glow: '0 0 0 1px rgba(183, 110, 121, 0.18), 0 24px 80px rgba(83, 52, 66, 0.20)',
      },
    },
  },
  plugins: [],
} satisfies Config;
