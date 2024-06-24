import React, { useEffect, useState } from "react";
import Image from "next/image";
// layouts
import { RootLayouts } from "@/src/Layouts";
// Hooks
import useColleges from "@/src/Hooks/useColleges";
// components

import AppliedFilter from "@/src/Components/appliedFilters/appliedFilter";
import CarouselComponent from "@/src/Components/carousel/carousel";
import { SearchIcon, SortIcon } from "@/src/Asset";
import useCommonApi from "@/src/Hooks/useCommonApi";
import AppBanner from "@/src/Components/appBanner/appBanner";
import CollegeFilters from "@/src/Components/collegeFilters/collageFilters";
import TopScholarshipWorldCard from "@/src/Components/card/topScholarshipWorldCard";
import ScholarshipApplyCard from "@/src/Components/card/scholarshipApplyCard";
import PageInfoScholarShip from "@/src/Components/pageInfoScholarship/pageInfoScholarship";
import FeaturedScholarship from "@/src/Components/@scholarship/featuredScholarships/featuredScholarship";
import Feature from "@/src/Components/feature/feature";
import { CountryTags, StateTags, StudyTags } from "@/src/Utils/Mock/CommonData";
import useScholarships from "@/src/Hooks/useScholarships";
import useRecomended from "@/src/Hooks/useRecomended";
import PageInfo from "@/src/Components/PageInfo/PageInfo";
import FullWidthSkeleten from "@/src/Components/Skeleton/FullWidthSkeleten";
import CardSkeleten from "@/src/Components/Skeleton/CardSkeleten";
import { CgSortAz } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import BasicInformation from "@/src/Components/consultingModule/basicInformation/basicInformation";
import userFrom from "@/src/Hooks/userFrom";
import ScholarshipFilter from "@/src/Components/scholarshipFilter/scholarshipFilter";

