import Image from "next/image";
import Accordian from "@/src/Components/accordian/accordian";
import CollegeCard from "@/src/Components/card/collegeCard";
import CarouselComponent from "@/src/Components/carousel/carousel";
import GetExpertHelp from "../@college/getExpertHelp/getExpertHelp";
import CollegeDepartmentCard from "@/src/Components/card/collegeDepartmentCard";
import ProgramsComponent from "../courseComponents/programs/programs";
import CoursePrimaryCard from "../courseComponents/cards/coursePrimaryCard";
import ExamPrimaryCard from "../examComponents/cards/examPrimaryCard";
import ScholarshipApplyCard from "../card/scholarshipApplyCard";
import TopCareersCard from "../card/TopCareersCard";
import Reviews from "../reviews/reviews";
import DiscussionFrom from "../discussionForm/discussionForm";
import NewsUpdates from "../newsUpdates/newsUpdates";
import CollegeCompare from "../@college/collegeCompare/collegeCompare";
import TopCountriesAcceptingAdmissionCard from "../studyAbroadListingCard/topCountriesAcceptingAdmissionCard/topCountriesAcceptingAdmissionCard";
import CollegeListItem from "../collegeListItem/collegeListItem";
import ExamListItem from "../examComponents/examListItem/examListItem";
import CareerApplyCard from "../@carears/CareerApplyCard/CareerApplyCard";
import CourseListItem from "../courseComponents/courseListItem/courseListItem";
import { useEffect, useState } from "react";
import ImageModal from "../galleryModal/galleryModal";
import BasicInformation from "../consultingModule/basicInformation/basicInformation";
import userFrom from "@/src/Hooks/userFrom";
import TopScholarshipWorldCard from "../card/topScholarshipWorldCard";
import { CiSearch } from "react-icons/ci";
import Login from "../Login/Login";

