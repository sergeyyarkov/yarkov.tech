import { defineConfig } from "astro/config";

/**
 * Integrations
 */
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";

import languages from "./src/i18n/languages";

import { DEFAULT_LANGUAGE } from "./src/constants";

// https://astro.build/config
export default defineConfig({
	site: "https://yarkov.tech",
	integrations: [
		mdx(),
		sitemap({
			i18n: {
				defaultLocale: DEFAULT_LANGUAGE,
				locales: Object.fromEntries(Object.keys(languages).map((key) => [key, key])),
			},
		}),
		solidJs(),
	],
	markdown: {
		syntaxHighlight: "prism",
	},
});
