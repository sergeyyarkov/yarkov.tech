import type { AstroGlobal, MDXInstance } from "astro";
import { formatArticlesByLangs } from "@i18n/utils";
import { getLanguageFromURL } from "@utils/url";

class ArticleService {
	public getTranslatedArticles(Astro: Readonly<AstroGlobal>): MDXInstance<ArticleType>[] {
		const data = import.meta.glob<MDXInstance<ArticleType>>("../../content/articles/**/*.mdx", { eager: true });
		const modules = formatArticlesByLangs(data);
		const siteLang = getLanguageFromURL(Astro.url.pathname);
		const articles: MDXInstance<ArticleType>[] = [];
		const push = (article: MDXInstance<ArticleType>, lang: LanguageKeys) => {
			articles.push(article);
			article.frontmatter.lang = lang;
		};

		for (const key of Object.keys(modules)) {
			const langs = Object.keys(modules[key]) as LanguageKeys[];
			for (const lang of langs) {
				const isNonDefaultLanguage = !langs.includes(siteLang) && langs.length === 1;
				const article = modules[key];

				if (lang === siteLang) push(article[siteLang], siteLang);
				if (isNonDefaultLanguage) push(article[lang], lang);
			}
		}

		return articles;
	}
}

export default new ArticleService();
