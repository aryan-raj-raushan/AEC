import { Key } from "react";
import Button from "../../button/button";
import useBlog from "@/src/Hooks/useBlog";

export default function NewsTopSearch() {
  const { AllBlogsDataList } = useBlog();

  return (
    <div className="flex py-1 items-center gap-2 md:gap-6 max-w-[1269px] w-[95%] mx-auto overflow-x-auto mt-32 md:mt-36 hide-scrollbar">
      <div className="text-nowrap font-medium text-[20px] md:text-[18px]">
        Top Searches:
      </div>
      <div className="flex gap-2 md:gap-4 hide-scrollbar w-fit">
        {AllBlogsDataList &&
          AllBlogsDataList?.map(
            (
              item: { attributes: { blog_title: any } },
              index: Key | null | undefined
            ) => (
              <Button
                key={index}
                filled
                rounded
                filledBorderColor="sm:border-primary border-none"
                filledBorderWidth="sm:border border-none"
                filledColor="sm:bg-primary-light"
                textColor="text-primary-text"
                text={item?.attributes?.blog_title || ""}
                paddingX="sm:px-4 px-0"
                paddingY="py-2"
                fontSize="text-[14px] md:text-base"
                fontWeight="sm:font-medium font-light" 
              />
            )
          )}
      </div>
    </div>
  );
}
