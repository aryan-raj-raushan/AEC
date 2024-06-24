import NewsFullWidthCard from '@/src/Components/card/newsFullWidthCard';
import Separator from '@/src/Components/separator/separator';
import React from 'react';

const CollegesSection = ({ NewCategoryData }:any) => { // Assuming NewCategoryData is passed as a prop
  return (
    <div>
      <section className="max-w-screen-xl mx-auto my-10 px-4">
        <div className="flex flex-col gap-6 ">
          <h3 className="text-3xl font-semibold">
            {NewCategoryData[2]?.attributes?.category_name}
          </h3>
          <div className="flex flex-col gap-4">
            {NewCategoryData[2]?.attributes?.news?.data
              .slice(0, 2)
              .map((latestData:any, index:any) => (
                <NewsFullWidthCard key={index} NewsData={latestData} />
              ))}
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto my-10 px-4">
          <Separator />
        </div>
      </section>
    </div>
  );
};

export default CollegesSection;
