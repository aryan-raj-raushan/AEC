import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
import AppBanner from "../appBanner/appBanner";

const AppBannerSection = () => {
  return (
    <motion.section
      className="bg-[#F2F2F2]"
      initial="visible"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <motion.div
        className="max-w-screen-xl mx-auto py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromBottom(1)}
      >
        <AppBanner />
      </motion.div>
    </motion.section>
  );
};

export default AppBannerSection;
