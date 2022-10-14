const withMT = require("@material-tailwind/react/utils/withMT");
 
/** @type {import('tailwindcss').Config} */
module.exports =withMT(
  {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          wishlistbg: '#2B2F7E',
        },
      },
    },
    plugins: [],
  }
)



