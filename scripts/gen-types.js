import { generateDirectusTypes } from "directus-sdk-typegen";

async function generateTypes() {
	try {
		await generateDirectusTypes({
			outputPath: "./directus-schema.ts",
			directusUrl: process.env.DIRECTUS_URL,
			directusToken: process.env.DIRECTUS_TOKEN,
		});
	} catch (error) {
		console.error("Failed to generate types:", error);
	}
}

generateTypes();
