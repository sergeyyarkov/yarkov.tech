import type { AstroGlobal, MDXInstance } from "astro";
import * as utils from "@utils/url";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "@root/config";
import languages from "./languages";

type TranslatedArticlesType = Record<string, Record<LanguageKeys, MDXInstance<ArticleType>> | Record<string, never>>;

export function formatArticlesByLangs(data: Record<string, MDXInstance<ArticleType>>): TranslatedArticlesType {
	const modules: TranslatedArticlesType = {};

	for (const module of Object.values(data)) {
		const splitted = module.file.split("/");
		const lang = splitted.at(-2);
		const name = splitted.at(-3);

		if (!modules[name]) modules[name] = {};
		if (!module.frontmatter.draft) modules[name][lang] = module;
	}

	return modules;
}

export function getLanguageKeys(): Array<string> {
	return Object.keys(languages).filter((lang) => SUPPORTED_LANGUAGES.includes(lang as LanguageKeys));
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
