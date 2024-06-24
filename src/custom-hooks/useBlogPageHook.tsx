import React from 'react'
import useBlog from '../Hooks/useBlog';

const useBlogPageHook = () => {
    const {
        visibleBlogs,
        AllBlogsDataList,
        handleLoadMore,
        totalPages,
        currentPage,
        allBlogLoading,
      } = useBlog();
    
      const formatDate = (timestamp: string | number | Date) => {
        const date = new Date(timestamp);
        const now: Date = new Date();
        const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    
        if (diff < 60) {
          return "Just Now";
        } else if (diff < 3600) {
          const minutes = Math.floor(diff / 60);
          return `${minutes} ${minutes === 1 ? "Minute" : "Minutes"} Ago`;
        } else if (diff < 86400) {
          const hours = Math.floor(diff / 3600);
          return `${hours} ${hours === 1 ? "Hour" : "Hours"} Ago`;
        } else if (diff < 604800) {
          const days = Math.floor(diff / 86400);
          return `${days} ${days === 1 ? "Day" : "Days"} Ago`;
        } else {
          return date.toDateString();
        }
      };
  return{
    visibleBlogs,
    AllBlogsDataList,
    handleLoadMore,
    totalPages,
    currentPage,
    allBlogLoading,
    formatDate
  }
}

export default useBlogPageHook