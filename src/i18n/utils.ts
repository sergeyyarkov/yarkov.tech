import languages from "./languages";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "@root/constants";

function transformExports<T>(modules: Record<string, { default: T }>) {
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

export const getLanguageFromURL = (pathname: string): LanguageKeys => {
	const lang = pathname.split("/")[1] as LanguageKeys;
	if (Object.hasOwn(languages, lang)) return lang;
	return DEFAULT_LANGUAGE;
};

export const removeLangFromURL = (pathname: string): string => {
	return pathname.split("/").slice(2).join("/");
};
