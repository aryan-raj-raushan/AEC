import { checkmarkSuccess } from '@/src/Asset'
import Image from 'next/image'
import React from 'react'

const GuaranteedSuccess = () => {
  return (
    <>
    <section className="bg-[#F2F2F2] globePadding">
            <div className="max-w-screen-xl mx-auto px-4 text-white ">
              <div className="flex justify-between items-center gap-10">
                <div className="w-full p-4 text-center bg-gradient-to-b from-[#050038] via-[#050038] to-[#153F72] bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div className="text-[#82BBE5]  font-lg rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                    <Image
                      src={checkmarkSuccess}
                      width={55}
                      height={55}
                      alt=""
                    />
                    # Guaranteed Success
                  </div>
                  <div className="mb-1 text-3xl font-bold  text-white-900 dark:text-white">
                    What will you Discover?
                  </div>
                  <div className="grid gap-x-8 gap-y-4 grid-cols-4 pt-5 sm:text-xl text-xs">
                    <div>
                      <span className="font-bold">500 +</span>
                      <br /> Courses
                    </div>
                    <div>
                      {" "}
                      <span className="font-bold">30 +</span> <br /> Additional
                      Certificate
                      <br /> Courses
                    </div>
                    <div>
                      {" "}
                      <span className="font-bold">300 +</span> <br /> Company
                      Placement
                    </div>
                    <div>
                      {" "}
                      <span className="font-bold">500 + </span> <br /> Alumni
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default GuaranteedSuccess