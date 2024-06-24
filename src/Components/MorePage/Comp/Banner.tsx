import React from 'react'
import { FaUserGroup } from 'react-icons/fa6'
import { PiStudentThin } from 'react-icons/pi'
import { RiBookletLine } from 'react-icons/ri'
import { TiMessages } from 'react-icons/ti'

const Banner = () => {
  return (
    <div>
         <div
        className="h-36 flex justify-center items-center py-10 md:py-16 my-4"
        style={{
          background:
            "linear-gradient(180deg, #050038 0%, #050038 34.9%, #153F72 100%)",
        }}
      >
        <div className="max-w-screen-xl mx-auto sm:px-6 md:px-4 grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-10 text-white overflow-hidden">
          <div className="flex gap-3 items-center border-r-0 lg:border-r border-blue-300 px-0 lg:px-4">
            <div className="w-[30px] md:min-w-[50px]">
              <RiBookletLine size={"35px"} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-xl">1,00,000+</span>
              <p className="text-nowrap">Students taken Test</p>
            </div>
          </div>
          <div className="flex gap-3 items-center border-r-0 lg:border-r border-blue-300 px-0 lg:px-4">
            <div className="w-[30px] md:min-w-[50px]">
              <FaUserGroup size={"35px"} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-xl">1,00,000+</span>
              <p className="text-nowrap ">Students Counselled</p>
            </div>
          </div>
          <div className="flex gap-3 items-center border-r-0 lg:border-r border-blue-300 px-0 lg:px-4">
            <div className="w-[30px] md:min-w-[50px]">
              <TiMessages size={"35px"} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[20px] md:text-[22px]">
                1,00,000+
              </span>
              <p className="text-nowrap">Expert Counsellors</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-[30px] md:min-w-[50px]">
              <PiStudentThin size={"35px"} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[20px] md:text-[22px]">
                1,00,000+
              </span>
              <p className="text-nowrap">Admissions taken</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner