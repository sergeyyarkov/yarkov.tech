export function createDateFormatter(lang: string) {
	return new Intl.DateTimeFormat(lang, {
		timeZone: "UTC",
		month: "short",
		year: "numeric",
		day: "numeric",
	});
}
