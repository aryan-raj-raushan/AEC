import Image from "next/image";
import useColleges from "@/src/Hooks/useColleges";
import { RootLayouts } from "@/src/Layouts";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  AskIcon,
  CameraIcon,
  DaynamiceHomeBanner,
  HeartIcon,
  LocationFilledIcon,
} from "@/src/Asset";
import Button from "@/src/Components/button/button";
import Breadcrumb from "@/src/Components/breadcrum/breadcrum";
import ColoredTag from "@/src/Components/tag/coloredTag";
import StarRating from "@/src/Components/starRating/starRating";
import NavbarSlider from "@/src/Components/carousel/navbar-carousal";
import PageDetailsTab from "@/src/Components/PageTabDetail/PageTabDetail";
import FullScreenSkeleton from "@/src/Components/Skeleton/FullScreenSkeleton";
import BasicInformation from "@/src/Components/consultingModule/basicInformation/basicInformation";
import userFrom from "@/src/Hooks/userFrom";
import { useAppSelector } from "@/src/store";
import Login from "@/src/Components/Login/Login";
import useUserSignup from "@/src/Hooks/useSignup";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import { ID } from "@/types/global";
import Swal from "sweetalert2";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GET_USER_METADATA_COLLEGE } from "@/src/graphql/userMetaData/userMetaData";
import { useQuery } from "@apollo/client";

