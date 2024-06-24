import Link from "next/link";
import Image from "next/image";
import { FeturedStar, HeartIcon } from "@/src/Asset";
import StarRating from "../../starRating/starRating";
import { useState } from "react";
import BasicInformation from "@/src/Components/consultingModule/basicInformation/basicInformation";
import userFrom from "@/src/Hooks/userFrom";

export default function CareerApplyCard({ CarearsData, id, carearId }: any) {
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
            src={CarearsData?.banner?.data[0]?.attributes?.url}
            alt={"career"}
            width={150}
            height={150}
            className="w-full h-full min-h-52 object-fill rounded-2xl p-2"
          />
          {CarearsData?.is_Featured && (
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
          <div className="stars flex justify-end mt-2 mr-2">
            <StarRating rating={3} totalStars={5} />
          </div>
          <div className="p-2 flex flex-col gap-2">
            <div className="text-[14px]">
              <p className="text-[13px] text-secondary-text">
                Job Type :{" "}
                {CarearsData?.job_types?.data[0]?.attributes?.job_type_title}
              </p>
              <Link
                href={`/careers/${id}/${CarearsData?.nav_items?.data[0]?.attributes?.title}`}
                className="text-primary text-lg font-semibold h-8 line-clamp-1"
              >
                {CarearsData?.career_title}
              </Link>
              <div>
                <span className="text-[#02001480]">Gender Ratio</span>
                <br />
                <p>{CarearsData?.gender_ratio}</p>
              </div>
              <div className="grid grid-cols-2 pt-2 gap-2">
                <div>
                  <span className="text-[#02001480] text-sm">Career Level</span>
                  <p>
                    {" "}
                    {CarearsData?.career_levels?.data[0]?.attributes
                      ?.career_level_title ?? "Fresher"}
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <span className="text-[#02001480]">Amount</span>
                <br />
                <span className="text-red-500 font-semibold">
                  $ {CarearsData?.average_startin_salary}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 mx-1.5 pb-2 gap-2 lg:gap-3 min-h-18">
            <div>
              <div onClick={() => handleOpenModal()}>
                <div className="cursor-pointer w-full p-[10px] bg-[#4D2C5E] rounded-b-lg text-center text-white text-nowrap">
                  Apply Now
                </div>
              </div>
            </div>
            <div>
              <Link href="/">
                <div className="w-full p-[10px] bg-primary rounded-b-lg text-center text-white text-nowrap">
                  Get Alert
                </div>
              </Link>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <BasicInformation
            id={carearId}
            isSectionCheck={"Careear"}
            FromStep={FromStep}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
}
