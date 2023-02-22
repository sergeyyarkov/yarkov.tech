import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_METADATA, URL_BLOG_PREFIX } from "@root/constants";
import { createRelativeArticleUrl } from "@root/utils";
import * as utils from "@i18n/utils";

// TODO: generate feed for RU, EN, ... languages
export async function get() {
	const articles = await getCollection("blog", (e) => !e.data.draft);
	return rss({
		title: SITE_METADATA.name,
		description: utils.translate("site.description", "ru"),
		site: "https://yarkov.tech",
		items: articles.map(({ id, data: { title, description, pubDate, coverImage } }) => {
			return {
				title,
				pubDate,
				description: `${description}${coverImage && `<img src="${coverImage}" alt="${title}">`}`,
				link: createRelativeArticleUrl({ id, title, pubDate }, URL_BLOG_PREFIX),
				customData: `<language>en-us</language>`,
			};
		}),
	});
}
