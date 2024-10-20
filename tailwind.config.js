/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens : {
      'mini' : "320px",
      'small' : '412px',
      'media' : '640px',
      'large' : '768px',
      'desk-mini' : '1024px',
      'desk-small' : '1280px',
      'desk-large' : '1536px'
    },
  
    extend: {

      colors : {
        'purple-light': '#EBE5FF',
        'purple-dark': '#2C0076',
        'yellow-icon': '#FCC313',
        'banner-title' : '#51169C'
      },
      fontFamily : {
        "Montserrat": ["Montserrat", "sans-serif"],
        "LexendFont": ["Lexend", "sans-serif"],
        'source-code': ['"Source Code Pro"', 'monospace'],

      }
    },
    
  },
  plugins: [],
}

