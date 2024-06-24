import { gql } from "@apollo/client";

export const GET_ALL_SCHOLARSHIPS_QUERY = gql`
  query GetScholarshipFilter(
    $country: String
    $scholarshipType: String
    $eligibulityCriteria: String
    $provider: String
    $searchTerm: String
    $start: Int
    $pageSize: Int
    $sort: [String]
  ) {
    scholarships(
      sort: $sort
      pagination: { page: $start, pageSize: $pageSize }
      filters: {
        country: { country_name: { eq: $country } }
        eligibility: { eq: $eligibulityCriteria }
        type: { title: { eq: $scholarshipType } }
        conducted_by: { organisation_name: { eq: $provider } }
        or: [
          { country: { country_name: { containsi: $searchTerm } } }
          { eligibility: { containsi: $searchTerm } }
          { type: { title: { containsi: $searchTerm } } }
          { scholarship_title: { containsi: $searchTerm } }
          { conducted_by: { organisation_name: { containsi: $searchTerm } } }
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
          is_top
          is_featured
          scholarship_url
          logo {
            data {
              attributes {
                url
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
          scholarship_title
          conducted_by {
            data {
              attributes {
                organisation_name
              }
            }
          }
          eligibility
          type {
            data {
              attributes {
                title
              }
            }
          }
          number_of_scholarship
          amount
          colleges {
            data {
              attributes {
                college_name
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

export const GetSingleScholarshipById = gql`
  query Scholarship($scholarshipUrl: String) {
    scholarships(filters: { scholarship_url: { eq: $scholarshipUrl } }) {
      data {
        id
        attributes {
          is_top
          scholarship_url
          is_featured
          gallery {
            data {
              attributes {
                url
                ext
              }
            }
          }
          scholarship_title
          number_of_scholarship
          amount
          updatedAt
          eligibility
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
          blogs(pagination: { limit: 4 }) {
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
          nav_items {
            data {
              id
              attributes {
                title
              }
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

export const ScholarshipTypeData = gql`
  query ScholarshipTypes {
    scholarshipTypes {
      data {
        id
        attributes {
          title
          scholarships {
            data {
              id
              attributes {
                scholarship_title
              }
            }
          }
        }
      }
    }
  }
`;
