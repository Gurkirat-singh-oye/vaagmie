/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },
      fontFamily: {
        adamina: ["Adamina", "serif"],
        playfair: ["Playfair Display", "serif"],
        merriweather: ["Merriweather", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        burntsienna: "#AC492F",
        vagred: "#d31b29",
        champagnepink: "#f1ddd2",
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.red.300") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
  },
  plugins: [],
};
