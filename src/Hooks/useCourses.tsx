import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  GET_FILTER_COURSE_QUERY,
  GET_ALL_COURSE_QUERY,
  GET_FILTER_COURSE_BY_ID_QUERY,
} from "../graphql/courses/getCourses";

type filterType = {
  courseLevel?: string;
  streamName?: string;
};

const GetCourseByFilter = (
  streamName?: string,
  courseLevel?: string,
  searchTerm?: string,
  start?: number,
  pageSize?: number,
  sortOption?: [string],
  SelectedState?: string
) => {
  let variables: {
    streamName?: string;
    courseLevel?: string;
    searchTerm?: string;
    sortOption?: [string];
  } = {};

  if (streamName) {
    variables.streamName = streamName;
  }
  if (courseLevel) {
    variables.courseLevel = courseLevel;
  }
  if (searchTerm) {
    variables.searchTerm = searchTerm;
  }
  if (sortOption) {
    variables.sortOption = sortOption;
  }

  const { loading, error, data } = useQuery<any>(GET_FILTER_COURSE_QUERY, {
    variables: {
      ...variables,
      start,
      pageSize,
      sort: variables.sortOption,
    },
  });

  return {
    CourseData: data?.courses,
    loading,
    error,
  };
};

const GetSingleCourseById = (courseUrl: string) => {
  const { loading, error, data } = useQuery<any>(
    GET_FILTER_COURSE_BY_ID_QUERY,
    {
      variables: { courseUrl },
    }
  );

  return {
    singleCourseData: data?.courses?.data,
    loading,
    error,
  };
};

const useCourses = () => {
  const {
    loading: allCourseLoading,
    error: allCourseError,
    data: allCourseData,
  } = useQuery<any>(GET_ALL_COURSE_QUERY);

  const AllCourseData = allCourseData?.courses?.data;

  const [CourseListData, setCourseListData] = useState<any[]>([]);

  useEffect(() => {
    setCourseListData(AllCourseData || []);
  }, [allCourseData]);

  const isTopCourseeData = CourseListData.filter(
    (Course: any) => Course.attributes.is_top
  );
  const isFeaturedCourseData = CourseListData.filter(
    (Course: any) => Course.attributes.is_featured
  );

  return {
    GetCourseByFilter,
    AllCourseData,
    GetSingleCourseById,
    isTopCourseeData,
    isFeaturedCourseData,
    CourseListData,
    allCourseLoading,
  };
};

export default useCourses;
