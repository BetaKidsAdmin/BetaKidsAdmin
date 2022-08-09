import PageLoader from 'components/PageLoader';
import BlogPage from 'features/BlogPage/BlogPage';
import { GetBlogPage, GetBlogPosts } from 'features/BlogPage/queries';
import { getBlogPosts, getPage } from 'features/BlogPage/transforms';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  GetBlogPageResponse,
  GetBlogPageVariables,
  GetBlogPostsResponse,
  GetBlogPostsVariables
} from 'types/takeshape';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const apolloClient = createAnonymousTakeshapeApolloClient();

const PagePage: NextPage = ({ navigation, footer, page, posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout navigation={navigation} footer={footer} seo={{ title: 'Page is loading...' }}>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: page.seo.metaTitle }}>
      <BlogPage page={page} posts={posts} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();

  const { data, error } = await apolloClient.query<GetBlogPageResponse, GetBlogPageVariables>({
    query: GetBlogPage
  });

  if (error) {
    throw new Error(`Failed to get page, received message ${error.message}`);
  }

  const page = getPage(data);

  const { data: postsData, error: postsError } = await apolloClient.query<GetBlogPostsResponse, GetBlogPostsVariables>({
    query: GetBlogPosts
  });

  const posts = postsError ? [] : getBlogPosts(postsData);

  return {
    props: {
      navigation,
      footer,
      page,
      posts
    }
  };
};

export default PagePage;
