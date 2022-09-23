import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { Footer } from './Footer';
import { GetFooterQueryData } from './Footer.fixtures';

const Meta: ComponentMeta<typeof Footer> = {
  title: 'Features / Footer',
  component: Footer
};

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const _Footer = Template.bind({});
_Footer.args = {
  footer: {
    info: {
      descriptionHtml:
        '<p>BetaKIDS is on a mission to create healthier kids and happier families... one immune system at a time.</p>',
      heading: 'Our Mission'
    },
    navigation: {
      sections: [
        {
          links: [
            {
              name: 'Manage Your Account',
              url: '/api/auth/signin'
            }
          ],
          title: 'Your Account'
        },
        {
          links: [
            {
              name: 'Contact Us',
              url: '/pages/contact-us'
            },
            {
              name: 'Shipping & Returns',
              url: '/pages/shipping-returns'
            },
            {
              name: 'Terms of Service',
              url: '/pages/terms-of-service'
            },
            {
              name: 'Privacy Policy',
              url: '/pages/privacy-policy'
            },
            {
              name: 'Cookie Policy',
              url: '/pages/cookie-policy'
            }
          ],
          title: 'Help'
        }
      ]
    }
  }
};
_Footer.parameters = {
  msw: {
    handlers: {
      newsletter: [
        graphql.query('GetFooter', (req, res, ctx) => {
          return res(ctx.data(GetFooterQueryData));
        }),
        graphql.mutation('NewsletterEmailSubmission', (req, res, ctx) => {
          return res(ctx.data({ addMembers: { items: [{ id: 'foo' }] } }));
        })
      ]
    }
  }
};

export default Meta;
