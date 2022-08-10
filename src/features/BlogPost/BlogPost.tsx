import NextLink from 'components/NextLink';
import Wrapper from 'components/Wrapper/Content';
import { format } from 'date-fns';
import { ContentBody } from 'features/Content/ContentBody';
import { ContentBodyVertorDots } from 'features/Content/ContentBodyVertorDots';
import { ContentHeader } from 'features/Content/ContentHeader';

import { GetBlogPostResponse } from 'types/takeshape';

export interface BlogPostProps {
  post: GetBlogPostResponse['blogPostList']['items'][0];
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <ContentHeader heading={post.title} />

      <Wrapper>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <ContentBodyVertorDots />
          <ContentBody>
            <div className="mt-4 font-bold text-gray-600 ">
              <time dateTime={post.date}>{format(new Date(post.date), 'PP')}</time>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </ContentBody>
        </div>
      </Wrapper>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mt-6 lg:mt-10 text-center">
          <NextLink href="/blog/news" className="text-lg font-extrabold text-red-400 ">
            ← Back to blog
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
