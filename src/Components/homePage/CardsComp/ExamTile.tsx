import Image from "next/image";
import { useRouter } from "next/router";

export const ExamTiles = ({ AllStreamData }:any) => {
    const examTiles = AllStreamData?.slice(0, 10)?.map((stream: any) => {
      const { attributes } = stream;
  
      const router = useRouter();
  
      const handleStreamClick = () => {
        router.push({
          pathname: "/exams",
          query: { stream: attributes.stream_name },
        });
      };
  
      return (
        <div
          key={attributes.stream_name}
          className="bg-[#F2F7F8] sm:w-40 md:w-60 lg:w-48 xl:w-60 w-28 sm:h-48 h-24 p-1 text-center flex flex-col justify-center items-center sm:gap-4 gap-0 cursor-pointer hover:bg-blue-300 transition duration-200 "
          onClick={handleStreamClick}
        >
          <div>
            <Image
              src={attributes?.icon?.data[0]?.attributes?.url}
              alt=""
              width={60}
              height={60}
              className="sm:w-20 sm:h-20 w-10 h-10"
            />
          </div>
          <div className="sm:text-lg text-xs">{attributes.stream_name}</div>
        </div>
      );
    });
  
    return <>{examTiles}</>;
  };
  