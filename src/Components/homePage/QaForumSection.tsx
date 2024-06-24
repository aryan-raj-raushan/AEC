import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft } from "@/utils/motion";
import { QALottie } from "@/src/Asset";
import Lottie from "lottie-react";

const QaForumSection = ({handelGetTuchModalOpen}:any) => {
  return (
    <section className="bg-gray-50 px-4 my-10">
      <div className="max-w-screen-xl px-4 mx-auto pt-3 globePadding">
        <div className="md:flex">
          {/* First Row */}
          <div className="md:w-1/2 md:order-1 flex items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <motion.span
                className="text-3xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromLeft(1)}
              >
                <b className="tracking-widest">Q&A </b> Forum
              </motion.span>
              <br />
              <br />
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromLeft(0.5)}
              >
                If you find yourself with questions or uncertainties about
                colleges, careers, courses, or exams, do not hesitate to reach
                out. Simply submit your inquiry, and our team of experts will
                promptly provide you with a range of viable solutions to address
                your concerns. Your path to clarity and informed decision-making
                begins here.
              </motion.p>
              <br />

              <motion.button
                className="bg-primary hover:shadow-md hover:drop-shadow text-white py-3 rounded mt-4 px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromBottom(0.5)}
                onClick={() => handelGetTuchModalOpen("Tuch")}
              >
                Ask a Question
              </motion.button>
            </motion.div>
          </div>
          {/* Second Row */}
          <div className="md:w-1/2 md:order-2 flex items-center justify-center">
            <Lottie animationData={QALottie} loop={true} className="w-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QaForumSection;
