import PageLoader from 'components/PageLoader';
import { pageRevalidationTtl } from 'config';
import BlogPost from 'features/BlogPost/BlogPost';
import { GetBlogPost, GetBlogPostSlugs } from 'features/BlogPost/queries';
import { getPage, getPageParams } from 'features/BlogPost/transforms';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { GetBlogPostResponse, GetBlogPostSlugsResponse, GetBlogPostVariables } from 'types/takeshape';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

const apolloClient = createAnonymousTakeshapeApolloClient();

const PagePage: NextPage = ({
  globalSettings,
  navigation,
  footer,
  post
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout
        globalSettings={globalSettings}
        navigation={navigation}
        footer={footer}
        seo={{ title: 'Page is loading...' }}
      >
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout globalSettings={globalSettings} navigation={navigation} footer={footer} seo={{ title: post.title }}>
      <BlogPost post={post} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = getSingle(params.page);

  const { globalSettings, navigation, footer } = await getLayoutData();

  const { data, error } = await apolloClient.query<GetBlogPostResponse, GetBlogPostVariables>({
    query: GetBlogPost,
    variables: {
      slug
    }
  });

  if (error) {
    throw new Error(`Failed to get page, received message ${error.message}`);
  }

  const post = getPage(data);

  return {
    notFound: !Boolean(post),
    revalidate: pageRevalidationTtl,
    props: {
      // IMPORTANT This allows state to reset on NextLink route changes
      key: post._id,
      globalSettings,
      navigation,
      footer,
      post
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<GetBlogPostSlugsResponse>({
    query: GetBlogPostSlugs
  });

  const params = getPageParams(data);

  return {
    paths: params,
    fallback: true
  };
};

export default PagePage;
