"use client";
import Link from "next/link";
import Image from "next/image";
import { FeturedStar } from "@/src/Asset";
import ColoredTag from "../../tag/coloredTag";
import { useState } from "react";
import userFrom from "@/src/Hooks/userFrom";
import BasicInformation from "../../consultingModule/basicInformation/basicInformation";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

export default function ExamPrimaryCard({
  topExam,
  id,
  onApplyNow,
  AppliedExam,
  examId,
  onSave,
  isSave,
  isSaved,
}: any) {
  const isApplied = AppliedExam?.some(
    (applied: any) => applied.courses.data.id === examId
  );

  const [saved, setSaved] = useState(false);

  const handleSaveClick = () => {
    if (!saved) {
      setSaved(true);
      onSave();
    }
  };

  return (
    <>
      <div className="flex flex-col border items-stretch w-full bg-white rounded-lg shadow-lg">
        <div className="relative rounded-t-lg p-2 bg-white">
          <Image
            src={topExam?.banner?.data[0]?.attributes?.url}
            alt={"exam"}
            width={150}
            height={150}
            className="w-full h-36 object-fill rounded-t-lg"
          />
          {topExam?.is_featured && (
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
              <button
                className="flex gap-2 items-center text-[15px]"
                onClick={handleSaveClick}
              >
                <div className="bg-white p-[6px] rounded-full cursor-pointer">
                  {saved ? (
                    <FaHeart size={10} color="red" />
                  ) : (
                    <FaRegHeart color="black" size={10} />
                  )}
                </div>
              </button>
            </div>
          )}
        </div>
        <div className="relative flex flex-col">
          <div className="absolute left-4 -top-10 bg-white p-[10px] rounded-full border-[0.5px] border-primary-text-light shadow-sm">
            <Image
              width={150}
              height={150}
              src={topExam?.logo?.data?.attributes?.url}
              alt={""}
              className="w-[50px] h-[50px] object-fill rounded-full"
            />
          </div>
          <div className="stars flex justify-end mt-2 mr-2">
            <ColoredTag
              text={topExam?.exam_mode?.data?.attributes?.exam_mode}
              bgColor="bg-[#F4F4F4]"
              fontSize="text-sm"
              rounded="rounded"
            />
          </div>
          <div className="p-2 pt-4 flex-1 flex flex-col gap-2">
            <div>
              <Link href={`/exams/${topExam?.exam_url}`}>
                <h4 className="text-primary text-xl font-semibold my-2 px-2 line-clamp-1">
                  {topExam?.exam_name}
                </h4>
              </Link>

              <div className="flex flex-col text-sm tracking-tighter gap-2 px-2">
                <div className="flex justify-between">
                  <div className="">Participating Colleges</div>
                  <div className="font-semibold">54</div>
                </div>
                <div className="flex justify-between">
                  <div className="">Exam Date</div>
                  <div className="font-semibold">
                    {topExam?.exam_date?.start_date}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="">Exam Level</div>
                  <div className="font-semibold">
                    {topExam?.exam_level?.data?.attributes?.exam_level_name}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Link href={`/exams/${examID}`}> */}

          <button
            className="w-full p-[10px] cursor-pointer bg-primary rounded-b-lg text-center text-white tracking-tighter text-nowrap"
            disabled={isApplied}
            onClick={onApplyNow}
          >
            Application Process & Exam Info
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}
