"use client";
import Link from "next/link";
import Image from "next/image";
import { ApprovedByIcon, FeturedStar, FlagIcon, HeartIcon } from "@/src/Asset";
import ColoredTag from "../tag/coloredTag";
import StarRating from "../starRating/starRating";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@apollo/client";
import { GET_USER_METADATA_COLLEGE } from "@/src/graphql/userMetaData/userMetaData";
import { useAppSelector } from "@/src/store";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import { ID } from "@/types/global";
import useUserSignup from "@/src/Hooks/useSignup";

export default function CollegeCard({
  college,
  id,
  onApplyNow,
  AppliedCollege,
  setIsLoginModalOpen,
  collegeId,
  urlInfo = "info",
}: any) {
  const isCollegeApplied = AppliedCollege?.some(
    (applied: { college: { data: { id: any } } }) =>
      applied?.college?.data?.id === collegeId
  );

  const [saved, setSaved] = useState(false);
  const { saveCollege } = useUserMetaData();
  const isLogin = useAppSelector((state) => state.auth.authState);
  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const userMetaId: ID = getUserDataMetaId(userID);

  const { data: CollgeMetaUser } = useQuery(GET_USER_METADATA_COLLEGE, {
    variables: { id: userMetaId },
  });

  const [selectedSaveCollege, setSelectedSaveCollege] = useState<any>({
    data: [],
  });
  const [isSaveCollege, setIsSaveCollege] = useState<any>(null);
  const [isSave, setIsSave] = useState<boolean>(false);

  useEffect(() => {
    setIsSaveCollege(
      CollgeMetaUser?.usersMetaDataes?.data[0]?.attributes?.save_college
    );
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
    if (!isLogin) {
      setSaved(false);
    }
  }, [isLogin]);

  const uniqueId = () => Math.random().toString(36).substr(2, 9);

  const onSave = async () => {
    try {
      if (isLogin) {
        const updatedSaveCollege = [
          ...selectedSaveCollege.data,
          {
            id: uniqueId(),
            attributes: {
              colleges: collegeId,
            },
          },
        ];

        const response = await saveCollege({
          variables: {
            id: userMetaId,
            save_college: updatedSaveCollege.map(
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
          setSelectedSaveCollege({ data: updatedSaveCollege });
        }
      } else {
        setIsLoginModalOpen(true);
        setSaved(false); // Reset saved state when opening the login modal
      }
    } catch (error) {
      console.error("Error saving college:", error);
    }
  };

  const AlreadyApplyedCollegeFilter = isSaveCollege?.filter((item: any) => {
    return item?.colleges?.data[0]?.id === collegeId;
  });

  const handleSaveClick = () => {
    if (!saved) {
      setSaved(true);
      onSave();
    }
  };

  return (
    <>
      <div className="flex border flex-col items-stretch w-full lg:w-full bg-white rounded-lg shadow-lg">
        <div className="relative rounded-t-lg p-2 bg-white">
          <Image
            src={college?.banner?.data[0]?.attributes?.url}
            alt={college?.college_name}
            width={150}
            height={150}
            className="w-full h-32 object-fill rounded-lg"
          />
          <div className="absolute inset-0 px-4 py-6 flex justify-between max-h-max items-center">
            {college?.is_featured === true && (
              <div className="bg-white flex gap-1 items-center rounded-full px-2 py-1 text-xs">
                {
                  <>
                    <Image
                      src={FeturedStar}
                      width={16}
                      height={16}
                      alt={"feature"}
                    />
                    Featured
                  </>
                }
              </div>
            )}
            <div className="bg-white rounded-full p-1 text-sm cursor-pointer absolute right-4">
              <button
                className="flex gap-2 items-center text-[15px]"
                onClick={handleSaveClick}
                disabled={isSave || AlreadyApplyedCollegeFilter?.length > 0}
              >
                <div className="bg-white p-[6px] rounded-full cursor-pointer">
                  {isSave || AlreadyApplyedCollegeFilter?.length > 0 ? (
                    <FaHeart size={10} color="red" />
                  ) : (
                    <FaRegHeart color="black" size={10} />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col">
          <div className="absolute left-4 -top-7">
            <Image
              width={150}
              height={150}
              src={college?.logo?.data?.attributes?.url}
              alt={college?.college_name}
              className="w-[55px] h-[50px] object-fit rounded"
            />
          </div>
          <div className="stars flex justify-end mt-2 mr-2">
            <StarRating rating={3} totalStars={5} />
          </div>
          <div className="p-2 pt-4 flex-1 flex flex-col gap-2">
            <div>
              <Link href={`/colleges/${id}/${urlInfo}`}>
                <h4 className="text-primary text-lg font-semibold line-clamp-1">
                  {college?.college_name}
                </h4>
              </Link>
              <p className="text-[13px] text-secondary-text font-normal line-clamp-1">
                {"Public"}, {college?.city?.data?.attributes?.city_name} ,
                {college?.state?.data?.attributes?.state_name}
              </p>
            </div>
            {college?.approved_by?.data?.length > 0 ? (
              <div className="text-xs flex gap-1 items-center text-secondary-text">
                <Image
                  src={ApprovedByIcon}
                  width={20}
                  height={20}
                  alt={"approvedBy"}
                />
                <span className=" font-light">Approved By:</span>{" "}
                <div className="flex gap-[6px]">
                  {college?.approved_by?.data?.length > 0 &&
                    college?.approved_by?.data
                      .slice(0, 3)
                      .map((tag: any, index: number) => (
                        <ColoredTag
                          key={index}
                          text={tag?.attributes?.organisation_name}
                        />
                      ))}

                  {college?.approved_by?.data.length > 3 && (
                    <span className="text-xs text-primary cursor-pointer">
                      +more
                    </span>
                  )}
                </div>
              </div>
            ): <span>&nbsp;</span>}
            <div className="text-sm flex gap-1 items-center text-secondary-text ml-1 font-light">
              <Image
                src={FlagIcon}
                width={14}
                height={14}
                alt={"type of college"}
              />
              {`${college?.college_type?.data?.attributes?.college_type}`}
            </div>
          </div>

          <button
            disabled={isCollegeApplied}
            onClick={onApplyNow}
            className="cursor-pointer w-full p-[10px] bg-primary rounded-b-lg text-center text-white"
          >
            {isCollegeApplied ? "Applied" : "Apply Now"}
          </button>
        </div>
      </div>
    </>
  );
}
