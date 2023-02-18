import languages from "@i18n/languages";
import uiKeys from "@i18n/ru/ui";

export {};

declare global {
	interface Window {
		theme?: ThemeModeType | undefined;
		addEventListener<K extends keyof CustomEventMap>(
			type: K,
			listener: (this: Window, ev: CustomEventMap[K]) => void
		): void;
	}

	interface CustomEventMap {
		onthemetoggled: CustomEvent<ThemeModeType>;
	}

	type LanguageKeys = keyof typeof languages;
	type UIDictionaryKeys = keyof typeof uiKeys;
	type SupportedLanguages = LanguageKeys[];

	type ThemeModeType = "light" | "dark";

	type SiteMetadataType = {
		title: string;
		name: string;
		author: string;
		themeColor: string;
		contacts?: {
			email?: string;
			telegram?: string;
			github?: string;
		};
		nav: Array<{ key: UIDictionaryKeys; url: string }>;
	};
}
