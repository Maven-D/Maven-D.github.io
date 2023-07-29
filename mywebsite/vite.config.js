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
          "https://script.google.com/macros/s/AKfycby4PH19n7B-w8RUWamP62cXQtjYfUSdY7QnjQGk0YgVqOQH_O5iNCZXD7UziwsI06E9/exec",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
