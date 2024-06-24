import { useQuery } from "@apollo/client";
import {
  GET_ALL_LANDINGPAGHE,
  GET_FILTER_LANDINGPAGE_BY_ID_QUERY,
} from "../graphql/landingpage/getLandingPage";
import { useEffect, useState } from "react";

const GetSingleLandingPageById = (landingPageUrl: string) => {
  const { loading, error, data } = useQuery<any>(
    GET_FILTER_LANDINGPAGE_BY_ID_QUERY,
    {
      variables: { landingPageUrl },
    }
  );

  return {
    singleLandingPageData: data?.landingPages?.data,
    loading,
    error,
  };
};


const useLandingPage = () => {
  const {
    loading: allLandingPageLoading,
    error: allLandingPageError,
    data: allLandingPageData,
  } = useQuery<any>(GET_ALL_LANDINGPAGHE);

  const [LandingPageListData, setLandingPageListData] = useState<any[]>([]);

  const AllLandingPageData = allLandingPageData?.landingPages?.data;

  useEffect(() => {
    setLandingPageListData(AllLandingPageData || []);
  }, [allLandingPageData]);

  return {
    GetSingleLandingPageById,
    LandingPageListData,
  };
};

export default useLandingPage;
