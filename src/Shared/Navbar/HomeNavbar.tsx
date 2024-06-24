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
  // MainLogo,
  SearchIcon,
  UserWhiteIcon,
  DownAngleIcon,
} from "@/src/Asset";
import HeaderOptions from "./NavbarOptions";
import MobileNavbar from "./mobileNavbar";
import { RxCross2 } from "react-icons/rx";
import { IoReorderThreeOutline } from "react-icons/io5";
import Login from "@/src/Components/Login/Login";
import { useAppSelector } from "@/src/store";

const HomeNavbar = () => {
  const [togle, setTogle] = useState(false);
  const toggleHandler = () => {
    setTogle(!togle);
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

  const NavLinksConst = [
    { text: "Study Abroad", href: "/study-abroad" },
    { text: "Colleges", href: "/colleges" },
    { text: "Exam", href: "/exams" },
    { text: "Courses", href: "/courses" },
    { text: "Careers", href: "/careers" },
    { text: "Scholarship", href: "/scholarships" },
    { text: "Blogs", href: "/blogs" },
    { text: "News", href: "/news" },
    { text: "More", href: "/more" },
  ];
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true);
  };

  let username = useAppSelector((state) => state.auth.userName);
  let isLogin = useAppSelector((state) => state.auth.authState);
  const [firstName, lastName] = username?.trim().split(" ");
  const shortFormUsername =
    isLogin && generateShortUsername(firstName, lastName);
  function generateShortUsername(firstName: string, lastName: string) {
    const firstInitial = firstName.charAt(0).toUpperCase();
    // const lastInitial = lastName.charAt(0).toUpperCase();
    const shortUsername = firstInitial;
    return shortUsername;
  }

  const handleLogin = () => {
    setIsLoginModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <nav className="bg-[#050038] fixed right-0 left-0 top-0 z-50">
      <div className="flex relative justify-between bg-secondary items-center w-full lg:w-[1320px] lg:px-4 px-2 lg:mx-auto h-[80px]">
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
                src={Logo}
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
          <ul className="flex gap-6 pt-0.5 xl:gap-5 justify-between max-lg:hidden">
            {NavLinksConst.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-white text-base leading-4 text-opacity-85"
                  href={item.href}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5 max-lg:hidden items-center">
          <div
            onClick={handleLoginButtonClick}
            className={`cursor-pointer inline-flex px-4 font-medium text-base bg-[#1268F5] text-white items-center gap-4 h-10 ${
              isLogin ? "rounded-full" : "rounded-md"
            }`}
          >
            <div className="h-auto">
              {!isLogin ? (
                "Login / Sign Up"
              ) : (
                <Link href={"/profile"}>{shortFormUsername}</Link>
              )}
            </div>
          </div>
          <div>
            {/* <div className="text-xs">country</div> */}
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
            <div className="flex gap-1 text-sm mt-1 text-white">
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
            {!isLogin ? (
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
              <Link href={"/profile"}>{shortFormUsername}</Link>
            )}
          </div>
        </div>
      </div>
      {isLoginModalOpen && (
        <div className="flex">
          <Login
            isLoginModalOpen={isLoginModalOpen}
            setIsLoginModalOpen={setIsLoginModalOpen}
          />
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;
