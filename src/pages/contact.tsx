import { pageRevalidationTtl } from 'config';
import { Contact, ContactForm } from 'features/Contact/Contact';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';
import { useCallback, useState } from 'react';
// import { CreateTicketMutationResponse, CreateTicketMutationVariables } from 'types/takeshape';

const ContactPage: NextPage = ({
  globalSettings,
  navigation,
  footer
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [success, setSuccess] = useState<string>();
  // const [createTicket, { error }] = useMutation<any, any>(CreateTicketMutation);

  const onSubmit = useCallback(async (formValues: ContactForm, recaptchaToken: string) => {
    const { firstName, lastName, company, email, phoneNumber, message } = formValues;

    //       const result = await createTicket({
    //         variables: {
    //           email,
    //           message: `From: ${firstName} ${lastName}
    // Company: ${company}
    // Phone Number: ${phoneNumber}
    // ${message}`,
    //           recaptchaToken
    //         }
    //       });
    //       const { id } = result.data.createTicket;
    //       if (id) {
    //         setSuccess(`Thank you for reaching out! Created ticket #${id}.`);
    //       }
  }, []);

  return (
    <Layout globalSettings={globalSettings} navigation={navigation} footer={footer} seo={{ title: 'Contact' }}>
      <Contact
        text={{
          primary: 'Get in touch',
          secondary: "We'd be happy to hear from you!",
          button: 'Send'
        }}
        onSubmit={onSubmit}
        success={success}
        error={null}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { globalSettings, navigation, footer } = await getLayoutData();
  return {
    revalidate: pageRevalidationTtl,
    props: {
      globalSettings,
      navigation,
      footer
    }
  };
};

export default ContactPage;
