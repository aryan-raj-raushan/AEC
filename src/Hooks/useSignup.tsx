import { useMutation, useQuery } from "@apollo/client"
import { USER_SIGNUP, checkUser, signInOtp, userPublish, getUserMetaId, checkUserOtp } from "../graphql/signup/signup"
import { ID } from "@/types/global";


const userCheck = (number: string, email: string) => {
	const { loading, error, data } = useQuery<any>(checkUser, {
		variables: {
			number,
			email
		},
		skip: number.length !== 10
	});

	return {
		error,
		loading,
		userData: data?.usersData
	};
}

const getUserDataMetaId = (userID: any) => {
	const { loading, error, data } = useQuery<any>(getUserMetaId, {
		variables: { userID },
	});

	const userMetaDataId: ID = Number(data?.userData?.data?.attributes?.users_meta_data?.data?.id);

	return userMetaDataId;
}


const checkOTP = (userID: ID, number: string, userOtp: string) => {

	const { loading, error, data, refetch } = useQuery<any>(checkUserOtp, {
		variables: {
			userID,
			userOtp,
			number,
		},
		skip: userOtp.length !== 6
	});

	if (data?.usersData?.data?.length == 1 && data?.usersData?.data[0]?.id == userID) {
		return data.usersData.data[0]
	}
	else if (data?.usersData?.data?.length == 0) {
		return false;
	}
}


const useUserSignup = () => {
	const [signUpUser, { loading: signupLoading, error: signupError, data: signupData }] = useMutation(USER_SIGNUP);
	const [publishUser, { loading: publishUserLoading, error: publishUserError, data: publishUserData }] = useMutation<any>(userPublish)
	const [signInUser, { loading: signInUserLoading, error: signInUserError, data: signInUserData }] = useMutation<any>(signInOtp)

	return { userCheck, signUpUser, publishUser, signInUser, getUserDataMetaId, checkOTP };
}

export default useUserSignup;