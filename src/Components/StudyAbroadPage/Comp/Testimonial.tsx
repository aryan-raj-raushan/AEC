import CarouselSideBtn from '@/src/Components/carousel/carousel-side-button'
import ColoredTag from '@/src/Components/tag/coloredTag'
import React from 'react'

const Testimonial = ({TestimonialListData,}:any) => {
  return (
   <>

<section className="bg-white mt-5">
            <div className="max-w-screen-xl mx-auto px-4 pt-2 pb-16">
              <div className="">
                <ColoredTag
                  text="Testimonials"
                  bgColor="bg-blue-300"
                  textColor="text-black"
                  fontSize="text-sm"
                />
              </div>
              <div className="md:w-full md:text-3xl text-2xl font-bold mt-4">
                Let the Outcomes do the talking.
              </div>
              <div className="md:w-2/3 my-2 ">
                Proof of achievement, competence, and exceptional performance –
                let the undeniable results be a testament to our commitment to
                excellence and success
              </div>
              <div>
                <div>
                  <CarouselSideBtn
                    buttonBorderColor="border-primary-text"
                    buttonTextColor="text-primary-text"
                    slides={TestimonialListData?.map((item:any, index:any) => (
                      <div
                        key={index}
                        className="shadow-lg rounded-md m-1 relative"
                      >
                        <img
                          src={item.attributes.banner.data[0].attributes.url}
                          alt=""
                          className="w-[370px] h-[370px] object-fill rounded-t-md"
                        />
                        <div className="absolute top-12 right-0 bottom-0 w-1/2 left-12">
                          <p className="text-white text-base font-semibold tracking-wide font-work-sans line-clamp-[10]">
                            {item?.attributes?.testimonial}
                          </p>
                        </div>
                        <div className="p-4">
                          <p className="text-lg font-medium">{item.title}</p>
                          <div className="flex gap-1 items-center text-[17px] line-clamp-1 justify-between">
                            <p className="line-clamp-1 w-[60%]">
                              {
                                item?.attributes?.college?.data?.attributes
                                  ?.college_name
                              }
                            </p>

                            <p className="flex items-center gap-2 w-[40%] justify-end text-end">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="5"
                                  height="5"
                                  viewBox="0 0 5 5"
                                  fill="none"
                                >
                                  <circle
                                    cx="2.5"
                                    cy="2.5"
                                    r="2.5"
                                    fill="#020014"
                                  />
                                </svg>
                              </span>
                              <span className="">{item?.attributes?.year}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  />
                </div>
              </div>
            </div>
          </section>
   </>
  )
}

export default Testimonial