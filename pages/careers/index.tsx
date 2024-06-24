import React, { useEffect, useState } from "react";
import Image from "next/image";
// layouts
import { RootLayouts } from "@/src/Layouts";
import AppliedFilter from "@/src/Components/appliedFilters/appliedFilter";
import CarouselComponent from "@/src/Components/carousel/carousel";
import { SearchIcon, SortIcon } from "@/src/Asset";
import useCommonApi from "@/src/Hooks/useCommonApi";
import AppBanner from "@/src/Components/appBanner/appBanner";
import CollegeFilters from "@/src/Components/collegeFilters/collageFilters";
import Feature from "@/src/Components/feature/feature";
import { CountryTags, StateTags, StudyTags } from "@/src/Utils/Mock/CommonData";
import useRecomended from "@/src/Hooks/useRecomended";
import PageInfo from "@/src/Components/PageInfo/PageInfo";
import useCarears from "@/src/Hooks/useCarears";
import TopCarearsCard from "@/src/Components/card/TopCarearsCard";
import CareerApplyCard from "@/src/Components/@carears/CareerApplyCard/CareerApplyCard";
import FullWidthSkeleten from "@/src/Components/Skeleton/FullWidthSkeleten";
import { CgSortAz } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import CardSkeleten from "@/src/Components/Skeleton/CardSkeleten";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import BasicInformation from "@/src/Components/consultingModule/basicInformation/basicInformation";
import userFrom from "@/src/Hooks/userFrom";
import { useAppSelector } from "@/src/store";
import useUserSignup from "@/src/Hooks/useSignup";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import { ID } from "@/types/global";
import CareerFilter from "@/src/Components/CareerFilter/CareerFilter";

