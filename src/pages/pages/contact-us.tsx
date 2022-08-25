import { pageRevalidationTtl } from 'config';
// import { ContactWithGorgias } from 'features/Contact/ContactWithGorgias';
import { ContactWithZendesk } from 'features/Contact/ContactWithZendesk';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const ContactPage: NextPage = ({ globalSettings }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const router = useRouter();

  // const Contact = router.query.provider === 'zendesk' ? ContactWithZendesk : ContactWithGorgias;

  return (
    <Layout globalSettings={globalSettings} seo={{ title: 'Contact' }}>
      <ContactWithZendesk />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { globalSettings } = await getLayoutData();
  return {
    revalidate: pageRevalidationTtl,
    props: {
      globalSettings
    }
  };
};

export default ContactPage;
