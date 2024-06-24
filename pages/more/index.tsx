import React, { useState } from "react";
import { RootLayouts } from "@/src/Layouts";
import AppBanner from "@/src/Components/appBanner/appBanner";
import GetTuchModal from "@/src/Components/modal/getTuchModal/getTuchModal";
import { useAppSelector } from "@/src/store";
import useGetTuch from "@/src/Hooks/useGetTuch";
import Login from "@/src/Components/Login/Login";
import Testimonial from "../../src/Components/MorePage/Comp/Testimonial";
import HeroSection from "../../src/Components/MorePage/Comp/HeroSection";
import Assessment from "../../src/Components/MorePage/Comp/Assessment";
import Content1 from "../../src/Components/MorePage/Comp/Content1";
import Content2 from "../../src/Components/MorePage/Comp/Content2";
import Content3 from "../../src/Components/MorePage/Comp/Content3";
import Banner2 from "@/src/Components/MorePage/Comp/Banner2";
import Banner from "@/src/Components/MorePage/Comp/Banner";

const MorePage = () => {
  const { CheckGetTuch } = useGetTuch();
  const { number } = useAppSelector((store) => store.auth);

  let isLogin = useAppSelector((state) => state.auth.authState);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { getTuchData } = CheckGetTuch(number);

  const [isGetTuchModalOpen, setIsGetTuchModalOpen] = useState(false);
  const [getTouched, setGetTouched] = useState(false);
  const [selectedTuchType, setSelectedTuchType] = useState(null);
  const [selectedHeading, setSelectedHeading] = useState("");

  const handelGetTuchModalOpen = (tuchType: any) => {
    if (!isLogin) {
      setIsLoginModalOpen(true);
    } else {
      setIsGetTuchModalOpen(!isGetTuchModalOpen);
      setSelectedTuchType(tuchType);
   
    }
  };

  const handelGetTuchModalClose = () => {
    setIsGetTuchModalOpen(!isGetTuchModalOpen);
  };

  return (
    <RootLayouts>
      <div className="min-h-[130px]"></div>
     <HeroSection handelGetTuchModalOpen={handelGetTuchModalOpen}  getTuchData={getTuchData} getTouched={getTouched} setSelectedHeading={setSelectedHeading} />

     <Banner />

     <Assessment />

     <Content1 />
      
      
     <Content2 />

      <Content3 />

     <Banner2 getTuchData={getTuchData} handelGetTuchModalOpen={handelGetTuchModalOpen} getTouched={getTouched} setSelectedHeading={setSelectedHeading} />
      
      <div>
        <Testimonial />
      </div>
     
      <section className="max-w-screen-xl mx-auto px-4 my-12">
        <AppBanner />
      </section>

      {isGetTuchModalOpen && (
        <GetTuchModal
          source={"/more"}
          heading={selectedHeading}
          tuchType={selectedTuchType}
          isOpen={handelGetTuchModalOpen}
          setGetTouch={setGetTouched}
          onClose={handelGetTuchModalClose}
        />
      )}

      {isLoginModalOpen && (
        <Login
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
      )}
    </RootLayouts>
  );
};

export default MorePage;
