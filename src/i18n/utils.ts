import type { AstroGlobal } from "astro";
import * as utils from "@utils/url";
import { DEFAULT_LANGUAGE } from "@root/config";
import languages from "./languages";

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
