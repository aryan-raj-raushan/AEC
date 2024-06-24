import Link from "next/link";
import Image from "next/image";
import { ApprovedByIcon, FeturedStar, FlagIcon, HeartIcon } from "@/src/Asset";
import ColoredTag from "../tag/coloredTag";
import StarRating from "../starRating/starRating";
import { useState } from "react";

export default function FeaturedCollegeCard({
  college,
  id,
  onApplyNow,
  AppliedCollege,
  collegeId,
}: any) {
  const isCollegeApplied = AppliedCollege?.some(
    (applied: { college: { data: { id: any } } }) =>
      applied.college.data.id === collegeId
  );

  if (!college.is_featured) {
    return null;
  }

  return (
    <>
      <div className="flex border flex-col items-stretch w-full lg:w-full bg-white rounded-lg shadow-lg">
        <div className="relative rounded-t-lg p-2 bg-white">
          <Image
            src={college?.banner?.data[0]?.attributes?.url}
            alt={college?.college_name}
            width={150}
            height={150}
            className="w-full h-32 object-fill rounded-lg"
          />
          <div className="absolute inset-0 px-4 py-6 flex justify-between max-h-max items-center">
            <div className="bg-white flex gap-1 items-center rounded-full px-2 py-1 text-xs">
              <Image src={FeturedStar} width={16} height={16} alt={"feature"} />
              Featured
            </div>
            <div className="bg-white rounded-full p-1 text-sm cursor-pointer absolute right-4">
              <Image src={HeartIcon} width={14} height={14} alt={"feature"} />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col">
          <div className="absolute left-4 -top-7">
            <Image
              width={150}
              height={150}
              src={college?.logo?.data?.attributes?.url}
              alt={college?.college_name}
              className="w-[55px] h-[50px] object-fill rounded"
            />
          </div>
          <div className="stars flex justify-end mt-2 mr-2">
            <StarRating rating={3} totalStars={5} />
          </div>
          <div className="p-2 pt-4 flex-1 flex flex-col gap-2">
            <div>
              <Link href={`/colleges/${id}/${college?.nav_items?.data[0]?.attributes?.title}`}>
                <h4 className="text-primary text-lg font-semibold line-clamp-1">
                  {college?.college_name}
                </h4>
              </Link>
              <p className="text-[13px] text-secondary-text font-normal">
                {"Public"}, {college?.city?.data?.attributes?.city_name} ,
                {college?.state?.data?.attributes?.state_name}
              </p>
            </div>
            <div className="text-sm flex gap-1 items-center text-secondary-text">
              <Image
                src={ApprovedByIcon}
                width={20}
                height={20}
                alt={"approvedBy"}
              />
              <span className=" font-light">Approved By:</span>{" "}
              <div className="flex gap-[6px]">
                {college?.approved_by?.data?.length ? (
                  college?.approved_by?.data
                    .slice(0, 3)
                    .map((tag: any, index: number) => (
                      <ColoredTag
                        key={index}
                        text={tag?.attributes?.organisation_name}
                      />
                    ))
                ) : (
                  <span className="bg-red-100 p-1 px-2 rounded-full">NONE</span>
                )}

                {college?.approved_by?.data.length > 3 && (
                  <span className="text-xs text-primary cursor-pointer">
                    +more
                  </span>
                )}
              </div>
            </div>
            <div className="text-sm flex gap-1 items-center text-secondary-text ml-1 font-light">
              <Image
                src={FlagIcon}
                width={14}
                height={14}
                alt={"type of college"}
              />
              {`${college?.college_type?.data?.attributes?.college_type}`}
            </div>
          </div>

          <button
            disabled={isCollegeApplied}
            onClick={onApplyNow}
            className="cursor-pointer w-full p-[10px] bg-primary rounded-b-lg text-center text-white"
          >
            {isCollegeApplied ? "Applied" : "Apply Now"}
          </button>
        </div>
      </div>
    </>
  );
}
