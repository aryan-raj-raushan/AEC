import Separator from "@/src/Components/separator/separator";
import AppBanner from "@/src/Components/appBanner/appBanner";
import BlogsLayouts from "@/src/Layouts/BlogsLayouts/BlogsLayouts";
import FullWidthSkeleten from "@/src/Components/Skeleton/FullWidthSkeleten";
import RelatedPost from "../../src/Components/BlogPage/Comp/RelatedPost";
import RecentPost from "../../src/Components/BlogPage/Comp/RecentPost";
import LastSection from "../../src/Components/BlogPage/Comp/LastSection";
import useBlogPageHook from "@/src/custom-hooks/useBlogPageHook";

const BlogsPage = () => {
  const {
    visibleBlogs,
    AllBlogsDataList,
    handleLoadMore,
    totalPages,
    currentPage,
    allBlogLoading,
    formatDate
  } = useBlogPageHook();

  return (
    <BlogsLayouts>
      {/* Related Post Section  */}
      {allBlogLoading ? (
        <>
          <FullWidthSkeleten />
        </>
      ) : (
        <>
         <RelatedPost AllBlogsDataList={AllBlogsDataList} formatDate={formatDate}/>

          {/* End */}

          {/* Recent Post Section  */}

          <div className="max-w-screen-xl mx-auto my-10 px-4">
            <Separator />
          </div>

          <RecentPost visibleBlogs={visibleBlogs} />

          {/* End */}

          {/* Load More Section */}

          <div className="max-w-screen-xl mx-auto my-10 px-4">
            <Separator />
          </div>
          <LastSection AllBlogsDataList={AllBlogsDataList} formatDate={formatDate} currentPage={currentPage} totalPages={totalPages} handleLoadMore={handleLoadMore}/>

          {/* End */}

          <section>
            <div className="max-w-screen-xl mx-auto py-10 pt-2 px-4">
              <AppBanner />
            </div>
          </section>
        </>
      )}
    </BlogsLayouts>
  );
};

export default BlogsPage;
