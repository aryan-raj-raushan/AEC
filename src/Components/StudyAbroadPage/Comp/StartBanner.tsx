import { GreExpert, PinkStarIcon, Rectangle_Circle_1, Rectangle_Circle_2, Rectangle_Circle_3, WhiteStarIcon } from '@/src/Asset';
import Image from 'next/image';
import React from 'react'

const StartBanner = ({
    handelGetTuchModalOpen,
    setSelectedHeading,
    getTuchData,
    getTouch,

}:any) => {
  return (
    <>
    
    <section className="bg-[#F2F2F2] globePadding">
            <div className="max-w-screen-xl mx-auto text-white ">
              <div className="bg-gradient-to-b overflow-hidden rounded-lg from-[#428BC1] via-[#428BC1] to-[#428BC1] bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="md:grid gap-x-8 gap-y-4 grid-cols-3 hidden">
                  <div className="flex justify-start">
                    <Image className="greexpert" src={GreExpert} alt="" />
                  </div>
                  <div className="place-self-center pt-8 gap-2">
                    <div className="relative md:flex hidden bg-pink-light w-max py-[10px] px-6 gap-2 rounded-full text-pink">
                      <Image
                        src={PinkStarIcon}
                        alt=""
                        objectFit="cover"
                        width={15}
                        height={15}
                      />{" "}
                      TEST PREP+
                    </div>
                    <br />
                    <div className="text-3xl">
                      <b>Prepare for success with our GRE experts.</b>
                    </div>

                    <p className="pt-4">
                      Tailored learning strategies and personalized approaches
                      meticulously designed to ensure the attainment of the most
                      favorable and successful educational results.
                    </p>
                    <br />
                    <div className="flex justify-start space-x-2 gap-1">
                      <div>
                        <button
                          type="button"
                          className="text-black bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                        >
                          Start Trial
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            handelGetTuchModalOpen("Test");
                            setSelectedHeading("Take a Diagnostics Test");
                          }}
                          disabled={getTuchData?.length > 0 || getTouch}
                          type="button"
                          className="text-white bg-primary  border-2 border-white color-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                        >
                          {getTuchData?.length > 0 || getTouch
                            ? "Your Detail Already Submited"
                            : " Take a Daignostics Test"}
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="accessKey"
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1049_11452)">
                            <path
                              d="M39.3337 47.7741L51.9814 39.4298L43.6371 26.7821"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.8022 9.11365L9.36774 16.111C8.60683 19.8226 9.35153 23.6845 11.438 26.847C13.5245 30.0096 16.7818 32.2137 20.4934 32.9746L51.9814 39.4299"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1049_11452">
                              <rect
                                width="50"
                                height="50"
                                fill="white"
                                transform="translate(59.8273 10.0498) rotate(101.585)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="w-4 h-4 align-items center access">
                          Assess your standing in
                          <br /> 30 minutes.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="place-self-center justify-end w-auto h-auto crrcil md:block hidden">
                    <div className="text-center">
                      <Image
                        className="whiteStar"
                        src={WhiteStarIcon}
                        alt=""
                        objectFit="cover"
                        width={15}
                        height={15}
                      />
                      <Image
                        className="img-cr"
                        src={Rectangle_Circle_1}
                        alt=""
                      />
                      <span className="text1">Online Courses</span>
                    </div>
                    <Image
                      className="whiteStar1"
                      src={WhiteStarIcon}
                      alt=""
                      objectFit="cover"
                      width={18}
                      height={18}
                    />
                    <div className="text-center">
                      <Image
                        className="img-cr2"
                        src={Rectangle_Circle_2}
                        alt=""
                      />
                      <span className="text2">Personalized Dashboard</span>
                    </div>
                    <div className="text-center">
                      <Image
                        className="whiteStar2"
                        src={WhiteStarIcon}
                        alt=""
                        objectFit="cover"
                        width={18}
                        height={18}
                      />
                      <Image
                        className="img-cr3"
                        src={Rectangle_Circle_3}
                        alt=""
                      />
                      <span className="text3">24/7 Excellent Prep Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default StartBanner