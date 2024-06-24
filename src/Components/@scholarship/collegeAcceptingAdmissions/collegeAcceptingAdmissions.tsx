import React from "react";
import Image from "next/image";
import { Scholarship, Ucc_scholarships_1 } from "@/src/Asset";
import Button from "../../button/button";
import Tag from "../../tag/tags";
import StarRating from "../../starRating/starRating";
import ScholarshipSideBarComponent from "../scholarshipSideBar/scholarshipSideBar";
import Accordian from "../../accordian/accordian";
import AppBanner from "../../appBanner/appBanner";

const CollegeAcceptingAdmissions = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="main flex gap-4 mt-10 pt-10 border-t mx-4 border-t-[#DDDDDD]">
          <div className="w-4/5 overflow-hidden">
            {[1, 2, 3].map((item, index) => {
              return (
                <div>
                  <div className="py-4 border-b-2 border-[#DDDDDD]">
                    <div className="px-4 flex item-center gap-4 shadow-sm rounded border flex-col md:flex-row">
                      <div className="flex items-center">
                        <Image
                          src={Ucc_scholarships_1}
                          alt={"college"}
                          width={150}
                          height={150}
                          className=" object-cover rounded-lg"
                        />
                      </div>
                      <div className="my-4 flex flex-1 flex-col gap-2 border-r border-r-primary-light ">
                        <div className="flex gap-2 flex-wrap items-center">
                          <Tag text={"Chennai, Tamil Nadu "} />
                          <Tag text={"AICTE, Approved "} />
                          <Tag text={"Type: Public "} />
                          <Tag text={"Ranking By: 6"} />
                          {/* <h1>{`Ranking By ${"6"}`}</h1> */}
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold text-primary">
                            IIT Madras - Indian Institute of Technology -
                            [IITM], Chennai
                          </h2>
                        </div>
                        <div className="flex flex-col items-stretch">
                          <div className="pr-4 mr-4 border-r border-extra-light-text flex gap-2 items-center">
                            <p className="text-[#B12704] font-semibold text-lg">
                              ₹ {12679}
                            </p>
                            <p className="text-xs text-secondary-text font-light">
                              BE/B.Tech First year fees
                            </p>
                          </div>
                          <div className="flex">
                            User Reviews:
                            <StarRating rating={3} totalStars={5} />
                          </div>
                          <div className="mt-[10px] tracking-tight pt-1">
                            <div className="flex flex-wrap me-2 items-center gap-1">
                              <Tag text="Dates" color="text-primary" />
                              <Tag
                                text="Application Form"
                                color="text-primary"
                              />
                              <Tag text="Syllabus" color="text-primary" />
                              <Tag text="Results" color="text-primary" />
                              <Tag text="Answer Key" color="text-primary" />
                              <Tag text="Cut Off" color="text-primary" />
                              <Tag text="Analysis" color="text-primary" />
                              <Tag
                                text="Selection Process"
                                color="text-primary"
                                last
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-row gap-1 flex-wrap justify-center md:flex-col md:gap-4 md:my-4 items-center">
                        <Button
                          href={`/college/${"college.id"}`}
                          text="Apply Now"
                          filled
                          fontSize="text-sm"
                          width="w-40"
                          align="text-center"
                          filledColor="bg-secondary"
                        />
                        <Button
                          href={`/college/${"college.id"}`}
                          text="Download Brochure"
                          fontSize="text-sm"
                          width="w-40"
                          align="text-center"
                          filledColor="bg-primary"
                        />
                        <Button
                          href={`/college/${"college.id"}`}
                          text="Compare"
                          outline
                          fontSize="text-sm"
                          width="w-40"
                          textColor="text-[#428BC1]"
                          align="text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-4 hidden w-[300px] md:block">
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <Image
                  src={Scholarship}
                  alt={"college"}
                  width={70}
                  height={70}
                  className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 font-[17px] text-center">
                  Are you Interested in this Scholarship?
                </h5>
                <div className="flex mt-4 md:mt-6 ">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg"
                  >
                    Talk to Experts
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none  text-primary bg-white rounded-lg border border-gray-200"
                  >
                    Get More Info
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <ScholarshipSideBarComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="border border-primary-text-light rounded-md">
          <div className="flex justify-between px-5 py-4 border-b border-b-primary-text-light items-center">
            <p className={"text-primary text-[25px] font-semibold"}>
              Frequently Asked Questions
            </p>
          </div>
          <div className="p-6 flex flex-col gap-4 text-sm">
            <Accordian title="Which courses are offered at IIT Madras for the students?">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </Accordian>
            <Accordian title="Which courses are offered at IIT Madras for the students?">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </Accordian>
            <Accordian title="Which courses are offered at IIT Madras for the students?">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </Accordian>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 mx-auto">
        <AppBanner />
      </div>
    </section>
  );
};

export default CollegeAcceptingAdmissions;
