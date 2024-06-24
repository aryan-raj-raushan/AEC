import React from 'react';
import Link from 'next/link'; // Import Link from next/link if you're using Next.j
import Separator from '@/src/Components/separator/separator';

const ExamSection = ({ NewCategoryData, formatDate }:any) => {
  return (
    <div>
      <section className="max-w-screen-xl mx-auto my-10 px-4">
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-semibold">
            {NewCategoryData[3]?.attributes?.category_name}
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2">
            {NewCategoryData[3]?.attributes?.news?.data
              .slice(0, 8)
              .map((latestData:any, index:any) => {
                return (
                  <div className="flex flex-col gap-4" key={index}>
                    <div>
                      <img
                        src={latestData?.attributes?.featured_image?.data?.attributes?.url}
                        alt=""
                        className="w-full min-w-36 h-44 rounded-lg"
                        style={{ objectFit: 'fill' }} // Apply objectFit as a style
                      />
                    </div>
                    <div className="text-2xl font-semibold text-primary-text line-clamp-1">
                      <Link href={`/news/latest/${latestData?.attributes?.url}`}>
                        {latestData?.attributes?.name}
                      </Link>
                    </div>
                    <div className="flex justify-between text-primary-text-light text-base pr-4">
                      <div>{formatDate(latestData?.attributes?.updatedAt)}</div>
                      <div>CNN Indonesia</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto my-10 px-4">
          <Separator />
        </div>
      </section>
    </div>
  );
};

export default ExamSection;
