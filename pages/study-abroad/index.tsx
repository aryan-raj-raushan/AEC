import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import NavBar from "@/src/Components/StudyAbroadPage/Comp/NavBar";
import HomeNavbar from "@/src/Shared/Navbar/HomeNavbar";
import { HomeLayouts } from "@/src/Layouts";
import Login from "@/src/Components/Login/Login";
import BrowseExams from "@/src/Components/StudyAbroadPage/Comp/BrowseExams";
import BrowseStream from "@/src/Components/StudyAbroadPage/Comp/BrowseStream";
import Country1 from "@/src/Components/StudyAbroadPage/Comp/Country1";
import Country2 from "@/src/Components/StudyAbroadPage/Comp/Country2";
import CountryCollegeData from "@/src/Components/StudyAbroadPage/Comp/CountryCollegeData";
import ELearning from "@/src/Components/StudyAbroadPage/Comp/ELearning";
import GuaranteedSuccess from "@/src/Components/StudyAbroadPage/Comp/GuaranteedSuccess";
import QAForum from "@/src/Components/StudyAbroadPage/Comp/QAForum";
import StartBanner from "@/src/Components/StudyAbroadPage/Comp/StartBanner";
import TopColleges from "@/src/Components/StudyAbroadPage/Comp/TopColleges";
import WeGotCovered from "@/src/Components/StudyAbroadPage/Comp/WeGotCovered";
import AppBanner from "@/src/Components/appBanner/appBanner";
import GetTuchModal from "@/src/Components/modal/getTuchModal/getTuchModal";
import useStudyAbroadHook from "@/src/custom-hooks/useStudyAbroadHook";
import { ArrowDoubleDownIcon } from "@/src/Asset";
import GradientImage from "@/src/Components/@studyAbroad/studyAbroadGradientImage/studyAbroadGradientImage";
import TestimonialSection from "@/src/Components/homePage/TestimonialSection";
import HeroSection from "@/src/Components/StudyAbroadPage/Comp/Header";

