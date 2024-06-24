// import Link from "next/link";
// import { useEffect, useState } from "react";
// import StudyAbroadCard from "../../card/studyAbroadCard";
// import useBlog from "@/src/Hooks/useBlog";

// const TrendingNewsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const { NewCategoryData } = useBlog();

//   return (
//     <div>
//       <div className="p-12 bg-white rounded-2xl text-primary-text  mb-2">
//         <div className="flex justify-between items-center">
//           <div className="flex gap-32 items-center">
//             <div className="text-3xl font-semibold">Trending</div>
//             <div className="flex border-b-2 border-b-text-primary-text gap-8">
//               <div
//                 className={`p-2 border-b-4 ${
//                   activeCategory === "All"
//                     ? "border-b-[#1268F5]"
//                     : "border-b-transparent cursur-pointer"
//                 }`}
//                 onClick={() => setActiveCategory("All")}
//               >
//                 All
//               </div>

//               {NewCategoryData &&
//                 NewCategoryData?.slice(0, 5)?.map((categoryData) => {
//                   const { attributes } = categoryData;
//                   const categoryName = attributes?.category_name;
//                   return (
//                     <div
//                       key={categoryName}
//                       className={`p-2 border-b-4 ${
//                         activeCategory === categoryName
//                           ? "border-b-[#1268F5]"
//                           : "border-b-transparent cursur-pointer"
//                       }`}
//                       onClick={() => setActiveCategory(categoryName)}
//                     >
//                       {categoryName}
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>
//           <div>
//             <Link href={"/"} className="flex gap-2 text-[#1268F5]">
//               View All{" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="25"
//                 height="25"
//                 viewBox="0 0 25 25"
//                 fill="none"
//               >
//                 <path
//                   d="M17.6453 19.0736L24.2188 12.5002L17.6453 5.92676L16.5404 7.03164L21.2278 11.719H0.818556V13.2815H21.2277L16.5404 17.9688L17.6453 19.0736Z"
//                   fill="#1268F5"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>
//         <div className="flex flex-wrap gap-4 pt-3">

//           <StudyAbroadCard />
//           <StudyAbroadCard />
//           <StudyAbroadCard />
//           <StudyAbroadCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrendingNewsSection;

import Link from "next/link";
import { useEffect, useState } from "react";
import StudyAbroadCard from "../../card/studyAbroadCard";
import useBlog from "@/src/Hooks/useBlog";
import TrendingCard from "../trendingCard/trendingCard";

const TrendingNewsSection = () => {
  const [activeCategory, setActiveCategory] = useState<any>("All");
  const { NewCategoryData } = useBlog();
  const [filteredData, setFilteredData] = useState<any>([]);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredData(NewCategoryData);
    } else {
      const filtered = NewCategoryData.filter((categoryData) => {
        const categoryName = categoryData.attributes?.category_name;
        return categoryName === activeCategory;
      });
      setFilteredData(filtered);
    }
  }, [activeCategory, NewCategoryData]);

  return (
    <div>
      <div className="lg:p-8 p-4 bg-white rounded-2xl text-primary-text mb-2">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-semibold mb-4">Trending</div>
          <div>
            <Link href={"/news"} className="flex text-lg text-nowrap gap-1 md:gap-2 text-[#1268F5] items-center">
              <span className="sm:text-xl text-sm">View All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={25}
                width={25}
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M17.6453 19.0736L24.2188 12.5002L17.6453 5.92676L16.5404 7.03164L21.2278 11.719H0.818556V13.2815H21.2277L16.5404 17.9688L17.6453 19.0736Z"
                  fill="#1268F5"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex border-b-2 border-b-text-primary-text md:gap-2 lg:gap-6 gap-1">
            <div
              className={`p-1 text-[10px] md:text-[12px] lg:text-base md:p-2 border-b-4 ${activeCategory === "All"
                ? "border-b-[#1268F5]"
                : "border-b-transparent cursor-pointer"
                }`}
              onClick={() => setActiveCategory("All")}
            >
              All
            </div>

            {NewCategoryData &&
              NewCategoryData?.slice(0, 5)?.map((categoryData) => {
                const { attributes } = categoryData;
                const categoryName = attributes?.category_name;
                return (
                  <div
                    key={categoryName}
                    className={`p-1 text-[10px] md:text-[12px] lg:text-base text-nowrap md:p-2 border-b-4 ${activeCategory === categoryName
                      ? "border-b-[#1268F5]"
                      : "border-b-transparent cursor-pointer"
                      }`}
                    onClick={() => setActiveCategory(categoryName)}
                  >
                    {categoryName}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 min-w-min gap-4 overflow-x-scroll">
          {filteredData &&
            filteredData[0]?.attributes?.news?.data?.map(
              (categoryData: { id: any }) => (
                <TrendingCard
                  key={categoryData.id}
                  categoryData={categoryData}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default TrendingNewsSection;
