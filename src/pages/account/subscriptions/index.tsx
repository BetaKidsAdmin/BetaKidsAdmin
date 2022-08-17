import { AccountSubscriptions } from 'features/AccountSubscriptions/AccountSubscriptions';
import { subscriptions as rawSubscriptions } from 'features/AccountSubscriptions/fixtures';
import { getSubscription } from 'features/AccountSubscriptions/transforms';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountSubscriptionsPage: NextPage = ({ globalSettings }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const subscriptions = rawSubscriptions.map(getSubscription);

  return (
    <Layout globalSettings={globalSettings} seo={{ title: 'Subscriptions' }}>
      <AccountSubscriptions subscriptions={subscriptions} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { globalSettings } = await getLayoutData();
  return { props: { globalSettings } };
};

export default AccountSubscriptionsPage;
