import ColoredTag from '@/src/Components/tag/coloredTag';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const RelatedPost = ({AllBlogsDataList,formatDate}:any) => {
  return (
    <>
     <section className="max-w-screen-xl mx-auto px-4 mb-8">
            <h3 className="text-3xl font-semibold  pb-3">Related Post</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="top-div flex flex-col gap-2">
                {AllBlogsDataList.slice()
                  .sort((a:any, b:any) => {
                    const dateA = new Date(a.attributes.updatedAt);
                    const dateB = new Date(b.attributes.updatedAt);
                    if (dateA > dateB) return -1;
                    if (dateA < dateB) return 1;
                    return 0;
                  })
                  .slice(0, 3)
                  .map((blog:any, index:any) => (
                    <div className="row-span-1 col-span-1">
                      <div className="relative rounded-lg overflow-hidden h-full">
                        <div className="relative rounded-lg overflow-hidden h-full">
                          {blog.attributes?.featured_image?.data?.attributes
                            ?.url && ( // Check if the image source exists
                            <Image
                              src={
                                blog.attributes?.featured_image?.data
                                  ?.attributes?.url
                              }
                              objectFit="fill"
                              className="h-full w-full object-fill"
                              alt=""
                              width={100}
                              height={100}
                            />
                          )}
                          <div className="absolute inset-0 bg-black opacity-60 h-full w-full pt-4 flex" />
                          <div className="absolute inset-0 p-4">
                            {blog.attributes?.tags?.data?.[0]?.attributes
                              ?.tags_name ? (
                              <div className="flex">
                                <ColoredTag
                                  text={blog.attributes?.tags?.data?.[0]?.attributes?.tags_name.toUpperCase()}
                                  textColor="text-white"
                                  bgColor="bg-yellow-600"
                                />
                              </div>
                            ) : (
                              <div>&nbsp;</div>
                            )}

                            <div className="h-full w-full flex flex-col gap-1 justify-end text-xs text-white">
                              <div className="flex">
                                <div className="text-xs mb-1">
                                  {
                                    new Date(blog.attributes?.updatedAt)
                                      .toISOString()
                                      .split("T")[0]
                                  }
                                </div>
                              </div>
                              <div className="text-xl font-semibold mb-8">
                                <Link href={`/blogs/latest/${blog.id}`}>
                                  {blog.attributes?.blog_title.slice(0, 100)}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="w-full">
                {AllBlogsDataList.slice()
                  .sort((a:any, b:any) => {
                    const dateA = new Date(a.attributes.updatedAt);
                    const dateB = new Date(b.attributes.updatedAt);
                    if (dateA > dateB) return -1;
                    if (dateA < dateB) return 1;
                    return 0;
                  })
                  .slice(3, 4)
                  .map((blog:any, index:any) => (
                    <div className="relative rounded-lg overflow-hidden h-full">
                      {blog.attributes?.tags?.data?.[0]?.attributes
                        ?.tags_name ? (
                        <div className="flex">
                          <ColoredTag
                            text={blog.attributes?.tags?.data?.[0]?.attributes?.tags_name.toUpperCase()}
                            textColor="text-white"
                            bgColor="bg-yellow-600"
                          />
                        </div>
                      ) : (
                        <div>&nbsp;</div>
                      )}
                      {blog.attributes?.featured_image?.data?.attributes
                        ?.url && (
                        <div className="absolute inset-0 bg-black opacity-60 h-full w-full object-fill" />
                      )}

                      {blog.attributes?.featured_image?.data?.attributes
                        ?.url && (
                        <div className="absolute inset-0 p-4 pb-10">
                          {blog.attributes?.tags?.data?.[0]?.attributes
                            ?.tags_name && (
                            <ColoredTag
                              text={blog.attributes?.tags?.data?.[0]?.attributes?.tags_name.toUpperCase()}
                              textColor="text-white"
                              bgColor="bg-yellow-600"
                            />
                          )}

                          <div className="h-full flex flex-col gap-1 justify-end text-xs text-white">
                            <div className="flex ">
                              <div className="text-xs">
                                {
                                  new Date(blog.attributes?.updatedAt)
                                    .toISOString()
                                    .split("T")[0]
                                }
                              </div>
                            </div>
                            <div className="text-2xl font-semibold ">
                              <Link href={`/blogs/latest/${blog?.id}`}>
                                {blog?.attributes?.blog_title.slice(0, 100)}
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
                      )}
                    </div>
                  ))}
              </div>

              <div className="w-full">
                {AllBlogsDataList.slice()
                  .sort((a:any, b:any) => {
                    const dateA = new Date(a.attributes.updatedAt);
                    const dateB = new Date(b.attributes.updatedAt);
                    if (dateA > dateB) return -1;
                    if (dateA < dateB) return 1;
                    return 0;
                  })
                  .slice(4, 6)
                  .map((blog:any, index:any) => (
                    <div className="row-span-1 col-span-1 h-1/2 pb-2">
                      <div className="relative rounded-lg overflow-hidden h-full">
                        {blog.attributes?.featured_image?.data?.attributes
                          ?.url && (
                          <div className="relative rounded-lg overflow-hidden h-full">
                            <Image
                              src={
                                blog?.attributes?.featured_image?.data
                                  ?.attributes?.url
                              }
                              objectFit="fill"
                              className="h-full w-full object-fill"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <div className="absolute inset-0 bg-black opacity-60 h-full w-full pt-4" />
                            <div className="absolute inset-0 p-4">
                              {blog.attributes?.tags?.data?.[0]?.attributes
                                ?.tags_name ? (
                                <div className="flex">
                                  <ColoredTag
                                    text={blog.attributes?.tags?.data?.[0]?.attributes?.tags_name.toUpperCase()}
                                    textColor="text-white"
                                    bgColor="bg-yellow-600"
                                  />
                                </div>
                              ) : (
                                <div>&nbsp;</div>
                              )}
                              <div className="flex"></div>
                              <div className="h-full w-full flex flex-col gap-1 justify-end text-xs text-white">
                                <div className="flex">
                                  <div className="text-xs mb-1">
                                    {
                                      new Date(blog.attributes?.updatedAt)
                                        .toISOString()
                                        .split("T")[0]
                                    }
                                  </div>
                                </div>
                                <div className="text-xl font-semibold mb-8">
                                  <Link href={`/blogs/latest/${blog?.id}`}>
                                    {blog?.attributes?.blog_title.slice(0, 100)}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
    </>
  )
}

export default RelatedPost