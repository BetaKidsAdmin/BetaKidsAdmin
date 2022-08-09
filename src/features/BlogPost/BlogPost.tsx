import NextLink from 'components/NextLink';
import { format } from 'date-fns';

import { GetBlogPostResponse } from 'types/takeshape';

export interface BlogPostProps {
  post: GetBlogPostResponse['blogPostList']['items'][0];
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <Vectors />
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-red-400 sm:text-4xl">
              {post.title}
            </span>
          </h1>
          <div className="mt-4 text-gray-600 ">
            <time dateTime={post.date}>{format(new Date(post.date), 'PP')}</time>
          </div>
        </div>

        <div
          className="mt-6 prose prose-red prose-lg text-gray-500 mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-6 lg:mt-10 text-center">
          <NextLink href="/blog/news" className="text-lg font-extrabold text-red-400 ">
            ← Back to blog
          </NextLink>
        </div>
      </div>
    </div>
  );
};

const Vectors = () => (
  <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
    <svg
      className="absolute top-12 left-full transform translate-x-32"
      width={404}
      height={384}
      fill="none"
      viewBox="0 0 404 384"
    >
      <defs>
        <pattern
          id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
    </svg>
    <svg
      className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
      width={404}
      height={384}
      fill="none"
      viewBox="0 0 404 384"
    >
      <defs>
        <pattern
          id="f210dbf6-a58d-4871-961e-36d5016a0f49"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
    </svg>
    <svg
      className="absolute bottom-12 left-full transform translate-x-32"
      width={404}
      height={384}
      fill="none"
      viewBox="0 0 404 384"
    >
      <defs>
        <pattern
          id="d3eb07ae-5182-43e6-857d-35c643af9034"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
    </svg>
  </div>
);

export default BlogPost;