const CareersPage = () => {
  const { AllStreamData, AllStateData, AllCityData } = useCommonApi();
  const [Search, setSearch] = useState("");
  const [SelectedState, setSelectedState] = useState<any>(null);
  const [SelectedStream, setSelectedStream] = useState<any>("");
  const [SelectedCity, setSelectedCity] = useState<any>(null);
  const [StreamData, setStreamData] = useState<any>([]);
  const [visibleCareer, setVisibleCareer] = useState<number>(10);
  const [sortOption, setSortOption] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [CareerDataList, setCareerDataList] = useState<any>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [pageSize, setPageSize] = useState<number>(10);
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [sortModal, setSortModal] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [start, setStart] = useState<number>(1);
  const [SelectedCountry, setSelectedCountry] = useState<any>("India");
  const [selectedCareearId, setSelectedCareearId] = useState(null);
  const [cityData, setCityData] = useState<any>([]);
  const [stateData, setStateData] = useState<any>([]);

  const {
    AllCarearDataList,
    isFeaturedCareearData,
    isTopCareeareData,
    allCarearLoading,
    GetCareerByFilter,
  } = useCarears();

  const { CollegeApplicatonListData } = userFrom();

  const { CareerData, loading, error } = GetCareerByFilter(
    Search,
    pageSize,
    SelectedCountry,
    SelectedStream,
    undefined,
    undefined,
    sortOption
  );
  const careerDataLength = CareerData?.data?.length;

  useEffect(() => {
    if (!loading && loadingMore) {
      setLoadingMore(false);
    }
  }, [loading, loadingMore]);
  useEffect(() => {
    if (CareerData) {
      if (CareerData?.data && CareerData?.data?.length > 0) {
        setCareerDataList(CareerData?.data);
      } else {
        setCareerDataList([]);
        setHasMore(false);
      }
    }
  }, [CareerData, pageSize]);

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSort = (option: React.SetStateAction<string>) => {
    setSortOption(option ? [option] : []);
    setIsOpen(false);
  };

  const GetSelectedSteamData =
    StreamData &&
    StreamData.filter(
      (stream: { attributes: { stream_name: any } }) =>
        stream?.attributes?.stream_name === SelectedStream
    );

  // Update the handleLoadMore function to remove the scroll related logic
  const handleLoadMore = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!loading && hasMore) {
      setLoadingMore(true);
      setPageSize((prevPageSize) => prevPageSize + 5);
      setStart((prevStart) => prevStart + 1);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = (careersId: any) => {
    setSelectedCareearId(careersId);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setFilterModal(false);
  }, [SelectedStream, SelectedState, SelectedCity]);

  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const { getUserMetaData } = useUserMetaData();
  const userMetaId: ID = getUserDataMetaId(userID);
  const { userAllMetaData } = getUserMetaData(userMetaId);
  const AppliedCareear = userAllMetaData && userAllMetaData?.careers_interested;

  const FromStep: any = CollegeApplicatonListData?.form_stape;

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

  const handleCityChange = (event: any) => {
    setSelectedCity(event);
  };

  const handleStateChange = (event: any) => {
    setSelectedState(event);
  };

  return (
    <RootLayouts>
      <section className="navbar-landingPage-responsive">
        <div className="max-w-screen-xl px-2 lg:px-3 mx-auto mt-2">
          <AppliedFilter
            setSelectedStream={setSelectedStream}
            SelectedStream={SelectedStream}
            SelectedState={SelectedState}
            setSelectedState={setSelectedState}
            SelectedCity={SelectedCity}
            setSelectedCity={setSelectedCity}
            setSelectedCountry={setSelectedCountry}
            SelectedCountry={SelectedCountry}
          />
          <div className="p-2">
            {CareerDataList?.length === 0 && loading ? (
              <div>
                <FullWidthSkeleten />
              </div>
            ) : (
              <>
                <PageInfo
                  title={`Careers in ${
                    SelectedState || SelectedCountry || "World"
                  }`}
                  subTitle={`Found ${
                    CareerDataList?.meta?.pagination?.total ||
                    CareerDataList?.length ||
                    0
                  } ${SelectedStream ? SelectedStream : ""}`}
                  updatedOn="Updated on Nov 17, 2023 14:25 IST"
                  pageType="careers"
                />
              </>
            )}
          </div>
          <div className="px-4 my-10">
            {allCarearLoading ? (
              <>
                <CardSkeleten />
              </>
            ) : (
              <div>
                <CarouselComponent
                  slidesDesktop={4}
                  slidesTablet={3}
                  title="Top Career"
                  slides={
                    isTopCareeareData &&
                    isTopCareeareData?.map((item: any, index: any) => {
                      return (
                        <div>
                          <TopCarearsCard
                            key={index}
                            AppliedCareear={AppliedCareear}
                            careearId={item?.id}
                            id={item?.attributes?.career_url}
                            CarearsData={item?.attributes}
                            onApplyNow={() => handleOpenModal(item?.id)}
                          />
                        </div>
                      );
                    })
                  }
                  slideGap={undefined}
                />
              </div>
            )}
          </div>

          <div className="fixed bottom-0 left-0 z-10 w-full md:hidden block">
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
                  <CareerFilter
                    setSelectedStream={setSelectedStream}
                    SelectedStream={SelectedStream}
                    setSelectedCountry={setSelectedCountry}
                    SelectedCountry={SelectedCountry}
                    SelectedState={SelectedState}
                    setSelectedState={setSelectedState}
                    SelectedCity={SelectedCity}
                    setSelectedCity={setSelectedCity}
                    careerDataLength={careerDataLength}
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
          </div>
          {filterModal && (
            <div
              className={`bg-white h-screen fixed top-0 z-40 w-full left-0 transition-all duration-1000 ease-in-out ${
                filterModal
                  ? "delay-800 opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-full"
              }`}
            >
              <div className="py-6 min-h-screen">
                <div className="relative">
                  <div className="flex justify-between items-center border-b p-2">
                    <div className="flex gap-2 items-center justify-center">
                      <FaArrowLeftLong onClick={() => setFilterModal(false)} />
                      <h2 className="text-lg">FILTERS</h2>
                    </div>
                    <p
                      className="cursor-pointer text-blue-700"
                      onClick={() => setFilterModal(false)}
                    >
                      Reset
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="max-h-screen w-1/3 min-w-[150px] overflow-hidden flex flex-col">
                      <div className="flex justify-between items-center border-b border-r px-2 py-4 hover:text-blue-700 focus:text-blue-700 hover:border-r-0 focus:border-r-0">
                        <p className="font-bold text-nowrap">Degree</p>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>

                      <div className="flex justify-between items-center border-b border-r px-2 py-4 hover:text-blue-700 focus:text-blue-700 hover:border-r-0 focus:border-r-0">
                        <p className="font-bold text-nowrap">State</p>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>

                      <div className="flex justify-between items-center border-b border-r px-2 py-4 hover:text-blue-700 focus:text-blue-700 hover:border-r-0 focus:border-r-0">
                        <p className="font-bold text-nowrap">City</p>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>

                      <div className="flex justify-between items-center border-b border-r px-2 py-4 hover:text-blue-700 focus:text-blue-700 hover:border-r-0 focus:border-r-0">
                        <p className="font-bold text-nowrap">Study Mode</p>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-r px-2 py-4 hover:text-blue-700 focus:text-blue-700 hover:border-r-0 focus:border-r-0">
                        <p className="font-bold text-nowrap">Specialization</p>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-r px-2 py-4 hover:text-blue-700 focus:text-blue-700 hover:border-r-0 focus:border-r-0">
                        <p className="font-bold text-nowrap">Institute Type</p>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-r px-2 py-4 hover:text-blue-700 focus:text-blue-700 hover:border-r-0 focus:border-r-0">
                        <p className="font-bold text-nowrap">Exam</p>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-r px-2 py-4 hover:text-blue-700 focus:text-blue-700 hover:border-r-0 focus:border-r-0">
                        <p className="font-bold text-nowrap">Hostel</p>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>
                    </div>

                    <div className="overflow-y-scroll hide-scrollbar min-h-[70vh] max-h-[70vh] flex flex-col gap-5 mt-10 w-2/3 p-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            Diploma
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="cursor-pointer border-gray-400 rounded focus:ring-gray-400 focus:border-gray-400"
                          />
                          <label className="text-nowrap cursor-pointer">
                            Other
                          </label>
                        </div>
                        <span>(0)</span>
                      </div>
                    </div>
                  </div>
                  <div className="fixed bottom-0 bg-white z-50 border p-3 w-full">
                    <button
                      onClick={() => setFilterModal(false)}
                      className="py-2 w-full border rounded-lg text-white text-nowrap bg-blue-700 text-lg"
                    >
                      VIEW COLLEGES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {sortModal && (
            <div
              className={`bg-white h-screen fixed top-0 z-40 w-full left-0 transition-opacity duration-800 ${
                sortModal ? "delay-800 opacity-100" : "opacity-0"
              }`}
            >
              <div className="py-6 min-h-screen">
                <div className="relative">
                  <div className="flex justify-between items-center border-b p-2">
                    <div className="flex gap-2 items-center justify-center">
                      <FaArrowLeftLong onClick={() => setSortModal(false)} />
                      <h2 className="text-lg">SORT</h2>
                    </div>
                    <p
                      className="cursor-pointer text-blue-700"
                      onClick={() => setSortModal(false)}
                    >
                      Reset
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="max-h-screen w-1/3 min-w-[150px] overflow-hidden flex flex-col mt-9">
                      <div className="flex justify-between items-center border-b border-r px-2 py-4 hover:text-blue-700 focus:text-blue-700 hover:border-r-0 focus:border-r-0">
                        <p className="font-bold text-nowrap">ASC</p>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>

                      <div className="flex justify-between items-center border-b border-r px-2 py-4 hover:text-blue-700 focus:text-blue-700 hover:border-r-0 focus:border-r-0">
                        <p className="font-bold text-nowrap">DESC</p>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>
                    </div>

                    <div className="overflow-y-scroll hide-scrollbar min-h-[70vh] max-h-[70vh] flex flex-col gap-5 mt-10 w-2/3 p-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            B.Pharm (Bachelor of Pharmacy)
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="cursor-pointer" />
                          <label className="text-nowrap cursor-pointer">
                            Diploma
                          </label>
                        </div>
                        <span>(313)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="cursor-pointer border-gray-400 rounded focus:ring-gray-400 focus:border-gray-400"
                          />
                          <label className="text-nowrap cursor-pointer">
                            Other
                          </label>
                        </div>
                        <span>(0)</span>
                      </div>
                    </div>
                  </div>
                  <div className="fixed bottom-0 bg-white z-50 border p-3 w-full">
                    <button
                      onClick={() => setSortModal(false)}
                      className="py-2 w-full border rounded-lg text-white text-nowrap bg-blue-700 text-lg"
                    >
                      VIEW COLLEGES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="main flex gap-4 mt-5 pt-10 px-4 border-t mx-4 border-t-[#DDDDDD]">
            <div className="hidden md:block w-1/4 min-w-36">
              {CareerDataList.length === 0 && loading ? (
                <div>
                  <FullWidthSkeleten />
                </div>
              ) : (
                <>
                  <CareerFilter
                    setSelectedStream={setSelectedStream}
                    SelectedStream={SelectedStream}
                    setSelectedCountry={setSelectedCountry}
                    SelectedCountry={SelectedCountry}
                    SelectedState={SelectedState}
                    setSelectedState={setSelectedState}
                    SelectedCity={SelectedCity}
                    setSelectedCity={setSelectedCity}
                    careerDataLength={careerDataLength}
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
                      className="w-full flex-1 bg-transparent px-2 text-base text-primary-text outline-none"
                      placeholder={`Search by Career, Course & Career Level`}
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
                            onClick={() => handleSort("career_title:asc")}
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

                {CareerDataList.length === 0 && loading ? (
                  <div>
                    <FullWidthSkeleten />
                  </div>
                ) : (
                  <>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                      {CareerDataList &&
                        CareerDataList?.map((item: any, index: number) => {
                          return (
                            <div key={index}>
                              <CareerApplyCard
                                carearId={item.id}
                                id={item?.attributes?.career_url}
                                CarearsData={item?.attributes}
                              />
                            </div>
                          );
                        })}
                    </div>
                    <div className="text-center py-6">
                      {CareerData?.length ||
                        (CareerDataList?.length > 9 && (
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

                {allCarearLoading ? (
                  <div>
                    <FullWidthSkeleten />
                  </div>
                ) : (
                  <>
                    <div>
                      <Feature
                        title="Filter By State"
                        tags={stateData}
                        selectedValue={handleStateChange}
                      />
                    </div>

                    <div className="px-4 my-10 bg-primary-light">
                      <CarouselComponent
                        slidesDesktop={3}
                        slidesTablet={3}
                        title="Featured Career"
                        slides={
                          isFeaturedCareearData &&
                          isFeaturedCareearData?.map(
                            (item: any, index: any) => {
                              return (
                                <div>
                                  <TopCarearsCard
                                    id={item?.attributes?.career_url}
                                    key={index}
                                    AppliedCareear={AppliedCareear}
                                    careearId={item?.id}
                                    CarearsData={item?.attributes}
                                    onApplyNow={() => handleOpenModal(item?.id)}
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
                      <Feature
                        title="Filter By City"
                        tags={cityData}
                        selectedValue={handleCityChange}
                      />
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
          id={selectedCareearId}
          isSectionCheck={"Careear"}
          FromStep={FromStep}
          onClose={handleCloseModal}
        />
      )}
    </RootLayouts>
  );
};

export default CareersPage;
