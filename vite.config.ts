import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Relative base so static assets work on GitHub Pages project sites
  // (e.g. https://user.github.io/repo/) and on root hosts (Netlify/Vercel).
  base: "./",
  plugins: [react(), tailwindcss()],
});
