import { Award, Gold_medal, trophy_Star, winner } from "@/src/Asset";
import Image from "next/image";
import React from 'react';

// Define customAwardData
const customAwardData = [
  {
    id: 1,
    featured_image: {
      data: {
        attributes: {
          url: "https://example.com/image1.jpg",
          certificationFor: "Certification for Best in the World",
          Organization: "India Today",
          src: Gold_medal,
        },
      },
    },
  },
  {
    id: 2,
    featured_image: {
      data: {
        attributes: {
          url: "https://example.com/image1.jpg",
          certificationFor: "Certification for Best in the World",
          Organization: "Danik Jagran",
          src: winner,
        },
      },
    },
  },
  {
    id: 3,
    featured_image: {
      data: {
        attributes: {
          url: "https://example.com/image1.jpg",
          certificationFor: "Certification for Best in the World",
          Organization: "Hindustan Times",
          src: trophy_Star,
        },
      },
    },
  },
];

// Define AwardCard component
const AwardCard = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between w-full">
      {customAwardData?.map((blog: any, index: number) => {
        const { attributes } = blog.featured_image.data;
        return (
          <div key={blog?.id}>
            <div className="flex ">
              <Image
                src={Award}
                alt=""
                width={394}
                height={40}
                className="w-full h-fit object-fill"
              />
              <Image
                src={attributes?.src}
                alt=""
                width={394}
                height={40}
                className="w-full h-fit mt-10 object-fill"
              />
              <Image
                src={Award}
                alt=""
                width={394}
                height={40}
                className="w-full h-fit object-fill scale-x-[-1]"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <h2 className="font-medium sm:text-base text-xs">
                {attributes.certificationFor}
              </h2>
              <p className="sm:text-xl text-sm font-medium p-2">
                {attributes.Organization}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { AwardCard, customAwardData };
