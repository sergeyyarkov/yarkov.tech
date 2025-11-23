import { graphql } from "../graphql";
import execute from "../graphql/execute";

export async function getTagList() {
	const TagsQuery = graphql(`
		query Tag {
			tag {
				id
				title
			}
		}
	`);

	const result = await execute(TagsQuery);

	if (!result.data) return [];

	return result.data.tag;
}
