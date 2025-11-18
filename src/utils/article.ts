import type { MarkdownHeading } from "astro";
import type { CollectionEntry } from "astro:content";
import { DEFAULT_LANGUAGE } from "@root/constants";
import type { ArticleTranslation } from "@/directus-schema";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkPrism from "remark-prism";
import remarkToc from "remark-toc";
import remarkRehype from "remark-rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { escape } from "html-escaper";
import { h } from "hastscript";
import { toString } from "hast-util-to-string";
import { selectAll } from "hast-util-select";

/**
 * If there is a translation of an article in the current language of the page,
 * the remaining articles with other translations should be removed.
 */
export function removeArticleDuplicates(
	articles: ArticleTranslation[] | null,
	pageLang: LanguageKeys
): ArticleTranslation[] {
	if (!articles) return [];
	if (articles && articles.length >= 2) {
		const pageLangArticles = articles.filter((a) => {
			return (
				typeof a.languages_code === "object" && a.languages_code.code.split("-")[0] === pageLang
			);
		});
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

export function formatToArticleBlocks(articles: CollectionEntry<"blog">[]) {
	const blocks: Record<string, any[]> = {};
	articles.forEach((a) => {
		const year = new Date(a.pub_date).getFullYear();
		if (!blocks[year]) blocks[year] = [];
		blocks[year].push({
			id: a.id,
			title: a.title,
			// tags: a.tags,
			pubDate: a.pub_date,
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

export async function markdownToHTML(content: string): Promise<string> {
	const createAnchorLabel = (heading: string) => {
		const node = h("span.anchor-label", escape(heading));
		if (node.properties) node.properties["is:raw"] = true;
		return node;
	};

	const file = await unified()
		.use(remarkParse)
		.use(remarkToc, { heading: "(table[ -]of[ -])?contents?|toc|содержание", maxDepth: 2 })
		.use(remarkPrism as any)
		.use(remarkRehype)
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings, {
			properties: {
				class: "anchor-link",
			},
			behavior: "after",
			group: ({ tagName }) =>
				h(`div.heading-wrapper.level-${tagName}`, {
					tabIndex: -1,
				}),
			content: (heading) => [
				h(
					`span.anchor-icon`,
					undefined,
					h(
						"svg",
						{
							width: 18,
							height: 18,
							version: 1.1,
							viewBox: "0 0 16 16",
							xlmns: "http://www.w3.org/2000/svg",
							ariaHidden: "true",
							"data-filter": "none",
						},
						h("path", {
							fillRule: "evenodd",
							fill: "currentcolor",
							d: "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z",
						})
					)
				),
				createAnchorLabel(toString(heading)),
			],
		})
		.use(rehypeStringify)
		.process(content);

	return String(file);
}
