import { defineConfig, envField } from "astro/config";

/**
 * Integrations
 */
import node from "@astrojs/node";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";

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
	integrations: [icon(), solidJs()],
	trailingSlash: "ignore",
	scopedStyleStrategy: "where",
});
