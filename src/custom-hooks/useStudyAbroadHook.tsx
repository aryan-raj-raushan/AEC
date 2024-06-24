import React from "react";
import { HomeLayouts } from "@/src/Layouts";
import Head from "next/head";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import useGetTuch from "@/src/Hooks/useGetTuch";
import {
  ArrowDoubleDownIcon,
  UniversityFlag_1,
  UniversityFlag_2,
  UniversityFlag_3,
  UniversityFlag_4,
  UniversityFlag_5,
  UniversityFlag_6,
  UniversityFlag_7,
  UniversityFlag_8,
  UniversityFlag_9,
  UniversityFlag_10,
  UniversityFlag_11,
  UniversityFlag_12,
} from "@/src/Asset/index";
import Link from "next/link";
import useColleges from "@/src/Hooks/useColleges";
import useCommonApi from "@/src/Hooks/useCommonApi";
import { useCallback, useEffect, useRef, useState } from "react";
import useCountry from "@/src/Hooks/useCountry";
import useExmas from "@/src/Hooks/useExmas";
import useHomeSetion from "@/src/Hooks/useHomeSetion";
import useBlog from "@/src/Hooks/useBlog";
import { useAppSelector } from "@/src/store";
import Login from "@/src/Components/Login/Login";
import { useRouter } from "next/router";
import useCourses from "@/src/Hooks/useCourses";
import useCarears from "@/src/Hooks/useCarears";
import Swal from "sweetalert2";

