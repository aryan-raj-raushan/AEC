import { gql } from "@apollo/client";

export const GET_STREAM = gql`
  query Streams {
    streams(sort: "createdAt:asc", pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          icon {
            data {
              attributes {
                url
              }
            }
          }
          stream_name
          filter_sequence
          college_names {
            data {
              id
              attributes {
                college_name
              }
            }
          }
          courses {
            data {
              attributes {
                course_name
                filter_sequence
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
          exams {
            data {
              attributes {
                exam_name
              }
            }
          }
          content_for_colleges
          content_for_exams
          content_for_courses
        }
      }
    }
  }
`;

export const GET_STREAM_CONTENT = gql`
  query Streams($streamName: String!) {
    streams(filters: { stream_name: { eqi: $streamName } }) {
      data {
        id
        attributes {
          updatedAt
          stream_name
          content_for_colleges
          content_for_exams
          content_for_courses
          content_for_careers
          content_for_scholarships
          content_for_countries
        }
      }
    }
  }
`;

export const GET_STATE = gql`
  query {
    states(sort: "createdAt:asc", pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          state_name
          cities {
            data {
              attributes {
                city_name
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
`;

export const GET_CITY = gql`
  query {
    cities(sort: "createdAt:asc", pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          city_name
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
`;

export const GET_EXAM_LEVEL = gql`
  query {
    examLevels(sort: "createdAt:asc", pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          exam_level_name
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
`;

export const GET_COURSE_LEVEL = gql`
  query {
    courseLevels(sort: "createdAt:asc", pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          course_level_name
          courses {
            data {
              attributes {
                course_name
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_COLLEGE_TYPE = gql`
  query {
    collegesTypes(sort: "createdAt:asc", pagination: { limit: 1000 }) {
      data {
        attributes {
          college_type
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
  }
`;
export const GET_RANKING_BODY = gql`
  query {
    rankingBodies(sort: "createdAt:asc", pagination: { limit: 1000 }) {
      data {
        attributes {
          ranking_body_name
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
  }
`;
export const GET_APPROVED_BY = gql`
  query {
    organisations(sort: "createdAt:asc", pagination: { limit: 1000 }) {
      data {
        attributes {
          organisation_name
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
  }
`;

export const GET_COUNTRY = gql`
  query {
    countries {
      data {
        attributes {
          country_name
          country_url
          states {
            data {
              attributes {
                state_name
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
  }
`;

export const GET_BOARDS = gql`
  query {
    boards {
      data {
        attributes {
          board_name
        }
      }
    }
  }
`;

export const GET_VIRTUAL_TOUR = gql`
  query {
    virtualTours {
      data {
        attributes {
          heading
          title
          description
          video {
            data {
              attributes {
                url
              }
            }
          }
          images {
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

export const GET_SELECT_TEST = gql`
  query {
    selectTests {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;

export const GET_AFFINITY_MEDIA = gql`
  query {
    affinityMedias {
      data {
        id
        attributes {
          newspaper {
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            heading
            title
          }
          awards {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            title
            heading
          }
          articles {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            publish_date
            title
            sub_title
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
  }
`;
