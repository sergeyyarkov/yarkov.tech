export function removeSlashes(string: string): string {
	return string.replaceAll("/", "");
}

export function isEmail(email: string): boolean {
	return new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/).test(email);
}

export function isURL(url: string): boolean {
	return new RegExp(
		/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\\/~+#-]*[\w@?^=%&\\/~+#-])/
	).test(url);
}

export function findDuplicates(array: string[]): string[] {
	return array.filter((item, i) => array.indexOf(item) !== i);
}

export function encodeString(string: string, slice: number = 10) {
	return Buffer.from(string)
		.toString("base64")
		.slice(0, slice)
		.toLocaleLowerCase()
		.replace(/[^a-zA-Z]+/g, "");
}
