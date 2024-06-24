import { Key, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useCommonApi from "@/src/Hooks/useCommonApi";

export default function CourseFilter({
  setSelectedStream,
  SelectedStream,
  SelectedCourseLevel,
  setSelectedCourseLevel
}: any) {
  const [StreamData, setStreamData] = useState([]);
  const [CourseLevelData, setCourseLevelData] = useState([]);
  const { AllStreamData, AllCourseLevelData} = useCommonApi();

  const [streamOpen, setStreamOpen] = useState(true);
  const [CourseLevelOpen ,setCourseLevelOpen] = useState(true);
  const [streamSearchTerm, setStreamSearchTerm] = useState("");
  const [CourseLevelSearchTerm , setCourseLevelSearchTerm] =  useState("");

  const handleToggleOpen = (section: string) => {
    if (section === "stream") {
      setStreamOpen((prevState) => !prevState);
    } else if (section === "CourseLevel") {
      setCourseLevelOpen((prevState) => !prevState);
    }
  };
  
 
  const handleStremChange = (event: { target: { value: any } }) => {
    setSelectedStream(event.target.value);
  };

  const handelCourseLevelChange = (event: { target: { value: any } }) =>{
    setSelectedCourseLevel(event.target.value)
  }
  useEffect(() => {
    setCourseLevelData(AllCourseLevelData || []);
  }, [AllCourseLevelData]);

  useEffect(() => {
    setStreamData(AllStreamData || []);
  }, [AllStreamData]);



  const filterStreamData = (streamData: any[], searchTerm: string) => {
    return streamData?.filter((stream) =>
      stream?.attributes.stream_name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
  };

  const filterCourseLevelData = (AllCourseLevelData: any[], searchTerm: string) => {
    return AllCourseLevelData?.filter((Course) =>
    Course?.attributes.course_level_name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
  };

  const sortedStreamData = StreamData?.slice()?.sort((a: any, b: any) => {
    return a?.attributes?.filter_sequence - b?.attributes?.filter_sequence;
  });



  // ==== 

  return (
    <>
      <div className="py-5">

        {/* Stream Filter */}
        {!SelectedStream && (
          <div className="shadow-lg px-4 py-2 rounded-lg border">
            <div
              className="px-2 py-2 h-10 flex items-center justify-between rounded-md"
              onClick={() => handleToggleOpen("stream")}
            >
              <span>Stream</span>
              {streamOpen ? (
                <IoIosArrowDown className="w-4 h-4" />
              ) : (
                <IoIosArrowUp className="w-4 h-4" />
              )}
            </div>
            {streamOpen && (
              <>
                <div className="py-1">
                  <div className="mb-4 h-10 relative flex items-center">
                    <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                    <input
                      placeholder="Search Stream"
                      className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md text-sm  py-1"
                      value={streamSearchTerm}
                      onChange={(e) => setStreamSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className={`px-4 ${sortedStreamData?.length > 10 ? 'h-[55vh]' : 'h-auto'} overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}>
                    {filterStreamData(sortedStreamData, streamSearchTerm).map(
                      (stream: any, index: Key | null | undefined) => (
                        <div
                          key={index}
                          className="flex gap-2 items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="StreamName"
                            id={`StreamName_${index}`}
                            value={stream.attributes.stream_name}
                            checked={SelectedStream === stream.attributes.stream_name}
                            onChange={handleStremChange}
                            className="h-5 w-5 rounded-md"
                          />
                          <label
                            htmlFor={`StreamName_${index}`}
                            className="flex-1 cursor-pointer text-sm text-secondary-text hover:text-primary"
                          >
                            {stream?.attributes?.stream_name}
                          </label>
                          <span className="text-sm text-secondary-text hover:text-primary">
                            ({stream?.attributes?.courses?.data?.length})
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* === Course Level */}
        {!SelectedCourseLevel && (
          <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
            <div
              className="px-2 py-2 h-10 flex items-center justify-between rounded-md"
              onClick={() => handleToggleOpen("CourseLevel")}
            >
              <span>Course Level</span>
              {CourseLevelOpen ? (
                <IoIosArrowDown className="w-4 h-4" />
              ) : (
                <IoIosArrowUp className="w-4 h-4" />
              )}
            </div>
            {CourseLevelOpen && (
              <>
                <div className="py-1">
                  <div className="mb-4 h-10 relative flex items-center">
                    <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                    <input
                      placeholder="Search Stream"
                      className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md text-sm py-1"
                      value={CourseLevelSearchTerm}
                      onChange={(e) => setCourseLevelSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className={`px-4 ${AllCourseLevelData?.length > 10 ? 'h-[55vh]' : 'h-auto'} overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}>
                    {filterCourseLevelData(AllCourseLevelData, CourseLevelSearchTerm)?.map(

                      (CourseLevel: any, index: Key | null | undefined) => (
                        <div
                          key={index}
                          className="flex gap-2 items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="CourseLevel"
                            id={`CourseLevel_${index}`}
                            value={CourseLevel?.attributes?.course_level_name}
                            checked={SelectedCourseLevel === CourseLevel?.attributes?.course_level_name}
                            onChange={handelCourseLevelChange}
                            className="h-5 w-5 rounded-md"
                          />
                          <label
                            htmlFor={`CourseLevel_${index}`}
                            className="flex-1 cursor-pointer text-sm text-secondary-text hover:text-primary"
                          >
                            {CourseLevel?.attributes?.course_level_name}
                          </label>
                          <span className="text-sm text-secondary-text hover:text-primary">
                            ({CourseLevel?.attributes?.courses?.data?.length})
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        )}                
      </div>
    </>
  );
}
