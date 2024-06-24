import React from "react";

const BlogNewsSection = ({
  AffintiyBlogCard,
  AffinityNews,
  activeBlogArticalTab,
  handleBlogArticalTabClick,
}: any) => {
  return (
    <section className="bg-white py-10 max-w-screen-xl mx-auto">
      <div className="flex justify-center flex-wrap items-center border-b-text-primary-text gap-4">
        {AffintiyBlogCard?.length > 0 && (
          <div
            className={`p-2 border-b-4 cursor-pointer ${
              activeBlogArticalTab === "BLOG"
                ? "border-b-[#1268F5]"
                : "border-b-transparent"
            }`}
            onClick={() => handleBlogArticalTabClick("BLOG")}
          >
            BLOG
          </div>
        )}
        {AffinityNews?.length > 0 && (
          <div
            className={`p-2 border-b-4 cursor-pointer ${
              activeBlogArticalTab === "NEWS"
                ? "border-b-[#1268F5]"
                : "border-b-transparent"
            }`}
            onClick={() => handleBlogArticalTabClick("NEWS")}
          >
            NEWS
          </div>
        )}
      </div>

      <div className="flex flex-row overflow-x-auto hide-scrollbar gap-8 md:gap-3 my-6 justify-start w-full py-4">
        {activeBlogArticalTab === "BLOG" && <>{AffintiyBlogCard}</>}
        {activeBlogArticalTab === "NEWS" && <>{AffinityNews}</>}
      </div>
    </section>
  );
};

export default BlogNewsSection;
