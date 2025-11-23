import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: [
		{
			[`${process.env.DIRECTUS_URL}/graphql`]: {
				headers: {
					Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
				},
			},
		},
	],
	documents: ["src/**/*.ts"],
	ignoreNoDocuments: true,
	generates: {
		"./src/graphql/": {
			preset: "client",
			config: {
				documentMode: "string",
			},
		},
		"./schema.graphql": {
			plugins: ["schema-ast"],
			config: {
				includeDirectives: true,
			},
		},
	},
};

export default config;
