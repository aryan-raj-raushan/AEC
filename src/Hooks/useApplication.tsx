
import { useQuery } from "@apollo/client";
import { allApplicationSteps } from "../graphql/applications/application";

const useApplication = () => {
	const { loading: allApplicationStepsLoading, error: allApplicationStepsError, data: allApplicationStepsData } = useQuery(allApplicationSteps)

	return { allApplicationSteps: allApplicationStepsData?.applicationSteps?.data }
}

export default useApplication