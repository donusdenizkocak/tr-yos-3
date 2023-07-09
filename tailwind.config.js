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
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate3d(0,-100%,0)' },
          '100%': {transform: 'translate3d(0,0,0)'  },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out 1',
      }

    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
