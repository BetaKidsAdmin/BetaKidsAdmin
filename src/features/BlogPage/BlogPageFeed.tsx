import NextLink from 'components/NextLink';
import { format } from 'date-fns';
import { useRouter } from 'next/router';

export const BlogPageFeed = ({ posts, pagination }) => {
  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">News</h2>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <p className="text-sm text-gray-500">
                <time dateTime={post.date}>{format(new Date(post.date), 'PP')}</time>
              </p>
              <NextLink href={`/blogs/news/${post.slug}`} className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.content}...</p>
              </NextLink>
              <div className="mt-3">
                <NextLink
                  href={`/blogs/news/${post.slug}`}
                  className="text-base font-semibold text-red-500 hover:text-red-400"
                >
                  Read full story
                </NextLink>
              </div>
            </div>
          ))}
        </div>
        <Pagination pagination={pagination} />
      </div>
    </div>
  );
};

const Pagination = ({ pagination }) => {
  const router = useRouter();

  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-center sm:px-0 mt-16">
      {/* <div className="-mt-px w-0 flex-1 flex">
        <a
          href="#"
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          Previous
        </a>
      </div> */}
      <div className="hidden md:-mt-px md:flex">
        {Array.from({ length: pagination?.allPages ?? 0 }).map((_, i) => (
          <NextLink
            key={i}
            href={i + 1 === 1 ? '/blogs' : `/blogs/page-${i + 1}`}
            className={
              (i + 1 === 1 && router.asPath === '/blogs') || router.asPath === `/blogs/page-${i + 1}`
                ? 'border-red-500 text-red-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
            }
          >
            {i + 1}
          </NextLink>
        ))}
      </div>
      {/* <div className="-mt-px w-0 flex-1 flex justify-end">
        <a
          href="#"
          className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          Next
          <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </a>
      </div> */}
    </nav>
  );
};
