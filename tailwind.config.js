/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 4 column grid
        Temp: "repeat(4, 1fr)",
        // Alternative grid configuration
        Temps: "repeat(4, minmax(160px, auto))",
        midTemp: "repeat(3, 1fr)",
        midTemps: "repeat(3, minmax(160px, auto))",
        smallTemp: "repeat(2, 1fr)",
        smallTemps: "repeat(2, minmax(160px, auto))",
      },
      gridAutoRows: {
        // Complex site-specific row configuration
        layout: "minmax(160px, auto)",
        midLayout: "minmax(160px, auto)",
        smallLayout: "minmax(160px, auto)",
      },
      fontFamily: {
        Titan: ["Titan One", "sans-serif"],
      },
      backgroundColor: {
        "custom-red": "#f45b69",
      },
      width: {
        "10px": "10px",
      },
      height: {
        "10px": "10px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-li::after": {
          content: '""',
          position: "absolute",
          left: "50%",
          bottom: "0",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#f45b69",
          transform: "translateX(-50%)",
        },
      };
      addUtilities(newUtilities, ["before", "after"]);
    },
  ],
};
