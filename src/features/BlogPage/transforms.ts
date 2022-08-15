import { GetBlogPageResponse, GetBlogPostsResponse } from 'types/takeshape';

export function getPage(response: GetBlogPageResponse) {
  const page = response?.blogPage;

  if (!page) {
    return null;
  }

  return page;
}

export function getBlogPosts(response: GetBlogPostsResponse) {
  const items = response?.blogPostList?.items;

  if (!items) {
    return null;
  }

  return items.map((item) => {
    const contentText = item.content.replace(/<\/?p>/g, '');
    let trimmedContent = contentText.slice(0, 200);
    trimmedContent = trimmedContent.slice(0, Math.min(trimmedContent.length, trimmedContent.lastIndexOf(' ')));

    return { ...item, content: trimmedContent };
  });
}
