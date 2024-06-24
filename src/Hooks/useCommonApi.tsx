import { useQuery } from "@apollo/client";
import {
	GET_STATE,
	GET_STREAM,
	GET_CITY,
	GET_EXAM_LEVEL,
	GET_COURSE_LEVEL,
	GET_STREAM_CONTENT,
	GET_COLLEGE_TYPE,
	GET_RANKING_BODY,
	GET_APPROVED_BY,
	GET_COUNTRY,
	GET_BOARDS,
	GET_VIRTUAL_TOUR,
	GET_SELECT_TEST,
	GET_AFFINITY_MEDIA
} from "../graphql/query/query";

const useCommonApi = () => {

	const {
		loading: RankingLoading,
		error: RankingError,
		data: RankingData,
	} = useQuery(GET_RANKING_BODY);
	const AllRankingData = RankingData?.rankingBodies?.data;

	const {
		loading: ApprovedByLoading,
		error: ApprovedByError,
		data: ApprovedByData,
	} = useQuery(GET_APPROVED_BY);
	const AllApprovedByData = ApprovedByData?.organisations?.data;

	const {
		loading: StreamLoading,
		error: StreamError,
		data: StreamData,
	} = useQuery(GET_STREAM);
	const AllStreamData = StreamData?.streams?.data;

	const GetStreamContent = (streamName: string) => {
		if (streamName === "") {
			streamName = "default"
		}
		const { loading,
			error,
			data
		} = useQuery(GET_STREAM_CONTENT, {
			variables: {
				streamName
			}
		})

		return {
			error,
			loading,
			StreamContent: data?.streams?.data
		}
	};
	
	const {
		loading: StateLoading,
		error: StateError,
		data: StateData,
	} = useQuery(GET_STATE);
	const AllStateData = StateData?.states?.data;

	const {
		loading: CityLoading,
		error: CityError,
		data: CityData,
	} = useQuery(GET_CITY);
	const AllCityData = CityData?.cities?.data;

	const {
		loading: ExamLevelLoading,
		error: ExamLevelError,
		data: ExamLevelData,
	} = useQuery(GET_EXAM_LEVEL);

	const AllExamLevelData = ExamLevelData?.examLevels?.data;

	const {
		loading: CourseLevelLoading,
		error: CourseLevelError,
		data: CourseLevelData,
	} = useQuery(GET_COURSE_LEVEL);

	const AllCourseLevelData = CourseLevelData?.courseLevels?.data;

	const {
		loading: CollegeTypeLoading,
		error:  CollegeTypeError,
		data:  CollegeTypeData,
	} = useQuery(GET_COLLEGE_TYPE);

	const AllCollegeTypeData = CollegeTypeData?.collegesTypes?.data;


	const {
		loading: CountryLoading,
		error: CountryError,
		data: CountryData,
	} = useQuery(GET_COUNTRY);

	const AllCountryData = CountryData?.countries?.data;

	const {
		loading: BoardLoading,
		error: BoardError,
		data: BoardData,
	} = useQuery(GET_BOARDS);

	const AllBoardData = BoardData?.boards?.data;


	// ==========

	const {
		loading: VirtualTourLoading,
		error: VirtualTourError,
		data:VirtualTourData,
	} = useQuery(GET_VIRTUAL_TOUR);

	const AllVirtualTourData = VirtualTourData?.virtualTours?.data[0]?.attributes;

	
	const {
		loading:SelectTestLoading,
		error: SelectTestError,
		data:SelectTestData,
	} = useQuery(GET_SELECT_TEST);

	const AllSelectTestData = SelectTestData?.selectTests?.data;


	const {
		loading:AffinityMediaLoading,
		error: AffinityMediaError,
		data:AffinityMediaData,
	} = useQuery(GET_AFFINITY_MEDIA);

	const AllAffinityMediaData = AffinityMediaData?.affinityMedias?.data[0]?.attributes;


	const AffinityMediaArtical = AllAffinityMediaData?.articles;

	const AffinityMediaNewspaper = AllAffinityMediaData?.newspaper;

	const AffinityMediaAwards= AllAffinityMediaData?.awards;
	
	return {
		AllStreamData,
		AllStateData,
		AllCityData,
		AllExamLevelData,
		AllCourseLevelData,
		GetStreamContent,
		AllCollegeTypeData,
		AllRankingData,
		AllApprovedByData,
		AllCountryData,
		AllBoardData,
		AllVirtualTourData,
		AllSelectTestData,
		AllAffinityMediaData,
		AffinityMediaArtical,
		AffinityMediaNewspaper,
		AffinityMediaAwards
	};
};

export default useCommonApi;
