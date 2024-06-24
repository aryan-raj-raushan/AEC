/* eslint-disable @next/next/no-img-element */
// import { Button } from "@mui/material";
import Link from "next/link";
import Button from "../button/button";
import Tag from "../tag/tags";
import BasicInformation from "@/src/Components/consultingModule/basicInformation/basicInformation";
import { useState } from "react";
import userFrom from "@/src/Hooks/userFrom";
import { useRouter } from "next/router";

type Props = {
  college: {
    dawonload_brochure: any;
    courses: any;
    id: any;
    banner: any;
    canonical: string;
    college_name: string;
    description: string;
    is_top_college: boolean;
    keywords: string;
    logo: any;
    og_description: string;
    og_image: any;
    og_image_alt: any;
    og_image_alt_text: string;
    og_title: string;
    og_url: string;
    page_data: any;
    title: string;
    state: any;
    pin_code: number;
    city: any;
    countries: any;
    approved_by: any;
    college_type?: any;
    ranked_by?: any;
    nav_items?: any;
    college_url: string;
  };
  id: string;
};

export default function CollegeListItem({
  college,
  id,
  collegeId,
  AppliedCollege,
}: any) {
  const { CollegeApplicatonListData } = userFrom();
  const handelDawonloadBrochure = () => {
    window.open(
      college?.dawonload_brochure?.data[0]?.attributes?.url,
      "_blank"
    );
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

  const FromStep: any = CollegeApplicatonListData?.form_stape;

  const isCollegeApplied = AppliedCollege?.some(
    (applied: { college: { data: { id: any } } }) =>
      applied?.college?.data?.id === collegeId
  );

  const router = useRouter();

  const handleLinkClick = () => {
    const url = `/colleges/${id}/${"College Compare "
      ?.replace(/\s+/g, "-")
      .toLowerCase()}`;
    router.push(url);
  };

  return (
    <div className="my-6 border-[#DDDDDD] shadow-md rounded-lg">
      <div className="px-4 flex item-center gap-2 lg:gap-4 shadow-sm rounded border flex-col lg:flex-row py-4 lg:py-2">
        <div className="flex items-center lg:pt-0">
          <img
            src={college?.logo?.data?.attributes?.url}
            alt={college?.college_name}
            className="w-[75px] h-[75px] lg:w-[150px] lg:h-[150px] object-fill"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1 lg:border-r lg:border-r-primary-light md:border-b border-b-primary-light lg:border-b-0 pb-2 lg:pb-0">
          <div className="flex gap-x-2 flex-wrap items-center font-light text-sm leading-tight">
            <h1>
              {" "}
              {college?.state?.data?.attributes?.state_name},{" "}
              {college?.city?.data?.attributes?.city_name}
            </h1>{" "}
            |
            <Tag
              text={`${college?.approved_by?.data[0]?.attributes?.organisation_name} Approved`}
            />
            <Tag
              text={`${college?.college_type?.data?.attributes?.college_type}`}
            />
            <h1>
              {`Ranking By ${college?.ranked_by?.data[0]?.attributes?.ranking_body_name}`}
            </h1>
          </div>
          <Link
            href={`/colleges/${college.college_url}/${college?.nav_items?.data[0]?.attributes?.title}`}
          >
            <div>
              <h2 className="text-lg leading-tight md:text-xl font-semibold text-primary line-clamp-2">
                {college.college_name},{" "}
                {college?.city?.data?.attributes?.city_name},{" "}
                {college?.state?.data?.attributes?.state_name}
              </h2>
            </div>
          </Link>
          <div className="flex flex-col items-stretch">
            <div className="pr-4 mr-4  flex gap-2 items-center">
              {college?.Courses?.length > 0 &&
                college.Courses[0]?.course_fee && (
                  <p className="text-[#B12704] font-semibold text-lg">
                    ₹ {college.Courses[0]?.course_fee}
                  </p>
                )}

              {college?.Courses?.length > 0 &&
                college.Courses[0]?.course_name?.data?.attributes
                  ?.course_name && (
                  <p className="text-sm text-secondary-text font-light tracking-tight">
                    {
                      college.Courses[0]?.course_name?.data?.attributes
                        ?.course_name
                    }{" "}
                    First year fees
                  </p>
                )}
            </div>
            <div className="flex gap-x-2 font-light flex-wrap my-2 items-center leading-tight ">
              {college?.nav_items?.data
                ?.slice(0, 5)
                .map((nav: { attributes: { title: string } }, index: any) => {
                  return (
                    <Link
                      href={`/colleges/${id}/${nav?.attributes?.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      key={index}
                      className="text-primary text-sm leading-tight"
                    >
                      {nav?.attributes?.title} |{" "}
                    </Link>
                  );
                })}
              <Link
                href={`/colleges/${id}/${college?.nav_items?.data[0]?.attributes?.title}`}
                className="text-primary font-semibold text-sm"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="inline-flex gap-1 justify-center lg:flex-col md:gap-2 sm:items-center ">
          <button className="w-full lg:w-[160px]" disabled={isCollegeApplied}>
            <Button
              // href={`/colleges/${id}/${college?.nav_items?.data[0]?.attributes?.title}`}

              onClick={() => handleOpenModal()}
              text={isCollegeApplied ? "Applied" : "Apply Now"}
              filled
              fontSize="text-sm"
              width="w-full lg:w-40"
              align="text-center"
              filledColor="bg-secondary"
              paddingY="py-3"
            />
          </button>
          <div className="w-full lg:w-[160px]">
            <Button
              onClick={() => handelDawonloadBrochure()}
              text="Brochure"
              fontSize="text-sm"
              width="lg:w-40 w-full"
              align="text-center"
              filledColor="bg-primary"
              filled
              paddingY="py-3"
            />
          </div>
          <div className=" w-full lg:w-[160px]">
            <Button
              onClick={handleLinkClick}
              // href={`/colleges/${id}/${college?.nav_items?.data[0]?.attributes?.title}`}
              text="Compare"
              outline
              fontSize="text-sm"
              width="lg:w-40"
              showHover={false}
              textColor="text-black"
              align="text-center"
              paddingY="py-3"
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <BasicInformation
          id={collegeId}
          FromStep={FromStep}
          isSectionCheck={"College"}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
