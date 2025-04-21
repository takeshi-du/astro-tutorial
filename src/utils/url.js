function getPostUrl(post) {
  const baseUrl = import.meta.env.BASE_URL;
  const basePath = baseUrl === '/' ? '' : baseUrl; // BASE_URLが '/' の場合はプレフィックスなし
  if (post.data.url) {
    // フロントマターにurlがあれば、ルートからのパスにbaseを追加して返す
    return `${basePath}/${post.data.url}/`;
  }
  // なければファイルパスに基づくデフォルトのパスにbaseを追加して返す
  return `${basePath}/blog/${post.slug}/`;
}
export { getPostUrl };