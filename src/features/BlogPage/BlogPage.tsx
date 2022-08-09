import { BlogPageFeed } from 'features/BlogPage/BlogPageFeed';
import { HeroSectionMediumWithIllustration } from 'features/Global/HeroSectionMediumWithIllustration/HeroSectionMediumWithIllustration';
import { GetBlogPageResponse, GetBlogPostsResponse } from 'types/takeshape';

export interface PageProps {
  page: GetBlogPageResponse['blogPage'];
  posts: GetBlogPostsResponse['blogPostList']['items'][0];
}

function pageChildToComponent() {
  const PageComponent = (component, index = 0) => {
    switch (component.__typename) {
      case 'HeroSectionMediumWithIllustrationComponent':
        return <HeroSectionMediumWithIllustration key={index} {...component} />;

      default:
        return null;
    }
  };

  return PageComponent;
}

export const BlogPage = ({ page, posts }: PageProps) => (
  <div className="bg-white">
    {page?.components?.map(pageChildToComponent())}
    <BlogPageFeed posts={posts} />
  </div>
);

export default BlogPage;
