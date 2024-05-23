import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Feature = () => {
  return (
    <>
      {/* Layout 10 */}
      <section className="  flex px-8 lg:px-20 py-14 lg:py-20 flex-col lg:flex-row gap-12 xl:gap-16 items-start justify-center bg-cblack text-cwhite ">
        <div className="flex  lg:py-20 flex-col gap-6 items-start justify-between lg:w-1/2">
          <h3 className="font-light font-sansation text-cyellow ">Tagline</h3>
          <h1 className="text-3xl lg:text-5xl xl:w-[90%]  font-sansation">
            Creating Beautiful Spaces That Inspire
          </h1>
          <p className=" text-xl ">
            If your next question is why choose Cutting Edge Design Studio when
            there are so many well-renowned interior designers around, let us
            tell you how our creative minds work.
          </p>
          <div className="flex flex-col lg:flex-row gap-12">
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
          </div>
        </div>
        <Image
          src="/Images/feature.svg"
          alt="header "
          width={"100"}
          height={4000}
          className="lg:w-[45%] xl:w-[40%] object-cover w-full"
        />
      </section>
    </>
  );
};

export default Feature;
