/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,css}",
    "./.eleventy.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-hamburgers"),
    require("@tailwindcss/forms"),
  ],
}

