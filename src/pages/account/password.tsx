import { AccountFormPassword } from 'features/AccountForm/AccountFormPassword';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountPasswordPage: NextPage = ({ globalSettings }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout globalSettings={globalSettings} seo={{ title: 'Password' }}>
      <AccountFormPassword />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { globalSettings } = await getLayoutData();
  return { props: { globalSettings } };
};

export default AccountPasswordPage;
