export const DEFAULT_LANGUAGE: LanguageKeys = "ru";

/* Show banner about website development */
export const IS_SITE_UNDER_CONSTRUCTION =
	import.meta.env.IS_SITE_UNDER_CONSTRUCTION === "true" ? true : false;

export const SUPPORTED_LANGUAGES: SupportedLanguages = ["ru", "en"];

export const SITE_METADATA: SiteMetadataType = {
	title: "Sergey Yarkov",
	name: "yarkov.tech",
	author: "Sergey Yarkov",
	themeColor: "#1e2327",
};
