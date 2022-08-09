import { gql } from '@apollo/client';

const StorefrontFragments = gql`
  fragment StorefrontCollection on Shopify_Collection {
    id
    handle
    title
    description
    descriptionHtml
  }

  fragment StorefrontProduct on Shopify_Product {
    id
    handle
    title
    description
    descriptionHtml
    requiresSellingPlan
    featuredImage {
      id
      url(transform: { maxWidth: 300, maxHeight: 300, preferredContentType: WEBP })
      width
      height
      altText
    }
    priceRangeV2 {
      maxVariantPrice {
        currencyCode
        amount
      }
      minVariantPrice {
        currencyCode
        amount
      }
    }
    publishedAt
    totalVariants
    totalInventory
    sellingPlanGroupCount
    options {
      name
      position
      id
      values
    }
  }
`;

export const GetStorefrontQuery = gql`
  query GetStorefrontQuery {
    storefront: getStorefront {
      seo {
        metaDescription
        metaTitle
      }
      components {
        __typename
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
        ... on HeroComponent {
          features {
            description
            iconName
            title
          }
          firstButton {
            text
            url
          }
          primaryText {
            firstRow
            secondRow
          }
          secondButton {
            text
            url
          }
          secondaryText
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
        ... on TestimonialWithOverlappingImageComponent {
          quote(format: html)
          source
          image {
            path
            description
          }
        }
      }
    }
  }
`;
