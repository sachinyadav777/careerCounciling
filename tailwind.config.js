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
        darkSlaty: "#ede7e5",
      },
      backgroundImage: {
        "back-img": 'url("/src/assets/images/about-two-shape-1.png")',
        "service-bg-url": 'url("/src/assets/images/services-three-bg-2.jpg")',
        "service-bg2-url": 'url("/src/assets/images/services-three-bg-1.png")',
        "contact-bg": 'url("/src/assets/images/contact-bg.jpg")',
      },
    },
  },
  plugins: [],
};
