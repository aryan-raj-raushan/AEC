import { gql } from "@apollo/client";

export const GET_ALL_COURSE_QUERY = gql`
  query {
    courses(sort: "createdAt:asc", pagination: { limit: 100 }) {
      data {
        id
        attributes {
          is_top
          course_url
          is_featured
          course_name
          average_fee
          filter_sequence
          rating
          course_level {
            data {
              attributes {
                course_level_name
              }
            }
          }
          specializations {
            data {
              attributes {
                specialization_name
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
          streams {
            data {
              id
              attributes {
                stream_name
              }
            }
          }
          colleges {
            data {
              id
              attributes {
                college_name
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
              id
              attributes {
                url
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

export const GET_FILTER_COURSE_QUERY = gql`
  query GetFilterdCourse(
    $streamName: String
    $courseLevel: String
    $searchTerm: String
    $start: Int
    $pageSize: Int
    $sort: [String]
  ) {
    courses(
      sort: $sort
      filters: {
        streams: { stream_name: { eq: $streamName } }
        course_level: { course_level_name: { eq: $courseLevel } }
        course_name: { containsi: $searchTerm }
      }
      pagination: { page: $start, pageSize: $pageSize }
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
          course_name
          course_url
          filter_sequence
          is_top
          is_featured
          rating
          average_fee
          specializations {
            data {
              attributes {
                specialization_name
              }
            }
          }
          course_level {
            data {
              attributes {
                course_level_name
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
          streams {
            data {
              id
              attributes {
                stream_name
              }
            }
          }
          colleges {
            data {
              id
              attributes {
                college_name
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
              id
              attributes {
                url
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

export const GET_FILTER_COURSE_BY_ID_QUERY = gql`
  query GetFilterdCourseById($courseUrl: String) {
    courses(filters: { course_url: { eq: $courseUrl } }) {
      data {
        id
        attributes {
          course_name
          course_url
          course_title
          filter_sequence
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
          rating
          average_fee
          updatedAt
          gallery {
            data {
              attributes {
                url
                ext
              }
            }
          }
          specializations {
            data {
              attributes {
                specialization_name
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
          banner {
            data {
              attributes {
                url
              }
            }
          }
          course_level {
            data {
              attributes {
                course_level_name
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
          streams {
            data {
              id
              attributes {
                stream_name
              }
            }
          }
          colleges {
            data {
              id
              attributes {
                college_name
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
                    colleges {
                      data {
                        attributes {
                          college_name
                        }
                      }
                    }
                    courses {
                      data {
                        attributes {
                          course_name
                        }
                      }
                    }
                    exams {
                      data {
                        attributes {
                          exam_name
                        }
                      }
                    }
                    scholarships {
                      data {
                        attributes {
                          scholarship_title
                        }
                      }
                    }
                    careers {
                      data {
                        attributes {
                          career_title
                        }
                      }
                    }
                    average_cost_living
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
