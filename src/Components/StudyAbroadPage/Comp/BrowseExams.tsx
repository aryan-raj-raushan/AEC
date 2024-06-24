import React from 'react'
import { CgArrowLeft, CgArrowRight } from 'react-icons/cg'

import BrowseByExamCard from "@/src/Components/card/browseByExamCard";

const BrowseExams = (
    {
        handlePrevPage,
        handleNextPage,
        currentPage,
        totalPages,
        itemsPerPage,
        AllExamDataList
    }:any
) => {
  return (
    <>
    <section className="bg-[#F7F8F9] pt-4 pb-10">
            <div className="max-w-screen-xl mx-auto px-4">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-3xl text-nowrap">
                    Browse by <b>Exams</b>
                  </div>

                  <div className="">
                    <div className="grid gap-4 grid-cols-2">
                      <button
                        className="cursor-pointer"
                        onClick={handlePrevPage}
                        disabled={currentPage === 0}
                      >
                        <CgArrowLeft />
                      </button>
                      <button
                        className="cursor-pointer"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages - 1}
                      >
                        <CgArrowRight />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="sm:grid flex sm:grid-cols-1 flex-row overflow-x-scroll hide-scrollbar md:grid-cols-2 md:gap-6 gap-3">
                  {AllExamDataList &&
                    AllExamDataList.slice(
                      currentPage * itemsPerPage,
                      (currentPage + 1) * itemsPerPage
                    ).map((exam:any, index:any) => (
                      <BrowseByExamCard
                        key={index}
                        examData={exam.attributes}
                        examId={exam.id}
                      />
                    ))}
                </div>
              </div>
            </div>
          </section>
          </>
  )
}

export default BrowseExams