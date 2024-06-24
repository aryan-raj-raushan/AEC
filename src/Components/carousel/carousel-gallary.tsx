// components/Carousel.js
import { ReactNode, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CarouselGallary = ({
  slides,
  title = "",
  titleColor = "text-primary-text",
  buttonTextColor = "text-primary",
  buttonBorderColor = "border-primary",
  slidesMobile = 1,
  slidesTablet = 1,
  slidesDesktop = 1,
  showButton = false,
  showPagination = true,
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

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative flex flex-col gap-4 max-w-screen-xl">
      <div className="flex justify-between">
        <h4 className={`text-[30px] font-semibold ${titleColor}`}>{title}</h4>
      </div>
      <div className="flex gap-2">
        {showButton ? (
          <div className="flex gap-4 items-center">
            <button
              className={`border ${buttonBorderColor} p-3 cursor-pointer rounded-lg ${buttonTextColor}`}
              onClick={prevSlide}
            >
              <FaAngleLeft />
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="max-w-screen-xl overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-52"
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
        {showButton ? (
          <div className="flex gap-4 items-center">
            <button
              className={`border ${buttonBorderColor} p-3 cursor-pointer rounded-lg ${buttonTextColor}`}
              onClick={nextSlide}
            >
              <FaAngleRight />
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>

      {showPagination ? (
        <div className="absolute bottom-2 w-full z-30 flex justify-center items-center">
          <div className="transform  flex space-x-2 items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={` rounded-full w-2 h-2 ${
                  index === activeIndex ? "bg-white" : "bg-white opacity-50"
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

export default CarouselGallary;