const ScholarshipsPage = () => {
  const { AllCollegesData, GetCollegeByFilter } = useColleges();
  const { AllStreamData, AllStateData, AllCityData } = useCommonApi();
  const [Search, setSearch] = useState("");
  const [List, setList] = useState<any>([]);
  const [SelectedState, setSelectedState] = useState<any>(null);
  const [SelectedStream, setSelectedStream] = useState<any>(null);
  const [SelectedCity, setSelectedCity] = useState<any>(null);
  const [SelectedCountry, setSelectedCountry] = useState<any>("India");
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);
  const [StreamData, setStreamData] = useState<any>([]);
  const [stateData, setStateData] = useState<any>([]);
  const [cityData, setCityData] = useState<any>([]);
  const [visibleScholarships, setVisibleScholarships] = useState<number>(10);
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [sortModal, setSortModal] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [pageSize, setPageSize] = useState<number>(10);
  const [loadingMore, setLoadingMore] = useState(false);
  const [start, setStart] = useState<number>(1);
  const [scholarshipDataList, setScholarshipDataList] = useState<any>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScholarshipId, setSelectedScholarshipId] = useState(null);
  const [SelectedScholarshipType, setSelectedScholarshipType] =
    useState<any>(null);

  const {
    AllScholarshipDataList,
    isTopScholarshipsData,
    isFeaturedScholarshipsData,
    allScholarshipsLoading,
    GetscholarshipByFilter,
  } = useScholarships();

  const { CollegeApplicatonListData } = userFrom();
  const { ScholarshipData, loading, error } = GetscholarshipByFilter(
    Search,
    pageSize,
    SelectedCountry,
    SelectedStream,
    SelectedScholarshipType,
    undefined,
    sortOption
  );

  // useEffect to scroll back to the saved position after loading more content
  useEffect(() => {
    if (!loading && loadingMore) {
      setLoadingMore(false);
    }
  }, [loading, loadingMore]);

  useEffect(() => {
    if (ScholarshipData) {
      if (ScholarshipData?.data && ScholarshipData?.data?.length > 0) {
        setScholarshipDataList(ScholarshipData?.data);
      } else {
        setScholarshipDataList([]);
        setHasMore(false);
      }
    }
  }, [ScholarshipData, pageSize]);

  useEffect(() => {
    const filteredScholarships = ScholarshipData?.data.filter(
      (scholarship: any) =>
        scholarship.attributes.scholarship_title
          .toLowerCase()
          .includes(Search.toLowerCase())
    );

    setScholarshipDataList(filteredScholarships);

    setHasMore(filteredScholarships?.length > 0);
  }, [Search, ScholarshipData]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSort = (option: React.SetStateAction<string>) => {
    setSortOption(option ? [option] : []);
    setIsOpen(false);
  };

  const handleLoadMore = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!loading && hasMore) {
      setLoadingMore(true);
      setPageSize((prevPageSize) => prevPageSize + 5);
      setStart((prevStart) => prevStart + 1);
    }
  };

  const handleOpenModal = (scholarshipId: any) => {
    setSelectedScholarshipId(scholarshipId);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const FromStep: any = CollegeApplicatonListData?.form_stape;

  useEffect(() => {
    setFilterModal(false);
  }, [SelectedStream, SelectedState, SelectedCity]);

  return (
    <RootLayouts>
      <section className="navbar-landingPage-responsive">
        <div className="max-w-screen-xl px-4 mx-auto mt-4">
          <AppliedFilter
            setSelectedStream={setSelectedStream}
            SelectedStream={SelectedStream}
            SelectedState={SelectedState}
            setSelectedState={setSelectedState}
            SelectedCity={SelectedCity}
            setSelectedCity={setSelectedCity}
            setSelectedCountry={setSelectedCountry}
            SelectedCountry={SelectedCountry}
            SelectedScholarshipType={SelectedScholarshipType}
            setSelectedScholarshipType={setSelectedScholarshipType}
          />

          <PageInfo
            title={`Scholarships in ${
              SelectedState || SelectedCountry || "World"
            }`}
            subTitle={`Found ${
              scholarshipDataList?.meta?.pagination?.total ||
              scholarshipDataList?.length ||
              0
            }`}
            updatedOn="Updated on Nov 17, 2023 14:25 IST"
            pageType="scholarships"
          />

          <div className="px-4 my-10">
            {allScholarshipsLoading ? (
              <>
                <CardSkeleten />
              </>
            ) : (
              <>
                <CarouselComponent
                  slidesDesktop={4}
                  slidesTablet={3}
                  title="Top Scholarships"
                  slides={
                    isTopScholarshipsData &&
                    isTopScholarshipsData?.map((item: any, index: any) => {
                      return (
                        <div>
                          <TopScholarshipWorldCard
                            key={index}
                            id={item?.attributes?.scholarship_url}
                            ScholarshipData={item?.attributes}
                            onApplyNow={() => handleOpenModal(item?.id)}
                          />
                        </div>
                      );
                    })
                  }
                  slideGap={undefined}
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
                <ScholarshipFilter
                  setSelectedCountry={setSelectedCountry}
                  SelectedCountry={SelectedCountry}
                  setSelectedScholarshipType={setSelectedScholarshipType}
                  SelectedScholarshipType={SelectedScholarshipType}
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

          <div className="main flex gap-4 mt-10 pt-8 px-4 border-t mx-4 border-t-[#DDDDDD]">
            <div className="w-1/4 min-w-36 hidden md:block">
              {scholarshipDataList?.length === 0 && loading ? (
                <div>
                  <FullWidthSkeleten />
                </div>
              ) : (
                <>
                  <ScholarshipFilter
                    setSelectedCountry={setSelectedCountry}
                    SelectedCountry={SelectedCountry}
                    setSelectedScholarshipType={setSelectedScholarshipType}
                    SelectedScholarshipType={SelectedScholarshipType}
                  />
                </>
              )}
            </div>
            <div className="flex-1 w-full overflow-hidden">
              <div className="flex-1 w-full overflow-hidden">
                <div className="bg-white flex gap-4 items-stretch">
                  <div className="flex px-4 py-1 border-2 border-extra-light-text rounded flex-1 items-center text-primary-text focus-within:border-secondary-text">
                    <Image
                      src={SearchIcon}
                      width={20}
                      height={20}
                      alt="search"
                    />
                    <input
                      className="w-full flex-1 bg-transparent text-lg px-2 text-primary-text outline-none"
                      placeholder={`Search for Scholarships`}
                      onChange={handleSearch}
                      value={Search}
                    />
                  </div>
                  <div className="relative">
                    <div
                      className="flex border-2 items-center px-8 py-2 border-extra-light-text gap-2 rounded-lg cursor-pointer"
                      onClick={toggleDropdown}
                    >
                      <span>Sort</span>
                      <div>
                        <Image
                          src={SortIcon}
                          width={20}
                          height={20}
                          alt="sort"
                        />
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
                            onClick={() => handleSort("scholarship_title:asc")}
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

                {scholarshipDataList?.length === 0 && loading ? (
                  <div>
                    <FullWidthSkeleten />
                  </div>
                ) : (
                  <>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5">
                      {scholarshipDataList &&
                        scholarshipDataList?.map((item: any, index: any) => {
                          return (
                            <div key={index}>
                              <ScholarshipApplyCard
                                scholarshipID={
                                  item?.attributes?.scholarship_url
                                }
                                id={item?.id}
                                ScholarshipData={item?.attributes}
                              />
                            </div>
                          );
                        })}
                    </div>
                    <div className="text-center py-6">
                      {ScholarshipData?.length ||
                        (scholarshipDataList?.length > 9 && (
                          <>
                            {/* Conditional rendering to show spinner */}
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

                {allScholarshipsLoading ? (
                  <div>
                    <FullWidthSkeleten />
                  </div>
                ) : (
                  <>
                    <div>
                      <Feature
                        title="Filter By Level of Study"
                        tags={StudyTags}
                      />
                    </div>

                    <div className="my-4 bg-primary-light py-4 px-4">
                      <CarouselComponent
                        slidesDesktop={3}
                        slidesTablet={3}
                        titleColor="text-primary"
                        title="Featured Scholarships"
                        slides={
                          isFeaturedScholarshipsData &&
                          isFeaturedScholarshipsData?.map(
                            (item: any, index: any) => {
                              return (
                                <div>
                                  <FeaturedScholarship
                                    key={index}
                                    id={item?.attributes?.scholarship_url}
                                    ScholarshipData={item?.attributes}
                                  />
                                </div>
                              );
                            }
                          )
                        }
                        slideGap={undefined}
                      />
                    </div>
                    <div>
                      <Feature title="Filter By Country" tags={CountryTags} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto my-12">
            <AppBanner />
          </div>
        </div>
      </section>
      {isModalOpen && (
        <BasicInformation
          id={selectedScholarshipId}
          isSectionCheck={"Scholarships"}
          FromStep={FromStep}
          onClose={handleCloseModal}
        />
      )}
    </RootLayouts>
  );
};

export default ScholarshipsPage;
