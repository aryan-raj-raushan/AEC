import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft } from "@/utils/motion";
import ColoredTag from "../tag/coloredTag";
import CarouselSideBtn from "../carousel/carousel-side-button";

const TestimonialSection = ({ TestimonialListData }: any) => {
  return (
    <section className="bg-white">
      <motion.div
        className="max-w-screen-xl mx-auto px-4 sm:py-6 py-2 lg:py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div className="mb-2.5" variants={slideInFromLeft(1)}>
          <ColoredTag
            text="Testimonials"
            bgColor="bg-blue-300"
            textColor="text-black"
            fontSize="text-sm"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/3 sm:text-4xl text-2xl leading-tight font-bold"
          initial="visible"
        >
          Let the Outcomes do the talking.
        </motion.div>
        <motion.div className="lg:w-4/6 my-4" variants={slideInFromLeft(0.5)}>
          Proof of achievement, competence, and exceptional performance – let
          the undeniable results be a testament to our commitment to excellence
          and success.
        </motion.div>
        <motion.div variants={slideInFromBottom(1)}>
          <div>
            <CarouselSideBtn
              buttonBorderColor="border-primary-text"
              buttonTextColor="text-primary-text"
              slides={TestimonialListData?.map((item: any, index: any) => (
                <div key={index} className="shadow-lg rounded-md m-1 relative">
                  <img
                    src={item?.attributes?.banner?.data[0]?.attributes?.url}
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
                          item?.attributes?.college?.data?.attributes
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
                        <span>{item?.attributes?.year}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
