import { gql } from '@apollo/client';

export const PageGetPageSlugs = gql`
  query GetPageSlugs {
    pageList: getPageList(size: 100) {
      items {
        _id
        slug
      }
    }
  }
`;

export const PageGetPage = gql`
  query PageGetPage($slug: String!) {
    pageList: getPageList(size: 1, where: { slug: { eq: $slug }, _status: { eq: "enabled" } }) {
      items {
        _id
        sections {
          ... on CtaBrandPanelWithOverlappingImageComponent {
            button {
              text
              url
            }
            descriptionHtml: description(format: html)
            heading
            image {
              path
              description
            }
          }
          ... on FaqTwoColumnsWithImageComponent {
            faQs {
              answerHtml
              question
            }
            heading
            subheadingHtml
            image {
              path
              description
            }
            button {
              text
              url
            }
          }
          ... on FeaturesAlternativeSideBySideWithImagesComponent {
            heading
            repeater {
              button {
                text
                url
              }
              text(format: html)
              title
              image {
                path
                description
              }
            }
            subheadingHtml
          }
          ... on FeaturesFullWidthWithVerticalImagesComponent {
            descriptionHtml
            heading
            repeater {
              button {
                text
                url
              }
              description
              title
              image {
                path
                description
              }
            }
          }
          ... on FeaturesGridComponent {
            blocks {
              descriptionHtml
              iconName
              title
            }
            heading
            preheading
            subheadingHtml
          }
          ... on HeroSectionMediumWithIllustrationComponent {
            button {
              text
              url
            }
            descriptionHtml
            heading
            image {
              path
              description
            }
          }
          ... on NewsletterCenteredCardWithGraphicComponent {
            descriptionHtml
            heading
            preHeading
          }
          ... on PageSectionMdx {
            content(format: html)
          }
          ... on PageSectionTitle {
            heading
            label
            subheading
          }
          ... on TestimonialWithOverlappingImageComponent {
            quote(format: html)
            source
            image {
              path
              description
            }
          }
        }
        title
      }
    }
  }
`;
