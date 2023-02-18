import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_METADATA } from "@root/constants";
import type { APIContext } from "astro";
import * as utils from "@i18n/utils";

// TODO: generate feed for RU, EN, ... languages
export async function get(context: APIContext) {
	const posts = await getCollection("blog", (e) => !e.data.draft);
	return rss({
		title: SITE_METADATA.title,
		description: utils.translate("site.description", "ru"),
		site: "https://yarkov.tech",
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			link: `/blog/${post.slug}/`,
		})),
	});
}
