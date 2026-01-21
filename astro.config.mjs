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
	prefetch: true,
	server: {
		port: 9966,
		host: true,
		allowedHosts: ["showcase.yarkov.tech"],
	},
	adapter: node({
		mode: "standalone",
	}),
	env: {
		schema: {
			DIRECTUS_URL: envField.string({ context: "server", access: "secret", default: "" }),
			DIRECTUS_URL_GRAPHQL: envField.string({
				context: "server",
				access: "secret",
				default: "http://directus:8055/graphql",
			}),
			DIRECTUS_TOKEN: envField.string({ context: "server", access: "secret", default: "" }),
		},
	},
	integrations: [icon(), solidJs()],
	trailingSlash: "ignore",
	scopedStyleStrategy: "where",
});
