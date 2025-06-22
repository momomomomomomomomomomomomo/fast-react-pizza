// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // --- Use this new syntax for the path ---
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
});
