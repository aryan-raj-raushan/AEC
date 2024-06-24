"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ContainerBox from "@/src/Components/containerBox/containerBox";
import { DislikeIcon, LikeIcon } from "@/src/Asset";
import Accordian from "@/src/Components/accordian/accordian";
import Dropdown from "@/src/Components/dropdown/dropdown";
import StarRating from "@/src/Components/starRating/starRating";

export default function Reviews({ reviews, name, id, ratingReview }: any) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [ratings, setRatings] = useState<number[]>([]);

  useEffect(() => {
    const categorySet = new Set<string>();
    const ratingSet = new Set<number>();

    ratingReview?.forEach((review:any) => {
      if (review.academics_faculty_details)
        categorySet.add("Academics & Faculty");
      if (review.infrastructure_hostel_facilities_detail)
        categorySet.add("Infrastructure & Hostel Facilities");
      if (review.placements_internships_details)
        categorySet.add("Placements & Internships");
      if (review.crowd_campus_life_details)
        categorySet.add("Crowd & Campus Life");
      if (review.fees_scholarships_details)
        categorySet.add("Fees & Scholarships");
      if (review.overallrating) ratingSet.add(Math.floor(review.overallrating));
    });

    // Ensure all ratings from 1 to 5 are included
    for (let i = 1; i <= 5; i++) {
      ratingSet.add(i);
    }

    const sortedRatings = Array.from(ratingSet).sort((a, b) => b - a);
    setCategories(Array.from(categorySet));
    setRatings(sortedRatings);
  }, [ratingReview]);

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

  const handleCategorySelect = (option: any) => {
    setSelectedCategory(option.value);
  };

  const handleRatingSelect = (option: any) => {
    setSelectedRating(option.value);
  };

  const filteredReviews = ratingReview?.filter((review: any) => {
    const matchesCategory =
      selectedCategory === "" ||
      (selectedCategory === "Academics & Faculty" &&
        review.academics_faculty_details) ||
      (selectedCategory === "Infrastructure & Hostel Facilities" &&
        review.infrastructure_hostel_facilities_detail) ||
      (selectedCategory === "Placements & Internships" &&
        review.placements_internships_details) ||
      (selectedCategory === "Crowd & Campus Life" &&
        review.crowd_campus_life_details) ||
      (selectedCategory === "Fees & Scholarships" &&
        review.fees_scholarships_details);

    const matchesRating =
      selectedRating === null ||
      (review.overallrating >= selectedRating &&
        review.overallrating < selectedRating + 1);

    return matchesCategory && matchesRating;
  });

  return (
    <>
      <section className="mainSection max-w-screen-xl mx-auto text-primary-text">
        <div className="flex gap-4">
          <div className="main flex-1 flex flex-col gap-6">
            <ContainerBox
              title={`What Students say about ${name}`}
              titlePrimary
              titleBorder
            >
              <div className="my-4">
                <div className="bg-[#4ABA8E66] flex gap-2 items-center w-max py-1 px-4 rounded-t-lg">
                  <Image src={LikeIcon} objectFit="cover" alt="s" />
                  <p>Likes</p>
                </div>
                <div>
                  <div className="bg-[#4ABA8E] p-5 flex flex-col gap-4 bg-opacity-20">
                    {reviews?.likes?.map((like: any, index: number) => (
                      <div className="flex gap-4 items-center" key={index}>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <circle cx="5" cy="5" r="5" fill="#F2A742" />
                          </svg>
                        </div>
                        <div>{like?.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="my-4">
                <div className="bg-rose-300 flex gap-2 items-center w-max py-1 px-4 rounded-t-lg">
                  <Image src={DislikeIcon} objectFit="cover" alt="s" />
                  <p>Dislikes</p>
                </div>
                <div>
                  <div className="bg-rose-100 p-5 flex flex-col gap-4">
                    {reviews?.dislikes?.map((dislike: any, index: number) => (
                      <div className="flex gap-4 items-center" key={index}>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <circle cx="5" cy="5" r="5" fill="#F2A742" />
                          </svg>
                        </div>
                        <div>{dislike?.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ContainerBox>
            <Accordian title="Filter Reviews By" titlePrimary opened={true}>
              <div className="grid grid-cols-2 grid-flow-row gap-y-4 gap-x-12">
                <Dropdown
                  title="Average rating"
                  options={ratings.map((rating) => ({
                    value: `${rating}`,
                    label: `> ${rating} Stars`,
                  }))}
                  onSelect={handleRatingSelect}
                />
                <Dropdown
                  title="Select Category"
                  options={categories.map((category) => ({
                    value: category,
                    label: category,
                  }))}
                  onSelect={handleCategorySelect}
                />
              </div>

              <div className="flex flex-col gap-6 mt-4">
                {filteredReviews?.map((review: any, index: any) => (
                  <ContainerBox key={index}>
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-start">
                        <ProfileImage name={review?.user_details?.name} />

                        <div className="flex gap-2 items-center">
                          {review?.overallrating ? (
                            <div>Overall Rating: ({review?.overallrating})</div>
                          ) : (
                            <></>
                          )}
                          {review?.overallrating ? (
                            <StarRating rating={review?.overallrating} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      <div className="text-2xl font-semibold capitalize">
                        {review?.user_details?.name}
                      </div>
                      <div className="flex flex-col gap-3">
                        {selectedCategory === "" ||
                        selectedCategory === "Academics & Faculty"
                          ? review?.academics_faculty_details && (
                              <div className="text-primary-text flex items-center gap-2 ">
                                <h1 className="text-primary text-lg font-semibold">
                                  Academics & Faculty :
                                </h1>
                                <p>{review?.academics_faculty_details}</p>
                                {review?.academics_faculty_rating ? (
                                  <StarRating
                                    rating={review?.academics_faculty_rating}
                                  />
                                ) : (
                                  <></>
                                )}
                              </div>
                            )
                          : null}
                        {selectedCategory === "" ||
                        selectedCategory ===
                          "Infrastructure & Hostel Facilities"
                          ? review?.infrastructure_hostel_facilities_detail && (
                              <div className="text-primary-text flex items-center gap-2 ">
                                <h1 className="text-primary text-lg font-semibold">
                                  College Infrastructure & Hostel Facilities :
                                </h1>
                                <p>
                                  {
                                    review?.infrastructure_hostel_facilities_detail
                                  }
                                </p>
                                {review?.infrastructure_hostel_facilities_rating ? (
                                  <StarRating
                                    rating={
                                      review?.infrastructure_hostel_facilities_rating
                                    }
                                  />
                                ) : (
                                  <></>
                                )}
                              </div>
                            )
                          : null}
                        {selectedCategory === "" ||
                        selectedCategory === "Placements & Internships"
                          ? review?.placements_internships_details && (
                              <div className="text-primary-text flex items-center gap-2 ">
                                <h1 className="text-primary text-lg font-semibold">
                                  Placements & Internships :
                                </h1>
                                <p>{review?.placements_internships_details}</p>

                                {review?.placements_internships_rating ? (
                                  <StarRating
                                    rating={
                                      review?.placements_internships_rating
                                    }
                                  />
                                ) : (
                                  <></>
                                )}
                              </div>
                            )
                          : null}
                        {selectedCategory === "" ||
                        selectedCategory === "Crowd & Campus Life"
                          ? review?.crowd_campus_life_details && (
                              <div className="text-primary-text flex items-center gap-2 ">
                                <h1 className="text-primary text-lg font-semibold">
                                  Crowd & Campus Life :
                                </h1>
                                <p>{review?.crowd_campus_life_details}</p>
                                {review?.crowd_campus_life_rating ? (
                                  <StarRating
                                    rating={review?.crowd_campus_life_rating}
                                  />
                                ) : (
                                  <></>
                                )}
                              </div>
                            )
                          : null}
                        {selectedCategory === "" ||
                        selectedCategory === "Fees & Scholarships"
                          ? review?.fees_scholarships_details && (
                              <div className="text-primary-text flex items-center gap-2 ">
                                <h1 className="text-primary text-lg font-semibold">
                                  Fees & Scholarships :
                                </h1>
                                <p>{review?.fees_scholarships_details}</p>
                                {review?.fees_scholarships_rating ? (
                                  <StarRating
                                    rating={review?.fees_scholarships_rating}
                                  />
                                ) : (
                                  <></>
                                )}
                              </div>
                            )
                          : null}
                      </div>
                    </div>
                  </ContainerBox>
                ))}
              </div>
            </Accordian>
          </div>
        </div>
      </section>
    </>
  );
}
