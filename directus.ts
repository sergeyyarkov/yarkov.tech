import { createDirectus, graphql, staticToken } from "@directus/sdk";
import { DIRECTUS_TOKEN } from "astro:env/server";
import type { Schema } from "./directus-schema";

const directus = createDirectus<Schema>("https://directus.yarkov.tech")
	.with(staticToken(DIRECTUS_TOKEN))
	.with(graphql());

export default directus;
