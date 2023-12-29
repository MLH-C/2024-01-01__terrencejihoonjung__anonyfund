/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#71c0fc",
        secondary: "#65f0ab",
        accent: "#5c5aeb",
        text: "#180202",
        background: "#fafafa",
      },
      fontFamily: {
        main: ["Albert Sans", "sans-serif", "Lato"],
      },
    },
  },
  plugins: [],
};
