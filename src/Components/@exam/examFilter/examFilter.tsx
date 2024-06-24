import { Key, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useCommonApi from "@/src/Hooks/useCommonApi";
import useExmas from "@/src/Hooks/useExmas";
import { useRouter } from "next/router";

export default function ExamFilter({
  setSelectedStream,
  SelectedStream,
  SelectedExamLevel,
  setSelectedExamLevel,
  SelectedExamMode,
  setSelectedExamMode,
  ExamData,
}: any) {
  const [StreamData, setStreamData] = useState([]);
  const { AllStreamData, AllExamLevelData } = useCommonApi();
  const { ExamModeData } = useExmas();
  const [streamOpen, setStreamOpen] = useState(true);
  const [examLevelOpen, setExamLevelOpen] = useState(true);
  const [examModeOpen, setExamModelOpen] = useState(true);
  const [streamSearchTerm, setStreamSearchTerm] = useState("");
  const [examLevelSearchTerm, setExamLevelSearchTerm] = useState("");
  const [examModeSearchTerm, setExamModeSearchTerm] = useState("");

  const handleToggleOpen = (section: string) => {
    if (section === "stream") {
      setStreamOpen((prevState) => !prevState);
    } else if (section === "examLevel") {
      setExamLevelOpen((prevState) => !prevState);
    } else if (section === "examMode") {
      setExamModelOpen((prevState) => !prevState);
    }
  };

  const handleStremChange = (event: { target: { value: any } }) => {
    setSelectedStream(event.target.value);
  };

  const handelExamLevelChange = (event: { target: { value: any } }) => {
    setSelectedExamLevel(event.target.value);
  };
  const handelExamModeChange = (event: { target: { value: any } }) => {
    setSelectedExamMode(event.target.value);
  };

  const router = useRouter();
  useEffect(() => {
    const { stream } = router.query;
    if (typeof stream === "string") {
      setSelectedStream(stream); // Set SelectedStream from query parameter
    }
  }, [router.query]);

  useEffect(() => {
    setStreamData(AllStreamData || []);
  }, [AllStreamData]);

  const filterStreamData = (streamData: any[], searchTerm: string) => {
    return streamData?.filter((stream) =>
      stream?.attributes.stream_name
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase())
    );
  };

  const filterExamLevelData = (AllExamLevelData: any[], searchTerm: string) => {
    return AllExamLevelData?.filter((exam) =>
      exam?.attributes.exam_level_name
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase())
    );
  };

  const filterExamModeData = (allExamModeData: any[], searchTerm: string) => {
    return allExamModeData?.filter((exam) =>
      exam?.attributes.exam_mode
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase())
    );
  };

  // ====

  const sortedStreamData = StreamData?.slice()?.sort((a: any, b: any) => {
    return a?.attributes?.filter_sequence - b?.attributes?.filter_sequence;
  });



  return (
    <>
      <div className="relative bg-white md:block">
        <h3 className="px-2 py-2 my-5 text-primary-text text-lg">
          Showing{" "}
          <span className="font-semibold">
            {ExamData?.data?.length || "0"}{" "}
          </span>{" "}
          {ExamData?.data?.length>1 ? "Exams" : "Exam"}
        </h3>
        {/* Stream Filter */}
        {!SelectedStream && (
          <div className="shadow-lg py-2 px-4 my-4 rounded-lg border">
            <div
              className="px-2 py-2 mb- h-10 flex items-center justify-between rounded-md"
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
                <div className="pt-1 pb-2 ">
                  <div className="mb-4 h-10 relative flex items-center gap-1">
                    <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                    <input
                      placeholder="Search Stream"
                      className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md  py-1 "
                      value={streamSearchTerm}
                      onChange={(e) => setStreamSearchTerm(e.target.value)}
                    />
                  </div>
                  <div
                    className={`px-3 ${
                      sortedStreamData?.length > 10 ? "h-[55vh]" : "h-auto"
                    } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}
                  >
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
                            checked={
                              SelectedStream === stream.attributes.stream_name
                            }
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
                            ({stream?.attributes?.exams?.data?.length})
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

        {/* === Exam Level */}
        {!SelectedExamLevel && (
          <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
            <div
              className="px-2 py-2 h-10 flex items-center justify-between rounded-md"
              onClick={() => handleToggleOpen("examLevel")}
            >
              <span>Exam Level</span>
              {examLevelOpen ? (
                <IoIosArrowDown className="w-4 h-4" />
              ) : (
                <IoIosArrowUp className="w-4 h-4" />
              )}
            </div>
            {examLevelOpen && (
              <>
                <div className="pt-1 pb-2">
                  <div className="mb-4 h-10 relative flex items-center">
                    <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                    <input
                      placeholder="Search Stream"
                      className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md  py-1"
                      value={examLevelSearchTerm}
                      onChange={(e) => setExamLevelSearchTerm(e.target.value)}
                    />
                  </div>
                  <div
                    className={`px-4 ${
                      AllExamLevelData?.length > 10 ? "h-[55vh]" : "h-auto"
                    } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}
                  >
                    {filterExamLevelData(
                      AllExamLevelData,
                      examLevelSearchTerm
                    )?.map((examLevel: any, index: Key | null | undefined) => (
                      <div
                        key={index}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="ExamLevel"
                          id={`ExamLevel_${index}`}
                          value={examLevel?.attributes?.exam_level_name}
                          checked={
                            SelectedExamLevel ===
                            examLevel?.attributes?.exam_level_name
                          }
                          onChange={handelExamLevelChange}
                          className="h-5 w-5 rounded-md"
                        />
                        <label
                          htmlFor={`ExamLevel_${index}`}
                          className="flex-1 cursor-pointer text-sm text-secondary-text hover:text-primary"
                        >
                          {examLevel?.attributes?.exam_level_name}
                        </label>
                        <span className="text-sm text-secondary-text hover:text-primary">
                          ({examLevel?.attributes?.exams?.data?.length})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* ======= Exam Mode */}
        {!SelectedExamMode && (
          <div className="shadow-lg px-4 py-2 my-4 rounded-lg border">
            <div
              className="px-2 py-2 h-10 flex items-center justify-between rounded-md"
              onClick={() => handleToggleOpen("examMode")}
            >
              <span>Exam Mode</span>
              {examModeOpen ? (
                <IoIosArrowDown className="w-5 h-5" />
              ) : (
                <IoIosArrowUp className="w-5 h-5" />
              )}
            </div>
            {examModeOpen && (
              <>
                <div className="pt-1 pb-2">
                  <div className="mb-4 h-10 relative flex items-center gap-1">
                    <CiSearch className="text-[1.6rem] absolute top-2 left-1 text-[#898C8C]" />
                    <input
                      placeholder="Search Stream"
                      className="w-full px-8 bg-transparent border border-[#898C8C] rounded-md  py-1"
                      value={examModeSearchTerm}
                      onChange={(e) => setExamModeSearchTerm(e.target.value)}
                    />
                  </div>
                  <div
                    className={`px-4 ${
                      ExamModeData?.length > 10 ? "h-[55vh]" : "h-auto"
                    } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex flex-col gap-4`}
                  >
                    {filterExamModeData(ExamModeData, examModeSearchTerm)?.map(
                      (examMode: any, index: Key | null | undefined) => (
                        <div
                          key={index}
                          className="flex gap-2 items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="ExamMode"
                            id={`ExamMode_${index}`}
                            value={examMode?.attributes?.exam_mode}
                            checked={
                              SelectedExamMode ===
                              examMode?.attributes?.exam_mode
                            }
                            onChange={handelExamModeChange}
                            className="h-5 w-5 rounded-md"
                          />
                          <label
                            htmlFor={`ExamLevel_${index}`}
                            className="flex-1 cursor-pointer text-sm text-secondary-text hover:text-primary"
                          >
                            {examMode?.attributes?.exam_mode}
                          </label>
                          <span className="text-sm text-secondary-text hover:text-primary">
                            ({examMode?.attributes?.exam_names?.data?.length})
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
