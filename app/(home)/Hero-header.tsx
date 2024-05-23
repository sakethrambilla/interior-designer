import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

const Heroheader = () => {
  return (
    <>
      <div className="flex px-8 lg:px-20 py-4 lg:py-20  flex-col lg:flex-row gap-12 justify-center items-end text-[#1C1C1C] ">
        <div className="flex flex-col gap-10 lg:w-1/2">
          <Navbar />
          <h1 className="text-[30px] lg:text-[60px] font-sansation">
            Transforming Spaces with Innovative Interior Design
          </h1>
          <div className="flex flex-col gap-8">
            <p className="font-poppins text-xl lg:text-2xl lg:w-[70%]">
              Welcome to{" "}
              <span className="text-[#FF792E] underline-offset-4 underline decoration-4 decoration-[#1C1C1C]">
                Cutting Edge
              </span>{" "}
              world of exquisite interior design. Explore our services and let
              us bring your vision to life.
            </p>
            <div className="flex flex-row gap-6 lg:text-lg items-start">
              <Link
                href={"/"}
                className="px-6 py-3 bg-[#FF792E] rounded-lg text-white hover:bg-[#1C1C1C] hover:text-[#FF792E]"
              >
                Our Work
              </Link>
              <Link
                href={"/"}
                className="px-4 py-3   border-b-4 border-[#FF792E]"
              >
                About us
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-end">
            <Image
              src="/Images/heroheader-1.svg"
              alt="Header Image"
              className="w-full lg:w-[50%] "
              width={100}
              height={100}
            />
            <Image
              src="/Images/heroheader-2.svg"
              alt="Header Image"
              className="w-full lg:w-[50%] "
              width={100}
              height={100}
            />
          </div>
        </div>

        <Image
          src="/Images/heroheader.svg"
          alt="Header Image"
          className="w-full lg:w-[45%]  object-cover  rounded-3xl"
          width={100}
          height={100}
        />
      </div>
    </>
  );
};

export default Heroheader;
