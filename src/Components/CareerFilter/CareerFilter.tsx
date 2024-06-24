import { Key, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useCommonApi from "@/src/Hooks/useCommonApi";
import { useRouter } from "next/router";

export default function CareerFilter({
  setSelectedStream,
  SelectedStream,
  setSelectedCountry,
  SelectedCountry,
  setSelectedState,
  SelectedState,
  setSelectedCity,
  SelectedCity,
  careerDataLength,
}: any) {
  const [StreamData, setStreamData] = useState([]);
  const [CountryData, setCountryData] = useState([]);
  const [StateData, setStateData] = useState([]);
  const [CityData, setCityData] = useState([]);
  const { AllStreamData, AllCountryData, AllStateData, AllCityData } =
    useCommonApi();
  const [streamOpen, setStreamOpen] = useState(true);
  const [countryOpen, setCountryOpen] = useState(true);
  const [stateOpen, setStateOpen] = useState(true);
  const [cityOpen, setCityOpen] = useState(true);
  const [streamSearchTerm, setStreamSearchTerm] = useState("");
  const [countrySearchTerm, setCountrySearchTerm] = useState("");
  const [stateSearchTerm, setStateSearchTerm] = useState("");
  const [citySearchTerm, setCitySearchTerm] = useState("");
  const [SelectedStremData, setSelectedStremData] = useState<any>(null);
  const [SelectedStateData, setSelectedStateData] = useState<any>(null);
  const [SelectedCountryData, setSelectedCountryData] = useState<any>(null);

  const handleToggleOpen = (section: string) => {
    if (section === "stream") {
      setStreamOpen((prevState) => !prevState);
    } else if (section === "country") {
      setCountryOpen((prevState) => !prevState);
    } else if (section === "state") {
      setStateOpen((prevState) => !prevState);
    } else if (section === "city") {
      setCityOpen((prevState) => !prevState);
    }
  };

  const handleStreamChange = (event: { target: { value: any } }) => {
    setSelectedStream(event.target.value);
  };

  const handelCountryChange = (event: { target: { value: any } }) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    router.push({
      pathname: "/careers",
      query: { country: selectedCountry },
    });
  };

  const SelectedCountryState = SelectedCountryData?.attributes?.states?.data;
  const CompareHeightState = SelectedCountryState || StateData;

  const SelectedCountryCity = SelectedCountryData?.attributes;

  const SeletedStateCity = SelectedStateData?.attributes?.cities?.data;
  const CompareHeightCity = SeletedStateCity || CityData;

  const handelStateChange = (event: { target: { value: any } }) => {
    setSelectedState(event.target.value);
    setSelectedCity(null);
  };

  const handelCityChange = (event: { target: { value: any } }) => {
    setSelectedCity(event.target.value);
  };

  const router = useRouter();
  useEffect(() => {
    const { stream, country, state, city } = router.query;
    if (typeof stream === "string") {
      setSelectedStream(stream);
    }
    if (typeof country === "string") {
      setSelectedCountry(country);
    }
    if (typeof state === "string") {
      setSelectedState(state);
    }
    if (typeof city === "string") {
      setSelectedCity(city);
    }
  }, [router.query]);

  useEffect(() => {
    setStreamData(AllStreamData || []);
    setCountryData(AllCountryData || []);
    setStateData(AllStateData || []);
    setCityData(AllCityData || []);
  }, [AllStreamData, AllCountryData, AllStateData, AllCityData]);

  const filterStreamData = (streamData: any[], searchTerm: string) => {
    return streamData?.filter((stream) =>
      stream?.attributes.stream_name
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase())
    );
  };

  const filterCountryData = (countryData: any[], searchTerm: string) => {
    return countryData?.filter((country) =>
      country?.attributes.country_name
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase())
    );
  };

  const filterStateData = (stateData: any[], searchTerm: string) => {
    return stateData?.filter((state) =>
      state?.attributes.state_name
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase())
    );
  };

  const filterCityData = (cityData: any[], searchTerm: string) => {
    return cityData?.filter((city) =>
      city?.attributes.city_name
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase())
    );
  };

  const sortedStreamData = StreamData?.slice()?.sort((a: any, b: any) => {
    return a?.attributes?.filter_sequence - b?.attributes?.filter_sequence;
  });
  return (
    <>
      <div className="relative bg-white md:block">
        <h3 className="px-2 py-2 my-5 text-primary-text text-lg">
          Showing{" "}
          <span className="font-semibold">{careerDataLength || "0"} </span>{" "}
          {careerDataLength > 1 ? "Careers" : "Career"}
        </h3>
        {/* Stream Filter */}
        {!SelectedStream && (
          <div className="shadow-lg py-2 px-4 my-4 rounded-lg border">
            <div
              className="px-2 py-2 mb- h-10 flex items-center justify-between rounded-md"
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
                <div className="pt-1 pb-2 ">
                  <div className="mb-4 h-10 relative flex items-center gap-1">
                    <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                    <input
                      placeholder="Search Stream"
                      className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md py-1"
                      value={streamSearchTerm}
                      onChange={(e) => setStreamSearchTerm(e.target.value)}
                    />
                  </div>
                  <div
                    className={`px-3 ${
                      sortedStreamData?.length > 10 ? "h-[55vh]" : "h-auto"
                    } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}
                  >
                    {filterStreamData(sortedStreamData, streamSearchTerm).map(
                      (stream: any, index: Key | null | undefined) => (
                        <div
                          key={index}
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
                            onChange={handleStreamChange}
                            className="h-5 w-5 rounded-md"
                          />
                          <label
                            htmlFor={`StreamName_${index}`}
                            className="flex-1 cursor-pointer text-sm text-secondary-text hover:text-primary"
                          >
                            {stream?.attributes?.stream_name}
                          </label>
                          <span className="text-sm text-secondary-text hover:text-primary">
                            ({stream?.attributes?.careers?.data?.length})
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
        {/* Country Filter */}
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
      </div>
    </>
  );
}
