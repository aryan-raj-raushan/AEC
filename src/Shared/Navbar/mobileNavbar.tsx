import React, { useState } from "react";
import { Collapse, List, ListItem, ListItemText } from "@mui/material";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { Router, useRouter } from "next/router";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbTargetArrow } from "react-icons/tb";
import { FaAddressBook } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";

type RouterType = {
  push: (path: string) => void;
};

function MobileNavbar() {
  const [openStream, setOpenStream] = useState(false);
  const [openCourse, setOpenCourse] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const router = useRouter();

  const handleNavigation = (router: RouterType, destination: string) => {
    router.push(destination);
  };

  return (
    <div className="absolute top-0 bg-white left-0 min-h-full sm:w-[350px] w-full pb-20 overflow-y-auto shadow-lg hide-scrollbar">
      <div className="relative px-2">
        <div className="flex items-center">
          <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="outline-none border border-gray-400 p-2 pl-10 my-2 w-full rounded-md"
            placeholder="Search for universities and more"
          />
        </div>
      </div>
      <div className="pl-4 py-2 bg-gray-100">
        <h1 className="font-bold">Find best colleges</h1>
      </div>
      <List className="border-b border-b-gray-400 cursor-pointer">
        <ListItem>
          <ListItemText primary="Select your stream" />
          {openStream ? <FaAngleUp /> : <FaAngleDown />}
        </ListItem>
        <Collapse in={openStream} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItem>
              <ListItemText primary="random 1" />
            </ListItem> */}
          </List>
        </Collapse>
      </List>
      <List className="border-b border-b-gray-400 cursor-pointer">
        <ListItem>
          <ListItemText primary="Select your course" />
          {openCourse ? <FaAngleUp /> : <FaAngleDown />}
        </ListItem>
        <Collapse in={openCourse} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <ListItemText primary="random 2" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <div className="pl-4 py-2 bg-gray-100 ">
        <h1 className="font-bold">Study Abroad</h1>
      </div>
      <List className="border border-gray-400 cursor-pointer">
        <ListItem>
          <ListItemText primary="Choose your country" />
          {openCountry ? <FaAngleUp /> : <FaAngleDown />}
        </ListItem>
        <Collapse in={openCountry} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItem>
              <ListItemText primary="random 3" />
            </ListItem> */}
          </List>
        </Collapse>
      </List>
      <div className="pl-4 py-2 bg-gray-100 ">
        <h1 className="font-bold">More Links</h1>
      </div>
      <List
       onClick={() => handleNavigation(router, "/colleges")}
        className="border-b border-b-gray-400 cursor-pointer"
      >
        <ListItem>
          <span className="mr-2">
            <HiOutlineBuildingOffice2 />
          </span>
          <ListItemText primary="Top Colleges" />
        </ListItem>
        <Collapse in={openCountry} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItem>
              <ListItemText primary="random 4" />
            </ListItem> */}
          </List>
        </Collapse>
      </List>
      <List
       onClick={() => handleNavigation(router, "/courses")}
        className="border-b border-b-gray-400 cursor-pointer"
      >
        <ListItem>
          <span className="mr-2">
            <TbTargetArrow />
          </span>
          <ListItemText primary="Top Careers" />
        </ListItem>
        <Collapse in={openCountry} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItem>
              <ListItemText primary="random 4" />
            </ListItem> */}
          </List>
        </Collapse>
      </List>
      <List
       onClick={() => handleNavigation(router, "/careers")}
        className="border-b border-b-gray-400 cursor-pointer"
      >
        <ListItem>
          <span className="mr-2">
            <FaAddressBook />
          </span>
          <ListItemText primary="Courses" />
        </ListItem>
        <Collapse in={openCountry} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItem>
              <ListItemText primary="random 4" />
            </ListItem> */}
          </List>
        </Collapse>
      </List>
      <List
        onClick={() => handleNavigation(router, "/exams")}
        className="border-b border-b-gray-400 cursor-pointer"
      >
        <ListItem>
          <span className="mr-2">
            <FaBookReader />
          </span>
          <ListItemText primary="Exams" />
        </ListItem>
        <Collapse in={openCountry} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItem>
              <ListItemText primary="random 4" />
            </ListItem> */}
          </List>
        </Collapse>
      </List>

      <div className="pl-4 py-2 bg-gray-100">
        <h1 className="font-bold">Helpful Resources</h1>
      </div>
      <List
         onClick={() => handleNavigation(router, "/scholarships")}
        className="border-b border-b-gray-400"
      >
        <ListItem>
          <span className="mr-2">
            <RiMoneyEuroCircleFill />
          </span>
          <ListItemText primary="Scholarships" />
        </ListItem>
        <Collapse in={openCountry} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItem>
              <ListItemText primary="random 4" />
            </ListItem> */}
          </List>
        </Collapse>
      </List>
      <List
       onClick={() => handleNavigation(router, "/blogs")}
        className="border-b border-b-gray-400 cursor-pointer"
      >
        <ListItem>
          <span className="mr-2">
            <FaBlogger />
          </span>
          <ListItemText primary="Blogs" />
        </ListItem>
        <Collapse in={openCountry} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItem>
              <ListItemText primary="random 4" />
            </ListItem> */}
          </List>
        </Collapse>
      </List>
      <List
        onClick={() => handleNavigation(router, "/news")}
        className="border-b border-b-gray-400 cursor-pointer"
      >
        <ListItem>
          <span className="mr-2">
            <GiNewspaper />
          </span>
          <ListItemText primary="News" />
        </ListItem>
        <Collapse in={openCountry} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItem>
              <ListItemText primary="random 4" />
            </ListItem> */}
          </List>
        </Collapse>
      </List>
      <div className="flex gap-4 justify-center items-center p-2 my-5">
        <button className="w-36 px-3 sm-text-base text-xs font-semibold py-2 border text-blue-500 border-blue-500 hover:bg-blue-600 rounded-md duration-300">
          Join us
        </button>
        <button className="w-36 px-3 sm-text-base text-xs font-semibold py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md duration-300">
          Talk to an Expert
        </button>
      </div>
    </div>
  );
}

export default MobileNavbar;
