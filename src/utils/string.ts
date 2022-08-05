export function removeSlashes(string: string): string {
	return string.replaceAll("/", "");
}

export function isEmail(email: string): boolean {
	return new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/).test(email);
}
