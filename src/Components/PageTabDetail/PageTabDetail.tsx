import { ListYellowBulletIcon } from "@/src/Asset";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import UpdateDateArticle from "../updatedDateArticle/updatedDateArticle";
import Accordian from "@/src/Components/accordian/accordian";
import AppBanner from "@/src/Components/appBanner/appBanner";
import CollegeSideBarComponent from "../@college/collegeSideBar/collegeSideBar";
import PageData from "../pageData/pageData";
import Reviews from "../reviews/reviews";
import ReviewBanner from "../reviewBanner/reviewBanner";
import Link from "next/link";
import Loader from "../Loader/Loader";

const PageDetailsTab = ({ TabsData, page, currentTab , id ,loading}: any) => {
  const [RatingsBanner, setRatingsBanner] = useState(false);
  const [ShowTableOfContent, setShowTableOfContent] = useState(true);
  const [ShowSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    setRatingsBanner(false);
    setShowTableOfContent(true);
    setShowSidebar(true);

    if (currentTab === "Ratings and Reviews") {
      setShowTableOfContent(false);
      setRatingsBanner(true);
    } else if (currentTab === "News") {
      setShowTableOfContent(false);
      setShowSidebar(false);
    } else if (currentTab === "Discussion Forum") {
      setShowTableOfContent(false);
      setShowSidebar(false);
    } else if (currentTab === "College Compare") {
      setShowTableOfContent(false);
      setShowSidebar(false);
    }
  }, [currentTab]);
 


  const scrollToSection = (index: number, offset: number) => {
    const section = document.getElementById(`section-${index}`);
    
    if (section) {
      setTimeout(() => {
        const topPos = section.offsetTop;
        window.scrollTo({ top: topPos - offset+40, behavior: "smooth" });
      }, 1);
    }
  };
 

  
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll event
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center mt-4">
        <Loader />
      </div>
    );
  }
 
  return (
    <section className="py-2">
      <section className="tableContentSection px-2 lg:px-4 ">
        <div className="flex flex-col mb-2 mt-1">
          <UpdateDateArticle dateTime={page?.updatedAt?.slice(0, 10)} />
        </div>
        {RatingsBanner ? <ReviewBanner bannerData={page} id={id} /> : <></>}
        <div className="flex gap-4 max-w-screen-xl mx-auto mb-4">
          <div className="flex-1 flex flex-col gap-4" key={page?.id}>
            {ShowTableOfContent ? (
               <Accordian title="Table of Content" titlePrimary opened>
               <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                 {TabsData?.map((table: any, index: any) => {
                   let label;
                   switch (table?.__typename) {
                     case "ComponentCommonRecommendedColleges":
                       label = "Recommended Colleges";
                       break;
                     case "ComponentCommonRecommendedCourses":
                       label = "Recommended Courses";
                       break;
                     case "ComponentCommonRecommendedExams":
                       label = "Recommended Exams";
                       break;
                     case "ComponentCommonRecommendedCareers":
                       label = "Recommended Careers";
                       break;
                     case "ComponentCommonRecommendedScholarships":
                       label = "Recommended Scholarships";
                       break;
                     case "ComponentCommonRecommendedCountries":
                       label = "Recommended Countries";
                       break;
                     default:
                       label = table?.heading;
                   }

                   return (
                     <div key={index}>
                       <div className="flex gap-4">
                         <div>
                           <Image
                             src={ListYellowBulletIcon}
                             width={20}
                             height={20}
                             alt=""
                           />
                         </div>
                         <div className="font-medium text-primary cursor-pointer">
                           <a
                             href={`#section-${index}`}
                             onClick={() => scrollToSection(index,200)}
                           >
                             {label}
                           </a>
                         </div>
                       </div>
                     </div>
                   );
                 })}
               </div>
             </Accordian>
            ) : (
              <></>
            )}

            {TabsData?.map((tabData: any, index: number) => {
              return (
                <section id={`section-${index}`} key={index} >
                  <PageData
                    TabData={tabData}
                    pageData={page}
                    key={index}
                    id={index}
                  />
                </section>
              );
            })}
          </div>


          <div className="hidden md:block">
            {ShowSidebar ? (
              <CollegeSideBarComponent CollegeGalleryData={page} TabsData={TabsData}  scrollPosition={scrollPosition} />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div>
          <AppBanner />
        </div>
      </section>
      <div className="page-data-wrapper"></div>
    </section>
  );
};

export default PageDetailsTab;
