import { defineConfig } from 'astro/config';

import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  site: 'https://yarkov.tech',
  integrations: [solid()],
  markdown: {
    syntaxHighlight: 'prism',
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
