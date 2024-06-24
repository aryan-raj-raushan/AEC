import { AvatarImage, SmartWatchImage, VerifiedIcon } from "@/src/Asset";
import Image from "next/image";
import ColoredTag from "../tag/coloredTag";
import Link from "next/link";

export default function NewsImgBackgroundCard({
  showTag = false,
  newsData,
}: {
  showTag?: boolean;
  newsData?: any;
}) {
  const { attributes } = newsData;

  // Check if the image URL is valid
  const imageUrl = attributes?.featured_image?.data?.attributes?.url;
  const isValidImageUrl = typeof imageUrl === 'string' && imageUrl.trim() !== '';


  return (
    <div className="relative rounded-lg overflow-hidden h-full">
      {/* Image */}
      {isValidImageUrl ? (
        <Image
          src={imageUrl}
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt=""
        />
      ) : (
        <div className="h-full w-full bg-gray-300 flex justify-center items-center">
          <p className="text-gray-600">Image not available</p>
        </div>
      )}

      {/* Overlay */}
      <div className="overlay absolute bg-gradient-to-t from-[#183B5600] via-[#16314674] to-[#152532] inset-0"></div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6">
        <div className=" h-full flex flex-col justify-between">
          {/* Tag */}
          <div>
            {showTag ? (
              <ColoredTag
                text={"EXAM"}
                textColor="text-[#36B37E]"
                bgColor="bg-white"
                fontWeight="font-bold"
                paddingX="px-6"
              />
            ) : (
              <></>
            )}
          </div>

          {/* News Details */}
          <div className="flex flex-col gap-10">
        
            <Link href={`/news/latest/${newsData?.id}`}>
            <p className="text-2xl font-semibold text-white">
              {attributes?.name}
            </p>
             </Link>
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
                  <p className="font-semibold">Viola Manisa</p>
                  <div className="flex gap-2 text-sm">
                    <Image src={VerifiedIcon} width={16} height={16} alt="" />
                    <p className="italic">Verified</p>
                  </div>
                </div>
              </div>
              <div className="font-semibold text-[#959EAD]">2 May</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
