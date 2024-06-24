import type { NextPage } from "next";
import StarRating from "../../starRating/starRating";
import ColoredTag from "../../tag/coloredTag";
import Button from "../../button/button";
import { ApprovedByIcon, FlagIcon, LocationIcon } from "@/src/Asset";
import Image from "next/image";
import userFrom from "@/src/Hooks/userFrom";
import { useAppSelector } from "@/src/store";
import useUserSignup from "@/src/Hooks/useSignup";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import useCourses from "@/src/Hooks/useCourses";
import { ID } from "@/types/global";
import { useState } from "react";
import Login from "../../Login/Login";
import Link from "next/link";

const ProgramsComponent = ({
  course,
  college,
  onApplyNow,
  AppliedCourses,
  courseId,
}: any) => {
  const { CollegeApplicatonListData } = userFrom();
  const { authState } = useAppSelector((store: any) => store.auth);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handelDawonloadBrochure = () => {
    if (authState) {
      window.open(
        course?.course_name?.data?.attributes?.dawonload_brochure?.data[0]
          ?.attributes?.url,
        "_blank"
      );
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const { GetSingleCourseById } = useCourses();
  const { singleCourseData, loading, error } = GetSingleCourseById(courseId);
  const selectedId = singleCourseData && singleCourseData[0]?.id;

  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const { getUserMetaData } = useUserMetaData();
  const userMetaId: ID = getUserDataMetaId(userID);
  const { userAllMetaData } = getUserMetaData(userMetaId);
  const AppliedCollege = userAllMetaData?.applied_colleges;

  const isCollegeApplied = AppliedCollege?.some(
    (applied: { college: { data: { id: any } } }) =>
      applied.college.data.id === selectedId
  );

  const FromStep: any = CollegeApplicatonListData?.form_stape;
  return (
    <>
      <div className="md:flex flex-col gap-4 p-4 max-w-full bg-primary-extra-light rounded">
        <Link
          href={`/course/${course?.course_url}`}
          className="font-semibold text-lg md:text-3xl text-primary border-b border-gray-300 pb-3"
        >
          {course?.course_name?.data?.attributes?.course_name}
        </Link>
        <div className="flex justify-start text-sm flex-wrap md:flex-nowrap">
          <div className="border-r border-gray-300 pr-3">(34 Courses)</div>
          <div className="border-r border-gray-300 px-3">4 - 5 years</div>
          <div className="flex gap-1 items-center text-secondary-text border-r border-gray-300 px-3">
            <Image src={LocationIcon} width={15} height={15} alt={"location"} />
            {college?.city?.data?.attributes?.city_name},{" "}
            {college?.state?.data?.attributes?.state_name}
          </div>
          <div className="flex justify-center border-r border-gray-300 px-3">
            <span>User Reviews:</span>
            <StarRating
              rating={course?.course_name?.data?.attributes?.rating}
            />
            (23)
          </div>
          <div className="flex gap-1 items-center text-secondary-text pl-3">
            <Image src={FlagIcon} width={14} height={14} alt={"courses"} />
            {
              course?.course_name?.data?.attributes?.type?.data?.attributes
                ?.course_type
            }
          </div>
        </div>
        <div className="flex gap-2  items-start">
          <div className="flex gap-1 justify-center border-r border-gray-300 pr-3">
            <Image
              src={ApprovedByIcon}
              width={15}
              height={15}
              alt={"approvedBy"}
            />
            <span>Approved by :</span>
            {course?.course_name?.data?.attributes?.approved_by?.data?.map(
              (approve: any, index: number) => {
                return (
                  <ColoredTag
                    key={index}
                    text={approve?.attributes?.organisation_name + " "}
                    fontSize="text-xs"
                    textColor="text-white"
                    paddingY="py-1"
                    bgColor="bg-primary"
                  />
                );
              }
            )}
          </div>
          <div className="flex justify-center pl-3">
            <span>{`Exam Accepted:`} </span>
            <span className="font-medium">
              {course?.exam_accepted?.data[0]?.attributes?.exam_name}
              {course?.exam_accepted?.data.length >= 2 ? (
                ` + ${course?.exam_accepted?.data.length - 1}`
              ) : (
                <></>
              )}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1 md:flex-row  justify-between">
          <div className="flex gap-1 items-center">
            <p className="text-secondary-text font-light">
              {course?.course_lebel} -{" "}
              <span className="text-[#B12704] text-base md:text-2xl font-medium">
                ₹ {course?.course_fee}
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            <div>
              <Button
                text={isCollegeApplied ? "Applied" : "Apply Now"}
                onClick={onApplyNow}
                showHover={false}
                outline
                outlineColor="border-primary"
                textColor="text-primary"
                paddingX="px-[10px]"
                paddingY="py-[10px]"
                width="w-36"
                align="text-center"
              />
            </div>
            <div>
              <Button
                onClick={() => handelDawonloadBrochure()}
                text="Brochure"
                showHover={false}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 16.5L7 11.5L8.4 10.05L11 12.65V4.5H13V12.65L15.6 10.05L17 11.5L12 16.5ZM6 20.5C5.45 20.5 4.979 20.304 4.587 19.912C4.195 19.52 3.99934 19.0493 4 18.5V15.5H6V18.5H18V15.5H20V18.5C20 19.05 19.804 19.521 19.412 19.913C19.02 20.305 18.5493 20.5007 18 20.5H6Z"
                      fill="white"
                    />
                  </svg>
                }
                filled
                filledColor="bg-primary"
                paddingX="px-[10px]"
                paddingY="py-[10px]"
                width="w-36"
                align="text-center"
              />
            </div>
          </div>
        </div>
        <Login
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
      </div>
    </>
  );
};

export default ProgramsComponent;
