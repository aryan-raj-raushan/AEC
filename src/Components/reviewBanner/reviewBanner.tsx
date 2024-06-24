import { useState } from "react";
import Button from "../button/button";
import ProgressBar from "../progressBar/progressBar";
import StarRating from "../starRating/starRating";
import ReviewModal from "../modal/reviewModal/reviewModal";
import { useAppSelector } from "@/src/store";
import Login from "../Login/Login";
import useColleges from "@/src/Hooks/useColleges";
import SuccessModal from "../modal/SuccessReview/SuccessReviewModal";

const ReviewBanner = ({ bannerData, id }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const {GetReviewByUserId} = useColleges()

  const handleOpenModal = () => {
    if (!isLogin) {
      setIsLoginModalOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  // const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    
  };

  let name = "";
  if (bannerData?.__typename == "College") {
    name = bannerData?.college_name;
  } else if (bannerData?.__typename == "Exam") {
    name = bannerData?.exam_name;
  } else if (bannerData?.__typename == "Course") {
    name = bannerData?.course_name;
  } else if (bannerData?.__typename == "Career") {
    name = bannerData?.career_title;
  } else if (bannerData?.__typename == "Scholarship") {
    name = bannerData?.scholarship_title;
  } else if (bannerData?.__typename == "Country") {
    name = bannerData?.country_name;
  }
const {email} =useAppSelector((state) => state.auth);

  let isLogin = useAppSelector((state) => state.auth.authState);

  const{reviewsUserData} = GetReviewByUserId(id, email)

  const isAlreadyReview = reviewsUserData?.length > 0;

  const ReviewData = bannerData?.review;

  // Calculate average ratings for each category
  const averageInfrastructureRating =
    ReviewData?.reduce(
      (acc: any, review: any) =>
        acc + review.infrastructure_hostel_facilities_rating,
      0
    ) / ReviewData?.length;
  const averageAcademicsRating =
    ReviewData?.reduce(
      (acc: any, review: any) => acc + review.academics_faculty_rating,
      0
    ) / ReviewData?.length;
  const averagePlacementsRating =
    ReviewData?.reduce(
      (acc: any, review: any) => acc + review.placements_internships_rating,
      0
    ) / ReviewData?.length;
  const averageCrowdRating =
    ReviewData?.reduce(
      (acc: any, review: any) => acc + review.crowd_campus_life_rating,
      0
    ) / ReviewData?.length;
  const averageFeesRating =
    ReviewData?.reduce(
      (acc: any, review: any) => acc + review.fees_scholarships_rating,
      0
    ) / ReviewData?.length;

  const overallRating =
    ReviewData?.reduce(
      (acc: any, review: any) => acc + review.overallrating,
      0
    ) / ReviewData?.length;

  return (
    <div className="my-4">
      <div className="border border-primary-text-light rounded-md flex flex-col md:flex-row">
        <div className="flex-1 border-r border-r-primary-text-light">
          <div
            className={`flex justify-between items-center px-5 py-4 border-b border-primary-text-light`}
          >
            <p
              className={`flex-1 text-primary text-lg leading-tight md:ext-2xl font-semibold `}
            >
              {name} Overall Rating
            </p>
          </div>
          <div className="p-4 p flex flex-col md:flex-row gap-4">
            <div className="flex items-center justify-center md:justify-start md:items-start">
              <div className="bg-primary-light p-8 flex flex-col items-center justify-center md:w-64 md:h-56">
                <div>
                  <b>Overall Rating </b>(Out of 5)
                </div>
                <div className="text-4xl font-bold my-2">
                  {overallRating.toFixed(1)}
                </div>
                <div>
                  <StarRating rating={overallRating} />
                </div>
                {ReviewData?.length && (
                  <div className="text-xs text-primary-text">
                    Based on {ReviewData?.length} Verified Reviews
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 px-8 flex flex-col justify-between">
              <div>
                <p className="font-medium text-sm">
                  College Infrastructure & Hostel Facilities
                </p>
                <ProgressBar value={averageInfrastructureRating} total={5} />
              </div>
              <div>
                <p className="font-medium text-sm">Academics & Faculty</p>
                <ProgressBar value={averageAcademicsRating} total={5} />
              </div>
              <div>
                <p className="font-medium text-sm">Placements & Internships</p>
                <ProgressBar value={averagePlacementsRating} total={5} />
              </div>
              <div>
                <p className="font-medium text-sm">Crowd & Campus Life</p>
                <ProgressBar value={averageCrowdRating} total={5} />
              </div>
              <div>
                <p className="font-medium text-sm">Fees & Scholarships</p>
                <ProgressBar value={averageFeesRating} total={5} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-primary-text p-4 md:p-7 flex flex-col justify-center items-center">
          <h3 className="text-primary text-2xl font-semibold">
            Write a helpful review!
          </h3>
          <p className="w-80 mt-[10px] text-center">
            {`It doesn't matter if it's good or bad, as long as it's honest
                and true.It doesn't matter if it's good or bad, as long as it's
                honest and true.`}
          </p>
          <div className="mt-5 md:mt-10">
            <Button
              onClick={handleOpenModal}
              text={"Write a Review"}
              paddingX="px-4"
              paddingY="py-2"
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <>
          <ReviewModal
            ReviewData={ReviewData}
            id={id}
            isOpen={handleOpenModal}
            onClose={handleCloseModal}
            onSuccess={() => setIsSuccessModalOpen(true)} 
          />
        </>
      )}
       {isSuccessModalOpen && (
        <SuccessModal
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}
      {isLoginModalOpen && (
        <Login
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
      )}
    </div>
  );
};

export default ReviewBanner;
