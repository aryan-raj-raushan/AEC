import { useState } from "react";
import { Loginvector, LoginInfo, Arrow } from "@/src/Asset/index";
import Image from "next/image";
import OtpHeading from "@/src/Components/consultingModule/heading/heading";
import OtpImg from "../img/img";

const WhatsappNotification = () => {
  let [isSignup, setisSignup] = useState({ show: false });
  let [isOpen, setisOpen] = useState({ show: true });

  const handleOpen = () => {
    setisOpen({ show: false });
  };

  return (
    <>
      {isOpen.show ? (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-80">
            <div>
              <Image
                className="cursor-pointer relative top-[-279px] height={20px} left-[423px] text-white"
                src={Arrow}
                alt=""
              />
            </div>
            <button
              onClick={handleOpen}
              className="cursor-pointer relative top-[-285px] height={20px} left-[803px] text-white"
            >
              X
            </button>
            <div className="flex w-[900px]">
              {/* Left Panel */}
              <div className="relative w-2/5 bg-white hidden md:block">
                <div className="flex flex-col items-center">
                  <div className="flex">
                    <OtpImg imagePath={LoginInfo} />
                  </div>
                  {/* Left panel content */}
                  <span className="text-center font-semibold text-[#001761]">
                    <OtpHeading heading="Why we are better than the rest?" />
                  </span>
                  <span className="flex p-8 font-[15px]">
                    <ul className="list-disc list-outside pt-4">
                      <li>
                        Proven Success: 90% admission success rate to top-choice
                        colleges.
                      </li>
                      <li>
                        Expert Guidance: 15+ years average experience of our
                        seasoned counselors.
                      </li>
                      <li>
                        Satisfaction Guaranteed: Join us with confidence - 98%
                        student satisfaction rate.
                      </li>
                    </ul>
                  </span>
                  <div className="absolute text-center bottom-0">
                    <Image src={Loginvector} alt="" />
                  </div>
                </div>
              </div>
              <div className="w-1/2 bg-gradient-to-tl from-[#428BC1] via-[#4280BE] to-[#00529E]">
                <div className="flex flex-col justify-center my-12 mx-10">
                  <span className="text-[#FFFFFF] font-semibold text-xl text-left font-sans mb-4">
                    Explore top-notch college counseling from experts at
                    absolutely no cost!
                  </span>
                  {/* Right panel content */}
                  <form className="space-y-2">
                    <div className="mb-5">
                      <input
                        type="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="flex gap-3 font-medium">
                      <div className="flex w-1/6 text-xs">
                        <input
                          name="countrycode"
                          className="w-full p-2.5 mb-5 rounded-lg border border-[#050138]"
                          placeholder="+91"
                        />
                      </div>
                      <div className="flex w-5/6 text-xs">
                        <input
                          type="number"
                          id="otp"
                          name="otp"
                          className="w-full p-2.5 mb-5 rounded-lg border border-[#050138]"
                          placeholder="Enter 10 digit mobile number"
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <div className="flex items-start mb-5">
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected>
                            Please select preferred level
                          </option>
                          <option value="BTEC">BTEC</option>
                          <option value="Engineering">Engineering</option>
                          <option value="MCA">MCA</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="flex items-start mb-5">
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected>
                            Please Select Preferred Stream
                          </option>
                          <option value="Law">Law</option>
                          <option value="Design">Design</option>
                          <option value="Medical">Medical</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-3 font-medium">
                      <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              className="sr-only peer text-black"
                            />
                            <div className="relative w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-white">
                              Whatsapp number is the same as provided above
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 font-medium">
                      <div className="flex w-1/6 text-xs">
                        <input
                          name="countrycode"
                          className="w-full p-2.5 mb-5 rounded-lg border"
                          placeholder="+91"
                        />
                      </div>
                      <div className="flex w-5/6 text-xs">
                        <input
                          type="number"
                          id="otp"
                          name="otp"
                          className="w-full p-2.5 mb-5 rounded-lg border"
                          placeholder="Whatsapp number"
                        />
                      </div>
                    </div>
                  </form>
                  <div className="flex flex-row py-6 justify-center">
                    <button
                      type="submit"
                      className="w-full bg-[#FFFFFF] text-black py-2 rounded-md transition duration-300"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <></>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default WhatsappNotification;
