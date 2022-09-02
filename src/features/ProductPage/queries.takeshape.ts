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
  query ProductPageShopifyProduct($handle: String!, $trustpilotReviewsPerPage: Int, $trustpilotBusinessUnit: String!) {
    product: productByHandleWithTtl(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      tags
      requiresSellingPlan
      trustpilotReviews(businessUnit: $trustpilotBusinessUnit, perPage: $trustpilotReviewsPerPage) {
        productReviews {
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
      trustpilotReviewsSummary(businessUnit: $trustpilotBusinessUnit) {
        starsAverage
        numberOfReviews {
          total
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
        edges {
          node {
            id
            availableForSale
            compareAtPrice
            image {
              width
              height
              url
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
      }
      options {
        name
        position
        id
        values
      }
      sellingPlanGroupCount
      sellingPlanGroups(first: 1) {
        edges {
          node {
            sellingPlans(first: 5) {
              edges {
                node {
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
    }
  }
`;

export const ProductPageReviewPageQuery = gql`
  query {
    __typename
  }
`;

export const TrustpilotProductPageReviewPageQuery = gql`
  query TrustpilotProductPageReviewPageQuery($businessUnit: String!, $sku: [String!], $page: Int!, $perPage: Int!) {
    reviewData: getTrustpilotProductReviews(businessUnit: $businessUnit, sku: $sku, page: $page, perPage: $perPage) {
      productReviews {
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
  }
`;

export const CreateMyProductReviewMutation = gql`
  mutation {
    __typename
  }
`;
