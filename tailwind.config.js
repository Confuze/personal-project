/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#2B2D42",
        bg2: "#1B1C26",
        fg: "#E5DADA",
        acc: "#44CF6C",
        acc2: "#A9FDAC",
      },
    },
  },
  plugins: [],
};
