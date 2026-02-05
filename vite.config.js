import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { rnw } from "vite-plugin-rnw";
import { uniwind } from "uniwind/vite";
import path from "path";

const rnwLayeredStyleSheet = {
  enforce: "pre",
  name: "rnw-layered-stylesheet",
  resolveId(source, importer) {
    const isTarget =
      source === "./createOrderedCSSStyleSheet" ||
      source.endsWith(
        "react-native-web/dist/exports/StyleSheet/dom/createOrderedCSSStyleSheet.js",
      );
    if (
      isTarget &&
      importer?.includes("react-native-web/dist/exports/StyleSheet")
    ) {
      return path.resolve(
        "node_modules/uniwind/dist/module/components/web/createOrderedCSSStyleSheet.js",
      );
    }
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // @ts-ignore
    rnwLayeredStyleSheet,
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
