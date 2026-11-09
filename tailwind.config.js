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
          'orange-deep': '#240B02',
          'orange-dark': '#140601',
          slate: '#0F172A',
          charcoal: '#1E293B',
          cream: '#F8F9FA',
        }
      }
    },
  },
  plugins: [],
};
