import { useState } from "react";
import Information from "../../src/Components/LoginComp/Profile/Information";
import EducationDetails from "../../src/Components/LoginComp/Profile/EducationDetails";
import DesiredColleges from "../../src/Components/LoginComp/Profile/DesiredColleges";
import Professional from "../../src/Components/LoginComp/Profile/Professional";
import { useAppSelector } from "@/src/store";
import useUserSignup from "@/src/Hooks/useSignup";
import { ID, InformationProps, EducationDetailsProps } from "@/types/global";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
//import { EducationDetailsProps } from "./profileProps";

export default function YourInformation() {
	const options = [
		"Your Information",
		"Education Details",
		"Desired Colleges",
		"Professional Experience",
	];
	const [selectedOption, setSelectedOption] = useState("Your Information");
	const { userID } = useAppSelector((store: any) => store.auth);
	const { getUserDataMetaId } = useUserSignup()
	const { getUserMetaData } = useUserMetaData();
	const userMetaId: ID = getUserDataMetaId(userID);

	const userData = getUserMetaData(userMetaId);

  const informationData: InformationProps = {
    userMetaId: userMetaId,
    setSelectedOption: setSelectedOption,
    userData: {
      name: userData.userAllMetaData?.name,
      email: userData.userAllMetaData?.email,
      number: userData.userAllMetaData?.number,
      gender: userData.userAllMetaData?.gender,
      city: userData.userAllMetaData?.city,
      courseIntrested:
        userData.userAllMetaData?.courseInterested?.data?.attributes
          ?.course_name,
    },
  };

  const educationDetailsData: EducationDetailsProps = {
    userMetaId: userMetaId,
    setSelectedOption: setSelectedOption,
    primaryEducation: userData?.userAllMetaData?.educationDetailsPrimary,
    secondaryEducation: userData?.userAllMetaData?.educationDetailsSecondary,
    graduation: userData?.userAllMetaData?.graduationDetails,
  };

  const desiredCollegesData = {
    userMetaId: userMetaId,
    setSelectedOption: setSelectedOption,
    appliedColleges: userData?.userAllMetaData?.applied_colleges,
  };

	const professionalDetailsData = {
		userMetaId: userMetaId,
		setSelectedOption: setSelectedOption,
		professionalExperience: userData?.userAllMetaData?.professionalExperience
	}

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div className="shadow-lg border rounded-lg mt-5 md:mt-0 flex flex-col w-full px-4 md:px-0">
      <div className="sm:flex hidden md:gap-4 items-center justify-between">
        {options.map((option, index) => (
          <div key={index} className="flex-1">
            <div
              className={`hover:text-blue-500 lg:flex text-xs md:text-base text-center justify-center py-2 lg:px-4 font-work-sans capitalize cursor-pointer lg:p-2 w-full ${
                selectedOption === option
                  ? "text-blue-500 border-b border-b-blue-500 bg-blue-50 font-medium"
                  : "text-gray-500 font-normal"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          </div>
        ))}
      </div>
      {/* <hr className="w-full" /> */}

      {/* Render components based on selected option */}
      <div className="flex flex-col">
        {/* For mobile devices, render all components sequentially */}
        <div className=" sm:hidden ">
          <Information props={informationData} />
          <EducationDetails props={educationDetailsData} />
          <DesiredColleges props={desiredCollegesData} />
          <Professional props={professionalDetailsData} />
        </div>

        {/* For larger screens, render based on selected option */}
        <div className="hidden sm:flex flex-col">
          {selectedOption === "Your Information" && (
            <Information props={informationData} />
          )}
          {selectedOption === "Education Details" && (
            <EducationDetails props={educationDetailsData} />
          )}
          {selectedOption === "Desired Colleges" && (
            <DesiredColleges props={desiredCollegesData} />
          )}
          {selectedOption === "Professional Experience" && (
            <Professional props={professionalDetailsData} />
          )}
        </div>
      </div>
    </div>
  );
}
