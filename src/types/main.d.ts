import uiKeys from "@i18n/ru/ui";
import languages from "@i18n/languages";
export {};

declare global {
	interface Window {
		theme?: ThemeModeType | undefined;
		addEventListener<K extends keyof CustomEventMap>(type: K, listener: (this: Window, ev: CustomEventMap[K]) => void): void;
	}

	interface CustomEventMap {
		onthemetoggled: CustomEvent<ThemeModeType>;
	}

	type LanguageKeys = keyof typeof languages;
	type UIDictionaryKeys = keyof typeof uiKeys;

	type SiteMetadataType = {
		title: string;
		name: string;
		author: string;
		themeColor: string;
		contacts: {
			email: string;
			githubUrl: string;
			telegramUrl: string;
		};
		nav: Array<{ key: UIDictionaryKeys; url: string }>;
		projects: Array<ProjectType>;
		skills: Array<SkillsType>;
	};

	type ArticleType = {
		slug: string;
		title: string;
		coverImage?: string | undefined;
		description: string;
		author: string;
		tags: Array<string>;
		published_at: string;
		lang?: string;
	};

	type ProjectType = {
		icon: string;
		name: string;
		year: string;
		description: Record<LanguageKeys, string>;
		sourceUrl?: string | undefined;
		articleUrl?: string | undefined;
		demoUrl?: string | undefined;
	};

	type SkillsType = {
		title: Record<LanguageKeys, string>;
		list: Array<{ icon?: string | undefined; name: string }>;
	};

	type ContactFieldsType = {
		name: string;
		email: string;
		subject: string;
		message: string;
		"bot-field": string;
	};

	type ArticleBlockType = {
		[year: number]: ArticleType[];
	};

	type ThemeModeType = "light" | "dark";
}
