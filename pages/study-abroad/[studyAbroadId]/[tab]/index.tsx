import Image from "next/image";
import { RootLayouts } from "@/src/Layouts";
import React, { useEffect, useState } from "react";
import {
  AskIcon,
  CameraIcon,
  HeartIcon,
  LocationFilledIcon,
} from "@/src/Asset";
import Button from "@/src/Components/button/button";
import Breadcrumb from "@/src/Components/breadcrum/breadcrum";
import NavbarSlider from "@/src/Components/carousel/navbar-carousal";
import StarRating from "@/src/Components/starRating/starRating";
import PageDetailsTab from "@/src/Components/PageTabDetail/PageTabDetail";
import useCountry from "@/src/Hooks/useCountry";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import FullScreenSkeleton from "@/src/Components/Skeleton/FullScreenSkeleton";

const StudyAbroadOverView: React.FC<any> = () => {
  const [currentTab, setCurrentTab] = useState("Info");
  const queryParam = useSearchParams();
  const { GetSingleCountryById } = useCountry();
  const router = useRouter();
  const countryId = router?.query?.studyAbroadId as string;
  const { singleCountryData, loading, error } = GetSingleCountryById(countryId);
  const [StudyAbroadData, setStudyAbroadData] = useState<any>();
  const tab = queryParam ? queryParam.get("tab") : null;

  const [TabData, setTabData] = useState([]);
  const [filteredNavbar, setFilteredNavbar] = useState([]);
  const navbar = StudyAbroadData?.nav_items?.data;

  const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "Study-abroad", url: "/study-abroad" },
    { label: StudyAbroadData?.country_name, url: `/study-abroad/${countryId}` },
  ];

  // Function to handle tab selection
  const handleTab = (value: string) => {
    const filteredData = singleCountryData[0]?.attributes?.page_data?.filter(
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
        item?.banner_section?.data[0]?.attributes?.title === value ||
        item?.rating_section?.data[0]?.attributes?.title === value ||
        item?.newsUpdate_section?.data[0]?.attributes?.title === value ||
        item?.discussionForum_section?.data[0]?.attributes?.title === value ||
        item?.colleges_section?.data[0]?.attributes?.title === value ||
        item?.exams_section?.data[0]?.attributes?.title === value ||
        item?.careers_section?.data[0]?.attributes?.title === value ||
        item?.scholarship_section?.data[0]?.attributes?.title === value ||
        item?.courses_section?.data[0]?.attributes?.title === value
    );

    setTabData(filteredData);

    setCurrentTab(value);
    router?.push(
      `/study-abroad/${countryId}/${value?.replace(/\s+/g, "-")?.toLowerCase()}`
    );

    const filteredTabs = singleCountryData[0]?.attributes?.page_data?.filter(
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
        if (
          item.rating_section &&
          item?.rating_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.newsUpdate_section &&
          item?.newsUpdate_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.discussionForum_section &&
          item?.discussionForum_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.colleges_section &&
          item?.colleges_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.exams_section &&
          item?.exams_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.careers_section &&
          item?.careers_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.scholarship_section &&
          item?.scholarship_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.courses_section &&
          item?.courses_section?.data?.attributes?.title === value
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
      Array.isArray(singleCountryData) &&
      singleCountryData.length > 0 &&
      typeof singleCountryData[0] === "object" &&
      singleCountryData[0] !== null
    ) {
      const attributes = singleCountryData[0].attributes;
      setStudyAbroadData(attributes);
      handleTab(attributes?.nav_items?.data[0]?.attributes?.title);
    } else {
      setStudyAbroadData(null);
    }
  }, [singleCountryData]);

  return (
    <RootLayouts>
      {loading ? (
        <div className="heroSection navbar-PageInfo-responsive">
          <FullScreenSkeleton />
        </div>
      ) : (
        <>
          <section className="heroSection navbar-PageInfo-responsive ">
            <div className="relative">
              {/* <Image
						width={100}
						height={100}
						src={StudyAbroadData?.banner?.data[0]?.attributes?.url}
						objectFit=""
						alt={StudyAbroadData?.country_name}
						className="w-full h-60 object-contain"
					/> */}

              <img
                src={StudyAbroadData?.banner?.data[0]?.attributes?.url}
                alt={"Banner"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 text-white flex gap-4 max-w-screen-xl mx-auto px-4 my-6">
                <div className="flex flex-col gap-2">
                  <div className="p-[10px] bg-white rounded">
                    <Image
                      width={100}
                      height={100}
                      alt=""
                      src={StudyAbroadData?.flags?.data?.attributes?.url}
                    />
                  </div>
                  <Button
                    width="93"
                    href={"/"}
                    text="View Media"
                    paddingX="px-[5px]"
                    paddingY="py-[10px]"
                    outline
                    outlineColor="border-white"
                    fontSize="text-xs"
                    icon={
                      <Image src={CameraIcon} width={16} height={16} alt="" />
                    }
                  />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <div>
                    <Breadcrumb items={breadcrumbItems} />
                  </div>
                  <div className="flex gap-4 items-center">
                    <h1 className="font-bold text-3xl">
                      Study in {StudyAbroadData?.country_name}: Find Top
                      Colleges, Courses & Scholarships
                    </h1>
                  </div>

                  <div className="text-sm flex gap-4 items-center">
                    <div className="flex gap-1">
                      <Image src={LocationFilledIcon} alt={""} />
                      {StudyAbroadData?.country_name}, Europe
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="border-l border-white h-6"></div>{" "}
                      <div>User Reviews</div>
                      <StarRating rating={3} />
                      (324)
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end mt-[2rem] absolute bottom-0 right-0 ">
                    <div className="flex gap-2 items-center text-[15px]">
                      <div className="bg-white p-[6px] rounded-full">
                        <Image src={HeartIcon} width={10} height={10} alt="" />
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
                        text="Ask Our Experts"
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
                slides={navbar?.map((tab: any) => (
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
            <PageDetailsTab
              TabsData={TabData}
              page={StudyAbroadData}
              currentTab={currentTab}
            />
          </section>
        </>
      )}
    </RootLayouts>
  );
};

export default StudyAbroadOverView;
