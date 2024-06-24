import React from "react";
import { motion } from "framer-motion";
import GradientImage from "../@studyAbroad/studyAbroadGradientImage/studyAbroadGradientImage";

const slideInFromLeft = (delay: number) => ({
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { delay } },
});

const slideInFromBottom = (delay: number) => ({
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { delay } },
});

const ExploreCollegesSection = ({
  activeExploreCollege,
  handleExploreTabClick,
  renderContent,
}: any) => {
  return (
    <section className="flex flex-col text-primary-text py-6 lg:py-14">
      <motion.div
        className="max-w-screen-xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <motion.div
          className="flex justify-center items-center gap-10"
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="sm:text-4xl text-2xl">
            Explore Colleges by <b>Stream, Courses & Exams</b>
          </h3>
        </motion.div>
        <motion.div
          className="flex items-center mx-auto justify-center my-4 sm:mb-4 mb-8 gap-1 bg-white w-fit md:gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(1)}
        >
          <div
            className={`p-2 px-6 rounded-lg cursor-pointer ${
              activeExploreCollege === "Stream"
                ? " bg-[#050038] text-white"
                : "border-b-transparent"
            }`}
            onClick={() => handleExploreTabClick("Stream")}
          >
            Stream
          </div>

          <div
            className={`p-2 rounded-lg px-6 cursor-pointer ${
              activeExploreCollege === "Exam"
                ? " bg-[#050038] text-white"
                : "border-b-transparent"
            }`}
            onClick={() => handleExploreTabClick("Exam")}
          >
            Exam
          </div>

          <div
            className={`p-2 rounded-lg px-6 cursor-pointer ${
              activeExploreCollege === "Courses"
                ? " bg-[#050038] text-white"
                : "border-b-transparent"
            }`}
            onClick={() => handleExploreTabClick("Courses")}
          >
            Courses
          </div>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-3 gap-3 lg:my-10 justify-around"
          variants={slideInFromBottom(2)}
        >
          {renderContent()}
        </motion.div>
      </motion.div>

      <div className="bg-[#F2F2F2] lg:block hidden py-6 lg:py-16 lg:my-5">
        <GradientImage />
      </div>
    </section>
  );
};

export default ExploreCollegesSection;
