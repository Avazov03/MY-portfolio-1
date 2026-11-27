/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './*.js',
    './projects-bento.js',
    './centers.js',
    './landing-case-strip.js',
    './i18n.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0D0D0D',
          dark: '#141414',
          gray: '#7A7A7A',
          light: '#F8F9FA',
          border: '#E5E5E5',
        },
      },
    },
  },
  plugins: [
    // forms/container-queries were on CDN; core utilities cover this site
  ],
  safelist: [
    // JS-driven / conditional utilities that might not appear in static HTML
    'opacity-0',
    'opacity-100',
    'pointer-events-none',
    'pointer-events-auto',
    'translate-x-0',
    'translate-y-0',
    '-translate-x-1',
    'translate-x-1',
    'scale-95',
    'scale-100',
    'hidden',
    'flex',
    'block',
    'fixed',
    'absolute',
    'relative',
    'inset-0',
    'z-50',
    'z-40',
    'z-30',
    'bg-black',
    'bg-white',
    'bg-black/50',
    'bg-black/70',
    'bg-black/80',
    'text-white',
    'text-black',
  ],
};
