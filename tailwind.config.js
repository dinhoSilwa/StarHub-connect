/** @type {import('tailwindcss').Config} */
export default {
  darkMode : "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'xs': '320px',
      'sm': '412px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1536px'
    },

    extend: {
      fontSize :{
        "xs" : "12px",
      },

      colors: {
        'purple-light': '#EBE5FF',
        'purple-dark': '#2C0076',
        'yellow-icon': '#FCC313',
        'banner-title': '#51169C',
        'bgDark-primary': "#181829",
        'bgDark-second': "#4a4b89",
        "bgDark-intense" : "#2B2B3D"

      },
      fontFamily: {
        "Montserrat": ["Montserrat", "sans-serif"],
        "LexendFont": ["Lexend", "sans-serif"],
        'source-code': ['"Source Code Pro"', 'monospace'],
      }
    },

  },
  plugins: [],
}

