import { useQuery } from "@apollo/client";
import { GET_RECOMENDED_COLLEGE ,GET_RECOMENDED_EXAM,GET_RECOMENDED_COURSE,GET_RECOMENDED_SCHOLARSHIPS, GET_RECOMENDED_CAREAR} from "../graphql/recomendedOption/recomendedOption";
import { useEffect, useState } from "react";

const useRecomended = () => {
    const {
        loading: allCollegeLoading,
        error: allCollegeError,
        data: allCollegeData,
    } = useQuery<any>(GET_RECOMENDED_COLLEGE);
    const [RecomendedCollegeData, setRecomendedCollegeData] = useState<any[]>()

    useEffect(() => {
        setRecomendedCollegeData(allCollegeData?.recommendedColleges?.data[0]?.attributes?.colleges?.data || []);
    }, [allCollegeData]);
    
    const {
        loading: allExamLoading,
        error: allExamError,
        data: allExamData,
    } = useQuery<any>(GET_RECOMENDED_EXAM);
    const [RecomendedExamData, setRecomendedExamData] = useState<any[]>()

    useEffect(() => {
        setRecomendedExamData(allExamData?.recommendedExams?.data[0].attributes?.exams?.data || []);
    }, [allExamData]);
    
    const {
        loading: allCourseLoading,
        error: allCourseError,
        data: allCourseData,
    } = useQuery<any>(GET_RECOMENDED_COURSE);
    const [RecomendedCourseData, setRecomendedCourseData] = useState<any[]>()

    useEffect(() => {
        setRecomendedCourseData(allCourseData?.recommendedCourses?.data[0]?.attributes?.courses?.data || []);
    }, [allCourseData]);
 
    const {
        loading: allScholarshipsLoading,
        error: allScholarshipsError,
        data: allScholarshipsData,
    } = useQuery<any>(GET_RECOMENDED_SCHOLARSHIPS);
    const [RecomendedScholarshipsData, setRecomendedScholarshipsData] = useState<any[]>()

    useEffect(() => {
        setRecomendedScholarshipsData(allScholarshipsData?.recommendedScholarships?.data[0]?.attributes?.scholarships?.data || []);
    }, [allScholarshipsData]);

    
    const {
        loading: allCarearLoading,
        error: allCarearError,
        data: allCarearData,
    } = useQuery<any>(GET_RECOMENDED_CAREAR);
    const [RecomendedCarearData, setRecomendedCarearData] = useState<any[]>()

    useEffect(() => {
        setRecomendedCarearData(allCarearData?.recommendedCareers?.data[0]?.attributes?.careers?.data || []);
    }, [allCarearData]);
   
    
    return {
        RecomendedCollegeData,
        RecomendedExamData,
        RecomendedCourseData,
        RecomendedScholarshipsData,
        RecomendedCarearData
    };
};

export default useRecomended;