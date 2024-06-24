import CarouselSideBtn from '@/src/Components/carousel/carousel-side-button'
import ColoredTag from '@/src/Components/tag/coloredTag'
import useHomeSetion from '@/src/Hooks/useHomeSetion';
import React from 'react'

const Testimonial = () => {
    const { TestimonialListData } = useHomeSetion();
  return (
    <>
     <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-10">
          <div className="mb-2.5">
            <ColoredTag
              text="Testimonials"
              bgColor="bg-blue-300"
              textColor="text-black"
              fontSize="text-sm"
            />
          </div>
          <div className="w-full align-middle text-[2rem] leading-tight font-bold">
            Let the Outcomes do the talking.
          </div>
          <div className="w-full md:w-4/6 my-4">
            Proof of achievement, competence, and exceptional performance – let
            the undeniable results be a testament to our commitment to
            excellence and success
          </div>
          <div>
            <div>
              <CarouselSideBtn
                buttonBorderColor="border-primary-text"
                buttonTextColor="text-primary-text"
                slides={TestimonialListData?.map((item, index) => (
                  <div
                    key={index}
                    className="shadow-lg rounded-md m-1 relative"
                  >
                    <img
                      src={item.attributes.banner.data[0].attributes.url}
                      alt=""
                      className="w-[370px] h-[370px] object-fill object-center rounded-t-md"
                    />
                    <div className="absolute top-4 md:top-[15%] right-0 bottom-0 w-[80%] left-6">
                      <p className="text-white sm:text-base text-sm font-semibold tracking-wide font-work-sans line-clamp-6">
                        {item?.attributes?.testimonial}
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="text-lg font-medium">{item.title}</p>
                      <div className="flex gap-1 items-center text-[17px] line-clamp-1 justify-between">
                        <p className="line-clamp-1 w-[60%] md:text-base text-sm">
                          {
                            item?.attributes?.colleges?.data[0]?.attributes
                              ?.college_name
                          }
                        </p>

                        <p className="flex items-center line-clamp-1 gap-2 w-[40%] md:text-base text-xs justify-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="5"
                            viewBox="0 0 5 5"
                            fill="none"
                          >
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#020014" />
                          </svg>
                          <span className=""> {item?.attributes?.year}</span>
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