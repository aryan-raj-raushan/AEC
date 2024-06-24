import { motion } from "framer-motion";
import Image from "next/image";
import BoostComponentSlider from "@/src/Components/homePage/BoostComponentSlider";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { HomeComponentBg } from "@/src/Asset";

const BoostSection = ({
  FeturedListData,
  handleSlideChange,
  handleLoginButtonClick,
}: any) => {
  return (
    <motion.div className="py-20 w-full h-full lg:max-h-[30rem] px-4 mt-20 mb-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={HomeComponentBg}
          layout="fill"
          objectFit="cover"
          className="opacity-80"
          alt=""
        />
      </div>
      <motion.div
        className="relative max-w-screen-xl mx-auto lg:flex-row flex-col h-full flex items-center justify-between mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <motion.div
          className="flex flex-col justify-center w-full pl-8 font-work-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
        >
          <h6 className="text-[#1268F5] text-xs font-bold mb-4">
            Why Affinity Education?
          </h6>
          <p className="text-black text-[1.7rem] font-bold w-[85%] leading-tight mb-1.5">
            Boost Your Admission Odds with Proven Success Rate:
          </p>
          <p className="font-sans font-normal text-base text-black tracking-wide">
            Our students gain admission to their first-choice university.
          </p>
          <div className="flex items-center gap-6 md:gap-16 font-work-sans mt-8">
            <div>
              <b className="text-[#1268F5] font-bold leading-tight text-[2.8rem]">
                4x <sup>&uarr;</sup>
              </b>
              <p className="text-base text-black font-normal tracking-tight">
                Increase chance
              </p>
            </div>
            <div>
              <b className="text-[#1268F5] font-bold leading-tight text-[2.8rem]">
                70% <sup>&uarr;</sup>
              </b>
              <p className="text-base text-black font-normal tracking-tight">
                Increase chance
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:block hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromTop}
        >
          <BoostComponentSlider
            FeturedListData={FeturedListData}
            onSlideChange={handleSlideChange}
          />
        </motion.div>
        <motion.div
          className="md:block md:absolute md:-bottom-[10.5rem] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom(1)}
        >
          <div className="md:bg-[#1268F5] lg:w-[90%] lg:max-w-screen-lg rounded-xl flex md:items-center item-start md:justify-evenly py-8 sm:mb-0 -mb-24 sm:mt-0 mt-10 mx-auto">
            <p className="sm:text-xl text-base text-white font-medium sm:mx-0 mx-2 hidden md:block">
              Get In Touch with your Study Abroad Expert now!
            </p>
            <button
              className="bg-white sm:text-base text-sm font-work-sans font-medium leading-normal sm:px-4 px-2 sm:mx-0 mx-4 md:mx-2 py-2 rounded-lg"
              onClick={handleLoginButtonClick}
            >
              Signup for FREE ! &rarr;
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BoostSection;
