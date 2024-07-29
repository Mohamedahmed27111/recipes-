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
        prim: '#EAE7DC',
        sec: '#D8C3A5',
        G: '#8E8D8A',
        red:{
          1:'#E98074',
          2:'#E85A4F'
        }
      },
      fontFamily: {
        cinzel: ["Cinzel"],
      },
      height:{
        custom: '380px',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
