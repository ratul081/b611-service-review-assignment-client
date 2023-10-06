const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {},
  },
  // darkMode: "class",
  plugins: [require("daisyui"),nextui(), require('flowbite/plugin')],
}