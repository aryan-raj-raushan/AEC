"use client";
import { CompareBannerCollegeLlogo, CompareBannerImage } from "@/src/Asset";
import Image from "next/image";
import Button from "@/src/Components/button/button";
import { useState } from "react";
import Login from "../../Login/Login";
import BasicInformation from "../../consultingModule/basicInformation/basicInformation";
import userFrom from "@/src/Hooks/userFrom";
import { useAppSelector } from "@/src/store";
import GetTuchModal from "../../modal/getTuchModal/getTuchModal";

export default function GetExpertHelp({
  heading,
  buttonText,
  description,
  logo,
  id
}: any) {
  const { CollegeApplicatonListData } = userFrom();
  const [isGetTuchModalOpen, setIsGetTuchModalOpen] = useState(false);
  let isLogin = useAppSelector((state) => state.auth.authState);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const [selectedTuchType, setSelectedTuchType] = useState(null);
  const [getTouch, setGetTouch] = useState(false);

  const handelGetTuchModalOpen = (tuchType:any) => {
    if (!isLogin) {
      setIsLoginModalOpen(true);
    } else {
      setIsGetTuchModalOpen(!isGetTuchModalOpen);
      setSelectedTuchType(tuchType)
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const FromStep: any = CollegeApplicatonListData?.form_stape;

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const handelGetTuchModalClose = () => {
    setIsGetTuchModalOpen(!isGetTuchModalOpen);
  };
 

  return (
    <div className="relative rounded-lg overflow-hidden sm:h-72 h-40">
      <Image
        src={CompareBannerImage}
        objectFit="fill"
        className="h-full w-full object-fill"
        alt=""
      />
        <div className="absolute inset-0 p-6">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center">
              <h6 className="sm:text-4xl text-lg text-white font-bold uppercase w-9/12 tracking-wide line-clamp-2">
                {heading}
              </h6>
              <div className="bg-white p-2">
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  className="w-10 h-6 sm:w-24 sm:h-16"
                  objectFit="fill"
                  alt=""
                />
              </div>
            </div>
            <div className="sm:text-2xl text-sm text-white line-clamp-2">
              {description}
            </div>
          </div>
          <div className="flex">
            <Button
              text={buttonText}
              onClick={()=>handelGetTuchModalOpen("Tuch")}
              fontWeight="sm:font-bold font-medium"
              paddingX="px-7"
              paddingY="sm:py-3 py-1"
              rounded
              width="w-fit"
              align="text-center"
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <BasicInformation
          FromStep={FromStep}
          isSectionCheck={"College"}
          id={id}
          onClose={handleCloseModal}
        />
      )}
      {isLoginModalOpen && (
        <Login
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
      )}
      {isGetTuchModalOpen && (
            <GetTuchModal
              source={"/get-experthelp-from/colleges"}
              tuchType={selectedTuchType}
              isOpen={handelGetTuchModalOpen}
              onClose={handelGetTuchModalClose}
              heading={heading}
              setGetTouch={setGetTouch}
            />
          )}
    </div>
  );
}
