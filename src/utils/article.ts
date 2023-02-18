import type { CollectionEntry } from "astro:content";
import { findDuplicates } from "./string";
import { removeLanguageCodeFromPath } from "./url";

/**
 * If there is a translation of an article in the current language of the page,
 * the remaining articles with other translations should be removed.
 *
 * @param entries Array of articles
 * @param pageLang Current language on page
 * @returns
 */
export function removeDuplicates(
	entries: CollectionEntry<"blog">[],
	pageLang: LanguageKeys
): CollectionEntry<"blog">[] {
	const ids = entries.map((a) => a.id) as string[];
	const duplicates = findDuplicates(ids.map((id) => removeLanguageCodeFromPath(id)));

	duplicates.forEach((id) => {
		const toDeleteIdxs: number[] = [];
		if (ids.indexOf(`${pageLang}/${id}`) !== -1) {
			entries.forEach((a, i) => {
				if (a.id !== `${pageLang}/${id}` && a.id.includes(id)) {
					toDeleteIdxs.push(i);
				}
			});
		}
		toDeleteIdxs.forEach((i) => entries.splice(i, 1));
	});

	return entries;
}
