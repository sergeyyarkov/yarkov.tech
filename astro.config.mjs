import { defineConfig } from "astro/config";

/**
 * Integrations
 */
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";

/**
 * Rehype plugins
 */
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/**
 * Other required modules
 */
import { h } from "hastscript";
import { toString } from "hast-util-to-string";
import { escape } from "html-escaper";
import languages from "./src/i18n/languages";
import { DEFAULT_LANGUAGE } from "./src/constants";

const createAnchorLabel = (heading) => {
	const node = h("span.anchor-label", escape(heading));
	if (node.properties) node.properties["is:raw"] = true;
	return node;
};

// https://astro.build/config
export default defineConfig({
	site: "https://yarkov.tech",
	compressHTML: true,
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
	markdown: {
		syntaxHighlight: "prism",
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						class: "anchor-link",
					},
					behavior: "after",
					group: ({ tagName }) =>
						h(`div.heading-wrapper.level-${tagName}`, {
							tabIndex: -1,
						}),
					content: (heading) => [
						h(
							`span.anchor-icon`,
							undefined,
							h(
								"svg",
								{
									width: 18,
									height: 18,
									version: 1.1,
									viewBox: "0 0 16 16",
									xlmns: "http://www.w3.org/2000/svg",
									ariaHidden: "true",
									"data-filter": "none",
								},
								h("path", {
									fillRule: "evenodd",
									fill: "currentcolor",
									d: "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z",
								})
							)
						),
						createAnchorLabel(toString(heading)),
					],
				},
			],
		],
	},
	trailingSlash: "ignore",
	scopedStyleStrategy: "where",
});
