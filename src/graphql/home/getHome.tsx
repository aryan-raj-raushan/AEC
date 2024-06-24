import { gql } from "@apollo/client";

export const GetHeroSection = gql`
query{
    heroSections{
      data{
        attributes{
          header_text
          description
          button_type{
            button_title
            button_link
          }
          trusted_by{
            data{
              attributes{
                url
              }
            }
          }
          hero_image{
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
`

export const GetFeturedSection = gql`
query{
    featuredSections{
      data{
        attributes{
          heading
          text_section{
            header_text
            description_text
          }
          pointers{
            heading
            description
          }
          images{
            data{
              attributes{
                url
              }
            }
          }
          button{
            button_title
            button_link
          }
        }
      }
      
    }
  }
`

export const GetTestimonial = gql`
query{
  testimonials{
    data{
      attributes{
        banner{
          data{
            attributes{
              url
            }
          }
        }
        name
        year
        testimonial
        college{
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
`

export const GetEventBanner = gql`
query{
  eventBanners{
    data{
			attributes{
        event_banner{
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
`