import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AskIcon,
  DownArrow,
  CrossIcon,
  HamburgerIcon,
  IndianLogo,
  LoginUserIcon,
  Logo,
  MainLogo,
  SearchIcon,
  UserWhiteIcon,
} from "@/src/Asset";
import HeaderOptions from "./NavbarOptions";
import MobileNavbar from "./mobileNavbar";
import { RxCross2 } from "react-icons/rx";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useAppSelector } from "@/src/store";
import Login from "@/src/Components/Login/Login";

const Navbar = () => {
  const { userName, authState } = useAppSelector((store) => store.auth);
  const [firstName, lastName] = userName?.trim()?.split(" ");
  const shortFormUsername =
    authState && generateShortUsername(firstName, lastName);

  function generateShortUsername(firstName: string, lastName: string) {
    const firstInitial = firstName.charAt(0).toUpperCase();
    // const lastInitial = lastName.charAt(0).toUpperCase();
    const shortUsername = firstInitial;
    return shortUsername;
  }

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const [togle, setTogle] = useState(false);
  const toggleHandler = () => {
    setTogle(!togle);
  };

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setTogle(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex-no-wrap fixed top-0 !z-[999] flex  w-full bg-[#FFFFFF] shadow">
      <div className="flex relative justify-between bg-secondary lg:bg-white items-center w-full lg:w-[1320px] lg:px-4 px-2 lg:mx-auto h-[89px]">
        {togle && (
          <div className="animate-slide-left-to-right absolute top-20 mt-2 bg-white left-0 sm:w-[350px] w-full min-h-screen overflow-y-auto shadow-lg hide-scrollbar">
            <MobileNavbar />
          </div>
        )}
        <div className="flex gap-4 items-center">
          <div className="block lg:hidden px-2">
            {!togle ? (
              <span
                onClick={toggleHandler}
                className="text-2xl text-white font-bold cursor-pointer"
              >
                <IoReorderThreeOutline />
              </span>
            ) : (
              <span
                onClick={toggleHandler}
                className="text-2xl text-white font-bold cursor-pointer"
              >
                <RxCross2 />
              </span>
            )}
          </div>

          <div className="logo">
            <Link href={"/"} className="lg:w-[1410px] min-w-[100px]">
              <Image
                src={MainLogo}
                width={141}
                height={54}
                alt="Affinity Logo"
                className="max-lg:hidden lg:min-w-[141px] min-w-[100px] object-cover"
              />
              <Image
                src={Logo}
                width={92}
                height={33}
                alt="Affinity Logo"
                className="hidden max-lg:block"
              />
            </Link>
          </div>
        </div>
        <div className="">
          <HeaderOptions />
        </div>
        <div className="flex gap-4 max-lg:hidden items-center">
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
              className="rounded-full border h-10 w-10 flex items-center justify-center bg-blue-400"
              href={"/profile"}
            >
              {shortFormUsername}
            </Link>
          )}
          <div>
            <div className="flex gap-1 mt-1">
              <Image
                src={IndianLogo}
                width={24}
                height={24}
                alt={"countryFlag"}
              />
              {/* <Image
                src={DownArrow}
                width={14}
                height={14}
                alt={"approvedBy"}
              /> */}
            </div>
          </div>
          <div>
            {/* <div className="text-xs">Language</div> */}
            <div className="flex gap-1 text-sm mt-1">
              EN
              {/* <Image
                src={DownArrow}
                width={14}
                height={14}
                alt={"approvedBy"}
              /> */}
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="flex gap-6 text-white text-sm">
            <div className="flex flex-col gap-2 items-center">
              <Image src={AskIcon} width={20} height={20} alt="" />
              Ask
            </div>
            {!authState ? (
              <div
                onClick={handleLoginButtonClick}
                className="flex flex-col gap-2 items-center cursor-pointer"
              >
                <Image
                  src={UserWhiteIcon}
                  width={20}
                  height={20}
                  alt="avatar"
                />
                Login
              </div>
            ) : (
              <Link href={"/profile"} className="w-full">
                <div className="">{shortFormUsername}</div>
              </Link>
            )}
          </div>
        </div>
      </div>
      {isLoginModalOpen && (
        <div className="flex !z-[9999]">
          <Login
            isLoginModalOpen={isLoginModalOpen}
            setIsLoginModalOpen={setIsLoginModalOpen}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
