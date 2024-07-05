/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customAzul:'#19468C',
        customAzulHome:'#112F64',
        customNotification:'#082860',
        customAzulClarito:'#E0ECFF'
      },
      padding: {
        'p-10p': '10%',
        'p-20p': '20%'
      }
    },
  },
  plugins: [],
}

