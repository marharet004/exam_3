/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-rose': '#6B3245',
        'coral-rose': '#FB6968',
        'light-rose': '#FEC3D9'
      }
    },
    fontFamily: {
      'main': '"DM Serif Text"',
      'description': '"Antic Didone"',
    },
    backgroundImage: {
      'hero': "url('./img/logo-color.png')",
    },


  },
  plugins: [],
}
