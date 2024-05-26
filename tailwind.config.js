/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:['Lato','sans-serif'],
        ubuntu:['Ubuntu','sans-serif'],
        rowdies:['Rowdies','sans-serif'],
        permanentmarker:['Permanent Marker','sans-serif'],
        satisfy:['Satisfy','sans-serif'],
        cinzel:['Cinzel','sans-serif'],
        acme:['Acme','sans-serif'],
        goldman:['Goldman','sans-serif']

      }
    },
  },
  plugins: [],
}