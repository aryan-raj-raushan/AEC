import Image from "next/image";
import { RootLayouts } from "@/src/Layouts";
import React, { useEffect, useState } from "react";
import { AskIcon } from "@/src/Asset";
import Button from "@/src/Components/button/button";
import Breadcrumb from "@/src/Components/breadcrum/breadcrum";
import NavbarSlider from "@/src/Components/carousel/navbar-carousal";
import TableOfContent from "@/src/Components/@scholarship/aboutScholarship/aboutScholarship";
import CollegeAcceptingAdmissions from "@/src/Components/@scholarship/collegeAcceptingAdmissions/collegeAcceptingAdmissions";
import { GetSingleScholarshipById } from "@/src/graphql/scholarship/scholarships";
import PageDetailsTab from "@/src/Components/PageTabDetail/PageTabDetail";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import useScholarships from "@/src/Hooks/useScholarships";
import FullScreenSkeleton from "@/src/Components/Skeleton/FullScreenSkeleton";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import Login from "@/src/Components/Login/Login";
import Swal from "sweetalert2";
import { useAppSelector } from "@/src/store";
import useUserSignup from "@/src/Hooks/useSignup";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import { ID } from "@/types/global";
import { GET_USER_METADATA_SCHOLARSHIP } from "@/src/graphql/userMetaData/userMetaData";

