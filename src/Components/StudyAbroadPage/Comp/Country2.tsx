import { ExamSearchIcon, StreamSearch } from '@/src/Asset';
import Image from 'next/image';
import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Country2 = ({
    
    inView,
    showStreamDropdown,
    setShowCountryDropdown,
    setShowCourseDropdown,
    selectedStream,
    Streams,
    setSelectedStream,
    setShowStreamDropdown,
    showCourseDropdown,
    selectedCourse,
    AllCourseData,
    setSelectedCourse,
    isSearchDisabled,
    searchColleges
}:any) => {
  return (
   <>
     {/* Stream Dropdown */}
     <div
                  className={`flex gap-2 ${!inView ? "p-4 w-[200px]" : "p-2"
                    } border-r-2 md:text-base text-xs items-center cursor-pointer`}
                  onClick={() => {
                    setShowStreamDropdown(!showStreamDropdown);
                    setShowCountryDropdown(false);
                    setShowCourseDropdown(false);
                  }}
                >
                  {!inView && <Image src={StreamSearch} alt="" />}
                  <div className="relative bg-white text-xs p-2 md:text-base outline-none border-none cursor-pointer">
                    <div className="flex items-center justify-between">
                      {selectedStream || `${!inView ? "Any" : ""} Stream`}
                    </div>
                    {showStreamDropdown && (
                      <div className="absolute top-20 -left-32 shadow-lg border border-gray-200 min-w-[500px] z-10 rounded-xl">
                        <div className="grid grid-cols-3 gap-2 p-8 min-h-fit duration-200 bg-white rounded-xl -mt-4">
                          {Streams?.map((stream: any) => (
                            <div
                              key={stream.id}
                              onClick={() => {
                                setSelectedStream(
                                  stream?.attributes?.stream_name
                                );
                                setShowStreamDropdown(false);
                              }}
                              className="bg-white w-36 hover:bg-gray-200 cursor-pointer p-2 rounded-xl"
                            >
                              <img
                                src={
                                  stream.attributes.icon?.data?.[0]?.attributes
                                    ?.url || ""
                                }
                                alt=""
                                className="border border-gray-300 rounded-2xl object-contain bg-center w-full h-28"
                              />
                              <h1 className="line-clamp-1">
                                {stream.attributes.stream_name}
                              </h1>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Course Dropdown */}
                <div
                  className={`flex gap-2 ${!inView ? "p-4 w-[200px]" : "p-2"
                    } border-r-2 md:text-base text-xs items-center cursor-pointer`}
                  onClick={() => {
                    setShowCourseDropdown(!showCourseDropdown);
                    setShowCountryDropdown(false);
                    setShowStreamDropdown(false);
                  }}
                >
                  {!inView && <Image src={ExamSearchIcon} alt="" />}
                  <div className="relative bg-white text-xs p-2 md:text-base outline-none border-none cursor-pointer">
                    <div className="flex items-center justify-between">
                      <h1 className="line-clamp-1">
                        {selectedCourse || `${!inView ? "Any" : ""} Course`}
                      </h1>
                    </div>
                    {showCourseDropdown && (
                      <div className="absolute top-20 -left-32 shadow-lg border border-gray-200 min-w-[350px] z-10 rounded-xl">
                        <div className="max-h-[400px] overflow-y-auto duration-200 bg-white rounded-xl -mt-4">
                          {AllCourseData?.map((course: any) => (
                            <div
                              key={course.id}
                              onClick={() => {
                                setSelectedCourse(
                                  course.attributes.course_name
                                );
                                setShowCourseDropdown(false);
                              }}
                              className="flex items-center gap-2 bg-white w-full hover:bg-gray-200 cursor-pointer p-2 h-20 rounded-xl px-8"
                            >
                              <img
                                src={`${course?.attributes?.logo?.data?.attributes?.url}`}
                                alt=""
                                className="w-14 h-14 object-fill rounded-md"
                              />
                              <h1>{course.attributes.course_name}</h1>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Search Button */}
                <div
                  className={`rounded-full bg-primary text-white flex justify-center items-center ${!inView ? "p-4" : "p-2"
                    } h-max w-max ${isSearchDisabled
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                    }`}
                >
                  {isSearchDisabled ? (
                    <FaSearch />
                  ) : (
                    <FaSearch onClick={searchColleges} />
                  )}
                </div>
                </>
  )
}

export default Country2