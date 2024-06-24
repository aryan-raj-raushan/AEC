import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Slider from "./CarouselComponent";

const HeroSection = ({ HeroListData }: any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [currentSlideData, setCurrentSlideData] = useState<any>(
    HeroListData[currentSlideIndex]?.attributes
  );

  const handleSlideChange = (index: number) => {
    // Ensure index is within the bounds of HeroListData array
    if (index >= 0 && index < HeroListData.length) {
      setCurrentSlideIndex(index);
      setCurrentSlideData(HeroListData[index]?.attributes);
    }
  };

  return (
    <motion.div
      className="nav-hero-section max-w-screen-xl flex relative mx-auto mt-10 md:mt-10 lg:mt-36 lg:h-[540px] rounded-xl"
      style={{
        background:
          "linear-gradient(180deg, #050038 0%, #050038 34.9%, #153F72 100%)",
      }}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="lg:w-1/2 flex flex-col sm:px-8 px-6 py-14 lg:p-14 gap-5"
        initial="hidden"
        animate="visible"
      >
        {/* Display header text */}
        <motion.h2
          variants={slideInFromTop}
          className="text-white sm:text-[52px] text-[35px] lg:text-[3.4rem] leading-tight font-bold tracking-wide lg:w-[450px] sm:w-[469px] w-[304px] min-h-[200px] sm:p-0 p-2 lg:mt-0 mt-4"
        >
          <span className="line-clamp-3">
            {currentSlideData?.header_text
              .split(" ")
              .map((word: any, index: any) =>
                index === 0 ? (
                  <span key={index} className="font-normal">
                    {word}{" "}
                  </span>
                ) : (
                  <span key={index} className="font-bold">
                    {word}{" "}
                  </span>
                )
              )}
          </span>
        </motion.h2>
        {/* Display description */}
        <motion.h6
          variants={slideInFromLeft(1.0)}
          className="text-base text-opacity-85 text-white font-work-sans font-light w-4/5 mih-h-[40px]"
        >
          {currentSlideData?.description}
        </motion.h6>
        {/* Display buttons */}
        <motion.div
          variants={slideInFromLeft(1.0)}
          className="flex items-center gap-6 my-4"
        >
          {currentSlideData?.button_type.map((btn: any, index: any) => {
            return (
              <button
                key={index}
                className={`font-work-sans text-base border-white border hover:drop-shadow-lg hover:shadow transition duration-200 hover:shadow-white font-medium px-4 py-2.5 h-[48px] rounded-md min-w-40 text-[17px] ${
                  index === 1 ? "bg-[#FFFFFF] text-black" : "text-white"
                }`}
              >
                {btn?.button_title}
              </button>
            );
          })}
        </motion.div>
        {/* Display trusted by */}
        <motion.div
          variants={slideInFromBottom(2.0)}
          className="h-[74px] overflow-hidden"
        >
          <h6 className="text-[#FFFC31] text-opacity-90 font-light text-xs">
            Trusted by
          </h6>
          <div className="inline-flex items-center gap-4 h-full w-full">
            {currentSlideData?.trusted_by.data.map((td: any, index: any) => {
              const isLastItem =
                index === currentSlideData?.trusted_by.data.length - 1;
              return (
                <Image
                  src={td?.attributes?.url}
                  alt=""
                  key={index}
                  width={100}
                  height={100}
                  className={`pr-2 ${
                    !isLastItem ? "border-r" : ""
                  } lg:w-[125px] h-full  object-fill`}
                />
              );
            })}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={slideInFromRight(2.0)}
        className="w-1/2 lg:flex justify-center hidden items-center "
      >
        <Slider
          setCurrentSlideData={setCurrentSlideData}
          onSlideChange={handleSlideChange}
          slide={HeroListData}
          currentSlideData={currentSlideData}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
