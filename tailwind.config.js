/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppin: ["Poppins", "san-serif"],
      inter: ["Inter", "sans-serif"],
    },
    // screens: {
    //   lg: "1024px",
    //   md: "760px",
    //   sm: "310px",
    //   ps: "370px",
    // },
    extend: {},
  },
  plugins: [],
};
