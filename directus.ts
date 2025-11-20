import { createDirectus, graphql, staticToken } from "@directus/sdk";
import { DIRECTUS_TOKEN, DIRECTUS_URL } from "astro:env/server";
import type { Article, ArticleTranslation, Schema, Tag } from "./directus-schema";

const directus = createDirectus<Schema>(DIRECTUS_URL)
	.with(staticToken(DIRECTUS_TOKEN))
	.with(graphql());

export async function fetchArticleTranslationsBySlug(
	slug: string
): Promise<ArticleTranslation | null> {
	const data = await directus.query<{ article_translations: ArticleTranslation[] }>(`
		query Article_translations {
			article_translations(
				filter: {
					slug: {
						_eq: "${slug}"
					}
				}
			) {
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

	if (data.article_translations.length === 0) return null;

	return { ...data.article_translations[0] };
}

export async function fetchArticles(): Promise<Article[]> {
	const data = await directus.query<{ article: Article[] }>(`
		query Article {
			article {
				translations(
					filter: { 
						status: { _eq: "published" } 
					}
				) {
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

	return data.article;
}

export async function fetchRecentArticles(): Promise<Article[]> {
	const data = await directus.query<{ article: Article[] }>(`
		query Article {
			article {
				translations(
					filter: { 
						status: { _eq: "published" } 
					}
				) {
					title
					cover_image { 
						id
						title
					}
					slug
					pub_date
					views
					languages_code { code }
				}
			}
		}
	`);

	return data.article;
}

export async function incArticleTranslationViews(
	article: Pick<ArticleTranslation, "id" | "views">
): Promise<number> {
	const data = await directus.query<{ update_article_translations_item: { views: number } }>(`
		mutation Update_article_translations_item {
			update_article_translations_item(id: ${article.id}, data: { views: ${article.views + 1} }) {
				views
			}
		}
	`);
	return data.update_article_translations_item.views;
}

export async function fetchTags(): Promise<Tag[]> {
	const data = await directus.query<{ tag: Tag[] }>(`
		query Tag { 
			tag { 
				id 
				title 
			} 
		}
	`);
	return data.tag;
}

export default directus;
