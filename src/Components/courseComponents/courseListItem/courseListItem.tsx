import Link from "next/link";
import Button from "../../button/button";
import Image from "next/image";
import StarRating from "../../starRating/starRating";
import { useState } from "react";
import BasicInformation from "@/src/Components/consultingModule/basicInformation/basicInformation";
import userFrom from "@/src/Hooks/userFrom";

export default function CourseListItem({ Course, id, courseId ,AppliedCourse}: any) {
  const { CollegeApplicatonListData } = userFrom();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  };
  const isApplied = AppliedCourse?.some((applied: any) => applied.courses.data.id === courseId);

 
  const FromStep: any = CollegeApplicatonListData?.form_stape;

  return (
    <div className="my-4 border-b-2 border-[#DDDDDD] shadow-md">
      <div className="px-4 flex lg:items-center gap-0 lg:gap-4 shadow-sm rounded border flex-col lg:flex-row py-4 lg:py-0">
        <div className="object-cover w-full lg:w-auto flex items-center">
          <Image
            className="min-w-[200px] min-h-[200px] object-fill rounded-md"
            src={Course?.logo?.data?.attributes?.url}
            width={200}
            height={200}
            alt={""}
          />
        </div>
        <div className="my-4 lg:my-3 flex flex-1 flex-col gap-1 border-primary-light lg:border-r lg:border-b-0 border-b sm:border-b-0 md:border-b">
          <div className="flex gap-1 text-xs">
            <h1>
              Level :{" "}
              {Course?.course_level?.data?.attributes?.course_level_name}{" "}
            </h1>{" "}
            |
            <h1>
              Approved By :{" "}
              {Course?.approved_by?.data[0]?.attributes?.organisation_name}{" "}
            </h1>{" "}
            |<h1>Affinity's Rating : {Course?.rating} </h1>
          </div>
          <Link
            href={`/courses/${id}/${Course?.nav_items?.data[0]?.attributes?.title}`}
          >
            <div>
              <h2 className="text-xl font-semibold text-primary">
                {Course?.course_name}
              </h2>
            </div>
          </Link>
          <h1 className="text-sm">
            Specialization :{" "}
            <span className="font-light">
              {
                Course?.specializations?.data[0]?.attributes
                  ?.specialization_name
              }{" "}
              +{Course?.specializations?.data?.length} more
            </span>{" "}
          </h1>
          <div className="flex items-center gap-2 text-sm">
            <p>Rating : </p>
            <StarRating rating={4} />
          </div>
          <div className="flex flex-col gap-2 items-stretch">
            <p className="text-secondary-text font-light text-sm">
              <span className="text-primary-text font-medium">
                Average Duration:
              </span>{" "}
              <span className="text-primary-text font-semibold">
                {"4 Years"}
              </span>
            </p>
            {Course?.colleges?.data[0]?.attributes?.college_name && (
              <p className="text-secondary-text text-xs font-normal flex items-center flex-wrap gap-1">
                Offered by:{" "}
                <span className="text-primary-text bg-red-300 border py-1 px-2 rounded-full mx-2 ">
                  {Course?.colleges?.data[0]?.attributes?.college_name
                    ? Course?.colleges?.data[0]?.attributes?.college_name
                    : "None"}
                </span>
                <span className="text-primary-text bg-blue-300 border py-1 px-2 rounded-full">
                  + {Course?.colleges?.data?.length} More
                </span>
              </p>
            )}

            <p className="text-secondary-text font-light">
              <span className="text-[#B12704] text-lg md:text-xl font-medium">
                ₹ {Course?.average_fee}
              </span>{" "}
              - Average Fees
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-1 flex-wrap justify-center lg:flex-col md:gap-2 items-center">
          <button  disabled={isApplied}>
          <Button
            // href={`/college`}
            onClick={() => handleOpenModal()}
            text={isApplied ? "Applied" : "Register Now"}
            filled
            fontSize="text-sm"
            width="w-fit sm:w-40"
            align="text-center"
            filledColor="bg-secondary"
            paddingY="py-3"
          />
          </button>
          <Button
            href={`/college`}
            text="Download Brochure"
            fontSize="text-sm"
            width="w-fit sm:w-40"
            align="text-center"
            filledColor="bg-primary"
            paddingY="py-3"
          />
          <Button
            href={`/college`}
            text="Get Updates"
            outline
            fontSize="text-sm"
            width="w-fit sm:w-40"
            textColor="text-[#428BC1]"
            align="text-center"
            showHover={false}
            paddingY="py-3"
          />
        </div>
      </div>
      {isModalOpen && (
        <BasicInformation id={courseId} isSectionCheck={"Course"} FromStep={FromStep} onClose={handleCloseModal} />
      )}
    </div>
  );
}
