import Image from "next/image";
import { useRouter } from "next/router";

export const CourseTiles = ({ CourseListData, activeExploreCollege }:any) => {
    const CourseTiles = CourseListData?.slice(0, 10)?.map((course: any) => {
      const { attributes } = course;
      const router = useRouter();
      const handleStreamClick = () => {
        router.push({
          pathname: "/colleges",
          query: { course: attributes.course_name },
        });
      };
      return (
        <div
          key={attributes.course_name}
          className="bg-[#F2F7F8] sm:w-40 md:w-60 lg:w-48 xl:w-60 w-28 sm:h-48 h-24 p-1 text-center flex flex-col justify-center items-center sm:gap-4 gap-0 cursor-pointer hover:bg-[#428BC1] hover:text-white transition duration-200 sm:text-base text-sm"
          onClick={handleStreamClick}
        >
          <div>
            <Image
              src={attributes?.logo?.data?.attributes?.url}
              alt=""
              width={60}
              height={60}
              className="sm:w-20 sm:h-20 w-10 h-10"
            />
          </div>
          <div className="sm:text-lg text-xs">{attributes.course_name}</div>
        </div>
      );
    });
  
    if (activeExploreCollege === "Courses") {
      return (
        <>
          {CourseListData?.length > 0 ? (
            CourseTiles
          ) : (
            <div className="flex justify-center items- h-40 lg:w-96 text-2xl ml-28">
              <p className="">No Data Found...</p>
            </div>
          )}
        </>
      );
    }
  };
  