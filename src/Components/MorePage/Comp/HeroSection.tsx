import Image from 'next/image';
import React from 'react'
import confusedAbout from "@/public/asserts/Confused about your career.png";

const HeroSection = ({handelGetTuchModalOpen , getTuchData, getTouched, setSelectedHeading}:any) => {
  return (
    <div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-1 justify-between max-w-screen-xl mx-auto items-center px-8 md:px-4">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-xl md:text-[40px] leading-tight">
            Confused about{" "}
            <span className="font-bold">the best career fit</span> for you?
          </h2>
          <p className="text-md">
            Discover your strengths and interests for a better career fit with
            our Affinity Education Career Assessment.
          </p>

          <button
            disabled={getTuchData?.length > 0 || getTouched}
            onClick={() => {
              handelGetTuchModalOpen("Tuch");
              setSelectedHeading("Begin Test");
            }}
            className="text-black border-primary border   focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg w-fit text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            {getTuchData?.length > 0 || getTouched
              ? "Your Detail Already Submited"
              : " Begin Test"}
          </button>
        </div>
        <Image
          className="object-contain lg:w-1/3 md:w-1/2 w-2/3"
          src={confusedAbout}
          alt="more-hero"
          height={0}
          width={0}
        />
      </div>
    </div>
  )
}

export default HeroSection