const CollegeDetails: React.FC<any> = () => {
  const { CollegeApplicatonListData } = userFrom();
  const { authState } = useAppSelector((store: any) => store.auth);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [currentTab, setCurrentTab] = useState<string>();
  const queryParam = useSearchParams();
  const { GetSingleCollegeById } = useColleges();
  const router = useRouter();
  const collegeId = router?.query?.collegeId as string;
  const { singleCollegeData, loading, error } = GetSingleCollegeById(collegeId);

  const [CollegeData, setCollegeData] = useState<any>();
  const tab = queryParam ? queryParam.get("tab") : null;

  const [TabData, setTabData] = useState([]);
  const [filteredNavbar, setFilteredNavbar] = useState([]);
  const navbar = CollegeData?.nav_items?.data;
  const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "College", url: "/colleges" },
    { label: CollegeData?.college_name, url: `/colleges/${collegeId}` },
  ];
  const [loadingg, setLoadingg] = useState(false);

  console.log(collegeId,"collegeId")

  // Function to handle tab selection
  const handleTab = (value: string) => {
    setLoadingg(true);
    setTimeout(() => {
      setCurrentTab(value); // Update currentTab state

      const filteredData =
        singleCollegeData?.[0]?.attributes?.page_data?.filter(
          (item: any) =>
            item?.overview_section?.data?.attributes?.title === value ||
            item?.faq_section?.data?.attributes?.title === value ||
            item?.gallery_section?.data?.attributes?.title === value ||
            item?.recommended_colleges_section?.data[0]?.attributes?.title ===
            value ||
            item?.recommended_courses_section?.data[0]?.attributes?.title ===
            value ||
            item?.recommended_exams_section?.data[0]?.attributes?.title ===
            value ||
            item?.recommended_careers_section?.data[0]?.attributes?.title ===
            value ||
            item?.recommended_scholarships_section?.data[0]?.attributes
              ?.title === value ||
            item?.recommended_countries_section?.data[0]?.attributes?.title ===
            value ||
            item?.banner_section?.data[0]?.attributes?.title === value ||
            item?.course_section?.data[0]?.attributes?.title === value ||
            item?.department_section?.data[0]?.attributes?.title === value ||
            item?.rating_section?.data[0]?.attributes?.title === value ||
            item?.newsUpdate_section?.data[0]?.attributes?.title === value ||
            item?.discussionForum_section?.data[0]?.attributes?.title ===
            value ||
            item?.compare_section?.data[0]?.attributes?.title === value
        );

      setTabData(filteredData);

      setCurrentTab(value);
      router.push(
        `/colleges/${collegeId}/${value?.replace(/\s+/g, "-")?.toLowerCase()}`
      );

      setLoadingg(false);
    }, 100);

    const filteredTabs = singleCollegeData?.[0]?.attributes?.page_data?.filter(
      (item: any) => {
        if (
          item.faq_section &&
          item?.faq_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.gallery_section &&
          item?.gallery_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.overview_section &&
          item?.overview_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.recommended_colleges_section &&
          item?.recommended_colleges_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.recommended_courses_section &&
          item?.recommended_courses_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.recommended_exams_section &&
          item?.recommended_exams_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.recommended_careers_section &&
          item?.recommended_careers_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.recommended_scholarships_section &&
          item?.recommended_scholarships_section?.data?.attributes?.title ===
          value
        ) {
          return true;
        }
        if (
          item.recommended_countries_section &&
          item?.recommended_countries_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.banner_section &&
          item?.banner_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.course_section &&
          item?.course_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.department_section &&
          item?.department_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.rating_section &&
          item?.rating_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.newsUpdate_section &&
          item?.newsUpdate_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.discussionForum_section &&
          item?.discussionForum_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        if (
          item.compare_section &&
          item?.compare_section?.data?.attributes?.title === value
        ) {
          return true;
        }
        return false;
      }
    );
    setFilteredNavbar(filteredTabs);
  };
  useEffect(() => {
    const { number } = router.query;

    if (number === "4") {
      setCurrentTab("Department");
      handleTab("Department");
    }
  }, [router.query, setCurrentTab]);
  

  useEffect(() => {
    const { number } = router.query;

    if (number === "5") {
      setCurrentTab("Gallery and Virtual Tours");
      handleTab("Gallery and Virtual Tours");
    }
  }, [router.query, setCurrentTab]);

  useEffect(() => {
    const { number } = router.query;

    if (number === "10") {
      setCurrentTab("Ratings and Reviews");
      handleTab("Ratings and Reviews");
    }
  }, [router.query, setCurrentTab]);
  useEffect(() => {
    const { number } = router.query;

    if (number === "6") {
      setCurrentTab("News");
      handleTab("News");
    }
  }, [router.query, setCurrentTab]);

  useEffect(() => {
    if (
      Array.isArray(singleCollegeData) &&
      singleCollegeData.length > 0 &&
      typeof singleCollegeData[0] === "object" &&
      singleCollegeData[0] !== null
    ) {
      const attributes = singleCollegeData[0].attributes;
      setCollegeData(attributes);
      handleTab(attributes?.nav_items?.data[0]?.attributes?.title);
    } else {
      setCollegeData(null);
    }
  }, [singleCollegeData]);

  const handelDawonloadBrochure = () => {
    if (authState) {
      window.open(
        CollegeData?.dawonload_brochure?.data[0]?.attributes?.url,
        "_blank"
      );
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleViewPhotoClick = () => {
    const galleryTab = "Gallery and Virtual Tours";
    const collegeId = router.query.collegeId;
    const route = `/colleges/${collegeId}/${galleryTab
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    router.push(route);
    setCurrentTab(galleryTab);
    handleTab(galleryTab);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const selectedId = singleCollegeData && singleCollegeData[0]?.id;

  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const { getUserMetaData, saveCollege } = useUserMetaData();

  const userMetaId: ID = getUserDataMetaId(userID);
  const { userAllMetaData } = getUserMetaData(userMetaId);
  const AppliedCollege = userAllMetaData?.applied_colleges;

  const isCollegeApplied = AppliedCollege?.some(
    (applied: { college: { data: { id: any } } }) =>
      applied?.college?.data?.id === selectedId
  );

  const FromStep: any = CollegeApplicatonListData?.form_stape;

  let isLogin = useAppSelector((state) => state.auth.authState);

  const { data: CollgeMetaUser } = useQuery(GET_USER_METADATA_COLLEGE, {
    variables: { id: userMetaId },
  });

  const [selectedSaveCollege, setSelectedSaveCollege] = useState<any>({
    data: [],
  });
  const [isSaveCollege, setIsSaveCollege] = useState<any>(null);
  const [isSave, setIsSave] = useState<boolean>(false);

  useEffect(() => {
    setIsSaveCollege(CollgeMetaUser?.usersMetaDataes?.data[0]?.attributes?.save_college);
  }, [CollgeMetaUser]);


  useEffect(() => {
    if (CollgeMetaUser) {
      const fetchedColleges =
        CollgeMetaUser?.usersMetaDataes?.data[0]?.attributes?.save_college?.flatMap(
          (college: { colleges: { data: any[] } }) =>
            college?.colleges?.data?.map((c: any) => ({
              id: c?.id,
              attributes: {
                colleges: c?.id,
              },
            }))
        );
      setSelectedSaveCollege({ data: fetchedColleges });
    }
  }, [CollgeMetaUser]);

  useEffect(() => {
    if (selectedId) {
      setSelectedSaveCollege((prev: any) => ({
        data: [
          ...prev?.data,
          {
            id: uniqueId(),
            attributes: {
              colleges: selectedId,
            },
          },
        ],
      }));
    }
  }, [selectedId]);

  const uniqueId = () => Math.random().toString(36).substr(2, 9);

  const handleSaveCollege = async () => {
    try {
      if (isLogin) {
        const response = await saveCollege({
          variables: {
            id: userMetaId,
            save_college: selectedSaveCollege.data.map(
              (item: { attributes: { colleges: any } }) => ({
                colleges: item.attributes.colleges,
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

  const AlreadyApplyedCollegeFilter = isSaveCollege?.filter(
    (item: any) => {
      return (item?.colleges?.data[0]?.id === selectedId)
    }
  );

  const handelAsk = () => {
    if (!isLogin) {
      setIsLoginModalOpen(true);
    }
  };
 
  const ReviewData = CollegeData?.review

  const overallRating =
    ReviewData?.reduce(
      (acc: any, review: any) => acc + review.overallrating,
      0
    ) / ReviewData?.length;



  return (
    <RootLayouts>
      {loading ? (
        <div className="heroSection navbar-PageInfo-responsive">
          <FullScreenSkeleton />
        </div>
      ) : (
        <>
          <section className="heroSection navbar-PageInfo-responsive">
            <div className="relative">
              <img
                src={CollegeData?.banner?.data[0]?.attributes?.url}
                alt={CollegeData?.college_title}
                className="w-full h-52 md:h-72 object-fill"
              />

              <div className="absolute h-full inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 text-white flex gap-4 lg:max-w-screen-xl lg:mx-auto px-1 lg:px-4 md:my-6 sm:items-stretch items-center">
                <div className="flex flex-col gap-2">
                  <div className="p-[10px] bg-white rounded mt-8">
                    <Image
                      width={93}
                      height={93}
                      alt=""
                      src={CollegeData?.logo?.data?.attributes?.url}
                    />
                  </div>
                  <Button
                    width="93"
                    onClick={handleViewPhotoClick}
                    text="View Media"
                    paddingX="px-[5px]"
                    paddingY="py-[10px]"
                    outline
                    outlineColor={`border-${currentTab === "gallery-and-virtual-tours"
                        ? "primary"
                        : "white"
                      }`}
                    fontSize="text-xs sm:text-sm"
                    icon={
                      <Image src={CameraIcon} width={16} height={16} alt="" />
                    }
                  />
                </div>

                <div className="flex flex-col gap-1 sm:gap-3 w-full relative">
                  <div className="flex flex-row justify-between">
                    <div className="-ml-24 sm:ml-0">
                      <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="bg-white p-[6px] rounded-full md:hidden flex">
                      <Image src={HeartIcon} width={10} height={10} alt="" />
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <h1 className="font-bold sm:text-lg text-sm lg:text-3xl">
                      {CollegeData?.college_name} : {CollegeData?.college_title}
                    </h1>
                  </div>

                  <div className=" text-xs sm:text-sm sm:font-normal font-light flex flex-row gap-2 md:gap-4 justify-start items-center">
                    <div className="flex gap-1">
                      <Image src={LocationFilledIcon} alt={""} />
                      {CollegeData?.city?.data?.attributes?.city_name},{" "}
                      {CollegeData?.state?.data?.attributes?.state_name},{" "}
                      {CollegeData?.pin_code}
                    </div>
                    <div className="md:flex hidden sm:gap-4 gap-1 items-center">
                      <div className="md:border-l border-white h-6"></div>{" "}
                      <div>User Reviews</div>
                      <StarRating rating={overallRating} />
                      {CollegeData ? <div>({ReviewData?.length})</div> : null}
                    </div>

                    <div className="md:flex hidden items-center gap-2">
                      <div className="border-l border-white h-6"></div>
                      <div>Approved By :</div>
                      <div className="flex gap-2">
                        <ColoredTag
                          text={
                            CollegeData?.approved_by?.data[0]?.attributes
                              ?.organisation_name
                          }
                          fontSize="text-xs"
                          textColor="text-white"
                          paddingY="py-1"
                          bgColor="bg-primary"
                        />
                      </div>
                    </div>

                    <div className="flex  items-center gap-2">
                      <div className="border-l border-white h-6"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          d="M4.16699 18.8332V12.1665M4.16699 12.1665V3.83317M4.16699 12.1665L6.22533 11.7548C7.60095 11.4795 9.02696 11.6104 10.3295 12.1315C11.7408 12.6959 13.2941 12.8011 14.7687 12.4323L14.947 12.3882C15.2002 12.325 15.425 12.1789 15.5857 11.9733C15.7463 11.7676 15.8336 11.5141 15.8337 11.2532V5.114C15.8336 4.96214 15.799 4.81229 15.7324 4.67581C15.6658 4.53933 15.569 4.41981 15.4493 4.32632C15.3296 4.23283 15.1902 4.16783 15.0417 4.13624C14.8931 4.10465 14.7394 4.1073 14.592 4.144C13.2325 4.4837 11.8005 4.38631 10.4995 3.86567L10.3295 3.79817C9.0272 3.2773 7.60152 3.14643 6.22616 3.4215L4.16699 3.83317M4.16699 3.83317V2.1665"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                      {
                        CollegeData?.college_type?.data?.attributes
                          ?.college_type
                      }
                    </div>
                  </div>

                  <div className="md:flex gap-4 justify-end absolute bottom-0 right-0 hidden">
                    <button
                      className="flex gap-2 items-center text-[15px]"
                      onClick={() => handleSaveCollege()}
                      disabled={
                        isSave || AlreadyApplyedCollegeFilter?.length > 0
                      }
                    >
                      <div className="bg-white p-[6px] rounded-full cursor-pointer">
                        {isSave || AlreadyApplyedCollegeFilter?.length > 0 ? (
                          <FaHeart size={10} color="red" />
                        ) : (
                          <FaRegHeart color="black" size={10} />
                        )}
                      </div>
                      {isSave || AlreadyApplyedCollegeFilter?.length > 0
                        ? "Saved"
                        : "Save"}
                    </button>
                    {!isLogin && (
                      <div
                        className="flex items-center  text-[15px] cursor-pointer"
                        onClick={() => handleOpenModal()}
                      >
                        <div className="p-2 rounded-full">
                          <Image src={AskIcon} alt="" />
                        </div>
                        Ask
                      </div>
                    )}
                    <button disabled={isCollegeApplied}>
                      <Button
                        onClick={() => handleOpenModal()}
                        text={isCollegeApplied ? "Applied" : "Apply Now"}
                        showHover={true}
                        outline
                        outlineColor="border-white"
                        textColor="text-white"
                        paddingX="px-[10px]"
                        paddingY="py-[10px]"
                        width="w-18 md:w-36"
                        align="text-center"
                      />
                    </button>
                    <div
                      onClick={() => handelDawonloadBrochure()}
                      className="coursor-pointer"
                    >
                      <Button
                        text="Brochure"
                        showHover={true}
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="21"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M12 16.5L7 11.5L8.4 10.05L11 12.65V4.5H13V12.65L15.6 10.05L17 11.5L12 16.5ZM6 20.5C5.45 20.5 4.979 20.304 4.587 19.912C4.195 19.52 3.99934 19.0493 4 18.5V15.5H6V18.5H18V15.5H20V18.5C20 19.05 19.804 19.521 19.412 19.913C19.02 20.305 18.5493 20.5007 18 20.5H6Z"
                              fill="white"
                            />
                          </svg>
                        }
                        outline
                        outlineColor="border-white"
                        textColor="text-white"
                        paddingX="px-[10px]"
                        paddingY="py-[10px]"
                        width="w-18 md:w-36"
                        align="text-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="px-2 py-4 md:hidden flex flex-col">
            <div className="flex items-center gap-2">
              <h1>Approved by :</h1>
              <div className="flex gap-2 items-center">
                <h1 className="w-fit bg-orange-300 rounded-lg px-2 text-sm ">
                  NBA
                </h1>
                <h1 className="w-fit bg-green-300 rounded-lg px-2 text-sm">
                  ISO
                </h1>
                <h1 className="w-fit bg-red-300 rounded-lg px-2 text-sm">
                  AICTE
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <h1>User Reviews : </h1>
              <div className="flex items-center gap-1">
                <h1>*</h1>
                <h1>*</h1>
                <h1>*</h1>
                <h1>*</h1>
              </div>
            </div>
            <div className="flex justify-between py-4 w-full gap-5">
              <div className="w-full " onClick={() => handleOpenModal()}>
                <button className=" bg-[#050138] text-white w-full py-[10px] duration-300 rounded-md">
                  {" "}
                  Apply now
                </button>
              </div>
              <div
                onClick={() => handelDawonloadBrochure()}
                className="coursor-pointer w-full"
              >
                <button className=" bg-[#428BC1] text-white w-full py-[10px] duration-300 rounded-md">
                  Brochure
                </button>
              </div>
            </div>
          </div>

          <div className="sticky-nav-wrapper bg-white ">
            <div className=" bg-white flex border- border-b-primary-light max-w-screen-xl mx-auto ">
              <div className="lg:max-w-screen-xl lg:mx-auto px-1 md:px-4 w-[95vw] md:w-full">
                <NavbarSlider
                  buttonBorderColor="border-primary-text"
                  buttonTextColor="text-primary-text"
                  showPagination={false}
                  slidesDesktop={10}
                  slidesTablet={5}
                  slidesMobile={3}
                  slides={navbar?.map((tab: any) => {
                    return (
                      <div
                        key={tab?.attributes?.title}
                        className={`${currentTab === tab?.attributes?.title
                            ? "text-primary border-b-2 border-primary"
                            : ""
                          } cursor-pointer hover:text-primary hover:border-b-2 hover:border-primary text-sm pb-2 w-max`}
                        onClick={() => {
                          handleTab(tab?.attributes?.title);
                          setCurrentTab(tab?.attributes?.title);
                        }}
                        style={{ minWidth: "fit-content" }}
                      >
                        {tab?.attributes?.title}
                      </div>
                    );
                  })}
                />
              </div>
            </div>
          </div>

          <section className="mainSection lg:max-w-screen-xl lg:mx-auto">
            <PageDetailsTab
              id={selectedId}
              TabsData={TabData}
              page={CollegeData}
              currentTab={currentTab}
              loading={loadingg}
            />
          </section>
        </>
      )}

      {isModalOpen && (
        <BasicInformation
          FromStep={FromStep}
          isSectionCheck={"College"}
          id={singleCollegeData?.id}
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

export default CollegeDetails;
function c(value: any, index: number, array: any[]): unknown {
  throw new Error("Function not implemented.");
}