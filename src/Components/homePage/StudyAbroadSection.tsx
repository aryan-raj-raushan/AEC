import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const slideInFromLeft = (delay: number) => ({
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { delay } },
});

const slideInFromBottom = (delay: number) => ({
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { delay } },
});

const StudyAbroadSection = ({ StudyAbrod }: any) => {
  return (
    <section className="bg-white text-primary-text py-6 lg:py-14">
      <motion.div
        className="max-w-screen-xl mx-auto px-4"
        initial="visible"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <motion.div
          className="flex justify-center items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
        >
          <h3 className="text-2xl md:text-4xl">
            <b>Study Abroad</b> in any Country of your choice
          </h3>
        </motion.div>
        <motion.div
          className="flex overflow-x-auto hide-scrollbar w-full gap-3 my-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
        >
          {StudyAbrod}
        </motion.div>
        <motion.div
          className="flex item-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom(0.5)}
        >
          <button className="rounded-lg text-[20px] px-[24px] py-[15px] text-white font-work-sans text-base font-medium leading-relaxed bg-[#428BC1] hover:shadow-lg hover:drop-shadow-md transition duration-200">
            <Link href="/study-abroad/countries">Explore All Countries</Link>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StudyAbroadSection;
