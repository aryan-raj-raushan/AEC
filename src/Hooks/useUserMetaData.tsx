import { useMutation, useQuery } from "@apollo/client";
import {
  SaveCareer,
  SaveCollege,
  SaveCourse,
  SaveExam,
  SaveScholarships,
  createUserMetaData,
  getAllUserMetaDataID,
  getSaveCareerById,
  getSaveCollegeById,
  getSaveCourseById,
  getSaveExamById,
  getSaveScholarshipsById,
  updateUserMetaData,
} from "../graphql/userMetaData/userMetaData";
import { ID } from "@/types/global";

const getUserMetaData = (id: ID) => {
  const { loading, error, data } = useQuery(getAllUserMetaDataID, {
    variables: {
      id,
    },
  });

  return { userAllMetaData: data?.usersMetaData?.data?.attributes };
};

const checkSaveCollege = (id: any, collegeId: any) => {
  const { loading, error, data } = useQuery(getSaveCollegeById, {
    variables: {
      id,
      collegeId,
    },
  });

  return { saveCollegeData: data?.usersMetaDataes?.data };
};

const checkSaveExam = (id: any, examId: any) => {
  const { loading, error, data } = useQuery(getSaveExamById, {
    variables: {
      id,
      examId,
    },
  });

  return { saveExamData: data?.usersMetaDataes?.data };
};

const checkSaveCourse = (id: any, courseId: any) => {
  const { loading, error, data } = useQuery(getSaveCourseById, {
    variables: {
      id,
      courseId,
    },
  });

  return { saveCourseData: data?.usersMetaDataes?.data };
};

const checkSaveCareer = (id: any, careerId: any) => {
  const { loading, error, data } = useQuery(getSaveCareerById, {
    variables: {
      id,
      careerId,
    },
  });

  return { saveCareerData: data?.usersMetaDataes?.data };
};

const checkSaveScholarships = (id: any, scholarshipsId: any) => {
  const { loading, error, data } = useQuery(getSaveScholarshipsById, {
    variables: {
      id,
      scholarshipsId,
    },
  });

  return { saveScholarshipsData: data?.usersMetaDataes?.data };
};

const useUserMetaData = () => {
  const [
    userMetaCreate,
    {
      loading: userMetaCreateLoading,
      error: userMetaCreateError,
      data: userMetaCreateData,
    },
  ] = useMutation<any>(createUserMetaData);

  const [
    userMetaUpdate,
    {
      loading: userMetaUpdateLoading,
      error: userMetaUpdateError,
      data: userMetaUpdateData,
    },
  ] = useMutation<any>(updateUserMetaData);

  const [
    saveCollege,
    {
      loading: saveCollegeLoading,
      error: saveCollegeError,
      data: saveCollegeData,
    },
  ] = useMutation<any>(SaveCollege);

  // === save exam
  const [
    saveExam,
    { loading: saveExamLoading, error: saveExamError, data: saveExamData },
  ] = useMutation<any>(SaveExam);

  const [
    saveCourse,
    { loading: saveCourseLoading, error: saveCourserror, data: saveCourseData },
  ] = useMutation<any>(SaveCourse);

  const [
    saveCareer,
    {
      loading: saveCareerLoading,
      error: saveCareererror,
      data: saveCareerData,
    },
  ] = useMutation<any>(SaveCareer);

  const [
    saveScholarships,
    {
      loading: saveScholarshipsLoading,
      error: saveScholarshipserror,
      data: saveScholarshipsData,
    },
  ] = useMutation<any>(SaveScholarships);

  return {
    userMetaCreate,
    userMetaUpdate,
    getUserMetaData,
  
    checkSaveCollege,
    checkSaveExam,
    checkSaveCourse,
    checkSaveCareer,
    checkSaveScholarships,

    saveCollege,
    saveExam,
    saveCareer,
    saveCourse,
    saveScholarships

  };
};

export default useUserMetaData;
