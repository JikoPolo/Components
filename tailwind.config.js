/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('./assets/background.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
