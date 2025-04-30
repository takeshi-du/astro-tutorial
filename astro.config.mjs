// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ...他の設定...
  // ← サイトのドメイン部分も設定推奨
  site: 'https://takeshi-du.github.io',

  // ← この行を追加/修正
  base: '/astro-tutorial',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});