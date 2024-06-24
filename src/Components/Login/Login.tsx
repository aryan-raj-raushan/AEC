import { useEffect, useState } from "react";
import {
  MainLogo,
  LoginOtp,
  Loginvector,
  LoginSaly,
  PhoneBanner,
} from "@/src/Asset/index";
// import CancelIcon from '@mui/icons-material/Cancel';
import Image from "next/image";
import useCommonApi from "@/src/Hooks/useCommonApi";
import useUserSignup from "@/src/Hooks/useSignup";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import { setAuthState } from "@/src/store/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/store";
import { OTPInput } from "../consultingModule/otp";
import { ID } from "@/types/global";
import { BASE_URL } from "@/src/Utils/Network/Network";
const axios = require("axios");
interface LoginProps {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: Function;
}

const Login: React.FC<LoginProps> = ({
  setIsLoginModalOpen,
  isLoginModalOpen,
}) => {
  let [isSignup, setisSignup] = useState({ show: false });
  const [isOtp, setIsOtp] = useState(false);
  const { AllStreamData, AllCourseLevelData } = useCommonApi();
  const [otpError, setOtpError] = useState("");
  const [StreamValue, setStreamValue] = useState("");
  const [LevelValue, setLevelValue] = useState("");
  const [NameValue, setNameValue] = useState("");
  const [EmailValue, setEmailValue] = useState("");
  const [PhoneValue, setPhoneValue] = useState("");
  const [PasswordValue, setPasswordValue] = useState("");
  const { userCheck, checkOTP, publishUser, signInUser } = useUserSignup();
  const { userMetaCreate } = useUserMetaData();
  const [userOtp, setUserOtp] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [userId, setUserId] = useState<ID>();
  const [errorMsg, setErrorMsg] = useState("");
  const otpLength = 6;
  const dispatch = useAppDispatch();
  let isLogin = useAppSelector((state) => state.auth.authState);
  const [validationMessage, setValidationMessage] = useState("");

  //get user data when getting otp
  const { loading, error, userData } = userCheck(PhoneValue, EmailValue);
  const otpchecker = checkOTP(userId!, PhoneValue, userOtp);

  const handleSignup = () => {
    setIsOtp(false);
    setisSignup({ show: true });
    // setUserOtp("")
  };

  const handleLogin = () => {
    setisSignup({ show: false });
    // setUserOtp("")
  };

  const handleOpen = () => {
    setIsLoginModalOpen(false);
  };

  const sendSignupOtp = async (e: any) => {
    e.preventDefault();
    const currentDate = new Date();
    const publishedAt = currentDate.toISOString();

    if (userData?.data?.length == 0) {
      try {
        setErrorMsg("");
        let data = JSON.stringify({
          data: {
            name: NameValue,
            email: EmailValue,
            number: PhoneValue,
            password: PasswordValue,
            stream: StreamValue,
            courseLevel: LevelValue,
            publishedAt: publishedAt,
          },
        });

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: `${BASE_URL}/api/users-data`,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios
          .request(config)
          .then((response: any) => {
            setUserId(response?.data?.data?.id);
            setIsOtp(true);
          })
          .catch((error: any) => {
            console.log(error);
          });
      } catch (error) {
        console.error("Error adding user:", error);
      }
    } else {
      console.log("user already exists");
    }
  };

  const handelSubmitSignup = async (e: any) => {
    e.preventDefault();
    const currentDate = new Date();
    const publishedAt = currentDate.toISOString();

    if (otpchecker != false) {
      try {
        dispatch(
          setAuthState({
            authState: true,
            userID: otpchecker?.id,
            userName: otpchecker?.attributes?.name,
            email: otpchecker?.attributes?.email,
            number: otpchecker?.attributes?.number,
          })
        );

        const userCreateMeta = await userMetaCreate({
          variables: {
            name: NameValue,
            email: EmailValue,
            number: PhoneValue,
            userDataId: userId,
            publishedAt,
          },
        });

        setIsLoginModalOpen(false);

        console.log("user signed up");
      } catch (error) {
        console.error("Error publishing user:", error);
      }
    } else {
      console.log("wrong otp");
    }
  };

  useEffect(() => {
    if (validationMessage) {
      const timer = setTimeout(() => {
        setValidationMessage("");
      }, 4000); // Hide validation message after 4 seconds

      return () => clearTimeout(timer); // Clear timeout if component unmounts
    }
  }, [validationMessage]);

  const sendLoginOtp = async (e: any) => {
    e.preventDefault();

    // Check if the phone number is 10 digits
    if (PhoneValue.length !== 10) {
      setValidationMessage("Please enter a valid 10-digit mobile number");
      return;
    }

    // Clear any existing validation messages
    setValidationMessage("");

    if (userData?.data?.length === 1) {
      setUserId(userData?.data[0]?.id);
      setIsOtp(true);
      let data = JSON.stringify({
        data: {},
      });

      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `${BASE_URL}/api/users-data/${userData?.data[0]?.id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      try {
        const response = await axios.request(config);
        console.log("otp sent");
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMsg("User does not exist");
    }
  };

  const handleSignin = async (e: any) => {
    e.preventDefault();

    if (userOtp.length !== 6) {
      setOtpError("Please enter a valid 6-digit OTP.");
      return;
    }

    if (otpchecker != false) {
      setIsLoginModalOpen(false);
      dispatch(
        setAuthState({
          authState: true,
          userName: userData?.data[0]?.attributes?.name,
          email: userData?.data[0]?.attributes?.email,
          number: userData?.data[0]?.attributes?.number,
          userID: userData?.data?.[0]?.id,
        })
      );
      console.log(
        "user logged in successfully",
        userData?.data[0]?.attributes?.name
      );
    } else {
      setOtpError("Wrong OTP. Please try again.");
      console.log("wrong otp");
    }
  };

  return (
    <>
      {isLoginModalOpen && !isLogin ? (
        <>
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 !z-[999]">
            <div className="flex mx-10 min-w-[300px] md:min-w-[500px] lg:w-3/5 lg:min-w-[800px] h-auto">
              {/* Left Panel */}
              <div className="relative w-1/2 bg-white hidden md:block">
                <div className="logo p-4">
                  <Image src={MainLogo} alt="" />
                </div>
                <div className="flex flex-col items-center h-3/5">
                  <div className="flex">
                    <Image src={LoginSaly} width={300} height={300} alt="" />
                  </div>
                  {/* Left panel content */}
                  <span className="text-base text-center font-semibold text-[#001761] px-4">
                    <span>
                      Skyrocket your career to new heights, unlocking endless{" "}
                    </span>
                    <span className="font-extrabold">opportunities</span>{" "}
                    <span> and </span>{" "}
                    <span className="font-extrabold"> dreams!</span>{" "}
                  </span>
                  {isSignup.show ? (
                    <>
                      <button
                        type="submit"
                        onClick={handleLogin}
                        className="p-12 cursor-pointer relative bottom-[-2.75rem] rounded-full border-sky-900 text-white bg-[#407FBD] text-blue py-2 transition duration-300 z-50"
                      >
                        Login
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        onClick={handleSignup}
                        className="p-6 cursor-pointer relative bottom-[-2.75rem] rounded-full border-sky-900 text-white bg-[#407FBD] text-blue py-2 transition duration-300 text-nowrap z-50"
                      >
                        Sign Up for Free
                      </button>
                    </>
                  )}
                  <div className="absolute text-center bottom-0 ">
                    <Image src={Loginvector} alt="" />
                  </div>
                </div>
              </div>
              {isSignup.show ? (
                <div className="w-full md:w-1/2 md:bg-gradient-to-tl from-[#428BC1] via-[#4280BE] to-[#00529E] h-[625px] relative">
                  <button
                    onClick={handleOpen}
                    className="cursor-pointer absolute -right-4 -top-4 h-8 w-8 text-white bg-black bg-opacity-70 border rounded-full flex items-center justify-center"
                  >
                    X
                  </button>
                  <div className="flex bg-white flex-col justify-center shadow-md rounded-lg md:my-12 md:mx-10 px-10 pt-10">
                    <h2 className="text-3xl  font-semibold font-sans mb-4 text-center">
                      Welcome
                    </h2>
                    <div className="flex font-semibold flex-col items-center">
                      <h2>Create your Account</h2>
                    </div>

                    {/* Right panel content */}
                    <div className="space-y-4">
                      <div className=" font-medium space-y-4 mt-8">
                        {isOtp ? (
                          <div className="flex text-xs mb-2">
                            <OTPInput
                              userOtp={userOtp}
                              setUserOtp={setUserOtp}
                              otpLength={otpLength}
                            />
                          </div>
                        ) : (
                          <>
                            <div className="flex text-xs font-semibold">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full rounded-sm border border-[#050138] py-2 px-2"
                                placeholder="Name"
                                onChange={(e) => setNameValue(e.target.value)}
                                required
                              />
                            </div>

                            <div className="flex">
                              <div className="flex w-1/6 text-xs">
                                <input
                                  id="countrycode"
                                  name="countrycode"
                                  className="w-full rounded-sm border border-[#050138] py-2 px-2"
                                  placeholder="+91"
                                  readOnly
                                />
                              </div>
                              <div className="flex w-5/6 text-xs">
                                <input
                                  type="phone"
                                  id="phone"
                                  name="phone"
                                  value={PhoneValue}
                                  onChange={(e) =>
                                    setPhoneValue(e.target.value)
                                  }
                                  className="w-full rounded-sm border border-[#050138] ml-1 py-2 px-2"
                                  placeholder="Enter 10 digit mobile number"
                                  maxLength={10}
                                  required
                                />
                              </div>
                            </div>
                            <div className="flex text-xs">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={(e) => setEmailValue(e.target.value)}
                                className="w-full rounded-sm border border-[#050138] py-2 px-2"
                                placeholder="Email"
                                required
                              />
                            </div>
                            <div className="flex text-xs">
                              <select
                                onChange={(e) => setStreamValue(e.target.value)}
                                className="w-full rounded-sm border border-[#050138] py-2 px-2"
                              >
                                <option value="">
                                  Please Select Preferred Stream
                                </option>
                                {AllStreamData &&
                                  AllStreamData.map((stream: any) => (
                                    <option key={stream?.id} value={stream?.id}>
                                      {stream?.attributes?.stream_name}
                                    </option>
                                  ))}
                              </select>
                            </div>
                            <div className="flex text-xs">
                              <select
                                onChange={(e) => setLevelValue(e.target.value)}
                                className="w-full rounded-sm border border-[#050138] py-2 px-2"
                              >
                                <option value="">
                                  Please Select Preferred Level
                                </option>
                                {AllCourseLevelData &&
                                  AllCourseLevelData.map((level: any) => (
                                    <option key={level.id} value={level.id}>
                                      {level?.attributes?.course_level_name}
                                    </option>
                                  ))}
                              </select>
                            </div>
                            {/* <div className="flex text-xs">
                              <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full rounded-sm border border-[#050138] py-2 px-2"
                                placeholder="Password"
                                minLength={10}
                                onChange={(e) =>
                                  setPasswordValue(e.target.value)
                                }
                                required
                              />
                            </div> */}
                          </>
                        )}
                      </div>
                      {!isOtp && !otpchecker?.attributes && (
                        <button
                          type="button"
                          className="w-full bg-[#407FBD] text-white py-2 rounded-md transition duration-300"
                          onClick={sendSignupOtp}
                        >
                          Send OTP
                        </button>
                      )}

                      {isOtp && (
                        <button
                          type="submit"
                          className={`w-full text-white py-2 rounded-md transition duration-300 ${
                            !otpchecker?.attributes
                              ? "cursor-not-allowed bg-gray-200"
                              : "cursor-pointer bg-[#407FBD]"
                          }`}
                          onClick={handelSubmitSignup}
                          disabled={!otpchecker?.attributes}
                        >
                          Signup for free!
                        </button>
                      )}
                    </div>
                    <div className="flex flex-row py-6 justify-center">
                      <div className="text-xs text-[#001761]">
                        Already have an account ?
                      </div>
                      <button
                        className="capitalize ml-1 cursor-pointer text-xs text-[#3B7BBB] font-semibold"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full md:w-1/2 bg-gradient-to-tl from-[#428BC1] via-[#4280BE] to-[#00529E] md:h-[625px] relative">
                  <button
                    onClick={handleOpen}
                    className="cursor-pointer absolute -right-4 -top-4 h-8 w-8 text-white bg-black bg-opacity-70 border rounded-full flex items-center justify-center"
                  >
                    X
                  </button>
                  <div className="flex bg-white flex-col justify-center shadow-md rounded-lg md:my-12 md:mx-10 px-10 pt-10">
                    <h2 className="text-3xl text-[#001761] font-semibold font-sans mb-4 text-center">
                      Login
                    </h2>
                    <div className="flex flex-col items-center">
                      <Image src={LoginOtp} alt="" />
                      <h3 className="text-nowrap">OTP Verification</h3>
                      <p className="text-xs my-3 text-[#888] font-sans font-semibold text-center">
                        We will send you an one time password on your mobile
                        number
                      </p>
                    </div>

                    {/* Right panel content */}
                    <div className="space-y-2">
                      {isOtp ? (
                        <div className="flex text-xs mb-2">
                          <OTPInput
                            userOtp={userOtp}
                            setUserOtp={setUserOtp}
                            otpLength={otpLength}
                          />
                        </div>
                      ) : (
                        <div className="flex gap-3 font-medium">
                          <div className="flex w-1/6 text-xs">
                            <input
                              id="countrycode"
                              name="countrycode"
                              className="w-full rounded-sm border border-[#050138] py-2 px-2 my-4"
                              placeholder="+91"
                              readOnly
                            />
                          </div>
                          <div className="flex w-5/6 text-xs">
                            <input
                              type="phone"
                              id="phone"
                              name="phone"
                              className="w-full rounded-sm border border-[#050138] py-2 px-2 my-4"
                              placeholder="Enter 10 digit mobile number"
                              onChange={(e) => setPhoneValue(e.target.value)}
                              maxLength={10}
                            />
                          </div>
                        </div>
                      )}
                      {validationMessage && (
                        <p className="text-red-500 text-xs">
                          {validationMessage}
                        </p>
                      )}
                      {!isOtp && (
                        <button
                          type="button"
                          className="w-full bg-[#407FBD] text-white py-1 rounded-md transition duration-300 text-nowrap"
                          onClick={sendLoginOtp}
                        >
                          Generate OTP
                        </button>
                      )}

                      {isOtp && (
                        <button
                          type="submit"
                          className={`w-full text-white py-1 rounded-md transition duration-300 text-nowrap bg-[#407FBD]`}
                          onClick={handleSignin}
                          // disabled={!otpchecker?.attributes}
                        >
                          Sign In
                        </button>
                      )}
                    </div>
                    {otpError && (
                      <p className="text-red-500 text-xs mt-2">{otpError}</p>
                    )}
                    <div className="flex flex-row py-6 justify-center">
                      <div className="text-xs text-[#001761] text-nowrap">
                        Don't have an account ?
                      </div>
                      <button
                        className="uppercase ml-1 cursor-pointer text-xs text-[#3B7BBB] font-semibold text-nowrap"
                        onClick={handleSignup}
                      >
                        SIGN UP
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default Login;
