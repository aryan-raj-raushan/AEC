import Image from "next/image";
import { RootLayouts } from "@/src/Layouts";
import React from "react";
import {
  AskIcon,
  HeartIcon,
  Overview,
  Sir_Hillary_Scholarship_1,
} from "@/src/Asset";
import Button from "@/src/Components/button/button";
import Breadcrumb from "@/src/Components/breadcrum/breadcrum";
import NavbarSlider from "@/src/Components/carousel/navbar-carousal";
import TableOfContent from "@/src/Components/@scholarship/aboutScholarship/aboutScholarship";
import StudyAbroadCard from "../../card/studyAbroadCard";

const StudyAbroadOverView: React.FC<any> = () => {
  const tabs = [
    { name: "Overview", value: "overview" },
    { name: "Eligibility Criteria", value: "eligibility" },
    { name: "Application Process", value: "applicationProcess" },
    { name: "Key Dates", value: "keyDates" },
    { name: "Award Details", value: "awardDetails" },
    {
      name: "Colleges Accepting Admissions",
      value: "collegesAcceptingAdmissions",
    },
    {
      name: "Courses that we can get Admission In",
      value: "CoursesThatWecangetAdmission",
    },
    { name: "Application Materials", value: "applicationMaterials" },
    { name: "Tips", value: "tips" },
  ];

  const slides = tabs.map((tab: any) => {
    return (
      <div key={tab.name} className="flex flex-col items-center p-2">
        <div className="text-sm text-primary-text w-max">{tab.name}</div>
      </div>
    );
  });

  const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "Study-abroad", url: "/study-abroad" },
    { label: "overView", url: "/study-abroad/1" },
  ];

  return (
    <RootLayouts>
      <section className="heroSection">
        <div className="relative h-56">
          <div className="absolute inset-0 bg-secondary "></div>
          <div className="absolute inset-0 text-white flex flex-col gap-4 max-w-screen-xl mx-auto px-4 my-6">
            <div>
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className="flex gap-4">
              <div className="p-[10px] bg-white rounded h-max">
                <Image width={93} height={93} alt="" src={Overview} />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <div className="flex gap-4 pt-4 items-center">
                  <h1 className="font-bold text-3xl">Sir Edmund Hillary... </h1>
                </div>
                <div>Conducted By : University of Cambridge</div>
                <div className="flex gap-4 justify-end">
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
            slides={slides}
          />
        </div>
      </section>
      <section className="mainSection max-w-screen-xl mx-auto">
        <TableOfContent />
      </section>
    </RootLayouts>
  );
};

export default StudyAbroadOverView;
