"use client";
import Link from "next/link";
import Image from "next/image";
import { FeturedStar, HeartIcon } from "@/src/Asset";
import StarRating from "../starRating/starRating";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import { useAppSelector } from "@/src/store";
import useUserSignup from "@/src/Hooks/useSignup";
import { useQuery } from "@apollo/client";
import { GET_USER_METADATA_SCHOLARSHIP } from "@/src/graphql/userMetaData/userMetaData";
import Swal from "sweetalert2";
import { ID } from "@/types/global";

export default function TopScholarshipWorldCard({
  ScholarshipData,
  id,
  onApplyNow,
  setIsLoginModalOpen,
  scholarshipID,
}: any) {
  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const { saveScholarships } = useUserMetaData();
  const userMetaId: ID = getUserDataMetaId(userID);

  const selectedId = scholarshipID;

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
  }, [selectedId, selectedSave]);

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

  const handleApplyNowClick = () => {
    onApplyNow();
  };
  const AlreadyApplyedFilter =
    isSaveScholarships?.usersMetaDataes?.data[0]?.attributes?.save_scholarships?.filter(
      (item: any) => item?.scholarships?.data[0]?.id === selectedId
    );

  return (
    <div className="flex flex-col border items-stretch w-full bg-white rounded-lg shadow-lg">
      <div className="relative rounded-t-lg p-2 bg-white">
        <div className="relative">
          <Image
            src={ScholarshipData?.banner?.data[0]?.attributes?.url}
            alt={"college"}
            width={150}
            height={150}
            className="w-full h-36 object-fill rounded-lg"
          />
          <div className="bg-white rounded-full p-1 text-sm cursor-pointer absolute top-2 right-2">
            <button
              className="flex gap-2 items-center text-[15px]"
              onClick={handeSave}
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
        </div>
        {ScholarshipData?.is_featured && (
          <div className="absolute inset-0 px-4 py-6 flex justify-between max-h-max items-center">
            <div className="bg-white flex gap-1 items-center rounded-full px-2 py-1 text-xs">
              <Image src={FeturedStar} width={16} height={16} alt={"feature"} />
              Featured
            </div>
            <div className="bg-white rounded-full p-1 text-sm cursor-pointer">
              <Image src={HeartIcon} width={14} height={14} alt={"feature"} />
            </div>
          </div>
        )}
      </div>
      <div className="relative flex flex-col">
        <div className="absolute left-4 -top-7">
          <Image
            width={150}
            height={150}
            src={ScholarshipData?.logo?.data?.attributes?.url}
            alt={"college"}
            className="w-[55px] h-[50px] object-fill rounded"
          />
        </div>
        <div className="stars flex justify-end mt-2 mr-2">
          <StarRating rating={3} totalStars={5} />
        </div>
        <div className="p-2 flex-1 flex flex-col gap-2">
          <div>
            <Link
              href={`/scholarships/${ScholarshipData?.scholarship_url}/${ScholarshipData?.nav_items?.data[0]?.attributes?.title}`}
            >
              <h4 className="text-primary text-lg font-semibold line-clamp-1">
                {ScholarshipData?.scholarship_title}
              </h4>
            </Link>
            <p className="text-[13px] text-secondary-text">
              Conducted By :{" "}
              {
                ScholarshipData?.conducted_by?.data?.attributes
                  ?.organisation_name
              }
            </p>
            <div className="text-sm px-1 py-1 text-start inline-flex items-center">
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
                  strokeOpacity="0.2"
                  stroke-width="1.5"
                />
                <circle
                  cx="10.0002"
                  cy="10"
                  r="2.5"
                  stroke="black"
                  strokeOpacity="0.2"
                  stroke-width="1.5"
                />
              </svg>
              <span className="text-secondary-text text-[13px]">
                {ScholarshipData?.target_course?.data?.attributes?.title}
              </span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-end gap-2">
            <p className="text-xs text-secondary-text">
              Applied by: 
            </p>

            <div className="flex justify-between items-center">
              <button
                 onClick={handleApplyNowClick}
                className="cursor-pointer w-full p-[10px] bg-primary rounded-b-lg text-center text-white"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 