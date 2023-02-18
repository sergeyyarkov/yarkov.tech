import type { AstroGlobal } from "astro";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "@root/constants";
import languages from "./languages";

function transformExports<T>(modules: Record<string, { default: T }>): Record<string, string> {
	const translations: Record<string, T> = {};
	for (const [path, module] of Object.entries(modules)) {
		const [, lang] = path.split("/");
		translations[lang] = module.default;
	}
	return translations;
}

export function getLanguageKeys(): Array<string> {
	return Object.keys(languages).filter((lang) =>
		SUPPORTED_LANGUAGES.includes(lang as LanguageKeys)
	);
}

export function getLanguageFromURL(pathname: string): LanguageKeys {
	const lang = pathname.split("/")[1] as LanguageKeys;
	if (Object.hasOwn(languages, lang)) return lang;
	return DEFAULT_LANGUAGE;
}

export function removeLangFromURL(pathname: string): string {
	return pathname.split("/").slice(2).join("/");
}

const translations = transformExports(import.meta.glob("./*/ui.ts", { eager: true }));

const s = translations["ru"];

function translate(key: UIDictionaryKeys, lang: LanguageKeys): string | undefined {
	const value = translations[lang]?.[key] || translations[DEFAULT_LANGUAGE][key];
	if (value === undefined) console.log(`Cannot find any string for translation key "${key}".`);
	return value;
}

export function useTranslation(
	Astro: Readonly<AstroGlobal>
): (key: UIDictionaryKeys) => string | undefined {
	const pageLang = getLanguageFromURL(Astro.url.pathname);
	return (key: UIDictionaryKeys) => translate(key, pageLang);
}
