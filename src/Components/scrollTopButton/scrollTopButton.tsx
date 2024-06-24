import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className="scrollToTopButton "
      title="Scroll to Top"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <FaArrowUp className="text-white bg-black rounded-full text-2xl p-1" />
    </button>
  );
};

export default ScrollToTopButton;
