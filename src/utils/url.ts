import { DEFAULT_LANGUAGE } from "@root/config";

export const encode = (data: object) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

export const getLanguageFromURL = (pathname: string) => {
	const langCodeMatch = pathname.match(/\/([a-z]{1}-?[a-z]{1})\//);
	return langCodeMatch ? langCodeMatch[1] : DEFAULT_LANGUAGE;
};
