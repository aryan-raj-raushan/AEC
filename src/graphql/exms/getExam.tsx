import { gql } from "@apollo/client";

export const GET_EXAM_QUERY = gql`
  query {
    exams(pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          is_top
          exam_url
          is_featured
          exam_name
          exam_mode {
            data {
              attributes {
                exam_mode
              }
            }
          }
          application_date {
            id
            start_date
            end_date
          }
          exam_date {
            id
            start_date
            end_date
          }
          nav_items {
            data {
              id
              attributes {
                title
              }
            }
          }
          result_date {
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
        }
      }
    }
  }
`;

export const GET_FILTER_EXAM_QUERY = gql`
  query GetFilterdExam(
    $streamName: String
    $examLevel: String
    $searchTerm: String
    $examMode: String
    $start: Int
    $pageSize: Int
    $sort: [String]
  ) {
    exams(
      sort: $sort
      pagination: { page: $start, pageSize: $pageSize }
      filters: {
        streams: { stream_name: { eq: $streamName } }
        exam_level: { exam_level_name: { eq: $examLevel } }
        exam_mode: { exam_mode: { eq: $examMode } }
        exam_name: { containsi: $searchTerm }
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
          exam_name
          exam_url
          is_top
          is_featured
          exam_mode {
            data {
              attributes {
                exam_mode
              }
            }
          }
          application_date {
            id
            start_date
            end_date
          }
          nav_items(sort: "createdAt:asc", pagination: { limit: 20 }) {
            data {
              id
              attributes {
                title
              }
            }
          }
          exam_date {
            id
            start_date
            end_date
          }
          result_date {
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
        }
      }
    }
  }
`;

export const GET_FILTER_EXAM_BY_ID_QUERY = gql`
  query GetFilterdExam($examUrl: String) {
    exams(filters: { exam_url: { eq: $examUrl } }) {
      data {
        id
        attributes {
          exam_name
          exam_url
          exam_title
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
          updatedAt
          exam_mode {
            data {
              attributes {
                exam_mode
              }
            }
          }
          gallery {
            data {
              attributes {
                url
                ext
              }
            }
          }
          application_date {
            id
            start_date
            end_date
          }
          nav_items(sort: "createdAt:asc", pagination: { limit: 20 }) {
            data {
              id
              attributes {
                title
              }
            }
          }
          exam_date {
            id
            start_date
            end_date
          }
          result_date {
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
          review_component {
            likes {
              title
            }
            dislikes {
              title
            }
          }
          page_data {
            ... on ComponentCommonGallery {
              heading
              gallery_section: section {
                data {
                  attributes {
                    title
                  }
                }
              }
            }
            ... on ComponentCommonFaq {
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
            ... on ComponentCommonNewOverview {
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
              recommended_colleges_section: section {
                data {
                  attributes {
                    title
                  }
                }
              }
              colleges {
                data {
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
                  id
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

export const GET_EAXM_MDDE = gql`
  query {
    examModes {
      data {
        attributes {
          exam_mode
          exam_names {
            data {
              attributes {
                exam_name
              }
            }
          }
        }
      }
    }
  }
`;
