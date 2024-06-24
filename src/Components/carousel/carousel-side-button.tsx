// components/Carousel.js
import { ReactNode, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CarouselSideBtn = ({
  slides = [],
  title = "",
  titleColor = "text-primary-text",
  buttonTextColor = "text-primary",
  buttonBorderColor = "border-primary",
  slidesMobile = 1,
  slidesTablet = 2,
  slidesDesktop = 3,
  showButton = true,
  showPagination = true,
  gapCarousel = 1,
  transitionSet = 100,
}: {
  slides: Array<ReactNode>;
  title?: string;
  titleColor?: string;
  slidesMobile?: number;
  slidesTablet?: number;
  slidesDesktop?: number;
  showButton?: boolean;
  showPagination?: boolean;
  buttonBorderColor?: string;
  buttonTextColor?: string;
  gapCarousel?: number;
  transitionSet?: number;
}) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setSlidesToShow(slidesDesktop);
      } else if (screenWidth >= 768) {
        setSlidesToShow(slidesTablet);
      } else {
        setSlidesToShow(slidesMobile);
      }
    };

    // Initial setup
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex flex-col gap-4 max-w-screen-xl">
      <div className="flex justify-between">
        <h4 className={`text-[30px] font-semibold ${titleColor}`}>{title}</h4>
      </div>
      <div className="flex justify-between items-center ">
        {showButton ? (
          <div className="flex gap-4">
            <button
              data-testid="prev-button"
              className={`border ${buttonBorderColor} sm:p-3 p-1 cursor-pointer rounded-lg ${buttonTextColor}`}
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              <FaAngleLeft />
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="max-w-screen-xl overflow-hidden">
          <div>
            <div
              className={`flex gap-${gapCarousel} rounded-md min-w-full transition-transform duration-300 ease-in-out`}
              style={{
                transform: `translateX(-${
                  activeIndex * (100 / slidesToShow)
                }%)`,
              }}
            >
              {slides?.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-1  w-full h-full rounded-md"
                  style={{ flex: `0 0 ${transitionSet / slidesToShow}%` }}
                >
                  {slide}
                </div>
              ))}
            </div>
          </div>
        </div>
        {showButton ? (
          <div className="flex gap-4 items-center">
            <button
              data-testid="next-button"
              className={`border ${buttonBorderColor} sm:p-3 p-1 cursor-pointer rounded-lg ${buttonTextColor}`}
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              <FaAngleRight />
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>

      {showPagination ? (
        <div className="flex justify-center items-center">
          <div className="transform  flex space-x-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`pagination button ${index}`}
                className={`rounded-full ${
                  index === activeIndex
                    ? "bg-secondary border border-secondary w-3 h-2"
                    : "bg-slate-100 border border-primary-text-light w-2 h-2"
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CarouselSideBtn;
