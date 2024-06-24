import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RootLayouts } from "@/src/Layouts";
import ContainerBox from "@/src/Components/containerBox/containerBox";
import CollegeCompareCard from "@/src/Components/card/collegeCompareCard";
import CollegeCompareSeparator from "@/src/Components/@college/collegeCompare/collegeCompareSeparator";
import Dropdown from "@/src/Components/dropdown/dropdown";
import Button from "@/src/Components/button/button";
import { AddCollegeCircleImage } from "@/src/Asset";
import Image from "next/image";
import useColleges from "@/src/Hooks/useColleges";
import Accordian from "@/src/Components/accordian/accordian";
import Table from "@/src/Components/table/table";
import useCourses from "@/src/Hooks/useCourses";

const ComparePage = () => {
  const router = useRouter();
  const [college1, setCollege1] = useState(null);
  const [college2, setCollege2] = useState(null);
  const [courseComparisonData, setCourseComparisonData] = useState<any>([]);
  const [showSecondCollege, setShowSecondCollege] = useState<any>([college2]);

  useEffect(() => {
    const storedCollege1 = sessionStorage.getItem('college1');
    const storedCollege2 = sessionStorage.getItem('college2');

    if (storedCollege1) {
      setCollege1(JSON.parse(storedCollege1));
    }
    if (storedCollege2) {
      setCollege2(JSON.parse(storedCollege2));
    }

    sessionStorage.removeItem('college1');
    sessionStorage.removeItem('college2');
  }, []);

  useEffect(() => {
    if (college1 && college2) {
      const comparisonData = generateComparisonData(college1, college2);
      setCourseComparisonData(comparisonData);
    }
  }, [college1, college2]);

  const generateComparisonData = (college1: any, college2: any) => {
    if (!college1 || !college2) return [];

    const courseComparisonData = [];

    // Course fee comparison
    const feeComparison = {
      CourseDetails: "Cost To Study",
      [college1.college_name]: `First Year Fees ₹${college1.courses.data[0]?.attributes.average_fee} Total Fees ₹${college1.courses.data[0]?.attributes.average_fee * 4} (4 Years)`,
      [college2.college_name]: `First Year Fees ₹${college2.courses.data[0]?.attributes.average_fee} Total Fees ₹${college2.courses.data[0]?.attributes.average_fee * 4} (4 Years)`,
    };
    courseComparisonData.push(feeComparison);

    // Other comparisons can be added similarly

    return courseComparisonData;
  };

  const { CollegeListData } = useColleges();

 

  const formattedCollegeOptions = CollegeListData?.map((college) => ({
    label: college?.attributes?.college_name,
    value: college?.attributes?.college_name,
  }));

  const [selectedCollege, setSelectedCollege] = useState<any>(college2);
  const [selectedThirdCollege, setSelectedThirdCollege] = useState<any>(null);
  const [showThirdCollege, setShowThirdCollege] = useState<boolean>(false);

  const handleCollegeSelect = (college: any) => {
    const { value } = college;
    const selectedValueCollege = CollegeListData.find(
      (selected) => selected.attributes?.college_name === value
    );
    if (selectedValueCollege?.attributes !== college2) {
      setCollege2(selectedValueCollege?.attributes);
      setShowSecondCollege(true);
    }
  };
  

  const handleThirdCollegeSelect = (college: any) => {
    const { value } = college;
    const selectedValueCollege = CollegeListData.find(
      (selected) => selected.attributes?.college_name === value
    );
    if (selectedValueCollege?.attributes !== selectedThirdCollege) {
      setSelectedThirdCollege(selectedValueCollege?.attributes);
    }
    setShowThirdCollege(true); 
  };

  const formattedCourseOptions = selectedCollege?.courses?.data?.map(
    (course: any) => ({
      label: course?.attributes?.course_name,
      value: course?.attributes?.course_name,
    })
  );

  const handleToggleSecondCollege = () => {
    setShowSecondCollege(!showSecondCollege);
  };

  const handleAddSimilarCollege = () => {
    const randomIndex = Math.floor(Math.random() * CollegeListData?.length);
    setSelectedCollege(CollegeListData[randomIndex]?.attributes);
    setSelectedThirdCollege(CollegeListData[randomIndex]?.attributes);
    setShowThirdCollege(true);  
    setShowSecondCollege(true);
  };

  return (
    <RootLayouts>
      <section className="heroSection mx-auto navbar-PageInfo-responsive max-w-screen-xl">
        <div className="py-4">
          <ContainerBox
            // title={`Compare College with ${college1?.college_name}`}
            title={`Compare College with ${(college1 as unknown as { college_name: string })?.college_name}`}
            titlePrimary
            titleBorder
          >
            <div className="flex gap-4">
              <div className="flex-1">
                <CollegeCompareCard big college={college1} />
              </div>
              <CollegeCompareSeparator />
              <div className="flex-1">
                {showSecondCollege ?
                  (
                    <div className="flex-1">
                      <CollegeCompareCard
                        big
                        showSecondCollege
                        handleToggleSecondCollege={handleToggleSecondCollege}
                        college={college2}
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
            </div>
          </ContainerBox>
        </div>

        <div className="py-4">
          <Accordian title="Course Comparison" titlePrimary opened>
            <Table table={courseComparisonData} showHeader />
          </Accordian>
        </div>
      </section>
    </RootLayouts>
  );
};

export default ComparePage;
