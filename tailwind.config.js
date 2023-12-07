/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'WorkSans': ['Inconsolata', 'monospace'],
        'FontTitle': ['Carter One', 'cursive'],
        'FontSen': ['Sen', 'sans-serif']
      }
    },
  },
  plugins: [],
}