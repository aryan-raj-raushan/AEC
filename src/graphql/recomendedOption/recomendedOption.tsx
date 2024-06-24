import { gql } from "@apollo/client";

export const GET_RECOMENDED_COLLEGE = gql`
query{
  recommendedColleges{
    meta{
      pagination{
        total
        page
        pageSize
        pageCount
      }
    }
    data{
      attributes{
        colleges{
          data{
            id
            attributes{
              college_url
              college_name
              banner{
                data{
                  attributes{
                    url
                  }
                }
              }
              logo{
                data{
                  attributes{
                    url
                  }
                }
              }
              college_type{
                data{
                  attributes{
                    college_type
                  }
                }
              }
							city{
                data{
                  attributes{
                    city_name
                  }
                }
              }
              state{
                data{
                  attributes{
                    state_name
                  }
                }
              }
              ranked_by{
                data{
                  attributes{
                    ranking_body_name
                  }
                }
              }
              approved_by{
                data{
                  attributes{
                    organisation_name
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
`

export const GET_RECOMENDED_EXAM = gql`
{
  recommendedExams{
    meta{
      pagination{
        total
        page
        pageSize
        pageCount
      }
    }
    data{
      id
      attributes{
        exams{
          data{
            attributes{
			  exam_name
              logo{
                data{
                  attributes{
                   url 
                  }
                }
              }
              banner{
                data{
                  attributes{
                    url
                  }
                }
              }
              exam_mode{
                data{
                  attributes{
                    exam_mode
                  }
                }
              }
              exam_level{
                data{
                  attributes{
                    exam_level_name
                  }
                }
              }
           		exam_date{
                start_date
                end_date
              }
            }
          }
        }
      }
    }
  }
}
` 


export const  GET_RECOMENDED_COURSE = gql`
query{
   recommendedCourses{
    data{
      attributes{
        courses{
          data{
            id
            attributes{
              course_name
              type{
                data{
                  attributes{
                    course_type
                  }
                }
              }
              specializations{
                data{
                  attributes{
                    specialization_name
                  }
                }
              }
              approved_by{
                data{
                  attributes{
                    organisation_name
                  }
                }
              }
              average_fee
              rating
              course_title
              course_level{
                data{
                  attributes{
                    course_level_name
                  }
                }
              }
              banner{
                data{
                  attributes{
                    url
                  }
                }
              }
              logo{
                data{
                  attributes{
                    url
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
`

export const GET_RECOMENDED_SCHOLARSHIPS = gql`
query{
  recommendedScholarships{
    meta{
      pagination{
        total
        page
        pageSize
        pageCount
      }
    }
    data{
      attributes{
        scholarships{
          data{
            attributes{
              logo{
          data{
            attributes{
              url
            }
          }
        }
        banner{
          data{
            attributes{
              url
            }
          }
        }
        scholarship_title
        conducted_by{
          data{
            attributes{
              organisation_name
            }
          }
        }
				eligibility
        type{
          data{
            attributes{
              title
            }
          }
        }
				number_of_scholarship
        amount
        is_featured_scholarship
        colleges{
          data{
            attributes{
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
`

export const GET_RECOMENDED_NEWS = gql`
query{
  recommendedNewsses{
    data{
      attributes{
        news{
          data{
            attributes{
              name
              excerpt
							type 
              featured_image{
                data{
                  attributes{
                    name
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
`
export const GET_RECOMENDED_CAREAR = gql`
  query {
    recommendedCareers {
      data {
        attributes {
          careers {
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
              }
            }
          }
        }
      }
    }
  }
`;