export default function StudyAbroadPage() {
  const {
    AllCollegesData,
    AllStreamData,
    CountryListData,
    AllExamData,
    TestimonialListData,
    AllBlogsDataList,
    AllNewsDataList,
    slides,
    handleNextPage,
    handlePrevPage,
    handelGetTuchModalOpen,
    handelGetTuchModalClose,
    handleSubmit,
    debounce,
    useItemsPerPage,
    handleSearchInputChange,
    AffintiyArticalAndOther,
    AffintiyMediaCard,
    AffintiyNews,
    StudyAbrod,
    collegesNotInIndia,
    searchColleges,
    selectedCountry,
    setSelectedCountry,
    selectedStream,
    setSelectedStream,
    selectedCourse,
    setSelectedCourse,
    isSearchDisabled,
    showNavbar,
    handleLogin,
    handleCloseModal,
    toggleHandler,
    handleBlogArticalTabClick,
    isLogin, 
    isGetTuchModalOpen, 
    emailValue,
    setEmailValue,
    phone,
    setPhone,
    StreamsSelected,
    setStreamsSelected,
    isGetTouched,
    setIsGetTouched,
    shortFormUsername,
    getRandomSubset,
    handleCountrySelect,
    filterData,
    handleLoginButtonClick,
    handleScroll,
    setGetTouch,
    getTouch,
    getTuchData,
    AllCourseData,
    AllCarearDataList,
    AllExamDataList,
    ref,
    controls,
    inView,
    showCountryDropdown,
    setShowCountryDropdown,
    setShowStreamDropdown,
    setShowCourseDropdown,
    showStreamDropdown,
    Streams,
    showCourseDropdown,
    FilterdCountryData,
    CountrySearch,
    setCountrySearch,
    isToCollegeData,
    setName,
    searchQuery,
    StreamTiles,
    setSelectedHeading,
    currentPage,
    totalPages,
    itemsPerPage,
    universityFlags,
    selectedHeading,
    selectedTuchType,
    activeBlogArticalTab,
    name,
  } = useStudyAbroadHook();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Affinity Education</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <HomeLayouts>
          <>
            <NavBar
              handleLoginButtonClick={handleLoginButtonClick}
              authState={shortFormUsername}
              shortFormUsername={shortFormUsername}
              isLoginModalOpen={isLoginModalOpen}
              setIsLoginModalOpen={setIsLoginModalOpen}
            />
          </>

          {!showNavbar && (
            <motion.div transition={{ delay: 0.3, duration: 0.9 }}>
              <HomeNavbar />
            </motion.div>
          )}
          <section className="bg-gradient-to-b from-[#050038] via-[#050038] to-[#153F72] h-max  px-4 mb-16 md:pt-24 pt-14">
            <HeroSection
              handelGetTuchModalOpen={handelGetTuchModalOpen}
              getTouch={getTouch}
              getTuchData={getTuchData}
              collegesNotInIndia={collegesNotInIndia}
              AllCourseData={AllCourseData}
              AllCarearDataList={AllCarearDataList}
              AllExamDataList={AllExamDataList}
              AllCollegesData={AllCollegesData}
            />

            <div className="flex gap-4 justify-center items-center text-white my-12">
              <Image src={ArrowDoubleDownIcon} alt="" />
              Explore More
              <Image src={ArrowDoubleDownIcon} alt="" />
            </div>

            <div className="relative flex justify-center">
              <motion.div
                ref={ref}
                animate={controls}
                className={`absolute md:text-base text-xs -top-8 shadow-lg flex bg-white rounded-full justify-center items-center md:px-2 px-1 gap-2`}
              >
                <Country1
                  inView={inView}
                  showCountryDropdown={showCountryDropdown}
                  setShowCountryDropdown={setShowCountryDropdown}
                  setShowStreamDropdown={setShowStreamDropdown}
                  setShowCourseDropdown={setShowCourseDropdown}
                  selectedCountry={selectedCountry}
                  CountryListData={CountryListData}
                  setSelectedCountry={setSelectedCountry}
                />

                <Country2
                  inView={inView}
                  showStreamDropdown={showStreamDropdown}
                  setShowCountryDropdown={setShowCountryDropdown}
                  setShowCourseDropdown={setShowCourseDropdown}
                  selectedStream={selectedStream}
                  Streams={Streams}
                  setSelectedStream={setSelectedStream}
                  setShowStreamDropdown={setShowStreamDropdown}
                  showCourseDropdown={showCourseDropdown}
                  selectedCourse={selectedCourse}
                  AllCourseData={AllCourseData}
                  setSelectedCourse={setSelectedCourse}
                  isSearchDisabled={isSearchDisabled}
                  searchColleges={searchColleges}
                />
              </motion.div>
            </div>
          </section>

          <CountryCollegeData
            slides={slides}
            FilterdCountryData={FilterdCountryData}
            CountrySearch={CountrySearch}
            setCountrySearch={setCountrySearch}
            StudyAbrod={StudyAbrod}
          />

          <TestimonialSection TestimonialListData={TestimonialListData} />

          <GuaranteedSuccess />

          <TopColleges isToCollegeData={isToCollegeData} />

          <BrowseStream
            searchQuery={searchQuery}
            handleSearchInputChange={handleSearchInputChange}
            StreamTiles={StreamTiles}
            getTuchData={getTuchData}
            getTouch={getTouch}
            handelGetTuchModalOpen={handelGetTuchModalOpen}
            setSelectedHeading={setSelectedHeading}
          />

          <BrowseExams
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            AllExamDataList={AllExamDataList}
          />

          <StartBanner
            handelGetTuchModalOpen={handelGetTuchModalOpen}
            setSelectedHeading={setSelectedHeading}
            getTuchData={getTuchData}
            getTouch={getTouch}
          />

          <ELearning />

          <div className="bg-[#F2F2F2] lg:block hidden py-6 lg:py-16">
            <GradientImage />
          </div>

          <div className="">
            <QAForum
              activeBlogArticalTab={activeBlogArticalTab}
              AffintiyArticalAndOther={AffintiyArticalAndOther}
              handleBlogArticalTabClick={handleBlogArticalTabClick}
              AffintiyMediaCard={AffintiyMediaCard}
              AffintiyNews={AffintiyNews}
              universityFlags={universityFlags}
            />
          </div>

          <WeGotCovered
            name={name}
            setName={setName}
            emailValue={emailValue}
            setEmailValue={setEmailValue}
            phone={phone}
            setPhone={setPhone}
            handleSubmit={handleSubmit}
            isGetTouched={isGetTouched}
            StreamsSelected={StreamsSelected}
            setStreamsSelected={setStreamsSelected}
            AllStreamData={AllStreamData}
            getTuchData={getTuchData}
          />

          <section className="bg-[#F2F2F2]">
            <div className="max-w-screen-xl mx-auto py-10">
              <AppBanner />
            </div>
          </section>

          {isGetTuchModalOpen && (
            <GetTuchModal
              source={"/study-abrod"}
              heading={selectedHeading}
              tuchType={selectedTuchType}
              isOpen={handelGetTuchModalOpen}
              onClose={handelGetTuchModalClose}
              setGetTouch={setGetTouch}
            />
          )}

          {isLoginModalOpen && (
            <Login
              isLoginModalOpen={isLoginModalOpen}
              setIsLoginModalOpen={setIsLoginModalOpen}
            />
          )}
        </HomeLayouts>
      </main>
    </>
  );
}