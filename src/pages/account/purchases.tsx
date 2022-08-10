import { AccountPurchaseList } from 'features/AccountPurchases/AccountPurchaseList';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountPurchasesPage: NextPage = ({ globalSettings }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout globalSettings={globalSettings} seo={{ title: 'Purchases' }}>
      <AccountPurchaseList />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { globalSettings } = await getLayoutData();
  return { props: { globalSettings } };
};

export default AccountPurchasesPage;
