import { useQuery } from "@apollo/client";
import {
  GET_ALL_SCHOLARSHIPS_QUERY,
  GetSingleScholarshipById,
  ScholarshipTypeData,
} from "../graphql/scholarship/scholarships";
import { useEffect, useState } from "react";

const GetScholarshipById = (scholarshipUrl: string) => {
  const { loading, error, data } = useQuery<any>(GetSingleScholarshipById, {
    variables: { scholarshipUrl },
  });

  return {
    singleScholarshipData: data?.scholarships?.data,
    loading,
    error,
  };
};

const GetscholarshipByFilter = (
  searchTerm?: string,
  pageSize?: number,
  country?: string,
  streem?: string,
  scholarshipType?: string,
  level?: string,
  sortOption?: [string]
) => {
  let variables: any = {};

  if (country) {
    variables.country = country;
  }

  if (streem) {
    variables.streem = streem;
  }

  if (scholarshipType) {
    variables.scholarshipType = scholarshipType;
  }

  if (level) {
    variables.level = level;
  }

  if (searchTerm) {
    variables.searchTerm = searchTerm;
  }

  if (sortOption) {
    variables.sortOption = sortOption;
  }

  const { loading, error, data } = useQuery<any>(GET_ALL_SCHOLARSHIPS_QUERY, {
    variables: {
      ...variables,
      start: 1,
      pageSize,
      sort: variables.sortOption,
    },
  });

  return {
    ScholarshipData: data?.scholarships,
    loading,
    error,
  };
};

const useScholarships = () => {
  const {
    loading: allScholarshipsLoading,
    error: allScholarshipsError,
    data: allScholarshipsData,
  } = useQuery<any>(GET_ALL_SCHOLARSHIPS_QUERY);

  const AllScholarshipsData = allScholarshipsData?.scholarships?.data;

  const [AllScholarshipDataList, setAllScholarshipDataList] = useState<any[]>(
    []
  );

  useEffect(() => {
    setAllScholarshipDataList(AllScholarshipsData || []);
  }, [AllScholarshipsData]);

  const isTopScholarshipsData = AllScholarshipDataList.filter(
    (Scholarships: any) => Scholarships.attributes.is_top
  );
  const isFeaturedScholarshipsData = AllScholarshipDataList.filter(
    (Scholarships: any) => Scholarships.attributes.is_featured
  );

  const {
    loading: allScholarshipsTypeLoading,
    error: allScholarshipsTypeError,
    data: allScholarshipsTypeData,
  } = useQuery<any>(ScholarshipTypeData);

  const AllScholarshipsTypeData =
    allScholarshipsTypeData?.scholarshipTypes?.data;

  const [AllScholarshipTypeDataList, setAllScholarshipTypeDataList] = useState<
    any[]
  >([]);

  useEffect(() => {
    setAllScholarshipTypeDataList(AllScholarshipsTypeData || []);
  }, [allScholarshipsTypeData]);

  return {
    AllScholarshipDataList,
    AllScholarshipsData,
    GetScholarshipById,
    GetscholarshipByFilter,
    isTopScholarshipsData,
    isFeaturedScholarshipsData,
    allScholarshipsLoading,
    AllScholarshipTypeDataList,
  };
};

export default useScholarships;
