import { AccountFormAddress } from 'features/AccountForm/AccountFormAddress';
import { AccountFormMarketing } from 'features/AccountForm/AccountFormMarketing';
import { AccountFormProfile } from 'features/AccountForm/AccountFormProfile';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountPage: NextPage = ({ globalSettings }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout globalSettings={globalSettings} seo={{ title: 'Account' }}>
      <AccountFormProfile />
      <AccountFormAddress />
      <AccountFormMarketing />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { globalSettings } = await getLayoutData();
  return { props: { globalSettings } };
};

export default AccountPage;
