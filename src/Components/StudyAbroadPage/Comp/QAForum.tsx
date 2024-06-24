import {
  QALottie,
  UniversityFlag_1,
  UniversityFlag_2,
  UniversityFlag_3,
} from "@/src/Asset";
import ColoredTag from "@/src/Components/tag/coloredTag";
import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";

const QAForum = ({
  activeBlogArticalTab,
  AffintiyArticalAndOther,
  handleBlogArticalTabClick,
  AffintiyMediaCard,
  AffintiyNews,
  universityFlags,
}: any) => {
  return (
    <>
      <section className="bg-[#FFFF] px-4">
        <div className="max-w-screen-xl px-4 mx-auto globePadding">
          <div className="md:flex">
            {/* First Row */}
            <div className="md:w-1/2 md:order-1 flex items-center justify-center">
              <div>
                <span className="text-3xl">
                  {" "}
                  <b>Q & A </b> Forum
                </span>
                <br />
                <br />
                <p>
                  If you find yourself with questions or uncertainties about
                  colleges, careers, courses, or exams, do not hesitate to reach
                  out. Simply submit your inquiry, and our team of experts will
                  promptly provide you with a range of viable solutions to
                  address your concerns. Your path to clarity and informed
                  decision-making begins here.
                </p>
                <br />
                <span className="pt-4">
                  <button className="bg-primary text-white py-2 px-4 rounded">
                    Ask a Question
                  </button>
                </span>
              </div>
            </div>
            {/* Second Row */}
            <div className="hidden md:w-1/2 md:order-2 sm:flex items-center justify-center">
              <Lottie animationData={QALottie} loop={true} className="w-3/5" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-5 max-w-screen-xl mx-auto">
        <div className="flex justify-center flex-wrap items-center border-b-text-primary-text gap-4">
          {/* <div
                className={`p-2 border-b-4 cursor-pointer ${
                  activeBlogArticalTab === "ARTICLES"
                    ? "border-b-[#1268F5]"
                    : "border-b-transparent"
                }`}
                onClick={() => handleBlogArticalTabClick("ARTICLES")}
              >
                ARTICLES
              </div> */}
          <div
            className={`p-2 border-b-4 cursor-pointer ${
              activeBlogArticalTab === "BLOG"
                ? "border-b-[#1268F5]"
                : "border-b-transparent"
            }`}
            onClick={() => handleBlogArticalTabClick("BLOG")}
          >
            BLOG
          </div>
          <div
            className={`p-2 border-b-4 cursor-pointer ${
              activeBlogArticalTab === "NEWS"
                ? "border-b-[#1268F5]"
                : "border-b-transparent"
            }`}
            onClick={() => handleBlogArticalTabClick("NEWS")}
          >
            NEWS
          </div>
        </div>

        <div className="flex flex-row gap-8 md:gap-3 my-10 justify-start w-full overflow-x-scroll hide-scrollbar">
          {activeBlogArticalTab === "ARTICLES" && (
            <>{AffintiyArticalAndOther}</>
          )}
          {activeBlogArticalTab === "BLOG" && <>{AffintiyMediaCard}</>}
          {activeBlogArticalTab === "NEWS" && <>{AffintiyNews}</>}
        </div>
      </section>

      <section className="bg-white-to-b from-[#f5f5f7] via-[#f2f2f5] to-[#f5f6f7] py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-black ">
          <div className="flex justify-between items-center gap-10">
            <div className="w-full pr-4 p-4 text-center gap-2">
              <h5 className="mb-2 text-3xl">
                Our <b>University Partners</b>
              </h5>
              <p className="text-center text-base ">
                Admissions counseling is free for students at these
                universities, and we receive a student advisory fee as their
                official partners.
              </p>

              <div className="w-full inline-flex flex-nowrap overflow-hidden sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll m-2">
                  {universityFlags.map((company: any, index: number) => (
                    <li key={index}>
                      <Image src={company.icon} alt="" />
                    </li>
                  ))}
                </ul>
                <ul
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll m-2"
                  aria-hidden="true"
                >
                  {universityFlags.map((company: any, index: number) => (
                    <li key={index}>
                      <Image src={company.icon} alt="" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full pr-4 p-4 text-center ">
            <h5 className="mb-2 text-3xl">
              <b>As featured In</b>
            </h5>
          </div>
          <div className="w-full p-2 text-center ">
            <ColoredTag
              text="PREMIUM REVIEWS+"
              textColor="text-red-800"
              bgColor="bg-[#ECD6E2]"
            />
          </div>
          <div className="w-full p-2 text-center ">
            <div>
              <h5 className="mb-2 text-3xl">
                <b>Our Certifications</b>
              </h5>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  items-center justify-center gap-8">
            {/* Need to add cetificate */}
            <div>
              <Image src={UniversityFlag_1} alt={"college"} />
            </div>
            <div>
              <Image src={UniversityFlag_2} alt={"college"} />
            </div>
            <div>
              <Image src={UniversityFlag_3} alt={"college"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QAForum;
