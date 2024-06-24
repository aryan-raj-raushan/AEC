import Link from "next/link";
import Image from "next/image";
import {
  FeturedStar,
  HeartIcon,
  Sir_Hillary_Scholarship,
  Sir_Hillary_Scholarship_1,
} from "@/src/Asset";
import StarRating from "../starRating/starRating";
import BasicInformation from "../consultingModule/basicInformation/basicInformation";
import { useState } from "react";
import userFrom from "@/src/Hooks/userFrom";

export default function ScholarshipApplyCard({
  ScholarshipData,
  scholarshipID,
  id,
}: any) {
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

  const FromStep: any = CollegeApplicatonListData?.form_stape;

  return (
    <>
      <div className="flex flex-col gap-1 items-stretch w-full bg-white rounded-lg shadow-lg min-h-[300px] max-h-fit">
        <div className="relative rounded-t-lg pt-2 bg-white">
          <Image
            src={ScholarshipData?.banner?.data[0]?.attributes?.url}
            alt={"scholarship"}
            width={150}
            height={150}
            className="w-full h-40 object-fill rounded-lg p-1"
          />
          {ScholarshipData?.is_featured && (
            <div className="absolute inset-0 px-4 py-6 flex justify-between max-h-max items-center">
              <div className="bg-white flex gap-1 items-center rounded-full px-2 py-1 text-xs">
                <Image
                  src={FeturedStar}
                  width={16}
                  height={16}
                  alt={"feature"}
                />
                Featured
              </div>
              <div className="bg-white rounded-full p-1 text-sm cursor-pointer">
                <Image src={HeartIcon} width={14} height={14} alt={"feature"} />
              </div>
            </div>
          )}
        </div>
        <div className="relative flex flex-col">
          <div className="absolute left-4 -top-7"></div>
          <div className="stars flex justify-end mr-2">
            <StarRating rating={3} totalStars={5} />
          </div>
          <div className="px-2 flex flex-col gap-2">
            <div className="text-[14px]">
              <p className="text-[13px] text-secondary-text">
                Conducted By :{" "}
                {
                  ScholarshipData?.conducted_by?.data?.attributes
                    ?.organisation_name
                }
              </p>
              <Link
                href={`/scholarships/${scholarshipID}/${ScholarshipData?.nav_items?.data[0]?.attributes?.title}`}
              >
                <h4 className="text-primary text-lg font-semibold line-clamp-1">
                  {ScholarshipData?.scholarship_title}
                </h4>
              </Link>
              <div className="pt-2">
                <span className="text-[#02001480]">Eligibility</span>
                <br />
                <p>{ScholarshipData?.eligibility}</p>
              </div>
              <div className="grid grid-cols-2 pt-1 gap-1">
                <div>
                  <span className="text-[#02001480] text-sm">Type</span>
                  <p>{ScholarshipData?.type?.data?.attributes?.title}</p>
                </div>
                <div className="absolute right-0 pr-2">
                  <span className="text-[#02001480] text-sm">
                    No. of Scholarships
                  </span>
                  <p>{ScholarshipData?.number_of_scholarship}</p>
                </div>
              </div>
              <div className="pt-2">
                <span className="text-[#02001480]">Amount</span>
                <br />
                <span className="text-red-500 font-semibold">
                  ₹ {ScholarshipData?.amount}
                </span>
                <span className="text-xs ml-1">(Doctorate Degree)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 mx-1.5 pb-2 gap-4 mt-2">
            <div
              onClick={() => handleOpenModal()}
              className="w-full p-[10px] bg-[#4D2C5E] rounded-lg text-center text-white cursor-pointer"
            >
              Apply Now
            </div>
            <div>
              <Link
                href={`/scholarships/${scholarshipID}/${ScholarshipData?.nav_items?.data[0]?.attributes?.title}`}
              >
                <div className="w-full p-[10px] bg-primary rounded-lg text-center text-white cursor-pointer">
                  Get Alert
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <BasicInformation
          FromStep={FromStep}
          id={id}
          isSectionCheck={"Scholarships"}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
