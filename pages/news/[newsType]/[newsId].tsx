import Image from "next/image";
import { SwimmingImage } from "@/src/Asset";
import NewsSidebar from "@/src/Components/@news/newsSidebar/newsSidebar";
import ContainerWithTextBgImg from "@/src/Components/ContainerWithTextBgImg/ContainerWithTextBgImg";
import Breadcrumb from "@/src/Components/breadcrum/breadcrum";
import Separator from "@/src/Components/separator/separator";
import Link from "next/link";
import NewsLayouts from "@/src/Layouts/NewsLayouts/Newslayouts";
import { FaLinkedin, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useBlog from "@/src/Hooks/useBlog";
import FullScreenSkeleton from "@/src/Components/Skeleton/FullScreenSkeleton";

interface Article {
  name: string;
}

export default function NewsPage() {
  let [Active, setActive] = useState();

  // ============
  const router = useRouter();
  const newsId = router?.query?.newsId as string;
  const [NewsData, setNewsData] = useState<any>(null);
  const { GetSingleNewsById, NewCategoryData } = useBlog();

  const { singleNewsData, loading, error } = GetSingleNewsById(newsId);

  const [articleContent, setArticleContent] = useState<Article[]>([]);

  useEffect(() => {
    // Parse the HTML content using dom-parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(NewsData?.content, "text/html");

    // Find all <h2> tags
    const h2Tags = doc.getElementsByTagName("h2");

    // Extract the text from each <h2> tag
    const extractedContent = Array.from(h2Tags).map((element) => ({
      name: element.textContent || "",
    })) as Article[];

    // Update state with extracted content
    setArticleContent(extractedContent);
  }, [NewsData?.content]);

  useEffect(() => {
    if (
      Array.isArray(singleNewsData) &&
      singleNewsData.length > 0 &&
      typeof singleNewsData[0] === "object" &&
      singleNewsData[0] !== null
    ) {
      const attributes = singleNewsData[0].attributes;
      setNewsData(attributes);
    } else {
      setNewsData(null);
    }
  }, [singleNewsData]);

  const formatDate = (timestamp: string | number | Date) => {
    const date = new Date(timestamp);
    const now: Date = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diff < 60) {
      return "Just Now";
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes} ${minutes === 1 ? "Minute" : "Minutes"} Ago`;
    } else if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return `${hours} ${hours === 1 ? "Hour" : "Hours"} Ago`;
    } else if (diff < 604800) {
      const days = Math.floor(diff / 86400);
      return `${days} ${days === 1 ? "Day" : "Days"} Ago`;
    } else {
      return date.toDateString();
    }
  };

  const breadcrumb = [
    { label: "Home", url: "/" },
    { label: "Latest News", url: "/news/latest" },
    { label: NewsData?.name, url: "" },
  ];

  return (
    <>
      <NewsLayouts>
        {loading ? (
          <div className="heroSection navbar-PageInfo-responsive">
            <FullScreenSkeleton />
          </div>
        ) : (
          <>
            <section className="max-w-screen-xl mx-auto mb-24 p-2">
              <div className="my-4">
                <Breadcrumb items={breadcrumb} textColor="text-[#6C7880]" />
              </div>
              <div className=" flex gap-8 ">
                <div className="flex-1 flex flex-col gap-7  overflow-y-auto Content h-full">
                  <ContainerWithTextBgImg
                    imagePath={NewsData?.featured_image?.data?.attributes?.url}
                    containerHeight="h-96"
                  >
                    <div className="h-full flex flex-col gap-5 justify-end text-white">
                      <div className="text-2xl font-bold text-white">
                        {NewsData?.name}
                      </div>
                      <div className="text-sm text-white flex gap-4">
                        <span>{formatDate(NewsData?.updatedAt)}</span>
                        <span>10 min read</span>
                      </div>
                    </div>
                  </ContainerWithTextBgImg>

                  <div className=" flex flex-col gap-4 h-[1800px]">
                    <h6 className="text-2xl font-semibold">{NewsData?.name}</h6>
                    <div
                      dangerouslySetInnerHTML={{ __html: NewsData?.content }}
                      className="ckeditorData"
                    />
                  </div>

                  <div className="flex justify-between bg-brand-blue px-5 py-6 rounded-lg text-white font-semibold">
                    <div>Like what you see? Share with a friend.</div>
                    <div className="flex gap-4">
                      <div className="text-white text-3xl">
                        <FaSquareFacebook />
                      </div>
                      <div className="text-white text-3xl">
                        <FaXTwitter />
                      </div>
                      <div className="text-white text-3xl">
                        <FaLinkedin />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sticky top-24 h-fit">
                  <div className="lg:flex hidden flex-col  bg-white gap-6 w-72 ">
                    <div className="flex flex-col gap-[10px] w-full p-4 rounded-[10px] bg-primary text-white">
                      <div>Share with your community!</div>

                      <div className="flex gap-4">
                        <div className="text-white text-3xl">
                          <FaSquareFacebook />
                        </div>
                        <div className="text-white text-3xl">
                          <FaXTwitter />
                        </div>
                        <div className="text-white text-3xl">
                          <FaLinkedin />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 text-primary-text">
                      <div className="font-semibold text-xl">
                        In this article
                      </div>
                      <div className="">
                        {articleContent.map((item: any, index: number) => (
                          <div
                            key={index}
                            className={`px-4 py-2 cursor-pointer ${
                              index === 0
                                ? "active border-l border-l-blue-500"
                                : ""
                            }`}
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>
                    <NewsSidebar NewsData={NewsData} />
                  </div>
                </div>
              </div>
              <div className="my-16">
                <Separator />
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-bold">Related Articles</h5>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-4">
                  {NewCategoryData[0]?.attributes?.news?.data
                    .slice(0, 3)
                    .map((latestData: any, index: any) => {
                      return (
                        <div
                          className="flex flex-col p-2 shadow-md bg-gray-100 gap-6 rounded-lg"
                          key={index}
                        >
                          <Image
                            src={
                              latestData?.attributes?.featured_image?.data
                                ?.attributes?.url
                            }
                            objectFit="fill"
                            width={100}
                            height={100}
                            className="h-[350px] w-full object-cover"
                            alt=""
                          />
                          <div className="flex flex-col gap-2">
                            <div className="text-primary-text text-lg font-semibold">
                              <Link href={`/news/latest/${latestData?.id}`}>
                                {latestData?.attributes?.name}
                              </Link>
                            </div>
                            <div className="text-sm text-primary-text flex gap-4">
                              <span>
                                {" "}
                                {formatDate(latestData?.attributes?.updatedAt)}
                              </span>
                              <span>10 min read</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </section>
          </>
        )}
      </NewsLayouts>
    </>
  );
}
