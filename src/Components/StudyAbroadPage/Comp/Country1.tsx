import { EarthLocationIcon } from '@/src/Asset';
import Image from 'next/image';
import React from 'react'

const Country1 = ({
    inView,
    showCountryDropdown,
    setShowCountryDropdown,
    setShowStreamDropdown,
    setShowCourseDropdown,
    selectedCountry,
    CountryListData,
    setSelectedCountry
}:any) => {
    return (
        <div>

            <div
                className={`flex gap-2 ${!inView ? "p-4 w-[200px]" : "p-2"
                    } border-r-2 md:text-base text-xs items-center cursor-pointer`}
                onClick={() => {
                    setShowCountryDropdown(!showCountryDropdown);
                    setShowStreamDropdown(false);
                    setShowCourseDropdown(false);
                }}
            >
                {!inView && <Image src={EarthLocationIcon} alt="" />}
                <div className="relative bg-white text-xs p-2 md:text-base outline-none border-none cursor-pointer">
                    <div className="flex items-center justify-between">
                        {selectedCountry || `${!inView ? "Any" : ""} Country`}
                    </div>
                    {showCountryDropdown && (
                        <div className="absolute top-16 -left-32 shadow-lg border border-gray-200 min-w-[500px] z-10 rounded-xl">
                            <h1 className="w-full px-4 mt-2 text-sm">
                                Search by region
                            </h1>
                            <div className="grid grid-cols-3 gap-2 p-8 min-h-fit duration-200 bg-white rounded-xl -mt-4">
                                {CountryListData?.map((country: any) => (
                                    <div
                                        key={country.id}
                                        onClick={() => {
                                            setSelectedCountry(
                                                country?.attributes?.country_name
                                            );
                                            setShowCountryDropdown(false);
                                        }}
                                        className="bg-white w-36 hover:bg-gray-200 cursor-pointer p-2 rounded-xl"
                                    >
                                        <img
                                            src={
                                                country.attributes.flags?.data?.attributes
                                                    ?.url || ""
                                            }
                                            alt=""
                                            className="border border-gray-300 rounded-2xl object-contain bg-center w-full h-28"
                                        />
                                        <h1 className="text-sm">
                                            {country?.attributes?.country_name}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Country1