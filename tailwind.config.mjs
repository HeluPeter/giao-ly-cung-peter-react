/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8E1',
        softYellow: '#FFECC7',
        warmBeige: '#F5E6CC',
        softPink: '#FFE4E1',
        dustyRose: '#E8C4C4',
        softBlue: '#D4E2F0',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      boxShadow: {
        card: '0 4px 15px rgba(0, 0, 0, 0.05)',
        hover: '0 8px 25px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
