import { NewsBanner } from "@/src/Asset";
import Image from "next/image";
import Link from "next/link";
import ColoredTag from "../../tag/coloredTag";

const TrendingCard = ({ categoryData }: any) => {
  const { attributes } = categoryData;

  return (
    <div className="relative flex  bg-white rounded-lg shadow-lg border">
      <Image
        src={attributes.featured_image.data.attributes.url}
        objectFit="cover"
        alt=""
        width={200}
        height={100}
        className="h-[10rem] max-w-[170px] w-full object-fill rounded-l-lg"
      />
      <div className="px-2 sm:px-4 flex flex-col justify-between py-4 w-full">
        <div className="flex flex-col items-start gap-2">
          <div className="font-semibold tracking-tight line-clamp-2 leading-4">
            {attributes?.name}
          </div>
          <div className="line-clamp-2 sm:line-clamp-3 leading-4 text-sm ">
            {attributes?.excerpt}
          </div>
        </div>

        <div className="flex justify-end mt-2 font-medium text-sm text-[#1268F5]">
          <Link href={`/study-abroad/${attributes.url}`}>LEARN MORE</Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
