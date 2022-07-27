export {};

declare global {
	interface Window {
		theme?: ThemeModeType | undefined;
	}

	type ArticleType = {
		title: string;
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

	type ArticleBlockType = {
		[year: number]: ArticleType[];
	};

	type ThemeModeType = 'light' | 'dark';

	type SiteConfigType = {
		defaultTheme: ThemeModeType;
	};
}
