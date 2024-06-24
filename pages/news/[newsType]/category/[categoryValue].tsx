import NewsBanner from "@/src/Components/@news/newsBanner/newsBanner";
import NewsLatest from "@/src/Components/@news/newsLatest/newsLates";
import { useRouter } from "next/router";
import { Key, useEffect, useState } from "react";
import AppBanner from "@/src/Components/appBanner/appBanner";
import NewsLayouts from "@/src/Layouts/NewsLayouts/Newslayouts";
import useBlog from "@/src/Hooks/useBlog";
import FullScreenSkeleton from "@/src/Components/Skeleton/FullScreenSkeleton";

export default function NewsDetail() {
  const [currentTab, setCurrentTab] = useState<any>(null);
  const [CategoryDataList, setCategoryDataList] = useState<any>(null);
  const router = useRouter();
  const categoryParams = router?.query?.categoryValue as string;
  const { GetCategoryByFilter } = useBlog();
  useEffect(() => {
    if (categoryParams) {
      setCurrentTab(categoryParams);
    }
  }, [categoryParams]);

  const { CategoryData, loading, error } = GetCategoryByFilter(currentTab);

  useEffect(() => {
    setCategoryDataList(CategoryData || []);
  }, [CategoryData]);

  const filterData = CategoryDataList?.filter(
    (data: { attributes: { category_name: any } }) =>
      data?.attributes?.category_name === currentTab
  );

  let newsData: never[];

  if (filterData && filterData.length > 0) {
    newsData = filterData[0]?.attributes?.news?.data;
  } else {
    newsData = [];
  }

  return (
    <NewsLayouts>
      {loading ? (
        <div className="heroSection navbar-PageInfo-responsive">
          <FullScreenSkeleton />
        </div>
      ) : (
        <>
          <section className="my-16">
            <NewsBanner />
          </section>
          <section>
            <NewsLatest Category={newsData} currentTab={currentTab} />
          </section>
          <section className="max-w-screen-xl mx-auto">
            <AppBanner />
          </section>
        </>
      )}
    </NewsLayouts>
  );
}
