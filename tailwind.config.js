/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#172554",
        mediumBlue: "#1D4ED8",
        rose: "#E11D48",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
