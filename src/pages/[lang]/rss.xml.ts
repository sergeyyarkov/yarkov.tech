import { APIContext } from "astro";
import { DEFAULT_LANGUAGE, SITE_METADATA, URL_BLOG_PREFIX } from "@root/constants";
import { createRelativeArticleUrl } from "@root/utils";
import { getArticleTranslationsRSSList } from "../../queries";
import { getRssString } from "@astrojs/rss";
import * as utils from "@i18n/utils";

export async function GET(context: APIContext) {
	const params = context.params as { lang: LanguageKeys };
	const articles = await getArticleTranslationsRSSList(params.lang);
	const rssString = await getRssString({
		site: context.site?.origin || "https://yarkov.tech",
		title: SITE_METADATA.name,
		description: utils.translate("site.description", params.lang),
		items: articles.map((a) => {
			const articleLang = a.languages_code?.code.split("-")[0] || DEFAULT_LANGUAGE;
			const link = createRelativeArticleUrl({ articleLang, pubDate: a.pub_date, slug: a.slug }, URL_BLOG_PREFIX);

			return {
				title: a.title,
				description: a.description,
				author: `${a.author?.email} (${a.author?.first_name} ${a.author?.last_name})`,
				pubDate: a.pub_date,
				categories: a.tags ? a.tags.filter((t) => !!t && !!t.tag_id).map((t) => t!.tag_id!.title) : [],
				link,
			};
		}),
	});

	return new Response(rssString, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
