import { pageRevalidationTtl } from 'config';
import { Contact } from 'features/Contact/Contact';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const ContactPage: NextPage = ({ globalSettings }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout globalSettings={globalSettings} seo={{ title: 'Contact' }}>
      <Contact
        text={{
          primary: 'Get in touch',
          secondary: "We'd be happy to hear from you!",
          button: 'Send'
        }}
      />
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
