import { NewsBanner } from "@/src/Asset";
import Image from "next/image";
import ColoredTag from "../tag/coloredTag";
import Link from "next/link";

export default function NewsCard() {
  return (
    <>
      <div className="relative flex bg-white rounded-lg w-max shadow-md">
        <div>
          <Image
            src={NewsBanner}
            objectFit="cover"
            style={{ height: "100%" }}
            alt=""
          />
        </div>
        <div className="px-4 py-2">
          <ColoredTag
            text="Courses"
            textColor="text-green-800"
            bgColor="bg-green-200"
          />
          <div className="w-[199px] mt-[10px] font-semibold tracking-tight">
            Bsc. Mechanical Engineering
          </div>
          <div className="w-[214px] mt-[10px]">
            Studying at MIT: Excellence, Innovation, Success.
          </div>
          <div className="flex justify-end mt-2 font-medium text-sm text-[#1268F5]">
            <Link href={"/"}>LEARN MORE</Link>
          </div>
        </div>
      </div>
    </>
  );
}
