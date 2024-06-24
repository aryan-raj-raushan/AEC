import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_USER_FORM, UPDATE_USER_FORM_METADATA } from "../graphql/userfrom/getUserFrom";

const userFrom = () => {
  const {
    loading: collegeApplicationLoading,
    error: collegeApplicationError,
    data: collegeApplicationData,
  } = useQuery<any>(GET_USER_FORM);

  const AllCollegeApplicationData = collegeApplicationData?.userForms?.data;

  const [CollegeApplicatonListData, setCollegeApplicatonListData] =
    useState<any>(null);
  const [CollegeApplicaton, setCollegeApplicaton] = useState<any[]>([]);

  useEffect(() => {
    setCollegeApplicaton(AllCollegeApplicationData || []);
  }, [collegeApplicationData]);

  const CollegeApplication = CollegeApplicaton?.filter(
    (application: any) =>
      application?.attributes?.form_url == "standard-application-form"
  );

  useEffect(() => {
    if (CollegeApplication.length > 0) {
      setCollegeApplicatonListData(CollegeApplication[0]?.attributes || []);
    }
  }, [CollegeApplication]); 

  // ===== cretate 

  // const [userFromMetaUpdate, { loading: userFromMetaUpdateLoading, error: userFromMetaUpdateError, data: userFromMetaUpdateData }] = useMutation<any>(UPDATE_USER_FORM_METADATA)

	const [userFromMetaUpdate, { loading: userFromMetaUpdateLoading, error: userFromMetaUpdateError, data: userFromMetaUpdateData }] = useMutation<any>(UPDATE_USER_FORM_METADATA)


  return {
    CollegeApplicatonListData,
    CollegeApplicaton,
    userFromMetaUpdate
  };
};

export default userFrom;
