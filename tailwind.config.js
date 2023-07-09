/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      },
      fontFamily: {
        "body": ['Plus Jakarta Sans']
      },
      colors: {
        "primaryLight": "#334155",
        "primaryDark": "rgb(226 232 240)",
        "bgDark": "#0F172A",
        "bgLight": "#ffffff",
        "divideDark": "rgb(226 232 240)",
        "divideLight": "#000000"
      }
    },
  },
  plugins: [],
}

