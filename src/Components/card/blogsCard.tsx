import { AvatarImage, NewsCollegeImage, VerifiedIcon } from "@/src/Asset";
import Image from "next/image";
import Link from "next/link";

export default function BlogsCard({ BlogData, id }: any) {
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
      <div className="flex relative h-fit border border-[#E5EAF4] rounded-sm min-h-[440px] max-h-fit">
        <div className="flex flex-col gap-2">
          <div className="border-red-500">
            <Image
              src={BlogData?.featured_image?.data?.attributes?.url}
              alt=""
              width={200}
              height={200}
              className="object-cover w-full rounded-sm min-h-[200px] max-h-[200px]"
            />
          </div>
          <div className="font-semibold text-primary p-2 line-clamp-2 h-[60px]">
            <Link href={`/blogs/latest/${id}`}>{BlogData?.blog_title}</Link>
          </div>

          <p className="text-[#5A7184] p-2 line-clamp-3 h-[80px] ">
            {BlogData?.excerpt}
          </p>

          <div className="flex justify-between items-center text-white">
            <div className="flex gap-2 p-2 items-center">
              <Image
                src={AvatarImage}
                objectFit="cover"
                width={40}
                height={40}
                alt=""
              />
              <div className="">
                <p className="font-semibold text-[#183B56]">Viola Manisa</p>
                <div className="flex gap-2 text-sm">
                  <Image src={VerifiedIcon} width={16} height={16} alt="" />
                  <p className="italic text-[#5A7184]">Verified</p>
                </div>
              </div>
            </div>
            <div className="font-semibold text-[#5A7184] px-2">
              {formatDate(BlogData.updatedAt)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
