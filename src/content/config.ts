import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		draft: z.boolean().optional(),
		coverImage: z.string().nullable().optional(),
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
	}),
});

const skills = defineCollection({
	schema: z.object({
		title: z.string(),
		list: z
			.object({
				icon: z.string().optional(),
				title: z.string(),
			})
			.array(),
	}),
});

export const collections = { blog, tags, authors, projects, skills };
