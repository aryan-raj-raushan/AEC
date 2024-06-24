import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Separator from '@/src/Components/separator/separator';

const Featured = ({ NewCategoryData ,formatDate}:any) => {
  return (
    <div>
      <section className="max-w-screen-xl mx-auto my-10 px-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-semibold">
            {NewCategoryData[1]?.attributes?.category_name}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen">
            {/* First column */}
            <div className="h-full">
              {NewCategoryData[1]?.attributes?.news?.data
                .slice(0, 1)
                .map((latestData:any, index:any) => (
                  <div key={index} className="relative h-full">
                    <div className="relative h-full">
                      <Image
                        src={
                          latestData?.attributes?.featured_image?.data
                            ?.attributes?.url
                        }
                        layout="fill"
                        alt=""
                      />
                      <div className="absolute inset-0 bg-black opacity-20" />
                      <div className="absolute inset-0 p-6 flex flex-col gap-1 justify-end text-xs text-white">
                        <div className="text-xs">
                          -{' '}
                          {formatDate(
                            latestData?.attributes?.updatedAt
                          )}
                        </div>
                        <div className="text-2xl font-semibold">
                          <Link
                            href={`/news/latest/${latestData?.attributes?.url}`}
                          >
                            {latestData?.attributes?.name}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Second column */}
            <div className="h-full">
              <div className="grid sm:grid-cols-2 grid-col-1 gap-4 h-full">
                {/* First row */}
                {NewCategoryData[1]?.attributes?.news?.data
                  .slice(1, 3)
                  .map((latestData:any, index:any) => (
                    <div className="relative h-full" key={index}>
                      <Image
                        src={
                          latestData?.attributes?.featured_image?.data
                            ?.attributes?.url
                        }
                        layout="fill"
                        alt=""
                      />
                      <div className="absolute inset-0 bg-black md:opacity-40 opacity-60"></div>{' '}
                      {/* Dark overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col gap-1 justify-end text-xs text-white">
                        <div className="text-xs">
                          -{' '}
                          {formatDate(
                            latestData?.attributes?.updatedAt
                          )}
                        </div>
                        <div className="text-xs font-semibold">
                          <Link
                            href={`/news/latest/${latestData?.attributes?.url}`}
                          >
                            {latestData?.attributes?.name}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                {/* Second row */}
                <div className="relative sm:col-span-2 h-full w-full overflow-hidden">
                  {NewCategoryData[1]?.attributes?.news?.data
                    .slice(3, 4)
                    .map((latestData:any, index:any) => (
                      <div key={index} className="relative h-full">
                        <div className="relative h-full min-h-[100px]">
                          <Image
                            src={
                              latestData?.attributes?.featured_image?.data
                                ?.attributes?.url
                            }
                            layout="fill"
                            alt=""
                            className="h-full"
                          />
                          <div className="absolute inset-0 bg-black opacity-20" />
                          <div className="absolute inset-0 p-6 flex flex-col gap-1 justify-end text-xs text-white">
                            <div className="text-xs">
                              -{' '}
                              {formatDate(
                                latestData?.attributes?.updatedAt
                              )}
                            </div>
                            <div className="text-2xl font-semibold">
                              <Link
                                href={`/news/latest/${latestData?.attributes?.url}`}
                              >
                                {latestData?.attributes?.name}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto my-10 px-4">
          <Separator />
        </div>

      </section>
    </div>
  );
};

export default Featured;
