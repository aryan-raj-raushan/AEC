import { useEffect, useState } from "react";
import parse from "html-react-parser";
import useCommonApi from "@/src/Hooks/useCommonApi";
import { FaChevronDown } from "react-icons/fa";

export default function PageInfo({
  title,
  subTitle = "",
  updatedOn,
  SelectedStream,
  pageType,
  description,
}: any) {
  const [isTruncated, setIsTruncated] = useState(true);
  const [streamName, setStreamName] = useState<string>("default");
  const { GetStreamContent } = useCommonApi();
  const [streamData, setStreamData] = useState("");
  const [iconRotation, setIconRotation] = useState(false);

  const toggleTruncate = () => {
    setTimeout(() => {
      setIsTruncated(!isTruncated);
      setIconRotation(!iconRotation);
    }, 500);
  };
  const { loading, error, StreamContent } = GetStreamContent(streamName);

  useEffect(() => {
    if (SelectedStream === null) {
      setStreamName("default");
      if (!loading) {
        setStreamData(StreamContent[0]?.attributes[`content_for_${pageType}`]);
      }
    } else {
      setStreamName(SelectedStream);
      if (!loading) {
        setStreamData(StreamContent[0]?.attributes[`content_for_${pageType}`]);
      }
    }

    if (pageType === "collegeCompare" || pageType === "discussionForum") {
      setStreamData(description);
    }
  }, [SelectedStream, StreamContent]);

  const transitionClass = `transition-all duration-500 ease-in-out`;
  const truncatedClass =
    pageType === "exams" ||
    pageType === "courses" ||
    pageType === "scholarships"
      ? `max-h-[50px] overflow-hidden`
      : `max-h-[85px] overflow-hidden`;
  const expandedClass = `text-justify`;

  return (
    <>
      <div
        className={`relative mb-4 p-4 md:p-5 ${
          updatedOn ? "pt-16" : ""
        } bg-primary-extra-light border border-[#426680] flex flex-col text-center items-center rounded shadow-lg`}
      >
        {StreamContent && StreamContent.length > 0 ? (
          <>
            <div className="absolute bg-[#f2a74233] text-[15px] p-[10px] top-0 right-0 rounded">
              {new Date(StreamContent[0].attributes.updatedAt).toLocaleString()}
            </div>
          </>
        ) : (
          <></>
        )}

        <h1 className="md:text-3xl text-2xl font-bold mb-1 text-center text-[#080165]">
          {`${subTitle} ${title}`}
        </h1>
        {/* {subTitle ? (
          <p className="font-md text-lg mb-3 text-center text-primary-text">
            {subTitle}
          </p>
        ) : (
          <></>
        )} */}

        <>
          <div
            // className={`${
            //   isTruncated
            //     ? "text-center max-h-[95px] overflow-hidden transition-max-height duration-700 ease-in-out"
            //     : "text-justified"
            // } text-primary-text text-md w-full`}
            className={`${transitionClass} ${
              isTruncated ? truncatedClass : expandedClass
            } text-primary-text text-center text-md w-full`}
            // style={{
            //   textAlign: "center",
            // }}
          >
            {/* {parse(streamData)} */}
            {typeof streamData === "string" &&
              streamData !== "" &&
              parse(streamData)}
          </div>

          <div className="flex">
            <button
              onClick={toggleTruncate}
              className="text-primary my-4 text-md flex items-center gap-2 font-semibold relative"
            >
              Read {isTruncated ? "More" : "Less"}
              <FaChevronDown
                className={`ml-1 transition-transform ${
                  iconRotation ? "rotate-180" : ""
                }`}
              />{" "}
            </button>
          </div>
        </>
      </div>
    </>
  );
}
