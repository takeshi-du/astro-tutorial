// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ...他の設定...
  site: 'https://takeshi-du.github.io', // ← サイトのドメイン部分も設定推奨
  base: '/astro-tutorial', // ← この行を追加/修正
});