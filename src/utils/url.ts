export const encode = (data: object) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

export function removeLanguageCodeFromPath(path: string) {
	return path.replace(/^[a-zA-Z-]+\/+/, "");
}
