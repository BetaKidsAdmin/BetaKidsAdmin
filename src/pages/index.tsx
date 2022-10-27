import { homepageRevalidationTtl } from 'config';
import { GetStorefrontQuery } from 'features/Storefront/queries';
import { Storefront } from 'features/Storefront/Storefront';
import { getStorefront } from 'features/Storefront/transforms';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';
import { GetStorefrontQueryResponse } from 'types/takeshape';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const IndexPage: NextPage = ({ globalSettings, storefront }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout
      seo={{ title: 'A Beta Glucan Gummy to help boost your kids Immune System' }}
      globalSettings={globalSettings}
    >
      {console.log('env', process.env.NEXT_PUBLIC_TAKESHAPE_AUTH_ISSUER)}
      <Storefront storefront={storefront} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps = async () => {
  const { globalSettings } = await getLayoutData();

  const { data, error } = await apolloClient.query<GetStorefrontQueryResponse>({
    query: GetStorefrontQuery
  });

  const storefront = getStorefront(data);

  if (error) {
    throw new Error(`Failed to get storefront, received message ${error.message}`);
  }

  return {
    revalidate: homepageRevalidationTtl,
    props: {
      globalSettings,
      storefront
    }
  };
};

export default IndexPage;
