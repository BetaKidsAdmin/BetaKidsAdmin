import { AccountSubscriptions } from 'features/AccountSubscriptions/AccountSubscriptions';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountSubscriptionsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({globalSettings}) => {
  return (
    <Layout globalSettings={globalSettings} seo={{ title: 'Subscriptions' }}>
      <AccountSubscriptions />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { globalSettings } = await getLayoutData();
  return { props: { globalSettings } };
};

export default AccountSubscriptionsPage;
