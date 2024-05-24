"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { scaleOut } from "../animations";

const Cta = () => {
  return (
    <>
      {/* CTA 27 */}
      <div className="cursor-bcursor w-full bg-[url('/Images/cta.svg')] 0 bg-cover px-8 lg:px-20 py-14 lg:py-20 text-white">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={scaleOut}
          className="bg-black/30 py-20 rounded-3xl  flex flex-col gap-12 items-center text-center justify-center"
        >
          <h1 className="lg:w-2/5 text-4xl lg:text-5xl text-cwhite font-sansation">
            Transform Your Space with Us
          </h1>
          <p className="lg:text-xl lg:w-1/3">
            Discover our innovative interior design solutions that will elevate
            your home.
          </p>

          <Link
            href="/"
            className="px-8 py-4  rounded-lg bg-corange text-white"
          >
            {" "}
            Quote
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Cta;
