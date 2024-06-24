import React from 'react';
import Image from 'next/image';
import CarouselSideBtn from '../../carousel/carousel-side-button';


const ImageCutout = ({ customImageData }: any) => {
    return (
        <div className="w-full">
          <CarouselSideBtn
            buttonBorderColor="border-primary-text"
            buttonTextColor="text-primary-text"
            slidesDesktop={4}
            slidesTablet={4}
            slidesMobile={2}
            slides={customImageData?.map((blog: any) => {
              const { attributes } = blog.featured_image.data;
    
              return (
                <div
                  key={blog?.id}
                  className="relative flex flex-col hover:shadow-md w-[394px] min-w-72 h-auto items-center gap-5 cursor-pointer transition duration-200 border border-gray-300 rounded-lg"
                >
                  <div className="flex w-full">
                    <Image
                      src={attributes?.src}
                      alt=""
                      width={1000}
                      height={1000}
                      className="w-full h-[250px] rounded-t-lg object-fill"
                    />
                  </div>
                  <div className="p-4 mb-4 flex flex-col items-center">
                    <h2 className=" font-medium sm:text-base text-xs">
                      {attributes.certificationFor}
                    </h2>
                    <p className="sm:text-2xl text-sm font-normal">
                      {attributes.Organization}
                    </p>
                  </div>
                  <span className=" absolute right-2 bottom-0 hover:text-blue-700 cursor-pointer hover:underline text-gray-500">
                    Read More
                  </span>
                </div>
              );
            })}
          />
        </div>
      );
}



export default ImageCutout;
