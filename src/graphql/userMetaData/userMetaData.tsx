import { gql } from "@apollo/client";

export const createUserMetaData = gql`
  mutation CreateUsersMetaData(
    $name: String
    $email: String
    $number: String
    $userDataId: ID!
    $publishedAt: DateTime!
  ) {
    createUsersMetaData(
      data: {
        name: $name
        email: $email
        number: $number
        user_data: $userDataId
        publishedAt: $publishedAt
      }
    ) {
      data {
        id
      }
    }
  }
`;

export const updateUserMetaData = gql`
  mutation UpdateUsersMetaData(
    $id: ID!
    $gender: String
    $city: String
    $name: String
    $course: ID
    $graduationDetails: ComponentCommonGraduationInfoComponentInput
    $secondaryDetails: ComponentCommon12ThClassInfoComponentInput
    $primaryDetails: ComponentCommon10thClassInfoComponentInput
    $appliedColleges: [ComponentUsermetaAppliedCollegesComponentInput]
    $professionalExperience: [ComponentUsermetaProfessionalExperienceComponentInput]
  ) {
    updateUsersMetaData(
      id: $id
      data: {
        gender: $gender
        city: $city
        name: $name
        courseInterested: $course
        graduationDetails: $graduationDetails
        educationDetailsSecondary: $secondaryDetails
        educationDetailsPrimary: $primaryDetails
        applied_colleges: $appliedColleges
        professionalExperience: $professionalExperience
      }
    ) {
      data {
        attributes {
          name
          email
        }
      }
    }
  }
`;

export const getAllUserMetaDataID = gql`
  query UsersMetaData($id: ID!) {
    usersMetaData(id: $id) {
      data {
        id
        attributes {
          name
          email
          number
          gender
          city
          user_data {
            data {
              id
              attributes {
                stream {
                  data {
                    attributes {
                      stream_name
                    }
                  }
                }
                courseLevel {
                  data {
                    id
                    attributes {
                      course_level_name
                    }
                  }
                }
              }
            }
          }
          applied_colleges {
            id
            college {
              data {
                id
                attributes {
                  college_name
                  college_url
                  createdAt
                  updatedAt
                  banner {
                    data {
                      attributes {
                        url
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
            current_step {
              data {
                id
                attributes {
                  step_name
                }
              }
            }
          }
          graduationDetails {
            id
            institutionName
            passingYear
            gradingSystem
            grade
            course
          }
          courseInterested {
            data {
              id
              attributes {
                course_name
              }
            }
          }
          educationDetailsSecondary {
            id
            schoolName
            city
            passingYear
            gradingSystem
            grade
            board
            stream
          }
          educationDetailsPrimary {
            id
            schoolName
            city
            passingYear
            gradingSystem
            grade
            board
          }
          professionalExperience {
            id
            organizationName
            jobPosition
            jobStart
            jobEnd
          }
          applied_courses {
            id
            courses {
              data {
                id
                attributes {
                  course_name
                }
              }
            }
            current_step {
              data {
                id
                attributes {
                  step_name
                }
              }
            }
          }
          applied_exams {
            id
            exams {
              data {
                id
                attributes {
                  exam_url
                  exam_name
                }
              }
            }
            current_step {
              data {
                id
                attributes {
                  step_name
                }
              }
            }
          }
          applied_scholarships {
            id
            current_step {
              data {
                id
                attributes {
                  step_name
                }
              }
            }
            scholarships {
              data {
                id
                attributes {
                  scholarship_title
                }
              }
            }
          }
          careers_interested {
            id
            current_step {
              data {
                id
                attributes {
                  step_name
                }
              }
            }
            careers {
              data {
                id
                attributes {
                  career_title
                }
              }
            }
          }
          countries_interested {
            id
            current_step {
              data {
                id
                attributes {
                  step_name
                }
              }
            }
            countries {
              data {
                id
                attributes {
                  country_name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const SaveCollege = gql`
  mutation UpdateUsersMetaData(
    $id: ID!
    $save_college: [ComponentCommonSaveCollegeInput]
  ) {
    updateUsersMetaData(id: $id, data: { save_college: $save_college }) {
      data {
        attributes {
          name
          email
        }
      }
    }
  }
