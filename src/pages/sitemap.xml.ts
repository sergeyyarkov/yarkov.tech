import type { APIContext } from "astro";
import { createRelativeArticleUrl } from "@root/utils";
import { getArticleList } from "../queries";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";

type SitemapURL = { loc: string; changefreq?: string; priority?: number; langs?: { lang: string; href: string }[] };

export async function GET(context: APIContext) {
	const site = context.site?.origin || "https://yarkov.tech";
	const articles = await getArticleList();

	const baseUrls: Array<SitemapURL> = [
		{ loc: `/`, changefreq: "weekly", priority: 1.0 },
		{ loc: `/articles/`, changefreq: "weekly", priority: 0.9 },
		{ loc: `/projects/`, changefreq: "monthly", priority: 0.8 },
		{ loc: `/about/`, changefreq: "monthly", priority: 0.7 },
	];

	const articleUrls: Array<SitemapURL> = [];

	articles.forEach((a) => {
		if (a.translations && a.translations.length >= 1) {
			const articlePageUrlLoc = a.translations[0];

			if (articlePageUrlLoc) {
				const articleLang = articlePageUrlLoc.languages_code?.code.split("-")[0] || DEFAULT_LANGUAGE;
				const loc = createRelativeArticleUrl({
					articleLang,
					pubDate: articlePageUrlLoc.pub_date,
					slug: articlePageUrlLoc.slug,
				});

				articleUrls.push({
					loc: `${site}${loc}`,
					langs: a.translations
						.filter((a) => !!a)
						.map((a) => ({
							lang: a.languages_code?.code.split("-")[0] || "",
							href: `${site}${createRelativeArticleUrl({
								articleLang: a.languages_code?.code.split("-")[0] || DEFAULT_LANGUAGE,
								pubDate: a.pub_date,
								slug: a.slug,
							})}/`,
						})),
				});
			}
		}
	});

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
		${baseUrls
			.map((url) => {
				return `<url>
									<loc>${site}${url.loc}</loc>
									${url.changefreq && `<changefreq>${url.changefreq}</changefreq>`}
									${url.priority && `<priority>${url.priority}</priority>`}
									${SUPPORTED_LANGUAGES.map(
										(lang) =>
											`<xhtml:link rel="alternate" hreflang="${lang}" href="${site}${
												lang !== DEFAULT_LANGUAGE ? `/${lang}` : ""
											}${url.loc}"/>`
									).join("")}
								</url>`;
			})
			.join("")}
			${articleUrls
				.map((url) => {
					return `
					<url>
						<loc>${url.loc}</loc>
						${url.langs?.map(({ lang, href }) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`).join("")}
					</url>
				`;
				})
				.join("")}
		</urlset>`;

	return new Response(sitemap, {
		status: 200,
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, max-age=3600",
		},
	});
}
