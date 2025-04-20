// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 'blog' という名前のコレクションを定義
const blogCollection = defineCollection({
  type: 'content', // Markdown や MDX ファイルの場合
  schema: ({ image }) => z.object({ // フロントマターの型定義 (Zodを使用)
    title: z.string(),
    pubDate: z.coerce.date(), // 文字列を日付型に変換
    description: z.string().optional(), // オプショナルな項目
    tags: z.array(z.string()).optional(), // 文字列の配列 (オプショナル)
    url: z.string().optional(), // ← 追加: カスタムURL用のフィールド (オプショナル)
    // ↓ アイキャッチ画像用のフィールドを追加
    featureImage: image().optional(), // 画像はオプショナルにする場合
    featureImageAlt: z.string().optional(), // 代替テキストもオプショナルに
    // ↑ ここまで追加
  }),
});

// 定義したコレクションをエクスポート
export const collections = {
  'blog': blogCollection,
};