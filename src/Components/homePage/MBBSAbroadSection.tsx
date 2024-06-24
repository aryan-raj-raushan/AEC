import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import {
  HomePageSectionGirl,
  HomePageSectionBoy,
  CheckBlack,
} from "@/src/Asset/index";

const MBBSAbroadSection = ({
  FeturedListData,
  handelGetTuchModalOpen,
  getTuchData,
}: any) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-start max-w-screen-xl mx-auto mt-16"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="lg:basis-1/2 px-6 flex gap-14"
        variants={slideInFromLeft(0.5)}
      >
        <div className="flex flex-col">
          <Image
            src={HomePageSectionGirl}
            alt={""}
            className="rounded-3xl mb-6"
          />
          <div className="flex flex-col gap-1 border-l-2 border-gray-500 pl-4 mb-4 ">
            <b className="text-2xl text-black font-work-sans font-bold">
              2000 +
            </b>
            <h6 className="text-base font-work-sans tracking-wide font-normal">
              Students got Admissions
            </h6>
          </div>
          <div className="flex flex-col gap-1 border-l-2 border-gray-500 pl-4 ">
            <b className="text-2xl text-black font-work-sans font-bold pl-2">
              100 +
            </b>
            <h6 className="text-base font-work-sans tracking-wide font-normal">
              Students got Admissions
            </h6>
          </div>
        </div>
        <div className="flex flex-col mt-10 gap-6">
          <div className="flex flex-col items-center bg-[#F5F6F6] rounded-2xl p-5 w-4/5">
            <b className="font-sans text-black text-lg font-normal tracking-wide">
              Our Mbbs Team
            </b>
          </div>
          <Image src={HomePageSectionBoy} alt={""} className="rounded-3xl" />
        </div>
      </motion.div>

      <motion.div
        className="lg:basis-1/2 px-4 py-6 font-work-sans"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromRight(0.5)}
      >
        <h6 className="text-[#1268F5] text-base font-bold uppercase pb-4">
          Featured
        </h6>
        <h2 className="text-3xl font-bold text-black font-sans tracking-wider leading-normal pb-2">
          MBBS Abroad
        </h2>
        <div className="pb-4">
          {FeturedListData &&
            FeturedListData.map((fetured: any, ind: number) => {
              const { attributes } = fetured;
              return (
                <React.Fragment key={ind}>
                  {attributes?.text_section?.map((texts: any, index: any) => {
                    return (
                      <div key={index}>
                        <div className="flex items-center gap-2">
                          <Image
                            src={CheckBlack}
                            alt={""}
                            className="inline-block"
                          />
                          <b className="text-xl font-semibold leading-normal text-black">
                            {texts?.header_text}
                          </b>
                        </div>
                        <p className="text-base font-normal tracking-wide font-sans">
                          {texts?.description_text}
                        </p>
                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
        </div>

        <button
          className="rounded-lg px-8 py-2.5 text-white font-work-sans text-base font-medium leading-relaxed bg-[#1268F5] hover:shadow-lg hover:drop-shadow-md transition duration-200"
          onClick={() => handelGetTuchModalOpen("Tuch")}
          disabled={getTuchData?.length > 0}
        >
          {getTuchData?.length > 0 ? "Call is Already Booked" : "Book a call "}
          <span className="ml-1.5"> &rarr;</span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MBBSAbroadSection;
