/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
// layouts
import { RootLayouts } from "@/src/Layouts";
// Hooks
// components

import AppliedFilter from "@/src/Components/appliedFilters/appliedFilter";
import CarouselComponent from "@/src/Components/carousel/carousel";
import { SearchIcon, SortIcon } from "@/src/Asset";
import PageInfo from "@/src/Components/PageInfo/PageInfo";
import AppBanner from "@/src/Components/appBanner/appBanner";
import CourseListItem from "@/src/Components/courseComponents/courseListItem/courseListItem";
import CoursePrimaryCard from "@/src/Components/courseComponents/cards/coursePrimaryCard";
import CollegeCard from "@/src/Components/card/collegeCard";
import useCourses from "@/src/Hooks/useCourses";
import useCommonApi from "@/src/Hooks/useCommonApi";
import CourseFilter from "@/src/Components/@course/courseFilter/courseFilter";
import useColleges from "@/src/Hooks/useColleges";
import FullWidthSkeleten from "@/src/Components/Skeleton/FullWidthSkeleten";
import CardSkeleten from "@/src/Components/Skeleton/CardSkeleten";
import { CgSortAz } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import BasicInformation from "@/src/Components/consultingModule/basicInformation/basicInformation";
import userFrom from "@/src/Hooks/userFrom";
import { useAppSelector } from "@/src/store";
import useUserSignup from "@/src/Hooks/useSignup";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import { ID } from "@/types/global";

