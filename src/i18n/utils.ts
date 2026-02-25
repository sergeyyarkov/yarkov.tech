import type { AstroGlobal } from "astro";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "@root/constants";
import languages from "./languages";

export function useTranslation(Astro: Readonly<AstroGlobal>): (key: UIDictionaryKeys) => string {
	const pageLang = getLanguageFromURL(Astro.url.pathname);
	return (key: UIDictionaryKeys) => translate(key, pageLang);
}

export function getLanguageKeys(): Array<string> {
	return Object.keys(languages).filter((lang) => SUPPORTED_LANGUAGES.includes(lang as LanguageKeys));
}

export function getLanguageFromURL(pathname: string): LanguageKeys {
	const splittedPathName = pathname.split("/");
	let lang = splittedPathName[1] as LanguageKeys;

	if ((lang as string) === "blog") lang = splittedPathName[2] as LanguageKeys;

	if (Object.hasOwn(languages, lang)) return lang;
	return DEFAULT_LANGUAGE;
}

// Call only from ./src/[lang]/page.astro
export function isPageLangSupported(Astro: Readonly<AstroGlobal>) {
	const params = Astro.params as { lang: string };
	if (SUPPORTED_LANGUAGES.includes(params.lang as LanguageKeys)) return true;
	return false;
}

export function removeLangFromURL(pathname: string): string {
	const splittedPath = pathname.split("/");
	if (splittedPath.length >= 3) return "/" + splittedPath.slice(2).join("/");
	return pathname;
}

function transformExports<T>(modules: Record<string, { default: T }>) {
	const translations: Record<string, T> = {};
	for (const [path, module] of Object.entries(modules)) {
		const [, lang] = path.split("/");
		translations[lang] = module.default;
	}
	return translations;
}

const translations = transformExports<Record<string, UIDictionaryKeys>>(import.meta.glob("./*/ui.ts", { eager: true }));

export function translate(key: UIDictionaryKeys, lang: LanguageKeys): string {
	const value = translations[lang]?.[key] || translations[DEFAULT_LANGUAGE][key];
	if (value === undefined) console.log(`Cannot find any string for translation key "${key}".`);
	return value;
}
