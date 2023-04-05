/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        black: "#222831",
        graphite: "#393E46",
        teal: "#00ADB5",
        grey: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
