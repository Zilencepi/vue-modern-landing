/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // važno!
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}' // važno da Tailwind prepozna sve .vue fajlove
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
