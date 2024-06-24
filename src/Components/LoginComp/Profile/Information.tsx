import { DropDown } from "@/src/Asset";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useAppSelector } from "@/src/store";
import useCourses from "@/src/Hooks/useCourses";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import { InformationProps } from "@/types/global";

interface UserInformation {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  gender: string;
  city: string;
  interestedCourse: string;
}

const Information = ({ props }: { props: InformationProps }) => {
  const { userMetaId, setSelectedOption } = props;
  const [expanded, setExpanded] = useState(true);
  const { userName, authState, email, number } = useAppSelector(
    (store: any) => store.auth
  );
  const { AllCourseData } = useCourses();
  const genders = props.userData.gender;
  const citee = props.userData.city;
  const courseIntrested = props.userData.courseIntrested;

  const selectedCourse = AllCourseData?.find(
    (course: any) => course.attributes.course_name === courseIntrested
  );
  const courseId = selectedCourse?.id || "";

  const { userMetaUpdate } = useUserMetaData();
  const [userInformation, setUserInformation] = useState<UserInformation>({
    firstName: userName?.trim().split(" ")[0],
    lastName: userName?.trim().split(" ")[1],
    email: email,
    number: number,
    gender: "",
    city: "",
    interestedCourse: courseId || "",
  });

  useEffect(() => {
    if (genders && !userInformation.gender) {
      setUserInformation((prevValues) => ({
        ...prevValues,
        gender: genders,
      }));
    }
  }, [genders]);

  useEffect(() => {
    if (citee && !userInformation.city) {
      setUserInformation((prevValues) => ({
        ...prevValues,
        city: citee,
      }));
    }
  }, [citee]);

  useEffect(() => {
    if (courseIntrested && !userInformation.interestedCourse) {
      setUserInformation((prevValues) => ({
        ...prevValues,
        interestedCourse: courseId,
      }));
    }
  }, [courseIntrested, courseId]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleDataChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserInformation((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const updateUserProfile = async () => {
    try {
      const response = await userMetaUpdate({
        variables: {
          id: userMetaId,
          gender: userInformation.gender,
          city: userInformation.city,
          course: userInformation.interestedCourse,
        },
      });
      setSelectedOption("Education Details");
    } catch (error) {
      console.log("error in updating user ", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      setExpanded(!isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        onClick={handleToggle}
        className="bg-[#F5F9FC] text-white font-bold py-2 mt-5 px-4 rounded flex sm:hidden w-full cursor-pointer"
      >
        {expanded ? (
          <div className="flex flex-row items-center justify-between mx-2 w-full">
            <h4 className="text-lg font-normal text-black">Your Information</h4>
            <Image src={DropDown} alt="" className="" />
          </div>
        ) : (
          <div className="flex flex-row items-center justify-between mx-2 w-full ">
            <h4 className="text-lg font-normal text-black ">
              Your Information
            </h4>
            <Image src={DropDown} alt="" className="" />
          </div>
        )}
      </div>

      {expanded && (
        <div className="flex flex-col px-4">
          <div className="pt-4 flex sm:gap-6 gap-4 flex-col">
            <div>
              <div className="flex md:flex-row flex-col gap-4 items-center lg:justify-between justify-center">
                <div className="flex flex-col w-full gap-1">
                  <h1>
                    First Name <span className="text-red-500">*</span>
                  </h1>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <AiOutlineUser className="text-gray-400" />
                    </span>
                    <input
                      type="text"
                      className="pl-10 pr-3 py-2 border border-gray-300 rounded-sm w-full outline-none cursor-default"
                      placeholder="Enter First Name..."
                      name="firstName"
                      value={userInformation.firstName}
                      readOnly={true}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <h1>
                    Last Name <span className="text-red-500">*</span>
                  </h1>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <AiOutlineUser className="text-gray-400" />
                    </span>
                    <input
                      type="text"
                      className="pl-10 pr-3 py-2 border border-gray-300 rounded-sm w-full outline-none cursor-default"
                      placeholder="Enter Last Name..."
                      value={userInformation.lastName}
                      readOnly={true}
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full gap-1">
                  <h1>
                    Email Address <span className="text-red-500">*</span>
                  </h1>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <AiOutlineUser className="text-gray-400" />
                    </span>
                    <input
                      type="text"
                      className="pl-10 pr-3 py-2 border border-gray-300 rounded-sm w-full outline-none cursor-default"
                      placeholder="Enter Email Address..."
                      name="email"
                      value={userInformation.email}
                      readOnly={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex md:flex-row flex-col gap-4 items-center justify-start">
                <div className="flex flex-col w-full gap-1">
                  <h1>
                    Contact Number <span className="text-red-500">*</span>
                  </h1>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <AiOutlineUser className="text-gray-400" />
                    </span>
                    <input
                      type="text"
                      className="pl-10 pr-3 py-2 border border-gray-300 rounded-sm w-full outline-none"
                      placeholder="Enter Contact Number..."
                      value={userInformation.number}
                      name="number"
                      readOnly={true}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <h1>
                    Gender<span className="text-red-500">*</span>
                  </h1>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <AiOutlineUser className="text-gray-400" />
                    </span>
                    <select
                      className="pl-8 pr-3 py-2 border border-gray-300 rounded-sm w-full outline-none cursor-pointer"
                      value={userInformation.gender}
                      name="gender"
                      onChange={handleDataChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-4 items-center justify-start">
              <div className="flex flex-col gap-y-1 w-full">
                <h1>
                  City you Live in <span className="text-red-500">*</span>
                </h1>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <AiOutlineUser className="text-gray-400 text-xl" />
                  </span>
                  <input
                    type="text"
                    className="pl-10 pr-3 py-2 border border-gray-300 rounded-sm w-full outline-none"
                    placeholder="Enter City..."
                    value={userInformation.city}
                    name="city"
                    onChange={handleDataChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-1 w-full">
                <h1>
                  Course Interested <span className="text-red-500">*</span>
                </h1>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <AiOutlineUser className="text-gray-400" />
                  </span>
                  <select
                    className="pl-7 pr-3 py-2 border border-gray-300 rounded-sm w-full cursor-pointer outline-none"
                    value={userInformation.interestedCourse}
                    name="interestedCourse"
                    onChange={handleDataChange}
                  >
                    <option>Please Select Preferred Course</option>
                    {AllCourseData &&
                      AllCourseData.map((course: any) => {
                        // setCourseValue(course?.attributes?.course_name);
                        return (
                          <option key={course.id} value={course.id}>
                            {course.attributes.course_name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-6">
            <button
              className="inline-flex w-fit px-4 py-2 bg-primary text-white rounded text-sm items-center justify-center"
              onClick={updateUserProfile}
            >
              Save And Proceed
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Information;
