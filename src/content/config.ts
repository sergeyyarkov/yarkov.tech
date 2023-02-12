import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		coverImage: z.string().optional(),
		author: z.string(),
		tags: z.string().array().optional(),
		description: z.string(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
	}),
});

const tags = defineCollection({
	schema: z.object({
		title: z.string(),
	}),
});

const authors = defineCollection({
	schema: z.object({
		firstName: z.string(),
		lastName: z.string(),
	}),
});

export const collections = { blog, tags, authors };
