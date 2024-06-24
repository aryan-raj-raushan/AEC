import { useState, useEffect } from "react";
import { ClearFilterIcon, CrossIcon } from "@/src/Asset";
import Image from "next/image";

type AppliedFilterProps = {
  setSelectedStream?: (value: any) => void;
  SelectedStream?: any;
  setSelectedState?: (value: any) => void;
  SelectedState?: any;
  setSelectedCity?: (value: any) => void;
  SelectedCity?: any;
  setSelectedExamLevel?: (value: any) => void;
  SelectedExamLevel?: any;
  setSelectedCourseLevel?: (value: any) => void;
  SelectedCourseLevel?: any;
  setSelectedCourse?: (value: any) => void;
  SelectedCourse?: any;
  setSelectedCollegeType?: (value: any) => void;
  SelectedCollegeType?: any;
  setSelectedAffiliation?: (value: any) => void;
  SelectedAffiliation?: any;
  setSelectedRanking?: (value: any) => void;
  SelectedRanking?: any;
  SelectedExamMode?: any;
  setSelectedExamMode?: (value: any) => void;
  setSelectedCountry?: (value: any) => void;
  SelectedCountry?: any;
  setSelectedScholarshipType?: (value: any) => void;
  SelectedScholarshipType?: any;
};

export default function AppliedFilter({
  setSelectedStream,
  SelectedStream,
  setSelectedState,
  SelectedState,
  setSelectedCity,
  SelectedCity,
  SelectedExamLevel,
  setSelectedExamLevel,
  SelectedCourseLevel,
  setSelectedCourseLevel,
  SelectedCourse,
  setSelectedCourse,
  setSelectedCollegeType,
  SelectedCollegeType,
  setSelectedAffiliation,
  SelectedAffiliation,
  setSelectedRanking,
  SelectedRanking,
  SelectedExamMode,
  setSelectedExamMode,
  setSelectedCountry,
  SelectedCountry,
  setSelectedScholarshipType,
  SelectedScholarshipType,
}: AppliedFilterProps) {
  const [selectedFilters, setSelectedFilters] = useState({
    state: SelectedState,
    stream: SelectedStream,
    city: SelectedCity,
    examLevel: SelectedExamLevel,
    courseLevel: SelectedCourseLevel,
    courses: SelectedCourse,
    collegeType: SelectedCollegeType,
    affiliation: SelectedAffiliation,
    ranking: SelectedRanking,
    examMode: SelectedExamMode,
    country: SelectedCountry,
    scholarshipType: SelectedScholarshipType,
  });

  useEffect(() => {
    setSelectedFilters({
      state: SelectedState,
      stream: SelectedStream,
      city: SelectedCity,
      examLevel: SelectedExamLevel,
      courseLevel: SelectedCourseLevel,
      courses: SelectedCourse,
      collegeType: SelectedCollegeType,
      affiliation: SelectedAffiliation,
      ranking: SelectedRanking,
      examMode: SelectedExamMode,
      country: SelectedCountry,
      scholarshipType: SelectedScholarshipType,
    });
  }, [
    SelectedState,
    SelectedStream,
    SelectedCity,
    SelectedExamLevel,
    SelectedCourseLevel,
    SelectedCourse,
    SelectedCollegeType,
    SelectedAffiliation,
    SelectedRanking,
    SelectedExamMode,
    SelectedCountry,
    SelectedScholarshipType,
  ]);

  const removeFilter = (filterType: string) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterType]: null,
    }));

    // Null check before calling the functions
    if (filterType === "stream" && setSelectedStream) {
      setSelectedStream(null);
    } else if (filterType === "state" && setSelectedState) {
      setSelectedState(null);
    } else if (filterType === "city" && setSelectedCity) {
      setSelectedCity(null);
    } else if (filterType === "examLevel" && setSelectedExamLevel) {
      setSelectedExamLevel(null);
    } else if (filterType === "courseLevel" && setSelectedCourseLevel) {
      setSelectedCourseLevel(null);
    } else if (filterType === "courses" && setSelectedCourse) {
      setSelectedCourse(null);
    } else if (filterType === "collegeType" && setSelectedCollegeType) {
      setSelectedCollegeType(null);
    } else if (filterType === "affiliation" && setSelectedAffiliation) {
      setSelectedAffiliation(null);
    } else if (filterType === "ranking" && setSelectedRanking) {
      setSelectedRanking(null);
    } else if (filterType === "examMode" && setSelectedExamMode) {
      setSelectedExamMode(null);
    } else if (filterType === "country" && setSelectedCountry) {
      setSelectedCountry(null);
    } else if (filterType === "scholarshipType" && setSelectedScholarshipType) {
      setSelectedScholarshipType(null);
    }
  };

  const removeAllFilters = () => {
    setSelectedFilters({
      state: null,
      stream: null,
      city: null,
      examLevel: null,
      courseLevel: null,
      courses: null,
      collegeType: null,
      affiliation: null,
      ranking: null,
      examMode: null,
      country: null,
      scholarshipType: null,
    });

    // Null checks before calling the functions
    if (setSelectedStream) {
      setSelectedStream(null);
    }
    if (setSelectedState) {
      setSelectedState(null);
    }
    if (setSelectedCity) {
      setSelectedCity(null);
    }
    if (setSelectedExamLevel) {
      setSelectedExamLevel(null);
    }
    if (setSelectedCourseLevel) {
      setSelectedCourseLevel(null);
    }
    if (setSelectedCourse) {
      setSelectedCourse(null);
    }
    if (setSelectedAffiliation) {
      setSelectedAffiliation(null);
    }
    if (setSelectedRanking) {
      setSelectedRanking(null);
    }
    if (setSelectedCollegeType) {
      setSelectedCollegeType(null);
    }
    if (setSelectedExamMode) {
      setSelectedExamMode(null);
    }
    if (setSelectedCountry) {
      setSelectedCountry(null);
    }
    if (setSelectedScholarshipType) {
      setSelectedScholarshipType(null);
    }
  };

  const areFiltersSelected =
    SelectedStream ||
    SelectedState ||
    SelectedCity ||
    SelectedExamLevel ||
    SelectedCourseLevel ||
    SelectedCourse ||
    SelectedRanking ||
    SelectedAffiliation ||
    SelectedCollegeType ||
    SelectedExamMode ||
    SelectedCountry ||
    SelectedScholarshipType;

  return (
    <>
      {areFiltersSelected && (
        <div className="md:mx-auto bg-white shadow-md py-2 border-t fixed top-[89px] !z-[99] flex w-full left-0">
          <div className="flex items-center justify-between w-full md:max-w-screen-xl md:mx-auto px-4">
            <div className="flex items-center gap-4">
              <h4 className="font-bold md:items-center text-lg md:text-lg md:nav-applied-filter">
                <span className="hidden md:inline-block">Applied</span> Filters:
              </h4>
              <div className="filters md:flex-1">
                <div className="flex gap-2 flex-wrap items-center">
                  {SelectedCountry && selectedFilters?.country !== null && (
                    <div className="flex gap-2 pl-1 pr-4 border items-center border-secondary rounded-md relative h-6">
                      <span className="font-md text-sm">
                        {selectedFilters.country}
                      </span>
                      <div
                        className="cursor-pointer absolute -top-2 bg-white -right-1 border-gray-400 border rounded-full"
                        onClick={() => removeFilter("country")}
                        data-testid="remove-country-button"
                      >
                        <Image
                          src={CrossIcon}
                          alt={"remove filter"}
                          width={20}
                          height={20}
                          className="w-4"
                        />
                      </div>
                    </div>
                  )}
                  {SelectedStream && selectedFilters?.stream !== null && (
                    <div className="flex gap-2 pr-3 pl-1 border items-center border-secondary rounded-md relative h-6">
                      <span className="font-medium text-sm">
                        {selectedFilters.stream}
                      </span>
                      <div
                        className="cursor-pointer absolute -top-2 bg-white -right-1 border-gray-400 border rounded-full"
                        onClick={() => removeFilter("stream")}
                        data-testid="remove-stream-button"
                      >
                        <Image
                          src={CrossIcon}
                          alt={"remove filter"}
                          width={20}
                          height={20}
                          className="w-4"
                        />
                      </div>
                    </div>
                  )}
                  {SelectedCourseLevel &&
                    selectedFilters?.courseLevel !== null && (
                      <div className="flex gap-2 pl-1 pr-4 border items-center border-secondary rounded-md relative h-6">
                        <span className="font-md text-sm">
                          {selectedFilters?.courseLevel}
                        </span>
                        <div
                          className="cursor-pointer absolute -top-2 bg-white -right-1 border-gray-400 border rounded-full"
                          onClick={() => removeFilter("courseLevel")}
                          data-testid="remove-course-level-button"
                        >
                          <Image
                            src={CrossIcon}
                            alt={"remove filter"}
                            width={20}
                            height={20}
                            className="w-4"
                          />
                        </div>
                      </div>
                    )}
                  {SelectedExamLevel && selectedFilters?.examLevel !== null && (
                    <div className="flex gap-2 pl-1 pr-4 border items-center border-secondary rounded-md relative h-6">
                      <span className="font-md text-sm">
                        {selectedFilters?.examLevel}
                      </span>
                      <div
                        className="cursor-pointer absolute -top-2 bg-white -right-1 border-gray-400 border rounded-full"
                        onClick={() => removeFilter("examLevel")}
                        data-testid="remove-exam-level-button"
                      >
                        <Image
                          src={CrossIcon}
                          alt={"remove filter"}
                          width={20}
                          height={20}
                          className="w-4"
                        />
                      </div>
                    </div>
                  )}
                  {SelectedState && selectedFilters?.state !== null && (
                    <div className="flex gap-2 pl-1 pr-4 h-6 border items-center border-secondary rounded-md relative">
                      <span className="font-md text-sm ">
                        {selectedFilters.state}
                      </span>
                      <div
                        className="cursor-pointer absolute -top-2 bg-white -right-1 border-gray-400 border rounded-full"
                        onClick={() => removeFilter("state")}
                        data-testid="remove-state-button"
                      >
                        <Image
                          src={CrossIcon}
                          alt={"remove filter"}
                          width={20}
                          height={20}
                          className="w-4"
                        />
                      </div>
                    </div>
                  )}
                  {SelectedCity && selectedFilters?.city !== null && (
                    <div className="flex gap-2 pl-1 pr-4 h-6 border items-center border-secondary rounded-md relative">
                      <span className="font-md text-sm">
                        {selectedFilters?.city}
                      </span>
                      <div
                        className="cursor-pointer absolute -top-2 bg-white -right-1 border-gray-400 border rounded-full"
                        onClick={() => removeFilter("city")}
                        data-testid="remove-city-button"
                      >
                        <Image
                          src={CrossIcon}
                          alt={"remove filter"}
                          width={20}
                          height={20}
                          className="w-4"
                        />
                      </div>
                    </div>
                  )}
                  {SelectedCourse && selectedFilters?.courses !== null && (
                    <div className="flex gap-2 pl-1 pr-4 border items-center border-secondary rounded-md relative h-6">
                      <span className="font-md text-sm">
                        {selectedFilters?.courses}
                      </span>
                      <div
                        className="cursor-pointer absolute -top-2 bg-white -right-1 border-gray-400 border rounded-full"
                        onClick={() => removeFilter("courses")}
                        data-testid="remove-courses-button"
                      >
                        <Image
                          src={CrossIcon}
                          alt={"remove filter"}
                          width={20}
                          height={20}
                          className="w-4"
                        />
                      </div>
                    </div>
                  )}
                  {SelectedAffiliation &&
                    selectedFilters?.affiliation !== null && (
                      <div className="flex gap-2 pl-1 pr-4 border items-center border-secondary rounded-md relative h-6">
                        <span className="font-md text-sm">
                          {selectedFilters?.affiliation}
                        </span>
                        <div
                          className="cursor-pointer absolute -top-2 bg-white -right-1 border-gray-400 border rounded-full"
                          onClick={() => removeFilter("affiliation")}
                          data-testid="remove-affiliation-button"
                        >
                          <Image
                            src={CrossIcon}
                            alt={"remove filter"}
                            width={20}
                            height={20}
                            className="w-4"
                          />
                        </div>
                      </div>
                    )}
                  {SelectedRanking && selectedFilters?.ranking !== null && (
                    <div className="flex gap-2 pl-1 pr-4 border items-center border-secondary rounded-md relative h-6">
                      <span className="font-md text-sm">
                        {selectedFilters?.ranking}
                      </span>
                      <div
                        className="cursor-pointer absolute -top-2 bg-white -right-1 border-gray-400 border rounded-full"
                        onClick={() => removeFilter("ranking")}
                        data-testid="remove-ranking-button"
                      >
                        <Image
                          src={CrossIcon}
                          alt={"remove filter"}
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  )}
                  {SelectedCollegeType &&
                    selectedFilters?.collegeType !== null && (
                      <div className="flex gap-2 px-3 pl-1 pr-4 border items-center border-secondary rounded-md relative h-6">
                        <span className="font-md text-sm">
                          {selectedFilters?.collegeType}
                        </span>
                        <div
                          className="cursor-pointer absolute -top-2 bg-white -right-1 border-gray-400 border rounded-full"
                          onClick={() => removeFilter("collegeType")}
                          data-testid="remove-collegeType-button"
                        >
                          <Image
                            src={CrossIcon}
                            alt={"remove filter"}
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                    )}
                  {SelectedExamMode && selectedFilters?.examMode !== null && (
                    <div className="flex gap-2 pr-3 pl-1 border items-center border-secondary rounded-md relative h-6">
                      <span className="font-md text-base">
                        {selectedFilters?.examMode}
                      </span>
                      <div
                        className="cursor-pointer absolute -top-2 bg-white -right-1 border-gray-400 border rounded-full"
                        onClick={() => removeFilter("examMode")}
                        data-testid="remove-examMode-button"
                      >
                        <Image
                          src={CrossIcon}
                          alt={"remove filter"}
                          width={20}
                          height={20}
                          className="w-4"
                        />
                      </div>
                    </div>
                  )}
                  {SelectedScholarshipType &&
                    selectedFilters?.scholarshipType !== null && (
                      <div className="flex gap-2 pr-3 pl-1 border items-center border-secondary rounded-md relative h-6">
                        <span className="font-md text-base">
                          {selectedFilters?.scholarshipType}
                        </span>
                        <div
                          className="cursor-pointer absolute -top-2 bg-white -right-1 border-gray-400 border rounded-full"
                          onClick={() => removeFilter("scholarshipType")}
                          data-testid="remove-scholarshipType-button"
                        >
                          <Image
                            src={CrossIcon}
                            alt={"remove filter"}
                            width={20}
                            height={20}
                            className="w-4"
                          />
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
            <div className="">
              {selectedFilters && (
                <>
                  <div
                    className="clearFilter md:nav-clear-all-filter cursor-pointer flex gap-2 bg-[#1268F5] text-white px-3 py-1 items-center rounded-md md:mr-2"
                    onClick={removeAllFilters}
                    data-testid="remove-all-filters-button"
                  >
                    <Image
                      src={ClearFilterIcon}
                      alt={"remove all filter"}
                      width={20}
                      height={20}
                      layout="responsive"
                    />
                    <div className="cursor-pointer inline-flex font-medium text-base text-white items-center gap-1 h-8 rounded-lg">
                      Clear{" "}
                      <span className="hidden md:inline-block"> Filters</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
