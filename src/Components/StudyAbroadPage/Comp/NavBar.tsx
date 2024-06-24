// Header.js

import { useState } from 'react';
import { IoReorderThree } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BluePhoneIcon, IndiaFlagIcon, Logo, PeopleMeetingIcon, SendMailIcon } from '@/src/Asset';
import MobileNavbar from '@/src/Shared/Navbar/mobileNavbar';
import Login from '@/src/Components/Login/Login';

const NavBar = ({ handleLoginButtonClick, authState, shortFormUsername, isLoginModalOpen, setIsLoginModalOpen }:any) => {
  const [togle, setTogle] = useState(false);

  const toggleHandler = () => {
    setTogle(!togle);
  };

  return (
    <>
      <motion.div
        key="top-header"
        className={`bg-[#050038] h-fit z-50 transition-transform transform`}
      >
        <div className="top-header flex items-center  justify-between py-3 lg:mx-auto pt-[10px] max-w-screen-xl">
          <div className="logo">
            <Link href={"/"}>
              <Image src={Logo} alt="" />
            </Link>
          </div>
          <div className="lg:flex text-xs hidden gap-2 justify-center items-center">
            <div className="flex gap-4 text-white items-center text-sm cursor-default">
              <div>
                <Image src={BluePhoneIcon} alt="Phone" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">Telephone Number</div>
                <div>+91-9311431087</div>
              </div>
            </div>
            <div className="flex gap-4 text-white items-center text-sm cursor-default">
              <div>
                <Image src={SendMailIcon} alt="Phone" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">Email Address</div>
                <div>info@affinityeducation.in</div>
              </div>
            </div>
            <div className="flex gap-4 text-white items-center text-sm ">
              <div>
                <Image src={PeopleMeetingIcon} alt="Phone" />
              </div>
              <div className="flex flex-col gap-1 cursor-default">
                <div className="font-semibold">Forums & Community</div>
                <div>Join Our QA Forums</div>
              </div>
            </div>
          </div>
          <div className="lg:flex hidden text-white gap-3">
            {!authState ? (
              <div
                onClick={handleLoginButtonClick}
                className="flex gap-2 items-center text-primary cursor-pointer"
              >
                <div className="cursor-pointer inline-flex px-4 font-medium text-base bg-[#1268F5] text-white items-center gap-4 h-10 rounded-lg">
                  Login / Sign Up
                </div>
              </div>
            ) : (
              <Link
                className="rounded-full border w-8 h-8 flex items-center justify-center bg-blue-500"
                href={"/profile"}
              >
                {shortFormUsername}
              </Link>
            )}

            <div className="flex gap-1 items-center">
              <Image
                src={IndiaFlagIcon}
                width={24}
                height={24}
                alt={"countryFlag"}
              />
              {/* <Image
                  src={DownAngleThinIcon}
                  width={14}
                  height={14}
                  alt={"approvedBy"}
                /> */}
            </div>
            <div className="">
              {isLoginModalOpen ? (
                <div className="flex">
                  <Login
                    isLoginModalOpen={isLoginModalOpen}
                    setIsLoginModalOpen={setIsLoginModalOpen}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="flex gap-1 text-sm items-center">
              EN
              {/* <Image
                  src={DownAngleThinIcon}
                  width={14}
                  height={14}
                  alt={"approvedBy"}
                /> */}
            </div>
          </div>
          <div onClick={toggleHandler} className="lg:hidden block">
            <span className="text-2xl font-bold text-white">
              <IoReorderThree />
            </span>
          </div>
          {togle && (
            <div className="animate-slide-left-to-right absolute top-20 mt-2 bg-white left-0 sm:w-[350px] w-full min-h-screen overflow-y-auto shadow-lg hide-scrollbar z-40">
              <MobileNavbar />
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
