import type { IArticle } from '@root/interfaces';

import { MarkdownInstance } from 'astro';

export const transformArticles = (articles: MarkdownInstance<IArticle>[]): IArticle[] =>
	articles.map((article) => ({
		title: article.frontmatter.title,
		author: article.frontmatter.author,
		tags: article.frontmatter.tags,
		published_at: article.frontmatter.published_at,
	}));

export const sortArtcilesByDate = (articles: IArticle[]): IArticle[] => {
	return articles.sort((a, b) => new Date(b.published_at).valueOf() - new Date(a.published_at).valueOf());
};

export const filterArticlesByYear = (articles: IArticle[]): { [year: number]: IArticle[] } => {
	const filtered = {};

	for (const article of articles) {
		const year = new Date(article.published_at).getFullYear();

		if (!filtered[year]) filtered[year] = [];

		filtered[year].push(article);
	}

	return filtered;
};
