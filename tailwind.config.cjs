/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#937158",
        secondary: "#f1eae5",
      },
      backgroundImage: {
        heroImg: "url('/public/Images/couples2.webp')",
        SecondImg: "url('/public/Images/coder.jpeg')",
      },
    },
  },
  plugins: [],
};
