/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plus: ["Plus Jakarta Sans", "sans-serif"]
      },
      colors: {
        primary: '#e20935',
        heading: '#16171a',
        
      }
    },
  },
  plugins: [],
}