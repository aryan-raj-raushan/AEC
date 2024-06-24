// import { useEffect, useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// const Carousel = ({
//   slides,
//   title = "",
//   titleColor = "text-primary-text",
//   slidesMobile = 1,
//   slidesTablet = 2,
//   slidesDesktop = 3,
//   showButton = true,
//   showPagination = true,
//   slideGap = 0,
// }: {
//   slides: any[];
//   title?: string;
//   titleColor?: string;
//   slidesMobile?: number;
//   slidesTablet?: number;
//   slidesDesktop?: number;
//   showButton?: boolean;
//   showPagination?: boolean;
//   slideGap?: any;
// }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [slidesToShow, setSlidesToShow] = useState(1);

//   useEffect(() => {
//     const handleResize = () => {
//       const screenWidth = window.innerWidth;

//       if (screenWidth >= 1024) {
//         setSlidesToShow(slidesDesktop);
//       } else if (screenWidth >= 768) {
//         setSlidesToShow(slidesTablet);
//       } else {
//         setSlidesToShow(slidesMobile);
//       }
//     };

//     // Initial setup
//     handleResize();

//     // Attach event listener for window resize
//     window.addEventListener("resize", handleResize);

//     // Cleanup on component unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [slidesDesktop, slidesMobile, slidesTablet]);

//   const totalSlides = slides?.length;
//   const totalPages = Math.ceil(totalSlides / slidesToShow);
//   const isBeginning = activeIndex === 0;
//   const isEnd = activeIndex + slidesToShow >= totalSlides;

//   const nextSlide = () => {
//     if (!isEnd) {
//       setActiveIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (!isBeginning) {
//       setActiveIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   const goToSlide = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="relative  flex-col gap-4">
//       <div className="flex justify-between items-center">
//         <h4 className={`text-lg leading-tight lg:text-3xl font-semibold ${titleColor}`}>{title}</h4>
//         {showButton && totalSlides > slidesToShow ? (
//           <div className="flex gap-4 items-center">
//             <button
//               className={`border border-primary p-2 cursor-pointer rounded-sm text-primary ${isBeginning && 'opacity-50 pointer-events-none'}`}
//               onClick={prevSlide}
//               data-testid="prev-button"
//               disabled={isBeginning}
//             >
//               <FaAngleLeft />
//             </button>
//             <button
//               className={`border border-primary p-2 cursor-pointer rounded-sm text-primary ${isEnd && 'opacity-50 pointer-events-none'}`}
//               onClick={nextSlide}
//               data-testid="next-button"
//               disabled={isEnd}
//             >
//               <FaAngleRight />
//             </button>
//           </div>
//         ) : null}
//       </div>

//       <div className="overflow-hidden w-full h-full ">
//         <div
//           className="flex gap-6 transition-transform duration-300 ease-in-out items-center mt-1"
//           style={{
//             transform: `translateX(-${(100 / totalSlides) * activeIndex}%)`,
//           }}
//         >
//           {slides.map((slide: any, index: any) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-full h-full"
//               style={{ flex: `0 0 ${100 / slidesToShow}%` }}
//             >
//               {slide}
//             </div>
//           ))}
//         </div>
//       </div>
//       {showPagination && totalSlides > slidesToShow ? (
//         <div className="flex justify-center items-center">
//           <div className="transform  flex space-x-1 items-center mt-3">
//             {[...Array(totalPages)].map((_, pageIndex) => (
//               <button
//                 key={pageIndex}
//                 onClick={() => goToSlide(pageIndex * slidesToShow)}
//                 data-testid="pagination-dot"
//                 className={` rounded-full ${
//                   pageIndex * slidesToShow <= activeIndex &&
//                   activeIndex < (pageIndex + 1) * slidesToShow
//                     ? "bg-secondary border border-secondary h-1.5 w-3"
//                     : "bg-slate-100 border border-primary-text-light w-1 h-1"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default Carousel;

// ==============

import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Carousel = ({
  slides = [],
  title = "",
  titleColor = "text-primary-text",
  slidesMobile = 1,
  slidesTablet = 2,
  slidesDesktop = 2,
  showButton = true,
  showPagination = true,
  slideGap = 0,
}: {
  slides: any[];
  title?: string;
  titleColor?: string;
  slidesMobile?: number;
  slidesTablet?: number;
  slidesDesktop?: number;
  showButton?: boolean;
  showPagination?: boolean;
  slideGap?: any;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(slidesDesktop);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setSlidesToShow(slidesDesktop);
      } else if (screenWidth >= 768) {
        setSlidesToShow(slidesTablet);
      } else {
        const slidesToFit = Math.floor(screenWidth / (100 / slidesMobile));
        setSlidesToShow(Math.min(slidesToFit, slidesMobile));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slidesDesktop, slidesMobile, slidesTablet]);

  const totalSlides = slides?.length;

  const totalPages = Math.ceil(totalSlides / slidesToShow);
  const isBeginning = activeIndex === 0;
  const isEnd = activeIndex + slidesToShow >= totalSlides;

  const nextSlide = () => {
    if (!isEnd) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const prevSlide = () => {
    if (!isBeginning) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    } else {
      setActiveIndex(totalPages - 1);
    }
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative  flex-col gap-4">
      <div className="flex justify-between items-center">
        <h4
          className={`text-lg leading-tight lg:text-3xl font-semibold ${titleColor}`}
        >
          {title}
        </h4>
        {showButton && totalSlides > slidesToShow ? (
          <div className="flex gap-3 items-center">
            <button
              className={`border border-primary p-2 cursor-pointer rounded-sm text-primary ${
                isBeginning && "opacity-50 pointer-events-none"
              }`}
              onClick={prevSlide}
              data-testid="prev-button"
              disabled={isBeginning}
            >
              <FaAngleLeft />
            </button>
            <button
              className={`border border-primary p-2 cursor-pointer rounded-sm text-primary ${
                isEnd && "opacity-50 pointer-events-none"
              }`}
              onClick={nextSlide}
              data-testid="next-button"
              disabled={isEnd}
            >
              <FaAngleRight />
            </button>
          </div>
        ) : null}
      </div>

      <div className="overflow-hidden w-full h-full">
        <div
          className="flex gap-3 transition-transform duration-300 ease-in-out items-center mt-4"
          style={{
            transform: `translateX(-${(100 / slidesToShow) * activeIndex}%)`,
          }}
        >
          {slides.map((slide: any, index: any) => (
            <div
              key={index}
              className="flex-shrink-0 md:w-full w-[96px] h-full"
              style={{ flex: `0 0 ${97 / slidesToShow}%` }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {showPagination && totalSlides > slidesToShow ? (
        <div className="flex justify-center items-center">
          <div className="transform  flex space-x-1 items-center mt-3">
            {[...Array(totalPages)].map((_, pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => goToSlide(pageIndex * slidesToShow)}
                data-testid="pagination-dot"
                className={` rounded-full ${
                  pageIndex * slidesToShow <= activeIndex &&
                  activeIndex < (pageIndex + 1) * slidesToShow
                    ? "bg-secondary border border-secondary h-1.5 w-3"
                    : "bg-slate-100 border border-primary-text-light w-1 h-1"
                }`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
