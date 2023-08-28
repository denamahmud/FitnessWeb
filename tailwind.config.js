/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors : {
        "orange" : "#F15921",
        "orangelight" : "#f16a21",
        "white" : "#fff",
        "grey" : "#A6A6A6"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

 