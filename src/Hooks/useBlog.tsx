import { useQuery } from '@apollo/client';
import { useEffect, useState } from "react";
import { GET_ALL_FILTER_BLOGS,GET_ALL_BLOGS, GET_NEWS_BY_CATEGORY, GET_NEWS_BY_CATEGORY_QUERY ,GET_BLOGS_BY_ID, GET_NEWS_BY_ID, GET_ALL_NEWS} from '../graphql/blogsnews/blogsnews';

const GetCategoryByFilter = (
  categoryName: any
) => {
  const { loading, error, data } = useQuery<any>(GET_NEWS_BY_CATEGORY_QUERY, {
    variables: categoryName,
  });
  return {
    CategoryData: data?.categories?.data,
    loading,
    error,
  };
};
 

const GetSingleBlogById = (blogId: string) => {
  const { loading, error, data } = useQuery(GET_BLOGS_BY_ID, {
    variables: { id: blogId }, 
  });

  return {
    singleblogData: data?.blogs?.data,
    loading,
    error,
  };
}


const GetSingleNewsById = (newsUrl: string) => {
  const { loading, error, data } = useQuery(GET_NEWS_BY_ID, {
    variables: { id: newsUrl }, 
  });

  return {
    singleNewsData: data?.newsAndBlogs?.data,
    loading,
    error,
  };
}

const GetBlogByFilter = (pageSize: number = 10, page: number = 1) => {
  const { loading, error, data } = useQuery<any>(GET_ALL_FILTER_BLOGS, {
    variables: {
      page,
      pageSize,
    },
  });

  return {
    BlogData: data?.blogs?.data,
    loading,
    error,
  };
};

const useBlog = () => {
    const {
        loading: allBlogLoading,
        error: allBlogError,
        data: allBlogData,
        fetchMore 
      } = useQuery<any>(GET_ALL_BLOGS);
      const [AllBlogsDataList, setAllBlogsDataList] = useState<any[]>([]);
      const [currentPage, setCurrentPage] = useState<number>(1);
      const pageSize = allBlogData?.blogs?.meta?.pagination?.pageSize;
      const totalBlogs = allBlogData?.blogs?.meta?.pagination?.total;
      
      const PAGE_SIZE = 10;

      useEffect(() => {
        if (allBlogData && allBlogData.blogs && allBlogData.blogs.data) {
          setAllBlogsDataList(allBlogData.blogs.data);
        }
      }, [allBlogData]);
    
      const handleLoadMore = () => {
        if (currentPage < totalPages) {
          const nextPage = currentPage + 1;
          fetchMore({
            variables: {
              page: nextPage,
              pageSize: PAGE_SIZE, // Assuming PAGE_SIZE is defined elsewhere
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              return {
                ...prev,
                blogs: {
                  ...prev.blogs,
                  data: [...prev.blogs.data, ...fetchMoreResult.blogs.data],
                },
              };
            },
          });
          setCurrentPage(nextPage);
        }
      };
      

      const totalPages = Math.ceil(totalBlogs / pageSize);

      // Filter blogs to display based on current page
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const visibleBlogs = AllBlogsDataList.slice(startIndex, endIndex);
       
      const {
        loading: allNewCategoryLoading,
        error: allNewsCategoryError,
        data: allNewsCategoryData,
      } = useQuery<any>(GET_NEWS_BY_CATEGORY);
      const AllNewsCategoryData = allNewsCategoryData?.categories?.data;

      const [NewCategoryData , setNewsCategoryData] =  useState<any[]>([]);
      
      useEffect(() => {
        setNewsCategoryData(AllNewsCategoryData || []);
      }, [AllNewsCategoryData]);

      const {
        loading: allNewsLoading,
        error: allNewsError,
        data: allNewsData,
      } = useQuery<any>(GET_ALL_NEWS);
      const [AllNewsDataList, setAllNewsDataList] = useState<any[]>([]);
      useEffect(() => {
        setAllNewsDataList(allNewsData?.newsAndBlogs?.data);
      }, [allNewsData]);

    return {
        NewCategoryData,
        GetSingleBlogById,
        GetCategoryByFilter,
        AllBlogsDataList,
        GetSingleNewsById,
        visibleBlogs,
        handleLoadMore,
        totalPages,
        currentPage,
        GetBlogByFilter,
        allBlogLoading,
        allNewCategoryLoading,
        AllNewsDataList
    };
};

export default useBlog;