import { gql } from '@apollo/client';

export const GetBlogPostSlugs = gql`
  query GetBlogPostSlugs {
    blogPostList: getBlogPostList(size: 100) {
      items {
        _id
        slug
      }
    }
  }
`;

export const GetBlogPost = gql`
  query GetBlogPost($slug: String!) {
    blogPostList: getBlogPostList(size: 1, where: { slug: { eq: $slug }, _status: { eq: "enabled" } }) {
      items {
        _id
        content(format: html)
        date
        seo {
          metaDescription
          metaTitle
        }
        slug
        title
      }
    }
  }
`;
