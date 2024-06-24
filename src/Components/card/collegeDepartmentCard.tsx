"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ApprovedByIcon,
  CashIcon,
  FlagIcon,
  HeartIcon,
  MedalIcon,
  LocationIcon,
} from "@/src/Asset";
import ColoredTag from "../tag/coloredTag";
import StarRating from "../starRating/starRating";
import { useRouter } from "next/router";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { GET_USER_METADATA_COURSE } from "@/src/graphql/userMetaData/userMetaData";
import { useAppSelector } from "@/src/store";
import { useQuery, useMutation } from "@apollo/client";
import { ID } from "@/types/global";
import useUserSignup from "@/src/Hooks/useSignup";
import useUserMetaData from "@/src/Hooks/useUserMetaData";

export default function CollegeDepartmentCard({
  course,
  college,
  onApplyNow,
  setIsLoginModalOpen,
  courseId,
}: any) {
  const router = useRouter();

  // Function to handle the click event
  const handleLinkClick = () => {
    router.push(`/colleges/${college?.college_url}/department?number=4`);
  };

 
  let isLogin = useAppSelector((state) => state.auth.authState);
  const { saveCourse } = useUserMetaData();

  // =============== save ============
  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const userMetaId: ID = getUserDataMetaId(userID);

  const { data: CourseMetaUser } = useQuery(GET_USER_METADATA_COURSE, {
    variables: { id: userMetaId },
  });

  const [selectedSave, setSelectedSave] = useState<any[]>([]);
  const [isSaveCourse, setIsSaveCourse] = useState<any[]>([]);
  const [isSave, setIsSave] = useState<boolean>(false);

  useEffect(() => {
    if (CourseMetaUser) {
      const fetchedCourses =
        CourseMetaUser?.usersMetaDataes?.data[0]?.attributes?.save_course?.flatMap(
          (course: { courses: { data: any[] } }) =>
            course?.courses?.data?.map((c: any) => ({
              id: c?.id,
              attributes: {
                courses: c?.id,
              },
            }))
        );
      setSelectedSave(fetchedCourses || []);
      setIsSaveCourse(CourseMetaUser?.usersMetaDataes?.data[0]?.attributes?.save_course || []);
    }
  }, [CourseMetaUser]);

  const uniqueId = () => Math.random().toString(36).substr(2, 9);

  const handeSave = async () => {
    try {
      if (isLogin) {
        const isAlreadySaved = selectedSave?.some(
          (item: any) => item?.attributes?.courses === courseId
        );

        if (!isAlreadySaved) {
          const newSave = {
            id: uniqueId(),
            attributes: {
              courses: courseId,
            },
          };

          const response = await saveCourse({
            variables: {
              id: userMetaId,
              save_course: [...selectedSave, newSave].map(
                (item: { attributes: { courses: any } }) => ({
                  courses: item?.attributes?.courses,
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
            setSelectedSave((prev) => [...prev, newSave]);
          }
        } else {
          Swal.fire({
            position: "center",
            icon: "info",
            title: "Course Already Saved",
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

  const AlreadyAppliedFilter = isSaveCourse?.filter((item: any) => {
    return item?.courses?.data[0]?.id === courseId;
  });

  return (
    <>
      <div className="flex flex-col items-stretch min-w-60 w-full bg-white rounded-lg shadow-lg">
        <div className="relative rounded-t-lg p-2 bg-white">
          <Image
            src={college?.banner?.data[0]?.attributes?.url}
            alt={course?.college_name}
            width={150}
            height={150}
            className="w-full h-36 object-fill rounded-lg"
          />
          <div className="absolute inset-0 px-4 py-6 flex justify-between max-h-max items-center">
            <button
              className="flex gap-2 items-center text-[15px]"
              onClick={() => handeSave()}
              disabled={isSave || AlreadyAppliedFilter?.length > 0}
            >
              <div className="bg-white p-[6px] rounded-full cursor-pointer">
                {isSave || AlreadyAppliedFilter?.length > 0 ? (
                  <FaHeart size={10} color="red" />
                ) : (
                  <FaRegHeart color="black" size={10} />
                )}
              </div>
            </button>
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
            <StarRating rating={3} />
          </div>
          <div className="p-2 py-4 flex-1 flex flex-col gap-2">
            <div style={{ cursor: "pointer" }}>
              <h4
                className="text-primary-text text-lg font-semibold"
                onClick={handleLinkClick}
              >
                {`Department of ${course?.courses_name?.data[0]?.attributes?.course_name}, ${college?.college_name}`}
              </h4>
            </div>
            <div className="text-sm flex gap-1 items-center text-secondary-text">
              <Image
                src={LocationIcon}
                width={15}
                height={15}
                alt={"location"}
              />
              {`${college?.city?.data?.attributes?.city_name}, ${college?.state?.data?.attributes?.state_name}`}
            </div>
            <div className="text-sm flex gap-1 items-center text-secondary-text">
              <Image
                src={ApprovedByIcon}
                width={15}
                height={15}
                alt={"approvedBy"}
              />
              Approved By:{""}
              <div className="flex gap-[6px]">
                <ColoredTag
                  text={
                    college?.approved_by?.data[0]?.attributes?.organisation_name
                  }
                  bgColor="bg-rose-200"
                />
              </div>
            </div>
            <div className="text-sm flex justify-between items-center text-secondary-text">
              <div className="flex gap-1">
                <Image src={MedalIcon} width={15} height={15} alt={"badge"} />
                {`Rank: #${college?.courses?.data.length} by ${college?.ranked_by?.data[0]?.attributes?.ranking_body_name}`}
              </div>
              <div className="flex gap-1">
                <Image src={FlagIcon} width={15} height={15} alt={"badge"} />
                {`${college?.college_type?.data?.attributes?.college_type}`}
              </div>
            </div>
            <div className="text-sm flex gap-1 items-center text-secondary-text">
              <Image src={FlagIcon} width={15} height={15} alt={"badge"} />
              {`${college?.courses?.data.length} Total Courses`}
            </div>
            <div>
              <Link href={`/courses/${course?.courses_name?.data?.id}`}>
                <p className=" text-primary underline text-xl font-semibold">
                  {course?.courses_name?.data?.attributes?.course_name}
                </p>
              </Link>
            </div>
            <div>
              <div className="text-base flex gap-1 items-center text-secondary-text">
                <Image src={CashIcon} width={25} height={25} alt={"Cash"} />
                <span className="text-2xl text-[#B12704] font-medium">
                  {course?.fee_amount}
                </span>{" "}
                - {course?.fee_label}
              </div>
            </div>
          </div>

          <div
            onClick={onApplyNow}
            className="w-full p-[10px] bg-primary rounded-b-lg text-center text-white cursor-pointer"
          >
            Apply Now
          </div>
        </div>
      </div>
    </>
  );
}
