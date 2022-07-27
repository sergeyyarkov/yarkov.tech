import { MarkdownInstance } from 'astro';

export const transformArticles = (articles: MarkdownInstance<ArticleType>[]): ArticleType[] =>
	articles.map((article) => ({
		title: article.frontmatter.title,
		author: article.frontmatter.author,
		tags: article.frontmatter.tags,
		published_at: article.frontmatter.published_at,
	}));

export const sortArtcilesByDate = (articles: ArticleType[]): ArticleType[] => {
	return articles.sort((a, b) => new Date(b.published_at).valueOf() - new Date(a.published_at).valueOf());
};

/**
 * This function will distribute the array of articles by years.
 */
export const formatToArticleBlocks = (articles: ArticleType[]): ArticleBlockType => {
	const blocks = {};

	for (const article of articles) {
		const year = new Date(article.published_at).getFullYear();

		if (!blocks[year]) blocks[year] = [];
		blocks[year].push(article);
	}

	return blocks;
};

export const findArticlesBySearch = (search: string, articles: ArticleBlockType): ArticleBlockType => {
	const matched: Array<ArticleType> = [];

	for (const year in articles) {
		for (const article of articles[year]) {
			const match = article.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
			if (match) matched.push(article);
		}
	}

	return formatToArticleBlocks(matched);
};

export const findArticlesByTags = (tags: string[], articles: ArticleBlockType): ArticleBlockType => {
	const matched: Array<ArticleType> = [];

	for (const year in articles) {
		for (const article of articles[year]) {
			const entries = article.tags.map((tag) => tag.toLocaleLowerCase());
			const match = entries.some((tag) => tags.includes(tag));

			if (match) matched.push(article);
		}
	}

	return formatToArticleBlocks(matched);
};
