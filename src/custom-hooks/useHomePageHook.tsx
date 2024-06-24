import useGetTuch from "@/src/Hooks/useGetTuch";
import useColleges from "../Hooks/useColleges";
import useCommonApi from "../Hooks/useCommonApi";
import useCountry from "../Hooks/useCountry";
import { SetStateAction, useEffect, useState } from "react";
import useBlog from "../Hooks/useBlog";
import useCourses from "../Hooks/useCourses";
import useHomeSetion from "../Hooks/useHomeSetion";
import { useAppSelector } from "../store";
import Image from "next/image";
import { paper01 } from "../Asset";
import Link from "next/link";
import { StreamTiles } from "../Components/homePage/CardsComp/StreamTile";
import { ExamTiles } from "../Components/homePage/CardsComp/ExamTile";
import { CourseTiles } from "../Components/homePage/CardsComp/CourseTile";


interface InputField {
  placeholder: string;
}

const useHomePageHook = () => {
  const { AllCollegesData } = useColleges();
  const {
    AllStreamData,
    AffinityMediaArtical,
    AffinityMediaNewspaper,
    AffinityMediaAwards,
  } = useCommonApi();
  const { CountryListData } = useCountry();
  const [List, setList] = useState<any[]>([]);
  const [Streams, setStreams] = useState<any>([]);
  const [activeTab, setActiveTab] = useState(null);
  const { AllBlogsDataList, NewCategoryData, AllNewsDataList } = useBlog();
  const { CourseListData } = useCourses();
  const { HeroListData, FeturedListData, TestimonialListData, EventListData } =
    useHomeSetion();
  const [filterCollegeData, setFilterCollegeData] = useState<any[]>([]);
  const [filterCourseData, setFilterCourseData] = useState<any[]>([]);
  const { number, userName, authState } = useAppSelector((store) => store.auth);
  const { createGetTuch, CheckGetTuch } = useGetTuch();
  const { getTuchData } = CheckGetTuch(number);
  const [isGetTuchModalOpen, setIsGetTuchModalOpen] = useState(false);
  const [selectedTuchType, setSelectedTuchType] = useState();
  const [GetTuchHeading, setGetTuchHeading] = useState<any>("Book a call");
  const [active, setActive] = useState("articles");
  const [activeBlogArticalTab, setActiveBlogArticalTab] = useState<any>("BLOG");
  const [activeTrendingCollege, setActiveTrendingCollege] =
    useState<any>("Stream");
  const [activeExploreCollege, setActiveExploreCollege] =
    useState<any>("Stream");
  const [name, setName] = useState<any>();
  const [emailValue, setEmailValue] = useState<any>();
  const [phone, setPhone] = useState<any>();
  const [StreamsSelected, setStreamsSelected] = useState<any>();
  const [selectedStream, setSelectedStream] = useState<any>();
  const [selectedCountry, setSelectedCountry] = useState(null);
  let isLogin = useAppSelector((state) => state.auth.authState);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    setList(AllCollegesData || []);
  }, [AllCollegesData]);

  useEffect(() => {
    setStreams(AllStreamData || []);
  }, [AllStreamData]);

  const handleTab = (tab: any) => {
    setActive(tab);
  };


  const handelGetTuchModalOpen = (tuchType: any, heading: string,formData = null) => {
    if (!isLogin) {
      setIsLoginModalOpen(true);
    } else {
      setIsGetTuchModalOpen(!isGetTuchModalOpen);
      setSelectedTuchType(tuchType);
      setGetTuchHeading(heading);
      if (formData) {
        setFormData(formData);
      }
    }
  };

  const handelGetTuchModalClose = () => {
    setIsGetTuchModalOpen(!isGetTuchModalOpen);
  };


  const handleCountryTabClick = (index: any, countryName: any) => {
    setActiveTab(index);
    setSelectedCountry(countryName);
    filterData(selectedStream, countryName);
  };

  const fields: InputField[] = [
    { placeholder: "Name" },
    { placeholder: "Email" },
    { placeholder: "Phone" },
    { placeholder: "Your Stream" },
  ];
  const StremOption = AllStreamData?.map((stream: any) => ({
    value: stream.attributes.stream_name,
    label: stream.attributes.stream_name,
  }));

  const handleBlogArticalTabClick = (tab: SetStateAction<string>) => {
    setActiveBlogArticalTab(tab);
  };
  const handleTrendingCollegeTabClick = (tab: any) => {
    setActiveTrendingCollege(tab);
  };

  const handleExploreTabClick = (tab: any) => {
    setActiveExploreCollege(tab);
  };

  const handleSlideChange = (index: any) => {
    // Handle slide change logic if needed
  };

 

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true);
  };


  const handleStreamClick = (option: any) => {
    const dataToFilter =
      activeTrendingCollege === "Stream" ? AllCollegesData : CourseListData;
    const filterKey =
      activeTrendingCollege === "Stream" ? "streams" : "streams";
    const setDataFunction =
      activeTrendingCollege === "Stream"
        ? setFilterCollegeData
        : setFilterCourseData;

    const filteredData =
      dataToFilter &&
      dataToFilter.filter((dataItem: any) => {
        const singleDataStreamData = dataItem?.attributes?.[filterKey]?.data;
        return singleDataStreamData.some(
          (stream: any) =>
            stream.attributes.stream_name.toLowerCase() ===
            option?.value.toLowerCase()
        );
      });

    setDataFunction(filteredData);
  };

  const AffintiyMediaCard = AllBlogsDataList?.slice(0, 3).map(
    (blog: any, index: number) => {
      const { attributes } = blog;

      const date = new Date(attributes?.updatedAt);
      const normalDate = date.toLocaleDateString();
      return (
        <div
          key={index}
          className="relative flex flex-col hover:shadow-md w-[394px] min-w-72 h-auto items-center gap-5 cursor-pointer transition duration-200 border border-gray-300 rounded-lg"
        >
          {/* <Image
            src={attributes?.featured_image?.data?.attributes?.url}
            alt=""
            width={394}
            height={40}
            className="w-1/2 h-[10%] drop-shadow-xl object-fill absolute left-0 top-0"
          /> */}

          <div>
            <Image
              src={attributes?.featured_image?.data?.attributes?.url}
              alt=""
              width={394}
              height={40}
              className="w-full h-[250px] rounded-t-lg object-fill"
            />

            <div className="px-4 py-2 flex flex-col justify-between">
              <p className="sm:text-base text-xs">
                Posted on{" "}
                {new Date(attributes?.updatedAt).toISOString().slice(0, 10)}
              </p>

              <h1 className="font-bold sm:text-lg text-base sm:leading-6 leading-4 line-clamp-2 my-2">
                {attributes?.blog_title}
              </h1>
              <p className="text-gray-500 my-1 text-xs">10 MINS TO READ</p>
            </div>
          </div>
        </div>
      );
    }
  );

  const AffintiyBlogCard = AllBlogsDataList?.slice(0, 3).map(
    (blog: any, index: number) => {
      const { attributes } = blog;

      const date = new Date(attributes?.updatedAt);
      const normalDate = date.toLocaleDateString();
      return (
        <div
          key={index}
          className="relative flex flex-col hover:shadow-md w-[394px] min-w-72 h-auto items-center gap-5 cursor-pointer transition duration-200 border border-gray-300 rounded-lg"
        >
          <div>
            <Image
              src={attributes?.featured_image?.data?.attributes?.url}
              alt=""
              width={394}
              height={40}
              className="w-full h-[250px] rounded-t-lg object-fill"
            />

            <div className="px-4 py-2 pb-10 flex flex-col justify-between">
              <div className="flex flex-row items-center  justify-between">
                <p className="sm:text-base text-xs py-2">
                  Posted on {normalDate}
                </p>
                <p className="text-[#284602] bg-[#D3DEC4] w-fit rounded-full md:block hidden px-2 py-1 text-xs">
                  <span> ANNOUNCEMENT</span>
                </p>
              </div>
              <h1 className="font-semibold sm:text-lg text-base sm:leading-6 leading-4 line-clamp-2 my-2 ">
                <Link href={`/blogs/latest/${blog.id}`}>
                  {attributes?.blog_title}
                </Link>
              </h1>
            </div>
          </div>
          <p className="text-gray-500 p-2 text-xs absolute bottom-0 right-0">
            10 MINS TO READ
          </p>
        </div>
      );
    }
  );

  const AffinityNews: any = NewCategoryData?.filter(
    (category: any) => category.attributes.category_name === "Latest News"
  )
    .flatMap((category: any) => category.attributes.news.data)
    .sort(
      (a: any, b: any) =>
        new Date(b.attributes.updatedAt).getTime() -
        new Date(a.attributes.updatedAt).getTime()
    )
    .slice(0, 3)
    .map((news: any) => {
      const { attributes } = news;

      const date = new Date(attributes?.updatedAt);
      const normalDate = date.toLocaleDateString();

      return (
        <div
          key={news.id}
          className="relative flex flex-col hover:shadow-md lg:w-full w-[394px] min-w-72 h-auto items-center gap-5 cursor-pointer transition duration-200 border border-gray-300 rounded-lg"
        >
          <div className="w-full">
            <Image
              src={attributes?.featured_image?.data?.attributes?.url}
              alt=""
              width={400}
              height={40}
              className="sm:h-60 w-full h-28 rounded-t-lg"
            />
            <div className="px-4 py-2">
              <div className="flex justify-between items-center">
                <p>Posted on {normalDate}</p>
                <p className="text-[#284602] bg-[#D3DEC4] w-fit px-2 rounded-full md:block hidden">
                  ANNOUNCEMENT
                </p>
              </div>
              <Link href={`/news/latest/${attributes?.url}`}>
                <h1 className="font-bold sm:text-lg text-sm ">
                  {attributes?.name.slice(0, 20)}
                </h1>
              </Link>
              <p className="text-gray-500 my-1">10 MINS TO READ</p>
            </div>
          </div>
        </div>
      );
    });

  const filterData = (stream: any, country: any) => {
    const dataToFilter =
      activeTrendingCollege === "Stream" ? AllCollegesData : CourseListData;
    const filterKey = "streams";
    const setDataFunction =
      activeTrendingCollege === "Stream"
        ? setFilterCollegeData
        : setFilterCourseData;

    const filteredData = dataToFilter.filter((dataItem: any) => {
      const streamMatches = stream
        ? dataItem?.attributes?.[filterKey]?.data?.some(
            (s: any) => s.attributes.stream_name.toLowerCase() === stream
          )
        : true;

      const countryMatches = country
        ? dataItem?.attributes?.country?.data?.attributes?.country_name ===
          country
        : true;

      return streamMatches && countryMatches;
    });

    setDataFunction(filteredData);
  };

  const filteredColleges =
    filterCollegeData.length > 0 ? filterCollegeData : AllCollegesData;
  const filteredCourses =
    filterCourseData.length > 0 ? filterCourseData : CourseListData;

  const CountryTab = CountryListData?.map((country: any, index: any) => {
    const { attributes } = country;
    return (
      <div
        key={attributes?.country_name}
        className={`flex justify-center items-center gap-4 cursor-pointer transition duration-200 ${
          index === activeTab ? "border-b-4 py-1 border-blue-500" : ""
        }`}
        onClick={() => handleCountryTabClick(index, attributes?.country_name)}
      >
        <div className="flex items-center gap-x-1 z-10">
          <img
            src={attributes?.flags?.data?.attributes.url}
            alt={attributes?.country_name}
            className="w-[2rem] object-cover"
          />
          <h1 className="1">{attributes?.country_name}</h1>
        </div>
      </div>
    );
  });

  const StudyAbrod = CountryListData?.map((country: any) => {
    const { attributes } = country;
    return (
      <Link
        href={`/study-abroad/${attributes.country_url}`}
        key={attributes.country_name}
      >
        <div
          className="bg-[#F2F7F8] rounded-md flex flex-col size-[200px] sm:size-[300px] justify-center items-center gap-4 cursor-pointer transition duration-200 min-w-72"
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
          <div className="font-bold sm:text-3xl text-lg text-white z-10">
            {attributes?.country_name}
          </div>
        </div>
      </Link>
    );
  });

 const renderContent = () => {
    if (activeExploreCollege === "Stream") {
      return (
        <>
          {AllStreamData?.length > 0 ? (
            <StreamTiles AllStreamData={AllStreamData} />
          ) : (
            <div className="flex justify-center items- h-40 lg:w-96 text-2xl ml-28">
              <p className="">No Data Found...</p>
            </div>
          )}
        </>
      );
    }
    if (activeExploreCollege === "Exam") {
      return (
        <>
          {AllStreamData?.length > 0 ? (
            <ExamTiles AllStreamData={AllStreamData} />
          ) : (
            <div className="flex justify-center items- h-40 lg:w-96 text-2xl ml-28">
              <p className="">No Data Found...</p>
            </div>
          )}
        </>
      );
    }
    if (activeExploreCollege === "Courses") {
      return (
        <>
          {CourseListData?.length > 0 ? (
            <CourseTiles
              CourseListData={CourseListData}
              activeExploreCollege={activeExploreCollege}
            />
          ) : (
            <div className="flex justify-center items- h-40 lg:w-96 text-2xl ml-28">
              <p className="">No Data Found...</p>
            </div>
          )}
        </>
      );
    }
  };

  const customImageData = [
    {
      id: 1,
      featured_image: {
        data: {
          attributes: {
            url: "https://example.com/image1.jpg",
            certificationFor: "Name of Magzine",
            Organization: "Title of Magzine",
            src: paper01,
          },
        },
      },
    },
    {
      id: 1,
      featured_image: {
        data: {
          attributes: {
            url: "https://example.com/image1.jpg",
            certificationFor: "Name of Magzine",
            Organization: "Title of Magzine",
            src: paper01,
          },
        },
      },
    },
    {
      id: 1,
      featured_image: {
        data: {
          attributes: {
            url: "https://example.com/image1.jpg",
            certificationFor: "Name of Magzine",
            Organization: "Title of Magzine",
            src: paper01,
          },
        },
      },
    },
    {
      id: 1,
      featured_image: {
        data: {
          attributes: {
            url: "https://example.com/image1.jpg",
            certificationFor: "Name of Magzine",
            Organization: "Title of Magzine",
            src: paper01,
          },
        },
      },
    },
    {
      id: 1,
      featured_image: {
        data: {
          attributes: {
            url: "https://example.com/image1.jpg",
            certificationFor: "Name of Magzine",
            Organization: "Title of Magzine",
            src: paper01,
          },
        },
      },
    },
    {
      id: 1,
      featured_image: {
        data: {
          attributes: {
            url: "https://example.com/image1.jpg",
            certificationFor: "Name of Magzine",
            Organization: "Title of Magzine",
            src: paper01,
          },
        },
      },
    },
  ];

  return {
    CountryListData,
    HeroListData,
    FeturedListData,
    getTuchData,
    handelGetTuchModalOpen,
    handleSlideChange,
    handleLoginButtonClick,
    TestimonialListData,
    EventListData,
    activeExploreCollege,
    StudyAbrod,
    handleExploreTabClick,
    renderContent,
    activeTrendingCollege,
    handleTrendingCollegeTabClick,
    StremOption,
    handleStreamClick,
    CountryTab,
    filterCollegeData,
    AllCollegesData,
    filterCourseData,
    CourseListData,
    active,
    handleTab,
    AffintiyMediaCard,
    customImageData,
    AllStreamData,
    name,
    setName,
    setEmailValue,
    setPhone,
    setStreamsSelected,
    emailValue,
    phone,
    StreamsSelected,
    AffintiyBlogCard,
    AffinityNews,
    activeBlogArticalTab,
    handleBlogArticalTabClick,
    isLoginModalOpen,
    setIsLoginModalOpen,
    isGetTuchModalOpen,
    GetTuchHeading,
    selectedTuchType,
    handelGetTuchModalClose,
    formData
  };
};

export default useHomePageHook;
