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

  return items;
}
