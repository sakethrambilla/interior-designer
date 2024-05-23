"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { display, leftSlideIn } from "../animations";

const Testimonials = () => {
  return (
    <>
      {/* Testimonial 5 */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={display}
        className="px-8 lg:px-20 py-20  lg:py-40  flex flex-col gap-8 md:gap-12 items-start justify-center bg-cblack text-cwhite "
      >
        <div className="flex flex-col gap-4">
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={leftSlideIn}
            className="text-3xl lg:text-5xl font-sansation text-corange"
          >
            Customer testimonials
          </motion.h1>
          <motion.p
            initial="initial"
            whileInView="animate"
            variants={display}
            className=" md:text-lg"
          >
            Hear what our clients have to say about us
          </motion.p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div
            initial={{ x: -50, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-4 lg:gap-6"
          >
            <span className="gap-2 flex">⭐⭐⭐⭐⭐</span>
            <p className="lg:w-2/3 lg:text-xl">
              {
                '""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.""'
              }
            </p>
            <div className="flex flex-row gap-3 items-center">
              <Image
                src="/Images/user.svg"
                alt="user image"
                width={50}
                height={50}
              />
              <div className="flex flex-col gap-1 text-sm">
                <p className="font-sansation">Name Surname</p>
                <p>Position, Company name</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 20, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-4 lg:gap-6"
          >
            <span className="gap-2 flex">⭐⭐⭐⭐⭐</span>
            <p className="lg:w-2/3  lg:text-xl">
              {
                '""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.""'
              }
            </p>
            <div className="flex flex-row gap-3 items-center">
              <Image
                src="/Images/user.svg"
                alt="user image"
                width={50}
                height={50}
              />
              <div className="flex flex-col gap-1 text-sm">
                <p className="font-sansation">Name Surname</p>
                <p>Position, Company name</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Testimonials;
