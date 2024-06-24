import { useMutation, useQuery } from "@apollo/client";
import {
  getAllCollegeQuery,
  getAllCollegeQueryFilter,
  GET_COLLEGE_BY_ID_QUERY,
  WriteReviews,
  GetReviewByID,
  GetReviewForUserId,
} from "../graphql/colleges/getColleges";
import { useEffect, useState } from "react";
import { ID } from "@/types/global";

const GetSingleCollegeById = (collegeUrl: string) => {
  const { loading, error, data } = useQuery<any>(GET_COLLEGE_BY_ID_QUERY, {
    variables: { collegeUrl },
  });

  return {
    singleCollegeData: data?.colleges?.data,
    loading,
    error,
  };
};

const GetReviewById = (id: any) => {
  const { loading, error, data } = useQuery(GetReviewByID, {
    variables: { id: id },
  });

  return {
    reviewsData: data?.colleges?.data,
    loading,
    error,
  };
};

const GetReviewByUserId =  (id: any, email: any) => {
  const { loading, error, data } = useQuery(GetReviewForUserId, {
    variables: { id: id, email : email},
  });

  return {
    reviewsUserData: data?.colleges?.data,
    loading,
    error,
  };
};


const GetCollegeByFilter = (
  streamName?: string,
  stateName?: string,
  cityName?: string,
  pageSize?: number,
  courses?: string,
  college_type?: string,
  ranked_by?: string,
  searchTerm?: string,
  SelectedAffiliation?: string,
  sortOption?: string,
  countryName?: string,
) => {
  let variables: any = {};

  if (searchTerm) {
    variables.searchTerm = searchTerm;
  } else {
    if (stateName) {
      variables.stateName = stateName;

      if (cityName) {
        variables.cityName = cityName;
      }
    }

    if (cityName) {
      variables.cityName = cityName;
    }

    if (streamName) {
      variables.streamName = streamName;
    }

    if (ranked_by) {
      variables.ranked_by = ranked_by;
    }
    if (college_type) {
      variables.college_type = college_type;
    }
    if (courses) {
      variables.courses = courses;
    }
    if (SelectedAffiliation) {
      variables.approved_by = SelectedAffiliation;
    }
    if (sortOption) {
      variables.sortOption = sortOption;
    }
    if (countryName) {
      variables.countryName = countryName
    }
  }

  const { loading, error, data } = useQuery<any>(getAllCollegeQueryFilter, {
    variables: {
      streamName: variables.streamName,
      stateName: variables.stateName,
      cityName: variables.cityName,
      start: 1,
      pageSize,
      courses: variables.courses,
      college_type: variables.college_type,
      ranked_by: variables.ranked_by,
      searchTerm: variables.searchTerm,
      approved_by: variables.approved_by,
      sort: variables.sortOption,
      countryName: variables.countryName
    },
  });
 
  return {
    CollegeData: data?.colleges,
    loading,
    error,
  };
};

const useColleges = () => {
  const {
    loading: allCollegeLoading,
    error: allCollegeError,
    data: allCollegeData,
  } = useQuery<any>(getAllCollegeQuery);
  const AllCollegesData = allCollegeData?.colleges?.data;
  const [CollegeListData, setCollegeListData] = useState<any[]>([]);

  useEffect(() => {
    setCollegeListData(AllCollegesData || []);
  }, [AllCollegesData]);

  const TopCollegeData = CollegeListData.filter((college) => college.attributes.is_top)
  const isFeaturedCollegeData = CollegeListData.filter((college) => college.attributes.is_featured)


  const isToCollegeData = TopCollegeData?.slice()?.sort((a: any, b: any) => {
    return a?.attributes?.top_college_sequence - b?.attributes?.top_college_sequence;
  });


	const [writeReviews, { loading: writeReviewsLoading, error: writeReviewsError, data: writeReviewsData }] = useMutation<any>(WriteReviews)

  return {
    AllCollegesData,
    allCollegeLoading,
    allCollegeError,
    GetSingleCollegeById,
    GetCollegeByFilter,
    CollegeListData,
    isFeaturedCollegeData,
    isToCollegeData,
    writeReviews,
    GetReviewById,
    GetReviewByUserId
  };
};

export default useColleges;
