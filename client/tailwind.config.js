/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1290px',
      },
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
      },
      colors:{
        navtextcolor: '#767676',
        secondary: '#262626',
      },
    },
  },
  plugins: [],
}

