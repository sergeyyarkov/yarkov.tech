import { DEFAULT_LANGUAGE } from "@root/constants";
import { Article, Article_Translations, RecentArticleQuery } from "../graphql/graphql";

/**
 * If there is a translation of an article in the current language of the page,
 * the remaining articles with other translations should be removed.
 */
export function filterArticlesByPageLang<QueryT extends RecentArticleQuery>(
	articles: QueryT["article"][0],
	pageLang: LanguageKeys
) {
	const filteredArticles = articles.flatMap((a) => {
		// Filter by articles by page lang
		if (a.translations.length >= 2) {
			const pageLangTranslations = a.translations.filter((a) => a.languages_code?.code.split("-")[0] === pageLang);
			if (pageLangTranslations.length !== 0) return pageLangTranslations;

			// No articles found by page lang. Return first translation.
			return [a.translations[0]];
		}

		return a.translations;
	});

	return filteredArticles;
}

/**
 * This will create a relative url based on article entry.
 * `/en/blog/2023-01-01/my-first-article`
 */
export function createRelativeArticleUrl(
	params: { slug: string; articleLang: string; pubDate: string },
	prefix: string = "blog"
): string {
	const { pubDate, articleLang, slug } = params;
	const date = pubDate.split("T")[0];
	const lang = articleLang !== DEFAULT_LANGUAGE ? "/" + articleLang : "";
	return `${lang}/${prefix}/${date}/${slug}`;
}

export function formatToArticleBlocks<T>(articles: Array<T & Pick<Article_Translations, "pub_date">>) {
	const blocks: Record<string, Array<T & Pick<Article_Translations, "pub_date">>> = {};

	if (!articles) return {};

	for (const a of articles) {
		if (a) {
			const year = new Date(a?.pub_date).getFullYear();
			if (!blocks[year]) blocks[year] = [];
			blocks[year].push(a);
		}
	}

	return blocks;
}
