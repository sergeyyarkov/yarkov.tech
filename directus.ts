import { createDirectus, graphql, staticToken } from "@directus/sdk";
import { DIRECTUS_TOKEN, DIRECTUS_URL } from "astro:env/server";
import type { Schema } from "./directus-schema";

const directus = createDirectus<Schema>(DIRECTUS_URL)
	.with(staticToken(DIRECTUS_TOKEN))
	.with(graphql());

export default directus;
