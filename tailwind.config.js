/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f6',
          100: '#f5ebe0',
          200: '#e3d5ca',
          300: '#d5bdaf',
          400: '#d6ccc2',
          500: '#c5a896',
          600: '#a68a76',
          700: '#8c705f', // Roast
          800: '#6f5643', // Dark Roast
          900: '#4a3b32', // Espresso
          950: '#2b211b',
        },
        primary: '#6b4f3a',
        'soft-coffee': '#8a6b55',
        cream: '#F4F1EA',
        beige: '#E6DCCF',
        terracotta: '#D1603D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'pattern-coffee': "url('data:image/svg+xml,...')", // Optional
      }
    },
  },
  plugins: [],
}
