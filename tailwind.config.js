/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('./assets/background.png')",
      },
    },
  },
  plugins: [
    require("daisyui"),
    // class after bg-hero-gradient, adapt height and color of gradient to needs
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".bg-hero-gradient::after": {
          content: '""',
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "0",
          height: "300px",
          background:
            "linear-gradient(to top, rgba(29, 35, 42, 1), transparent)",
          zIndex: "1",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
