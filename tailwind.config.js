/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    // Add this line to include Flowbite
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        prim: "#D2001A",
        sec: "#FFDE00",
        WG: {
          1: " #FFFAE7",
          2: "#EFEFEF",
        },
      },
      fontFamily: {
        cinzel: ["Cinzel"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