const ScholarshipDetails: React.FC<any> = () => {
  const [currentTab, setCurrentTab] = useState("Info");
  const queryParam = useSearchParams();
  const router = useRouter();
  const { GetScholarshipById } = useScholarships();

  const scholarshipId = router?.query?.scholarshipId as string;

  const { singleScholarshipData, loading, error } =
    GetScholarshipById(scholarshipId);
  const [ScholarshipData, setScholarshipData] = useState<any>();
  const tab = queryParam ? queryParam.get("tab") : null;

  const [TabData, setTabData] = useState([]);
  const [filteredNavbar, setFilteredNavbar] = useState([]);
  const navbar = ScholarshipData?.nav_items?.data;
  const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "Scholarships", url: "/scholarships" },
    {
      label: ScholarshipData?.scholarship_title,
      url: `/scholarships/${scholarshipId}`,
    },
  ];

  // Function to handle tab selection
  const handleTab = (value: string) => {
    const filteredData =
      singleScholarshipData[0]?.attributes?.page_data?.filter(
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
          item?.recommended_scholarshipss_section?.data[0]?.attributes
            ?.title === value ||
          item?.recommended_scholarships_section?.data[0]?.attributes?.title ===
            value ||
          item?.recommended_countries_section?.data[0]?.attributes?.title ===
            value ||
          item?.banner_section?.data[0]?.attributes?.title === value ||
          item?.rating_section?.data[0]?.attributes?.title === value ||
          item?.newsUpdate_section?.data[0]?.attributes?.title === value ||
          item?.discussionForum_section?.data[0]?.attributes?.title === value
      );

    setTabData(filteredData);

    setCurrentTab(value);
    router.push(
      `/scholarships/${scholarshipId}/${value
        .replace(/\s+/g, "-")
        .toLowerCase()}`
    );

    const filteredTabs =
      singleScholarshipData[0]?.attributes?.page_data?.filter((item: any) => {
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
          item.recommended_scholarshipss_section &&
          item?.recommended_scholarshipss_section?.data?.attributes?.title ===
            value
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

        return false;
      });
    setFilteredNavbar(filteredTabs);
  };

  useEffect(() => {
    if (tab) {
      setCurrentTab(tab);
    }
  }, [tab]);

  useEffect(() => {
    if (
      Array.isArray(singleScholarshipData) &&
      singleScholarshipData.length > 0 &&
      typeof singleScholarshipData[0] === "object" &&
      singleScholarshipData[0] !== null
    ) {
      const attributes = singleScholarshipData[0].attributes;
      setScholarshipData(attributes);
      handleTab(attributes?.nav_items?.data[0]?.attributes?.title);
    } else {
      setScholarshipData(null);
    }
  }, [singleScholarshipData]);

  // ========== save
  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const { getUserMetaData, saveScholarships, checkSaveScholarships } =
    useUserMetaData();
  const userMetaId: ID = getUserDataMetaId(userID);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const selectedId = singleScholarshipData && singleScholarshipData[0]?.id;

  let isLogin = useAppSelector((state) => state.auth.authState);

  const { data: ScholarshipsMetaUser } = useQuery(
    GET_USER_METADATA_SCHOLARSHIP,
    {
      variables: { id: userMetaId },
    }
  );

  const [selectedSave, setSelectedSave] = useState<any>({ data: [] });
  const [isSaveScholarships, setIsSaveScholarships] = useState<any>(null);
  const [isSave, setIsSave] = useState<boolean>(false);

  useEffect(() => {
    setIsSaveScholarships(ScholarshipsMetaUser);
  }, [ScholarshipsMetaUser]);

  useEffect(() => {
    if (ScholarshipsMetaUser) {
      const fetchedScholarships =
        ScholarshipsMetaUser?.usersMetaDataes?.data[0]?.attributes?.save_scholarships?.flatMap(
          (scholarships: { scholarships: { data: any[] } }) =>
            scholarships?.scholarships?.data?.map((c: any) => ({
              id: c?.id,
              attributes: {
                scholarships: c?.id,
              },
            }))
        );
      setSelectedSave({ data: fetchedScholarships });
    }
  }, [ScholarshipsMetaUser]);

  useEffect(() => {
    if (selectedId) {
      const isAlreadySaved = selectedSave?.data?.some(
        (item: any) => item?.attributes?.scholarships === selectedId
      );

      if (!isAlreadySaved) {
        setSelectedSave((prev: any) => ({
          data: [
            ...prev?.data,
            {
              id: uniqueId(),
              attributes: {
                scholarships: selectedId,
              },
            },
          ],
        }));
      }
    }
  }, [selectedId]);

  const uniqueId = () => Math.random().toString(36).substr(2, 9);

  const handeSave = async () => {
    try {
      if (isLogin) {
        const response = await saveScholarships({
          variables: {
            id: userMetaId,
            save_scholarships: selectedSave?.data?.map(
              (item: { attributes: { scholarships: any } }) => ({
                scholarships: item?.attributes?.scholarships,
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
    isSaveScholarships?.usersMetaDataes?.data[0]?.attributes?.save_scholarships?.filter(
      (item: any) => item?.attributes?.scholarships[0]?.id === selectedId
    );

  const handelAsk = () => {
    if (!isLogin) {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <RootLayouts>
      {loading ? (
        <div className="heroSection navbar-PageInfo-responsive">
          <FullScreenSkeleton />
        </div>
      ) : (
        <>
          <section className="heroSection navbar-PageInfo-responsive">
            <div className="relative ">
              <img
                src={ScholarshipData?.banner?.data[0]?.attributes?.url}
                alt={"Banner"}
                className="w-full h-60 md:h-72 object-fit"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 text-white flex flex-col gap-4 max-w-screen-xl mx-auto px-4 my-6">
                <div>
                  <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className="flex gap-4">
                  <div className="p-2.5 bg-white rounded min-h-[60px]">
                    <Image
                      width={90}
                      height={120}
                      alt=""
                      src={ScholarshipData?.logo?.data?.attributes?.url}
                      className="h-full object-fill"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-3">
                    <div className="flex gap-4 lg:pt-0 items-center">
                      <h1 className="font-bold text-sm leading-tight lg:text-3xl">
                        {ScholarshipData?.scholarship_title}
                      </h1>
                    </div>
                    <div>
                      Conducted By :{" "}
                      {
                        ScholarshipData?.conducted_by?.data?.attributes
                          ?.organisation_name
                      }
                    </div>
                    <div className="md:flex hidden gap-4 justify-end  absolute md:bottom-0 -bottom-5  right-0 px-2">
                      {/* <div className="flex gap-2 items-center text-[15px]">
                        <div className="bg-white md:p-[6px] rounded-full">
                          <Image
                            src={HeartIcon}
                            width={10}
                            height={10}
                            alt=""
                          />
                        </div>
                        Save
                      </div> */}
                      <button
                        className="flex gap-2 items-center text-[15px]"
                        onClick={() => handeSave()}
                        disabled={isSave || AlreadyApplyedFilter?.length > 0}
                      >
                        <div className="bg-white p-[6px] rounded-full cursor-pointer">
                          {isSave || AlreadyApplyedFilter?.length > 0 ? (
                            <FaHeart size={10} color="red" />
                          ) : (
                            <FaRegHeart color="black" size={10} />
                          )}
                        </div>
                        {isSave || AlreadyApplyedFilter?.length > 0
                          ? "Saved"
                          : "Save"}
                      </button>
                      {!isLogin && (
                        <div
                          onClick={() => handelAsk()}
                          className="flex items-center  text-[15px]"
                        >
                          <div className="p-2 rounded-full">
                            <Image src={AskIcon} alt="" />
                          </div>
                          Ask
                        </div>
                      )}
                      <div>
                        <Button
                          text="Register Now"
                          showHover={false}
                          outline
                          outlineColor="border-white"
                          textColor="text-white"
                          paddingX="px-[10px]"
                          paddingY="py-[10px]"
                          width="w-36"
                          align="text-center"
                        />
                      </div>
                      <div>
                        <Button
                          text="Brochure"
                          showHover={false}
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
                          width="w-36"
                          align="text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                {/* <div className="flex gap-2 items-center text-[15px]">
                <div
                  className="bg-white p-[6px] rounded-full cursor-pointer"
                  onClick={() => handleOpenModal()}
                >
                  <Image src={HeartIcon} width={10} height={10} alt="" />
                </div>
                Save
              </div>
              <div
                className="flex items-center  text-[15px] cursor-pointer"
                onClick={() => handleOpenModal()}
              >
                <div className="p-2 rounded-full">
                  <Image src={AskIcon} alt="" />
                </div>
                Ask
              </div> */}
                <div className="w-full">
                  <button className=" bg-[#050138] text-white w-full py-[10px] duration-300 rounded-md">
                    {" "}
                    Apply now
                  </button>
                </div>
                <div
                  // onClick={() => handelDawonloadBrochure()}
                  className="coursor-pointer w-full"
                >
                  <button className=" bg-[#428BC1] text-white w-full py-[10px] duration-300 rounded-md">
                    Brochure
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="sticky-nav-wrapper bg-white ">
            <div className=" bg-white flex border-b border-b-primary-light max-w-screen-xl mx-auto ">
              <div className="lg:max-w-screen-xl lg:mx-auto px-1 md:px-4 w-[95vw] md:w-full">
                <NavbarSlider
                  buttonBorderColor="border-primary-text"
                  buttonTextColor="text-primary-text"
                  showPagination={false}
                  slidesDesktop={10}
                  slidesTablet={5}
                  slidesMobile={3}
                  slides={navbar?.map((tab: any) => (
                    <li
                      key={tab?.attributes?.title}
                      className={`${
                        currentTab === tab?.attributes?.title
                          ? "text-primary border-b-2 border-primary"
                          : ""
                      } cursor-pointer list-none hover:text-primary hover:border-b-2 hover:border-primary text-sm mt-3 pb-2 w-max`}
                      onClick={() => handleTab(tab?.attributes?.title)}
                    >
                      {tab?.attributes?.title}
                    </li>
                  ))}
                />
              </div>
            </div>
          </div>
          <section className="mainSection lg:max-w-screen-xl lg:mx-auto">
            <PageDetailsTab
              TabsData={TabData}
              page={ScholarshipData}
              currentTab={currentTab}
            />
          </section>
        </>
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

export default ScholarshipDetails;
