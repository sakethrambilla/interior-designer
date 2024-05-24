"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  bottomSlideUp,
  display,
  rightSlideIn,
  scaleOut,
  topSlideDown,
} from "../animations";

const Feature = () => {
  return (
    <>
      {/* Layout 10 */}
      <motion.section
        initial="initial"
        whileInView="animate"
        exit="exit"
        variants={display}
        className="cursor-ocursor  flex px-8 lg:px-20 py-14 lg:py-20 flex-col lg:flex-row gap-12 xl:gap-16 items-start justify-center bg-cblack text-cwhite "
      >
        <div className="flex  lg:py-20 flex-col gap-6 items-start justify-between lg:w-1/2">
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            whileInView="animate"
            exit="exit"
            variants={topSlideDown}
            className="font-light font-sansation text-cyellow "
          >
            Tagline
          </motion.h3>
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={scaleOut}
            className="text-3xl lg:text-5xl xl:w-[90%]  font-sansation"
          >
            Creating Beautiful Spaces That{" "}
            <span className="text-cyellow"> Inspire</span>
          </motion.h1>
          <motion.p
            initial="initial"
            whileInView="animate"
            variants={bottomSlideUp}
            className=" text-xl "
          >
            If your next question is why choose Cutting Edge Design Studio when
            there are so many well-renowned interior designers around, let us
            tell you how our creative minds work.
          </motion.p>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={bottomSlideUp}
            className="flex flex-col lg:flex-row gap-12"
          >
            <div className="flex flex-col  gap-4 ">
              <h3 className="text-2xl font-sansation text-cyellow">
                What is your story ?
              </h3>
              <p>
                {
                  "We listen to your story and we advice, this  helps to create interiors which not only reflect your taste but it blends art, design, and functionality to give a life  in itself."
                }
              </p>
            </div>
            <div className="flex flex-col  gap-4 ">
              <h3 className="text-2xl font-sansation text-cyellow">
                Our philosophy ?
              </h3>
              <p>
                {
                  "Our philosophy is as simple as it can get: Great Interiors are just like your personality- Elegant, Classy, and gives the best first impression."
                }
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="lg:w-[45%] xl:w-[40%] object-cover"
          initial="initial"
          whileInView="animate"
          variants={window.innerWidth <= 1023 ? scaleOut : rightSlideIn}
        >
          <Image
            src="/Images/feature.svg"
            alt="header "
            width={"100"}
            height={4000}
            className=" w-full"
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Feature;
