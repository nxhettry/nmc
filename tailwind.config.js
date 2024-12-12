/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["ubuntu"],
      },
      colors: {
        mainTheme: "#1C7701",
      },
    },
  },
  plugins: [],
};
