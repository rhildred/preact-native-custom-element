import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { rnw } from "vite-plugin-rnw";
import { uniwind } from "uniwind/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    rnw(),
    preact(),
    tailwindcss(),
    uniwind({
      // relative path to your global.css file (from previous step)
      cssEntryFile: "./src/index.css",
      // (optional) path where we gonna auto-generate typings
      // defaults to project's root
      dtsFile: "./src/uniwind-types.d.ts",
    }),
  ],
  server: { allowedHosts: true },
});
