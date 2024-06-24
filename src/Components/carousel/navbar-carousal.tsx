import { ReactNode, useEffect, useState, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const NavbarSlider = ({
  slides,
  title = "",
  titleColor = "text-primary-text",
  buttonTextColor = "text-primary",
  buttonBorderColor = "border-primary",
  slidesMobile = 1,
  slidesTablet = 2,
  slidesDesktop = 3,
  showButton = true,
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
  const [slideWidths, setSlideWidths] = useState<number[]>([]);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  const getDisabledValue = () => {
    return isMobile 
      ? activeIndex === slideWidths.length - slidesToShow - 0.5 
      : activeIndex === slideWidths.length - slidesToShow - 1;
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
  }, [slidesDesktop, slidesMobile, slidesTablet]);

  useEffect(() => {
    // Calculate the width of each slide
    const widths = slidesRef.current.map((slide) => slide?.offsetWidth || 0);
    setSlideWidths(widths);
  }, [slides]);

  const nextSlide = () => {
    if (activeIndex < slideWidths.length - slidesToShow) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const calculateTransform = () => {
    // Calculate the total width to translate
    const widthToTranslate = slideWidths
      .slice(0, activeIndex)
      .reduce((acc, width, index) => acc + width + (index > 0 ? 5 : 0), 0); // Adjust the gap width if needed
    return `translateX(-${Math.round(widthToTranslate)}px)`;
  };

  return (
    <div className="relative flex flex-col md:gap-4 max-w-screen-xl">
      <div className="flex justify-between">
        <h4 className={`text-[30px] font-semibold ${titleColor}`}>{title}</h4>
      </div>

      <div className="flex gap-4 relative w-[95vw] lg:max-w-screen-xl">
        {showButton ? (
          <div className="flex gap-x-4 items-center">
            <button
              data-testid="prev-button"
              className={`border ${buttonBorderColor} p-1 md:p-3 cursor-pointer rounded-lg ${buttonTextColor} ${
                activeIndex === 0 ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={prevSlide}
              aria-label="Previous Slide"
              disabled={activeIndex === 0}
            >
              <FaAngleLeft />
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="w-[80vw] md:w-[90vw] sm:w-[80vw] overflow-x-hidden mt-2">
          <div
            className="flex gap-x-1 transition-transform duration-300 ease-in-out"
            style={{
              transform: calculateTransform(),
            }}
          >
            {slides?.map((slide, index) => (
              <div
                key={index}
                className="w-fit px-2"
                ref={(el) => (slidesRef.current[index] = el)}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>

        {showButton ? (
          <div className="flex gap-x-4 items-center">
            <button
              data-testid="next-button"
              className={`border ${buttonBorderColor} p-1 md:p-3 cursor-pointer rounded-lg ${buttonTextColor} ${
                activeIndex === slideWidths.length - slidesToShow ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={nextSlide}
              aria-label="Next Slide"
              disabled={getDisabledValue()}
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
          <div className="transform  flex space-x-2">
            {slides?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`pagination button ${index}`}
                className={`w-4 h-4 rounded-full ${
                  index === activeIndex
                    ? "bg-primary border border-primary"
                    : "bg-slate-100 border border-primary-text-light"
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

export default NavbarSlider;
