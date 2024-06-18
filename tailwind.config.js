/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 4 column grid
        Temp: "repeat(4, 1fr)",
        // Alternative grid configuration
        Temps: "repeat(4, minmax(180px, auto))",
      },
      gridAutoRows: {
        // Complex site-specific row configuration
        layout: "minmax(180px, auto)",
      },
      fontFamily: {
        Titan: ["Titan One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
