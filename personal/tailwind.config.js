/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/App.jsx", "./src/components/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        vanilla: "#ece4b7",
        straw: "#d9dd92",
        "earth-yellow": "#eabe7c",
        flame: "#dd6031",
        bistre: "#311e10",
      },
      fontFamily: {
        bungee: "Bungee Shade",
        tienne: "Tienne",
        imprima: "Imprima",
      },
    },
  },
  plugins: [],
};
