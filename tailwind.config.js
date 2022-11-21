/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      display: ["Playfair Display", "serif"],
      monserat:["Montserrat", "sans-serif"]
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwindcss-textshadow')],
}