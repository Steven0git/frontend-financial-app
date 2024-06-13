/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,jsx,tsx}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: ["cupcake", "dracula", "sunset", "business", "helloween"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
