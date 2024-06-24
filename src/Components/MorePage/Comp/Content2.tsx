import Image from 'next/image'
import React from 'react'
import careerCouncil from "@/public/asserts/Carrer Counselling.png";

const Content2 = () => {
  return (
    <div>
        <div className="bg-gradient-to-r opacity-80 from-blue-100 to-white flex justify-center items-center py-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-2 justify-between max-w-screen-xl mx-auto items-center px-8 md:px-4">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <p className="text-md">
              Unlock your potential with our Affinity Education Career
              Assessment Test.
            </p>
            <p>
              Our Affinity Education Career Assessment is meticulously designed
              to align with the RIASEC model. Gain access to comprehensive
              career reports featuring personalized development plans tailored
              to your unique strengths and aspirations. Receive expert guidance
              and best-fit career recommendations derived from a diverse range
              of evaluation parameters.
            </p>
          </div>
          <Image
            className="object-contain lg:w-1/3 md:w-1/2 w-2/3"
            src={careerCouncil}
            alt="more-banner-2"
            height={0}
            width={0}
          />
        </div>
      </div>
    </div>
  )
}

export default Content2