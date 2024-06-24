import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RootLayouts } from "@/src/Layouts";
import AppliedFilter from "@/src/Components/appliedFilters/appliedFilter";
import PageInfo from "@/src/Components/PageInfo/PageInfo";
import ExamListItem from "@/src/Components/examComponents/examListItem/examListItem";
import ExamPrimaryCard from "@/src/Components/examComponents/cards/examPrimaryCard";
import ExamSecondaryCard from "@/src/Components/examComponents/cards/examSecondaryCard";
import AppBanner from "@/src/Components/appBanner/appBanner";
import { SearchIcon, SortIcon } from "@/src/Asset";
import CarouselComponent from "@/src/Components/carousel/carousel";
import useExmas from "@/src/Hooks/useExmas";
import useCommonApi from "@/src/Hooks/useCommonApi";
import ExamFilter from "@/src/Components/@exam/examFilter/examFilter";
import FullWidthSkeleten from "@/src/Components/Skeleton/FullWidthSkeleten";
import CardSkeleten from "@/src/Components/Skeleton/CardSkeleten";
import { CgSortAz } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useAppSelector } from "@/src/store";
import useUserSignup from "@/src/Hooks/useSignup";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import { ID } from "@/types/global";
import BasicInformation from "@/src/Components/consultingModule/basicInformation/basicInformation";
import userFrom from "@/src/Hooks/userFrom";
import Swal from "sweetalert2";
import { useQuery } from "@apollo/client";
import { GET_USER_METADATA_EXAM } from "@/src/graphql/userMetaData/userMetaData";
import { useRouter } from "next/router";
import Login from "@/src/Components/Login/Login";

