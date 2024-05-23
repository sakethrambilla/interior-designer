"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      {/* Navbar */}

      <nav className="w-full bg-white  text-4xl text-black">
        <HiMiniBars3BottomLeft
          onClick={() => setNavbarOpen(!navbarOpen)}
          // className={`${navbarOpen === false ? "flex" : "hidd"}`}
        />
        <div
          className={`font-sansation  absolute flex-col gap-10 h-screen bg-white top-[0] px-10  py-10 w-full  left-0 ${
            navbarOpen === true ? "flex" : "hidden"
          }`}
        >
          <div
            className="flex items-end justify-end w-full"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <IoClose className="" />
          </div>
          <Link
            href="/"
            className="hover:text-[#FF792E] hover:border-b-2 border-[#ff792e] w-fit   "
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:text-[#FF792E] hover:border-b-2 border-[#ff792e] w-fit "
          >
            About Us
          </Link>
          <Link
            href="/"
            className="hover:text-[#FF792E] hover:border-b-2 border-[#ff792e] w-fit "
          >
            Our Art
          </Link>
          <Link
            href="/"
            className="hover:text-[#FF792E] hover:border-b-2 border-[#ff792e] w-fit "
          >
            Press
          </Link>
          <Link
            href="/"
            className="hover:text-[#FF792E] hover:border-b-2 border-[#ff792e] w-fit "
          >
            Blog
          </Link>
          <Link
            href="/"
            className="hover:text-[#FF792E] hover:border-b-2 border-[#ff792e]"
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
