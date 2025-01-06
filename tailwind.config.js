/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./comp/**/*.{js,ts,jsx,tsx}", // נתיב נוסף לתיקייה comp
  ],
  theme: {
    extend: {
      cursor: {
        custom: "url('/crusorface.png'), auto",
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.5s ease-out',
      },
    },
  },
  darkMode: 'class', // תמיכה ב-dark mode
  plugins: [],
};