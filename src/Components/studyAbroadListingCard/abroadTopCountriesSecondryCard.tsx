import Link from "next/link";
import Image from "next/image";
import {
  CashIcon,
  FeturedStar,
} from "@/src/Asset";
import ColoredTag from "../tag/coloredTag";


export default function AbroadTopCountriesSecondryCard({ topExam }: any) {
  return (
    <>
      <div className="flex flex-col items-stretch w-full bg-white rounded-lg shadow-lg">
        <div className="relative rounded-t-lg  bg-white">
          <Image
            src={topExam?.banner?.data[0]?.attributes?.url}
            alt={"exam"}
            width={150}
            height={150}
            className="w-full h-36 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 px-4 py-6 flex justify-between max-h-max items-center">
            <div className="bg-white flex gap-1 items-center rounded-full px-2 py-1 text-xs">
              <Image src={FeturedStar} width={16} height={16} alt={"feature"} />
              Featured
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-start p-2">
            <div className=" bg-white p-[10px] rounded-full border-[0.5px] border-primary-text-light shadow-sm">
              <Image
                width={150}
                height={150}
                src={topExam?.logo?.data?.attributes?.url}
                alt={""}
                className="w-[50px] h-[50px] object-fit rounded"
              />
            </div>
            <div className="stars flex justify-end mt-4 mr-2">
              <ColoredTag
                text={topExam?.exam_mode?.data?.attributes?.exam_mode}
                bgColor="bg-[#F4F4F4]"
                fontSize="text-sm"
                rounded="rounded"
              />
            </div>
          </div>

          <div className="p-2 pt-4 flex-1 flex flex-col gap-2">
            <div>
              <h4 className="text-primary text-xl font-semibold my-2 px-2">
              {topExam?.exam_name.split(' ').slice(0, 3).join(' ') + '...'}
              </h4>
              <div className="flex flex-col text-sm tracking-tighter gap-2 px-2">
                <div className="flex items-center gap-1">
                  <div>
                    <Image src={CashIcon} alt="" />
                  </div>
                  <div className=" text-[#B12704] text-lg font-medium">
                    1000
                  </div>
                  <div className="text-xl font-semibold">-</div>
                  <div className="">Male candidates</div>
                </div>
                <div className="flex items-center gap-1">
                  <div>
                    <Image src={CashIcon} alt="" />
                  </div>
                  <div className=" text-[#B12704] text-lg font-medium">800</div>
                  <div className="text-xl font-semibold">-</div>
                  <div className="">Female candidates</div>
                </div>
                <div className="flex items-center gap-1">
                  <div>
                    <Image src={CashIcon} alt="" />
                  </div>
                  <div className=" text-[#B12704] text-lg font-medium">500</div>
                  <div className="text-xl font-semibold">-</div>
                  <div className="">SC/ST candidates</div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/">
            <div className="w-full p-[10px] bg-primary rounded-b-lg text-center text-white tracking-tighter">
              Exam Info
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
