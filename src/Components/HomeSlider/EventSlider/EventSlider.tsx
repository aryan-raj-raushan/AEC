import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import {
  HomePageChatBot,
  HomePageCollegeBanner,
  RightArrow,
} from "@/src/Asset";

// const slides = [
//   { bgImage: HomePageChatBot, text: "Study abroad" },
//   { bgImage: HomePageCollegeBanner, text: "Study In India" },
//   { bgImage: HomePageCollegeBanner, text: "Master degree" },
//   { bgImage: HomePageChatBot, text: "Education affinity" },
// ];

const slideUrlMap: any = {
  "Study abroad": "study-abroad",
  "Study in India": "colleges",
  "Master degree": "courses",
  "Education affinity": "career",
};

const FeturedImageSlider = ({ onSlideChange , slide}: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState<any>(null);

  const heroBgImage = slide?.map((bg:any)=>bg?.attributes?.hero_image?.data) || [];
 
  const slides= heroBgImage[0]?.map((item: any) => ({
    bgImage: item?.attributes?.url,
    text: "Your default text here" 
  })) || [];

  useEffect(() => {
    onSlideChange(currentSlide);
  }, [currentSlide, onSlideChange]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides?.length - 1 ? 0 : prevSlide + 1
        );
      }
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides?.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handleHover = (isHovering: boolean) => {
    setIsPaused(isHovering);
  };

  const handleSlideClick = (slideText: any) => {
    const url = slideUrlMap[slideText];
    if (url) {
      window.location.href = `/${url}`;
    }
  };

  return (
    <div
      className={`relative justify-center flex items-center w-full h-full `}
      style={{ perspective: "1000px" }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div
        className="absolute top-36 w-fit h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {[0, 1, 2]?.map((offset) => {
          const index = (currentSlide + offset) % slides?.length;
          return (
            <div
              key={index}
              className={`absolute flex items-center justify-center font-bold w-[25rem] rounded-lg cursor-pointer ${
                offset === 0 ? styles.active : ""
              } } `}
              style={{
                transform: `${
                  offset === 2 ? ` translateY(calc(${offset * -10}px))` : ``
                } translateX(calc(-50% - ${offset * 50}px)) translateY(calc(${
                  offset * -10
                }px)) ${offset === 0 ? "translateX(2%) translateY(5%)" : ""}`,
                zIndex: 3 - offset,
                opacity: offset === 0 ? 1 : 0.3,
                transition: "transform 0.3s, opacity 0.3s",
              }}
              onClick={() => handleSlideClick(slides[index]?.text)}
            >
              <img
                src={slides[index]?.bgImage}
                alt={"Homepage Section"}
                className="rounded-3xl h-full object-contain bg-center "
              />
            </div>
          );
        })}
      </div>
      <button className={`${styles.next} absolute`} onClick={handleNext}>
        <Image src={RightArrow} alt={""} />
      </button>
    </div>
  );
};

export default FeturedImageSlider;