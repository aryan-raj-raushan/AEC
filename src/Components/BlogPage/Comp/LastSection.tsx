import ColoredTag from '@/src/Components/tag/coloredTag';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const LastSection = ({AllBlogsDataList,formatDate ,currentPage ,totalPages ,handleLoadMore}:any) => {
  return (
    <>
    <section className="max-w-screen-xl mx-auto my-10 px-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  {AllBlogsDataList.slice()
                    .sort((a:any, b:any) => {
                      const dateA = new Date(a.attributes.updatedAt);
                      const dateB = new Date(b.attributes.updatedAt);
                      if (dateA > dateB) return -1;
                      if (dateA < dateB) return 1;
                      return 0;
                    })
                    .slice(6, 7)
                    .map((blog:any, index:any) => (
                      <div className="row-span-1 col-span-2">
                        <div className="relative rounded-lg overflow-hidden h-full">
                          <Image
                            src={
                              blog?.attributes?.featured_image?.data?.attributes
                                ?.url
                            }
                            objectFit="fill"
                            className="h-full w-full object-fill"
                            alt=""
                            width={100}
                            height={100}
                          />
                          <div className="absolute inset-0 bg-black opacity-20 h-full w-full object-fill" />
                          <div className="absolute inset-0 p-6">
                            <div className="flex">
                              <ColoredTag
                                text="India"
                                textColor="text-white"
                                bgColor="bg-primary"
                              />
                            </div>
                            <div className="h-full flex flex-col gap-1 justify-end text-xs text-white">
                              <div className="flex ">
                                <div className="text-2xl font-semibold line-clamp-2">
                                  <Link href={`/blogs/latest/${blog.id}`}>
                                    {blog.attributes?.blog_title.slice(0, 100)}
                                  </Link>
                                </div>
                              </div>
                              <p className=" mb-8">
                                {blog?.attributes?.blog_title.slice(0, 250)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  {AllBlogsDataList.slice()
                    .sort((a:any, b:any) => {
                      const dateA = new Date(a.attributes.updatedAt);
                      const dateB = new Date(b.attributes.updatedAt);
                      if (dateA > dateB) return -1;
                      if (dateA < dateB) return 1;
                      return 0;
                    })
                    .slice(7, 9)
                    .map((blog:any, index:any) => (
                      <div className="row-span-1 col-span-1">
                        <div className="relative rounded-lg overflow-hidden h-full">
                          <Image
                            src={
                              blog?.attributes?.featured_image?.data?.attributes
                                ?.url
                            }
                            objectFit="fill"
                            className="h-full w-full object-fill"
                            alt=""
                            width={100}
                            height={100}
                          />
                          <div className="absolute inset-0 bg-black opacity-20 h-full w-full object-fill" />
                          <div className="absolute inset-0 p-6">
                            <div className="h-full flex flex-col gap-1 justify-end text-xs text-white">
                              <div className="text-2xl font-semibold ">
                                <Link
                                  href={`/blogs/latest/${blog.id}`}
                                  className="text-white line-clamp-2"
                                >
                                  {blog?.attributes?.blog_title.slice(0, 100)}
                                  ...
                                </Link>
                              </div>
                              <div className="flex justify-between">
                                <div className="">
                                  {formatDate(blog?.attributes?.updatedAt)}
                                </div>
                                <div className="">CNN Indonesia</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {AllBlogsDataList.slice()
                .sort((a:any, b:any) => {
                  const dateA = new Date(a.attributes.updatedAt);
                  const dateB = new Date(b.attributes.updatedAt);
                  if (dateA > dateB) return -1;
                  if (dateA < dateB) return 1;
                  return 0;
                })
                .slice(9, 10)
                .map((blog:any, index:any) => (
                  <div className="w-1/2">
                    <div className="relative rounded-lg overflow-hidden h-full gap-2">
                      <Image
                        src={
                          blog.attributes?.featured_image?.data?.attributes?.url
                        }
                        objectFit="fill"
                        className="h-full w-full object-fill"
                        alt=""
                        width={100}
                        height={100}
                      />
                      <div className="absolute inset-0 bg-black opacity-20 h-full w-full object-fill" />
                      <div className="absolute inset-0 p-6">
                        <div className="h-full flex flex-col gap-1 justify-end text-xs text-white">
                          <div className="text-2xl font-semibold ">
                            <Link
                              href={`/blogs/latest/${blog.id}`}
                              className="text-white line-clamp-2"
                            >
                              {blog?.attributes?.blog_title.slice(0, 100)}
                              ...
                            </Link>
                          </div>
                          <div className="flex justify-between">
                            <div className="">
                              {formatDate(blog?.attributes?.updatedAt)}
                            </div>
                            <div className="">CNN Indonesia</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {currentPage < totalPages && (
              <div className="text-center p-6">
                <button
                  type="button"
                  className="text-black bg-white border-2 border-primary color-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              </div>
            )}
          </section>
    </>
  )
}

export default LastSection