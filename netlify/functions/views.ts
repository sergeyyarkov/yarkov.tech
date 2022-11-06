import { Handler } from "@netlify/functions";

import Redis from "ioredis";

const redis = new Redis({
	host: process.env.REDIS_HOST,
	port: Number.parseInt(process.env.REDIS_PORT || "6379", 10),
	password: process.env.REDIS_PASSWORD,
});

const getViewsBySlug = async (slug: string): Promise<number> => {
	let views = 1;
	const data = await redis.get(`views:${slug}`);
	if (data) views = Number.parseInt(data, 10);
	if (Number.isNaN(views)) views = 1;
	return views;
};

const handler: Handler = async (event) => {
	const slug = event.queryStringParameters?.slug;

	switch (event.httpMethod) {
		case "GET": {
			if (!slug) return { statusCode: 400, body: "Bad request." };
			const views = await getViewsBySlug(slug);
			return { statusCode: 200, body: views.toString() };
		}
		case "POST": {
			if (!slug) return { statusCode: 400, body: "Bad request." };
			const views = await redis.incr(`views:${slug}`);
			return { statusCode: 200, body: views.toString() };
		}
		default: {
			return {
				statusCode: 500,
				body: "Unrecognized HTTP Method, must be one of GET/POST",
			};
		}
	}
};

export { handler };
