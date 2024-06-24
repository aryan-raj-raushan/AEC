import { ExpenseCalculator1, Passport, StarsIcon } from '@/src/Asset';
import ColoredTag from '@/src/Components/tag/coloredTag';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ELearning = () => {
  return (
  <>
  
  <section className="bg-[#FFF] pb-10 px-4 globePadding">
            <div className="max-w-screen-xl px-4 mx-auto p-2 bg-scroll">
              <div className="flex justify-between items-center">
                <div className="text-3xl">
                  <b>E-Learning Resources </b>
                </div>
                <div>
                  <Link href={"/"} className="flex gap-2 text-[#1268F5]">
                    View All{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M17.6453 19.0736L24.2188 12.5002L17.6453 5.92676L16.5404 7.03164L21.2278 11.719H0.818556V13.2815H21.2277L16.5404 17.9688L17.6453 19.0736Z"
                        fill="#1268F5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <br />
              <p>
                Discover our dynamic e-learning platform, offering diverse
                courses tailored to your needs. Learn at your own pace, anytime,
                anywhere, with interactive lessons and expert guidance. Join a
                vibrant community of learners, gaining valuable insights and
                skills for personal and professional growth.
                <br />{" "}
                <b className="font-medium text-lg">
                  {" "}
                  Start your journey to success with us today
                </b>
              </p>
              <br />
              <div className="md:flex">
                {/* First Row */}
                <div className="md:w-2/5 md:order-1 flex">
                  <div className="pt-2">
                    <div className="overflow-y-auto h-40  me-2 resourcesScroll">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                        return (
                          <div className="row-span-1 gap-4 col-span-1">
                            <div className="flex gap-4 m-4">
                              <div>
                                <Image
                                  src={ExpenseCalculator1}
                                  alt=""
                                  className="w-40 h-full object-fill"
                                />
                              </div>
                              <div className="flex flex-col">
                                <div className="text-[10px]">
                                  <span>Craig Bator - </span>
                                  <span className="text-primary-text opacity-80">
                                    27 Dec 2020
                                  </span>
                                </div>
                                <div className="font-semibold">
                                  {`Amanda Seyfried became ‘really obsessed’ with ghost stories`}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* Second Row */}
                <div className="md:w-3/5 md:order-2 flex justify-center md:mt-0 mt-5">
                  <div className="w-full border rounded-lg">
                    <a href="#">
                      <Image
                        className="rounded-t-lg object-fill"
                        height={600}
                        src={Passport}
                        alt="img"
                      />
                    </a>
                    <div className="px-4 py-2">
                      <div>
                        {" "}
                        <ColoredTag
                          text="GUIDE"
                          textColor="text-black-800"
                          bgColor="bg-[#ECF0FF]"
                        />
                      </div>
                      <div className="float-end">
                        <Image
                          className="rounded-t-lg"
                          width={80}
                          height={80}
                          src={StarsIcon}
                          alt="img"
                        />
                        {/* Review need to added */}
                      </div>
                      <br />
                      <div className="font-semibold tracking-tight pt-2">
                        Study Abroad Directory: IIE Passport
                      </div>
                      <p>
                        IIE Passport maintains a database of study abroad
                        programs for U.S. students dreaming of learning in a
                        foreign country but not quite sure where to get
                        started...
                      </p>
                      <div className="flex justify-between items-center">
                        <div>1.2k students viewed this Guide</div>
                        <div className="flex gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                              stroke="#020014"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M12 6.75V12H17.25"
                              stroke="#020014"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          December 9, 2023
                        </div>
                      </div>
                      <div className="font-semibold text-[#FF852D]">₹ 999</div>
                      <div className="pt-2">
                        <button className="bg-primary text-white p-[10px] w-full rounded-md">
                          Know More
                        </button>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section></>
  )
}

export default ELearning