import React from "react";
import Image from "next/image";

const AffinityMediaSection = ({
  AffinityMedia,
  active,
  handleTab,
  AffintiyMediaCard,
  ImageCutout,
  AwardCard,
}: any) => {
  return (
    <section className="bg-[#FFFF] px-4">
      <div className="max-w-screen-xl mx-auto px-4 leading-3 sm:leading-5">
        <div className="flex justify-center items-center gap-10">
          <h3 className="sm:text-4xl text-2xl">
            <b>Affinity</b> in{" "}
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-[#153F72] from-70% to-[#050038]">
              Media
            </b>
          </h3>
        </div>
        <div className="flex flex-wrap gap-3 my-10 justify-around">
          <div className="w-full inline-flex flex-nowrap overflow-hidden sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll m-2">
              {AffinityMedia?.map((newsLogo: any) => (
                <li key={newsLogo.id}>
                  <Image src={newsLogo.newspaperLogo} alt="" />
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll m-2">
              {AffinityMedia?.map((newsLogo: any) => (
                <li key={newsLogo.id}>
                  <Image src={newsLogo.newspaperLogo} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 pt-10">
          <button
            className={`px-4 py-2 rounded ${
              active === "articles"
                ? "bg-gray-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleTab("articles")}
          >
            Articles
          </button>
          <button
            className={`px-4 py-2 rounded ${
              active === "newspapers"
                ? "bg-gray-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleTab("newspapers")}
          >
            Newspapers
          </button>
          <button
            className={`px-4 py-2 rounded ${
              active === "awards"
                ? "bg-gray-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleTab("awards")}
          >
            Awards
          </button>
        </div>
        <div className="p-4 rounded">
          {active === "articles" && (
            <div>
              <div className="flex flex-row overflow-x-auto hide-scrollbar gap-8 md:gap-3 my-10 justify-start w-full ">
                {AffintiyMediaCard}
              </div>
            </div>
          )}
          {active === "newspapers" && (
            <div>
              <div className="flex flex-row overflow-x-auto hide-scrollbar gap-8 md:gap-3 my-10 justify-start w-full ">
                {ImageCutout}
              </div>
            </div>
          )}
          {active === "awards" && (
            <div>
              <div className="flex flex-row overflow-x-auto hide-scrollbar gap-8 md:gap-3 my-10 justify-start w-full ">
                {AwardCard}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AffinityMediaSection;
