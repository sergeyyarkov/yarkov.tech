import { graphql } from "../graphql";
import execute from "../graphql/execute";

export async function getProjectList(pageLang: string) {
	const ProjectTranslationsQuery = graphql(`
		query Project_translations($pageLang: String!) {
			project_translations(filter: { languages_code: { code: { _contains: $pageLang } } }, sort: ["-year"]) {
				id
				title
				year
				description
				source_url
				demo_url
				article_url
				icon {
					filename_disk
				}
			}
		}
	`);

	const result = await execute(ProjectTranslationsQuery, { pageLang });

	if (!result.data || result.data.project_translations.length === 0) return [];

	return result.data.project_translations;
}
