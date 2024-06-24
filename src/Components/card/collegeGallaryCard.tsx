import Image from "next/image";
import CarouselGallary from "../carousel/carousel-gallary";
import Link from "next/link";
import useColleges from "@/src/Hooks/useColleges";
import { useEffect, useState } from "react";

export default function CollegeGallaryCard({ countryData, countryId }: any) {
  const [collegeId, setCollegeId] = useState<any>();
  const { GetSingleCollegeById } = useColleges();
  const { singleCollegeData, loading, error } = GetSingleCollegeById(countryData?.college_url);
  const [CollegeData, setCollegeData] = useState<any>();

  useEffect(() => {
    setCollegeData(singleCollegeData?.[0]?.attributes);
  }, [singleCollegeData]);

  const ReviewData = CollegeData?.review;

  let overallRating = 0;

  if (ReviewData && ReviewData.length > 0) {
    overallRating =
      ReviewData.reduce(
        (acc: any, review: any) => acc + review.overallrating,
        0
      ) / ReviewData.length;
  }

  const getRatingLabel = (rating: number) => {
    if (rating >= 4.5) return "Excellent";
    if (rating >= 3.5) return "Very Good";
    if (rating >= 2.5) return "Good";
    if (rating >= 1.5) return "Good";
    return "Average";
  };

  return (
    <>
      <div className="text-primary-text p-1 lg:p-0 lg:pb-4 w-full min-w-52 mx-auto border border-gray-300 rounded-lg drop-shadow-md shadow-md hover:shadow-xl">
        <div className="w-full">
          <CarouselGallary
            slides={[
              <Image
                key={1}
                src={countryData?.banner?.data[0]?.attributes?.url}
                alt=""
                className="min-w-full h-52 object-fill bg-origin-border rounded-lg p-1"
                width={500}
                height={500}
              />,
            ]}
          />
        </div>

        <div className="px-2">
          <Link
            href={{
              pathname: `/colleges/${countryData?.college_url}/info`,
            }}
          >
            <div className="font-semibold text-lg mt-[11px] line-clamp-2">
              {countryData?.college_name}
            </div>
          </Link>
          <div className="text-sm -mt-1 line-clamp-1 my-1">
            {countryData?.college_type?.data?.attributes?.college_type},{" "}
            {countryData?.city?.data?.attributes?.city_name},{" "}
            {countryData?.state?.data?.attributes?.state_name}
          </div>
          <div className="flex gap-1 items-center font-light text-xs tracking-tighter">
            {ReviewData && ReviewData.length > 0 && overallRating > 0 && (
              <>
                <div className="bg-primary text-white sm:p-2 p-1 rounded-md">
                  {overallRating.toFixed(1)}
                </div>
                <div>{getRatingLabel(overallRating)}</div>
              </>
            )}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#020014" />
              </svg>
            </div>
            <div className="md:text-sm text-xs">{ReviewData?.length > 0 ? (` ${ReviewData?.length} reviews`) : (` No review`)}</div>
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#020014" />
              </svg>
            </div>
            <div className="md:text-sm text-xs">5.8 km away</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
