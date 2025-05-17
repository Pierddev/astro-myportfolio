// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import showTailwindcssBreakpoint from "astro-show-tailwindcss-breakpoint";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
  
	site: "https://pierre-duault.fr",

	integrations: [showTailwindcssBreakpoint(), sitemap()],
});