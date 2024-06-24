import { gql } from "@apollo/client";

export const GET_ALL_CAREAR = gql`
  query {
    careers(pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          career_title
          career_url
          is_top
          is_featured
          banner {
            data {
              attributes {
                url
              }
            }
          }
          average_startin_salary
          popular_companies {
            data {
              attributes {
                company_name
              }
            }
          }
          career_levels {
            data {
              attributes {
                career_level_title
              }
            }
          }
          job_types {
            data {
              attributes {
                job_type_title
              }
            }
          }
          gender_ratio
          streams {
            data {
              attributes {
                stream_name
              }
            }
          }
          nav_items(sort: "createdAt:asc", pagination: { limit: 20 }) {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CAREER_BY_FILTER = gql`
  query GetCareerFilter(
    $country: String
    $streem: String
    $careerType: String
    $level: String
    $searchTerm: String
    $start: Int
    $pageSize: Int
    $sort: [String]
  ) {
    careers(
      sort: $sort
      pagination: { page: $start, pageSize: $pageSize }
      filters: {
        country: { country_name: { eq: $country } }
        job_types: { job_type_title: { eq: $careerType } }
        streams: { stream_name: { eq: $streem } }
        career_levels: { career_level_title: { eq: $level } }
        or: [
          { country: { country_name: { containsi: $searchTerm } } }
          { job_types: { job_type_title: { containsi: $searchTerm } } }
          { streams: { stream_name: { containsi: $searchTerm } } }
          { career_title: { containsi: $searchTerm } }
          { career_levels: { career_level_title: { containsi: $searchTerm } } }
        ]
      }
    ) {
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
          career_title
          career_url
          is_top
          is_featured
          banner {
            data {
              attributes {
                url
              }
            }
          }
          average_startin_salary
          popular_companies {
            data {
              attributes {
                company_name
              }
            }
          }
          career_levels {
            data {
              attributes {
                career_level_title
              }
            }
          }
          job_types {
            data {
              attributes {
                job_type_title
              }
            }
          }
          gender_ratio
          streams {
            data {
              attributes {
                stream_name
              }
            }
          }
          nav_items(sort: "createdAt:asc", pagination: { limit: 20 }) {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_CAREEAR_BY_ID = gql`
  query GetFilterdCareearById($careersUrl: String!) {
    careers(filters: { career_url: { eq: $careersUrl } }) {
      data {
        id
        attributes {
          career_title
          career_url
          gallery {
            data {
              attributes {
                url
                ext
              }
            }
          }
          is_top
          is_featured
          updatedAt
          news {
            data {
              id
              attributes {
                name
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
          blogs(pagination: { limit: 5 }) {
            data {
              id
              attributes {
                blog_title
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
          nav_items {
            data {
              id
              attributes {
                title
              }
            }
          }
          job_types {
            data {
              id
              attributes {
                job_type_title
              }
            }
          }
          banner {
            data {
              attributes {
                url
              }
            }
          }
          average_startin_salary
          popular_companies {
            data {
              id
              attributes {
                company_name
              }
            }
          }
          career_levels {
            data {
              id
              attributes {
                career_level_title
              }
            }
          }
          gender_ratio
          streams {
            data {
              id
              attributes {
                stream_name
              }
            }
          }
          review_component {
            likes {
              title
            }
            dislikes {
              title
            }
          }
          page_data {
            ... on ComponentCommonFaq {
              id
              heading
              faq_section: section {
                data {
                  attributes {
                    title
                  }
                }
              }
              questions {
                Question
                Answer
              }
            }
            ... on ComponentCommonGallery {
              id
              heading
              gallery_section: section {
                data {
                  attributes {
                    title
                  }
                }
              }
            }
            ... on ComponentCommonNewOverview {
              id
              Content
              heading
              overview_section: section {
                data {
                  attributes {
                    title
                  }
                }
              }
            }
            ... on ComponentCommonRecommendedColleges {
              id
              recommended_colleges_section: section {
                data {
                  attributes {
                    title
                  }
                }
              }
              colleges {
                data {
                  id
                  attributes {
                    college_url
                    college_name
                    banner {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    logo {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    college_type {
                      data {
                        id
                        attributes {
                          college_type
                        }
                      }
                    }
                    city {
                      data {
                        id
                        attributes {
                          city_name
                        }
                      }
                    }
                    state {
                      data {
                        id
                        attributes {
                          state_name
                        }
                      }
                    }
                    approved_by {
                      data {
                        id
                        attributes {
                          organisation_name
                        }
                      }
                    }
                    courses {
                      data {
                        id
                        attributes {
                          course_name
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on ComponentCommonRecommendedCourses {
              id
              recommended_courses_section: section {
                data {
                  attributes {
                    title
                  }
                }
              }
              recommended_courses: courses {
                data {
                  id
                  attributes {
                    course_url
                    course_name
                    logo {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    banner {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    average_fee
                    rating
                  }
                }
              }
            }
            ... on ComponentCommonRecommendedExams {
              id
              recommended_exams_section: section {
                data {
                  attributes {
                    title
                  }
                }
              }
              exams {
                data {
                  id
                  attributes {
                    exam_name
                    exam_url
                    is_top
                    is_featured
                    exam_date {
                      id
                      start_date
                      end_date
                    }
                    exam_level {
                      data {
                        id
                        attributes {
                          exam_level_name
                        }
                      }
                    }
                    logo {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    banner {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on ComponentCommonRecommendedCareers {
              id
              recommended_careers_section: navbars {
                data {
                  attributes {
                    title
                  }
                }
              }
              careers {
                data {
                  id
                  attributes {
                    career_title
                      career_url

                    is_top

                    is_featured
                    gender_ratio
                    streams {
                      data {
                        id
                        attributes {
                          stream_name
                        }
                      }
                    }
                    banner {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    average_startin_salary
                    career_levels {
                      data {
                        id
                        attributes {
                          career_level_title
                        }
                      }
                    }
                    job_types {
                      data {
                        id
                        attributes {
                          job_type_title
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on ComponentCommonRecommendedScholarships {
              id
              recommended_scholarships_section: navbars {
                data {
                  attributes {
                    title
                  }
                }
              }
              scholarships {
                data {
                  id
                  attributes {
                    scholarship_title
                    scholarship_url
                    eligibility
                    number_of_scholarship
                    amount
                    logo {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    banner {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    conducted_by {
                      data {
                        id
                        attributes {
                          organisation_name
                        }
                      }
                    }
                    type {
                      data {
                        id
                        attributes {
                          title
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on ComponentCommonRecommendedCountries {
              id
              recommended_countries_section: section {
                data {
                  attributes {
                    title
                  }
                }
              }
              countries {
                data {
                  id
                  attributes {
                    country_name
                    country_url
                    banner {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    flags {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on ComponentCommonBannerComponent {
              heading
              description
              button_text
              banner_section: section {
                data {
                  attributes {
                    title
                  }
                }
              }
            }
            ... on ComponentCommonRatingAndReview {
              id
              rating_section: section {
                data {
                  attributes {
                    title
                  }
                }
              }
            }
            ... on ComponentCommonNewsAndUpdate {
              id
              newsUpdate_section: sections {
                data {
                  attributes {
                    title
                  }
                }
              }
            }
            ... on ComponentCommonDiscussionForum {
              id
              discussionForum_section: section {
                data {
                  attributes {
                    title
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
