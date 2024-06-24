import React from "react";

const CardSkeleten = () => {
  return (
    <div className="max-w-screen-xl mx-auto catalog-product grid md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
      <div className="border border-gray-200 p-4">
        <div className="animate-pulse space-y-2">
          <div className="bg-gray-200 h-48"></div>
          <div className="flex-1 space-y-2">
            <div className="h-16 bg-gray-200 full"></div>
            <div className="space-x-2 flex">
              <div className="h-8 bg-gray-200 w-full"></div>
              <div className="h-8 bg-gray-200 w-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 p-4 hidden md:block">
        <div className="animate-pulse space-y-2">
          <div className="bg-gray-200 h-48"></div>
          <div className="flex-1 space-y-2">
            <div className="h-16 bg-gray-200 full"></div>
            <div className="space-x-2 flex">
              <div className="h-8 bg-gray-200 w-full"></div>
              <div className="h-8 bg-gray-200 w-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 p-4 hidden md:block">
        <div className="animate-pulse space-y-2">
          <div className="bg-gray-200 h-48"></div>
          <div className="flex-1 space-y-2">
            <div className="h-16 bg-gray-200 full"></div>
            <div className="space-x-2 flex">
              <div className="h-8 bg-gray-200 w-full"></div>
              <div className="h-8 bg-gray-200 w-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 p-4 hidden lg:block">
        <div className="animate-pulse space-y-2">
          <div className="bg-gray-200 h-48"></div>
          <div className="flex-1 space-y-2">
            <div className="h-16 bg-gray-200 full"></div>
            <div className="space-x-2 flex">
              <div className="h-8 bg-gray-200 w-full"></div>
              <div className="h-8 bg-gray-200 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleten;
