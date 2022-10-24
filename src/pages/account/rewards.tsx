import { AccountLoyaltyCard } from 'features/AccountLoyaltyCard/AccountLoyaltyCard';
import { AccountLoyaltyLion } from 'features/AccountLoyaltyLion/AccountLoyaltyLion';
import { AccountReferrals } from 'features/AccountReferrals/AccountReferrals';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountRewardsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ globalSettings }) => {
  // const { transformedData: loyaltyCard } = useAuthenticatedQuery<GetMyLoyaltyCardQueryResponse, {}, LoyaltyCard>(
  //   GetMyLoyaltyCardQuery,
  //   { transform: { data: getLoyaltyCard } }
  // );

  // if (!loyaltyCard) {
  return (
    <Layout globalSettings={globalSettings} seo={{ title: 'Rewards' }}>
      <AccountLoyaltyLion />
    </Layout>
  );
  // }

  return (
    <Layout globalSettings={globalSettings} seo={{ title: 'Rewards' }}>
      <AccountReferrals />
      {loyaltyCard && <AccountLoyaltyCard loyaltyCard={loyaltyCard} />}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { globalSettings } = await getLayoutData();
  return { props: { globalSettings } };
};

export default AccountRewardsPage;
