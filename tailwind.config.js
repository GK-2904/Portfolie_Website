/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f4f6fa',
          100: '#e9edf5',
          200: '#cbd6e7',
          300: '#9cb3d3',
          400: '#688bb9',
          500: '#43699f',
          600: '#325283',
          700: '#29436c',
          800: '#0F1E36', // Deep navy for text/headers
          900: '#0A1424', // Base dark bg
          950: '#060b15', // Extra deep dark bg
        },
        rescue: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // Classic Rescue Red
          600: '#dc2626', // Deep Rescue Red
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
