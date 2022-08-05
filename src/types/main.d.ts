export {};

declare global {
	interface Window {
		theme?: ThemeModeType | undefined;
		addEventListener<K extends keyof CustomEventMap>(type: K, listener: (this: Window, ev: CustomEventMap[K]) => void): void;
	}

	interface CustomEventMap {
		onthemetoggled: CustomEvent<ThemeModeType>;
	}

	type SiteMetadataType = {
		title: string;
		name: string;
		author: string;
		description: string;
		themeColor: string;
		contacts: {
			email: string;
			githubUrl: string;
			telegramUrl: string;
		};
		nav: Array<{ name: string; url: string }>;
		projects: Array<{
			icon: string;
			name: string;
			year: string;
			description: string;
			sourceUrl?: string | undefined;
			demoUrl?: string | undefined;
			articleUrl?: string | undefined;
		}>;
		skills: Array<{ title: string; list: Array<{ icon: string; name: string }> }>;
	};

	type ArticleType = {
		slug: string;
		title: string;
		description: string;
		author: string;
		tags: Array<string>;
		published_at: string;
	};

	type ProjectType = {
		icon: string;
		name: string;
		year: string;
		description: string;
		sourceUrl?: string | undefined;
		articleUrl?: string | undefined;
		demoUrl?: string | undefined;
	};

	type SkillsType = {
		title: string;
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
