import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16'
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10'
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12'
  },
  {
    title: 'Writing effective landing page copy',
    href: '#',
    description:
      'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
    date: 'Jan 29, 2020',
    datetime: '2020-01-29'
  }
];

const TheSciencePage = ({ navigation, footer }) => {
  return (
    <Layout navigation={navigation} footer={footer}>
      <main className="py-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <h1 className="text-red-400 mt-4 text-4xl tracking-tight font-extrabold  sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  Healthy Family Blog
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Immune System Support for Healthier Kids & Happier Families.
                </p>
                <div className="mt-5 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-500 md:py-4 md:text-lg md:px-10"
                    >
                      Buy BetaKIDS®
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div className="px-4 py-8 sm:px-10">
                <div className="relative mx-auto w-full lg:max-w-md">
                  <img className="w-full" src="/images/Blogging-pana.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">News</h2>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-3">
                  <a href={post.href} className="text-base font-semibold text-red-500 hover:text-red-400">
                    Read full story
                  </a>
                </div>
              </div>
            ))}
          </div>
          <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 mt-16">
            <div className="-mt-px w-0 flex-1 flex">
              <a
                href="#"
                className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                Previous
              </a>
            </div>
            <div className="hidden md:-mt-px md:flex">
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                1
              </a>
              {/* Current: "border-red-500 text-red-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
              <a
                href="#"
                className="border-red-500 text-red-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                aria-current="page"
              >
                2
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                3
              </a>
              <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                ...
              </span>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                8
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                9
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                10
              </a>
            </div>
            <div className="-mt-px w-0 flex-1 flex justify-end">
              <a
                href="#"
                className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Next
                <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();

  return {
    props: {
      navigation,
      footer
    }
  };
};

export default TheSciencePage;
