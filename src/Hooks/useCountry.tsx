import {
  GET_FILTERD_COUNTRY,
  GET_ALL_COUNTRY,
  getCountryById,
} from "../graphql/country/getCountry";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const GetAllCourseFilterd = (countryName: string) => {
  const { loading, error, data } = useQuery<any>(GET_FILTERD_COUNTRY, {
    variables: {
      country_name: countryName,
    },
  });

  return {
    CountryData: data?.countries.data,
    loading,
    error,
  };
};

const GetSingleCountryById = (countryUrl: string) => {
  const { loading, error, data } = useQuery<any>(getCountryById, {
    variables: { countryUrl },
  });

  return {
    singleCountryData: data?.countries?.data,
    loading,
    error,
  };
};

const useCountry = () => {
    const {
        loading: allCountryLoading,
        error: allCountryError,
        data: allCountryData,
      } = useQuery<any>(GET_ALL_COUNTRY);
    
      const [CountryListData, setCountryListData] = useState<any[]>([]);
    
    
      const AllCountryData = allCountryData?.countries?.data;
      useEffect(() => {
        setCountryListData(AllCountryData || []);
      }, [allCountryData]);

      const isTopCountryData = CountryListData.filter((country: any)=> country.attributes.is_top)
      const isFeaturedCountryData = CountryListData.filter((country: any)=> country.attributes.is_featured)
    


  return {
    GetSingleCountryById,
    GetAllCourseFilterd,
    isFeaturedCountryData,
    isTopCountryData,
    allCountryLoading,
    CountryListData
  };
};

export default useCountry;
