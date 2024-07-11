/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppin: ["Poppins", "san-serif"],
      inter: ["Inter", "sans-serif"],
    },
    screen: {
      xs: "320px",
      sm: "410px",
      ...defaultTheme.screens,
    },
    extend: {},
  },

  plugins: [],
};
