import { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';

import PageLoader from 'components/PageLoader';
import BlogPage from 'features/BlogPage/BlogPage';
import { GetBlogPageQuery, GetBlogPostListPostsQuery, GetBlogPostListTotalQuery } from 'features/BlogPage/queries';
import { getBlogPosts, getPage } from 'features/BlogPage/transforms';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';

import {
  GetBlogPageQueryResponse,
  GetBlogPageQueryVariables,
  GetBlogPostListPostsQueryResponse,
  GetBlogPostListPostsQueryVariables
} from 'types/takeshape';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const apolloClient = createAnonymousTakeshapeApolloClient();

const PagePage: NextPage = ({
  globalSettings,
  page,
  posts,
  pagination
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout globalSettings={globalSettings} seo={{ title: 'Page is loading...' }}>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout globalSettings={globalSettings} seo={{ title: page.seo.metaTitle }}>
      <BlogPage page={page} posts={posts} pagination={pagination} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const { globalSettings } = await getLayoutData();

  const { data, error } = await apolloClient.query<GetBlogPageQueryResponse, GetBlogPageQueryVariables>({
    query: GetBlogPageQuery
  });

  if (error) {
    throw new Error(`Failed to get page, received message ${error.message}`);
  }

  const page = getPage(data);

  const {
    data: {
      getBlogPostList: { total }
    }
  } = await apolloClient.query({ query: GetBlogPostListTotalQuery });
  const postsPerPage = 6;
  let from = 0;
  if (params.page) {
    from = params.page[0].slice(-1) - 1;
  }
  const { data: postsData, error: postsError } = await apolloClient.query<
    GetBlogPostListPostsQueryResponse,
    GetBlogPostListPostsQueryVariables
  >({
    query: GetBlogPostListPostsQuery,
    variables: {
      from: from * postsPerPage,
      size: postsPerPage
    }
  });

  const posts = postsError ? [] : getBlogPosts(postsData);

  return {
    props: {
      globalSettings,
      page,
      posts,
      pagination: {
        allPages: Math.ceil(total / postsPerPage),
        currentPage: from + 1
      }
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const size = 6;
  const {
    data: {
      getBlogPostList: { total }
    }
  } = await apolloClient.query({ query: GetBlogPostListTotalQuery });
  const maxPagesQty = Math.ceil(total / size);
  const paths = Array.from(Array(maxPagesQty), (_, i) => {
    if (i === 0) {
      return { params: { page: null } };
    } else {
      return { params: { page: [`page-${i + 1}`] } };
    }
  });

  return {
    paths,
    fallback: true
  };
};

export default PagePage;
