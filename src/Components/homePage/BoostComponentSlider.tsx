import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { HomepageBoostSection } from "@/src/Asset";
import Image from "next/image";

// const slides = [
//   { bgImage: HomepageBoostSection, text: "Study in India" },
//   { bgImage: HomepageBoostSection, text: "Study abroad" },
//   { bgImage: HomepageBoostSection, text: "Master degree" },
//   { bgImage: HomepageBoostSection, text: "Education affinity" },
// ];

// const slideUrlMap:any = {
//   "Study in India": "study-in-india",
//   "Study abroad": "study-abroad",
//   "Master degree": "master-degree",
//   "Education affinity": "education-affinity",
// };

const BoostComponentSlider = ({ FeturedListData, onSlideChange }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState<any>(null);

  const heroBgImage =
    FeturedListData?.map((bg: any) => bg?.attributes?.images?.data) || [];

  // Ensure slides array is properly initialized
  const slides =
    heroBgImage[0]?.map((item: any) => ({
      bgImage: item?.attributes?.url,
      text: "Affinity Education",
    })) || [];

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }
    }, 2000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handleHover = (isHovering: boolean) => {
    setIsPaused(isHovering);
  };

  // const handleSlideClick = (slideText: any) => {
  //   const url = slideUrlMap[slideText];
  //   if (url) {
  //     window.location.href = `/${url}`;
  //   }
  // };

  return (
    <div
      className={`relative flex items-center w-full h-full `}
      style={{ perspective: "1000px" }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div
        className="absolute left-[44%] -top-24 w-fit h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {[0, 1, 2].map((offset) => {
          const index = (currentSlide + offset) % slides.length;
          return (
            <div
              key={offset}
              className={`absolute flex items-center justify-center font-bold  w-[23rem] h-[12rem] rounded-lg cursor-pointer ${
                offset === 0 ? styles.active : ""
              }`}
              style={{
                transform: `${
                  offset === 2 ? ` translateY(calc(${offset * -5}px))` : ``
                } translateX(calc(-50% - ${offset * 36}px)) translateY(calc(${
                  offset * -1
                }px)) ${offset === 0 ? "translateX(-1%) translateY(10%)" : ""}`,
                zIndex: 3 - offset,
                opacity: offset === 0 ? 1 : 0.3,
                transition: "transform 0.3s, opacity 0.3s",
              }}
              // onClick={() => handleSlideClick(slides[index].text)}
            >
              <img
                src={slides[index]?.bgImage}
                // alt={"Homepage Boost Section"}
                className="rounded-3xl h-full object-fill bg-center "
              />
            </div>
          );
        })}
      </div>
      {/* <button
        className={`${styles.next} absolute top-0 right-0`}
        onClick={handleNext}
      >
        &gt;
      </button> */}
    </div>
  );
};

export default BoostComponentSlider;
