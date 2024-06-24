import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_ALL_CAREAR, GET_ALL_CAREEAR_BY_ID, GET_CAREER_BY_FILTER } from '../graphql/carears/getCarears';

const GetSingleCareearById = (careersUrl: any) => {
  const { loading, error, data } = useQuery(GET_ALL_CAREEAR_BY_ID, {
    variables: { careersUrl },
  });

  return {
    singleCareersData: data?.careers?.data,
    loading,
    error,
  };
};

const GetCareerByFilter = (
  searchTerm?: string,
  pageSize?: number,
  country?: string,
  streem?: string,
  careerType?: string,
  level?:string,
  sortOption?: [string],
) => {
  let variables: any = {};
  
  if (country) {
    variables.country = country;
  }

  if (streem) {
    variables.streem = streem;
  }

  if (careerType) {
    variables.careerType = careerType;
  }

  if(level){
    variables.level = level;
  }

  if (searchTerm) {
    variables.searchTerm = searchTerm;
  }

  if (sortOption) {
    variables.sortOption = sortOption;
  }

  const { loading, error, data } = useQuery<any>(GET_CAREER_BY_FILTER, {
    variables: {
      ...variables,
      start: 1,
      pageSize,
      sort: variables.sortOption
    },
  });

  return {
    CareerData: data?.careers,
    loading,
    error,
  };
};


const useCarears = () => {
  const {
    loading: allCarearLoading,
    error: allCarearError,
    data: allCarearData,
  } = useQuery<any>(GET_ALL_CAREAR);

  const AllCarearData = allCarearData?.careers?.data;

  const [AllCarearDataList, setAllCarearDataList] = useState<any[]>([]);

  useEffect(() => {
    setAllCarearDataList(AllCarearData || []);
  }, [AllCarearData]);

  const isTopCareeareData = AllCarearDataList?.filter((Careear: any) => Careear.attributes.is_top)
  const isFeaturedCareearData = AllCarearDataList?.filter((Careear: any) => Careear.attributes.is_featured)

  return {
    AllCarearDataList,
    AllCarearData,
    GetSingleCareearById,
    GetCareerByFilter,
    isFeaturedCareearData,
    isTopCareeareData,
    allCarearLoading
  };
};

export default useCarears;