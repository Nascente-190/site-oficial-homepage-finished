/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',    // Cor principal - azul escuro
        secondary: '#718096',  // Cor secundária - cinza
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Fonte principal
      },
    },
  },
  plugins: [],
}