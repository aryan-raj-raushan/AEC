import Image from "next/image";
import TabComponent from "@/src/Components/tab/tab";
import { useEffect, useState } from "react";
import Link from "next/link";
import ImageModal from "../../galleryModal/galleryModal";

export default function CollegeSideBarComponent({
  CollegeGalleryData,
  TabsData,
  page,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const validImageExtensions = [
    ".apng",
    ".avif",
    ".bmp",
    ".gif",
    ".ico",
    ".cur",
    ".jpg",
    ".jpeg",
    ".jfif",
    ".pjpeg",
    ".pjp",
    ".png",
    ".svg",
    ".tif",
    ".tiff",
    ".webp",
    ".xbm",
    ".xpm",
  ];
  const GetGalleryImage = CollegeGalleryData?.gallery?.data?.filter(
    (galleryItem: any) => {
      const fileExtension = galleryItem?.attributes?.ext?.toLowerCase();
      return validImageExtensions.includes(fileExtension);
    }
  );

  const validVideoExtensions = [
    ".3gp",
    ".avi",
    ".flv",
    ".mkv",
    ".mov",
    ".mp4",
    ".mpeg",
    ".mpg",
    ".m4v",
    ".ogg",
    ".ogv",
    ".qt",
    ".webm",
    ".wmv",
  ];

  const GetGalleryVideo = CollegeGalleryData?.gallery?.data?.filter(
    (galleryItem: any) =>
      validVideoExtensions.includes(galleryItem?.attributes?.ext)
  );

  // Initial count of items to display
  const initialDisplayCount = 6;

  // State variables to track the count of displayed images and videos
  const [imageDisplayCount, setImageDisplayCount] =
    useState(initialDisplayCount);
  const [videoDisplayCount, setVideoDisplayCount] =
    useState(initialDisplayCount);

  const handleLoadMoreImages = () => {
    setImageDisplayCount((prevCount) => prevCount + 2); // Increase image display count by 2
  };

  const handleLoadMoreVideos = () => {
    setVideoDisplayCount((prevCount) => prevCount + 2); // Increase video display count by 2
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const ImageVideoTab = [
    {
      title: "Images",
      content: (
        <div className="">
          <div className="grid grid-cols-2 gap-4 py-4 mx-auto">
            {GetGalleryImage &&
              GetGalleryImage.slice(0, imageDisplayCount).map(
                (image: any, index: number) => {
                  return (
                    <Image
                      key={index}
                      src={image.attributes.url}
                      width={500}
                      height={500}
                      alt="gallery"
                      className="w-full  h-[100px] object-fill hover:opacity-75 ease-in-out duration-200 hover:border-2 hover:p-1 hover:border-blue-500 cursor-pointer"
                      onClick={() => openModal(image.attributes.url)}
                    />
                  );
                }
              )}
          </div>
          {GetGalleryImage && GetGalleryImage.length > imageDisplayCount && (
            <div className="my-4">
              <button
                className="p-[10px] bg-primary w-full text-center text-white rounded-md"
                onClick={handleLoadMoreImages}
              >
                Load More Images
              </button>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Videos",
      content: (
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 py-4 mx-auto">
            {GetGalleryVideo &&
              GetGalleryVideo.slice(0, videoDisplayCount).map(
                (video: any, index: number) => (
                  <video key={index} controls className="w-full h-auto">
                    <source src={video.attributes.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              )}
          </div>
          {GetGalleryVideo && GetGalleryVideo.length > videoDisplayCount && (
            <div className="my-4">
              <button
                className="p-[10px] bg-primary w-full text-center text-white rounded-md"
                onClick={handleLoadMoreVideos}
              >
                Load More Videos
              </button>
            </div>
          )}
        </div>
      ),
    },
  ];

  let FeatureNews = () => {
    return (
      <div className="flex flex-col gap-2">
        {CollegeGalleryData &&
          CollegeGalleryData?.news?.data
            ?.slice(0, 5)
            .map((item: any, index: number) => {
              const { attributes } = item;
              return (
                <div
                  key={index}
                  className={`flex gap-2 ${
                    index < 4 ? "border-b border-b-primary-text-light" : ""
                  } pb-2`}
                >
                  <Image
                    src={attributes?.featured_image?.data?.attributes?.url}
                    width={80}
                    height={80}
                    alt=""
                    className="rounded-md w-full max-w-20 h-full max-h-16 object-fill"
                  />
                  <div className="text-sm leading-5">
                    <Link
                      href={`/news/latest/${item?.id}`}
                      className=" line-clamp-3"
                    >
                      {attributes?.name}
                    </Link>
                  </div>
                </div>
              );
            })}
      </div>
    );
  };

  let FeatureBlog = () => {
    return (
      <div className="flex flex-col gap-2">
        {CollegeGalleryData &&
          CollegeGalleryData?.blogs?.data
            ?.slice(0, 5)
            ?.map((item: any, index: number) => {
              const { attributes } = item;
              return (
                <div
                  key={index}
                  className={`flex gap-2 ${
                    index < 4 ? "border-b border-b-primary-text-light" : ""
                  } pb-2`}
                >
                  <Image
                    src={attributes?.featured_image?.data?.attributes?.url}
                    width={80}
                    height={80}
                    alt=""
                    className="rounded-md w-full h-full object-cover"
                  />
                  <div className="text-sm leading-5">
                    <Link href={`/blogs/latest/${item?.id}`}>
                      {attributes?.blog_title.slice(0, 45) + "..."}
                    </Link>
                  </div>
                </div>
              );
            })}
      </div>
    );
  };

  const NewsTab = [
    {
      title: "Featured News",
      content: <FeatureNews />,
    },
    {
      title: "Featured Blogs",
      content: <FeatureBlog />,
    },
  ];

  const scrollToSection = (index: number, offset: number) => {
    const section = document.getElementById(`section-${index}`);

    if (section) {
      setTimeout(() => {
        const topPos = section.offsetTop;
        window.scrollTo({ top: topPos - offset, behavior: "smooth" });
      }, 1);
    }
  };

  const [activeSection, setActiveSection] = useState<number>();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleSectionClick = (index: number, scoll: number) => {
    scrollToSection(index, scoll);
    setActiveSection(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tableContentColor =
    scrollPosition > 1000
      ? "text-primary bg-blue-50  p-2 rounded-lg border-primary"
      : "text-gray-400";

  const TableContent = [
    {
      title: "Table of Content",
      content: (
        <div className="flex-1 flex flex-col " key={page?.id}>
          <div className="flex flex-col gap-2 ">
            {TabsData?.map((table: any, index: any) => {
              let label;
              switch (table?.__typename) {
                case "ComponentCommonRecommendedColleges":
                  label = "Recommended Colleges";
                  break;
                case "ComponentCommonRecommendedCourses":
                  label = "Recommended Courses";
                  break;
                case "ComponentCommonRecommendedExams":
                  label = "Recommended Exams";
                  break;
                case "ComponentCommonRecommendedCareers":
                  label = "Recommended Careers";
                  break;
                case "ComponentCommonRecommendedScholarships":
                  label = "Recommended Scholarships";
                  break;
                case "ComponentCommonRecommendedCountries":
                  label = "Recommended Countries";
                  break;
                default:
                  label = table?.heading;
              }

              return (
                <div key={index}>
                  <div
                    className={`font-medium font-work-sans cursor-pointer px-4 ${
                      index === activeSection ? tableContentColor : ""
                    }  text-base leading-tight text-gray-400  hover:text-primary`}
                  >
                    <a
                      href={`#section-${index}`}
                      onClick={() => handleSectionClick(index, 160)}
                    >
                      {label}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
  ];

  const hasValidLabels = TabsData?.some((table: any) => {
    switch (table?.__typename) {
      case "ComponentCommonRecommendedColleges":
      case "ComponentCommonRecommendedCourses":
      case "ComponentCommonRecommendedExams":
      case "ComponentCommonRecommendedCareers":
      case "ComponentCommonRecommendedScholarships":
      case "ComponentCommonRecommendedCountries":
        return true;
      default:
        return table?.heading ? true : false;
    }
  });

  return (
    <>
      <div className="w-[300px] xl:block hidden h-full">
        <TabComponent tabs={ImageVideoTab} classProp="" />
        <TabComponent tabs={NewsTab} classProp="" />
        {hasValidLabels && (
          <TabComponent tabs={TableContent} classProp="sticky top-40" />
        )}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        images={GetGalleryImage}
      />
    </>
  );
}
