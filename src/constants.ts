import siteconfig from "../siteconfig.json";

export const DEFAULT_LANGUAGE: LanguageKeys = "ru";
export const IS_SITE_UNDER_CONSTRUCTION = siteconfig.isSiteUnderConstruction;
export const SUPPORTED_LANGUAGES: SupportedLanguages = ["ru", "en"];
export const URL_BLOG_PREFIX = "blog";
export const SITE_METADATA: SiteMetadataType = {
	title: siteconfig.globalTitle,
	name: siteconfig.name,
	author: siteconfig.author,
	themeColor: "#1e2327",
	contacts: siteconfig.contacts,
	nav: [
		{ key: "navigation.articles", url: "/articles/" },
		{ key: "navigation.projects", url: "/projects/" },
		{ key: "navigation.about", url: "/about/" },
		{ key: "navigation.contacts", url: "/contacts/" },
	],
};
