import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        changeOrigin: true,
        secure: false,
        target:
          "https://script.google.com/macros/s/AKfycbz2Z12Y8RhykhnZf37SIW7ILShagaSIHi8nQ9lgmoYxHNATyWi-EN-vcKBLfuo_0P7IXg/exec",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
