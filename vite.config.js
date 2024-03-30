import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // Add alias for @material-tailwind/react
      "@material-tailwind/react": path.resolve(
        __dirname,
        "node_modules/material_tailwind"
      ),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5555", // Replace with your API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    rollupOptions: {
      external: ["@material-tailwind/react"],
    },
  },
  plugins: [react()],
});
