import type { MarkdownHeading } from "astro";
import type { CollectionEntry } from "astro:content";
import { DEFAULT_LANGUAGE } from "@root/constants";
import slugify from "@sindresorhus/slugify";
import { findDuplicates } from "./string";
import { removeLanguageCodeFromPath } from "./url";

/**
 * If there is a translation of an article in the current language of the page,
 * the remaining articles with other translations should be removed.
 */
export function removeDuplicates(
	entries: CollectionEntry<"blog">[],
	pageLang: LanguageKeys
): CollectionEntry<"blog">[] {
	const ids = entries.map((a) => a.id) as string[];
	const duplicates = findDuplicates(ids.map((id) => removeLanguageCodeFromPath(id)));

	duplicates.forEach((id) => {
		const toDeleteIdxs: number[] = [];
		if (ids.indexOf(`${pageLang}/${id}`) !== -1) {
			entries.forEach((a, i) => {
				if (a.id !== `${pageLang}/${id}` && a.id.includes(id)) {
					toDeleteIdxs.push(i);
				}
			});
		}
		toDeleteIdxs.forEach((i) => entries.splice(i, 1));
	});

	return entries;
}

/**
 * This will create a relative url based on article entry.
 * `/en/blog/2023-01-01/my-first-article`
 */
export function createRelativeArticleUrl(
	params: { id: string; title: string; pubDate: Date },
	prefix: string = "blog"
): string {
	const articleLang = params.id.split("/")[0];
	const date = params.pubDate.toISOString().split("T")[0];
	const lang = articleLang !== DEFAULT_LANGUAGE ? "/" + articleLang : "";
	return `${lang}/${prefix}/${date}/${slugify(params.title, { lowercase: true })}`;
}

export function formatToArticleBlocks(articles: CollectionEntry<"blog">[]) {
	const blocks: Record<string, any[]> = {};
	articles.forEach((a) => {
		const year = a.data.pubDate.getFullYear();
		if (!blocks[year]) blocks[year] = [];
		blocks[year].push({
			id: a.id,
			title: a.data.title,
			tags: a.data.tags,
			pubDate: a.data.pubDate,
		});
	});
	return blocks;
}

export function getUniqueTags(articles: CollectionEntry<"blog">[]): string[] {
	return Array.from(new Set(articles.map((a) => a.data.tags).flat()));
}

export type MarkdownHeadingToc = MarkdownHeading & { subheadings: MarkdownHeading[] };

export function buildToc(headings: MarkdownHeading[]) {
	const toc: MarkdownHeadingToc[] = [];
	const parentHeadings = new Map();
	headings.forEach((h) => {
		const heading = { ...h, subheadings: [] };
		parentHeadings.set(heading.depth, heading);
		if (heading.depth === 1) {
			toc.push(heading);
		} else {
			parentHeadings.get(heading.depth - 1).subheadings.push(heading);
		}
	});
	return toc;
}
