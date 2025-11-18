import { createDirectus, graphql, staticToken } from "@directus/sdk";
import { DIRECTUS_TOKEN, DIRECTUS_URL } from "astro:env/server";
import type { ArticleTranslation, Schema } from "./directus-schema";

const directus = createDirectus<Schema>(DIRECTUS_URL)
	.with(staticToken(DIRECTUS_TOKEN))
	.with(graphql());

export async function fetchArticleBySlug(slug: string): Promise<ArticleTranslation | null> {
	const data = await directus.query<{ article_translations: ArticleTranslation[] }>(`
		query Article_translations {
				article_translations(
						filter: {
								slug: {
										_eq: "${slug}"
								}
						}
				) {
						title
						tags {
								tag_id {
										title
								}
						}
						description
						slug
						content
						author {
								first_name
								last_name
						}
						pub_date
						views
						languages_code {
							code
						}
						cover_image {
								title
								filename_disk
						}
				}
		}
	`);

	if (data.article_translations.length === 0) return null;

	return data.article_translations[0];
}

export default directus;
