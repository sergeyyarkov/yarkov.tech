import type { APIContext } from "astro";
// import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
	const site = "https://yarkov.tech";
	const urls: Array<{ loc: string; changefreq?: string; priority?: number }> = [];

	urls.push(
		{ loc: `${site}/`, changefreq: "weekly", priority: 1.0 },
		{ loc: `${site}/articles/`, changefreq: "weekly", priority: 0.9 },
		{ loc: `${site}/projects/`, changefreq: "monthly", priority: 0.8 },
		{ loc: `${site}/about/`, changefreq: "monthly", priority: 0.7 }
	);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${urls
			.map(
				(url) => `<url>
				<loc>${url.loc}</loc>${
					url.changefreq
						? `
				<changefreq>${url.changefreq}</changefreq>`
						: ""
				}${
					url.priority !== undefined
						? `
				<priority>${url.priority}</priority>`
						: ""
				}
			</url>`
			)
			.join("\n")}
		</urlset>`;

	return new Response(sitemap, {
		status: 200,
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, max-age=3600",
		},
	});
}
