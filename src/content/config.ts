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
			.or(z.date())
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		draft: z.boolean(),
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

const projects = defineCollection({
	schema: z.object({
		icon: z.string(),
		title: z.string(),
		year: z.number(),
		description: z.string(),
		sourceUrl: z.string(),
		demoUrl: z.string().nullable().optional(),
		articleUrl: z.string().nullable().optional(),
		draft: z.boolean(),
	}),
});

export const collections = { blog, tags, authors, projects };
