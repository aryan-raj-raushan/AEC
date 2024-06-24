import Link from "next/link";
import Image from "next/image";
import { CollegeImage, CollegeLogo2, LocationIcon } from "@/src/Asset";

export default function CollegeCompareCard({
  college,
  big,
  showSecondCollege,
  handleToggleSecondCollege
}: {
  college: any;
  big?: boolean;
  showSecondCollege?: boolean;
  handleToggleSecondCollege?: any
}) {
 
  return (
    <>
      <div className="flex flex-col items-stretch relative bg-white rounded-lg shadow-lg h-full">
        <div className='absolute -right-1 -top-1 z-50'>
          {
            showSecondCollege && (
              <button 
              onClick={handleToggleSecondCollege}
              className=' text-[1rem] bg-black border-4 border-white text-white rounded-full px-[7px]'>X</button>
            )
          }
        </div>
        <div className="relative rounded-t-lg bg-white">
          <Image
            src={college?.banner?.data[0]?.attributes?.url}
            alt={"college"}
            width={150}
            height={150}
            className="w-auto h-36 object-cover rounded-t-lg"
          />
        </div>
        <div className="relative flex flex-col">
          <div className="absolute left-4 -top-12 bg-white p-4 rounded-md shadow-md">
            <Image
              width={40}
              height={40}
              src={college?.logo?.data?.attributes?.url}
              alt={college?.college_name}
              className="w-[55px] h-[50px] object-fit rounded"
            />
          </div>
          <div className="p-5 pt-4 flex-1 flex flex-col gap-2">
            <div className="mt-8 ">
              <h4
                className={`text-primary-text pb-1 tracking-tighter font-semibold`}
              >
                {college?.college_name} 
              </h4>
              <div
                className={`${
                  big ? "text-sm" : "text-[10px]"
                } text-secondary-text flex gap-1 items-center py-1`}
              >
                <Image
                  src={LocationIcon}
                  width={20}
                  height={20}
                  alt=""
                />
                {college?.city?.data?.attributes?.city_name ? college?.city?.data?.attributes?.city_name?.slice(0,10) : "Jalandhar"},
                {college?.state?.data?.attributes?.state_name ? college?.state?.data?.attributes?.state_name?.slice(0,10) + "..." : "Punjab"}
              </div>
            </div>
            <div>
              <p className='text-[14px] py-1'>{college?.courses?.data[0]?.attributes?.course_url} [{college?.courses?.data[0]?.attributes?.course_name}]</p>
              <p className='text-[14px]'>Computer Science Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
