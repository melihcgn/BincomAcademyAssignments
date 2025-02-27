/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        parkinsans: ['Parkinsans', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}

