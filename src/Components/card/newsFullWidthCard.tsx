import { AvatarImage, NewsCollegeImage, VerifiedIcon } from "@/src/Asset";
import Image from "next/image";
import ColoredTag from "../tag/coloredTag";
import Link from "next/link";

export default function NewsFullWidthCard({ NewsData }: any) {
  const formatDate = (timestamp: string): string => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${day} ${monthNames[monthIndex]}`;
  };

  return (
    <>
      <div className="sm:flex relative shadow-lg border border-[#E5EAF4] rounded-lg overflow-hidden">
        <div className="flex-1">
          <Image
            src={NewsData?.attributes?.featured_image?.data?.attributes?.url}
            objectFit="fill"
            width={100}
            height={100}
            layout="cover"
            className="h-full w-full object-fill"
            alt=""
          />
        </div>

        <div className="flex-1 p-5 flex flex-col justify-center gap-5">
          <div>
            {" "}
            <ColoredTag
              text={
                NewsData?.attributes?.categories?.data?.[0].attributes
                  ?.category_name
              }
              bgColor="bg-sky-100"
              textColor="text-sky-500"
            />
          </div>

          <Link
            href={`/news/latest/${NewsData?.attributes?.url}`}
            className="md:text-4xl text-[17px] font-semibold text-sky-500 line-clamp-3"
          >
            {NewsData?.attributes?.name + "..."}
          </Link>
          <p className="text-[#5A7184] md:my-0 my-1">
            {NewsData?.attributes?.excerpt?.slice(0, 180)}...
          </p>
          <div className="flex justify-between items-center text-white">
            <div className="flex gap-2 items-center">
              <Image
                src={AvatarImage}
                objectFit="cover"
                width={40}
                height={40}
                alt=""
              />
              <div>
                <p className="font-semibold text-[#183B56]">Viola Manisa</p>
                <div className="flex gap-2 text-sm">
                  <Image src={VerifiedIcon} width={16} height={16} alt="" />
                  <p className="italic text-[#5A7184]">Verified</p>
                </div>
              </div>
            </div>
            <div className="font-semibold text-[#5A7184]">
              {formatDate(NewsData?.attributes?.updatedAt)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
