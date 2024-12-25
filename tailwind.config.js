/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        custom: "url('/crusorface.png'), auto", // הוספת סמן מותאם אישית
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
}