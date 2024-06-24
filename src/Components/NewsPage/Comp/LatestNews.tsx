import React from 'react';
import Image from 'next/image'; // Import Image component from next/image
import Link from 'next/link'; // Import Link component from next/link

const LatestNews = ({ NewCategoryData ,formatDate}:any) => {
  // Define formatDate function or import it from utilities

  return (
    <div>
      <section className="max-w-screen-xl mx-auto px-4">
        {NewCategoryData && NewCategoryData.length > 0 && ( // Check if NewCategoryData exists and has a length greater than zero
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-semibold">
              {NewCategoryData[0]?.attributes?.category_name}
            </h3>
            <div className="flex flex-col gap-4">
              {NewCategoryData[0]?.attributes?.news?.data
                .slice(0, 2)
                .map((latestData:any, index:any) => (
                  <div className="md:flex gap-8" key={index}> {/* Add key prop */}
                    <div className="flex-1">
                      <div className="relative rounded-lg overflow-hidden h-72">
                        <Image
                          src={
                            latestData?.attributes?.featured_image?.data
                              ?.attributes?.url
                          }
                          objectFit="cover"
                          width={100}
                          height={100}
                          className="h-full w-full object-cover"
                          alt=""
                        />
                        <div className="absolute inset-0 bg-black opacity-20 h-full w-full object-cover" />
                        <div className="absolute inset-0 p-6">
                          <div className="h-full flex flex-col gap-10 justify-around text-xs text-white">
                            <div className="md:text-3xl text-base font-bold text-white line-clamp-3">
                              <Link
                                href={`/news/latest/${latestData?.attributes?.url}`}
                              >
                                {latestData?.attributes?.name}
                              </Link>
                            </div>
                            <div className="flex">
                              <p>
                                {formatDate(
                                  latestData?.attributes?.updatedAt
                                )}
                              </p>
                              <b>CNN Indonesia</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3 w-full flex flex-col justify-between">
                      <div className="text-lg leading-6 text-primary-text capitalize line-clamp-6">
                        {latestData?.attributes?.excerpt}
                      </div>
                      <div className="mb-4">
                        <Link
                          href={`/news/latest/${latestData?.attributes?.url}`}
                          className="text-primary cursor-pointer flex flex-row gap-2 items-center"
                        >
                          Read more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={20}
                            width={20}
                            viewBox="0 0 25 25"
                            fill="none"
                          >
                            <path
                              d="M17.6453 19.0736L24.2188 12.5002L17.6453 5.92676L16.5404 7.03164L21.2278 11.719H0.818556V13.2815H21.2277L16.5404 17.9688L17.6453 19.0736Z"
                              fill="#1268F5"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default LatestNews;
