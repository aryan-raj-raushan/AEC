import React, { useState } from "react";
import Image from "next/image";
import { Logo } from "@/src/Asset";
import Button from "@/src/Components/button/button";
import { Collapse, List, ListItem, ListItemText } from "@mui/material";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import useCommonApi from "@/src/Hooks/useCommonApi";
import useColleges from "@/src/Hooks/useColleges";
import useCourses from "@/src/Hooks/useCourses";
import useExmas from "@/src/Hooks/useExmas";

const Footer = () => {
  const { AllCountryData } = useCommonApi();
  const { AllCollegesData } = useColleges();
  const { AllCourseData } = useCourses();
  const { AllExamData } = useExmas();

  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [getInTouchOpen, setGetInTouchOpen] = useState(false);
  const [studentChoice, setStudentChoice] = useState(false);
  const [courses, setCourses] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleQuickLinks = () => {
    setQuickLinksOpen(!quickLinksOpen);
  };

  const toggleGetInTouch = () => {
    setGetInTouchOpen(!getInTouchOpen);
  };
  const toggleStudentChoice = () => {
    setStudentChoice(!studentChoice);
  };
  const toggleCourse = () => {
    setCourses(!courses);
  };

  return (
    <footer className="bg-primary-text">
      <div className="flex flex-col max-w-screen-xl mx-auto sticky bottom-0 bg-primary-text px-4 py-8 text-white gap-12">
        <div className="flex md:flex-row flex-col justify-between items-center md:mb-4">
          <div>
            <Image src={Logo} alt="" width={160} height={56.442} />
          </div>
          <div className="flex justify-between items-center gap-5 md:my-0 my-4">
            <Link href="/">Help</Link>
            <Link href="/more">About</Link>
            <Link href="/career">Career</Link>
            <Link href="/news">News</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className="flex justify-between items-center gap-3">
            <Link href="/" className="bg-white rounded-full p-1 text-black">
              <FaFacebook />
            </Link>
            <Link href="/" className="bg-white rounded-full p-1 text-black">
              <FaInstagram />
            </Link>
            <Link href="/" className="bg-white rounded-full p-1 text-black">
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-5 xl:gap-x-6 gap-x-2">
          <div>
            <div className="md:flex hidden flex-col gap-4 text-sm font-light">
              <h6 className="font-semibold text-lg">Study Abroad</h6>
              {AllCountryData?.slice(0, 10).map(
                (country: any, index: number) => (
                  <Link
                    key={index}
                    href={`/study-abroad/${country?.attributes?.country_url}`}
                  >
                    <h1 className="cursor-pointer">
                      Study in {country?.attributes?.country_name}
                    </h1>
                  </Link>
                )
              )}
            </div>
          </div>
          <div>
            <div className="md:flex hidden flex-col gap-4 text-sm font-light">
              <h6 className="font-semibold text-lg">Top Colleges</h6>
              {AllCollegesData?.slice(0, 10).map((college: any, index: any) => (
                <Link
                  key={index}
                  href={`/colleges/${college?.attributes?.college_url}`}
                >
                  <h1 className="cursor-pointer">
                    {college?.attributes?.college_name}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:flex hidden flex-col gap-4 text-sm font-light">
            <h6 className="font-semibold text-lg">Top Courses</h6>
            {AllCourseData?.slice(0, 10).map((course: any, index: any) => (
              <Link
                key={index}
                href={`/courses/${course?.attributes?.course_url}`}
              >
                <h1 className="cursor-pointer">
                  {course?.attributes?.course_name}
                </h1>
              </Link>
            ))}
          </div>
          <div>
            <div className="md:flex hidden flex-col gap-4 text-sm font-light">
              <h6 className="font-semibold text-lg">Top Exams</h6>
              {AllExamData?.slice(0, 10).map((exam: any, index: any) => (
                <Link key={index} href={`/exams/${exam?.attributes?.exam_url}`}>
                  <h1 className="cursor-pointer">
                    {exam?.attributes?.exam_name}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:flex hidden flex-col gap-4 text-sm font-light">
            <h6 className="font-semibold text-lg">Students Choice</h6>
            <div>
              <p>
                <span className="bg-blue-500 italic px-1 text-xs">New</span>
              </p>
            </div>
            <div className="-mt-4 text-base font-light">
              Data Analyst in Carleton University, Canada
            </div>
            <div>
              <p>
                <span className="bg-blue-500 italic px-1 text-xs">
                  Recommended
                </span>
              </p>
            </div>
            <div className="-mt-4 text-base font-light">
              MBBS in Heidelberg University, Germany
            </div>
            <div>
              <p>
                <span className="bg-blue-500 italic px-1 text-xs">
                  Recommended
                </span>
              </p>
            </div>
            <div className="-mt-4 text-base font-light">
              Imperial College London, London
            </div>
            <div></div>
            <div className="-mt-2 text-base font-light">
              MBA in NYU STERN, New York
            </div>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 md:hidden mt-2 gap-1">
            <div className="flex flex-col gap-4 text-sm font-light">
              <List>
                <ListItem onClick={handleClick} className="cursor-pointer">
                  <ListItemText primary="Study Abroad" />
                  {open ? <FaAngleUp /> : <FaAngleDown />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {AllCountryData?.map((country: any, index: any) => (
                      <ListItem key={index}>
                        <Link
                          href={`/study-abroad/${country?.attributes?.country_url}`}
                        >
                          <ListItemText
                            primary={`Study in ${country?.attributes?.country_name}`}
                          />
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </List>
            </div>
            <div className="flex flex-col gap-4 text-sm font-light">
              <List>
                <ListItem onClick={toggleCourse} className="cursor-pointer">
                  <ListItemText primary="Top Colleges" />
                  {courses ? <FaAngleUp /> : <FaAngleDown />}
                </ListItem>
                <Collapse in={courses} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {AllCollegesData?.map((college: any, index: any) => (
                      <ListItem key={index}>
                        <Link href={`/${college?.attributes?.college_url}`}>
                          <ListItemText
                            primary={college?.attributes?.college_name}
                          />
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </List>
            </div>
            <div className="flex flex-col gap-4 text-sm font-light">
              <List>
                <ListItem onClick={toggleQuickLinks} className="cursor-pointer">
                  <ListItemText primary="Top Exams" />
                  {quickLinksOpen ? <FaAngleUp /> : <FaAngleDown />}
                </ListItem>
                <Collapse in={quickLinksOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {AllCourseData?.map((course: any, index: any) => (
                      <ListItem key={index}>
                        <Link href={`/${course?.attributes?.course_url}`}>
                          <ListItemText
                            primary={course?.attributes?.course_name}
                          />
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </List>
            </div>
            <div className="flex flex-col gap-4 text-sm font-light">
              <List>
                <ListItem
                  onClick={toggleStudentChoice}
                  className="cursor-pointer"
                >
                  <ListItemText primary="Students Choice" />
                  {studentChoice ? <FaAngleUp /> : <FaAngleDown />}
                </ListItem>
                <Collapse in={studentChoice} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem>
                      <ListItemText primary="Data Analyst in Carleton University, Canada" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="MBBS in Heidelberg University, Germany" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Imperial College London, London" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="MBA in NYU STERN, New York" />
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </div>
            <div className="flex flex-col gap-4 text-sm font-light">
              <List>
                <ListItem onClick={toggleGetInTouch} className="cursor-pointer">
                  <ListItemText primary="Top Courses" />
                  {getInTouchOpen ? <FaAngleUp /> : <FaAngleDown />}
                </ListItem>
                <Collapse in={getInTouchOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem>
                      <ListItemText primary="Study In India" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Study In Australia" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Study In USA" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Study In Germany" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Study In Ireland" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Study In Dubai" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Study In UK" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Study In Canada" />
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </div>
          </div>
        </div>

        <div className="border-t flex flex-col md:flex-row md:mt-10 pt-10 gap-3">
          <div className="hidden md:block">
            <p className="text-base font-bold mb-3">Office Locations</p>
            <div className="md:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
              <div>
                <h6 className="font-semibold text-lg my-2">Head Office</h6>
                <div className="text-xs font-normal">
                  #1114, World Trade Tower(WTT), Sector 16 Noida, 201301 Noida,
                  Uttar Pradesh, India
                </div>
              </div>
              <div>
                <h6 className="font-semibold text-lg my-2">Pune</h6>
                <div className="text-xs font-normal">
                  Karan Victoria office No. 601, 6th Floor Road, Near Good luck
                  cafe shivaji nagar - 411005.
                </div>
              </div>
              <div>
                <h6 className="font-semibold text-lg my-2">Patna</h6>
                <div className="text-xs font-normal">
                  3RD FLOOR,SUDAMA BHAWAN, HIRA PANNA LANE, Boring Rd, opp.
                  INDIAN OIL PETROL PUMP, Patna, Bihar Area
                </div>
              </div>
              <div>
                <h6 className="font-semibold text-lg my-2">Kolkata</h6>
                <div className="text-xs font-normal">
                  Diamond Chambers, 9N, 9th floor,Block-1&2, 4, Chowringhee
                  Ln,Park Street area, Kolkata, 700016
                </div>
              </div>
              <div>
                <h6 className="font-semibold text-lg my-2">Dehradun</h6>
                <div className="text-xs font-normal">
                  3rd Floor, Puspa Tower 52 Subhash Road Dehradun
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-end justify-center">
            <div className="flex flex-col gap-4 w-full lg:w-[30vw]">
              <h6 className="text-xl font-semibold">
                Subscribe to Our Newsletter
              </h6>
              <div className="flex flex-col gap-2">
                <input
                  className="sm:flex-1 px-2 sm:px-6 py-2 text-primary-text rounded-md border-[0.5px] border-primary-text-light"
                  placeholder="Enter Email Address"
                />
                <div className="inline-flex justify-end">
                  <button className="bg-blue-400 md:px-6 px-3 rounded-lg  py-2 text-right">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ======mobile device========== */}
          <div className="md:hidden flex items-center sm:justify-center overflow-auto py-2 gap-8 text-center hide-scrollbar sm:w-[400px] mx-auto p-2 w-full">
            <div className="min-w-full">
              <h6 className="font-semibold text-lg my-2">Head Office</h6>
              <div className="text-xs font-normal">
                #1114, World Trade Tower(WTT), Sector 16 Noida, 201301 Noida,
                Uttar Pradesh, India
              </div>
            </div>
            <div className="min-w-full">
              <h6 className="font-semibold text-lg my-2">Pune</h6>
              <div className="text-xs font-normal">
                Karan Victoria office No. 601, 6th Floor Road, Near Good luck
                cafe shivaji nagar - 411005.
              </div>
            </div>
            <div className="min-w-full">
              <h6 className="font-semibold text-lg my-2">Patna</h6>
              <div className="text-xs font-normal">
                3RD FLOOR,SUDAMA BHAWAN, HIRA PANNA LANE, Boring Rd, opp. INDIAN
                OIL PETROL PUMP, Patna, Bihar Area
              </div>
            </div>
            <div className="min-w-full">
              <h6 className="font-semibold text-lg my-2">Kolkata</h6>
              <div className="text-xs font-normal">
                Diamond Chambers, 9N, 9th floor,Block-1&2, 4, Chowringhee
                Ln,Park Street area, Kolkata, 700016
              </div>
            </div>
            <div className="min-w-full">
              <h6 className="font-semibold text-lg my-2">Dehradun</h6>
              <div className="text-xs font-normal">
                3rd Floor, Puspa Tower 52 Subhash Road Dehradun
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex w-full text-center md:justify-between justify-center items-center gap-4">
          <div>Copyrights © 2024 Affinity Education. All rights reserved.</div>
          <div>
            <span>Term & Conditions</span>
            <span>Cookie policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
