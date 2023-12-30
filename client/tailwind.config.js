/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [],
  },
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
      height: {
        list: "72vh",
      },
    },
  },
  plugins: [require("daisyui")],
};
