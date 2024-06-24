import { gql } from "@apollo/client";

export const getAllCollegeQueryFilter = gql`
  query GetAllColleges(
    $streamName: String
    $stateName: String
    $cityName: String
    $start: Int
    $pageSize: Int
    $courses: String
    $college_type: String
    $ranked_by: String
    $approved_by: String
    $searchTerm: String
    $sort: [String]
    $countryName: String
  ) {
    colleges(
      sort: $sort
      pagination: { page: $start, pageSize: $pageSize }
      filters: {
        streams: { stream_name: { eq: $streamName } }
        country: { country_name: { eq: $countryName } }
        city: { city_name: { eq: $cityName } }
        state: { state_name: { eq: $stateName } }
        courses: { course_name: { eq: $courses } }
        college_type: { college_type: { eq: $college_type } }
        ranked_by: { ranking_body_name: { eq: $ranked_by } }
        approved_by: { organisation_name: { eq: $approved_by } }
        or: [
          { college_name: { containsi: $searchTerm } }
          { streams: { stream_name: { containsi: $searchTerm } } }
          { city: { city_name: { containsi: $searchTerm } } }
          { state: { state_name: { containsi: $searchTerm } } }
          { country: { country_name: { containsi: $searchTerm } } }
          { ranked_by: { ranking_body_name: { containsi: $searchTerm } } }
          { approved_by: { organisation_name: { containsi: $searchTerm } } }
          { college_type: { college_type: { containsi: $searchTerm } } }
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
          college_name
          display_sequence
          top_college_sequence
          pin_code
          college_url
          country {
            data {
              id
              attributes {
                country_name
              }
            }
          }
          dawonload_brochure {
            data {
              attributes {
                url
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
          country {
            data {
              id
              attributes {
                country_name
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
          approved_by {
            data {
              id
              attributes {
                organisation_name
              }
            }
          }
          Courses {
            course_fee
            course_name {
              data {
                attributes {
                  course_name
                }
              }
            }
          }
          courses {
            data {
              id
              attributes {
                course_name
                updatedAt
                course_url
                average_fee
                rating
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
                type {
                  data {
                    attributes {
                      course_type
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
                course_level {
                  data {
                    attributes {
                      course_level_name
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
                colleges {
                  data {
                    attributes {
                      college_name
                    }
                  }
                }
              }
            }
          }
          streams {
            data {
              id
              attributes {
                stream_name
                content_for_colleges
                content_for_exams
                content_for_courses
              }
            }
          }
          is_top
          is_featured
          college_type {
            data {
              id
              attributes {
                college_type
              }
            }
          }
          banner {
            data {
              attributes {
                url
                formats
                size
              }
            }
          }
          logo {
            data {
              attributes {
                url
                formats
                size
              }
            }
          }
        }
      }
    }
  }
`;

