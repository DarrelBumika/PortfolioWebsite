/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'tiny': ['tiny5', 'sans-serif'],
        'micro': ["micro 5", 'sans-serif'],
      },
      colors: {
        'blue': '#5b6ee1',
        'gray': '#F8F8F8',
        'black': '#222034',
      }
    },
  },
  plugins: [
    require('@khoohaoyit/tailwind-grid-center'),
  ],
}

