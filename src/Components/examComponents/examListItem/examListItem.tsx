import Link from "next/link";
import Button from "../../button/button";
import Tag from "../../tag/tags";
import Image from "next/image";
import { useState } from "react";
import BasicInformation from "@/src/Components/consultingModule/basicInformation/basicInformation";
import userFrom from "@/src/Hooks/userFrom";

export default function ExamListItem({
  ExamData,
  examID,
  id,
  AppliedExam,
}: any) {
  const { attributes } = ExamData;
  const { CollegeApplicatonListData } = userFrom();

  const formatDate = (dateString: string | number | Date) => {
    if (!dateString) return "";
    const options: any = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const isApplied = AppliedExam?.some(
    (applied: any) => applied.exams?.data.id === id
  );

  const FromStep: any = CollegeApplicatonListData?.form_stape;

  return (
    <div className="py-4 border-b-2 border-[#DDDDDD]">
      <div className="px-4 flex lg:item-center gap-0 lg:gap-4 shadow-md rounded border flex-col lg:flex-row py-4 lg:py-0">
        <div className="flex items-center object-cover w-full lg:w-auto">
          <Image
            src={attributes?.logo?.data?.attributes?.url}
            width={200}
            height={200}
            alt={""}
            className="lg:w-[200px] lg:h-[200px] object-fill w-44"
          />
        </div>
        <div className="my-2 flex flex-1 flex-col gap-2 border-b sm:border-b-0 md:border-b border-primary-light lg:border-r lg:border-b-0">
          <Link
            href={`/exams/${examID}/${ExamData?.attributes?.nav_items?.data[0]?.attributes?.title}`}
          >
            <div>
              <h2 className="text-lg font-semibold text-primary">
                {attributes?.exam_name}
              </h2>
            </div>
          </Link>
          <div className="flex flex-col gap-1 items-stretch">
            <p className="text-secondary-text text-sm font-light">
              Application Date:{" "}
              <span className="text-primary-text font-medium">
                {formatDate(attributes?.application_date?.start_date)}{" "}
                {attributes?.application_date?.end_date &&
                  `- ${formatDate(attributes?.application_date?.end_date)}`}
              </span>
            </p>
            <p className="text-secondary-text font-light text-sm">
              Exam Date:{" "}
              <span className="text-primary-text font-medium">
                {formatDate(attributes?.exam_date?.start_date)}{" "}
                {attributes?.exam_date?.end_date &&
                  `- ${formatDate(attributes?.exam_date?.end_date)}`}
              </span>
            </p>
            <p className="text-secondary-text font-light text-sm">
              Result Date:{" "}
              <span className="text-primary-text font-medium">
                {formatDate(attributes?.result_date?.start_date)}{" "}
                {attributes?.result_date?.end_date &&
                  `- ${formatDate(attributes?.result_date?.end_date)}`}
              </span>
            </p>

            <p className="text-secondary-text font-light text-sm">
              Level:{" "}
              <span className="text-primary-text font-medium">
                {attributes?.exam_level?.data?.attributes?.exam_level_name}
              </span>
            </p>
            <div className="flex gap-2 flex-wrap my-2 items-center leading-3 text-sm">
              {attributes?.nav_items?.data
                ?.slice(0, 5)
                .map((nav: { attributes: { title: string } }, index: any) => {
                  return (
                    <Link href={"/"} key={index} className="text-primary">
                      {nav?.attributes?.title} |{" "}
                    </Link>
                  );
                })}
              <Link href={"/"} className="text-primary font-semibold">
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-1 flex-wrap justify-center lg:flex-col md:gap-2 items-center">
          <button disabled={isApplied}>
            <Button
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
            width="sm:w-40"
            align="text-center"
            filledColor="bg-primary"
            paddingY="py-3"
          />
          <Button
            href={`/college`}
            text="Get Updates"
            fontSize="text-sm"
            width="sm:w-40"
            align="text-center"
            textColor="text-black"
            showHover={false}
            outline
            paddingY="py-3"
          />
        </div>
      </div>
      {isModalOpen && (
        <BasicInformation
          FromStep={FromStep}
          id={id}
          isSectionCheck={"Exam"}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
