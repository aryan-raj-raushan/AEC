/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
// layouts
import { RootLayouts } from "@/src/Layouts";
// Hooks
import useColleges from "@/src/Hooks/useColleges";
// components

import CollegeCard from "@/src/Components/card/collegeCard";
import Feature from "@/src/Components/feature/feature";
import CollegeListItem from "@/src/Components/collegeListItem/collegeListItem";
import AppliedFilter from "@/src/Components/appliedFilters/appliedFilter";
import CarouselComponent from "@/src/Components/carousel/carousel";
import { SearchIcon, SortIcon } from "@/src/Asset";
import useCommonApi from "@/src/Hooks/useCommonApi";
import AppBanner from "@/src/Components/appBanner/appBanner";
import CollegeFilters from "@/src/Components/collegeFilters/collageFilters";
import PageInfo from "@/src/Components/PageInfo/PageInfo";
import FullWidthSkeleten from "@/src/Components/Skeleton/FullWidthSkeleten";
import CardSkeleten from "@/src/Components/Skeleton/CardSkeleten";
import { CiFilter } from "react-icons/ci";
import { CgSortAz } from "react-icons/cg";
import BasicInformation from "@/src/Components/consultingModule/basicInformation/basicInformation";
import userFrom from "@/src/Hooks/userFrom";
import { ID } from "@/types/global";
import { useAppSelector } from "@/src/store";
import useUserSignup from "@/src/Hooks/useSignup";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Login from "@/src/Components/Login/Login";

