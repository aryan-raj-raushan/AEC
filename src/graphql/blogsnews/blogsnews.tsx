import { gql } from "@apollo/client";

export const GET_ALL_BLOGS = gql`
  query {
    blogs {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          updatedAt
          blog_content
          blog_title
          blog_url
          is_top
          is_featured
          featured_image {
            data {
              attributes {
                url
              }
            }
          }
          excerpt
          tags {
            data {
              attributes {
                tags_name
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_ALL_FILTER_BLOGS = gql`
  query GetFilterdBlog($page: Int, $pageSize: Int) {
    blogs(pagination: { start: $page, limit: $pageSize }) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          updatedAt
          blog_content
          is_top
          is_featured
          blog_title
          blog_url
          featured_image {
            data {
              attributes {
                url
              }
            }
          }
          excerpt
          tags {
            data {
              attributes {
                tags_name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_BLOGS_BY_ID = gql`
  query GetNewsByCategory($id: ID!) {
    blogs(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          updatedAt
          blog_content
          blog_title
          blog_url
          featured_image {
            data {
              attributes {
                url
              }
            }
          }
          excerpt
          tags {
            data {
              attributes {
                tags_name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_NEWS_BY_CATEGORY = gql`
  query {
    categories(sort: "createdAt:asc") {
      data {
        attributes {
          category_name
          news(sort: "createdAt:asc") {
            data {
              id
              attributes {
                createdAt
                updatedAt
                name
                url
                content
                categories {
                  data {
                    attributes {
                      category_name
                    }
                  }
                }
                featured_image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                excerpt
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_NEWS_BY_CATEGORY_QUERY = gql`
  query GetNewsByCategory($categoryName: String) {
    categories(
      filters: { category_name: { eq: $categoryName } }
      sort: "createdAt:asc"
    ) {
      data {
        attributes {
          category_name
          news(sort: "createdAt:asc") {
            data {
              id
              attributes {
                url
                createdAt
                updatedAt
                name
                content
                categories {
                  data {
                    attributes {
                      category_name
                    }
                  }
                }
                featured_image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                excerpt
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_NEWS_BY_ID = gql`
  query GetNewsById($url: String) {
    newsAndBlogs(filters: { url: { eq: $url } }) {
      data {
        id
        attributes {
          name
          url
          updatedAt
          content
          excerpt
          categories {
            data {
              attributes {
                category_name
                news {
                  data {
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
          featured_image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_NEWS = gql`
query{
  newsAndBlogs{
    data{
      id
      attributes{
        name
        updatedAt
        content
        featured_image{
          data{
            attributes{
              url
            }
          }
        }
        excerpt
        is_featured
        categories{
          data{
            attributes{
              category_name
            }
          }
        }
      }
    }
  }
}
`