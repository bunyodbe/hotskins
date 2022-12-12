/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#20222A",
        secondary: "#272E3B",
        yellow: "#F4C038",
        dimWhite: "rgba(255, 255, 255, 0.5)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1440px",
    },
  },
  plugins: [],
};
