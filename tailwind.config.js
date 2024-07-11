/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppin: ["Poppins", "san-serif"],
      inter: ["Inter", "sans-serif"],
    },

    extend: {
      screen: {
        xs: "320px",
        xm: "410px",
        ...defaultTheme.screens,
      },
    },
  },

  plugins: [],
};
