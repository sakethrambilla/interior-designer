"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  bottomSlideUp,
  display,
  leftSlideIn,
  rightSlideIn,
  scaleOut,
  topSlideDown,
} from "../animations";

const Gallery = () => {
  return (
    <>
      {/* Gallery 10 */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={display}
        className="cursor-bcursor bg-corange text-cwhite px-8 lg:px-24 py-10 lg:py-20  flex flex-col gap-12 items-center  justify-center text-center"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={topSlideDown}
          className="flex flex-col gap-6"
        >
          <h1 className="text-3xl lg:text-5xl font-sansation ">
            Inspiring Designs
          </h1>
          <p className="lg:text-xl text-cblack">
            Discover our diverse range of stunning interior design projects.
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <motion.div
            className="flex flex-col gap-6"
            initial="initial"
            whileInView="animate"
            variants={window.innerWidth <= 1023 ? scaleOut : leftSlideIn}
          >
            <div className=" relative cursor-ocursor ">
              <Image
                src="/Images/gallery1.svg"
                alt="gallery image"
                width={100}
                height={100}
                className="w-fit"
              />
              <div
                className="absolute inset-0 flex  items-end justify-end px-4 py-10
      "
              >
                <div className=" w-fit text-xl lg:text-4xl p-4 text-corange h-fit bg-black/40 rounded-xl  z-10">
                  Dinning
                </div>
              </div>
            </div>
            <div className=" relative cursor-ocursor ">
              <Image
                src="/Images/gallery2.svg"
                alt="gallery image"
                width={100}
                height={100}
                className="w-fit"
              />
              <div
                className="absolute inset-0 flex  items-end justify-end px-4 py-10
      "
              >
                <div className=" w-fit text-xl lg:text-4xl p-4 text-corange h-fit bg-black/40 rounded-xl  z-10">
                  Bedroom
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            initial="initial"
            whileInView="animate"
            variants={window.innerWidth <= 1023 ? scaleOut : rightSlideIn}
          >
            <div className=" relative cursor-ocursor  ">
              <Image
                src="/Images/gallery3.svg"
                alt="gallery image"
                width={100}
                height={100}
                className="w-fit z-0  object-cover "
              />
              <div
                className="absolute inset-0 flex  items-end justify-end px-4 py-10
      "
              >
                <div className=" w-fit text-xl lg:text-4xl p-4 text-corange h-fit bg-black/40 rounded-xl  z-10">
                  Living Room
                </div>
              </div>
            </div>
            <div className=" relative cursor-ocursor  ">
              <Image
                src="/Images/gallery4.svg"
                alt="gallery image"
                width={100}
                height={100}
                className="w-fit"
              />
              <div
                className="absolute inset-0 flex  items-end justify-end px-4 py-10
      "
              >
                <div className=" w-fit text-xl lg:text-4xl p-4 text-corange h-fit bg-black/40 rounded-xl  z-10">
                  Kitchen
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Gallery;
