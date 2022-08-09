import { gql } from '@apollo/client';

export const GetBlogPosts = gql`
  query GetBlogPosts {
    blogPostList: getBlogPostList(size: 100) {
      items {
        _id
        date
        slug
        title
        content(format: html)
      }
    }
  }
`;

export const GetBlogPage = gql`
  query GetBlogPage {
    blogPage: getBlogPage {
      _id
      components {
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
      seo {
        metaDescription
        metaTitle
      }
    }
  }
`;
