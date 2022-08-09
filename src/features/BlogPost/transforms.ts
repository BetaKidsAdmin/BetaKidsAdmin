import { GetBlogPostResponse, GetBlogPostSlugsResponse } from 'types/takeshape';

export function getPage(response: GetBlogPostResponse) {
  const page = response?.blogPostList?.items?.[0];

  if (!page) {
    return null;
  }

  return page;
}

export function getPageParams(response: GetBlogPostSlugsResponse) {
  const items = response?.blogPostList?.items;

  if (!items) {
    return null;
  }

  return items.map((item) => ({
    params: {
      page: item.slug
    }
  }));
}
