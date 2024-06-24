import { Key, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useCommonApi from "@/src/Hooks/useCommonApi";
import { useRouter } from "next/router";
import useCourses from "@/src/Hooks/useCourses";

export default function CollegeFilters({
  AllCollegesData,
  setSelectedStream,
  SelectedStream,

  setSelectedState,
  SelectedState,
  setSelectedCity,
  SelectedCity,
  // ====
  SelectedCourse,
  setSelectedCourse,

  setSelectedCollegeType,
  SelectedCollegeType,

  setSelectedAffiliation,
  SelectedAffiliation,

  setSelectedRanking,
  SelectedRanking,
  TotalCollege,

  setSelectedCountry,
  SelectedCountry,
}: any) {
  const [StreamData, setStreamData] = useState([]);
  const [StateData, setStateData] = useState([]);
  const [CityData, setCityData] = useState([]);
  const {
    AllCountryData,
    AllStreamData,
    AllStateData,
    AllCityData,
    AllCollegeTypeData,
    AllRankingData,
    AllApprovedByData,
  } = useCommonApi();
  const { CourseListData } = useCourses();

  const [streamOpen, setStreamOpen] = useState(true);
  const [stateOpen, setStateOpen] = useState(true);
  const [cityOpen, setCityOpen] = useState(true);
  const [courseOpen, setCourseOpen] = useState(true);
  const [collegeTypeOpen, setCollegeTypeOpen] = useState(true);
  const [affiliationOpen, setAffiliationOpen] = useState(true);
  const [rankingOpen, setRankingOpen] = useState(true);
  const [countryOpen, setCountryOpen] = useState(true);

  // ==== search trams
  const [streamSearchTerm, setStreamSearchTerm] = useState("");
  const [stateSearchTerm, setStateSearchTerm] = useState("");
  const [citySearchTerm, setCitySearchTerm] = useState("");
  const [courseSearchTerm, setCourseSearchTerm] = useState("");
  const [collegeTypeSearchTerm, setCollegeTypeSearchTerm] = useState("");
  const [affiliationSearchTerm, setAffiliationSearchTerm] = useState("");
  const [rankingSearchTerm, setRankingSearchTerm] = useState("");
  const [countrySearchTerm, setCountrySearchTerm] = useState("");

  // ===
  const [SelectedStremData, setSelectedStremData] = useState<any>(null);
  const [SelectedStateData, setSelectedStateData] = useState<any>(null);
  const [SelectedCountryData, setSelectedCountryData] = useState<any>(null);

  const handleToggleOpen = (section: string) => {
    if (section === "stream") {
      setStreamOpen((prevState) => !prevState);
    } else if (section === "state") {
      setStateOpen((prevState) => !prevState);
    } else if (section === "city") {
      setCityOpen((prevState) => !prevState);
    } else if (section === "course") {
      setCourseOpen((prevState) => !prevState);
    } else if (section === "college_type") {
      setCollegeTypeOpen((prevState) => !prevState);
    } else if (section === "affiliation") {
      setAffiliationOpen((prevState) => !prevState);
    } else if (section === "ranking") {
      setRankingOpen((prevState) => !prevState);
    } else if (section === "country") {
      setCountryOpen((prevState) => !prevState);
    }
  };
  const router = useRouter();

  useEffect(() => {
    const { stream } = router.query;
    if (typeof stream === "string") {
      setSelectedStream(stream);
    }
  }, [router.query]);
  useEffect(() => {
    const { course } = router.query;
    if (typeof course === "string") {
      setSelectedCourse(course);
    }
  }, [router.query]);

  const handleStreamChange = (event: any) => {
    const selectedStream = event.target.value;
    setSelectedStream(selectedStream);
    // router.push({
    //   pathname: '/colleges',
    //   query: { stream: selectedStream }
    // });
  };
  const handelCourseChange = (event: { target: { value: any } }) => {
    const selectedCourse = event.target.value;
    setSelectedCourse(selectedCourse);
    router.push({
      pathname: "/colleges",
      query: { course: selectedCourse },
    });
  };

  const handelCountryChange = (event: { target: { value: any } }) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    router.push({
      pathname: "/colleges",
      query: { country: selectedCountry },
    });
  };

  const handelStateChange = (event: { target: { value: any } }) => {
    setSelectedState(event.target.value);
    setSelectedCity(null);
  };

  const handelCityChange = (event: { target: { value: any } }) => {
    setSelectedCity(event.target.value);
  };

  const handelCollegeTypeChange = (event: { target: { value: any } }) => {
    setSelectedCollegeType(event.target.value);
  };

  const handelAffiliationChange = (event: { target: { value: any } }) => {
    setSelectedAffiliation(event.target.value);
  };

  const handelRankingChange = (event: { target: { value: any } }) => {
    setSelectedRanking(event.target.value);
  };

  useEffect(() => {
    setStreamData(AllStreamData || []);
  }, [AllStreamData]);

  useEffect(() => {
    setStateData(AllStateData || []);
  }, [AllStateData]);

  useEffect(() => {
    setCityData(AllCityData || []);
  }, [AllCityData]);

  const filterStreamData = (streamData: any[], searchTerm: string) => {
    return streamData.filter((stream) =>
      stream.attributes.stream_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  };

  const filterCountryData = (countryData: any[], searchTerm: string) => {
    return countryData?.filter((country) =>
      country.attributes?.country_name
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase())
    );
  };

  const filterStateData = (stateData: any[], searchTerm: string) => {
    return stateData.filter((state) =>
      state.attributes.state_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  };

  const filterCityData = (cityData: any[], searchTerm: string) => {
    return cityData.filter((city) =>
      city.attributes.city_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterCoursesData = (coursesData: any[], searchTerm: string) => {
    return coursesData.filter((course) =>
      course?.attributes?.course_name
        ?.toLowerCase()
        .includes(searchTerm?.toLowerCase())
    );
  };
  // AllCollegeTypeData
  const filterCollegeTypeData = (
    collegeTypeData: any[],
    searchTerm: string
  ) => {
    return collegeTypeData?.filter(
      (college: { attributes: { college_type: string } }) =>
        college?.attributes?.college_type
          ?.toLowerCase()
          .includes(searchTerm?.toLowerCase())
    );
  };

  const filterRankingTypeData = (
    rankingTypeData: any[],
    searchTerm: string
  ) => {
    return rankingTypeData?.filter(
      (ranking: { attributes: { ranking_body_name: string } }) =>
        ranking?.attributes?.ranking_body_name
          ?.toLowerCase()
          .includes(searchTerm?.toLowerCase())
    );
  };

  const filterAffiliationTypeData = (
    affiliationTypeData: any[],
    searchTerm: string
  ) => {
    return affiliationTypeData?.filter(
      (affiliation: { attributes: { organisation_name: string } }) =>
        affiliation?.attributes?.organisation_name
          ?.toLowerCase()
          .includes(searchTerm?.toLowerCase())
    );
  };

  const SelectedStremCourse = SelectedStremData?.attributes?.courses?.data;
  const CompareHeightCourse = SelectedStremCourse || CourseListData;

  const SelectedCountryState = SelectedCountryData?.attributes?.states?.data;
  const CompareHeightState = SelectedCountryState || StateData;

  const SelectedCountryCity = SelectedCountryData?.attributes;

  const SeletedStateCity = SelectedStateData?.attributes?.cities?.data;
  const CompareHeightCity = SeletedStateCity || CityData;

  const sortedStreamData = StreamData?.slice()?.sort((a: any, b: any) => {
    return a?.attributes?.filter_sequence - b?.attributes?.filter_sequence;
  });

  const sortedCourseData = (SelectedStremCourse || CourseListData)
    ?.slice()
    .sort((a: any, b: any) => {
      return a?.attributes?.filter_sequence - b?.attributes?.filter_sequence;
    });

  return (
    <div className="relative bg-white md:block">
      <h3 className="px-2 py-2 mt-4 mb-5 text-primary-text text-lg">
        Showing{" "}
        <span className="font-semibold">
          {TotalCollege || AllCollegesData?.length}{" "}
        </span>{" "}
        Colleges
      </h3>

      {/* === Country ==== */}
      {!SelectedCountry && (
        <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
          <div
            className="px-2 py-2 h-10 flex items-center justify-between cursor-pointer rounded-md"
            onClick={() => handleToggleOpen("country")}
          >
            <span>Country</span>
            {countryOpen ? (
              <IoIosArrowDown className="w-4 h-4" />
            ) : (
              <IoIosArrowUp className="w-4 h-4" />
            )}
          </div>
          {countryOpen && (
            <>
              <div className="py-1">
                <div className="mb-4 h-10 relative flex items-center">
                  <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                  <input
                    placeholder="Search Country"
                    className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md  py-1 text-sm"
                    value={countrySearchTerm}
                    onChange={(e) => setCountrySearchTerm(e.target.value)}
                  />
                </div>
                <div
                  className={`px-4 ${
                    AllCountryData?.length >= 10 ? "h-[40vh]" : "h-auto"
                  } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}
                >
                  {filterCountryData(AllCountryData, countrySearchTerm)?.map(
                    (country: any, index: Key | null | undefined) => (
                      <div
                        key={index}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="country"
                          id={`CountryName_${index}`}
                          value={country?.attributes?.country_name}
                          checked={
                            SelectedCountry ===
                            country?.attributes?.country_name
                          }
                          onChange={(event) => {
                            handelCountryChange(event);
                            setSelectedCountryData(country);
                          }}
                          className="h-5 w-5 rounded-md"
                        />
                        <label
                          htmlFor={`CountryName_${index}`}
                          className="cursor-pointer flex-1 text-sm text-secondary-text hover:text-primary"
                        >
                          {country?.attributes?.country_name}
                        </label>
                        <span className="text-sm text-secondary-text hover:text-primary">
                          ({country?.attributes?.colleges?.data?.length})
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Stream Filter */}
      {!SelectedStream && (
        <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
          <div
            className="px-2 py-2 h-10 flex items-center justify-between rounded-md"
            onClick={() => handleToggleOpen("stream")}
          >
            <span>Stream</span>
            {streamOpen ? (
              <IoIosArrowDown className="w-4 h-4" />
            ) : (
              <IoIosArrowUp className="w-4 h-4" />
            )}
          </div>
          {streamOpen && (
            <>
              <div className="py-1 px-2">
                <div className="mb-4 h-10 relative flex items-center ">
                  <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                  <input
                    placeholder="Search Stream"
                    className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md  py-1 text-sm"
                    value={streamSearchTerm}
                    onChange={(e) => setStreamSearchTerm(e.target.value)}
                  />
                </div>
                <div
                  className={`px-4 ${
                    StreamData?.length >= 10 ? "h-[40vh]" : "h-auto"
                  } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}
                >
                  {filterStreamData(sortedStreamData, streamSearchTerm)?.map(
                    (stream: any, index: Key | null | undefined) => (
                      <div
                        key={stream?.attributes?.filter_sequence}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="StreamName"
                          id={`StreamName_${index}`}
                          value={stream.attributes.stream_name}
                          checked={
                            SelectedStream === stream.attributes.stream_name
                          }
                          onChange={(event) => {
                            handleStreamChange(event);
                            setSelectedStremData(stream);
                          }}
                          className="lg:h-5 lg:w-5 w-3 h-3 rounded-md"
                        />
                        <label
                          htmlFor={`StreamName_${index}`}
                          className="flex-1 cursor-pointer lg:text-sm text-xs text-secondary-text hover:text-primary"
                        >
                          {stream?.attributes?.stream_name}
                        </label>
                        <span className="lg:text-sm text-xs text-secondary-text hover:text-primary">
                          ({stream?.attributes?.college_names?.data?.length})
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* State Filter */}
      {!SelectedState && (
        <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
          <div
            className="px-2 py-2 h-10 flex items-center justify-between cursor-pointer rounded-md"
            onClick={() => handleToggleOpen("state")}
          >
            <span>State</span>
            {stateOpen ? (
              <IoIosArrowDown className="w-4 h-4" />
            ) : (
              <IoIosArrowUp className="w-4 h-4" />
            )}
          </div>
          {stateOpen && (
            <>
              <div className="py-1">
                <div className="mb-4 h-10 relative flex items-center">
                  <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                  <input
                    placeholder="Search State"
                    className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md  py-1 text-sm"
                    value={stateSearchTerm}
                    onChange={(e) => setStateSearchTerm(e.target.value)}
                  />
                </div>
                <div
                  className={`px-4 ${
                    CompareHeightState?.length >= 10 ? "h-[40vh]" : "h-auto"
                  } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}
                >
                  {filterStateData(
                    SelectedCountryState || StateData,
                    stateSearchTerm
                  )?.map((state: any, index: Key | null | undefined) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="state"
                        id={`StateName_${index}`}
                        value={state?.attributes?.state_name}
                        checked={
                          SelectedState === state?.attributes?.state_name
                        }
                        onChange={(event) => {
                          handelStateChange(event);
                          setSelectedStateData(state);
                        }}
                        className="h-5 w-5 rounded-md"
                      />
                      <label
                        htmlFor={`StateName_${index}`}
                        className="cursor-pointer flex-1 text-sm text-secondary-text hover:text-primary"
                      >
                        {state?.attributes?.state_name}
                      </label>
                      <span className="text-sm text-secondary-text hover:text-primary">
                        ({state?.attributes?.colleges?.data?.length})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* City Filter */}
      {!SelectedCity && (
        <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
          <div
            className="px-2 py-2 h-10 flex items-center justify-between cursor-pointer rounded-md"
            onClick={() => handleToggleOpen("city")}
          >
            <span>City</span>
            {cityOpen ? (
              <IoIosArrowDown className="w-4 h-4" />
            ) : (
              <IoIosArrowUp className="w-4 h-4" />
            )}
          </div>
          {cityOpen && (
            <>
              <div className="py-1">
                <div className="mb-4 h-10 relative flex items-center">
                  <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                  <input
                    placeholder="Search City"
                    className="w-full px-8 bg-transparent border border-[#898C8C]  rounded-md  py-1 text-sm"
                    value={citySearchTerm}
                    onChange={(e) => setCitySearchTerm(e.target.value)}
                  />
                </div>
                <div
                  className={`px-4 ${
                    CompareHeightCity?.length >= 10 ? "h-[40vh]" : "h-auto"
                  } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}
                >
                  {filterCityData(
                    SeletedStateCity || CityData,
                    citySearchTerm
                  )?.map((city: any, index: Key | null | undefined) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="state"
                        id={`CityName_${index}`}
                        value={city?.attributes?.city_name}
                        checked={SelectedCity === city?.attributes?.city_name}
                        onChange={handelCityChange}
                        className="h-5 w-5 rounded-md"
                      />
                      <label
                        htmlFor={`CityName_${index}`}
                        className="cursor-pointer flex-1 text-sm text-secondary-text hover:text-primary"
                      >
                        {city?.attributes?.city_name}
                      </label>
                      <span className="text-sm text-secondary-text hover:text-primary">
                        ({city?.attributes?.colleges?.data?.length})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* ============ COURSE ==========*/}

      {!SelectedCourse && (
        <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
          <div
            className="px-2 py-2 h-10 flex items-center justify-between cursor-pointer rounded-md"
            onClick={() => handleToggleOpen("course")}
          >
            <span>Course</span>
            {courseOpen ? (
              <IoIosArrowDown className="w-4 h-4" />
            ) : (
              <IoIosArrowUp className="w-4 h-4" />
            )}
          </div>
          {courseOpen && (
            <>
              <div className="py-1">
                <div className="mb-4 h-10 relative flex items-center">
                  <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                  <input
                    placeholder="Search Course"
                    className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md  py-1 text-sm"
                    value={courseSearchTerm}
                    onChange={(e) => setCourseSearchTerm(e.target.value)}
                  />
                </div>
                <div
                  className={`px-4 ${
                    CompareHeightCourse.length >= 10 && "h-[40vh]"
                  } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}
                >
                  {filterCoursesData(sortedCourseData, courseSearchTerm)?.map(
                    (courses: any, index: Key | null | undefined) => (
                      <div
                        key={courses?.attributes?.filter_sequence}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="state"
                          id={`Courses_${index}`}
                          value={courses?.attributes?.course_name}
                          checked={
                            SelectedCourse === courses?.attributes?.course_name
                          }
                          onChange={handelCourseChange}
                          className="h-5 w-5 rounded-md"
                        />
                        <label
                          htmlFor={`Courses_${index}`}
                          className="cursor-pointer flex-1 text-sm text-secondary-text hover:text-primary"
                        >
                          {courses?.attributes?.course_name}
                        </label>
                        <span className="text-sm text-secondary-text hover:text-primary">
                          ({courses?.attributes?.colleges?.data?.length})
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* ============ COLLEGE TYPE =========*/}

      {!SelectedCollegeType && (
        <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
          <div
            className="px-2 py-2 h-10 flex items-center justify-between cursor-pointer rounded-md"
            onClick={() => handleToggleOpen("college_type")}
          >
            <span>COLLEGE TYPE</span>
            {collegeTypeOpen ? (
              <IoIosArrowDown className="w-5 h-5" />
            ) : (
              <IoIosArrowUp className="w-5 h-5" />
            )}
          </div>
          {collegeTypeOpen && (
            <>
              <div className="py-1">
                <div className="mb-4 h-10 relative flex items-center">
                  <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                  <input
                    placeholder="Search College Type"
                    className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md  py-1 text-sm"
                    value={collegeTypeSearchTerm}
                    onChange={(e) => setCollegeTypeSearchTerm(e.target.value)}
                  />
                </div>
                <div
                  className={`px-4 ${
                    AllCollegeTypeData?.length >= 10 ? "h-[40vh]" : "h-auto"
                  } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}
                >
                  {filterCollegeTypeData(
                    AllCollegeTypeData,
                    collegeTypeSearchTerm
                  )?.map((collegeType: any, index: Key | null | undefined) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="state"
                        id={`CollegeType_${index}`}
                        value={collegeType?.attributes?.college_type}
                        checked={
                          SelectedCollegeType ===
                          collegeType?.attributes?.college_type
                        }
                        onChange={handelCollegeTypeChange}
                        className="h-5 w-5 rounded-md"
                      />
                      <label
                        htmlFor={`CollegeType_${index}`}
                        className="cursor-pointer flex-1 text-sm text-secondary-text hover:text-primary"
                      >
                        {collegeType?.attributes?.college_type}
                      </label>
                      <span className="text-sm text-secondary-text hover:text-primary">
                        ({collegeType?.attributes?.colleges?.data?.length})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* ============ AFFILIATION ========= */}
      {!SelectedAffiliation && (
        <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
          <div
            className="px-2 py-2 h-10 flex items-center justify-between cursor-pointer rounded-md"
            onClick={() => handleToggleOpen("affiliation")}
          >
            <span>AFFILIATION</span>
            {affiliationOpen ? (
              <IoIosArrowDown className="w-4 h-4" />
            ) : (
              <IoIosArrowUp className="w-4 h-4" />
            )}
          </div>
          {affiliationOpen && (
            <>
              <div className="py-1">
                <div className="mb-4 h-10 relative flex items-center">
                  <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                  <input
                    placeholder="Search Affiliation"
                    className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md  py-1 text-sm"
                    value={affiliationSearchTerm}
                    onChange={(e) => setAffiliationSearchTerm(e.target.value)}
                  />
                </div>
                <div
                  className={`px-4 ${
                    AllApprovedByData?.length >= 10 ? "h-[40vh]" : "h-auto"
                  } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}
                >
                  {filterAffiliationTypeData(
                    AllApprovedByData,
                    affiliationSearchTerm
                  )?.map((approve: any, index: Key | null | undefined) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="state"
                        id={`Affiliation_${index}`}
                        value={approve?.attributes?.organisation_name}
                        checked={
                          SelectedAffiliation ===
                          approve?.attributes?.organisation_name
                        }
                        onChange={handelAffiliationChange}
                        className="h-5 w-5 rounded-md"
                      />
                      <label
                        htmlFor={`Affiliation_${index}`}
                        className="cursor-pointer flex-1 text-sm text-secondary-text hover:text-primary"
                      >
                        {approve?.attributes?.organisation_name}
                      </label>
                      <span className="text-sm text-secondary-text hover:text-primary">
                        ({approve?.attributes?.colleges?.data?.length})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {!SelectedRanking && (
        <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
          <div
            className="px-2 py-2 h-10 flex items-center justify-between cursor-pointer rounded-md"
            onClick={() => handleToggleOpen("ranking")}
          >
            <span>RANKING</span>
            {rankingOpen ? (
              <IoIosArrowDown className="w-4 h-4" />
            ) : (
              <IoIosArrowUp className="w-4 h-4" />
            )}
          </div>
          {rankingOpen && (
            <>
              <div className="py-1">
                <div className="mb-4 h-10 relative flex items-center">
                  <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                  <input
                    placeholder="Search Ranking"
                    className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md  py-1 text-sm"
                    value={rankingSearchTerm}
                    onChange={(e) => setRankingSearchTerm(e.target.value)}
                  />
                </div>
                <div
                  className={`px-4 ${
                    AllRankingData?.length >= 10 ? "h-[40vh]" : "h-auto"
                  } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}
                >
                  {filterRankingTypeData(
                    AllRankingData,
                    rankingSearchTerm
                  )?.map((ranking: any, index: Key | null | undefined) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="state"
                        id={`Ranking_${index}`}
                        value={ranking?.attributes?.ranking_body_name}
                        checked={
                          SelectedRanking ===
                          ranking?.attributes?.ranking_body_name
                        }
                        onChange={handelRankingChange}
                        className="h-5 w-5 rounded-md"
                      />
                      <label
                        htmlFor={`Ranking_${index}`}
                        className="cursor-pointer flex-1 text-sm text-secondary-text hover:text-primary"
                      >
                        {ranking?.attributes?.ranking_body_name}
                      </label>
                      <span className="text-sm text-secondary-text hover:text-primary">
                        ({ranking?.attributes?.colleges?.data?.length})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
