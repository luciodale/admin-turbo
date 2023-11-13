import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        // for example, lint .ts and .tsx
        lintCommand: 'eslint "./apps/src/**/*.{ts,tsx}"',
      },
      overlay: false,

      enableBuild: false,
    }),
  ],
});
