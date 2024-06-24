import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, HeroRoketIcons, PinkStarIcon, SalyIllustration } from "@/src/Asset";
import Button from "@/src/Components/button/button";
import HeaderOptions from "@/src/Shared/Navbar/NavbarOptions";
import SearchStudyAbroad from "@/src/Components/@studyAbroad/SearchStudyAbroad/SearchStudyAbroad";

const HeroSection = ({
    handelGetTuchModalOpen , getTouch,getTuchData ,collegesNotInIndia , AllCourseData ,AllCarearDataList,AllExamDataList,AllCollegesData }: any) => {
  return (
    <div className="nav-hero-section max-w-screen-xl relative mx-auto ">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-[45%] bg-white mx-auto px-6 pt-4 pb-2 w-8/12 rounded-lg shadow-lg z-40 max-lg:hidden">
                <HeaderOptions />
              </div>
              <div className="relative bg-white md:p-11 md:pb-0 pb-8 p-3 rounded-lg max-w-[1274px] md:h-[390px]">
                <div className="flex flex-col gap-1">
                  <div className="relative flex bg-blue-200 h-[28px] w-[240px] my-3 mt-4 gap-1 rounded-full text-black px-4 py-1 items-center">
                    <Image
                      src={PinkStarIcon}
                      alt=""
                      objectFit="cover"
                      width={10}
                      height={10}
                      className="w-5 h-5 font-bold"
                    />{" "}
                    We’ve got you covered!
                    <div className="absolute -right-9 -top-2">
                      <Image src={SalyIllustration} objectFit="cover" alt="" />
                    </div>
                  </div>

                  <div className="">
                    <h2 className="text-primary md:text-[36px] sm:text-[26px] text-[18px] font-semibold">
                      PLANNING TO{" "}
                    </h2>
                    <h1 className="text-primary md:text-[46px] sm:text-[36px] text-[24px] font-bold sm:-mt-4 -mt-1">
                      STUDY ABR
                      <Image
                        className="imgGlobe"
                        src={Globe}
                        objectFit="cover"
                        alt=""
                      />
                      AD?
                    </h1>
                  </div>

                  <div className="text-primary-text md:block hidden md:text-[17px] text-[12px] -mt-2 mb-2">
                    Find Your University/College for Overseas Education
                  </div>
                  <div className="sm:block hidden">
                    <SearchStudyAbroad
                      AllCourseData={AllCourseData}
                      AllCarearDataList={AllCarearDataList}
                      AllExamDataList={AllExamDataList}
                      AllCollegesData={AllCollegesData}
                    />
                  </div>
                  <div className="text-[15px] font-light my-2">
                    You need to speak with an Expert?{" "}
                    <button
                      onClick={() => handelGetTuchModalOpen("Tuch")}
                      className="text-[#1268F5] font-medium underline"
                      disabled={getTuchData?.length > 0 || getTouch}
                    >
                      {getTuchData?.length > 0 || getTouch
                        ? "Your Detail Already Submited"
                        : " Click here! "}
                    </button>
                  </div>
                  <div className="md:flex hidden justify-end items-center gap-2 md:pb-5 text-sm tracking-tighter -mt-5 z-10">
                    <div>Trending Searches:</div>
                    <div className="flex gap-2">
                      {collegesNotInIndia && collegesNotInIndia.length > 0 ? (
                        collegesNotInIndia.slice(-2).map((college: any) => (
                          <Link
                            key={college.id}
                            href={`/colleges/${college.attributes?.college_url}`}
                          >
                            <Button
                              text={college.attributes.college_name}
                              filled
                              filledColor="bg-primary"
                              textColor="text-white"
                              paddingX="px-2"
                              paddingY="py-2"
                            />
                          </Link>
                        ))
                      ) : (
                        <p>No colleges found.</p>
                      )}
                    </div>
                  </div>
                </div>
                {/* <div className="absolute lg:-top-36 md:-top-20 sm:-top-14 -top-3 lg:-right-10  md:-right-56 sm:-right-96 -right-[450px]"> */}
                <Image
                  src={HeroRoketIcons}
                  alt="hero-roket-icon"
                  className="absolute lg:-top-[60px] md:top-2 sm:top-1 top-0 lg:right-10 md:right-0 sm:right-0 -right-5 lg:w-[478px] md:w-[350px] sm:w-[200px] w-[180px]  lg:h-[478px] md:h-[350px] sm:h-[200px] h-[180px]"
                />
                {/* </div> */}
              </div>
            </div>
  );
};

export default HeroSection;
