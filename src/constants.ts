import siteconfig from "../siteconfig.json";

export const DEFAULT_LANGUAGE: LanguageKeys = "ru";
export const IS_SITE_UNDER_CONSTRUCTION = siteconfig.isSiteUnderConstruction;
export const SUPPORTED_LANGUAGES: SupportedLanguages = ["ru", "en"];
export const SITE_METADATA: SiteMetadataType = {
	title: siteconfig.globalTitle,
	name: "yarkov.tech",
	author: "Sergey Yarkov",
	themeColor: "#1e2327",
	contacts: siteconfig.contacts,
};
