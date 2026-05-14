import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Asset base URL.
 * - Netlify / Vercel at domain root: keep default "/".
 * - GitHub Pages project site: set env `VITE_BASE_PATH=/your-repo-name/` when building.
 * Avoid `base: "./"` here: with SPA `/* -> /index.html`, a page opened under a path
 * would resolve `./assets/*` incorrectly and load nothing (blank screen).
 */
function resolveBase(): string {
  const raw = process.env.VITE_BASE_PATH?.trim();
  if (!raw) return "/";
  if (raw === "/") return "/";
  return raw.endsWith("/") ? raw : `${raw}/`;
}

export default defineConfig({
  base: resolveBase(),
  plugins: [react(), tailwindcss()],
  build: {
    target: "es2020",
  },
});
