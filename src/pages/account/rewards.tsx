import { AccountLoyaltyCard } from 'features/AccountLoyaltyCard/AccountLoyaltyCard';
import { GetMyLoyaltyCardQuery } from 'features/AccountLoyaltyCard/queries';
import { getLoyaltyCard } from 'features/AccountLoyaltyCard/transforms';
import { LoyaltyCard } from 'features/AccountLoyaltyCard/types';
import { AccountReferrals } from 'features/AccountReferrals/AccountReferrals';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';
import { GetMyLoyaltyCardQueryResponse } from 'types/takeshape';
import { useAuthenticatedQuery } from 'utils/takeshape';

const AccountRewardsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ globalSettings }) => {
  const { transformedData: loyaltyCard } = useAuthenticatedQuery<GetMyLoyaltyCardQueryResponse, {}, LoyaltyCard>(
    GetMyLoyaltyCardQuery,
    { transform: { data: getLoyaltyCard } }
  );

  if (!loyaltyCard) {
    return null;
  }

  return (
    <Layout  globalSettings={globalSettings} seo={{ title: 'Rewards' }}>
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