function useStudyAbroadHook() {
  let isLogin = useAppSelector((state) => state.auth.authState);
  const { AllCollegesData, isToCollegeData } = useColleges();
  const { AllStreamData } = useCommonApi();
  const [List, setList] = useState<any[]>([]);
  const [Streams, setStreams] = useState<any>([]);
  const { GetAllCourseFilterd, CountryListData } = useCountry();
  const [CountryValue, setCountryValue] = useState<any>("");
  const { CountryData } = GetAllCourseFilterd(CountryValue);
  const [AllExamDataList, setAllExamDataList] = useState<any[]>([]);
  const { AllExamData } = useExmas();
  const { TestimonialListData } = useHomeSetion();
  const { AllBlogsDataList, AllNewsDataList } = useBlog();
  const [searchQuery, setSearchQuery] = useState("");
  const [CountrySearch, setCountrySearch] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [initialTop, setInitialTop] = useState<number | null>(null);
  const { createGetTuch, CheckGetTuch } = useGetTuch();
  const { number, userName, authState } = useAppSelector((store) => store.auth);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showStreamDropdown, setShowStreamDropdown] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -80% 0px" });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { getTuchData } = CheckGetTuch(number);
  const [isGetTuchModalOpen, setIsGetTuchModalOpen] = useState(false);
  const { AllCourseData } = useCourses();
  const { AllCarearDataList } = useCarears();
  const [selectedTuchType, setSelectedTuchType] = useState(null);
  const [selectedHeading, setSelectedHeading] = useState("");
  const [getTouch, setGetTouch] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedStream, setSelectedStream] = useState<any>(null);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [name, setName] = useState<any>();
  const [emailValue, setEmailValue] = useState<any>();
  const [phone, setPhone] = useState<any>();
  const [StreamsSelected, setStreamsSelected] = useState<any>();
  const [isGetTouched, setIsGetTouched] = useState<boolean>(false);
  const [firstName, lastName] = userName.trim().split(" ");

  const handelGetTuchModalOpen = (tuchTest: any) => {
    if (!isLogin) {
      setIsLoginModalOpen(true);
    } else {
      setIsGetTuchModalOpen(!isGetTuchModalOpen);
      setSelectedTuchType(tuchTest);
    }
  };

  const handelGetTuchModalClose = () => {
    setIsGetTuchModalOpen(!isGetTuchModalOpen);
  };

  const validate = () => {
    if (!name) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Name is required",
        showConfirmButton: true,
      });
      return false;
    }
    if (!emailValue || !/\S+@\S+\.\S+/.test(emailValue)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "A valid email is required",
        showConfirmButton: true,
      });
      return false;
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "A valid 10-digit phone number is required",
        showConfirmButton: true,
      });
      return false;
    }
    if (!StreamsSelected) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please select a stream",
        showConfirmButton: true,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!isLogin) {
      setIsLoginModalOpen(true);
    } else {
      if (validate()) {
        try {
          const currentDate = new Date();
          const publishedAt = currentDate.toISOString();

          const response = await createGetTuch({
            variables: {
              name,
              email: emailValue,
              phone,
              streams: StreamsSelected,
              source: "/study-abrod",
              userPhone: number,
              publishedAt,
            },
          });

          if (response.data) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Sent",
              showConfirmButton: false,
              timer: 1500,
            });
            setIsGetTouched(true);
          }
        } catch (error) {
          console.error(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Failed to Send",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  useEffect(() => {
    if (headerRef.current && initialTop === null) {
      setInitialTop(
        headerRef.current.getBoundingClientRect().top + window.scrollY
      );
    }

    const handleScroll = () => {
      if (initialTop !== null) {
        const scrollTop = window.scrollY;

        if (!isSticky && scrollTop > initialTop) {
          setIsSticky(true);
        } else if (isSticky && scrollTop <= initialTop) {
          setIsSticky(false);
        }
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 50);

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [isSticky, initialTop]);

  const useItemsPerPage = () => {
    const [itemsPerPage, setItemsPerPage] = useState(6);

    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
          setItemsPerPage(1);
        } else {
          setItemsPerPage(6);
        }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return itemsPerPage;
  };

  const shortFormUsername =
    authState && generateShortUsername(firstName, lastName);

  function generateShortUsername(firstName: string, lastName: string) {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const shortUsername = firstInitial;
    return shortUsername;
  }
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = useItemsPerPage();
  const totalItems = AllExamDataList ? AllExamDataList.length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const universityFlags = [
    { icon: UniversityFlag_1 },
    { icon: UniversityFlag_2 },
    { icon: UniversityFlag_3 },
    { icon: UniversityFlag_4 },
    { icon: UniversityFlag_5 },
    { icon: UniversityFlag_6 },
    { icon: UniversityFlag_7 },
    { icon: UniversityFlag_8 },
    { icon: UniversityFlag_9 },
    { icon: UniversityFlag_10 },
    { icon: UniversityFlag_11 },
    { icon: UniversityFlag_12 },
  ];

  const handleCountrySelect = (selectedCountry: string) => {
    setCountryValue(selectedCountry);
  };

  const sortedCountryListData = CountryListData?.slice()?.sort(
    (a: any, b: any) => {
      return a?.attributes?.display_sequence - b?.attributes?.display_sequence;
    }
  );

  const slides = sortedCountryListData?.map((abroadFlag: any) => {
    return (
      <div
        onClick={() =>
          handleCountrySelect(abroadFlag?.attributes?.country_name)
        }
        key={abroadFlag?.attributes?.display_sequence}
        className="flex flex-col items-center cursor-pointer w-full"
      >
        <Image
          src={abroadFlag?.attributes?.flags?.data?.attributes?.url}
          alt={abroadFlag?.attributes?.country_name}
          width={400}
          height={400}
          className="object-cover w-12 h-12 min-w-12 overflow-hidden rounded-full border bg-primary-extra-light border-primary-light"
        />
        <div className="text-sm text-primary-text w-auto">
          {abroadFlag?.attributes?.country_name}
        </div>
      </div>
    );
  });

  const StreamTiles = Streams.filter((stream: any) =>
    stream.attributes.stream_name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )
    .slice(0, 10)
    .map((stream: any) => {
      const { attributes } = stream;

      const router = useRouter();

      const handleStreamClick = () => {
        router.push({
          pathname: "/colleges",
          query: { stream: attributes.stream_name },
        });
      };

      return (
        <div
          key={attributes.stream_name}
          className="bg-[#F2F7F8] sm:w-40 md:w-60 lg:w-48 xl:w-60 w-28 sm:h-48 h-24 p-1 text-center flex flex-col justify-center items-center sm:gap-4 gap-0 cursor-pointer hover:bg-[#428BC1] hover:text-white transition duration-200 group"
          onClick={handleStreamClick}
        >
          <div>
            <Image
              src={attributes?.icon?.data[0]?.attributes?.url}
              alt="logo"
              width={60}
              height={60}
              className=""
            />
          </div>
          <div className="sm:text-base text-xs">{attributes?.stream_name}</div>
          <div className="text-xs text-gray-500 -mt-4 group-hover:text-black">
            {attributes?.college_names?.data?.length} Colleges
          </div>
        </div>
      );
    });

  const handleSearchInputChange = (event: { target: { value: string } }) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    setList(AllCollegesData || []);
  }, [AllCollegesData]);
  useEffect(() => {
    setStreams(AllStreamData || []);
  }, [AllStreamData]);

  const [FilterdCountryData, setFilterdCountryData] = useState<any>([]);

