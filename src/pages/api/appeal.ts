import { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, clientAddress }) => {
	const data = await request.formData();
	return new Response("done.", { status: 200 });
};