const ExamPage = () => {
  const [searchQuery, setSearchQuery] = useState<any>("");
  const {
    GetExamByFilter,
    isFeaturedExamData,
    isTopExameData,
    allExamLoading,
    GetSingleExamById,
  } = useExmas();

  const router = useRouter();
  const examId = router.query.examId as string;
  const { singleExamData } = GetSingleExamById(examId);

  const [ExamDataList, setExamDataList] = useState<any>([]);
  const [SelectedStream, setSelectedStream] = useState<any>(null);
  const [SelectedExamLevel, setSelectedExamLevel] = useState<any>(null);
  const [SelectedCountry, setSelectedCountry] = useState<any>("India");
  const [SelectedState, setSelectedState] = useState<any>(null);
  const { AllStreamData, AllExamLevelData } = useCommonApi();
  const [StreamData, setStreamData] = useState<any>([]);
  const [ExamLevelData, setExamLevelData] = useState<any>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [start, setStart] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [SelectedExamMode, setSelectedExamMode] = useState<any>("");
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [sortModal, setSortModal] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState<any>([]);
  const [selectedExamId, setSelectedExamId] = useState(null);
  const { CollegeApplicatonListData } = userFrom();

  useEffect(() => {
    setStreamData(AllStreamData || []);
  }, [AllStreamData]);

  useEffect(() => {
    setExamLevelData(AllExamLevelData || []);
  }, [AllExamLevelData]);

  const { ExamData, loading, error } = GetExamByFilter(
    SelectedStream,
    SelectedExamLevel,
    start,
    pageSize,
    searchQuery,
    SelectedExamMode,
    sortOption,
    SelectedState
  );

  const handleSearchInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(event.target.value);
  };

  // Update the handleLoadMore function to remove the scroll related logic
  const handleLoadMore = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!loading && hasMore) {
      setLoadingMore(true);
      setPageSize((prevPageSize) => prevPageSize + 5);
      setStart((prevStart) => prevStart + 1);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSort = (option: React.SetStateAction<string>) => {
    setSortOption(option ? [option] : []);
    setIsOpen(false);
  };

  // useEffect to scroll back to the saved position after loading more content
  useEffect(() => {
    if (!loading && loadingMore) {
      setLoadingMore(false);
    }
  }, [loading, loadingMore]);

  useEffect(() => {
    if (ExamData) {
      if (ExamData?.data && ExamData?.data?.length > 0) {
        setExamDataList(ExamData?.data);
      } else {
        setHasMore(false);
      }
    }
  }, [ExamData, pageSize]);

  const GetSelectedSteamData =
    AllStreamData &&
    AllStreamData.filter(
      (stream: { attributes: { stream_name: any } }) =>
        stream?.attributes?.stream_name.toLowerCase() ===
        SelectedStream?.toLowerCase()
    );
  // useEffect(() => {
  //   setFilterModal(false);
  // }, [SelectedStream, setSelectedExamLevel]);

  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const { getUserMetaData, saveExam } = useUserMetaData();
  const userMetaId: ID = getUserDataMetaId(userID);
  const { userAllMetaData } = getUserMetaData(userMetaId);
  const AppliedExam = userAllMetaData?.applied_exams;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = (examId: any) => {
    setSelectedExamId(examId);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const FromStep: any = CollegeApplicatonListData?.form_stape;

  // =============== save ============
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const selectedId = singleExamData && singleExamData[0]?.id;

  let isLogin = useAppSelector((state) => state.auth.authState);

  const { data: ExamMetaUser } = useQuery(GET_USER_METADATA_EXAM, {
    variables: { id: userMetaId },
  });

  const [selectedSave, setSelectedSave] = useState<any>({ data: [] });
  const [isSaveExam, setIsSaveExam] = useState<any>(null);
  const [isSave, setIsSave] = useState<boolean>(false);

  useEffect(() => {
    setIsSaveExam(ExamMetaUser);
  }, [ExamMetaUser]);

  useEffect(() => {
    if (ExamMetaUser) {
      const fetchedExam =
        ExamMetaUser?.usersMetaDataes?.data[0]?.attributes?.save_exam?.flatMap(
          (exam: { exams: { data: any[] } }) =>
            exam?.exams?.data?.map((c: any) => ({
              id: c?.id,
              attributes: {
                exams: c?.id,
              },
            }))
        );
      setSelectedSave({ data: fetchedExam });
    }
  }, [ExamMetaUser]);

  useEffect(() => {
    if (selectedId) {
      const isAlreadySaved = selectedSave?.data?.some(
        (item: any) => item?.attributes?.exams === selectedId
      );

      if (!isAlreadySaved) {
        setSelectedSave((prev: any) => ({
          data: [
            ...prev?.data,
            {
              id: uniqueId(),
              attributes: {
                exams: selectedId,
              },
            },
          ],
        }));
      }
    }
  }, [selectedId]);

  const uniqueId = () => Math.random().toString(36).substr(2, 9);

  const handelSave = async () => {
    try {
      if (isLogin) {
        const response = await saveExam({
          variables: {
            id: userMetaId,
            save_exam: selectedSave?.data?.map(
              (item: { attributes: { exams: any } }) => ({
                exams: item?.attributes?.exams,
              })
            ),
          },
        });

        if (response?.data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Saved",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsSave(true);
        }
      } else {
        setIsLoginModalOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const AlreadyApplyedFilter =
    isSaveExam?.usersMetaDataes?.data[0]?.attributes?.save_exam?.filter(
      (item: any) => item?.exams?.data[0]?.id === selectedExamId
    );

  return (
    <RootLayouts>
      <section className="navbar-landingPage-responsive">
        <div className="max-w-screen-xl px-4 mx-auto mt-2">
          <AppliedFilter
            setSelectedStream={setSelectedStream}
            SelectedStream={SelectedStream}
            setSelectedExamLevel={setSelectedExamLevel}
            SelectedExamLevel={SelectedExamLevel}
            setSelectedExamMode={setSelectedExamMode}
            SelectedExamMode={SelectedExamMode}
            setSelectedCountry={setSelectedCountry}
            SelectedCountry={SelectedCountry}
          />
          <div className={`p-2 -mt-`}>
            {ExamDataList.length === 0 && loading ? (
              <div>
                <FullWidthSkeleten />
              </div>
            ) : (
              <>
                <PageInfo
                  title={`Exams in ${
                    SelectedState || SelectedCountry || "World"
                  }`}
                  subTitle={`Found ${
                    ExamData?.meta?.pagination?.total ||
                    ExamDataList?.length ||
                    0
                  } ${SelectedStream ? SelectedStream : ""}`}
                  StreamData={AllStreamData}
                  SelectedStreamData={GetSelectedSteamData}
                  SelectedStream={SelectedStream}
                  updatedOn="Updated on Nov 17, 2023 14:25 IST"
                  pageType="exams"
                />
              </>
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="my-4  py-4 px-4">
            {allExamLoading ? (
              <>
                <CardSkeleten />
              </>
            ) : (
              <div>
                <CarouselComponent
                  slidesDesktop={4}
                  slidesTablet={3}
                  title="Top Exams"
                  slides={
                    isTopExameData &&
                    isTopExameData?.map((item: any, index: any) => {
                      return (
                        <ExamPrimaryCard
                          key={index}
                          topExam={item?.attributes}
                          examID={item?.attributes?.exam_url}
                          onApplyNow={() => handleOpenModal(item?.id)}
                          onSave={() => handelSave()}
                          isSave={isSave}
                          isSaved={AlreadyApplyedFilter}
                        />
                      );
                    })
                  }
                  slideGap={undefined}
                />
              </div>
            )}
          </div>

          <div className="fixed bottom-0 left-0 !z-[8999] w-full md:hidden block">
            <div className="flex justify-evenly items-center text-white bg-primary text-lg">
              <div
                className="flex items-center gap-4 p-2 cursor-pointer"
                onClick={() => {
                  setSortModal(!sortModal);
                  setFilterModal(false);
                }}
              >
                <p>Sort</p>
                <CgSortAz size={"32px"} />
              </div>
              <div className="min-h-4">|</div>
              <div
                className="flex items-center gap-4 p-2 cursor-pointer"
                onClick={() => {
                  setFilterModal(!filterModal);
                  setSortModal(false);
                }}
              >
                <p>Filter</p>
                <CiFilter size={"28px"} />
              </div>
            </div>
          </div>

          {filterModal && (
            <div className="fixed right-0 top-[10%] bottom-[5%] p-4 animate-slide-left-to-right w-full bg-white shadow-lg z-50 overflow-y-auto">
              <div className="absolute inset-0">
                <ExamFilter
                  setSelectedStream={setSelectedStream}
                  SelectedStream={SelectedStream}
                  setSelectedExamLevel={setSelectedExamLevel}
                  SelectedExamLevel={SelectedExamLevel}
                  setSelectedExamMode={setSelectedExamMode}
                  SelectedExamMode={SelectedExamMode}
                  ExamData={ExamData}
                />
              </div>
            </div>
          )}

          {sortModal && (
            <div className="fixed right-0 top-[10%] bottom-[5%] p-4 animate-slide-left-to-right w-full bg-white shadow-lg z-50 overflow-y-auto">
              <div className=" bg-white rounded-md">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleSort("college_name:asc");
                      setSortModal(false);
                    }}
                    role="menuitem"
                  >
                    Alphabetically
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleSort("updatedAt:asc");
                      setSortModal(false);
                    }}
                    role="menuitem"
                  >
                    Updated By
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleSort("createdAt:asc");
                      setSortModal(false);
                    }}
                    role="menuitem"
                  >
                    Reset Sort
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="main flex gap-4 lg:mt-10 pt-5 lg:pt-10 border-t mx-4 border-t-[#DDDDDD]">
            <div className="w-1/4 min-w-36 hidden md:block">
              {ExamDataList.length === 0 && loading ? (
                <div>
                  <FullWidthSkeleten />
                </div>
              ) : (
                <>
                  <ExamFilter
                    setSelectedStream={setSelectedStream}
                    SelectedStream={SelectedStream}
                    setSelectedExamLevel={setSelectedExamLevel}
                    SelectedExamLevel={SelectedExamLevel}
                    setSelectedExamMode={setSelectedExamMode}
                    SelectedExamMode={SelectedExamMode}
                    ExamData={ExamData}
                  />
                </>
              )}
            </div>
            <div className="flex-1 w-full overflow-hidden">
              <div className="flex-1 w-full overflow-hidden">
                <div className="bg-white pt-4 flex gap-4 items-stretch">
                  <div className="flex px-4 py-1 border-2 border-extra-light-text rounded flex-1 items-center text-primary-text focus-within:border-secondary-text">
                    <Image
                      src={SearchIcon}
                      width={20}
                      height={20}
                      alt="search"
                    />
                    <input
                      className="w-full flex-1 bg-transparent text-lg px-2 text-primary-text outline-none tracking-tight"
                      placeholder={`Search by Exams & Level`}
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                    />
                  </div>
                  <div className="relative">
                    <div
                      className="flex border-2 items-center px-8 py-2 border-extra-light-text gap-2 rounded-lg cursor-pointer"
                      onClick={toggleDropdown}
                    >
                      <span>Sort</span>
                      <div>
                        <Image
                          src={SortIcon}
                          width={20}
                          height={20}
                          alt="sort"
                        />
                      </div>
                    </div>
                    {/* Dropdown content */}
                    {isOpen && (
                      <div className="absolute z-50 mt-1 right-0 bg-white rounded-md shadow-lg border">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <div
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSort("exam_name:asc")}
                            role="menuitem"
                          >
                            Alphabetically
                          </div>
                          <div
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSort("updatedAt:asc")}
                            role="menuitem"
                          >
                            Updated By
                          </div>
                          <div
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSort("createdAt:asc")}
                            role="menuitem"
                          >
                            Reset Sort
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {ExamDataList.length === 0 && loading ? (
                  <div>
                    <FullWidthSkeleten />
                  </div>
                ) : (
                  <>
                    <div>
                      {ExamDataList &&
                        ExamDataList?.map((item: any, index: number) => {
                          return (
                            <div key={index + 24}>
                              <ExamListItem
                                ExamData={item}
                                id={item.id}
                                AppliedExam={AppliedExam}
                                examID={item?.attributes?.exam_url}
                              />
                              {index + 1 == 4 ? (
                                <div className="my-4 bg-primary-light py-4 px-4">
                                  <CarouselComponent
                                    slidesDesktop={3}
                                    slidesMobile={1}
                                    slidesTablet={2}
                                    titleColor="text-primary"
                                    title="Featured Exams"
                                    slides={
                                      isFeaturedExamData &&
                                      isFeaturedExamData?.map(
                                        (item: any, index: any) => {
                                          return (
                                            <ExamPrimaryCard
                                              key={index}
                                              topExam={item?.attributes}
                                              examID={
                                                item?.attributes?.exam_url
                                              }
                                            />
                                          );
                                        }
                                      )
                                    }
                                    slideGap={undefined}
                                  />
                                </div>
                              ) : (
                                <></>
                              )}

                              {index + 1 == 8 ? (
                                <div className="my-4 bg-primary-light py-4 px-4">
                                  <CarouselComponent
                                    slidesDesktop={3}
                                    slidesMobile={1}
                                    slidesTablet={2}
                                    titleColor="text-primary"
                                    title="Exams Application Form | March 2024"
                                    slides={
                                      isFeaturedExamData &&
                                      isFeaturedExamData?.map(
                                        (item: any, index: any) => {
                                          return (
                                            <ExamSecondaryCard
                                              key={index}
                                              topExam={item?.attributes}
                                              examID={
                                                item?.attributes?.exam_url
                                              }
                                            />
                                          );
                                        }
                                      )
                                    }
                                    slideGap={undefined}
                                  />
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          );
                        })}
                    </div>
                    <div className="text-center py-6">
                      {ExamData?.length ||
                        (ExamDataList?.length > 9 && (
                          <>
                            {/* Conditional rendering to show spinner */}
                            {loadingMore && (
                              <div className="spinner-icon">
                                {/* ============ */}
                                <button
                                  type="button"
                                  className="text-black bg-white border-2 border-primary color-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                                >
                                  <span className="flex items-center gap-2">
                                    <span>Loading...</span>{" "}
                                    <div
                                      className="w-6 h-6 rounded-full animate-spin
                    border-2 border-solid border-blue-500 border-t-transparent"
                                    ></div>
                                  </span>
                                </button>
                              </div>
                            )}

                            {/* "Load More" button */}
                            {!loadingMore && (
                              <button
                                type="button"
                                className="text-black bg-white border-2 border-primary color-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                                onClick={handleLoadMore}
                              >
                                {hasMore && !loading ? (
                                  "Load More"
                                ) : (
                                  <span className="flex items-center gap-2">
                                    <span>Loading...</span>{" "}
                                    <div
                                      className="w-6 h-6 rounded-full animate-spin
                    border-2 border-solid border-blue-500 border-t-transparent"
                                    ></div>
                                  </span>
                                )}
                              </button>
                            )}
                          </>
                        ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-4 my-12">
        <AppBanner />
      </section>
      {isModalOpen && (
        <BasicInformation
          FromStep={FromStep}
          id={selectedExamId}
          isSectionCheck={"Course"}
          onClose={handleCloseModal}
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

export default ExamPage;
