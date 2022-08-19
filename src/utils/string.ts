export function removeSlashes(string: string): string {
	return string.replaceAll("/", "");
}

export function isEmail(email: string): boolean {
	return new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/).test(email);
}

export function isURL(url: string): boolean {
	return new RegExp(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\\/~+#-]*[\w@?^=%&\\/~+#-])/).test(url);
}

export function normalizeLangTag(tag: string) {
	if (!tag.includes("-")) return tag.toLowerCase();
	const [lang, region] = tag.split("-");

	return lang.toLowerCase() + "-" + region.toUpperCase();
}
