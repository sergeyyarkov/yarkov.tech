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
