import { ReactNode, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const StudyCarousel = ({
    slides,
    title = "",
    titleColor = "text-white-text",
    buttonTextColor = "text-white",
    buttonBorderColor = "border-white",
    slidesMobile = 1,
    slidesTablet = 2,
    slidesDesktop = 2,
    showButton = true,
}: {
    slides: Array<ReactNode>;
    title?: string;
    titleColor?: string;
    slidesMobile?: number;
    slidesTablet?: number;
    slidesDesktop?: number;
    showButton?: boolean;
    buttonBorderColor?: string;
    buttonTextColor?: string;
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
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
        <div className="relative flex flex-col gap-4 max-w-screen-xl overflow-hidden">
            <div className="flex justify-between">
                <h4 className={`text-[30px] font-semibold ${titleColor}`}>{title}</h4>
            </div>
            <div className="flex gap-2">
                <div className="max-w-screen-xl overflow-hidden">
                    <div>
                        <div
                            className="flex gap-4 transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${activeIndex * (100 / slidesToShow)
                                    }%)`,
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-full h-full studySliderImage"
                                    style={{ flex: `0 0 ${100 / slidesToShow}%` }}
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
                            className={`border ${buttonBorderColor} p-3 cursor-pointer rounded-lg studySliderImageArrow ${buttonTextColor}`}
                            onClick={nextSlide}
                            aria-label="Next Slide"
                        >
                            <FaArrowRightLong />
                        </button>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default StudyCarousel;

