/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,jsx,tsx}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "dracula",
      "sunset",
      "business",
      "helloween",
    ],
  },
  plugins: [require("daisyui")],
};
