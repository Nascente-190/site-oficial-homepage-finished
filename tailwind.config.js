// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // O caminho antigo, que já inclui App.jsx
    "./src/components/**/*.{js,ts,jsx,tsx}", // O NOVO CAMINHO para o Footer.jsx e futuros componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
