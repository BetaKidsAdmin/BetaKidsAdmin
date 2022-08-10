import { ErrorMessage } from 'components/Error/ErrorMessage';
import NextLink from 'components/NextLink';
import Wrapper from 'components/Wrapper/Content';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const NotFoundPage: NextPage = ({
  globalSettings,
  navigation,
  footer
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout globalSettings={globalSettings} navigation={navigation} footer={footer} seo={{ title: 'Server Error' }}>
      <Wrapper>
        <ErrorMessage
          headline="404 error"
          subhead="Page not found"
          body="Sorry, we couldn’t find the page you’re looking for."
        >
          <NextLink
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go back home<span aria-hidden="true"> &rarr;</span>
          </NextLink>
        </ErrorMessage>
      </Wrapper>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { globalSettings, navigation, footer } = await getLayoutData();
  return { props: { globalSettings, navigation, footer } };
};

export default NotFoundPage;
