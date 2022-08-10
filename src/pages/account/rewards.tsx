import { AccountLoyaltyCard } from 'features/AccountLoyaltyCard/AccountLoyaltyCard';
import { GetMyLoyaltyCardQuery } from 'features/AccountLoyaltyCard/queries';
import { AccountReferrals } from 'features/AccountReferrals/AccountReferrals';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';
import { GetMyLoyaltyCardQueryResponse } from 'types/takeshape';
import { useAuthenticatedQuery } from 'utils/takeshape';

const AccountRewardsPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = useAuthenticatedQuery<GetMyLoyaltyCardQueryResponse>(GetMyLoyaltyCardQuery);

  if (!data) {
    return <Layout navigation={navigation} footer={footer} seo={{ title: 'Rewards' }}></Layout>;
  }

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Rewards' }}>
      <AccountReferrals />
      <AccountLoyaltyCard
        code={data?.loyaltyCard.code}
        loyalty_card={data?.loyaltyCard.loyalty_card}
        assets={data?.loyaltyCard.assets}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { globalSettings, navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
};

export default AccountRewardsPage;
