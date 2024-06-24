import { useState } from "react";
import { Loginvector, LoginInfo } from "@/src/Asset/index";
import Image from "next/image";
import OtpHeading from "../heading/heading";
import OtpImg from "../img/img";
import OTPVerification from "../otpVerification/otpVerification";
import { FaPencilAlt } from "react-icons/fa";

const InstituteDetails = ({ onClose }: any) => {
  // let [isSignup, setisSignup] = useState({ show: false });
  // let [isOpen, setisOpen] = useState({ show: true });

  // const handleOpen = () => {
  //   setisOpen({ show: false });
  // };
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErroMessage] = useState("");
  // const [selectedLevel, setSelectedLevel] = useState("");
  // const [selectedStream, setSelectedStream] = useState("");
  const [isSameAsAbove, setIsSameAsAbove] = useState(false);
  const [modalOpen, setModalOpen] = useState("basic");

  const handleCheckboxChange = (event: any) => {
    setIsSameAsAbove(event.target.checked);
  };

  return (
    <>
      {modalOpen === "basic" && (
        <div className="fixed inset-0 flex items-center justify-center !z-[999] bg-gray-500 bg-opacity-30 ">
          <div className="flex items-center justify-center w-full lg:w-[900px] mt-20 h-[550px]">
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
            <div className="w-4/5 md:w-1/2 bg-gradient-to-tl from-[#428BC1] via-[#4280BE] to-[#00529E] relative">
              <button
                onClick={onClose}
                className="cursor-pointer absolute -top-3 -right-3 h-8 w-8 text-white bg-black bg-opacity-70 border rounded-full flex items-center justify-center"
              >
                X
              </button>
              <div className="flex flex-col justify-center mx-4 my-6 md:my-10 md:mx-10">
                <span className="text-white font-semibold text-base text-left font-sans mb-4 md:text-xl">
                  Preferred Institutions
                </span>

                <div>
                  <div className="mt-4">
                    <select
                      name="exam1"
                      className="w-full bg-transparent p-2 outline-none border-white border text-white rounded-lg"
                    >
                      <option value="" className="text-black">
                        Select your preferred college 1
                      </option>
                      <option value="exam1" className="text-black">
                        college 2
                      </option>
                      <option value="exam2" className="text-black">
                        college 3
                      </option>
                      <option value="exam3" className="text-black">
                        college 4
                      </option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <select
                      name="exam1"
                      className="w-full bg-transparent p-2 outline-none border-white border text-white rounded-lg"
                    >
                      <option value="" className="text-black">
                        Select your preferred college 1
                      </option>
                      <option value="exam1" className="text-black">
                        college 2
                      </option>
                      <option value="exam2" className="text-black">
                        college 3
                      </option>
                      <option value="exam3" className="text-black">
                        college 4
                      </option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <select
                      name="exam1"
                      className="w-full bg-transparent p-2 outline-none border-white border text-white rounded-lg"
                    >
                      <option value="" className="text-black">
                        Select your preferred college 1
                      </option>
                      <option value="exam1" className="text-black">
                        college 2
                      </option>
                      <option value="exam2" className="text-black">
                        college 3
                      </option>
                      <option value="exam3" className="text-black">
                        college 4
                      </option>
                    </select>
                  </div>
                  <div className="flex justify-end my-4 text-white">
                    <FaPencilAlt className="cursor-pointer" />
                  </div>
                  <div className="md:mt-[172px] mt-2">
                    <button className="w-full bg-white p-2 font-medium rounded-md">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalOpen === "otp" && <OTPVerification onClose={onClose} />}
    </>
  );
};

export default InstituteDetails;
