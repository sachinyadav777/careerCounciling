/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plus: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        primary: "#e20935",
        heading: "#16171a",
        text: "#727272",
        back: "#f2edeb",
        back: "#f2edeb",
      },
      backgroundImage: {
        "back-img": 'url("/src/assets/images/about-two-shape-1.png")',
        "contact-bg": 'url("/src/assets/images/contact-bg.jpg")',
      },
    },
  },
  plugins: [],
};
