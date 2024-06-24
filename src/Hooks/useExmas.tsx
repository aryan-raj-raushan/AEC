import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import {
  GET_EXAM_QUERY,
  GET_FILTER_EXAM_QUERY,
  GET_FILTER_EXAM_BY_ID_QUERY,
  GET_EAXM_MDDE,
} from "../graphql/exms/getExam";

const GetExamByFilter = (
  streamName?: string,
  examLevel?: string,
  start?: number,
  pageSize?: number,
  searchTerm?: string,
  examMode?: string,
  sortOption?: string,
  SelectedState?: String
) => {
  let variables: any = {};

  if (streamName) {
    variables.streamName = streamName;

    if (examLevel) {
      variables.examLevel = examLevel;
    }
  }

  if (examMode) {
    variables.examMode = examMode;
  }

  if (searchTerm) {
    variables.searchTerm = searchTerm;
  }

  if (sortOption) {
    variables.sortOption = sortOption;
  }

  const { loading, error, data } = useQuery<any>(GET_FILTER_EXAM_QUERY, {
    variables: {
      ...variables,
      start: 1,
      pageSize,
      sort: variables.sortOption,
    },
  });

  return {
    ExamData: data?.exams,
    loading,
    error,
  };
};

const GetSingleExamById = (examUrl: string) => {
  const { loading, error, data } = useQuery<any>(GET_FILTER_EXAM_BY_ID_QUERY, {
    variables: { examUrl },
  });

  return {
    singleExamData: data?.exams?.data,
    loading,
    error,
  };
};

const useExmas = () => {
  const {
    loading: allExamLoading,
    error: allExamError,
    data: allExamData,
  } = useQuery<any>(GET_EXAM_QUERY);

  const [ExamListData, setExamListData] = useState<any[]>([]);

  const AllExamData = allExamData?.exams?.data;
  useEffect(() => {
    setExamListData(AllExamData || []);
  }, [allExamData]);

  const isTopExameData = ExamListData.filter(
    (exam: any) => exam.attributes.is_top
  );
  const isFeaturedExamData = ExamListData.filter(
    (exam: any) => exam.attributes.is_featured
  );

  // ============

  const {
    loading: examModeLoading,
    error: examModeError,
    data: examModeData,
  } = useQuery<any>(GET_EAXM_MDDE);

  const [ExamModeData, setExamModeData] = useState<any[]>([]);

  const AllExamModeData = examModeData?.examModes?.data;
  useEffect(() => {
    setExamModeData(AllExamModeData || []);
  }, [examModeData]);

  return {
    AllExamData,
    GetExamByFilter,
    GetSingleExamById,
    isFeaturedExamData,
    isTopExameData,
    ExamModeData,
    allExamLoading,
    ExamListData,
  };
};

export default useExmas;
