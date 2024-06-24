import { gql } from "@apollo/client";

export const USER_SIGNUP = gql`
mutation CreateUserData($name: String, $email: String, $number:String, $stream: ID, $courseLevel: ID, $password: String) {
	createUserData(
		data: {
			name: $name
			email: $email
			number: $number
			stream: $stream
			courseLevel: $courseLevel
			password: $password
		}
	) {
		data {
			id
			attributes {
				name
				email
				number
				stream {
					data {
						id
						attributes {
							stream_name
						}
					}
				}
				courseLevel {
					data {
						id
						attributes {
							course_level_name
						}
					}
				}
				password
			}
		}
	}
}`

export const userPublish = gql`
mutation UpdateUserData($id: ID!, $publishedAt: DateTime!) {
	updateUserData(
		id: $id, 
		data: { 
			publishedAt: $publishedAt 
		}) {
		data {
			id
			attributes {
				name
				email
				number
			}
		}
	}
}
`

export const checkUser = gql`
query UsersData($number: String, $email: String) {
		usersData( filters: { or: [{ number: { eq: $number } }, { email: { eq: $email } }] }
		)  {
		data {
			id
			attributes {
				name
				email
				number
			}
		}
	}
}
`

export const signInOtp = gql`
mutation UpdateUserData($id: ID!, $otp: String!) {
	updateUserData(
		id: $id, 
		data: { 
			otp: $otp 
		}) {
		data {
			id
			attributes {
				name
				email
			}
		}
	}
}
`

export const getUserMetaId = gql`
query UserData($userID: ID!) {
	userData(id: $userID) {
		data {
			attributes {
				users_meta_data {
					data {
						id
					}
				}
			}
		}
	}
}
`

export const checkUserOtp = gql`
  query CheckUserOTP($userID: ID!, $number: String!, $userOtp: String!) {
    usersData(
      filters: {
        and: [
          { id: { eq: $userID }, otp: { eq: $userOtp }, number: { eq: $number } }
        ]
      }
    ) {
      data {
        id
        attributes {
          email
          number
          name
        }
      }
    }
  }
`;