import { gql } from '@apollo/client';

export const GetBlogPostsQuery = gql`
  query GetBlogPostsQuery {
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

export const GetBlogPageQuery = gql`
  query GetBlogPageQuery {
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

export const GetBlogPostListTotalQuery = gql`
  query GetBlogPostListTotalQuery {
    getBlogPostList {
      total
    }
  }
`;

export const GetBlogPostListPostsQuery = gql`
  query GetBlogPostListPostsQuery($from: Int!, $size: Int!) {
    blogPostList: getBlogPostList(from: $from, size: $size, sort: { field: "date", order: "desc" }) {
      items {
        _id
        date
        slug
        title
        content
      }
    }
  }
`;
