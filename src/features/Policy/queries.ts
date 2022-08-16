import { gql } from '@apollo/client';

export const PolicyPageGetPageSlugs = gql`
  query PolicyPageGetPageSlugs {
    pageList: getPolicyList(size: 100) {
      items {
        _id
        slug
      }
    }
  }
`;

export const PolicyPageGetPage = gql`
  query PolicyPageGetPage($slug: String!) {
    pageList: getPolicyList(size: 1, where: { slug: { eq: $slug }, _status: { eq: "enabled" } }) {
      items {
        _id
        sections {
          ... on PageSectionMdx {
            content(format: html)
          }
          ... on PageSectionTitle {
            heading
            label
            subheading
          }
        }
        title
      }
    }
  }
`;
