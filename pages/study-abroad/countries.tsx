import React, { useEffect, useState } from "react";
import Image from "next/image";
import AppliedFilter from "@/src/Components/appliedFilters/appliedFilter";
import PageInfo from "@/src/Components/PageInfo/PageInfo";
import { SearchIcon, SortIcon } from "@/src/Asset";
import CarouselComponent from "@/src/Components/carousel/carousel";
import useExmas from "@/src/Hooks/useExmas";
import useCommonApi from "@/src/Hooks/useCommonApi";
import ExamFilter from "@/src/Components/@exam/examFilter/examFilter";
import useRecomended from "@/src/Hooks/useRecomended";
import AbroadTopCountriesCard from "@/src/Components/studyAbroadListingCard/abroadTopCountriesCard";
import AbroadListItemCard from "@/src/Components/studyAbroadListingCard/abroadListItemCard/abroadListItemCard";
import TopCountriesAcceptingAdmissionCard from "@/src/Components/studyAbroadListingCard/topCountriesAcceptingAdmissionCard/topCountriesAcceptingAdmissionCard";
import RootLayouts from "@/src/Layouts/Rootlayouts/Rootlayouts";
import useCountry from "@/src/Hooks/useCountry";
import FullWidthSkeleten from "@/src/Components/Skeleton/FullWidthSkeleten";
import CardSkeleten from "@/src/Components/Skeleton/CardSkeleten";
import StudyAbroadCountryFilter from "@/src/Components/studyAbroadCountryFilter/StudyAbroadCountryFilter";

const StudyAbroadCountries = () => {
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [ExamDataList, setExamDataList] = useState<any>(null);
  const [SelectedStream, setSelectedStream] = useState<any>(null);
  const [SelectedExamLevel, setSelectedExamLevel] = useState<any>(null);
  const [SelectedCountry, setSelectedCountry] = useState<any>("India");
  const { AllStreamData } = useCommonApi();
  const [StreamData, setStreamData] = useState<any>([]);
  const [ExamLevelData, setExamLevelData] = useState<any>([]);
  const [sortOption, setSortOption] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);

  const GetSelectedSteamData =
    StreamData &&
    StreamData.filter(
      (stream: { attributes: { stream_name: any } }) =>
        stream?.attributes?.stream_name === SelectedStream
    );

  useEffect(() => {
    setStreamData(AllStreamData || []);
  }, [AllStreamData]);

  const handleSearchInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(event.target.value);
  };

  const {
    GetAllCourseFilterd,
    isFeaturedCountryData,
    isTopCountryData,
    allCountryLoading,
  } = useCountry();

  const [CountryValue, setCountryValue] = useState<any>("");
  const [CountryListData, setCountryListData] = useState<any[]>([]);
  const { CountryData } = GetAllCourseFilterd(CountryValue);

  useEffect(() => {
    setCountryListData(CountryData);
  }, [CountryData]);

  const handleCountrySelect = (selectedCountry: string) => {
    setCountryValue(selectedCountry);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSort = (option: React.SetStateAction<string>) => {
    setSortOption(option ? [option] : []);
    setIsOpen(false);
  };

  return (
    <>
      <RootLayouts>
        <section className="navbar-landingPage-responsive ">
          <div className="max-w-screen-xl px-4 mx-auto ">
            <AppliedFilter
              setSelectedStream={setSelectedStream}
              SelectedStream={SelectedStream}
              setSelectedExamLevel={setSelectedExamLevel}
              SelectedExamLevel={SelectedExamLevel}
              setSelectedCountry={setSelectedCountry}
              SelectedCountry={SelectedCountry}
            />

            <PageInfo
              title={`Top  ${CountryData?.length} Countries in the World`}
              subTitle={``}
              StreamData={AllStreamData}
              SelectedStreamData={GetSelectedSteamData}
              SelectedStream={SelectedStream}
              updatedOn="Updated on Nov 17, 2023 14:25 IST"
              pageType="countries"
            />
          </div>
        </section>
        <section>
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="my-4  py-4 sm:px-4">
              {allCountryLoading ? (
                <>
                  <CardSkeleten />
                </>
              ) : (
                <>
                  <CarouselComponent
                    slidesDesktop={4}
                    slidesTablet={3}
                    title="Top Countries in the World"
                    slides={
                      isTopCountryData &&
                      isTopCountryData?.map((item: any, index: any) => {
                        return (
                          <AbroadTopCountriesCard
                            key={index}
                            id={item?.attributes?.country_url}
                            CountryData={item?.attributes}
                          />
                        );
                      })
                    }
                    slideGap={undefined}
                  />
                </>
              )}
            </div>
            <div className="main flex gap-4 mt-10 pt-10 border-t sm:mx-4 border-t-[#DDDDDD]">
              <div className="w-1/4 min-w-36 lg:block hidden">
                <StudyAbroadCountryFilter
                  setSelectedCountry={setSelectedCountry}
                  SelectedCountry={SelectedCountry}
                />
              </div>
              <div className="flex-1 w-full overflow-hidden">
                <div className="flex-1 w-full overflow-hidden">
                  <div className="bg-white pt-4 flex gap-4 items-stretch">
                    <div className="flex px-4 py-1 border-2 border-extra-light-text rounded flex-1 items-center text-primary-text focus-within:border-secondary-text">
                      <Image
                        src={SearchIcon}
                        width={20}
                        height={20}
                        alt="search"
                      />
                      <input
                        className="w-full flex-1 bg-transparent text-xl px-2 py-2 text-primary-text outline-none"
                        placeholder={`Search Country Name`}
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                      />
                    </div>
                    <div className="relative hidden md:block">
                      <div
                        className="flex border-2 items-center px-4 py-3 border-extra-light-text gap-2 rounded cursor-pointer"
                        onClick={toggleDropdown}
                      >
                        <span>sort</span>
                        <div>
                          <Image
                            src={SortIcon}
                            width={20}
                            height={20}
                            alt="search"
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
                              onClick={() => handleSort("country_name:asc")}
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
                  {allCountryLoading ? (
                    <div>
                      <FullWidthSkeleten />
                    </div>
                  ) : (
                    <div>
                      {CountryListData &&
                        CountryListData?.filter((country: any) =>
                          country?.attributes?.country_name
                            .toLowerCase()
                            .includes(searchQuery?.toLowerCase())
                        )?.map((item: any, index: number) => {
                          return (
                            <div key={index + 24}>
                              <AbroadListItemCard
                                CountryData={item?.attributes}
                                id={item?.attributes?.country_url}
                              />

                              {index + 1 == 2 ? (
                                <div className="my-4 bg-primary-light py-4 px-4">
                                  <CarouselComponent
                                    slidesDesktop={3}
                                    slidesMobile={1}
                                    slidesTablet={2}
                                    titleColor="text-primary"
                                    title="Top Countries Accepting Admission"
                                    slides={
                                      isFeaturedCountryData &&
                                      isFeaturedCountryData?.map(
                                        (item: any, index: any) => {
                                          return (
                                            <TopCountriesAcceptingAdmissionCard
                                              key={index}
                                              id={item?.attributes?.country_url}
                                              CountryData={item?.attributes}
                                            />
                                          );
                                        }
                                      )
                                    }
                                    slideGap={undefined}
                                  />
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </RootLayouts>
    </>
  );
};

export default StudyAbroadCountries;
