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

export async function getContacts() {
	const ContactsQuery = graphql(`
		query ContactsQuery {
			global {
				email
				github
				telegram
			}
		}
	`);

	const result = await execute(ContactsQuery);

	return result.data?.global;
}

export async function getSiteSettings() {
	const SiteSettingsQuery = graphql(`
		query SiteSettingsQuery {
			global {
				ym_counter
				recent_articles_limit
				github
			}
		}
	`);

	const result = await execute(SiteSettingsQuery);

	return result.data?.global;
}
