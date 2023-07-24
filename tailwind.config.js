module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#172554",
        mediumBlue: "#1D4ED8",
        rose: "#E11D48",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translate3d(0,-100%,0)" },
          "100%": { transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out 1",
      },
      backgroundImage: {
        "gradient-black-white":
          "linear-gradient(0deg, rgba(241,245,248,1) 0%, rgba(0,0,0,1) 100%)",
      },
    },
  },
  plugins: [],
};