const CoursePage = () => {
  const { CollegeApplicatonListData } = userFrom();
  const [SelectedStream, setSelectedStream] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [SelectedCourseLevel, setSelectedCourseLevel] = useState<any>("");
  const [CoursesListData, setCoursesListData] = useState<any>([]);
  const {
    GetCourseByFilter,
    isTopCourseeData,
    isFeaturedCourseData,
    allCourseLoading,
  } = useCourses();
  const { AllStreamData } = useCommonApi();
  const [StreamData, setStreamData] = useState<any>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { isFeaturedCollegeData } = useColleges();
  const [pageSize, setPageSize] = useState<number>(10);
  const [start, setStart] = useState<number>(1);
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [sortModal, setSortModal] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [SelectedCountry, setSelectedCountry] = useState<any>("India");
  const [SelectedState, setSelectedState] = useState<any>(null);

  useEffect(() => {
    setStreamData(AllStreamData || []);
  }, [AllStreamData]);

  const { CourseData, loading, error } = GetCourseByFilter(
    SelectedStream,
    SelectedCourseLevel,
    searchQuery,
    start,
    pageSize,
    sortOption,
    SelectedState
  );

  const handleSearchInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(event.target.value);
  };

  const handleLoadMore = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!loading && hasMore) {
      setLoadingMore(true);
      setPageSize((prevPageSize) => prevPageSize + 5);
      setStart((prevStart) => prevStart + 1);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSort = (option: React.SetStateAction<string>) => {
    setSortOption(option ? [option] : []);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!loading && loadingMore) {
      setLoadingMore(false);
    }
  }, [loading, loadingMore]);

  useEffect(() => {
    if (CourseData) {
      if (CourseData?.data && CourseData?.data?.length > 0) {
        setCoursesListData(CourseData?.data);
      } else {
        setHasMore(false);
      }
    }
  }, [CourseData, pageSize]);

  const GetSelectedSteamData =
    AllStreamData &&
    AllStreamData.filter(
      (stream: { attributes: { stream_name: any } }) =>
        stream?.attributes?.stream_name.toLowerCase() ===
        SelectedStream?.toLowerCase()
    );

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = (courseId: any) => {
    setSelectedCourseId(courseId);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setFilterModal(false);
  }, [SelectedStream, SelectedCourseLevel]);

  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const { getUserMetaData } = useUserMetaData();
  const userMetaId: ID = getUserDataMetaId(userID);
  const { userAllMetaData } = getUserMetaData(userMetaId);
  const AppliedCourse = userAllMetaData?.applied_courses;

  const FromStep: any = CollegeApplicatonListData?.form_stape;

  return (
    <RootLayouts>
      <section className="navbar-landingPage-responsive">
        <div className="max-w-screen-xl px-4 mx-auto -mt-5">
          <AppliedFilter
            setSelectedStream={setSelectedStream}
            SelectedStream={SelectedStream}
            setSelectedCourseLevel={setSelectedCourseLevel}
            SelectedCourseLevel={SelectedCourseLevel}
            setSelectedCountry={setSelectedCountry}
            SelectedCountry={SelectedCountry}
          />

          <div className="p-2 mt-8">
            {CoursesListData.length === 0 && loading ? (
              <div>
                <FullWidthSkeleten />
              </div>
            ) : (
              <>
                <PageInfo
                  title={`Courses in ${
                    SelectedState || SelectedCountry || "World"
                  }`}
                  subTitle={`Found ${
                    CourseData?.meta?.pagination?.total || CourseData?.length || 0
                  } 
						${SelectedStream ? SelectedStream : ""}`}
                  updatedOn="Updated on Nov 17, 2023 14:25 IST"
                  //StreamData={AllStreamData}
                  SelectedStreamData={GetSelectedSteamData}
                  SelectedStream={SelectedStream}
                  pageType="courses"
                />
              </>
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="lg:max-w-screen-xl lg:mx-auto px-2 md:px-4">
          <div className="my-4  py-4 px-4">
            {allCourseLoading ? (
              <>
                <CardSkeleten />
              </>
            ) : (
              <>
                <CarouselComponent
                  slidesDesktop={4}
                  slidesMobile={1}
                  slidesTablet={2}
                  titleColor="text-primary"
                  title="Top Courses"
                  slides={
                    isTopCourseeData &&
                    isTopCourseeData?.map((item: any, index: any) => {
                      return (
                        <CoursePrimaryCard
                          key={index}
                          id={item?.attributes?.course_url}
                          course={item?.attributes}
                          courseId={item?.id}
                          AppliedCourse={AppliedCourse}
                          onApplyNow={() => handleOpenModal(item?.id)}
                        />
                      );
                    })
                  }
                />
              </>
            )}
          </div>
          <div className="fixed bottom-0 left-0 !z-[8999] w-full md:hidden block">
            <div className="flex justify-evenly items-center text-white bg-primary text-lg">
              <div
                className="flex items-center gap-4 p-1"
                onClick={() => {
                  setSortModal(!sortModal);
                  setFilterModal(false);
                }}
              >
                <p>Sort</p>
                <CgSortAz size={"32px"} className="cursor-pointer" />
              </div>
              <div className="min-h-4">|</div>
              <div
                className="flex items-center gap-4 p-1"
                onClick={() => {
                  setFilterModal(!filterModal);
                  setSortModal(false);
                }}
              >
                <p>Filter</p>
                <CiFilter size={"28px"} className="cursor-pointer" />
              </div>
            </div>
          </div>

          {filterModal && (
            <div className="fixed right-0 top-[10%] bottom-[5%] p-4 animate-slide-left-to-right w-full bg-white shadow-lg z-50 overflow-y-auto">
              <div className="absolute inset-0">
                <CourseFilter
                  setSelectedStream={setSelectedStream}
                  SelectedStream={SelectedStream}
                  SelectedCourseLevel={SelectedCourseLevel}
                  setSelectedCourseLevel={setSelectedCourseLevel}
                />
              </div>
            </div>
          )}

          {sortModal && (
            <div className="fixed right-0 top-[10%] bottom-[5%] p-4 animate-slide-left-to-right w-full bg-white shadow-lg z-50 overflow-y-auto">
              <div className=" bg-white rounded-md">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleSort("college_name:asc");
                      setSortModal(false);
                    }}
                    role="menuitem"
                  >
                    Alphabetically
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleSort("updatedAt:asc");
                      setSortModal(false);
                    }}
                    role="menuitem"
                  >
                    Updated By
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleSort("createdAt:asc");
                      setSortModal(false);
                    }}
                    role="menuitem"
                  >
                    Reset Sort
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="main flex gap-4 mt-4 pt-6 border-t mx-4 border-t-[#DDDDDD]">
            <div className="w-1/4 min-w-36 hidden md:block">
              {CoursesListData.length === 0 && loading ? (
                <div>
                  <FullWidthSkeleten />
                </div>
              ) : (
                <>
                  <div className="mt-5">
                    <h1 className="px-2 text-lg">
                      Showing{" "}
                      <span className="font-semibold">
                        {CourseData?.meta?.pagination?.total ||
                          CoursesListData?.length}
                      </span>{" "}
                      Courses{" "}
                    </h1>
                  </div>
                  <CourseFilter
                    setSelectedStream={setSelectedStream}
                    SelectedStream={SelectedStream}
                    SelectedCourseLevel={SelectedCourseLevel}
                    setSelectedCourseLevel={setSelectedCourseLevel}
                  />
                </>
              )}
            </div>
            <div className="flex-1 w-full overflow-hidden">
              <div className="bg-white pt-4 flex gap-4 items-stretch">
                <div className="flex px-4 py-1 border-2 border-extra-light-text rounded flex-1 items-center text-primary-text focus-within:border-secondary-text">
                  <Image src={SearchIcon} width={20} height={20} alt="search" />
                  <input
                    className="w-full flex-1 bg-transparent text-lg px-2 text-primary-text outline-none"
                    placeholder={`Search by Course & Specialization`}
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                  />
                </div>
                <div className="relative">
                  <div
                    className="flex border-2 items-center px-8 py-2 border-extra-light-text gap-2 rounded-lg cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <span>Sort</span>
                    <div>
                      <Image src={SortIcon} width={20} height={20} alt="sort" />
                    </div>
                  </div>
                  {/* Dropdown content */}
                  {isOpen && (
                    <div className="absolute z-50 mt-1 right-0 bg-white rounded-md shadow-lg border">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSort("course_name:asc")}
                          role="menuitem"
                        >
                          Alphabetically
                        </div>
                        <div
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSort("updatedAt:asc")}
                          role="menuitem"
                        >
                          Updated By
                        </div>
                        <div
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSort("createdAt:asc")}
                          role="menuitem"
                        >
                          Reset Sort
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {CoursesListData.length === 0 && loading ? (
                <div>
                  <FullWidthSkeleten />
                </div>
              ) : (
                <>
                  <div>
                    {CoursesListData &&
                      CoursesListData?.map((item: any, index: number) => {
                        return (
                          <div key={index + 24}>
                            <CourseListItem
                              Course={item?.attributes}
                              courseId={item?.id}
                              AppliedCourse={AppliedCourse}
                              id={item?.attributes?.course_url}
                            />

                            {index + 1 == 4 ? (
                              <div className="my-4 bg-primary-light py-4 px-4">
                                <CarouselComponent
                                  slidesDesktop={3}
                                  slidesMobile={1}
                                  slidesTablet={2}
                                  titleColor="text-primary"
                                  title="Featured Courses"
                                  slides={
                                    isFeaturedCourseData &&
                                    isFeaturedCourseData?.map(
                                      (item: any, index: any) => {
                                        return (
                                          <CoursePrimaryCard
                                            key={index}
                                            id={item?.attributes?.course_url}
                                            course={item?.attributes}
                                            courseId={item?.id}
                                            AppliedCourse={AppliedCourse}
                                            onApplyNow={() =>
                                              handleOpenModal(item?.id)
                                            }
                                          />
                                        );
                                      }
                                    )
                                  }
                                />
                              </div>
                            ) : (
                              <></>
                            )}

                            {index + 1 == 8 ? (
                              <div className="my-4 bg-primary-light py-4 px-4">
                                <CarouselComponent
                                  slidesDesktop={3}
                                  slidesMobile={1}
                                  slidesTablet={2}
                                  titleColor="text-primary"
                                  title="Recommended Colleges"
                                  showButton={false}
                                  slides={
                                    isFeaturedCollegeData &&
                                    isFeaturedCollegeData?.map(
                                      (item: any, index: any) => {
                                        return (
                                          <CollegeCard
                                            key={index}
                                            id={item?.attributes?.course_url}
                                            college={item?.attributes}
                                            onApplyNow={() =>
                                              handleOpenModal(item?.id)
                                            }
                                          />
                                        );
                                      }
                                    )
                                  }
                                />
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        );
                      })}
                  </div>
                  <div className="text-center py-6">
                    {CourseData?.length ||
                      (CoursesListData.length > 9 && (
                        <>
                          {loadingMore && (
                            <div className="spinner-icon">
                              {/* ============ */}
                              <button
                                type="button"
                                className="text-black bg-white border-2 border-primary color-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                              >
                                <span className="flex items-center gap-2">
                                  <span>Loading...</span>{" "}
                                  <div
                                    className="w-6 h-6 rounded-full animate-spin
                    border-2 border-solid border-blue-500 border-t-transparent"
                                  ></div>
                                </span>
                              </button>
                            </div>
                          )}

                          {/* "Load More" button */}
                          {!loadingMore && (
                            <button
                              type="button"
                              className="text-black bg-white border-2 border-primary color-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                              onClick={handleLoadMore}
                            >
                              {hasMore && !loading ? (
                                "Load More"
                              ) : (
                                <span className="flex items-center gap-2">
                                  <span>Loading...</span>{" "}
                                  <div
                                    className="w-6 h-6 rounded-full animate-spin
                    border-2 border-solid border-blue-500 border-t-transparent"
                                  ></div>
                                </span>
                              )}
                            </button>
                          )}
                        </>
                      ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-4 my-12">
        <AppBanner />
      </section>
      {isModalOpen && (
        <BasicInformation
          FromStep={FromStep}
          id={selectedCourseId}
          isSectionCheck={"Course"}
          onClose={handleCloseModal}
        />
      )}
    </RootLayouts>
  );
};

export default CoursePage;
