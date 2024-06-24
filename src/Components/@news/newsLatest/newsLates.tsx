import Image from "next/image";
import {
  AvatarImage,
  FilterIcon,
  SwimmingImage,
  ThreeDotIcon,
} from "@/src/Asset";
import NewsSidebar from "../newsSidebar/newsSidebar";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  PromiseLikeOfReactNode,
  ReactPortal,
  Key,
} from "react";

export default function NewsLatest({ Category, currentTab }: any) {
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

  return (
    <>
      {" "}
      <section className="mb-5 p-2">
        <div className="max-w-screen-xl mx-auto flex justify-between">
          <h3 className="md:text-5xl text-4xl font-semibold">{currentTab}</h3>
          <div className="lg:flex hidden border  items-center px-4 py-3 border-primary-text gap-2 rounded-lg cursor-pointer">
            <span>sort</span>
            <div>
              <Image src={FilterIcon} width={20} height={20} alt="search" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto flex gap-4">
          <div className="flex-1">
            <div className="flex flex-col">
              {Category &&
                Category.map(
                  (
                    news: {
                      id: any;
                      attributes: {
                        updatedAt: string | number | Date;
                        name:
                          | string
                          | number
                          | boolean
                          | ReactElement<
                              any,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | PromiseLikeOfReactNode
                          | null
                          | undefined;
                        excerpt:
                          | string
                          | number
                          | boolean
                          | ReactElement<
                              any,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | ReactPortal
                          | PromiseLikeOfReactNode
                          | null
                          | undefined;
                        featured_image: {
                          data: { attributes: { url: string | StaticImport } };
                        };
                      };
                    },
                    index: Key | null | undefined
                  ) => {
                    return (
                      <div key={index}>
                        <div className="sm:flex gap-10 p-2 border-b border-b-primary-text-light">
                          <div className="sm:w-[180px] w-full h-[100px] overflow-hidden sm:order-last order-first">
                            <Image
                              src={
                                news?.attributes?.featured_image?.data
                                  ?.attributes?.url
                              }
                              alt="news"
                              width={180}
                              height={140}
                              className="rounded-lg sm:w-[180px] w-full h-[100px]"
                            />
                          </div>
                          <div className="flex-1 flex flex-col gap-1 sm:mt-0 mt-1">
                            <div className="flex gap-4 items-center">
                              <Image
                                src={AvatarImage}
                                alt=""
                                width={34}
                                height={34}
                              />
                              <span className="text-sm text-primary-text font-light">
                                Amit Das
                              </span>
                              <span className="text-sm text-primary-text opacity-60 font-light">
                                {formatDate(news?.attributes?.updatedAt)}
                              </span>
                            </div>
                            <div>
                              <div className="md:text-[22px] sm:text-[17px] font-semibold">
                                <Link href={`/news/latest/${news?.id}`}>
                                  {typeof news?.attributes?.name === "string"
                                    ? news.attributes.name.slice(0, 60)
                                    : ""}
                                  ...
                                </Link>
                              </div>
                              <p className="font-light">
                                {typeof news?.attributes?.excerpt === "string"
                                  ? news.attributes.excerpt.slice(0, 80)
                                  : ""}
                                ...
                              </p>{" "}
                            </div>
                            <div className="flex justify-between ">
                              <span className="text-sm text-primary-text opacity-60 font-light">
                                3 min read
                              </span>
                              <div>
                                <Image
                                  src={ThreeDotIcon}
                                  alt=""
                                  width={24}
                                  height={24}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
            </div>
          </div>
          <div className="lg:flex hidden">
            <NewsSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
