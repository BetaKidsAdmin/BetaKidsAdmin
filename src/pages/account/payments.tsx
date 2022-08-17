import { AccountPayments } from 'features/AccountPayments/AccountPayments';
import { paymentMethods } from 'features/AccountPayments/fixtures';
import { getPaymentMethods } from 'features/AccountPayments/transforms';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountPaymentsPage: NextPage = ({ globalSettings }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout globalSettings={globalSettings} seo={{ title: 'Payment Methods' }}>
      <AccountPayments paymentMethods={getPaymentMethods(paymentMethods)} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { globalSettings } = await getLayoutData();
  return { props: { globalSettings } };
};

export default AccountPaymentsPage;
