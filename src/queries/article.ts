import { graphql } from "../graphql";
import execute from "../graphql/execute";

export async function getArticleList() {
	const ArticleQuery = graphql(`
		query Article {
			article {
				translations(filter: { status: { _eq: "published" } }) {
					id
					title
					tags {
						tag_id {
							title
						}
					}
					description
					slug
					pub_date
					languages_code {
						code
						name
					}
				}
			}
		}
	`);

	const result = await execute(ArticleQuery);

	if (!result.data) return [];

	return result.data.article;
}

export async function getRecentArticleList() {
	const RecentArticleQuery = graphql(`
		query RecentArticle {
			article {
				translations(filter: { status: { _eq: "published" } }) {
					title
					cover_image {
						id
						title
					}
					slug
					pub_date
					views
					languages_code {
						code
					}
				}
			}
		}
	`);

	const result = await execute(RecentArticleQuery);

	if (!result.data) return [];

	return result.data.article;
}

export async function getArticleTranslationsBySlug(slug: string) {
	const ArticleTranslationQuery = graphql(`
		query Article_translations($slug: String!) {
			article_translations(filter: { slug: { _eq: $slug } }) {
				id
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
					name
				}
				cover_image {
					title
					type
					filename_disk
				}
				article_id {
					translations {
						slug
						languages_code {
							code
							name
						}
						pub_date
					}
				}
			}
		}
	`);

	const result = await execute(ArticleTranslationQuery, { slug });

	if (!result.data || result.data.article_translations.length === 0) return null;

	return { ...result.data.article_translations[0] };
}

// export async function incArticleTranslationViews() {
// 	const IncArticleTranslationViewsQuery = graphql(`
// 		mutation Update_article_translations_item($id: ID!) {
// 			update_article_translations_item(id: $id, data: { views: ${article.views + 1} }) {
// 				views
// 			}
// 		}
// 	`)
// }
