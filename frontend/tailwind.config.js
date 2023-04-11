import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#202020",
        border: "#2c2c2c", 
        card: "#272727",
        teal: "#00d0d0",
        gray: "#2B2B2B",
        BlueDianne: '#204154',
        SilverChalice: '#A4a4a4',
    },
    fontSize: {
      '2xs' : ".625rem",
      '3x'  : "1.5rem",
      '5xl' : "3rem",
      '6xl' : "4rem",
      '7xl' : "5rem",
      '8xl' : "6rem",
      '9xl' : "7rem",

  },
  },
  plugins: [],
}
}