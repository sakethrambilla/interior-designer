"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { leftSlideIn, staggerContainer } from "../animations";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      {/* Navbar */}

      <motion.nav className="w-full bg-white  text-4xl text-black">
        <div className="">
          <HiMiniBars3BottomLeft
            onClick={() => setNavbarOpen(!navbarOpen)}
            // className={`${navbarOpen === false ? "flex" : "hidd"}`}
          />
        </div>
        <AnimatePresence mode="wait">
          {navbarOpen && (
            <motion.div
              initial="initial"
              whileInView="animate"
              exit="exit"
              variants={staggerContainer}
              className={`font-sansation  absolute flex-col gap-10 h-screen bg-white top-[0] px-10  py-10 w-full  left-0 flex`}
            >
              <div
                className="flex items-end justify-end w-full"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <IoClose className="" />
              </div>
              <Link
                href="/"
                className="hover:text-[#FF792E] group border-[#ff792e] w-fit   "
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  variants={leftSlideIn}
                  className="flex items-center"
                >
                  Home{" "}
                  <FiArrowUpRight className="flex hover:flex   text-corange group-hover:text-cblack" />
                </motion.div>
              </Link>
              <Link href="/" className="hover:text-[#FF792E] group  w-fit ">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  variants={leftSlideIn}
                  className="flex items-center"
                >
                  About Us
                  <FiArrowUpRight className="flex hover:flex   text-corange group-hover:text-cblack" />
                </motion.div>
              </Link>
              <Link href="/" className="hover:text-[#FF792E] group  w-fit ">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  variants={leftSlideIn}
                  className="flex items-center"
                >
                  Our Art
                  <FiArrowUpRight className="flex hover:flex   text-corange group-hover:text-cblack" />
                </motion.div>
              </Link>
              <Link href="/" className="hover:text-[#FF792E]  group  w-fit ">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  variants={leftSlideIn}
                  className="flex items-center"
                >
                  Press
                  <FiArrowUpRight className="flex hover:flex   text-corange group-hover:text-cblack" />
                </motion.div>
              </Link>
              <Link href="/" className="hover:text-[#FF792E]  w-fit ">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  variants={leftSlideIn}
                  className="flex items-center"
                >
                  Blog
                  <FiArrowUpRight className="flex hover:flex   text-corange group-hover:text-cblack" />
                </motion.div>
              </Link>
              <Link href="/" className="hover:text-[#FF792E]  w-fit">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  variants={leftSlideIn}
                  className="flex items-center"
                >
                  Contact
                  <FiArrowUpRight className="flex hover:flex   text-corange group-hover:text-cblack" />
                </motion.div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
