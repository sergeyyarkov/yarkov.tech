import { DEFAULT_LANGUAGE } from "@root/config";
import languages from "@i18n/languages";

export const encode = (data: object) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

export const getLanguageFromURL = (pathname: string) => {
	const lang = pathname.split("/")[1];
	if (Object.hasOwn(languages, lang)) return lang;
	return DEFAULT_LANGUAGE;
};
