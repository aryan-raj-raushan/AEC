import Image from 'next/image'
import React from 'react'

import moreBanner3 from "@/public/asserts/more-banner-3.svg";

const Content3 = () => {
  return (
    <div>
        <div className="bg-gradient-to-r opacity-80 from-blue-100 to-white flex justify-center items-center py-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-2 justify-between max-w-screen-xl mx-auto items-center px-8 md:px-4">
          <Image
            className="object-contain lg:w-1/3 md:w-1/2 w-2/3"
            src={moreBanner3}
            alt="more-banner-3"
            height={0}
            width={0}
          />
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <p className="text-md">
              Explore your strengths with our Affinity Education Career
              Assessment Test.
            </p>
            <p>
              The Affinity Education Career Assessment is rooted in the RIASEC
              model, providing detailed career reports with customized
              development plans. Receive tailored career recommendations based
              on a comprehensive assessment of various evaluation parameters.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content3