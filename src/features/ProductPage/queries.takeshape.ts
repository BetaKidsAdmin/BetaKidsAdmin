import { gql } from '@apollo/client';

export const ProductPageShopifyProductHandlesQuery = gql`
  query ProductPageShopifyProductHandlesQuery($first: Int!, $after: String) {
    products: productsWithTtl(first: $first, after: $after, sortKey: ID, query: "status:ACTIVE") {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        handle
      }
    }
  }
`;

export const ProductPageShopifyProductQuery = gql`
  query ProductPageShopifyProduct($handle: String!, $trustpilotReviewsPerPage: Int) {
    product: productByHandleWithTtl(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      tags
      requiresSellingPlan
      totalInventory
      trustpilotReviews(perPage: $trustpilotReviewsPerPage) {
        productReviews {
          id
          content
          stars
          createdAt
          consumer {
            displayName
          }
        }
        links {
          rel
        }
      }
      trustpilotReviewsSummary {
        starsAverage
        numberOfReviews {
          total
          fiveStars
          fourStars
          threeStars
          twoStars
          oneStar
        }
      }
      takeshape {
        _id
        additionalDetails {
          list {
            item
          }
          name
        }
        descriptionHtml
        productComponent
        hideBreadcrumbs
        hideReviews
        hideRelatedProducts
        showDetails
        showPolicies
        policies {
          _id
          policies {
            image {
              path
              description
            }
            nameHtml
            descriptionHtml
          }
        }
        details {
          _id
          text {
            primaryHtml
            secondaryHtml
          }
          details {
            image {
              path
              description
            }
            descriptionHtml
          }
        }
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
          ... on FaqOneColumnComponent {
            faQs {
              answerHtml
              question
            }
            heading
            subheadingHtml
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
      featuredImage {
        id
        url(transform: { maxWidth: 800, maxHeight: 800, preferredContentType: WEBP })
        width
        height
        altText
      }
      images(first: 4) {
        edges {
          node {
            id
            url(transform: { maxWidth: 800, maxHeight: 800, preferredContentType: WEBP })
            width
            height
            altText
          }
        }
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
      seo {
        title
        description
      }
      publishedAt
      totalVariants
      totalInventory
      variants(first: 50) {
        nodes {
          id
          availableForSale
          compareAtPrice
          image {
            width
            height
            url
            altText
          }
          price
          inventoryPolicy
          sellableOnlineQuantity
          sku
          title
          selectedOptions {
            name
            value
          }
        }
      }
      options {
        name
        position
        id
        values
      }
      sellingPlanGroupCount
      sellingPlanGroups(first: 1) {
        nodes {
          sellingPlans(first: 5) {
            nodes {
              id
              options
              pricingPolicies {
                ... on Shopify_SellingPlanFixedPricingPolicy {
                  adjustmentType
                  adjustmentValue {
                    ... on Shopify_MoneyV2 {
                      currencyCode
                      amount
                    }
                    ... on Shopify_SellingPlanPricingPolicyPercentageValue {
                      percentage
                    }
                  }
                }
                ... on Shopify_SellingPlanRecurringPricingPolicy {
                  adjustmentType
                  adjustmentValue {
                    ... on Shopify_MoneyV2 {
                      currencyCode
                      amount
                    }
                    ... on Shopify_SellingPlanPricingPolicyPercentageValue {
                      percentage
                    }
                  }
                }
              }
              billingPolicy {
                ... on Shopify_SellingPlanRecurringBillingPolicy {
                  anchors {
                    day
                    month
                    type
                    cutoffDay
                  }
                  maxCycles
                  minCycles
                  intervalCount
                  interval
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ProductPageReviewPageQuery = gql`
  query {
    __typename
  }
`;

export const TrustpilotProductPageReviewPageQuery = gql`
  query TrustpilotProductPageReviewPageQuery($sku: [String!], $page: Int!, $perPage: Int!) {
    reviews: Trustpilot_listProductReviews(sku: $sku, page: $page, perPage: $perPage) {
      productReviews {
        id
        content
        stars
        createdAt
        consumer {
          displayName
        }
      }
      links {
        rel
      }
    }
    summary: Trustpilot_getProductReviewsSummary(sku: $sku) {
      starsAverage
      numberOfReviews {
        total
        fiveStars
        fourStars
        threeStars
        twoStars
        oneStar
      }
      links {
        rel
        href
        method
      }
    }
  }
`;

export const CreateMyProductReviewMutation = gql`
  mutation {
    __typename
  }
`;
