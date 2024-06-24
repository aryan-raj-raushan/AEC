import useCommonApi from "@/src/Hooks/useCommonApi";
import useScholarships from "@/src/Hooks/useScholarships";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ScholarshipFilter({
  SelectedCountry,
  setSelectedCountry,
  setSelectedScholarshipType,
  SelectedScholarshipType,
}: any) {
  const { AllCountryData } = useCommonApi();
  const router = useRouter();
  const { AllScholarshipTypeDataList } = useScholarships();

  const [countryOpen, setCountryOpen] = useState(true);
  const [scholarshipOpen, setScholarshipOpen] = useState(true);
  const [countrySearchTerm, setCountrySearchTerm] = useState("");
  const [scholarshipSearchTerm, setScholarshipSearchTerm] = useState("");

  const filterCountryData = (countryData: any[], searchTerm: string) => {
    return countryData?.filter((country) =>
      country.attributes?.country_name
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase())
    );
  };

  const filterScholarshipTypeData = (
    scholarshipData: any[],
    searchTerm: string
  ) => {
    return scholarshipData?.filter((scholarship) =>
      scholarship.attributes?.title
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase())
    );
  };

  const handleCountryChange = (selectedCountry: string) => {
    setSelectedCountry(selectedCountry);
    router.push({
      pathname: "/scholarships",
      query: { country: selectedCountry },
    });
  };

  const handleScholarshipTypeChange = (selectedType: string) => {
    setSelectedScholarshipType(selectedType);
  };

  return (
    <>
      {!SelectedCountry && (
        <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
          <div
            className="px-2 py-2 h-10 flex items-center justify-between cursor-pointer rounded-md"
            onClick={() => setCountryOpen((prevState) => !prevState)}
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
                    (country: any, index: number) => (
                      <div
                        key={country.id} // Assuming country id is unique
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
                          onChange={() =>
                            handleCountryChange(
                              country.attributes?.country_name
                            )
                          }
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

      {!SelectedScholarshipType && (
        <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
          <div
            className="px-2 py-2 h-10 flex items-center justify-between cursor-pointer rounded-md"
            onClick={() => setScholarshipOpen((prevState) => !prevState)}
          >
            <span>Scholarship Type</span>
            {scholarshipOpen ? (
              <IoIosArrowDown className="w-4 h-4" />
            ) : (
              <IoIosArrowUp className="w-4 h-4" />
            )}
          </div>
          {scholarshipOpen && AllScholarshipTypeDataList && (
            <>
              <div className="py-1">
                <div className="mb-4 h-10 relative flex items-center">
                  <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                  <input
                    placeholder="Search Scholarship Type"
                    className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md  py-1 text-sm"
                    value={scholarshipSearchTerm}
                    onChange={(e) => setScholarshipSearchTerm(e.target.value)}
                  />
                </div>
                <div className="px-4 h-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4">
                  {filterScholarshipTypeData(
                    AllScholarshipTypeDataList,
                    scholarshipSearchTerm
                  ).map((scholarship: any, index: number) => (
                    <div
                      key={index} // Assuming index is unique
                      className="flex gap-2 items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="scholarshipType"
                        id={`ScholarshipType_${index}`}
                        value={scholarship?.attributes?.title}
                        checked={
                          SelectedScholarshipType ===
                          scholarship?.attributes?.title
                        }
                        onChange={() =>
                          handleScholarshipTypeChange(
                            scholarship.attributes?.title
                          )
                        }
                        className="h-5 w-5 rounded-md"
                      />
                      <label
                        htmlFor={`ScholarshipType_${index}`}
                        className="cursor-pointer flex-1 text-sm text-secondary-text hover:text-primary"
                      >
                        {scholarship?.attributes?.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default ScholarshipFilter;
