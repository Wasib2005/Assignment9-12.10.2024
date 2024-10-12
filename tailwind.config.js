/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";
import daisyui from "daisyui";
import tailwindcssanimated from "tailwindcss-animated";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
      },
    },
  },

  plugins: [daisyui, flowbite, tailwindcssanimated],
  daisyui: {
    themes: ["light", "dark",],
  },
};
