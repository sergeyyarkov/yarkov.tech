import type { ExecutionResult } from "graphql";
import type { TypedDocumentString } from "./graphql";
import { DIRECTUS_URL_GRAPHQL, DIRECTUS_TOKEN } from "astro:env/server";

export default async function execute<TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
	const response = await fetch(DIRECTUS_URL_GRAPHQL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/graphql-response+json",
			Authorization: `Bearer ${DIRECTUS_TOKEN}`,
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	if (!response.ok) {
		throw new Error(`Network response was not ok. ${response.statusText}`);
	}

	return response.json() as ExecutionResult<TResult>;
}
