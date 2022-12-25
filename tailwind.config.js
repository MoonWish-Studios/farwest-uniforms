/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: "#1D1A24",
        darkerPurple: "#1B182",
        lightPurple: "#453D55",
        textPrimary: "#B9B9B9",
        white: "#F3F3F3",
        gradientSub1: "#F8A87B",
        gradientSub2: "#FFA5A5",
        gradientSub3: "#F28B6A",
        gradient1: "bg-gradient-to-r from-gradientSub1 via-gradientSub2 to-gradientSub3",
      },
      fontFamily: {
        Outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
}
