import { AddCollegeCircleImage } from "@/src/Asset";
import Image from "next/image";
import PageInfo from "../../PageInfo/PageInfo";
import ContainerBox from "@/src/Components/containerBox/containerBox";
import CollegeCompareCard from "@/src/Components/card/collegeCompareCard";
import CollegeCompareSeparator from "@/src/Components/@college/collegeCompare/collegeCompareSeparator";
import Dropdown from "@/src/Components/dropdown/dropdown";
import Button from "@/src/Components/button/button";
import CompareTwoColleges from "./compareTwoColleges";
import GetExpertHelp from "../getExpertHelp/getExpertHelp";
import useColleges from "@/src/Hooks/useColleges";
import { useState } from "react";
import { useRouter } from "next/router";
import CollegeSideBarComponent from "../collegeSideBar/collegeSideBar";
import useCourses from "@/src/Hooks/useCourses";
import Accordian from "../../accordian/accordian";

export default function CollegeCompare({ college, title, description }: any) {
  // const router = useRouter();
  // const { CollegeListData } = useColleges();
  // let knowMore = [
  //   {
  //     name: `${college?.college_name} News & Events`,
  //   },
  //   {
  //     name: `${college?.college_name} Placements`,
  //   },
  //   {
  //     name: `${college?.college_name} Scholarship Details`,
  //   },
  //   {
  //     name: `${college?.college_name} Courses & Fees 2024`,
  //   },
  // ];
  // const formattedCollegeOptions = CollegeListData?.map((college) => ({
  //   label: college?.attributes?.college_name,
  //   value: college?.attributes?.college_name,
  // }));

  // const [selectedCollege, setSelectedCollege] = useState<any>(null);
  // const [selectedThirdCollege, setSelectedThirdCollege] = useState<any>(null);
  // const [showSecondCollege, setShowSecondCollege] = useState<boolean>(true);
  // const [showThirdCollege, setShowThirdCollege] = useState<boolean>(false);

  // const handleCollegeSelect = (college: any) => {
  //   const { value } = college;
  //   const selectedValueCollege = CollegeListData.find(
  //     (selected) => selected.attributes?.college_name === value
  //   );
  //   setSelectedCollege(selectedValueCollege?.attributes);
  //   setShowSecondCollege(true);
  // };

  // const handleThirdCollegeSelect = (college: any) => {
  //   const { value } = college;
  //   const selectedValueCollege = CollegeListData.find(
  //     (selected) => selected.attributes?.college_name === value
  //   );
  //   if (selectedValueCollege?.attributes !== selectedThirdCollege) {
  //     setSelectedThirdCollege(selectedValueCollege?.attributes);
  //   }
  //   setShowThirdCollege(true); // Ensure that only the selected college is displayed
  // };

  // const formattedCourseOptions = selectedCollege?.courses?.data?.map(
  //   (course: any) => ({
  //     label: course?.attributes?.course_name,
  //     value: course?.attributes?.course_name,
  //   })
  // );

  // const handleCompareNow = () => {
  //   sessionStorage.setItem("college1", JSON.stringify(college));
  //   sessionStorage.setItem(
  //     "college2",
  //     JSON.stringify(selectedCollege || CollegeListData[0]?.attributes)
  //   );
  //   sessionStorage.setItem(
  //     "college3",
  //     JSON.stringify(selectedThirdCollege || CollegeListData[0]?.attributes)
  //   );
  //   router.replace({
  //     pathname: "/compare",
  //   });
  // };

  // const handleToggleSecondCollege = () => {
  //   setShowSecondCollege(!showSecondCollege);
  // };

  // const handleToggleThirdCollege = () => {
  //   setShowThirdCollege((prevState) => !prevState);
  // };

  // const handleAddSimilarCollege = () => {
  //   const randomIndex = Math.floor(Math.random() * CollegeListData?.length);
  //   setSelectedCollege(CollegeListData[randomIndex]?.attributes);
  //   setSelectedThirdCollege(CollegeListData[randomIndex]?.attributes);
  //   setShowThirdCollege(true);  
  //   setShowSecondCollege(true);
  // };

  const router = useRouter();
  const { CollegeListData } = useColleges();
  let knowMore = [
    {
      name: `${college?.college_name} Department Details`,
    },
    {
      name: `${college?.college_name} Gallery and Virtual Tours Page`,
    },
    {
      name: `${college?.college_name} Ratings and Reviews`,
    },
    {
      name: `${college?.college_name} News and Updates`,
    },
  ];

  const handleItemClick1 = () => {
    // Handle click for the first item
    router.push(`/colleges/${college?.college_url}/department?number=4`);
  };

  const handleItemClick2 = () => {
    // Handle click for the second item
    router.push(`/colleges/${college?.college_url}/department?number=5`);
  };

  const handleItemClick3 = () => {
    // Handle click for the third item
    router.push(`/colleges/${college?.college_url}/department?number=10`);
  };

  const handleItemClick4 = () => {
    // Handle click for the fourth item
    router.push(`/colleges/${college?.college_url}/department?number=6`);
  };

  const formattedCollegeOptions = CollegeListData?.map((college) => ({
    label: college?.attributes?.college_name,
    value: college?.attributes?.college_name,
  }));

  const [selectedCollege, setSelectedCollege] = useState<any>(null);
  const [selectedThirdCollege, setSelectedThirdCollege] = useState<any>(null);
  const [showSecondCollege, setShowSecondCollege] = useState<boolean>(false);
  const [showThirdCollege, setShowThirdCollege] = useState<boolean>(false);

  const handleCollegeSelect = (college: any) => {
    const { value } = college;
    const selectedValueCollege = CollegeListData.find(
      (selected) => selected.attributes?.college_name === value
    );
    setSelectedCollege(selectedValueCollege?.attributes);
    setShowSecondCollege(true);
  };

  const handleThirdCollegeSelect = (college: any) => {
    const { value } = college;
    const selectedValueCollege = CollegeListData.find(
      (selected) => selected.attributes?.college_name === value
    );
    if (selectedValueCollege?.attributes !== selectedThirdCollege) {
      setSelectedThirdCollege(selectedValueCollege?.attributes);
    }
    setShowThirdCollege(true); // Ensure that only the selected college is displayed
  };


  const { CourseListData } = useCourses();

  const formattedCourseOptions = selectedCollege?.courses?.data?.map(
    (course: any) => ({
      label: course?.attributes?.course_name,
      value: course?.attributes?.course_name,
    })
  );

  const handleCompareNow = () => {
    sessionStorage.setItem("college1", JSON.stringify(college));
    sessionStorage.setItem(
      "college2",
      JSON.stringify(selectedCollege || CollegeListData[0]?.attributes)
    );
    sessionStorage.setItem(
      "college3",
      JSON.stringify(selectedThirdCollege || CollegeListData[0]?.attributes)
    );
    router.replace({
      pathname: "/compare",
    });
  };

  const handleToggleSecondCollege = () => {
    setShowSecondCollege(!showSecondCollege);
  };

  const handleAddSimilarCollege = () => {
    // Get the streams and courses offered by the initially selected college
    const collegeStreams = college?.streams?.data.map((stream:any) => stream.attributes.name) || [];
    const collegeCourses = college?.courses?.data.map((course:any) => course.attributes.name) || [];
  
    // Filter the CollegeListData to find colleges offering similar streams and courses, excluding the initially selected college
    const filteredColleges = CollegeListData.filter((c) => {
      // Exclude the initially selected college
      if (c.id === college.id) {
        return false;
      }
  
      const currentCollegeStreams = c.attributes.streams.data.map((stream:any) => stream.attributes.name);
      const currentCollegeCourses = c.attributes.courses.data.map((course:any) => course.attributes.name);
  
      // Check if there are any common streams or courses
      const hasCommonStreams = currentCollegeStreams.some((stream:any) => collegeStreams.includes(stream));
      const hasCommonCourses = currentCollegeCourses.some((course:any) => collegeCourses.includes(course));
  
      return hasCommonStreams || hasCommonCourses;
    });
  
    // If there are no similar colleges, show an alert or handle the case as needed
    if (filteredColleges.length === 0) {
      alert("No similar colleges found.");
      return;
    }
  
    // Select a random college from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredColleges.length);
    const selectedSimilarCollege = filteredColleges[randomIndex].attributes;
  
    setSelectedCollege(selectedSimilarCollege);
    setSelectedThirdCollege(selectedSimilarCollege);
    setShowThirdCollege(true);
    setShowSecondCollege(true);
  };



  return (
    <section className="mainSection max-w-screen-xl mx-auto text-primary-text flex flex-col gap-4">
      <PageInfo
        title={title}
        description={description}
        pageType="collegeCompare"
      />

      <div className="">
        <ContainerBox
          title={`Compare College with ${college?.college_name}`}
          titlePrimary
          titleBorder
        >
          <div className="flex gap-4">
            <div className="flex-1">
              <CollegeCompareCard big college={college} />
            </div>
            <CollegeCompareSeparator />
            {showSecondCollege ?
              (
                <div className="flex-1">
                  <CollegeCompareCard
                    big
                    showSecondCollege
                    handleToggleSecondCollege={handleToggleSecondCollege}
                    college={selectedCollege || CollegeListData[1]?.attributes}
                  />
                </div>
              )
              :

              (
                <div className="flex-1 p-6 shadow ">
                  <div className="flex flex-col items-center justify-between h-full">
                    <div>
                      <Image
                        src={AddCollegeCircleImage}
                        width={80}
                        height={80}
                        alt=""
                      />
                      <div className="text-center">Add College</div>
                    </div>
                    <div className="w-full flex flex-col gap-4 ">
                      <div className="z-50">
                        <Dropdown
                          placeholder="Search college"
                          options={formattedCollegeOptions}
                          onSelect={handleCollegeSelect}
                        />
                      </div>

                      <Dropdown
                        placeholder="Search Course"
                        options={formattedCourseOptions}
                        onSelect={() => { }}
                      />
                    </div>
                    <div>Or</div>
                    <div
                      className="w-full coursor-pointer"
                      onClick={handleAddSimilarCollege}
                    >
                      <button className='py-2 rounded border-primary px-4 text-center border'>Add Similar College</button>

                    </div>
                  </div>
                </div>
              )}


          </div>

          <div className="my-2 mx-auto flex items-center  justify-center">
            <button
              onClick={handleCompareNow}
              className="border px-4 py-2 bg-blue-500 text-white rounded"
            >
              Compare Now
            </button>
          </div>
        </ContainerBox>
      </div>

      <div className="flex gap-4 my-6 px-4">
        <div className="flex-1 flex flex-col gap-7">
          <ContainerBox
            bgColor="bg-primary-light"
            title={`${college?.college_name} Popular Comparisons`}
            titlePrimary
          >
            <div className="grid grid-cols-1 lg:grid-cols-1 grid-flow-row gap-y-6 gap-x-6 ">
              {CollegeListData.slice(0, 8).map((compareCollege, index) => (
                <CompareTwoColleges
                  key={index}
                  college1={college}
                  college2={
                    CollegeListData[(index + 1) % CollegeListData.length]
                      .attributes
                  }
                />

              ))}
            </div>
          </ContainerBox>
          {/* <div>
            <GetExpertHelp />
          </div> */}

          <Accordian titlePrimary opened
            title="Know More about this College"

          >
            <div className="flex flex-col gap-4">
              {knowMore.map((item, index) => {
                let handleClick;
                switch (index) {
                  case 0:
                    handleClick = handleItemClick1;
                    break;
                  case 1:
                    handleClick = handleItemClick2;
                    break;
                  case 2:
                    handleClick = handleItemClick3;
                    break;
                  case 3:
                    handleClick = handleItemClick4;
                    break;
                  default:
                    handleClick = () => { }; // Default empty click handler
                }
                return (
                  <div
                    key={item.name}
                    className="border border-primary-text-light py-2 px-4 rounded-md cursor-pointer hover:underline"
                    onClick={handleClick}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </Accordian>
        </div>
      </div>
    </section>
  );
}
