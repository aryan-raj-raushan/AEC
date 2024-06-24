import Link from "next/link";
import Image from "next/image";
import {
  ApprovedByIcon,
  CashIcon,
  CashSolidIcon,
  ClockIcon,
  CollegeBanner,
  CourseImage,
  ExamImage,
  ExamLogo,
  FeturedStar,
  FlagIcon,
  HeartIcon,
  LevelIcon,
} from "@/src/Asset";
import ColoredTag from "../../tag/coloredTag";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";


export default function CoursePrimaryCard({
  course,
  id,
  onApplyNow,
  AppliedCourse,
  courseId,
  onSave,
}: any) {
  const isApplied = AppliedCourse?.some(
    (applied: any) => applied.courses.data.id === courseId
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
      <div className="flex border h-auto flex-col items-stretch w-full lg:w-full bg-white rounded-lg shadow-lg">
        <div className="relative rounded-t-lg p-2 bg-white">
          <Image
            src={course?.banner?.data[0]?.attributes?.url}
            alt={"exam"}
            width={284}
            height={150}
            className="w-full h-36 object-fill rounded-t-lg"
          />
          {course?.is_featured && (
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
          <div className="stars flex justify-end mt-2 mr-2">
            <ColoredTag
              text="Online"
              bgColor="bg-[#F4F4F4]"
              fontSize="text-sm"
              rounded="rounded"
            />
          </div>
          <div className="p-2 flex-1 flex flex-col gap-2">
            <div>
              {/* <Link
                href={`/courses/${id}/${course?.nav_items?.data[0]?.attributes?.title}`}
              >
                <div>
                  <h4 className="text-primary text-xl font-semibold my-2 px-2 tracking-tight h-10 line-clamp-1">
                    {course?.course_name.split(" ").slice(0, 3).join(" ")}
                  </h4>
                </div>
              </Link> */}
              <Link href={`/courses/${course?.course_url}/${course?.nav_items?.data[0]?.attributes?.title}`}>
                <h4 className="text-primary text-xl font-semibold my-2 px-2 tracking-tight h-10 line-clamp-1">
                  {course?.course_name}
                </h4>
              </Link>

              <div className="flex flex-col text-sm tracking-tighter gap-2 px-2">
                <div className="flex gap-7 items-center">
                  <div className="flex gap-1 items-center">
                    <div>
                      <Image src={ClockIcon} alt="duration" />
                    </div>
                    <div className="font-medium">2 Years</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div>
                      <Image src={LevelIcon} alt="duration" />
                    </div>
                    <div className="font-medium">Beginner</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Image src={CashSolidIcon} alt="Cash" />
                  <span className="text-[#B12704] text-2xl font-medium">
                    {`₹ ${course?.average_fee}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="p-[10px] bg-primary rounded-b-lg text-center text-white tracking-tighter cursor-pointer"
            disabled={isApplied}
            onClick={onApplyNow}
          >
            {isApplied ? "Applied" : "Application Process & Exam Info"}
          </button>
        </div>
      </div>
    </>
  );
}
