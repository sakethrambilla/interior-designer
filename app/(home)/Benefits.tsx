"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  bottomSlideUp,
  leftSlideIn,
  rightSlideIn,
  scaleOut,
  staggerContainer,
} from "../animations";
import { useMediaQuery } from "@mui/material";

const Benefits = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <>
      {/* Layout 104 */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={staggerContainer}
        className="cursor-bcursor bg-white px-8 lg:px-20 py-10 lg:py-32   flex flex-col gap-14 text-cblack"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20  ">
          <motion.h1
            variants={isDesktop === false ? scaleOut : leftSlideIn}
            className="text-3xl lg:text-4xl font-sansation"
          >
            Experience the Difference with Our {""}
            <span className="text-corange"> Expertise</span>
            {" and "}
            <span className="text-corange">Exceptional Customer Service</span>
          </motion.h1>
          <motion.div
            variants={isDesktop === false ? scaleOut : rightSlideIn}
            className="flex flex-col lg:text-sm gap-8 lg:gap-12 lg:max-w-[50%] "
          >
            <p className="w-full text-wrap lg:text-xl ">
              When you choose our services, you can expect nothing but the best.
              We bring years of experience, using only the finest materials, and
              providing exceptional customer service to ensure your complete
              satisfaction. Discover the difference we can make for your
              interior design project today.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={bottomSlideUp}
          className=""
        >
          <Image
            src="/Images/video.svg"
            alt="video tag"
            width={100}
            height={100}
            className="w-full rounded-3xl"
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Benefits;
