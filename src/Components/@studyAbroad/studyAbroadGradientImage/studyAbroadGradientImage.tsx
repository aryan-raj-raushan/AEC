import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import StudyCarousel from "../studyAbroadCarousel/studyAbroadCarousel";
import { slideInFromLeft } from "@/utils/motion";
import { Campus_1, HomeSlider } from "@/src/Asset";
import useCommonApi from "@/src/Hooks/useCommonApi";

const GradientImage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const {AllVirtualTourData} = useCommonApi()

  const VirtualTourVedio = AllVirtualTourData?.video?.data?.attributes?.url;

  const VirtualTourImage = AllVirtualTourData?.images?.data  || [];;

  const slides = VirtualTourImage.map((imageData: any, index:any) => (
    <div key={index} className="shadow-lg rounded-md m-1">
      <Image src={imageData.attributes.url} objectFit="cover" alt={`Campus ${index + 1}`} width={200} height={200} />
    </div>
  ));

  const handleExploreClick = () => {
    setShowVideo(true);
  };

  return (
    <section className="max-w-screen-xl px-4 mx-auto pt-3 relative">
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9">
          <div className="absolute inset-0">
            <div className="float-end space-x-2 gap-1 campusSvg">
              <div className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="22"
                  viewBox="0 0 34 22"
                  fill="none"
                >
                  <path
                    d="M16.6 0.175537C8.3 0.175537 0 2.12826 0 5.91884V12.8108C0 16.3717 7.58857 18.3244 15.4143 18.5541V20.8514C15.4143 21.3109 15.6514 21.7704 16.1257 21.8852C16.2443 22.0001 16.4814 22.0001 16.6 22.0001C16.9557 22.0001 17.1929 21.8852 17.43 21.6555L24.5443 14.7635C25.0186 14.3041 25.0186 13.6149 24.5443 13.1554L17.43 6.26344C17.0743 5.91884 16.6 5.80397 16.1257 6.03371C15.6514 6.14857 15.4143 6.60804 15.4143 7.0675V9.36482C7.23286 9.13509 2.37143 7.0675 2.37143 5.91884C2.37143 4.65531 7.82571 2.47286 16.6 2.47286C25.3743 2.47286 30.8286 4.65531 30.8286 5.91884C30.8286 6.60804 31.3029 7.0675 32.0143 7.0675C32.7257 7.0675 33.2 6.60804 33.2 5.91884C33.2 2.12826 24.9 0.175537 16.6 0.175537Z"
                    fill="white"
                  />
                </svg>
                360 View
              </div>
              <div className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                >
                  <path
                    d="M12.25 7V45.5H43.75V7H12.25ZM10.5 3.5H45.5C45.9641 3.5 46.4092 3.68437 46.7374 4.01256C47.0656 4.34075 47.25 4.78587 47.25 5.25V47.25C47.25 47.7141 47.0656 48.1592 46.7374 48.4874C46.4092 48.8156 45.9641 49 45.5 49H10.5C10.0359 49 9.59075 48.8156 9.26256 48.4874C8.93437 48.1592 8.75 47.7141 8.75 47.25V5.25C8.75 4.78587 8.93437 4.34075 9.26256 4.01256C9.59075 3.68437 10.0359 3.5 10.5 3.5Z"
                    fill="white"
                  />
                  <path
                    d="M3.5 45.5H52.5V49H3.5V45.5ZM17.5 10.5H24.5V15.75H17.5V10.5Z"
                    fill="white"
                  />
                  <path
                    d="M21 45.5H35V42C35 40.1435 34.2625 38.363 32.9497 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0503 37.0503C21.7375 38.363 21 40.1435 21 42V45.5ZM28 31.5C30.7848 31.5 33.4555 32.6062 35.4246 34.5754C37.3938 36.5445 38.5 39.2152 38.5 42V49H17.5V42C17.5 39.2152 18.6062 36.5445 20.5754 34.5754C22.5445 32.6062 25.2152 31.5 28 31.5ZM17.5 21H24.5V26.25H17.5V21ZM31.5 10.5H38.5V15.75H31.5V10.5ZM31.5 21H38.5V26.25H31.5V21Z"
                    fill="white"
                  />
                </svg>
                {AllVirtualTourData?.title}
              </div>
            </div>
          </div>
          <Image src={HomeSlider} objectFit="object-cover" alt="" />
        </div>
        <motion.div
          className="absolute inset-0 md:flex hidden items-center justify-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <div className="text-white text-left home-cl">
            <div className="dc">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromLeft(0.5)}
              >
                <h1 className="text-[2rem] font-bold mb-4 home-heading">
                  {/* Enjoy a Virtual
                  <br /> Campus tour
                  <br /> while at home */}
                  {AllVirtualTourData?.heading}
                </h1>
                <p className="text-lg">
                  {/* Affinity Education offers you the virtual tour of
                  <br /> all the campus’ monuments in the comfort
                  <br /> of your home or, any of your spaces. */}
                  {AllVirtualTourData?.description}
                </p>
                <button
                  className="mt-5  bg-primary text-white p-[10px] w-60 rounded-md flex gap-8 items-center justify-center"
                  onClick={handleExploreClick}
                >
                  Explore
                </button>
              </motion.div>
              <div className="md:order-2 pr-8">
                <div className="flex gap-5 mt-g">
                  <StudyCarousel
                    buttonBorderColor="border-primary-text"
                    buttonTextColor="text-primary-text"
                    slides={slides}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {showVideo && (
        <div className="inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className=" w-full h-full">
            <iframe
              title="YouTube Video"
              width="100%"
              height="100%"
              src={VirtualTourVedio}
              frameBorder="0"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
            <button
              className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 rounded-full p-2 focus:outline-none"
              onClick={() => setShowVideo(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GradientImage;
