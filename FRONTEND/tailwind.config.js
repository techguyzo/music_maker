/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phone: [{ min: "0px", max: "639px" }],
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      bigTablet: "840px",
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      scale: {
        0: "0",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        splash: {
          "0%": { backgroundColor: "bg-pink-500", color: "bg-black-500" },
          "50%": { backgroundColor: "bg-pink-300", color: "bg-black-300" },
          "100%": { backgroundColor: "bg-pink-100", color: "bg-black-100" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        splash: "splash 2s linear infinite",
      },
    },
    variants: {
      extend: {
        animation: ["before"],
        scale: ["before"],
        before: ["hover", "focus"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
