/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'default-bg': "url('/assets/backgrounds/default.gif')",
      },
      fontSize: {
        '10xl': '7.6rem',
      }
    },
  },
  plugins: [],
}