const filterData = () => {
  if (CountryValue) {
    const filtered = CountryData?.filter(
      (country: any) => country?.attributes?.country_name === CountryValue
    );
    setFilterdCountryData(filtered);
  } else {
    setFilterdCountryData(CountryData);
  }
};

useEffect(() => {
  if (CountryData?.length > 0) {
    setFilterdCountryData(CountryData); // Setting the initial data to the full list
  }
}, [CountryData]);

useEffect(() => {
  filterData();
}, [CountryValue, CountryData]); 
  useEffect(() => {
    filterData();
  }, [CountryValue]);

  // ============

  useEffect(() => {
    setAllExamDataList(AllExamData);
  }, [AllExamData]);

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogin = () => {
    setIsLoginModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const [togle, setTogle] = useState(false);
  const toggleHandler = () => {
    setTogle(!togle);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setTogle(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [activeBlogArticalTab, setActiveBlogArticalTab] = useState<any>("BLOG");

  const handleBlogArticalTabClick = (tab: any) => {
    setActiveBlogArticalTab(tab);
  };

  const getRandomSubset = (array: any[], size: number) => {
    const copiedArray = [...array];
    const shuffledArray = copiedArray.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, size);
  };

  const AffintiyArticalAndOther: any = getRandomSubset(
    AllBlogsDataList,
    3
  )?.map((news: any, index: number) => {
    const { attributes } = news;

    const date = new Date(attributes?.updatedAt);
    const normalDate = date.toLocaleDateString();
    return (
      <div
        key={index}
        className="relative flex flex-col m-2 shadow-md hover:shadow-lg w-[394px] min-w-80 h-auto items-center gap-4 cursor-pointer transition duration-200"
      >
        <div className="w-full">
          <Image
            src={attributes?.featured_image?.data?.attributes?.url}
            alt=""
            width={394}
            height={40}
            className="sm:h-60 w-full h-28 rounded-t-lg object-fill"
          />

          <div className="p-4 my-2">
            <div className="flex justify-between items-center">
              <p>Posted on {normalDate}</p>
              <p className="text-[#284602] bg-[#D3DEC4] w-fit px-2 rounded-full md:block hidden text-xs">
                ANNOUNCEMENT
              </p>
            </div>
            <h1 className="font-bold text-[1.1rem] line-clamp-2">
              {attributes?.blog_title}
            </h1>
            <p className="text-gray-500 my-1">10 MINS TO READ</p>
          </div>
        </div>
      </div>
    );
  });

  const AffintiyMediaCard = AllBlogsDataList?.slice(0, 3).map(
    (blog: any, index: number) => {
      const { attributes } = blog;
      const date = new Date(attributes?.updatedAt);
      const normalDate = date.toLocaleDateString();

      return (
        <div
          key={index}
          className="relative flex flex-col m-2  shadow-md hover:shadow-xl w-[394px] min-w-80 h-auto items-center gap-4 cursor-pointer transition duration-200"
        >
          <div className="w-full">
            <Image
              src={attributes?.featured_image?.data?.attributes?.url}
              alt=""
              width={394}
              height={40}
              className="sm:h-60 w-full h-28 rounded-t-lg"
            />

            <div className="p-4 my-2">
              <p>Posted on {normalDate}</p>
              <Link
                href={`blogs/${attributes?.blog_url}`}
                className="font-bold text-[1.1rem]"
              >
                {attributes.blog_title}
              </Link>
              <p className="text-gray-500 my-1">10 MINS TO READ</p>
            </div>
          </div>
        </div>
      );
    }
  );

  const AffintiyNews: any = AllNewsDataList?.slice(0, 3).map(
    (news: any, index: number) => {
      const { attributes } = news;

      const date = new Date(attributes?.updatedAt);
      const normalDate = date.toLocaleDateString();

      return (
        <div
          key={index}
          className="relative flex flex-co m-2 hover:shadow-lg border border-gray-200 w-[394px] min-w-80 h-auto items-center gap-4 cursor-pointer transition duration-200 rounded-lg shadow-sm"
        >
          <div className="w-full">
            <Image
              src={attributes?.featured_image?.data?.attributes?.url}
              alt=""
              width={394}
              height={40}
              className="min-w-full h-60 object-fill rounded-t-lg"
            />
            <div className="p-4 my-2">
              <div className="flex justify-between items-center">
                <p>Posted on {normalDate}</p>
                <p className="text-[#284602] bg-[#D3DEC4] w-fit px-2 rounded-full md:block hidden text-xs">
                  ANNOUNCEMENT
                </p>
              </div>
              <h1 className="font-bold text-[1.1rem] line-clamp-1">
                {attributes?.excerpt.slice(0, 20)}
              </h1>
              <p className="text-gray-500 my-1">10 MINS TO READ</p>
            </div>
          </div>
        </div>
      );
    }
  );

  const filteredCountryList =
    CountryListData &&
    CountryListData?.filter((item) =>
      item?.attributes?.country_name
        .toLowerCase()
        .includes(CountrySearch.toLowerCase())
    );

  const StudyAbrod =
    filteredCountryList.length > 0
      ? filteredCountryList?.map((country: any) => {
          const { attributes } = country;
          return (
            <Link
              href={`/study-abroad/${attributes.country_url}`}
              key={attributes.country_name}
            >
              <div
                key={attributes?.country_name}
                className={`bg-[#F2F7F8] size-[300px] rounded-md flex flex-col justify-center items-center gap-4 cursor-pointer transition duration-200 min-w-[300px] max-w-fit`}
                style={{
                  backgroundImage: `url(${attributes?.banner?.data[0]?.attributes?.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  overflow: "hidden",
                  backgroundBlendMode: "multiply",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-200 hover:opacity-50"></div>
                <div className="font-bold text-[30px] text-white z-10">
                  {attributes?.country_name}
                </div>
              </div>
            </Link>
          );
        })
      : CountryListData?.map((country: any) => {
          const { attributes } = country;
          return (
            <div
              key={attributes?.country_name}
              className={`bg-[#F2F7F8] size-[300px] rounded-md flex flex-col justify-center items-center gap-4 cursor-pointer transition duration-200 min-w-[300px] max-w-fit`}
              style={{
                backgroundImage: `url(${attributes?.banner?.data[0]?.attributes?.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden",
                backgroundBlendMode: "multiply",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-200 hover:opacity-50"></div>
              <div className="font-bold text-[30px] text-white z-10">
                {attributes?.country_name}
              </div>
            </div>
          );
        });

  const collegesNotInIndia = AllCollegesData?.filter(
    (college: any) =>
      college?.attributes?.country?.data?.attributes?.country_name !== "India"
  );

  const router = useRouter();

  const searchColleges = () => {
    const filters = {
      country: selectedCountry !== "any" ? selectedCountry : null,
      stream: selectedStream !== "any" ? selectedStream : null,
      course: selectedCourse !== "any" ? selectedCourse : null,
    };

    // Check if any filters are selected
    const isSearchEnabled = filters.country || filters.stream || filters.course;

    if (!isSearchEnabled) {
      return; // Do nothing if no filters are selected
    }

    // Create a query string for the filters
    const queryString = Object.keys(filters)
      .filter((key) => filters[key as keyof typeof filters])
      .map(
        (key) =>
          `${key}=${encodeURIComponent(
            filters[key as keyof typeof filters] as string
          )}`
      )
      .join("&");

    router.push(`/colleges?${queryString}`);
  };

  // Check if any filters are selected
  const isSearchDisabled =
    !selectedCountry && !selectedStream && !selectedCourse;

  const [showNavbar, setShowNavbar] = useState(true);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const triggerScroll = window.innerHeight * 0.2;

    if (scrollPosition > triggerScroll && showNavbar) {
      setShowNavbar(false);
    } else if (scrollPosition <= triggerScroll && !showNavbar) {
      setShowNavbar(true);
    }
  }, [showNavbar]);

  useEffect(() => {
    const handleScrollWithRaf = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollWithRaf);

    return () => {
      window.removeEventListener("scroll", handleScrollWithRaf);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (inView) {
      setShowCountryDropdown(false);
      setShowStreamDropdown(false);
      setShowCourseDropdown(false);
    }
  }, [inView]);

  return {
    AllCollegesData,
    AllStreamData,
    CountryListData,
    AllExamData,
    TestimonialListData,
    AllBlogsDataList,
    AllNewsDataList,
    handleCountrySelect,
    slides,
    getTuchData,
    handleNextPage,
    handlePrevPage,
    handelGetTuchModalOpen,
    handelGetTuchModalClose,
    handleSubmit,
    debounce,
    useItemsPerPage,
    handleSearchInputChange,
    AffintiyArticalAndOther,
    AffintiyMediaCard,
    AffintiyNews,
    StudyAbrod,
    collegesNotInIndia,
    searchColleges,
    selectedCountry,
    setSelectedCountry,
    selectedStream,
    setSelectedStream,
    selectedCourse,
    setSelectedCourse,
    isSearchDisabled,
    showNavbar,
    handleLoginButtonClick,
    handleLogin,
    handleCloseModal,
    toggleHandler,
    handleBlogArticalTabClick,
    isLogin,
    isLoginModalOpen,
    isGetTuchModalOpen,
    emailValue,
    setEmailValue,
    phone,
    setPhone,
    StreamsSelected,
    setStreamsSelected,
    isGetTouched,
    setIsGetTouched,
    shortFormUsername,
    getRandomSubset,
    filterData,
    handleScroll,
    setGetTouch,
    getTouch,
    AllCourseData,
    AllCarearDataList,
    AllExamDataList,
    ref,
    controls,
    inView,
    showCountryDropdown,
    setShowCountryDropdown,
    setShowStreamDropdown,
    setShowCourseDropdown,
    showStreamDropdown,
    Streams,
    showCourseDropdown,
    FilterdCountryData,
    CountrySearch,
    setCountrySearch,
    searchQuery,
    StreamTiles,
    setSelectedHeading,
    currentPage,
    totalPages,
    itemsPerPage,
    universityFlags,
    selectedHeading,
    selectedTuchType,
    activeBlogArticalTab,
    setName,
    isToCollegeData,
    name,
  };
}

export default useStudyAbroadHook;
