import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Dropdown from "../dropdown/dropdown";
import CollegeCardNoImage from "../card/collegeCardNoImage";
import CourseCardForHome from "../card/courseCardForHome";

const slideInFromLeft = (delay: number) => ({
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { delay } },
});

const slideInFromBottom = (delay: number) => ({
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { delay } },
});

const TrendingSection = ({
  activeTrendingCollege,
  handleTrendingCollegeTabClick,
  StremOption,
  handleStreamClick,
  CountryTab,
  filterCollegeData,
  AllCollegesData,
  filterCourseData,
  CourseListData,
}: any) => {
  return (
    <section className="">
      <motion.div
        className="max-w-screen-xl px-4 mx-auto py-10"
        initial="visible"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <motion.div
          className="flex lg:flex-row flex-col items-center justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
        >
          <div className="text-3xl">
            Trending{" "}
            <b>{activeTrendingCollege === "Stream" ? "Colleges" : "Courses"}</b>
          </div>
          <div className="flex items-center mt-2 gap-4 md:gap-2">
            <div
              className={`p-2 px-6 rounded-lg cursor-pointer ${
                activeTrendingCollege === "Stream"
                  ? "bg-[#050038] text-white drop-shadow-md"
                  : "border text-black"
              }`}
              onClick={() => handleTrendingCollegeTabClick("Stream")}
            >
              College
            </div>

            <div
              className={`p-2 rounded-lg px-6 cursor-pointer ${
                activeTrendingCollege === "Courses"
                  ? "bg-[#050038] text-white drop-shadow-md"
                  : "border text-black"
              }`}
              onClick={() => handleTrendingCollegeTabClick("Courses")}
            >
              Courses
            </div>
          </div>
        </motion.div>
        <div className="flex flex-row items-center justify-between my-6">
          <div className="flex md:flex-row flex-col gap-10 md:items-center">
            <div className="z-20 w-fit">
              <Dropdown
                placeholder={"Select a stream"}
                options={StremOption}
                onSelect={handleStreamClick}
              />
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-x-3">
            {CountryTab}
          </div>
          <div>
            <Link
              href={
                activeTrendingCollege === "Stream" ? "/colleges" : "/courses"
              }
              className="flex text-lg text-nowrap gap-1 md:gap-2 text-[#1268F5] items-center"
            >
              <span>View All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={25}
                width={25}
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M17.6453 19.0736L24.2188 12.5002L17.6453 5.92676L16.5404 7.03164L21.2278 11.719H0.818556V13.2815H21.2277L16.5404 17.9688L17.6453 19.0736Z"
                  fill="#1268F5"
                />
              </svg>
            </Link>
          </div>
        </div>

        <motion.div
          className="flex lg:grid lg:grid-cols-2 gap-4 my-10 overflow-x-auto hide-scrollbar pb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom(1)}
        >
          {activeTrendingCollege === "Stream" && (
            <>
              {filterCollegeData.length > 0
                ? filterCollegeData &&
                  filterCollegeData
                    ?.slice(0, 6)
                    ?.map((college: any, index: any) => {
                      return (
                        <CollegeCardNoImage
                          collegeData={college?.attributes}
                          key={index}
                        />
                      );
                    })
                : AllCollegesData &&
                  AllCollegesData?.slice(0, 6)?.map(
                    (college: any, index: any) => {
                      return (
                        <CollegeCardNoImage
                          collegeData={college?.attributes}
                          key={index}
                        />
                      );
                    }
                  )}
            </>
          )}

          {activeTrendingCollege === "Courses" && (
            <>
              {filterCourseData.length > 0
                ? filterCourseData &&
                  filterCourseData
                    ?.slice(0, 6)
                    ?.map((course: any, index: any) => {
                      return (
                        <CourseCardForHome
                          coursesData={course?.attributes}
                          id={course?.id}
                          key={index}
                        />
                      );
                    })
                : CourseListData &&
                  CourseListData?.slice(0, 6)?.map(
                    (course: any, index: any) => {
                      return (
                        <CourseCardForHome
                          coursesData={course?.attributes}
                          id={course?.id}
                          key={index}
                        />
                      );
                    }
                  )}
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TrendingSection;
