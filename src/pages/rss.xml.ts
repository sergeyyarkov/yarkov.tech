import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_METADATA } from "@root/constants";
import type { APIContext } from "astro";

export async function get(context: APIContext) {
	const posts = await getCollection("blog");
	return rss({
		title: SITE_METADATA.title,
		description: "",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
