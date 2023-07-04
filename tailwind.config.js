/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#172554",
        mediumBlue: "#1D4ED8",
        rose: "#E11D48"
      },
    },
  },
  plugins: [],
}

