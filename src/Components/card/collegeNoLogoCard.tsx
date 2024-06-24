import Link from "next/link";
import Image from "next/image";
import {
  ApprovedByIcon,
  CashIcon,
  CollegeImage,
  FeturedStar,
  FlagIcon,
  GoalIcon,
  HeartIcon,
  MedalIcon,
} from "@/src/Asset";
import ColoredTag from "../tag/coloredTag";
import { CollegeProps } from "@/src/types/Collage";

export default function CollegeNoLogoCard({ college }: any) {
  return (
    <>
      <div className="flex flex-col items-stretch min-w-48 w-full bg-white rounded-lg shadow-lg">
        <div className="relative rounded-t-lg  bg-white">
          <Image
            src={CollegeImage}
            alt={college?.college_name}
            width={150}
            height={100}
            className="w-full h-36 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 px-4 py-6 flex justify-end max-h-max items-center">
            {/* <div className="bg-white flex gap-1 items-center rounded-full px-2 py-1 text-xs">
              <Image src={FeturedStar} width={16} height={16} alt={"feature"} />
              Featured
            </div> */}
            <div className="bg-white rounded-full p-1 text-sm cursor-pointer">
              <Image src={HeartIcon} width={14} height={14} alt={"feature"} />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col">
          <div className="flex justify-between mx-4 items-start">
            <div className="mt-4">
              <ColoredTag
                text="#2 NIRF"
                fontSize="text-sm"
                textColor="text-[#19B144]"
                bgColor="bg-[#D6ECDF]"
              />
            </div>
            <Image src={MedalIcon} width={20} height={40} alt="" />
          </div>
          <div className="p-2 pt-4 flex-1 flex flex-col gap-2">
            <div>
              <h4 className=" text-xl font-semibold">
                {/* {college?.college_name} */}
                University of Cambridge
              </h4>
              <p className="text-sm tracking-tight text-secondary-text">
                Public university in Cambridge, England
              </p>
            </div>
            <div className="text-base flex gap-1 items-center text-secondary-text">
              <Image src={CashIcon} width={20} height={20} alt={"Cash"} />
              <span className="text-2xl text-[#B12704] font-medium">
                1.3L
              </span>{" "}
              - Total fees Range
            </div>
            <div className="text-sm flex gap-1 items-center text-secondary-text ml-1">
              <Image
                src={GoalIcon}
                width={14}
                height={14}
                alt={"type of college"}
              />
              9 Courses Offered
            </div>
          </div>
          <Link href="/">
            <div className="w-full p-[10px] bg-primary rounded-b-lg text-center text-white">
              Apply Now
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
