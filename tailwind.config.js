import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--aw-color-primary)',
          50: 'var(--aw-color-primary-50, #f0f9ff)',
          100: 'var(--aw-color-primary-100, #e0f2fe)',
          200: 'var(--aw-color-primary-200, #bae6fd)',
          300: 'var(--aw-color-primary-300, #7dd3fc)',
          400: 'var(--aw-color-primary-400, #38bdf8)',
          500: 'var(--aw-color-primary-500, #0ea5e9)',
          600: 'var(--aw-color-primary-600, #0284c7)',
          700: 'var(--aw-color-primary-700, #0369a1)',
          800: 'var(--aw-color-primary-800, #075985)',
          900: 'var(--aw-color-primary-900, #0c4a6e)',
        },
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        fade: 'fadeInUp 1s both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