`;

export const getSaveCollegeById = gql`
  query UsersMetaDatas($id: ID!, $collegeId: ID) {
    usersMetaDataes(
      filters: {
        id: { eq: $id }
        save_college: { colleges: { id: { eq: $collegeId } } }
      }
    ) {
      data {
        id
        attributes {
          save_college {
            id
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
`;

export const SaveExam = gql`
  mutation UpdateUsersMetaData(
    $id: ID!
    $save_exam: [ComponentCommonSaveExamInput]
  ) {
    updateUsersMetaData(id: $id, data: { save_exam: $save_exam }) {
      data {
        attributes {
          name
          email
        }
      }
    }
  }
`;

export const getSaveExamById = gql`
  query UsersMetaDatas($id: ID!, $examId: ID) {
    usersMetaDataes(
      filters: {
        id: { eq: $id }
        save_exam: { exams: { id: { eq: $examId } } }
      }
    ) {
      data {
        id
        attributes {
          save_exam {
            id
            exams {
              data {
                id
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

export const SaveCourse = gql`
  mutation UpdateUsersMetaData(
    $id: ID!
    $save_course: [ComponentCommonSaveCourseInput]
  ) {
    updateUsersMetaData(id: $id, data: { save_course: $save_course }) {
      data {
        attributes {
          name
          email
        }
      }
    }
  }
`;

export const getSaveCourseById = gql`
  query UsersMetaDatas($id: ID!, $courseId: ID) {
    usersMetaDataes(
      filters: {
        id: { eq: $id }
        save_course: { courses: { id: { eq: $courseId } } }
      }
    ) {
      data {
        id
        attributes {
          save_course {
            id
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
  }
`;

export const SaveCareer = gql`
  mutation UpdateUsersMetaData(
    $id: ID!
    $save_careers: [ComponentCommonSaveCareersInput]
  ) {
    updateUsersMetaData(id: $id, data: { save_careers: $save_careers }) {
      data {
        attributes {
          name
          email
        }
      }
    }
  }
`;

export const getSaveCareerById = gql`
  query UsersMetaDatas($id: ID!, $careerId: ID) {
    usersMetaDataes(
      filters: {
        id: { eq: $id }
        save_careers: { careers: { id: { eq: $careerId } } }
      }
    ) {
      data {
        id
        attributes {
          save_careers {
            id
            careers {
              data {
                id
                attributes {
                  career_title
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const SaveScholarships = gql`
  mutation UpdateUsersMetaData(
    $id: ID!
    $save_scholarships: [ComponentCommonSaveScholarshipsInput]
  ) {
    updateUsersMetaData(
      id: $id
      data: { save_scholarships: $save_scholarships }
    ) {
      data {
        attributes {
          name
          email
        }
      }
    }
  }
`;

export const getSaveScholarshipsById = gql`
  query UsersMetaDatas($id: ID!, $scholarshipsId: ID) {
    usersMetaDataes(
      filters: {
        id: { eq: $id }
        save_scholarships: { scholarships: { id: { eq: $scholarshipsId } } }
      }
    ) {
      data {
        id
        attributes {
          save_scholarships {
            id
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
  }
`;

// ======

// Define your queries and mutations
export const GET_USER_METADATA_COLLEGE = gql`
  query GetUserMetadata($id: ID!) {
    usersMetaDataes(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          save_college {
            colleges {
              data {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_USER_METADATA_EXAM = gql`
  query GetUserMetadata($id: ID!) {
    usersMetaDataes(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          save_exam {
            exams {
              data {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_USER_METADATA_COURSE = gql`
  query GetUserMetadata($id: ID!) {
    usersMetaDataes(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          save_course {
            courses {
              data {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_USER_METADATA_CAREER = gql`
  query GetUserMetadata($id: ID!) {
    usersMetaDataes(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          save_careers {
            careers {
              data {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_USER_METADATA_SCHOLARSHIP = gql`
  query GetUserMetadata($id: ID!) {
    usersMetaDataes(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          save_scholarships {
            scholarships {
              data {
                id
              }
            }
          }
        }
      }
    }
  }
`;
