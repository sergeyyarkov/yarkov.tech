import type { MDXInstance } from "astro";

import rss from "@astrojs/rss";
import { DEFAULT_LANGUAGE, SITE_METADATA } from "@root/config";
import * as utils from "@i18n/utils";

const data = import.meta.glob<MDXInstance<ArticleType>>("../../content/articles/**/*.mdx", {
	eager: true,
});
const articles = Object.values(utils.formatArticlesByLangs(data));
const items = [];

for (const key of Object.keys(articles)) {
	const article: Record<string, MDXInstance<ArticleType>> = articles[key];
	for (const lang of Object.keys(article)) {
		const { title, description, slug, published_at, coverImage } = article[lang].frontmatter;
		items.push({
			link:
				`${import.meta.env.SITE}` +
				`${lang !== DEFAULT_LANGUAGE ? `${lang}/` : ""}` +
				"blog/" +
				new Date(published_at).toLocaleDateString("en-CA") +
				`/${slug}/`,
			title,
			description: `${description}${
				coverImage !== undefined ? `<img src="${coverImage}" alt="${title}">` : ""
			}`,
			pubDate: published_at,
			customData: `<language>${lang}</language>`,
		});
	}
}

export const get = () =>
	rss({
		title: SITE_METADATA.name,
		description: utils.translate("site.description", "ru"),
		site: import.meta.env.SITE,
		items,
	});
