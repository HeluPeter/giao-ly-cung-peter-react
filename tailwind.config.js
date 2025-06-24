export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ← phải có dòng này
  ],
  theme: {
    extend: {
      colors: {
        warmBeige: "#fefae0",
        softYellow: "#fef9c3",
        softPink: "#ffe4e6",
        softBlue: "#dbf4ff",
        cream: "#fffdf5",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
