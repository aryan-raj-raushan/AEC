import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BlogIcons,
  CarearIcons,
  CollegeIcons,
  CourseIcons,
  ExmIcons,
  MoreIcons,
  NewsIcons,
  StudyAbrodIcons,
  Scholarshipp,
} from "@/src/Asset";

type NavOption = {
  title: string;
  icon: any;
  path: string;
};
const HeaderOptions = () => {
  let [ActiveTab, setActiveTab] = useState("home");
  const currentPath = usePathname();
  let NavOptions: NavOption[] = [
    { title: "Study Abroad", icon: StudyAbrodIcons, path: "/study-abroad" },
    { title: "Colleges", icon: CollegeIcons, path: "/colleges" },
    { title: "Exam", icon: ExmIcons, path: "/exams" },
    { title: "Courses", icon: CourseIcons, path: "/courses" },
    { title: "Careers", icon: CarearIcons, path: "/careers" },
    { title: "Scholarships", icon: Scholarshipp, path: "/scholarships" },
    { title: "Blogs", icon: BlogIcons, path: "/blogs" },
    { title: "News", icon: NewsIcons, path: "/news" },
    { title: "More", icon: MoreIcons, path: "/more" },
  ];
  useEffect(() => {
    if (currentPath) {
      let paths = currentPath.split("/");
      let activepath = paths.length > 1 ? paths[1] : "";
      setActiveTab(activepath);
    }
  }, [currentPath]);
  return (
    <>
      <div
        className="flex xl:gap-5 justify-between gap-2 max-lg:hidden"
        key={"NavOptions"}
      >
        {NavOptions.map((navOption) => {
          return (
            <div key={navOption.title} className="w-max">
              <Link href={navOption.path} key={navOption.title}>
                <div
                  className={`flex flex-col items-center p-1 border-b-[3px] ${
                    "/" + ActiveTab === navOption.path
                      ? "border-b-primary"
                      : "border-b-transparent"
                  } `}
                >
                  <div className="xl:h-[32px] h-[25px] xl:w-[35px] w-[25px] relative">
                    <Image
                      src={navOption.icon}
                      alt={navOption.title}
                      className="xl:h-[32px] h-[25px] xl:w-[35px] w-[25px]"
                    />
                  </div>

                  <span
                    className={`text-xs  ${
                      "/" + ActiveTab === navOption.path
                        ? "text-blue-800"
                        : "text-primary-text"
                    }`}
                  >
                    {navOption.title}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeaderOptions;
