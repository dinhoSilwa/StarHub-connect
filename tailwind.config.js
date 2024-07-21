/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'purple-light': '#EBE5FF',
        'purple-dark': '#2C0076',
        'yellow-icon': '#FCC313'
      },
      fontFamily : {
        "Montserrat": ["Montserrat", "sans-serif"],
        "LexendFont": ["Lexend", "sans-serif"]
      }
    },
  },
  plugins: [],
}

