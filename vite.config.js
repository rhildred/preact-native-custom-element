import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import { rnw } from "vite-plugin-rnw";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [rnw(), preact(), tailwindcss()],
	server: {allowedHosts: true}
});
