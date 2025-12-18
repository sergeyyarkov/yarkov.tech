import type { MarkdownHeading } from "astro";
import { DEFAULT_LANGUAGE } from "@root/constants";
import { ArticleQuery } from "../graphql/graphql";

/**
 * If there is a translation of an article in the current language of the page,
 * the remaining articles with other translations should be removed.
 */
export function filterArticlesByPageLang(
	articles: ArticleQuery["article"][number]["translations"],
	pageLang: LanguageKeys
) {
	if (!articles) return [];
	if (articles && articles.length >= 2) {
		const pageLangArticles = articles.filter((a) => a && a.languages_code?.code.split("-")[0] === pageLang);
		if (pageLangArticles.length !== 0) return pageLangArticles;
		return articles;
	}
	return articles;
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

export function formatToArticleBlocks(articles: ArticleQuery["article"][0]["translations"]) {
	const blocks: Record<string, ArticleQuery["article"][0]["translations"]> = {};

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

export type MarkdownHeadingToc = MarkdownHeading & { subheadings?: MarkdownHeading[] };

export function buildToc(headings: MarkdownHeading[], maxDepth: number = 2) {
	const toc: MarkdownHeadingToc[] = [];
	const parentHeadings = new Map();

	headings.forEach((h) => {
		const heading = { ...h, subheadings: [] };
		parentHeadings.set(heading.depth, heading);
		if (heading.depth === 1) {
			toc.push(heading);
		} else if (heading.depth <= maxDepth) {
			parentHeadings.get(heading.depth - 1)?.subheadings.push(heading);
		}
	});
	return toc;
}
