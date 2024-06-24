import React, { useEffect, useState } from 'react'
import useColleges from '../Hooks/useColleges';
import userFrom from '../Hooks/userFrom';
import useBlog from '../Hooks/useBlog';

const useNewsPageHook = () => {
  const { AllCollegesData } = useColleges();
  const [List, setList] = useState<any[]>([]);
  const { NewCategoryData, allNewCategoryLoading } = useBlog();
  const [selectedCollegeId, setSelectedCollegeId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setList(AllCollegesData || []);
  }, [AllCollegesData]);

  const getTopCollege = List.filter((topClg) => {
    return topClg?.attributes?.is_featured;
  });

  const {
    GetCollegeByFilter,
    isFeaturedCollegeData,
    isToCollegeData,
    allCollegeLoading,
  } = useColleges();


  const handleOpenModal = (collegeId: any) => {
    setSelectedCollegeId(collegeId);
    setIsOpen(true);
  };
  const { CollegeApplicatonListData } = userFrom();
  const FromStep: any = CollegeApplicatonListData?.form_stape;

  const handleCloseModal = () => {
    setIsOpen(false);
  };

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
  return {
    NewCategoryData, allNewCategoryLoading, formatDate, isFeaturedCollegeData, isOpen, selectedCollegeId, FromStep, handleCloseModal, handleOpenModal
  }
}

export default useNewsPageHook