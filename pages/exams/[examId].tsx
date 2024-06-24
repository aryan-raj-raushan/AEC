import Image from "next/image";
import { RootLayouts } from "@/src/Layouts";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AskIcon, HeartIcon } from "@/src/Asset";
import Button from "@/src/Components/button/button";
import Breadcrumb from "@/src/Components/breadcrum/breadcrum";
import useExmas from "@/src/Hooks/useExmas";
import NavbarSlider from "@/src/Components/carousel/navbar-carousal";
import PageDetailsTab from "@/src/Components/PageTabDetail/PageTabDetail";
import FullScreenSkeleton from "@/src/Components/Skeleton/FullScreenSkeleton";

const ExamDetails: React.FC<any> = () => {
  const [currentTab, setCurrentTab] = useState("overview");
  const queryParam = useSearchParams();
  const router = useRouter();
  const examId = router.query.examId as string;
  const [ExamData, setExamData] = useState<any>(null);
  const { GetSingleExamById } = useExmas();
  const tab = queryParam ? queryParam.get("tab") : null;
  const { singleExamData, loading, error } = GetSingleExamById(examId);

  const [TabData, setTabData] = useState([]);
  const [filteredNavbar, setFilteredNavbar] = useState([]);
  const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "Exam", url: "/exams" },
    { label: "JEE Advance", url: "/exams/3" },
  ];

  const handleTab = (value: string) => {
    const filteredData = singleExamData[0]?.attributes?.page_data?.filter(
      (item: any) =>
        item?.overview_section?.data?.attributes?.title === value ||
        item?.faq_section?.data?.attributes?.title === value ||
        item?.gallery_section?.data?.attributes?.title === value ||
        item?.recommended_colleges_section?.data[0]?.attributes?.title ===
          value ||
        item?.recommended_courses_section?.data[0]?.attributes?.title ===
          value ||
        item?.recommended_exams_section?.data[0]?.attributes?.title === value ||
        item?.recommended_careers_section?.data[0]?.attributes?.title ===
          value ||
        item?.recommended_scholarships_section?.data[0]?.attributes?.title ===
          value ||
        item?.recommended_countries_section?.data[0]?.attributes?.title ===
          value ||
        item?.banner_section?.data[0]?.attributes?.title === value
    );

    setTabData(filteredData);

    setCurrentTab(value);
    router.push(`/exams/${examId}/${value.replace(/\s+/g, "-").toLowerCase()}`);

    const filteredTabs = singleExamData[0]?.attributes?.page_data?.filter(
      (item: any) => {
        if (
          item.faq_section &&
          item?.faq_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.gallery_section &&
          item?.gallery_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.overview_section &&
          item?.overview_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.recommended_colleges_section &&
          item?.recommended_colleges_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.recommended_courses_section &&
          item?.recommended_courses_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.recommended_exams_section &&
          item?.recommended_exams_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.recommended_careers_section &&
          item?.recommended_careers_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.recommended_scholarships_section &&
          item?.recommended_scholarships_section?.data?.attributes?.title ===
            value
        ) {
          return true;
        }
        if (
          item.recommended_countries_section &&
          item?.recommended_countries_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.banner_section &&
          item?.banner_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        return false;
      }
    );
    setFilteredNavbar(filteredTabs);
  };

  useEffect(() => {
    if (tab) {
      setCurrentTab(tab);
    }
  }, [tab]);

  useEffect(() => {
    if (
      Array.isArray(singleExamData) &&
      singleExamData.length > 0 &&
      typeof singleExamData[0] === "object" &&
      singleExamData[0] !== null
    ) {
      const attributes = singleExamData[0].attributes;
      setExamData(attributes);
      handleTab(attributes?.nav_items?.data[0]?.attributes?.title);
    } else {
      setExamData(null);
    }
  }, [singleExamData]);

  return (
    <RootLayouts>
      {loading ? (
        <div className="heroSection navbar-PageInfo-responsive">
          <FullScreenSkeleton />
        </div>
      ) : (
        <>
          <section className="heroSection navbar-PageInfo-responsive">
            <div className="relative">
              <img
                src={ExamData?.banner?.data[0]?.attributes?.url}
                alt={ExamData?.exam_name}
                className="w-full h-52 md:h-72 object-cover"
              />
              <div className="absolute h-content inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 text-white flex flex-col gap-4 max-w-screen-xl mx-auto px-4 my-6">
                <div>
                  <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className="flex gap-4">
                  <div className="p-[10px] bg-white rounded h-max">
                    <Image
                      width={93}
                      height={93}
                      alt=""
                      src={ExamData?.logo?.data?.attributes?.url}
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-3">
                    <div className="flex gap-4 items-center">
                      <h1 className="font-bold text-3xl">
                        {ExamData?.exam_name} : {ExamData?.exam_title}
                      </h1>
                    </div>
                    <div className="flex gap-4 justify-end mt-[2.5rem]">
                      <div className="flex gap-2 items-center text-[15px]">
                        <div className="bg-white p-[6px] rounded-full">
                          <Image
                            src={HeartIcon}
                            width={10}
                            height={10}
                            alt=""
                          />
                        </div>
                        Save
                      </div>
                      <div className="flex items-center  text-[15px]">
                        <div className="p-2 rounded-full">
                          <Image src={AskIcon} alt="" />
                        </div>
                        Ask
                      </div>
                      <div>
                        <Button
                          text="Register Now"
                          showHover={false}
                          outline
                          outlineColor="border-white"
                          textColor="text-white"
                          paddingX="px-[10px]"
                          paddingY="py-[10px]"
                          width="w-36"
                          align="text-center"
                        />
                      </div>
                      <div>
                        <Button
                          text="Brochure"
                          showHover={false}
                          icon={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="21"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M12 16.5L7 11.5L8.4 10.05L11 12.65V4.5H13V12.65L15.6 10.05L17 11.5L12 16.5ZM6 20.5C5.45 20.5 4.979 20.304 4.587 19.912C4.195 19.52 3.99934 19.0493 4 18.5V15.5H6V18.5H18V15.5H20V18.5C20 19.05 19.804 19.521 19.412 19.913C19.02 20.305 18.5493 20.5007 18 20.5H6Z"
                                fill="white"
                              />
                            </svg>
                          }
                          outline
                          outlineColor="border-white"
                          textColor="text-white"
                          paddingX="px-[10px]"
                          paddingY="py-[10px]"
                          width="w-36"
                          align="text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="infoOption bg-white flex border-b border-b-prmary-light max-w-screen-xl mx-auto ">
              <NavbarSlider
                buttonBorderColor="border-primary-text"
                buttonTextColor="text-primary-text"
                showPagination={false}
                slidesDesktop={10}
                slidesTablet={5}
                slidesMobile={3}
                slides={ExamData?.nav_items?.data?.map((tab: any) => (
                  <li
                    key={tab?.attributes?.title}
                    className={`${
                      currentTab === tab?.attributes?.title
                        ? "text-primary border-b-2 border-primary"
                        : ""
                    } cursor-pointer list-none hover:text-primary hover:border-b-2 hover:border-primary text-sm mt-3 pb-2 w-max`}
                    onClick={() => handleTab(tab?.attributes?.title)}
                  >
                    {tab?.attributes?.title}
                  </li>
                ))}
              />
            </div>
          </section>
          <section className="mainSection max-w-screen-xl mx-auto">
            <PageDetailsTab TabsData={TabData} page={ExamData} />
          </section>
        </>
      )}
    </RootLayouts>
  );
};

export default ExamDetails;
