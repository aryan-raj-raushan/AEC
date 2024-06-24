import Image from 'next/image';
import React from 'react'
import onlineTest from "@/public/asserts/Online test.png";

const Banner2 = ({getTuchData, handelGetTuchModalOpen, getTouched, setSelectedHeading}:any) => {
  return (
    <div>
         <div
        className="flex justify-center items-center py-10 md:py-16"
        style={{
          background:
            "linear-gradient(180deg, #050038 0%, #050038 34.9%, #153F72 100%)",
        }}
      >
        <div className="flex flex-col md:flex-row gap-10 md:gap-2 justify-between max-w-screen-xl mx-auto items-center px-8 md:px-4 text-white">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-[40px] leading-tight">
              Start Your{" "}
              <span className="font-bold">Free Career Insight Evaluation</span>
            </h2>

            <p className="text-md">
              Connect with us to gain insights into your career trajectory and
              discover how Affinity Education can help you achieve your goals.
              Reach out to us to learn more about our personalized career
              guidance and support.
            </p>

            <button
              disabled={getTuchData?.length > 1}
              // onClick={() => handelGetTuchModalOpen("Tuch")}
              onClick={() => {
                handelGetTuchModalOpen("Tuch");
                setSelectedHeading("Get Connect with us");
              }}
              className="text-white border-primary border w-fit focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center cursor-pointer"
            >
              {getTuchData?.length > 1
                ? "Already Connected"
                : " Get Connect with us"}
            </button>
          </div>
          <Image
            className="object-contain lg:w-1/3 md:w-1/2 w-2/3"
            src={onlineTest}
            alt="more-middle"
            height={0}
            width={0}
          />
        </div>
      </div>
    </div>
  )
}

export default Banner2