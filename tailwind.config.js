/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#74CCD8",
        pink: "#ED9BC0",
        dark: "#090F24",
        gray: "#686877",
      },
    },
  },
  plugins: [],
};
