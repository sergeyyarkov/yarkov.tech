import { MDXInstance } from "astro";

export const transformArticles = (articles: MDXInstance<ArticleType>[]): ArticleType[] =>
	articles.map((article) => ({
		slug: article.frontmatter.slug,
		title: article.frontmatter.title,
		description: article.frontmatter.description,
		author: article.frontmatter.author,
		tags: article.frontmatter.tags,
		published_at: article.frontmatter.published_at,
		lang: article.frontmatter.lang,
	}));

export const sortArtcilesByDate = (articles: ArticleType[]): ArticleType[] => {
	return articles.sort(
		(a, b) => new Date(b.published_at).valueOf() - new Date(a.published_at).valueOf()
	);
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

export const findArticlesBySearch = (
	search: string,
	articles: ArticleBlockType
): ArticleBlockType => {
	const matched: Array<ArticleType> = [];

	search = search.toLocaleLowerCase();

	for (const year in articles) {
		for (const article of articles[year]) {
			const title = article.title.toLocaleLowerCase();
			const description = article.description.toLocaleLowerCase();
			const match = title.includes(search) || description.includes(search);

			if (match) matched.push(article);
		}
	}

	return formatToArticleBlocks(matched);
};

export const findArticlesByTags = (
	tags: string[],
	articles: ArticleBlockType
): ArticleBlockType => {
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
