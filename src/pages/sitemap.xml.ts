import type { APIContext } from "astro";
// import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
	return new Response("sitemap", { status: 200 });
}

// export async function GET(context: APIContext) {
//   const site = context.site?.toString() || 'https://yourdomain.com';

//   // Get all collections
//   const posts = await getCollection('blog');
//   const projects = await getCollection('projects');

//   // Generate URLs for all content
//   const urls: Array<{ loc: string; changefreq?: string; priority?: number }> = [];

//   // Static pages
//   urls.push(
//     { loc: `${site}/`, changefreq: 'weekly', priority: 1.0 },
//     { loc: `${site}/blog/`, changefreq: 'weekly', priority: 0.9 },
//     { loc: `${site}/projects/`, changefreq: 'monthly', priority: 0.8 },
//     { loc: `${site}/about/`, changefreq: 'monthly', priority: 0.7 },
//   );

//   // Blog posts
//   posts
//     .filter(post => !post.data.draft)
//     .forEach(post => {
//       urls.push({
//         loc: `${site}/blog/${post.slug}/`,
//         changefreq: 'monthly',
//         priority: 0.8
//       });
//     });

//   // Projects
//   projects
//     .filter(project => !project.data.draft)
//     .forEach(project => {
//       urls.push({
//         loc: `${site}/projects/${project.slug}/`,
//         changefreq: 'monthly',
//         priority: 0.7
//       });
//     });

//   // Get all unique tags
//   const allTags = new Set<string>();
//   posts.forEach(post => {
//     post.data.tags?.forEach(tag => allTags.add(tag));
//   });

//   // Add tag pages
//   allTags.forEach(tag => {
//     urls.push({
//       loc: `${site}/tags/${encodeURIComponent(tag)}/`,
//       changefreq: 'weekly',
//       priority: 0.5
//     });
//   });

//   // Generate sitemap XML
//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${urls.map(url => `  <url>
//     <loc>${url.loc}</loc>${url.changefreq ? `
//     <changefreq>${url.changefreq}</changefreq>` : ''}${url.priority !== undefined ? `
//     <priority>${url.priority}</priority>` : ''}
//   </url>`).join('\n')}
// </urlset>`;

//   return new Response(sitemap, {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/xml',
//       'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
//     }
//   });
// }