export default function PageData({ TabData, pageData, id, collegeId }: any) {
  const { CollegeApplicatonListData } = userFrom();
  const tableRegex = /<table[^>]*>[\s\S]*?<\/table>/;
  // const tableMatch = TabData?.Content?.match(tableRegex);
  // const extractedTableHtml = tableMatch ? tableMatch[0] : "";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedCollegeId, setSelectedCollegeId] = useState(null);

  const handleOpenModal = (collegeId: any) => {
    setSelectedCollegeId(collegeId);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const section = document.getElementById(`section-${id}`);
    if (section) {
      const marginTopPercentage = 20; // Adjust as needed
      const viewportHeight = window.innerHeight;
      const marginTop = marginTopPercentage * viewportHeight;
      const topOffset =
        section.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }, [id]);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  const FromStep: any = CollegeApplicatonListData?.form_stape;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const filteredCourses = pageData?.Courses?.filter((course: any) => {
    const courseName =
      course?.course_name?.data?.attributes?.course_name.toLowerCase();
    return courseName?.includes(searchTerm.toLowerCase());
  });

  if (TabData?.__typename == "ComponentCommonNewOverview") {
    return (
      <section className="mainSection">
        <div className="flex gap-4 lg:max-w-screen-xl lg:mx-auto mb-4">
          <div className="flex-1 flex flex-col gap-4">
            <Accordian title={TabData?.heading} titlePrimary opened>
              <div className="flex flex-col gap-5" id={id}>
                <div
                  dangerouslySetInnerHTML={{ __html: TabData?.Content }}
                  className="font-poppins text-base text-wrap !overflow-x-auto ckeditorData "
                ></div>
              </div>
            </Accordian>
          </div>
        </div>
      </section>
    );
  } else if (TabData?.__typename == "ComponentCommonFaq") {
    return (
      <Accordian title={TabData?.heading} titlePrimary opened>
        <div className="flex flex-col gap-4 text-sm" id={id}>
          {TabData?.questions?.map((question: any, index: number) => {
            return (
              <Accordian title={question?.Question} key={index}>
                {question?.Answer}
              </Accordian>
            );
          })}
        </div>
      </Accordian>
    );
  } else if (TabData?.__typename == "ComponentCommonGallery") {
    return (
      <>
        <Accordian title={TabData?.heading} titlePrimary opened>
          <div className="flex flex-col gap-5" id={id}>
            <div className="images grid grid-flow-row grid-cols-3 gap-x-4 gap-y-4 ">
              {pageData?.gallery?.data.map((photo: any, index: number) => {
                return (
                  <div key={index} className="">
                    <Image
                      src={photo?.attributes?.url}
                      width={500}
                      height={500}
                      className="w-full h-44 object-cover hover:opacity-75 ease-in-out duration-200 hover:border-2 hover:p-1 hover:border-blue-500 cursor-pointer"
                      onClick={() => openModal(photo.attributes.url)}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Accordian>
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedImage={selectedImage}
          images={pageData?.gallery?.data}
          setSelectedImage={setSelectedImage}
        />
      </>
    );
  } else if (TabData?.__typename == "ComponentCommonRecommendedColleges") {
    return (
      <div
        className="w-96 max-w-[22rem] md:w-full md:max-w-screen-sm lg:max-w-[932px] overflow-hidden "
        id={id}
      >
        <div className="pt-4 pb-6 px-6 bg-primary-light rounded w-full">
          <CarouselComponent
            slidesDesktop={3}
            slidesTablet={2}
            titleColor="text-primary"
            showPagination={false}
            title="Recommended Colleges"
            slides={TabData?.colleges?.data?.map(
              (college: any, index: number) => {
                return (
                  <CollegeCard
                    college={college?.attributes}
                    id={college?.attributes?.college_url}
                    key={index}
                    collegeId={college?.id}
                    setIsLoginModalOpen={setIsLoginModalOpen}
                    onApplyNow={() =>
                      handleOpenModal(
                        college?.attributes?.college_type?.data?.id
                      )
                    }
                  />
                );
              }
            )}
          />
        </div>
        {isOpen && (
          <BasicInformation
            id={selectedCollegeId}
            isSectionCheck={"College"}
            FromStep={FromStep}
            onClose={handleCloseModal}
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
  } else if (TabData?.__typename == "ComponentCommonRecommendedCourses") {
    return (
      <div
        className="w-96 max-w-[22rem] md:w-full md:max-w-screen-sm lg:max-w-screen-lg overflow-hidden "
        id={id}
      >
        <div className="pt-4 pb-6 px-6 bg-primary-light rounded w-full">
          <CarouselComponent
            slidesDesktop={3}
            slidesTablet={2}
            titleColor="text-primary"
            showPagination={false}
            title="Recommended Courses"
            slides={TabData?.recommended_courses?.data?.map(
              (course: any, index: number) => {
                return (
                  <CoursePrimaryCard
                    course={course?.attributes}
                    key={index}
                    onApplyNow={() => handleOpenModal(course?.id)}
                    // onSave={handeSaveCollege}
                  />
                );
              }
            )}
          />
        </div>
        {isOpen && (
          <BasicInformation
            id={selectedCollegeId}
            isSectionCheck={"Course"}
            FromStep={FromStep}
            onClose={handleCloseModal}
          />
        )}
      </div>
    );
  } else if (TabData?.__typename == "ComponentCommonRecommendedExams") {
    return (
      <div
        className="w-96 max-w-[22rem] md:w-full md:max-w-screen-sm lg:max-w-screen-lg overflow-hidden "
        id={id}
      >
        <div className="pt-4 pb-6 px-6 bg-primary-light rounded w-full">
          <CarouselComponent
            slidesDesktop={3}
            slidesTablet={2}
            titleColor="text-primary"
            showPagination={false}
            title="Recommended Exams"
            slides={TabData?.exams?.data?.map((exam: any, index: number) => {
              return (
                <ExamPrimaryCard
                  topExam={exam?.attributes}
                  key={index}
                  id={id}
                  onApplyNow={() => handleOpenModal(exam?.id)}
                  // onSave={handeSaveCollege}
                />
              );
            })}
          />
        </div>
        {isOpen && (
          <BasicInformation
            id={selectedCollegeId}
            isSectionCheck={"Exam"}
            FromStep={FromStep}
            onClose={handleCloseModal}
          />
        )}
      </div>
    );
  } else if (TabData?.__typename == "ComponentCommonRecommendedCareers") {
    return (
      <div
        className="w-96 max-w-[22rem] md:w-full md:max-w-screen-sm lg:max-w-screen-lg overflow-hidden "
        id={id}
      >
        <div className="pt-4 pb-6 px-6 bg-primary-light rounded w-full">
          <CarouselComponent
            slidesDesktop={3}
            slidesTablet={2}
            titleColor="text-primary"
            showPagination={false}
            title="Recommended Careers"
            slides={TabData?.careers?.data?.map(
              (career: any, index: number) => {
                return (
                  <TopCareersCard
                    CareersData={career?.attributes}
                    carrerID={career?.id}
                    setIsLoginModalOpen={setIsLoginModalOpen}
                    key={index}
                    onApplyNow={() => handleOpenModal(career?.id)}
                  />
                );
              }
            )}
          />
        </div>
        {isOpen && (
          <BasicInformation
            id={selectedCollegeId}
            isSectionCheck={"Career"}
            FromStep={FromStep}
            onClose={handleCloseModal}
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
  } else if (TabData?.__typename == "ComponentCommonRecommendedScholarships") {
    return (
      <div
        className="w-96 max-w-[22rem] md:w-full md:max-w-screen-sm lg:max-w-screen-lg overflow-hidden "
        id={id}
      >
        <div className="pt-4 pb-6 px-6 bg-primary-light rounded w-full">
          <CarouselComponent
            slidesDesktop={3}
            slidesTablet={2}
            titleColor="text-primary"
            showPagination={false}
            title="Recommended Scholarships"
            slides={TabData?.scholarships?.data?.map(
              (scholarship: any, index: number) => {
                return (
                  <TopScholarshipWorldCard
                    ScholarshipData={scholarship?.attributes}
                    scholarshipID={scholarship?.id}
                    key={index}
                    onApplyNow={() => handleOpenModal(scholarship?.id)}
                    setIsLoginModalOpen={setIsLoginModalOpen}
                  />
                );
              }
            )}
          />
        </div>
        {isOpen && (
          <BasicInformation
            FromStep={FromStep}
            id={selectedCollegeId}
            isSectionCheck={"Scholarships"}
            onClose={handleCloseModal}
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
  } else if (TabData?.__typename == "ComponentCommonRecommendedCountries") {
    return (
      <div
        className="w-96 max-w-[22rem] md:w-full md:max-w-screen-sm lg:max-w-screen-lg overflow-hidden "
        id={id}
      >
        <div className="pt-4 pb-6 px-6 bg-primary-light rounded w-full">
          <CarouselComponent
            slidesDesktop={3}
            slidesTablet={2}
            titleColor="text-primary"
            showPagination={false}
            title="Recommended Countries"
            slides={TabData?.countries?.data?.map(
              (country: any, index: number) => {
                return (
                  <TopCountriesAcceptingAdmissionCard
                    key={index}
                    id={country?.id}
                    CountryData={country?.attributes}
                  />
                );
              }
            )}
          />
        </div>
      </div>
    );
  } else if (TabData?.__typename == "ComponentCommonBannerComponent") {
    return (
      <GetExpertHelp
        heading={TabData?.heading}
        buttonText={TabData?.button_text}
        description={TabData?.description}
        logo={pageData?.logo?.data?.attributes?.url}
        banner={""}
      />
    );
  } else if (TabData?.__typename == "ComponentCommonDepartmentComponent") {
    return (
      <Accordian title={TabData?.heading} titlePrimary opened>
        <div className="flex flex-col gap-4 text-sm" id={id}>
          <CarouselComponent
            slidesDesktop={2}
            slidesTablet={2}
            titleColor="text-primary"
            showPagination={false}
            title={"Departments"}
            slideGap="gap-0"
            slides={TabData?.courses?.map((course: any, index: number) => {
              return (
                <div className="px-2">
                  <CollegeDepartmentCard
                    course={course}
                    college={pageData}
                    courseId={course?.courses_name?.data[0]?.id}
                    key={index}
                    onApplyNow={() => handleOpenModal(course?.id)}
                    setIsLoginModalOpen={setIsLoginModalOpen}
                  />
                </div>
              );
            })}
          />
        </div>
        {isOpen && (
          <BasicInformation
            id={selectedCollegeId}
            isSectionCheck={"Course"}
            FromStep={FromStep}
            onClose={handleCloseModal}
          />
        )}
        {isLoginModalOpen && (
          <Login
            isLoginModalOpen={isLoginModalOpen}
            setIsLoginModalOpen={setIsLoginModalOpen}
          />
        )}
      </Accordian>
    );
  } else if (TabData?.__typename == "ComponentCommonCourseComponent") {
    return (
      <Accordian title={TabData?.heading} titlePrimary opened>
        <div className="p-2 flex flex-col gap-4 text-sm">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CiSearch className="text-gray-400" />
            </span>
            <input
              type="text"
              className="p-3 pl-10 border border-gray-300 outline-gray-300 w-full rounded-md"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {filteredCourses.length > 0 ? (
            filteredCourses.map((course: any, index: any) => {
              return (
                <ProgramsComponent
                  course={course}
                  college={pageData}
                  key={index}
                  onApplyNow={() => handleOpenModal(course?.id)}
                />
              );
            })
          ) : (
            <div className="text-center text-gray-500 mt-4">
              No search results found
            </div>
          )}
        </div>
        {isOpen && (
          <BasicInformation
            id={selectedCollegeId}
            isSectionCheck={"Course"}
            FromStep={FromStep}
            onClose={handleCloseModal}
          />
        )}
      </Accordian>
    );
  } else if (TabData?.__typename == "ComponentCommonCollegesComponent") {
    return (
      <Accordian title={TabData?.heading} titlePrimary>
        <div className="p-6 flex flex-col gap-4 text-sm" id={id}>
          {pageData?.colleges?.data?.map((college: any, index: number) => {
            return (
              <CollegeListItem
                college={college?.attributes}
                id={college?.id}
                key={index}
              />
            );
          })}
        </div>
      </Accordian>
    );
  } else if (TabData?.__typename == "ComponentCommonExamsComponent") {
    return (
      <Accordian title={TabData?.heading} titlePrimary>
        <div className="p-6 flex flex-col gap-4 text-sm" id={id}>
          {pageData?.exams?.data?.map((exam: any, index: number) => {
            return (
              <ExamListItem ExamData={exam} examID={exam?.id} key={index} />
            );
          })}
        </div>
      </Accordian>
    );
  } else if (TabData?.__typename == "ComponentCommonCareersComponent") {
    return (
      <Accordian title={TabData?.heading} titlePrimary>
        <div className="grid gap-x-4 gap-y-2 grid-cols-3" id={id}>
          {pageData?.careers?.data?.map((career: any, index: number) => {
            return (
              <CareerApplyCard
                id={career?.id}
                CarearsData={career?.attributes}
                key={index}
              />
            );
          })}
        </div>
      </Accordian>
    );
  } else if (TabData?.__typename == "ComponentCommonScholarshipComponent") {
    return (
      <Accordian title={TabData?.heading} titlePrimary>
        <div className="grid gap-x-4 gap-y-2 grid-cols-3" id={id}>
          {pageData?.scholarships?.data?.map(
            (scholarship: any, index: number) => {
              return (
                <ScholarshipApplyCard
                  scholarshipID={scholarship?.id}
                  ScholarshipData={scholarship?.attributes}
                  key={index}
                />
              );
            }
          )}
        </div>
      </Accordian>
    );
  } else if (TabData?.__typename == "ComponentCommonCoursesComponent") {
    return (
      <Accordian title={TabData?.heading} titlePrimary>
        <div className="p-6 flex flex-col gap-4 text-sm" id={id}>
          {pageData?.courses?.data?.map((course: any, index: number) => {
            return (
              <CourseListItem
                Course={course?.attributes}
                id={course?.id}
                key={index}
              />
            );
          })}
        </div>
      </Accordian>
    );
  } else if (TabData?.__typename == "ComponentCommonRatingAndReview") {
    let name = "";
    if (pageData?.__typename == "College") {
      name = pageData?.college_name;
    } else if (pageData?.__typename == "Exam") {
      name = pageData?.exam_name;
    } else if (pageData?.__typename == "Course") {
      name = pageData?.course_name;
    } else if (pageData?.__typename == "Career") {
      name = pageData?.career_title;
    } else if (pageData?.__typename == "Scholarship") {
      name = pageData?.scholarship_title;
    } else if (pageData?.__typename == "Country") {
      name = pageData?.country_name;
    }

    return (
      <Reviews
        ratingReview={pageData?.review}
        courses={pageData?.courses}
        reviews={pageData?.review_component}
        id={id}
        name={name}
      />
    );
  } else if (TabData?.__typename == "ComponentCommonNewsAndUpdate") {
    return <NewsUpdates pageData={pageData} />;
  } else if (TabData?.__typename == "ComponentCommonDiscussionForum") {
    return (
      <DiscussionFrom
        title={TabData?.heading}
        description={TabData?.description}
      />
    );
  } else if (TabData?.__typename == "ComponentCommonCompareComponent") {
    return (
      <div className="max-w-screen-xl overflow-hidden">
        <div className="pb-6 rounded w-full">
          {/* <CollegeInfoCompare
            college={pageData}
            title={TabData?.heading}
            description={TabData?.description}
          /> */}
          <CollegeCompare
            college={pageData}
            title={TabData?.heading}
            description={TabData?.description}
          />
        </div>
      </div>
    );
  }
}
