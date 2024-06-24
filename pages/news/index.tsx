import Image from "next/image";
import { useEffect, useState } from "react";
import Separator from "@/src/Components/separator/separator";
import CarouselComponent from "@/src/Components/carousel/carousel";
import useColleges from "@/src/Hooks/useColleges";
import useBlog from "@/src/Hooks/useBlog";
import AppBanner from "@/src/Components/appBanner/appBanner";
import ContainerWithTextBgImg from "@/src/Components/ContainerWithTextBgImg/ContainerWithTextBgImg";
import NewsBanner from "@/src/Components/@news/newsBanner/newsBanner";
import NewsLayouts from "@/src/Layouts/NewsLayouts/Newslayouts";
import FullWidthSkeleten from "@/src/Components/Skeleton/FullWidthSkeleten";
import FeaturedCollegeCard from "@/src/Components/card/FeaturedCollegeCard";
import BasicInformation from "@/src/Components/consultingModule/basicInformation/basicInformation";
import userFrom from "@/src/Hooks/userFrom";
import LatestNews from "../../src/Components/NewsPage/Comp/LatestNews";
import Featured from "../../src/Components/NewsPage/Comp/Featured";
import CollegesSection from "../../src/Components/NewsPage/Comp/CollegesSection";
import ExamSection from "../../src/Components/NewsPage/Comp/ExamSection";
import NewsData from "../../src/Components/NewsPage/Comp/NewsData";
import CoursesSection from "../../src/Components/NewsPage/Comp/CoursesSection";
import useNewsPageHook from "@/src/custom-hooks/useNewsPageHook";

const NewsPage = () => {
  const {NewCategoryData, allNewCategoryLoading ,formatDate,isFeaturedCollegeData,isOpen,selectedCollegeId,FromStep,handleCloseModal,handleOpenModal} = useNewsPageHook();
  return (
    <NewsLayouts>
      {allNewCategoryLoading ? (
        <>
          <FullWidthSkeleten />
        </>
      ) : (
        <>
          <LatestNews NewCategoryData={NewCategoryData} formatDate={formatDate} />

          <div className="max-w-screen-xl mx-auto my-10 px-4">
            <Separator />
          </div>

          {NewCategoryData && NewCategoryData[1]?.attributes?.news?.data?.length > 0 && (
           <Featured NewCategoryData={NewCategoryData} formatDate={formatDate} />

          )}


          {NewCategoryData && NewCategoryData[2]?.attributes?.news?.data?.length > 0 && (
            <CollegesSection NewCategoryData={NewCategoryData} /> 
          )}


          {NewCategoryData && NewCategoryData[3]?.attributes?.news?.data?.length > 0 && (
            <ExamSection NewCategoryData={NewCategoryData} formatDate={formatDate} />
          )}


          {NewCategoryData && NewCategoryData[4]?.attributes?.news?.data?.length > 0 && (
            <section>

              <div className="max-w-screen-xl mx-auto px-4 py-4">
                <div className="flex flex-col gap-6">
                  <h3 className="text-3xl font-semibold">
                    {NewCategoryData[4]?.attributes?.category_name}
                  </h3>

                  {/* Rendering ContainerWithTextBgImg */}
                  <ContainerWithTextBgImg
                    imagePath={
                      NewCategoryData[4]?.attributes?.news?.data[0].attributes
                        ?.featured_image?.data?.attributes?.url
                    }
                  >
                    <div className="h-full flex flex-col gap-5 justify-end text-white">
                      <div className="text-2xl font-bold text-white">
                        {NewCategoryData[4]?.attributes?.news?.data[0]?.attributes?.name
                          .split(" ")
                          .slice(0, 3)
                          .join(" ") + "..."}
                      </div>
                      <div className="border-t border-t-orange-500 h-[1px] w-24"></div>
                      <div className="flex gap-20 text-lg">
                        <div className="w-1/2 leading-7">
                          {NewCategoryData[4]?.attributes?.news?.data[0]?.attributes?.excerpt.slice(
                            0,
                            100
                          )}
                        </div>
                      </div>
                    </div>
                  </ContainerWithTextBgImg>

                  {/* Rendering card components */}
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 text-primary-text justify-between">
                    {NewCategoryData[4]?.attributes?.news?.data
                      .slice(0, 3)
                      .map((data: any, index: any) => (
                        <div key={index} className="flex gap-4">
                          <div>
                            <Image
                              src={
                                data?.attributes?.featured_image?.data
                                  ?.attributes?.url
                              }
                              objectFit="fill"
                              width={100}
                              height={100}
                              alt=""
                              className="w-40 h-24"
                            />
                          </div>
                          <div className="flex flex-col gap-3">
                            <div className="text-[10px]">
                              {/* <span>{data.author} - </span> */}
                              <span className="text-primary-text opacity-80">
                                {formatDate(data?.attributes?.updatedAt)}
                              </span>
                            </div>
                            <div className="font-semibold">
                              {data?.attributes?.name
                                .split(" ")
                                .slice(0, 3)
                                .join(" ") + "..."}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="max-w-screen-xl mx-auto my-10 px-4">
                <Separator />
              </div>
            </section>
          )}


         <NewsData NewCategoryData={NewCategoryData} formatDate={formatDate}/>

          {NewCategoryData && NewCategoryData[6]?.attributes?.news?.data?.length > 0 && (
           <CoursesSection NewCategoryData={NewCategoryData} formatDate={formatDate}/>
          )}

          <section className="my-10">
            <NewsBanner />
          </section>

          <section>
            <div className="max-w-screen-xl mx-auto px-4 py-14">
              <CarouselComponent
                slidesDesktop={4}
                slidesTablet={3}
                title="Featured Colleges"
                slides={
                  isFeaturedCollegeData &&
                  isFeaturedCollegeData?.map((clgData: any, index: any) => {
                    return (
                      <>
                        <FeaturedCollegeCard
                          key={index}
                          college={clgData?.attributes}
                          id={clgData?.attributes?.college_url}
                          college_name={""}
                          city={undefined}
                          state={undefined}
                          onApplyNow={() => handleOpenModal(clgData?.id)}
                        />
                      </>
                    );
                  })
                }
                slideGap={undefined}
              />
              {isOpen && (
                <BasicInformation
                  id={selectedCollegeId}
                  isSectionCheck={"College"}
                  FromStep={FromStep}
                  onClose={handleCloseModal}
                />
              )}
            </div>
          </section>
        </>
      )}

      <section>
        <div className="max-w-screen-xl mx-auto py-10 px-4">
          <AppBanner />
        </div>
      </section>
    </NewsLayouts>
  );
};

export default NewsPage;
