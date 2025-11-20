import { defineConfig, envField } from "astro/config";

/**
 * Integrations
 */
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";

/**
 * Other required modules
 */
import languages from "./src/i18n/languages";
import { DEFAULT_LANGUAGE } from "./src/constants";

// https://astro.build/config
export default defineConfig({
	site: "https://yarkov.tech",
	compressHTML: true,
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	env: {
		schema: {
			DIRECTUS_URL: envField.string({ context: "server", access: "secret", default: "" }),
			DIRECTUS_TOKEN: envField.string({ context: "server", access: "secret", default: "" }),
		},
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: DEFAULT_LANGUAGE,
				locales: Object.fromEntries(Object.keys(languages).map((key) => [key, key])),
			},
		}),
		icon(),
		solidJs(),
	],
	trailingSlash: "ignore",
	scopedStyleStrategy: "where",
});
