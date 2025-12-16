import { graphql } from "../graphql";
import execute from "../graphql/execute";

export async function getAboutMe(pageLang: string) {
	const AboutMeQuery = graphql(`
		query AboutMeQuery($pageLang: String!) {
			global_translations(filter: { languages_code: { code: { _contains: $pageLang } } }) {
				about
			}
		}
	`);

	const result = await execute(AboutMeQuery, { pageLang });

	if (!result.data || result.data.global_translations.length === 0) return null;

	return result.data.global_translations[0];
}
