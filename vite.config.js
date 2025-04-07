import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      exclude: ['**/Modules/Viajes-module.jsx'],  // Ensure the correct file extension
    },
  },
});