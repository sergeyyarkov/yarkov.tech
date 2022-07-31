import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
	site: 'https://yarkov.tech',
	integrations: [solid(), compress({ img: false })],
	markdown: {
		syntaxHighlight: 'prism',
	},
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
	experimental: {
		integrations: true,
	},
});
