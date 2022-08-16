import PageLoader from 'components/PageLoader';
import { pageRevalidationTtl } from 'config';
import Page from 'features/Policy/PolicyPage';
import { PolicyPageGetPage, PolicyPageGetPageSlugs } from 'features/Policy/queries';
import { getPage, getPageParams } from 'features/Policy/transforms';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { PolicyPageGetPageResponse, PolicyPageGetPageSlugsResponse, PolicyPageGetPageVariables } from 'types/takeshape';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

const apolloClient = createAnonymousTakeshapeApolloClient();

const PagePage: NextPage = ({ globalSettings, page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout globalSettings={globalSettings} seo={{ title: 'Page is loading...' }}>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout globalSettings={globalSettings} seo={{ title: page.title }}>
      <Page page={page} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = getSingle(params.page);

  const { globalSettings } = await getLayoutData();

  const { data, error } = await apolloClient.query<PolicyPageGetPageResponse, PolicyPageGetPageVariables>({
    query: PolicyPageGetPage,
    variables: {
      slug
    }
  });

  if (error) {
    throw new Error(`Failed to get page, received message ${error.message}`);
  }

  const page = getPage(data);

  return {
    notFound: !Boolean(page),
    revalidate: pageRevalidationTtl,
    props: {
      // IMPORTANT This allows state to reset on NextLink route changes
      key: page._id,
      globalSettings,
      page
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<PolicyPageGetPageSlugsResponse>({
    query: PolicyPageGetPageSlugs
  });

  const params = getPageParams(data);

  return {
    paths: params,
    fallback: true
  };
};

export default PagePage;
