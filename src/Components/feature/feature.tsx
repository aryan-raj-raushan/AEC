import Tag from "../tag/tags";

import React from 'react';


type Tag = {
  name: string;
};
type Props = {
  title: string;
  tags: any;
};

export default function Feature({ title, tags, selectedValue }: any) {
  return (
    <>
      <div className="bg-primary-light my-4 p-4 shadow-lg rounded-md">
        <h5 className="text-primary text-2xl font-semibold mb-4 ">{title}</h5>
        <div className="flex gap-2 overflow-x-auto w-full hide-scrollbar cursor-pointer">
          {tags?.map((tag: any) => {
            return (
              <React.Fragment key={tag?.name}>
                {tag?.count != 0 && (
                  <div
                  className={`text-base shadow-sm text-primary px-3 py-1 bg-white rounded-full min-w-fit`}
                  >
                    <div
                      className={`flex-1 text-sm`}
                      onClick={() => selectedValue(tag?.name)}
                    >
                      {tag.name}
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}


 