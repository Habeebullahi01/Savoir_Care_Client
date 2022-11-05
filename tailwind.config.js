// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */

// import img from "./images/mobile-hero.jpg";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-hero": "url('/mobile-hero.jpg')",
        "desktop-hero": "url('/desktop-hero.jpg')",
      },
    },
  },
  plugins: [],
};
