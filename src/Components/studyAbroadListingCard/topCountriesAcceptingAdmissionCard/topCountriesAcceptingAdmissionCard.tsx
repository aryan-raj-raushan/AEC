import Link from "next/link";
import Image from "next/image";
import {
  CollegeOutline,
  PhBook,
  PhMoney,
  SolarCourseDown,
  Vector,
} from "@/src/Asset";
import StarRating from "../../starRating/starRating";

export default function TopCountriesAcceptingAdmissionCard({
  CountryData,
  id,
}: any) {
  return (
    <>
      <div className="flex flex-col items-stretch w-full bg-white rounded-lg shadow-lg">
        <div className="relative rounded-t-lg p-2 bg-white">
          <Image
            src={CountryData?.banner?.data[0]?.attributes?.url}
            alt={"Country"}
            width={150}
            height={150}
            className="w-full h-36 object-fill rounded-t-lg"
          />
        </div>
        <div className="relative flex flex-col">
          <div className="absolute left-4 -top-10 bg-white  border-[0.5px] border-primary-text-light shadow-sm">
            <Image
              width={80}
              height={80}
              src={CountryData?.flags?.data?.attributes?.url}
              alt={""}
              className="  object-fit "
            />
          </div>
          <div className="stars flex justify-end mt-2 mr-2">
            <StarRating rating={3} totalStars={5} />
          </div>
          <div className="p-2 pt-4 flex-1 flex flex-col gap-2">
            <div>
              <Link href={`/study-abroad/${CountryData?.country_url}`}>
                <h4 className="text-primary text-xl font-semibold my-2 px-2">
                  {`Study in ${CountryData?.country_name}`}
                </h4>
              </Link>
              <div className="flex flex-col text-sm tracking-tighter gap-2 px-2">
                <div className="flex gap-2">
                  <div className="">
                    <Image src={Vector} alt={""} />
                  </div>
                  <div>
                    Total College:{" "}
                    <span className="font-semibold">
                      {CountryData?.colleges?.data?.length}+
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image src={SolarCourseDown} alt={""} />
                  <div>
                    Total Courses:{" "}
                    <span className="font-semibold">
                      {CountryData?.courses?.data?.length}+
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image src={PhBook} alt={""} />
                  <div>
                    Total Exams:{" "}
                    <span className="font-semibold">
                      {CountryData?.exams?.data?.length}+{" "}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image src={PhBook} alt={""} />
                  <div>
                    Total Scholarships:{" "}
                    <span className="font-semibold">
                      {CountryData?.scholarships?.data?.length}+{" "}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image src={CollegeOutline} alt={""} />
                  <div>
                    Total Careers:{" "}
                    <span className="font-semibold">
                      {CountryData?.careers?.data?.length}+{" "}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image src={PhMoney} alt={""} />
                  <div>
                    Average cost of Living:{" "}
                    <span className="font-semibold text-red-600">
                      $ {CountryData?.average_cost_living}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href={`/study-abroad/${CountryData?.country_url}`}>
            <div className="w-full p-[10px] bg-[#050138] rounded-b-lg text-center text-white tracking-tighter">
              View Details
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
