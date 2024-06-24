import { useRef, useState } from "react";
import { Loginvector, LoginInfo, Arrow } from "@/src/Asset/index";
import Image from "next/image";
import OtpHeading from "@/src/Components/consultingModule/heading/heading";
import OtpImg from "@/src/Components/consultingModule/img/img";

const OTPVerification = ({ onClose }: any) => {
  // let [isSignup, setisSignup] = useState({ show: false });
  // let [isOpen, setisOpen] = useState({ show: true });

  // const handleOpen = () => {
  //   setisOpen({ show: false });
  // };

  const [otp, setOtp] = useState(["", "", "", ""]); // State to store OTP values
  const refs: any = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]; // Refs for each input field

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Move focus to the next input field if value is entered
    if (value && index < 3 && refs[index + 1].current) {
      refs[index + 1].current?.focus(); // Use optional chaining to avoid error
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Handle backspace key
    if (
      e.key === "Backspace" &&
      index > 0 &&
      !otp[index] &&
      refs[index - 1].current
    ) {
      // Clear previous input field and move focus to it
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      refs[index - 1].current?.focus();
    }
  };

  const handleOtpSubmit = (value: string) => {
    console.log("OTP entered:", otp.join(""));
    onClose()
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center !z-[999] bg-gray-500 bg-opacity-30 ">
        <div className="flex items-center justify-center w-full lg:w-[900px] mt-20">
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
          <div className="w-4/5 md:w-1/2 bg-gradient-to-tl from-[#428BC1] via-[#4280BE] to-[#00529E] relative py-4">
            <button
              onClick={onClose}
              className="cursor-pointer absolute -top-3 -right-3 h-8 w-8 text-white bg-black bg-opacity-70 border rounded-full flex items-center justify-center"
            >
              X
            </button>
            <div className="flex flex-col justify-center mb-6 my-12 mx-10">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  className="cursor-pointer text-white"
                  src={Arrow}
                  alt=""
                />
                <h4 className="text-[#FFFFFF] font-semibold text-xl text-left font-sans ">
                  <OtpHeading
                    color="text-white"
                    heading="Verify Mobile Number"
                  />
                </h4>
              </div>

              <p className="text-white">
                A 4 digit One Time Password has been sent to your mobile
                9378852432.
              </p>
              {/* Right panel content */}
              <form className="space-y-2">
                <div className="flex gap-3 font-medium">
                  <div
                    id="otp"
                    className="flex flex-row justify-center text-center mt-5"
                  >
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={refs[index]} // Assign ref to each input field
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        minLength={1}
                        maxLength={1}
                        onBlur={
                          index === 3
                            ? () => handleOtpSubmit(digit)
                            : undefined
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 font-[13px] text-white">
                  Didn’t receive the OTP? Request again in 1:30
                </div>
              </form>
              <div className="flex flex-row py-6 pt-10 md:pt-40 justify-center">
                <button
                  type="submit"
                  className="w-full bg-[#FFFFFF] text-black py-2 rounded-md transition duration-300"
                >
                  Submit OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPVerification;
