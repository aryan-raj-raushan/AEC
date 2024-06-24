"use client";
import NewsSidebar from '@/src/Components/@news/newsSidebar/newsSidebar';
import Separator from '@/src/Components/separator/separator';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsData = ({ NewCategoryData ,formatDate}:any) => {
  return (
    <>
      <section>
        {NewCategoryData && NewCategoryData[5]?.attributes?.news?.data?.length > 0 && (
          <div className="max-w-screen-xl mx-auto px-4 py-14 bg-white flex gap-4">
            <div className="flex-1">
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-semibold">
                  {NewCategoryData[5]?.attributes?.category_name}
                </h3>
              </div>
              <div className="grid md:grid-cols-2 grid-rows-5 gap-x-6 gap-y-4 text-primary-text">
                <div className="col-span-1 row-span-5">
                  <div className="flex flex-col gap-4">
                    <Image
                      src={
                        NewCategoryData[4]?.attributes?.news?.data[0]
                          ?.attributes?.featured_image?.data?.attributes?.url
                      }
                      width={100}
                      height={100}
                      alt=""
                      className="w-full h-1/2"
                    />
                    <div className="text-[10px]">
                      <span>Craig Bator - </span>
                      <span className="text-primary-text opacity-80">
                        {formatDate(
                          NewCategoryData[5]?.attributes?.news?.data[0]?.attributes?.updatedAt
                        )}
                      </span>
                    </div>
                    <div className="text-lg font-semibold">
                      <Link
                        href={`/news/latest/${NewCategoryData[4]?.attributes?.news?.data[0]?.attributes?.url}`}
                      >
                        {NewCategoryData[4]?.attributes?.news?.data[0]?.attributes?.name.slice(
                          0,
                          60
                        )}
                      </Link>
                    </div>
                    <div className="text-sm opacity-80">
                      {NewCategoryData[4]?.attributes?.news?.data[0]?.attributes?.excerpt.slice(
                        0,
                        100
                      )}
                    </div>
                  </div>
                </div>

                {NewCategoryData[4]?.attributes?.news?.data > 0 &&
                  NewCategoryData[4]?.attributes?.news?.data
                    ?.slice(0, 4)
                    .map((data:any, index:any) => {
                      return (
                        <div className="row-span-1 col-span-1" key={index}>
                          <div className="flex gap-4">
                            <div>
                              <Image
                                src={
                                  data?.attributes?.featured_image?.data?.attributes?.url
                                }
                                objectFit="fill"
                                width={100}
                                height={100}
                                alt=""
                                className="w-40 h-full"
                              />
                            </div>
                            <div className="flex flex-col">
                              <div className="text-[10px]">
                                <span>Craig Bator - </span>
                                <span className="text-primary-text opacity-80">
                                  {formatDate(data?.attributes?.updatedAt)}
                                </span>
                              </div>
                              <div className="md:font-semibold font-medium sm:text-base text-[12px]">
                                <Link href={`/news/latest/${data?.attributes?.url}`}>
                                  {data?.attributes?.name.slice(0, 60)}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </div>

              <div className="max-w-screen-xl mx-auto my-10">
                <Separator />
              </div>
            </div>

            <div className="lg:flex hidden">
              <NewsSidebar />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default NewsData;
