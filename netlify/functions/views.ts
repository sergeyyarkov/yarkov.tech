import { Handler } from "@netlify/functions";
import { redisClient } from "../../redis";

const getViewsBySlug = async (slug: string): Promise<number> => {
	let views = 1;
	const data = await redisClient.get(`views:${slug}`);
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
			const views = await redisClient.incr(`views:${slug}`);
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
