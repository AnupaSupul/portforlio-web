/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#FF5500',
          'orange-bright': '#FF6A00',
          'orange-glow': '#FF7A1A',
          'burnt-primary': '#240B02',
          'burnt-secondary': '#3B1304',
          porcelain: '#FFFFFF',
          'warm-white': '#FAF8F5',
          'soft-neutral': '#F3F1ED',
          charcoal: '#151515',
          'charcoal-dark': '#181512',
          'charcoal-card': '#1C1916',
          'charcoal-border': '#2A2420',
          'secondary-text': '#6B7280',
          slate: '#0F172A',
        }
      }
    },
  },
  plugins: [],
};
