import rss from "@astrojs/rss";
import { SITE_METADATA, URL_BLOG_PREFIX } from "@root/constants";
import { createRelativeArticleUrl } from "@root/utils";
import * as utils from "@i18n/utils";
import { getArticleList } from "../queries";

// TODO: generate feed for RU, EN, ... languages
export async function GET() {
	const articles = (await getArticleList()).flatMap((a) => a.translations);
	return rss({
		title: SITE_METADATA.name,
		description: utils.translate("site.description", "ru"),
		site: "https://yarkov.tech",
		items: articles
			.filter((a) => !!a)
			.map((a) => {
				return {
					title: a.title,
					pubDate: a.pub_date,
					description: `${a.description}`,
					link: createRelativeArticleUrl(
						{ slug: a.slug, pubDate: a.pub_date, articleLang: a.languages_code?.code.split("-")[0] || "" },
						URL_BLOG_PREFIX
					),
					customData: `<language>${a.languages_code?.code}</language>`,
				};
			}),
	});
}