export const getAllCollegeQuery = gql`
  query {
    colleges(pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          college_name
          college_url
          top_college_sequence
          country {
            data {
              id
              attributes {
                country_name
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
                course_url
                average_fee
                rating
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
                type {
                  data {
                    attributes {
                      course_type
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
                course_level {
                  data {
                    attributes {
                      course_level_name
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
                colleges {
                  data {
                    attributes {
                      college_name
                    }
                  }
                }
              }
            }
          }
          streams {
            data {
              id
              attributes {
                stream_name
                content_for_colleges
                content_for_exams
                content_for_courses
              }
            }
          }
          is_top
          is_featured
          college_type {
            data {
              id
              attributes {
                college_type
              }
            }
          }
          banner {
            data {
              attributes {
                url
                formats
                size
              }
            }
          }
          logo {
            data {
              attributes {
                url
                formats
                size
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

export const GET_COLLEGE_BY_ID_QUERY = gql`
    query GetCollegeById($collegeUrl: String) {
    colleges(filters: { college_url: { eq: $collegeUrl } }) {
      data {
        id
        attributes {
          college_name
          college_url
          college_title
          top_college_sequence
          updatedAt
          gallery {
            data {
              attributes {
                url
                ext
              }
            }
          }
          review {
            user_details {
              name
              email
            }
            infrastructure_hostel_facilities_detail
            infrastructure_hostel_facilities_rating
            academics_faculty_details
            academics_faculty_rating
            placements_internships_details
            placements_internships_rating
            crowd_campus_life_details
            crowd_campus_life_rating
            fees_scholarships_details
            fees_scholarships_rating
            overallrating
          }
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
          dawonload_brochure {
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
          country {
            data {
              id
              attributes {
                country_name
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
          ranked_by {
            data {
              id
              attributes {
                ranking_body_name
              }
            }
          }
          streams {
            data {
              id
              attributes {
                stream_name
                content_for_colleges
                content_for_exams
                content_for_courses
              }
            }
          }
          is_top
          college_type {
            data {
              id
              attributes {
                college_type
              }
            }
          }
          courses {
            data {
              id
              attributes {
                course_name
                course_url
                average_fee
                rating
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
                type {
                  data {
                    attributes {
                      course_type
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
                course_level {
                  data {
                    attributes {
                      course_level_name
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
          news {
            data {
              id
              attributes {
                name
                content
                type
                excerpt
              }
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
                  id
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
              recommended_colleges_section: section {
                data {
                  id
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
              id
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
            ... on ComponentCommonDepartmentComponent {
              id
              heading
              courses {
                courses_name {
                  data {
                    id
                    attributes {
                      course_name
                      course_url
                    }
                  }
                }
                fee_amount
                fee_label
              }
              department_section: section {
                data {
                  attributes {
                    title
                  }
                }
              }
            }
            ... on ComponentCommonCourseComponent {
              id
              heading
              course_section: section {
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
              heading
              description
            }
            ... on ComponentCommonCompareComponent {
              id
              compare_section: section {
                data {
                  id
                  attributes {
                    title
                  }
                }
              }
              heading
              description
            }
          }
          banner {
            data {
              attributes {
                url
                formats
                size
              }
            }
          }
          logo {
            data {
              attributes {
                url
                formats
                size
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
          Courses {
            id
            course_fee
            course_lebel
            course_name {
              data {
                attributes {
                  course_name
                  rating
                  average_fee
                  course_level {
                    data {
                      id
                      attributes {
                        course_level_name
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
                  dawonload_brochure {
                    data {
                      id
                      attributes {
                        url
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
                }
              }
            }
            exam_accepted {
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
  }
`;

export const WriteReviews = gql`
  mutation UpdateCollege($id: ID!, $review: [ComponentCommonReviewInput]) {
    updateCollege(id: $id, data: { review: $review }) {
      data {
        attributes {
          college_name
          college_title
        }
      }
    }
  }
`;

export const GetReviewByID = gql`
  query GetRevewById($id: ID) {
    colleges(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          review {
            user_details {
              name
              email
            }
            infrastructure_hostel_facilities_detail
            infrastructure_hostel_facilities_rating
            academics_faculty_details
            academics_faculty_rating
            placements_internships_details
            placements_internships_rating
            crowd_campus_life_details
            crowd_campus_life_rating
            fees_scholarships_details
            fees_scholarships_rating
            overallrating
          }
        }
      }
    }
  }
`;

export const GetReviewForUserId = gql`
  query GetRevewById($id: ID, $email: String) {
    colleges(
      filters: {
        id: { eq: $id }
        review: { user_details: { email: { eq: $email } } }
      }
    ) {
      data {
        id
        attributes {
          review {
            user_details {
              name
              email
            }
            infrastructure_hostel_facilities_detail
            infrastructure_hostel_facilities_rating
            academics_faculty_details
            academics_faculty_rating
            placements_internships_details
            placements_internships_rating
            crowd_campus_life_details
            crowd_campus_life_rating
            fees_scholarships_details
            fees_scholarships_rating
            overallrating
          }
        }
      }
    }
  }
`;
