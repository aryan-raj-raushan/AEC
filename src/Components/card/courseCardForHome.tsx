import Image from "next/image";
import Link from "next/link";
import StarRating from "../starRating/starRating";

export default function CourseCardForHome({ coursesData, id }: any) {
  return (
    <div className="text-primary-text flex flex-col lg:flex-row gap-4 border border-primary-light shadow-md rounded-2xl lg:min-h-[200px] min-w-80  max-h-fit">
      <div className="relative lg:w-1/3">
        <Image
          width={700}
          height={200}
          src={coursesData?.banner?.data[0]?.attributes?.url}
          alt="cardImage"
          className="object-fill object-center bg-origin-border h-[200px] lg:h-full w-full rounded-lg p-1"
        />
        <div>
          <Image
            width={50}
            height={50}
            src={coursesData?.logo?.data?.attributes?.url}
            alt="Course Logo"
            className="absolute top-0 left-0 object-contain p-2"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 p-2 lg:w-2/3">
        <div className="flex gap-1 text-xs">
          <h1>
            Level :{" "}
            {coursesData?.course_level?.data?.attributes?.course_level_name}{" "}
          </h1>{" "}
          |
          <h1>
            Approved By :{" "}
            {coursesData?.approved_by?.data[0]?.attributes?.organisation_name}{" "}
          </h1>{" "}
          |<h1>Affinity's Rating : {coursesData?.rating} </h1>
        </div>
        <Link
          href={`/courses/${coursesData?.course_url}/${coursesData?.nav_items?.data[0]?.attributes?.title}`}
        >
          <div>
            <h2 className="text-xl font-semibold text-primary -mt-2">
              {coursesData?.course_name}
            </h2>
          </div>
        </Link>
        <h1 className="text-sm -mt-2">
          Specialization :{" "}
          <span className="font-light">
            {
              coursesData?.specializations?.data[0]?.attributes
                ?.specialization_name
            }{" "}
            +{coursesData?.specializations?.data?.length} more
          </span>{" "}
        </h1>
        <div className="flex items-center gap-2 text-xs sm:text-sm -mt-2">
          <p>Rating : </p>
          <StarRating rating={4} />
        </div>
        <div className="flex flex-col gap-2 items-stretch -mt-2">
          <p className="text-secondary-text font-light text-sm">
            <span className="text-primary-text font-medium">
              Average Duration:
            </span>{" "}
            <span className="text-primary-text font-semibold">{"4 Years"}</span>
          </p>
          <p className="text-secondary-text text-xs font-normal flex items-center flex-wrap gap-1">
            Offered by:{" "}
            <span className="text-primary-text bg-red-300 border py-1 px-2 rounded-full mx-2 ">
              {coursesData?.colleges?.data[0]?.attributes?.college_name}
            </span>
            <span className="text-primary-text bg-blue-300 border py-1 px-2 rounded-full">
              + {coursesData?.colleges?.data?.length} More
            </span>
          </p>
          <p className="text-secondary-text font-light">
            <span className="text-[#B12704] text-lg md:text-xl font-medium">
              ₹ {coursesData?.average_fee}
            </span>{" "}
            - Average Fees
          </p>
        </div>
      </div>
    </div>
  );
}
