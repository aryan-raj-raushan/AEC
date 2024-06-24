import { HomeBanner } from '@/src/Asset';
import TrendingNewsSection from '@/src/Components/@studyAbroad/trendingNewsSection/trendingNewsSection';
import CollegeGallaryCard from '@/src/Components/card/collegeGallaryCard';
import CarouselSideBtn from '@/src/Components/carousel/carousel-side-button';
import Image from 'next/image';
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';
import { slideInFromLeft } from '@/utils/motion';

const CountryCollegeData = ({
    
    slides,
    FilterdCountryData,
    CountrySearch,
    setCountrySearch,
    StudyAbrod

}:any) => {
  return (
    <>
    <section className="stream-carousel">
            <div className="max-w-screen-xl mx-auto px-4">
              <CarouselSideBtn
                buttonBorderColor="border-primary-text"
                buttonTextColor="text-primary-text"
                showPagination={false}
                slidesDesktop={9}
                slidesTablet={5}
                slidesMobile={3}
                slides={slides}
              />
            </div>
            <div className="px-2 py-10 max-w-screen-xl mx-auto w-full">
              <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-4 gap-2 pb-16 flex sm:justify-center md:grid-cols-3 lg:grid-cols-4  overflow-x-scroll hide-scrollbar">
                {FilterdCountryData &&
                  FilterdCountryData[0]?.attributes?.colleges?.data
                    ?.slice(0, 8)
                    ?.map((country: any, index: any) => {
                      return (
                        <CollegeGallaryCard
                          key={index}
                          countryData={country?.attributes}
                          countryId={country?.attributes?.college_url}
                        />
                      );
                    })}
              </div>
            </div>
          </section>

          {/* Trending */}

          <section className="bg-[#F2F2F2] pb-10">
            <div className="max-w-screen-xl px-4 mx-auto">
              <div className="flex justify-center py-14">
                <Image
                  src={HomeBanner}
                  layout="cover"
                  objectFit="cover"
                  alt="study in Australia"
                />
              </div>

              <TrendingNewsSection />
            </div>
          </section>

          {/* End */}

          {/* Study Abroad in any Country of your choice */}

          <section className="bg-[#FAF9F6] text-primary-text py-8">
            <div className="max-w-screen-xl mx-auto px-4">
              <div className="md:flex justify-between items-center gap-10">
                <h3 className="lg:text-4xl text-2xl lg:w-1/2">
                  <b>Study Abroad</b> in any Country of your choice
                </h3>
                <div className="flex items-end gap-2 pt-6 md:pt-16">
                  <input
                    className="rounded-md border-[0.5px] border-primary-extra-light-text w-full bg-white p-2 shadow"
                    placeholder="Search Country..."
                    value={CountrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                  />
                  <div></div>
                </div>
              </div>

              <motion.div
                className="flex gap-4 my-4 justify-start overflow-x-scroll w-full hide-scrollbar"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromLeft(0.5)}
              >
                {StudyAbrod}
              </motion.div>

              <div className="text-center pt-6">
                <button
                  type="button"
                  className="text-white bg-primary  border-2 border-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                >
                  <Link href="/study-abroad/countries">
                    {" "}
                    View All Countries
                  </Link>
                </button>
              </div>
            </div>
          </section>
    </>
  )
}

export default CountryCollegeData