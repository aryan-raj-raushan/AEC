import { useEffect, useState } from "react";
import ContainerBox from "@/src/Components/containerBox/containerBox";
import StarRating from "@/src/Components/starRating/starRating";
import { useAppSelector } from "@/src/store";
import useUserSignup from "@/src/Hooks/useSignup";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import Image from "next/image";

export default function YourReviews() {
  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const { getUserMetaData } = useUserMetaData();
  const userMetaId: any = getUserDataMetaId(userID);

  const userData: any = getUserMetaData(userMetaId);
  const [collegeReviews, setCollegeReviews] = useState<any[]>([]);

  useEffect(() => {
    const reviews: any[] = userData?.userAllMetaData?.applied_colleges.map(
      (item: any) => {
        return item?.college?.data?.attributes?.review;
      }
    );
    setCollegeReviews(reviews);
  }, []);

  const getInitials = (name: any) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  const getColor = (name: any) => {
    const colors = ["ff5733", "33ff57", "3357ff", "ff33a8", "a833ff", "33fff0"];
    const index = name ? name.charCodeAt(0) % colors.length : 0;
    return colors[index];
  };

  const ProfileImage = ({ name }: any) => {
    const initials = getInitials(name);
    const color = getColor(name);
    const src = `https://via.placeholder.com/80/${color}/ffffff?text=${initials}`;

    return <Image src={src} width={80} height={80} alt={name} />;
  };

  return (
    <>
      <section className="text-primary-text w-full h-[400px] overflow-y-auto">
        <div className="flex gap-4 w-full h-[400px]">
          <div className="main flex-1 flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-6">
              {collegeReviews?.map((collegeReview, collegeIndex) => (
                <ContainerBox key={collegeIndex}>
                  <div className="flex flex-col gap-8">
                    <ProfileImage name={userData?.userAllMetaData?.name} />
                    <h1 className="font-semibold text-2xl">
                      {userData?.userAllMetaData?.name}
                    </h1>
                    <div className="flex items-center gap-2">
                      <div className=" font-semibold">
                        College Infrastructure & Hostel Facilities:
                      </div>
                      <div className="text-primary-text flex gap-2 items-start">
                        <p>
                          {
                            collegeReview.infrastructure_hostel_facilities_detail
                          }
                        </p>
                        <StarRating
                          rating={
                            collegeReview.infrastructure_hostel_facilities_rating
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-2">
                      <div className=" font-semibold">Academics & Faculty:</div>
                      <div className="text-primary-text flex gap-2 items-start">
                        <p>{collegeReview.academics_faculty_details}</p>
                        <StarRating
                          rating={collegeReview.academics_faculty_rating}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-2">
                      <div className=" font-semibold">
                        Placements & Internships:
                      </div>
                      <div className="text-primary-text flex gap-2 items-start">
                        <p>{collegeReview.placements_internships_details}</p>
                        <StarRating
                          rating={collegeReview.placements_internships_rating}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-2">
                      <div className=" font-semibold">Crowd & Campus Life:</div>
                      <div className="text-primary-text flex gap-2 items-start">
                        <p>{collegeReview.crowd_campus_life_details}</p>
                        <StarRating
                          rating={collegeReview.crowd_campus_life_rating}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-2">
                      <div className=" font-semibold">Fees & Scholarships:</div>
                      <div className="text-primary-text flex gap-2 items-start">
                        <p>{collegeReview.fees_scholarships_details}</p>
                        <StarRating
                          rating={collegeReview.fees_scholarships_rating}
                        />
                      </div>
                    </div>
                  </div>
                </ContainerBox>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
