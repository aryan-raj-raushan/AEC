import Image from "next/image";
import { AvatarImage, Blog_1, SwimmingImage, VerifiedIcon } from "@/src/Asset";
import NewsSidebar from "@/src/Components/@news/newsSidebar/newsSidebar";
import ContainerWithTextBgImg from "@/src/Components/ContainerWithTextBgImg/ContainerWithTextBgImg";
import Breadcrumb from "@/src/Components/breadcrum/breadcrum";
import Separator from "@/src/Components/separator/separator";
import NewsLayouts from "@/src/Layouts/NewsLayouts/Newslayouts";
import { FaLinkedin, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import ColoredTag from "@/src/Components/tag/coloredTag";
import BlogsLayouts from "@/src/Layouts/BlogsLayouts/BlogsLayouts";
import useBlog from "@/src/Hooks/useBlog";
import { useRouter } from "next/router";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import FullScreenSkeleton from "@/src/Components/Skeleton/FullScreenSkeleton";

export default function NewsPage() {
  let [Active, setActive] = useState();

  const articleContent = [
    { name: "Exploring Generative AI in Content Creation" },
    { name: "Steering Clear of Common AI Writing Pitfalls" },
    { name: "Understanding ChatGPT Capabilities - Define Your Style" },
    { name: "Understand Your Readers" },
    { name: "Creating Quality AI-powered Blogs that Stand Out" },
    { name: "Conclusion: Embracing AI in Blog Creation" },
    { name: "Afterword: The AI Behind This Articles" },
  ];

  const router = useRouter();
  const blogId = router?.query?.blogsId as string;
  const [BlogData, setBlogData] = useState<any>(null);
  const { GetSingleBlogById, AllBlogsDataList } = useBlog();

  const { singleblogData, loading, error } = GetSingleBlogById(blogId);

  useEffect(() => {
    if (
      Array.isArray(singleblogData) &&
      singleblogData.length > 0 &&
      typeof singleblogData[0] === "object" &&
      singleblogData[0] !== null
    ) {
      const attributes = singleblogData[0].attributes;
      setBlogData(attributes);
    } else {
      setBlogData(null);
    }
  }, [singleblogData]);

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
    { label: "Blogs", url: "/blogs/latest" },
    { label: BlogData?.blog_title, url: "" },
  ];

  return (
    <>
      <BlogsLayouts>
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
                <div className="flex-1 flex flex-col gap-7  overflow-y-auto Content h-full hide-scrollbar">
                  <ContainerWithTextBgImg
                    imagePath={BlogData?.featured_image?.data?.attributes?.url}
                    containerHeight="h-96"
                  >
                    <div className="h-full flex flex-col gap-5 justify-end text-white">
                      <div className="text-2xl font-bold text-white">
                        {BlogData?.blog_title}
                      </div>
                      <div className="text-sm text-white flex gap-4">
                        <span>{formatDate(BlogData?.updatedAt)}</span>
                        <span>10 min read</span>
                      </div>
                    </div>
                  </ContainerWithTextBgImg>

                  <div className=" flex flex-col gap-4 h-[1800px]">
                    <h6 className="text-2xl font-semibold">
                      {BlogData?.blog_title}
                    </h6>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: BlogData?.blog_content,
                      }}
                      className="ckeditorData"
                    />
                  </div>

                  {/* <div className="flex justify-between bg-brand-blue px-5 py-6 my-4 rounded-lg text-white font-semibold">
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
                  </div> */}
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
                      <div>
                        {articleContent.map((item, index) => {
                          return (
                            <div
                              className={`border-l-[3px] ${
                                index === 1
                                  ? "border-primary text-primary"
                                  : "border-transparent"
                              } px-4 py-2 cursor-pointer`}
                            >
                              {item.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h6 className="text-xl font-semibold pb-4">Tags</h6>
                      <div className="flex flex-wrap gap-1">
                        {BlogData?.tags?.data?.map((tag: any, index: any) => {
                          return (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-5 py-2.5 dark:bg-gray-700 dark:text-gray-300"
                            >
                              {tag?.attributes?.tags_name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-screen-xl mx-auto my-10 px-4">
                <Separator />
              </div>
              <section className="max-w-screen-xl mx-auto my-10 px-4">
                <h6 className="text-xl font-semibold pb-4">Related Post</h6>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                      <div className="row-span-1 col-span-2">
                        <div className="relative rounded-lg overflow-hidden h-full">
                          <Image
                            src={
                              AllBlogsDataList[0]?.attributes?.featured_image
                                ?.data?.attributes?.url
                            }
                            objectFit="fill"
                            width={100}
                            height={100}
                            className="h-full w-full object-cover"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-black opacity-20 h-full w-full object-cover" />
                          <div className="absolute inset-0 p-6 z-10">
                            <div className="flex">
                              <ColoredTag
                                text="India"
                                textColor="text-white"
                                bgColor="bg-primary"
                              />
                            </div>
                            <div className="h-full flex flex-col gap-1 justify-end text-xs text-white">
                              <div className="flex ">
                                <div className="text-xl lg:text-2xl font-semibold">
                                  <Link
                                    href={`/blogs/latest/${AllBlogsDataList[0]?.id}`}
                                  >
                                    {AllBlogsDataList[0]?.attributes?.blog_title.slice(
                                      0,
                                      100
                                    )}
                                    ...
                                  </Link>
                                </div>
                              </div>
                              <p className=" mb-8">
                                {AllBlogsDataList[0]?.attributes?.blog_title.slice(
                                  0,
                                  200
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-span-1 col-span-1">
                        <div className="relative rounded-lg overflow-hidden h-full">
                          <Image
                            src={
                              AllBlogsDataList[1]?.attributes?.featured_image
                                ?.data?.attributes?.url
                            }
                            objectFit="fill"
                            width={100}
                            height={100}
                            className="h-full w-full object-cover"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-black opacity-20 h-full w-full object-cover" />
                          <div className="absolute inset-0 p-6">
                            <div className="h-full flex flex-col gap-1 justify-end text-white">
                              <div className="text-xs lg:text-2xl font-semibold ">
                                <Link
                                  href={`/blogs/latest/${AllBlogsDataList[1]?.id}`}
                                >
                                  {AllBlogsDataList[1]?.attributes?.blog_title.slice(
                                    0,
                                    100
                                  )}
                                  ...
                                </Link>
                              </div>
                              <div className="flex justify-between text-xs">
                                <div className="">
                                  {formatDate(
                                    AllBlogsDataList[1]?.attributes?.updatedAt
                                  )}
                                </div>
                                <div className="">CNN Indonesia</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-span-1 col-span-1">
                        <div className="relative rounded-lg overflow-hidden h-full">
                          <Image
                            src={
                              AllBlogsDataList[2]?.attributes?.featured_image
                                ?.data?.attributes?.url
                            }
                            objectFit="fill"
                            width={100}
                            height={100}
                            className="h-full w-full object-cover"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-black opacity-20 h-full w-full object-cover" />
                          <div className="absolute inset-0 p-6">
                            <div className="h-full flex flex-col gap-1 justify-end text-xs text-white">
                              <div className="text-xs lg:text-2xl font-semibold ">
                                <Link
                                  href={`/blogs/latest/${AllBlogsDataList[2]?.id}`}
                                >
                                  {AllBlogsDataList[2]?.attributes?.blog_title.slice(
                                    0,
                                    100
                                  )}
                                  ...
                                </Link>
                              </div>
                              <div className="flex justify-between text-xs">
                                <div className="">
                                  {formatDate(
                                    AllBlogsDataList[2]?.attributes?.updatedAt
                                  )}
                                </div>
                                <div className="">CNN Indonesia</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="relative rounded-lg overflow-hidden h-full gap-2">
                      <Image
                        src={
                          AllBlogsDataList[3]?.attributes?.featured_image?.data
                            ?.attributes?.url
                        }
                        objectFit="fill"
                        width={100}
                        height={100}
                        className="h-full w-full object-contain blur-sm"
                        alt=""
                      />
                      <div className="absolute inset-0 bg-black opacity-20 h-full w-full object-cover" />
                      <div className="absolute inset-0 p-6 z-10">
                        <div className="h-full flex flex-col gap-1 justify-end text-white">
                          <div className="text-xs lg:text-2xl font-semibold ">
                            <Link
                              href={`/blogs/latest/${AllBlogsDataList[3]?.id}`}
                            >
                              {AllBlogsDataList[3]?.attributes?.blog_title.slice(
                                0,
                                100
                              )}
                              ...
                            </Link>
                          </div>
                          <div className="flex justify-between items-center text-white">
                            <div className="flex gap-2 p-2 items-center">
                              <Image
                                src={AvatarImage}
                                objectFit="cover"
                                width={40}
                                height={40}
                                alt=""
                              />
                              <div className="">
                                <p className="font-semibold text-[#183B56]">
                                  Viola Manisa
                                </p>
                                <div className="flex gap-2 text-sm">
                                  <Image
                                    src={VerifiedIcon}
                                    width={16}
                                    height={16}
                                    alt=""
                                  />
                                  <p className="italic text-[#5A7184]">
                                    Verified
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="font-semibold text-[#5A7184] px-2">
                              {formatDate(
                                AllBlogsDataList[3]?.attributes?.updatedAt
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </>
        )}
      </BlogsLayouts>
    </>
  );
}
