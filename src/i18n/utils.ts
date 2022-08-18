import type { AstroGlobal, MDXInstance } from "astro";
import * as utils from "@utils/url";
import { DEFAULT_LANGUAGE } from "@root/config";
import languages from "./languages";

type TranslatedArticlesType = Record<string, Record<LanguageKeys, MDXInstance<ArticleType>> | Record<string, never>>;

export function formatArticlesByLangs(data: Record<string, MDXInstance<ArticleType>>): TranslatedArticlesType {
	const modules: TranslatedArticlesType = {};

	for (const module of Object.values(data)) {
		const splitted = module.file.split("/");
		const lang = splitted.at(-2);
		const name = splitted.at(-3);
		if (!modules[name]) modules[name] = {};
		modules[name][lang] = module;
	}

	return modules;
}

export function getTranslatedArticles(Astro: Readonly<AstroGlobal>): MDXInstance<ArticleType>[] {
	const data = import.meta.glob<MDXInstance<ArticleType>>("../../content/articles/**/*.mdx", { eager: true });
	const modules = formatArticlesByLangs(data);
	const siteLang = utils.getLanguageFromURL(Astro.url.pathname);
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

export function getLanguageKeys(): Array<string> {
	return Object.keys(languages);
}

function transformExports<T>(modules: Record<string, { default: T }>) {
	const translations: Record<string, T> = {};
	for (const [path, module] of Object.entries(modules)) {
		const [, lang] = path.split("/");
		translations[lang] = module.default;
	}
	return translations;
}

const translations = transformExports<UIDictionaryKeys>(import.meta.glob("./*/ui.ts", { eager: true }));

export function translate(key: UIDictionaryKeys, lang: LanguageKeys): string | undefined {
	const string: string | undefined = translations[lang]?.[key] || translations[DEFAULT_LANGUAGE][key];
	if (string === undefined) console.log(`Cannot find any string for translation key "${key}".`);
	return string;
}

export function useTranslation(Astro: Readonly<AstroGlobal>): (key: UIDictionaryKeys) => string | undefined {
	const lang: LanguageKeys = utils.getLanguageFromURL(Astro.url.pathname) as LanguageKeys;
	return (key: UIDictionaryKeys) => translate(key, lang);
}
