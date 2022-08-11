import { FooterProps } from 'features/Footer/Footer';

export const GetFooterQueryData: { footer: FooterProps } = {
  footer: {
    navigation: {
      info: {
        descriptionHtml:
          '<p>BetaKIDS is on a mission to create healthier kids and happier families... one immune system at a time.</p>',
        heading: 'Our Mission'
      },
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
    },
    newsletter: {
      text: {
        primary: 'Subscribe to our newsletter',
        secondary: 'The latest news, articles, and resources, sent to your inbox weekly.',
        button: 'Subscribe'
      }
    }
  }
};
