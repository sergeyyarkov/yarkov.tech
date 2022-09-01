import type { AstroGlobal, MDXInstance } from "astro";

import { formatArticlesByLangs } from "@i18n/utils";
import * as utils from "@utils/index";

export function fetchTranslatedArticles(Astro: Readonly<AstroGlobal>): MDXInstance<ArticleType>[] {
	const data = import.meta.glob<MDXInstance<ArticleType>>("../../content/articles/**/*.mdx", { eager: true });
	const modules = formatArticlesByLangs(data);
	const siteLang = utils.getLanguageFromURL(Astro.url.pathname);
	const articles: MDXInstance<ArticleType>[] = [];
	const push = (article: MDXInstance<ArticleType>, lang: LanguageKeys) => {
		articles.push(article);
		article.frontmatter.lang = lang;
	};

	for (const dirName of Object.keys(modules)) {
		const article = modules[dirName];
		const langs = Object.keys(article) as LanguageKeys[];

		for (const lang of langs) {
			if (lang !== siteLang) {
				if (langs.length === 1) {
					push(article[lang], lang);
				}

				if (!langs.includes(siteLang) && langs.length >= 2) {
					const fallbackLang = langs[0];
					const isPushed = articles.find(({ frontmatter }) => {
						return frontmatter.title === article[fallbackLang].frontmatter.title;
					});

					if (!isPushed) {
						push(article[fallbackLang], langs[fallbackLang]);
					}
				}
				continue;
			}

			push(article[lang], lang);
		}
	}

	return utils.getPublishedArticles(articles);
}
