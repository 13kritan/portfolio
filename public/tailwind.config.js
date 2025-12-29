/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'vsm': { 'min': '356px', 'max': '767px' },
      // => @media (min-width: 640px) { ... }

      'sm': { 'min': '576px', 'max': '767px' },
      // => @media (min-width: 640px) { ... }

      'md': { 'min': '768px', 'max': '1023px' },
      // => @media (min-width: 768px) { ... }

      'lg': { 'min': '1024px', 'max': '1279px' },
      // => @media (min-width: 1024px) { ... }

      'xl': { 'min': '1280px', 'max': '1535px' },
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'db-color': '#4C3BCF',
        'p-color': '#402E7A',
        'lb-color': '#4B70F5',
        'c-color': '#3DC2EC',
        'grayish-color': '#3a3153',
        'reddish-color': '#C30927'
      },
    },
  },
  plugins: [],
}