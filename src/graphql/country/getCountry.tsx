import { gql } from "@apollo/client";

export const GET_ALL_COUNTRY = gql`
  query {
    countries(pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          country_name
          country_url
          display_sequence
          short_description
          average_cost_living
          is_top
          is_featured
          global_rank
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
          color
          banner {
            data {
              attributes {
                url
              }
            }
          }
          listing_banner {
            data {
              attributes {
                url
              }
            }
          }
          mascot_image {
            data {
              attributes {
                url
              }
            }
          }
          colleges {
            data {
              id
              attributes {
                college_name
                college_title
                college_url
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
                city {
                  data {
                    attributes {
                      city_name
                    }
                  }
                }
                state {
                  data {
                    attributes {
                      state_name
                    }
                  }
                }
                college_type {
                  data {
                    attributes {
                      college_type
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
          flags {
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

export const GET_FILTERD_COUNTRY = gql`
  query GetAllCountry($countryName: String) {
    countries(filters: { country_name: { eq: $countryName } }) {
      data {
        id
        attributes {
          country_name
          country_url
          short_description
          average_cost_living
          is_top
          is_featured
          global_rank
          display_sequence
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
          color
          banner {
            data {
              attributes {
                url
              }
            }
          }
          listing_banner {
            data {
              attributes {
                url
              }
            }
          }
          mascot_image {
            data {
              attributes {
                url
              }
            }
          }
          colleges {
            data {
              id
              attributes {
                college_name
                college_title
                college_url
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
                city {
                  data {
                    attributes {
                      city_name
                    }
                  }
                }
                state {
                  data {
                    attributes {
                      state_name
                    }
                  }
                }
                college_type {
                  data {
                    attributes {
                      college_type
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
          flags {
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

export const getCountryById = gql`
  query GetCountriesById($countryUrl: String) {
    countries(filters: { country_url: { eq: $countryUrl } }) {
      data {
        id
        attributes {
          country_name
          country_url
          display_sequence
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
          flags {
            data {
              attributes {
                url
              }
            }
          }
          states {
            data {
              id
              attributes {
                state_name
              }
            }
          }
          region {
            data {
              id
              attributes {
                region_name
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
          gallery {
            data {
              attributes {
                url
                ext
              }
            }
          }
          nav_items {
            data {
              attributes {
                title
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
              # gallery {
              #   data {
              #     attributes {
              #       url
              #       formats
              #       size
              #     }
              #   }
              # }
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
            ... on ComponentCommonCollegesComponent {
              id
              heading
              colleges_section: section {
                data {
                  id
                  attributes {
                    title
                  }
                }
              }
            }
            ... on ComponentCommonExamsComponent {
              id
              heading
              exams_section: section {
                data {
                  id
                  attributes {
                    title
                  }
                }
              }
            }
            ... on ComponentCommonCareersComponent {
              id
              heading
              careers_section: sections {
                data {
                  id
                  attributes {
                    title
                  }
                }
              }
            }
            ... on ComponentCommonScholarshipComponent {
              id
              heading
              scholarship_section: section {
                data {
                  id
                  attributes {
                    title
                  }
                }
              }
            }
            ... on ComponentCommonCoursesComponent {
              id
              heading
              courses_section: section {
                data {
                  id
                  attributes {
                    title
                  }
                }
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
                    id
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
                college_type {
                  data {
                    id
                    attributes {
                      college_type
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
                ranked_by {
                  data {
                    id
                    attributes {
                      ranking_body_name
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
              }
            }
          }
          exams {
            data {
              id
              attributes {
                logo {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                exam_level {
                  data {
                    id
                    attributes {
                      exam_level_name
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
                result_date {
                  id
                  start_date
                  end_date
                }
                exam_name
                nav_items {
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
          careers {
            data {
              id
              attributes {
                career_title
                banner {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                average_startin_salary
                job_types {
                  data {
                    id
                    attributes {
                      job_type_title
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
              }
            }
          }
          scholarships {
            data {
              id
              attributes {
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
                number_of_scholarship
                scholarship_title
                conducted_by {
                  data {
                    id
                    attributes {
                      organisation_name
                    }
                  }
                }
                eligibility
                type {
                  data {
                    id
                    attributes {
                      title
                    }
                  }
                }
                amount
              }
            }
          }
          courses {
            data {
              id
              attributes {
                course_name
                logo {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                type {
                  data {
                    id
                    attributes {
                      course_type
                    }
                  }
                }
                average_fee
                rating
                course_level {
                  data {
                    id
                    attributes {
                      course_level_name
                    }
                  }
                }
                course_title
                approved_by {
                  data {
                    id
                    attributes {
                      organisation_name
                    }
                  }
                }
                specializations {
                  data {
                    id
                    attributes {
                      specialization_name
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
              }
            }
          }
        }
      }
    }
  }
`;
