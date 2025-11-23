import type { MarkdownHeading } from "astro";
import { DEFAULT_LANGUAGE } from "@root/constants";
import type { ArticleTranslation } from "@/directus-schema";

/**
 * If there is a translation of an article in the current language of the page,
 * the remaining articles with other translations should be removed.
 */
export function removeArticleDuplicates(
	articleTranslations: ArticleTranslation[] | null,
	pageLang: LanguageKeys
): ArticleTranslation[] {
	if (!articleTranslations) return [];
	if (articleTranslations && articleTranslations.length >= 2) {
		const pageLangArticles = articleTranslations.filter((a) => {
			return (
				typeof a.languages_code === "object" && a.languages_code.code.split("-")[0] === pageLang
			);
		});
		if (pageLangArticles.length !== 0) return pageLangArticles;
		return articleTranslations;
	}
	return articleTranslations;
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

export function formatToArticleBlocks(articles: ArticleTranslation[]) {
	const blocks: Record<string, ArticleTranslation[]> = {};

	articles.forEach((a) => {
		const year = new Date(a.pub_date).getFullYear();
		if (!blocks[year]) blocks[year] = [];
		blocks[year].push({
			id: a.id,
			title: a.title,
			tags: a.tags,
			slug: a.slug,
			pub_date: a.pub_date,
		});
	});
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
