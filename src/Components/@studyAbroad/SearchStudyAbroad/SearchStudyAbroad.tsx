import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

function SearchStudyAbroad({ AllCollegesData, AllExamDataList, AllCourseData, AllCarearDataList }: any) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResultUrl, setSearchResultUrl] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchInput(value);
    setShowDropdown(true);
  };

  const filterData = (data: any[], key: string) =>
    data?.filter((item) =>
      item.attributes[key]?.toLowerCase().includes(searchInput.toLowerCase())
    ) || [];

  const filteredColleges = filterData(AllCollegesData, "college_name");
  const filteredExams = filterData(AllExamDataList, "exam_name");
  const filteredCourses = filterData(AllCourseData, "course_name");
  const filteredCareers = filterData(AllCarearDataList, "career_title");

  const handleSearchClick = () => {
    if (searchResultUrl) {
      router.push(searchResultUrl);
      setShowDropdown(false);
    }
  };

  const handleItemClick = (name: string, url: string) => {
    setSearchInput(name);
    setSearchResultUrl(url);
    setShowDropdown(false);
  };

  const renderDropdownItems = (filteredData: any[], key: string, type: string, urlKey: string) => {
    return filteredData.map((item) => {
      const url = `/${type}/${item.attributes[urlKey]}`;

      return (
        <div
          key={item.id}
          className="p-2 cursor-pointer hover:bg-gray-100"
          onClick={() => handleItemClick(item.attributes[key], url)}
        >
          <Link href={url}>{item.attributes[key]}</Link>
        </div>
      );
    });
  };

  return (
    <div className="relative w-max z-30">
      <div className="flex gap-1 items-center">
        <input
          className="rounded-md border-[0.5px] border-primary-extra-light-text xl:w-[520px] lg:w-[298px] bg-white p-2 shadow h-[50px] outline-none"
          placeholder="Search our top colleges, exams, courses, or careers"
          value={searchInput}
          onChange={handleChange}
        />
        <button
          className="bg-primary text-white h-[50px] rounded-md flex gap-4 items-center justify-center w-[113px]"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      {showDropdown && searchInput !== "" && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md rounded-md mt-1 z-40 max-h-60 overflow-y-auto hide-scrollbar">
          {filteredColleges.length === 0 &&
           filteredExams.length === 0 &&
           filteredCourses.length === 0 &&
           filteredCareers.length === 0 ? (
            <div className="p-2">No results found</div>
          ) : (
            <>
              {renderDropdownItems(filteredColleges, "college_name", "colleges", "college_url")}
              {renderDropdownItems(filteredExams, "exam_name", "exams", "exam_url")}
              {renderDropdownItems(filteredCourses, "course_name", "courses", "course_url")}
              {renderDropdownItems(filteredCareers, "career_title", "careers", "career_url")}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchStudyAbroad;
