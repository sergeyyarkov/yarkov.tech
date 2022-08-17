import type { AstroGlobal, MDXInstance } from "astro";
import * as utils from "@utils/url";
import { DEFAULT_LANGUAGE } from "@root/config";
import languages from "./languages";

export function getTranslatedArticles(Astro: Readonly<AstroGlobal>): MDXInstance<ArticleType>[] {
	const data = import.meta.glob<MDXInstance<ArticleType>>("../../content/articles/**/*.mdx", { eager: true });
	const modules: Record<string, Record<string, MDXInstance<ArticleType>>> = {};
	const siteLang = utils.getLanguageFromURL(Astro.url.pathname);
	const articles: MDXInstance<ArticleType>[] = [];

	for (const module of Object.values(data)) {
		const splitted = module.file.split("/");
		const lang = splitted.at(-2);
		const name = splitted.at(-3);
		if (!modules[name]) modules[name] = {};
		modules[name][lang] = module;
	}

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

export function useTranslation(Astro: Readonly<AstroGlobal>): (key: UIDictionaryKeys) => string | undefined {
	const lang = utils.getLanguageFromURL(Astro.url.pathname);
	return function translate(key: UIDictionaryKeys): string | undefined {
		const string: string | undefined = translations[lang]?.[key] || translations[DEFAULT_LANGUAGE][key];
		if (string === undefined) console.log(`Cannot find any string for translation key "${key}" on "${Astro.url.pathname}" page.`);
		return string;
	};
}
