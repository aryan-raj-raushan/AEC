"use client";
import Link from "next/link";
import Image from "next/image";
import { FeturedStar, HeartIcon } from "@/src/Asset";
import StarRating from "../starRating/starRating";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useAppSelector } from "@/src/store";
import useUserSignup from "@/src/Hooks/useSignup";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import { useQuery } from "@apollo/client";
import { GET_USER_METADATA_CAREER } from "@/src/graphql/userMetaData/userMetaData";
import Swal from "sweetalert2";
import { ID } from "@/types/global";

export default function TopCareersCard({
  CareersData,
  carrerID,
  onApplyNow,
  setIsLoginModalOpen
}: any) {
  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const { getUserMetaData, saveCareer } = useUserMetaData();
  const userMetaId: ID = getUserDataMetaId(userID);
  const { userAllMetaData } = getUserMetaData(userMetaId);
  const AppliedCareear = userAllMetaData?.careers_interested;

  const isApplied = AppliedCareear?.some(
    (applied: any) => applied.careers.data.id === carrerID
  );

  // ======= save careear
  const selectedId = carrerID;

  let isLogin = useAppSelector((state) => state.auth.authState);

  // =============== save ============

  const { data: CareerMetaUser } = useQuery(GET_USER_METADATA_CAREER, {
    variables: { id: userMetaId },
  });

  const [selectedSave, setSelectedSave] = useState<any>({ data: [] });
  const [isSaveCareer, setIsSaveCareer] = useState<any>(null);
  const [isSave, setIsSave] = useState<boolean>(false);

  useEffect(() => {
    setIsSaveCareer(
      CareerMetaUser?.usersMetaDataes?.data[0]?.attributes?.save_careers
    );
  }, [CareerMetaUser]);

  useEffect(() => {
    if (CareerMetaUser) {
      const fetchedCareers =
        CareerMetaUser?.usersMetaDataes?.data[0]?.attributes?.save_careers?.flatMap(
          (career: { careers: { data: any[] } }) =>
            career?.careers?.data?.map((c: any) => ({
              id: c?.id,
              attributes: {
                careers: c?.id,
              },
            }))
        );
      setSelectedSave({ data: fetchedCareers });
    }
  }, [CareerMetaUser]);

  const uniqueId = () => Math.random().toString(36).substr(2, 9);

  const handeSave = async () => {
    try {
      if (isLogin) {
        // Check if the selected career is already saved
        if (!selectedSave?.data?.some((item: { attributes: { careers: any } }) => item.attributes.careers === selectedId)) {
          const newSaveData = {
            id: uniqueId(),
            attributes: {
              careers: selectedId,
            },
          };
          const updatedSaveData = [...selectedSave?.data, newSaveData];
          
          const response = await saveCareer({
            variables: {
              id: userMetaId,
              save_careers: updatedSaveData.map((item: { attributes: { careers: any } }) => ({
                careers: item?.attributes?.careers,
              })),
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
            setSelectedSave({ data: updatedSaveData });
          }
        } else {
          Swal.fire({
            position: "center",
            icon: "info",
            title: "Career already saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        setIsLoginModalOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const AlreadyApplyedFilter = isSaveCareer?.filter((item: any) => {
    return item?.careers?.data[0]?.id === selectedId;
  });

  return (
    <>
      <div className="flex flex-col items-stretch w-full bg-white rounded-lg shadow-lg">
        <div className="relative rounded-t-lg p-2 bg-white">
          <Image
            src={CareersData?.banner?.data[0]?.attributes?.url}
            alt={"college"}
            width={150}
            height={150}
            className="w-full h-36 object-fill rounded-lg"
          />
          {CareersData?.is_featured && (
            <div className="absolute inset-0 px-4 py-6 flex justify-between max-h-max items-center">
              <div className="bg-white flex gap-1 items-center rounded-full px-2 py-1 text-xs">
                <Image
                  src={FeturedStar}
                  width={16}
                  height={16}
                  alt={"feature"}
                />
                Featured
              </div>
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
              </button>
            </div>
          )}
        </div>
        <div className="relative flex flex-col">
          <div className="stars flex justify-end mt-2 mr-2">
            <StarRating rating={3} totalStars={5} />
          </div>
          <div className="p-2 flex-1 flex flex-col gap-2">
            <div>
              <Link href={`/careers/${CareersData?.career_url}`}>
                <h4 className="text-primary text-lg font-semibold">
                  {CareersData?.career_title}
                </h4>
              </Link>
              <p className="text-[13px] text-secondary-text">
                Job Type :{" "}
               <span className="font-medium">{CareersData?.job_types?.data[0]?.attributes?.job_type_title}</span> 
              </p>
              <div className="text-sm px-1 py-2.5 text-start inline-flex items-center">
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M1.66663 10.0002C1.66663 6.85766 1.66663 5.286 2.64329 4.31016C3.61913 3.3335 5.19079 3.3335 8.33329 3.3335H11.6666C14.8091 3.3335 16.3808 3.3335 17.3566 4.31016C18.3333 5.286 18.3333 6.85766 18.3333 10.0002V11.6668C18.3333 14.8093 18.3333 16.381 17.3566 17.3568C16.3808 18.3335 14.8091 18.3335 11.6666 18.3335H8.33329C5.19079 18.3335 3.61913 18.3335 2.64329 17.3568C1.66663 16.381 1.66663 14.8093 1.66663 11.6668V10.0002Z"
                    stroke="black"
                    strokeOpacity="0.5"
                    stroke-width="1.5"
                  />
                  <path
                    d="M5.83325 3.3335V2.0835M14.1666 3.3335V2.0835M2.08325 7.50016H17.9166"
                    stroke="black"
                    strokeOpacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15 14.1667C15 14.3877 14.9122 14.5996 14.7559 14.7559C14.5996 14.9122 14.3877 15 14.1667 15C13.9457 15 13.7337 14.9122 13.5774 14.7559C13.4211 14.5996 13.3333 14.3877 13.3333 14.1667C13.3333 13.9457 13.4211 13.7337 13.5774 13.5774C13.7337 13.4211 13.9457 13.3333 14.1667 13.3333C14.3877 13.3333 14.5996 13.4211 14.7559 13.5774C14.9122 13.7337 15 13.9457 15 14.1667ZM15 10.8333C15 11.0543 14.9122 11.2663 14.7559 11.4226C14.5996 11.5789 14.3877 11.6667 14.1667 11.6667C13.9457 11.6667 13.7337 11.5789 13.5774 11.4226C13.4211 11.2663 13.3333 11.0543 13.3333 10.8333C13.3333 10.6123 13.4211 10.4004 13.5774 10.2441C13.7337 10.0878 13.9457 10 14.1667 10C14.3877 10 14.5996 10.0878 14.7559 10.2441C14.9122 10.4004 15 10.6123 15 10.8333ZM10.8333 14.1667C10.8333 14.3877 10.7455 14.5996 10.5893 14.7559C10.433 14.9122 10.221 15 10 15C9.77899 15 9.56702 14.9122 9.41074 14.7559C9.25446 14.5996 9.16667 14.3877 9.16667 14.1667C9.16667 13.9457 9.25446 13.7337 9.41074 13.5774C9.56702 13.4211 9.77899 13.3333 10 13.3333C10.221 13.3333 10.433 13.4211 10.5893 13.5774C10.7455 13.7337 10.8333 13.9457 10.8333 14.1667ZM10.8333 10.8333C10.8333 11.0543 10.7455 11.2663 10.5893 11.4226C10.433 11.5789 10.221 11.6667 10 11.6667C9.77899 11.6667 9.56702 11.5789 9.41074 11.4226C9.25446 11.2663 9.16667 11.0543 9.16667 10.8333C9.16667 10.6123 9.25446 10.4004 9.41074 10.2441C9.56702 10.0878 9.77899 10 10 10C10.221 10 10.433 10.0878 10.5893 10.2441C10.7455 10.4004 10.8333 10.6123 10.8333 10.8333ZM6.66667 14.1667C6.66667 14.3877 6.57887 14.5996 6.42259 14.7559C6.26631 14.9122 6.05435 15 5.83333 15C5.61232 15 5.40036 14.9122 5.24408 14.7559C5.0878 14.5996 5 14.3877 5 14.1667C5 13.9457 5.0878 13.7337 5.24408 13.5774C5.40036 13.4211 5.61232 13.3333 5.83333 13.3333C6.05435 13.3333 6.26631 13.4211 6.42259 13.5774C6.57887 13.7337 6.66667 13.9457 6.66667 14.1667ZM6.66667 10.8333C6.66667 11.0543 6.57887 11.2663 6.42259 11.4226C6.26631 11.5789 6.05435 11.6667 5.83333 11.6667C5.61232 11.6667 5.40036 11.5789 5.24408 11.4226C5.0878 11.2663 5 11.0543 5 10.8333C5 10.6123 5.0878 10.4004 5.24408 10.2441C5.40036 10.0878 5.61232 10 5.83333 10C6.05435 10 6.26631 10.0878 6.42259 10.2441C6.57887 10.4004 6.66667 10.6123 6.66667 10.8333Z"
                    fill="black"
                    fill-opacity="0.5"
                  />
                </svg>
                {"31st August , 2024"}
              </div>
              <br />
              <div className="text-sm px-1 py-2.5 text-start inline-flex items-center">
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 6.875C9.38193 6.875 8.77775 7.05828 8.26384 7.40166C7.74994 7.74504 7.3494 8.2331 7.11288 8.80411C6.87635 9.37513 6.81447 10.0035 6.93505 10.6097C7.05562 11.2158 7.35325 11.7727 7.79029 12.2097C8.22733 12.6467 8.78415 12.9444 9.39034 13.065C9.99653 13.1855 10.6249 13.1236 11.1959 12.8871C11.7669 12.6506 12.255 12.2501 12.5983 11.7362C12.9417 11.2223 13.125 10.6181 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875ZM10 11.875C9.62916 11.875 9.26665 11.765 8.95831 11.559C8.64996 11.353 8.40964 11.0601 8.26773 10.7175C8.12581 10.3749 8.08868 9.99792 8.16103 9.63421C8.23337 9.27049 8.41195 8.9364 8.67417 8.67417C8.9364 8.41195 9.27049 8.23337 9.63421 8.16103C9.99792 8.08868 10.3749 8.12581 10.7175 8.26773C11.0601 8.40964 11.353 8.64996 11.559 8.95831C11.765 9.26665 11.875 9.62916 11.875 10C11.875 10.4973 11.6775 10.9742 11.3258 11.3258C10.9742 11.6775 10.4973 11.875 10 11.875ZM18.75 4.375H1.25C1.08424 4.375 0.925268 4.44085 0.808058 4.55806C0.690848 4.67527 0.625 4.83424 0.625 5V15C0.625 15.1658 0.690848 15.3247 0.808058 15.4419C0.925268 15.5592 1.08424 15.625 1.25 15.625H18.75C18.9158 15.625 19.0747 15.5592 19.1919 15.4419C19.3092 15.3247 19.375 15.1658 19.375 15V5C19.375 4.83424 19.3092 4.67527 19.1919 4.55806C19.0747 4.44085 18.9158 4.375 18.75 4.375ZM15.1289 14.375H4.87109C4.66125 13.6653 4.27719 13.0194 3.75389 12.4961C3.23059 11.9728 2.58468 11.5887 1.875 11.3789V8.62109C2.58468 8.41125 3.23059 8.02719 3.75389 7.50389C4.27719 6.98059 4.66125 6.33468 4.87109 5.625H15.1289C15.3387 6.33468 15.7228 6.98059 16.2461 7.50389C16.7694 8.02719 17.4153 8.41125 18.125 8.62109V11.3789C17.4153 11.5887 16.7694 11.9728 16.2461 12.4961C15.7228 13.0194 15.3387 13.6653 15.1289 14.375ZM18.125 7.29453C17.3753 6.97218 16.7778 6.37466 16.4555 5.625H18.125V7.29453ZM3.54453 5.625C3.22218 6.37466 2.62466 6.97218 1.875 7.29453V5.625H3.54453ZM1.875 12.7055C2.62466 13.0278 3.22218 13.6253 3.54453 14.375H1.875V12.7055ZM16.4555 14.375C16.7778 13.6253 17.3753 13.0278 18.125 12.7055V14.375H16.4555Z"
                    fill="black"
                    fill-opacity="0.5"
                  />
                </svg>
                $ {CareersData?.average_startin_salary}
              </div>
              <br />
              {CareersData?.career_levels?.data?.attributes
                ?.career_level_title && (
                <div className="text-sm px-1 py-2.5 text-start inline-flex">
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.8125 11.5625V7.5L10 3.4375L2.1875 7.5L10 11.5625L14.0625 9.6875V14.0625C14.0625 15.3125 12.1875 16.5625 10 16.5625C7.8125 16.5625 5.9375 15.3125 5.9375 14.0625V9.6875"
                      stroke="black"
                      strokeOpacity="0.5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {
                    CareersData?.career_levels?.data?.attributes
                      ?.career_level_title
                  }
                </div>
              )}
            </div>
          </div>
          <button
            onClick={onApplyNow}
            className="w-full p-[10px] bg-primary rounded-b-lg text-center text-white"
          >
            {isApplied ? "Already Applyed" : "Apply Now"}
          </button>
        </div>
      </div>
    </>
  );
}