const CollagePage = () => {
  const {
    GetCollegeByFilter,
    isFeaturedCollegeData,
    isToCollegeData,
    allCollegeLoading,
  } = useColleges();
  const { CollegeApplicatonListData } = userFrom();
  const { AllStreamData, AllStateData, AllCityData } = useCommonApi();
  const [Search, setSearch] = useState("");
  const [List, setList] = useState<any>([]);
  const [SelectedCountry, setSelectedCountry] = useState<any>("India");
  const [SelectedState, setSelectedState] = useState<any>(null);
  const [SelectedStream, setSelectedStream] = useState<any>(null);
  const [SelectedCity, setSelectedCity] = useState<any>(null);
  const [StreamData, setStreamData] = useState<any>([]);
  const [stateData, setStateData] = useState<any>([]);
  const [cityData, setCityData] = useState<any>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [start, setStart] = useState<number>(1);

  const [sortSidebarOpen, setSortSidebarOpen] = useState(false);
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);

  const toggleSortHandler = () => {
    setSortSidebarOpen(!sortSidebarOpen);
    setFilterSidebarOpen(false);
  };

  const toggleFilterHandler = () => {
    setFilterSidebarOpen(!filterSidebarOpen);
    setSortSidebarOpen(false);
  };

  // ===
  const [selectedCollegeId, setSelectedCollegeId] = useState(null);
  const [SelectedCourse, setSelectedCourse] = useState<any>(null);
  const [SelectedRanking, setSelectedRanking] = useState<any>(null);
  const [SelectedCollegeType, setSelectedCollegeType] = useState<any>(null);
  const [SelectedAffiliation, setSelectedAffiliation] = useState<any>(null);
  const [sortOption, setSortOption] = useState<any>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
  };

  const handleCityChange = (event: any) => {
    setSelectedCity(event);
  };

  const handleStateChange = (event: any) => {
    setSelectedState(event);
  };

  const GetSelectedSteamData =
    AllStreamData &&
    AllStreamData.filter(
      (stream: { attributes: { stream_name: any } }) =>
        stream?.attributes?.stream_name.toLowerCase() ===
        SelectedStream?.toLowerCase()
    );
  const router = useRouter();
  const collegeId = router?.query?.collegeId as string;
  const { GetSingleCollegeById } = useColleges();
  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const { getUserMetaData, checkSaveCollege, saveCollege } = useUserMetaData();
  const { singleCollegeData } = GetSingleCollegeById(collegeId);
  const userMetaId: ID = getUserDataMetaId(userID);
  const { userAllMetaData } = getUserMetaData(userMetaId);
  const AppliedCollege = userAllMetaData?.applied_colleges;

  // =========== load more functionality
  const { CollegeData, loading, error } = GetCollegeByFilter(
    SelectedStream,
    SelectedState,
    SelectedCity,
    pageSize,
    SelectedCourse,
    SelectedCollegeType,
    SelectedRanking,
    Search,
    SelectedAffiliation,
    sortOption,
    SelectedCountry
  );

  useEffect(() => {
    // Stream data
    let streamArr: any[] = [];
    AllStreamData?.forEach((stream: any) => {
      streamArr.push({
        name: stream.attributes?.stream_name,
        count: stream.attributes?.college_names?.data.length || 0,
      });
    });
    setStreamData(streamArr || []);

    // City data
    let cityArr: any[] = [];
    AllCityData?.forEach((city: any) => {
      cityArr.push({
        name: city.attributes?.city_name,
        count: city.attributes?.colleges?.data?.length,
      });
    });
    setCityData(cityArr || []);

    // City data
    let stateArr: any[] = [];
    AllStateData?.forEach((state: any) => {
      stateArr.push({
        name: state?.attributes?.state_name,
        count: state.attributes?.colleges?.data?.length,
      });
    });

    setStateData(stateArr || []);
  }, [AllStreamData, AllCityData, AllStateData]);

  const [loadingMore, setLoadingMore] = useState(false);

  const handleLoadMore = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!loading && hasMore) {
      setLoadingMore(true);
      setPageSize((prevPageSize) => prevPageSize + 5);
      if (Search === "") {
        // Reset start to 1 if search is empty
        setStart(1);
      } else {
        setStart((prevStart) => prevStart + 1);
      }
    }
  };

  useEffect(() => {
    if (!loading && loadingMore) {
      setLoadingMore(false);
    }
  }, [loading, loadingMore]);

  useEffect(() => {
    if (CollegeData) {
      if (CollegeData?.data && CollegeData?.data?.length > 0) {
        setList(CollegeData.data);
      } else {
        setList([]);
      }
    }
  }, [CollegeData, pageSize]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSort = (option: React.SetStateAction<string>) => {
    setSortOption(option ? [option] : []);
    setIsOpen(false);
  };

  const TotalCollegeData = List.length === 0 ? isFeaturedCollegeData : List;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (collegeId: any) => {
    setSelectedCollegeId(collegeId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setFilterSidebarOpen(false);
  }, [
    SelectedStream,
    SelectedCountry,
    SelectedState,
    SelectedCity,
    SelectedCourse,
    SelectedCollegeType,
    SelectedAffiliation,
    SelectedRanking,
  ]);

  const FromStep: any = CollegeApplicatonListData?.form_stape;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const countryParam = urlParams.get("country");

    if (countryParam) {
      setSelectedCountry(countryParam);
    }
  }, []);

  // ===============

  const sortedCollegeData = TotalCollegeData?.slice()?.sort((a: any, b: any) => {
    return a?.attributes?.display_sequence - b?.attributes?.display_sequence;
  });

  return (
    <RootLayouts>
      <section className="navbar-landingPage-responsive">
        <div className="max-w-screen-xl md:px-4 mx-auto">
          <AppliedFilter
            setSelectedStream={setSelectedStream}
            SelectedStream={SelectedStream}
            SelectedState={SelectedState}
            setSelectedState={setSelectedState}
            SelectedCity={SelectedCity}
            setSelectedCity={setSelectedCity}
            SelectedCourse={SelectedCourse}
            setSelectedCourse={setSelectedCourse}
            setSelectedCollegeType={setSelectedCollegeType}
            SelectedCollegeType={SelectedCollegeType}
            setSelectedAffiliation={setSelectedAffiliation}
            SelectedAffiliation={SelectedAffiliation}
            setSelectedRanking={setSelectedRanking}
            SelectedRanking={SelectedRanking}
            setSelectedCountry={setSelectedCountry}
            SelectedCountry={SelectedCountry}
          />

          <div className="p-2 mt-3">
            {List.length === 0 && loading ? (
              <div>
                <FullWidthSkeleten />
              </div>
            ) : (
              <>
                <PageInfo
                  title={`Colleges in ${
                    SelectedState || SelectedCountry || "World"
                  }`}
                  subTitle={`Found ${
                    CollegeData?.meta?.pagination?.total || List?.length || 0
                  } 
						${SelectedStream ? SelectedStream : ""}`}
                  StreamData={AllStreamData}
                  SelectedStreamData={GetSelectedSteamData}
                  SelectedStream={SelectedStream}
                  pageType="colleges"
                />
              </>
            )}
          </div>
          <div className="px-4 my-10">
            {allCollegeLoading ? (
              <>
                <CardSkeleten />
              </>
            ) : (
              <>
                <CarouselComponent
                  slidesDesktop={4}
                  slidesTablet={3}
                  title="Top Colleges"
                  slides={
                    isToCollegeData &&
                    isToCollegeData
                      .filter(
                        (college) =>
                          !SelectedCountry ||
                          college?.attributes?.country?.data?.attributes
                            ?.country_name === SelectedCountry
                      )
                      .map((clgData: any, index: any) => {
                        return (
                          <CollegeCard
                            key={index}
                            college={clgData?.attributes}
                            id={clgData?.attributes?.college_url}
                            college_name={""}
                            city={undefined}
                            state={undefined}
                            collegeId={clgData?.id}
                            setIsLoginModalOpen={setIsLoginModalOpen}
                            isLoginModalOpen={isLoginModalOpen}
                            AppliedCollege={AppliedCollege}
                            SelectedCountry={SelectedCountry}
                            onApplyNow={() => handleOpenModal(clgData?.id)}
                            urlInfo={
                              clgData?.attributes?.nav_items?.data[0]
                                ?.attributes?.title
                            }
                          />
                        );
                      })
                  }
                  slideGap={undefined}
                />
              </>
            )}
          </div>

          <div className="main md:flex gap-4 mt-10 pt-8 md:p-2 border-t mx-4 border-t-[#DDDDDD]">
            <div className="md:w-1/4 md:min-w-36  md:block hidden">
              {allCollegeLoading ? (
                <div>
                  <FullWidthSkeleten />
                </div>
              ) : (
                <>
                  <CollegeFilters
                    AllCollegesData={List}
                    TotalCollege={CollegeData?.meta?.pagination?.total}
                    setSelectedStream={setSelectedStream}
                    SelectedStream={SelectedStream}
                    SelectedState={SelectedState}
                    setSelectedState={setSelectedState}
                    SelectedCity={SelectedCity}
                    setSelectedCity={setSelectedCity}
                    SelectedCourse={SelectedCourse}
                    setSelectedCourse={setSelectedCourse}
                    setSelectedCollegeType={setSelectedCollegeType}
                    SelectedCollegeType={SelectedCollegeType}
                    setSelectedAffiliation={setSelectedAffiliation}
                    SelectedAffiliation={SelectedAffiliation}
                    setSelectedRanking={setSelectedRanking}
                    SelectedRanking={SelectedRanking}
                    setSelectedCountry={setSelectedCountry}
                    SelectedCountry={SelectedCountry}
                  />
                </>
              )}
            </div>
            <div className="flex-1 w-full overflow-hidden">
              <div className="flex-1 w-full overflow-hidden">
                <div className="bg-white pt-4 flex gap-4 items-stretch justify-between">
                  <div className="flex px-4  border-2 border-extra-light-text rounded-lg flex-1 items-center text-primary-text focus-within:border-secondary-text">
                    <Image
                      src={SearchIcon}
                      width={20}
                      height={20}
                      alt="search"
                    />
                    <input
                      className="w-full flex-1 bg-transparent text-xl sm:text-sm px-2 py-1 text-primary-text outline-none"
                      placeholder={`Search by College, Country & Stream`}
                      onChange={handleSearch}
                      value={Search}
                    />
                  </div>
                  <div className="relative hidden md:block">
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
                      <div className="absolute z-10 mt-1 right-0 bg-white rounded-md shadow-lg border">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <div
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSort("college_name:asc")}
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

                <div className="">
                  <div>
                    {sortSidebarOpen && (
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
                                setSortSidebarOpen(false);
                              }}
                              role="menuitem"
                            >
                              Alphabetically
                            </div>
                            <div
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                handleSort("updatedAt:asc");
                                setSortSidebarOpen(false);
                              }}
                              role="menuitem"
                            >
                              Updated By
                            </div>
                            <div
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                handleSort("createdAt:asc");
                                setSortSidebarOpen(false);
                              }}
                              role="menuitem"
                            >
                              Reset Sort
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {filterSidebarOpen && (
                      <div className="fixed right-0 top-[10%] bottom-[5%] p-4 animate-slide-left-to-right w-full bg-white shadow-lg z-50 overflow-y-auto">
                        <div className="absolute inset-0">
                          <CollegeFilters
                            AllCollegesData={List}
                            TotalCollege={CollegeData?.meta?.pagination?.total}
                            setSelectedStream={setSelectedStream}
                            SelectedStream={SelectedStream}
                            SelectedState={SelectedState}
                            setSelectedState={setSelectedState}
                            SelectedCity={SelectedCity}
                            setSelectedCity={setSelectedCity}
                            SelectedCourse={SelectedCourse}
                            setSelectedCourse={setSelectedCourse}
                            setSelectedCollegeType={setSelectedCollegeType}
                            SelectedCollegeType={SelectedCollegeType}
                            setSelectedAffiliation={setSelectedAffiliation}
                            SelectedAffiliation={SelectedAffiliation}
                            setSelectedRanking={setSelectedRanking}
                            SelectedRanking={SelectedRanking}
                            setSelectedCountry={setSelectedCountry}
                            SelectedCountry={SelectedCountry}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="fixed bottom-0 left-0 !z-[8999] w-full md:hidden block">
                    <div className="flex justify-evenly items-center text-white bg-primary text-lg">
                      <button
                        className="flex items-center gap-4 p-2"
                        onClick={toggleSortHandler}
                      >
                        <p>Sort</p>
                        <CgSortAz size={"32px"} className="cursor-pointer" />
                      </button>
                      <div className="min-h-4">|</div>
                      <button
                        className="flex items-center gap-4 p-2"
                        onClick={toggleFilterHandler}
                      >
                        <p>Filter</p>
                        <CiFilter size={"28px"} className="cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </div>

                {allCollegeLoading ? (
                  <div>
                    <FullWidthSkeleten />
                  </div>
                ) : (
                  <>
                    {sortedCollegeData?.map((college: any, index: number) => {
                      return (
                        <div key={index + 24}>
                          <CollegeListItem
                            college={college?.attributes}
                            id={college?.attributes?.college_url}
                            collegeId={college?.id}
                            AppliedCollege={AppliedCollege}
                          />

                          {(index + 1) % 4 === 0 ? (
                            <>
                              {(index + 1) % 8 === 0 ? (
                                <div className="my-4 bg-primary-light py-4 px-4">
                                  <CarouselComponent
                                    slidesDesktop={3}
                                    slidesTablet={2}
                                    titleColor="text-primary"
                                    title="Featured Colleges Accepting Admission"
                                    slides={
                                      isFeaturedCollegeData &&
                                      isFeaturedCollegeData?.map(
                                        (clgData: any, index: any) => {
                                          return (
                                            <CollegeCard
                                              key={index}
                                              college={clgData?.attributes}
                                              id={
                                                clgData?.attributes?.college_url
                                              }
                                              college_name={""}
                                              city={undefined}
                                              state={undefined}
                                              collegeId={clgData?.id}
                                              AppliedCollege={AppliedCollege}
                                              setIsLoginModalOpen={
                                                setIsLoginModalOpen
                                              }
                                              onApplyNow={() =>
                                                handleOpenModal(clgData?.id)
                                              }
                                            />
                                          );
                                        }
                                      )
                                    }
                                    slideGap={undefined}
                                  />
                                </div>
                              ) : (
                                <div>
                                  {(index + 1) % 4 === 0 ? (
                                    <Feature
                                      title="Filter By City"
                                      tags={cityData}
                                      selectedValue={handleCityChange}
                                    />
                                  ) : (index + 1) % 12 === 0 ? (
                                    <Feature
                                      title="Filter By State"
                                      tags={stateData}
                                      selectedValue={handleStateChange}
                                    />
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      );
                    })}
                  </>
                )}

                <div className="text-center py-6">
                  {List.length > 9 &&
                    hasMore &&
                    List.length !== CollegeData?.meta?.pagination?.total && (
                      <div className="text-center py-6">
                        <button
                          type="button"
                          className="text-black bg-white border-2 border-primary color-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                          onClick={handleLoadMore}
                        >
                          {loadingMore ? (
                            <span className="flex items-center gap-2">
                              <span>Loading...</span>{" "}
                              <div className="w-6 h-6 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent"></div>
                            </span>
                          ) : (
                            "Load More"
                          )}
                        </button>
                      </div>
                    )}
                </div>
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
          id={selectedCollegeId}
          isSectionCheck={"College"}
          FromStep={FromStep}
          onClose={handleCloseModal}
        />
      )}

      {isLoginModalOpen && (
        <Login
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
      )}
    </RootLayouts>
  );
};

export default CollagePage;
