import { AvatarImage, EyeIcon } from "@/src/Asset";
import Image from "next/image";
import ColoredTag from "../tag/coloredTag";

export default function DiscussionCard() {
  return (
    <>
      <div className="flex flex-col gap-5 px-5 md:px-10 py-8 rounded-lg shadow-md border-[0.5px] border-[primary-text-extra-light]">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div>
              <Image src={AvatarImage} width={40} height={40} alt="" />
            </div>
            <div className="flex flex-col ">
              <span className="text-[13px] tracking-wideer text-black">
                Golanginya
              </span>
              <span className="text-[10px] text-[#808080] tracking-wide">
                5 min ago
              </span>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-black text-sm font-semibold tracking-wide">
            How to patch KDE on FreeBSD?
          </p>
          <p className="text-black text-sm leading-6 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            aliquet maecenas ut
          </p>
        </div>
        <div className="flex justify-between items-center gap-1">
          <div className="flex gap-2 md:gap-4 items-center">
            <ColoredTag
              text="College"
              textColor="text-white"
              fontSize="text-[10px]"
              bgColor="bg-[#F2A742CC]"
            />
            <ColoredTag
              text="Exam"
              textColor="text-white"
              fontSize="text-[10px]"
              bgColor="bg-[#D64F92CC]"
            />
            <ColoredTag
              text="Stream"
              textColor="text-white"
              fontSize="text-[10px]"
              bgColor="bg-[#428BC1CC]"
            />
          </div>
          <div className="flex gap-4 items-center text-[#808080] text-[13px]">
            <div className="flex gap-2 items-center">
              <Image src={EyeIcon} width={15} height={15} alt="" /> 125
            </div>
            <div className="flex gap-2 items-center">
              <Image src={EyeIcon} width={15} height={15} alt="" />
              14
            </div>
            <div className="flex gap-2 items-center">
              <Image src={EyeIcon} width={15} height={15} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
