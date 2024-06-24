import React, { useState } from "react";
import CarouselSideBtn from "../carousel/carousel-side-button";
import Lottie from "lottie-react";
import { Announcement } from "@/src/Asset";

const EventCarousel = ({ EventListData }: any) => {
  return (
    <div className="bg-[#F2F6F7] py-5 flex flex-col justify-center items-center">
      <div className="w-full text-start max-w-screen-xl mx-auto my-3">
        <div className="inline-flex px-2 rounded-lg w-25 h-20 justify-center items-center">
          <h2 className="text-transparent text-3xl font-semibold bg-clip-text bg-gradient-to-b from-amber-400 to-yellow-800">
            Announcement
          </h2>
          <div className="w-[80px]">
            <Lottie animationData={Announcement} />
          </div>
        </div>
      </div>
      <CarouselSideBtn
        buttonBorderColor="border-primary-text"
        buttonTextColor="text-primary-text"
        slidesDesktop={3}
        slidesTablet={1}
        showButton={true} // Enable buttons
        gapCarousel={2}
        transitionSet={98}
        slides={
          EventListData &&
          EventListData?.map((event: any, index: number) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={event.id}
                className={`relative flex justify-center items-center ml-4 w-[370px] h-[370px] ${
                  isEven ? "mt-0" : "mt-10"
                }`}
              >
                <div className="bg-gray-200 p-2 rounded-lg w-[370px] h-[370px] shadow-lg">
                  <img
                    src={
                      event?.attributes?.event_banner?.data[0]?.attributes?.url
                    }
                    alt="Affinity Education Banner"
                    className="w-full h-full object-fill object-center rounded-lg"
                  />
                </div>
              </div>
            );
          })
        }
      />
    </div>
  );
};

export default EventCarousel;
