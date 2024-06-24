import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GetEventBanner, GetFeturedSection, GetHeroSection, GetTestimonial } from '../graphql/home/getHome';

const useHomeSetion = () => {
    const {
        loading: allHeroLoading,
        error: allHeroError,
        data: allHeroData,
      } = useQuery<any>(GetHeroSection);
    
      const [HeroListData, setHeroListData] = useState<any[]>([]);
    
      const AllHeorData = allHeroData?.heroSections?.data;
      
      useEffect(() => {
        setHeroListData(AllHeorData || []);
      }, [allHeroData]);

      const {
        loading: allFeturedLoading,
        error: allFeturedError,
        data: allFeturedData,
      } = useQuery<any>(GetFeturedSection);
    
      const [FeturedListData, setFeturedListData] = useState<any[]>([]);
    
      const AllFeturedData = allFeturedData?.featuredSections?.data;
      
      useEffect(() => {
        setFeturedListData(AllFeturedData || []);
      }, [allFeturedData]);


      const {
        loading: allTestimonialLoading,
        error: allTestimonialError,
        data: allTestimonialData,
      } = useQuery<any>(GetTestimonial);
    
      const [TestimonialListData, setTestimonialListData] = useState<any[]>([]);
    
      const AllTestimonialData = allTestimonialData?.testimonials?.data;
      
      useEffect(() => {
        setTestimonialListData(AllTestimonialData || []);
      }, [allTestimonialData]);


      const {
        loading: allEventlLoading,
        error: allEventError,
        data: allEventData,
      } = useQuery<any>(GetEventBanner);
    
      const [EventListData, setEventListData] = useState<any[]>([]);
    
      const AllEventData = allEventData?.eventBanners?.data;
      
      useEffect(() => {
        setEventListData(AllEventData || []);
      }, [allEventData]);



    return{
        FeturedListData,
        HeroListData,
        TestimonialListData,
        EventListData
    };
};

export default useHomeSetion;