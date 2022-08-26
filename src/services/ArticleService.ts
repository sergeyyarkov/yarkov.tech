import type { AstroGlobal, MDXInstance } from "astro";
import { formatArticlesByLangs } from "@i18n/utils";
import { getLanguageFromURL } from "@utils/url";

class ArticleService {
	public getTranslatedArticles(Astro: Readonly<AstroGlobal>): MDXInstance<ArticleType>[] {
		const data = import.meta.glob<MDXInstance<ArticleType>>("../../content/articles/**/*.mdx", { eager: true });
		const modules = formatArticlesByLangs(data);
		const siteLang = getLanguageFromURL(Astro.url.pathname);
		const articles: MDXInstance<ArticleType>[] = [];

		for (const key of Object.keys(modules)) {
			const langs = Object.keys(modules[key]);
			for (const articleLang of langs) {
				const isNonDefaultLanguage = !langs.includes(siteLang) && langs.length === 1;
				const article = modules[key];

				if (articleLang === siteLang) {
					articles.push(article[siteLang]);
					article[siteLang].frontmatter.lang = siteLang;
				}

				if (isNonDefaultLanguage) {
					articles.push(article[articleLang]);
					article[articleLang].frontmatter.lang = articleLang;
				}
			}
		}

		return articles;
	}
}

export default new ArticleService();
