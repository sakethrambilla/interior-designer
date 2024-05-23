import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Process = () => {
  return (
    <>
      {/* Layout 241 */}
      <section className="flex flex-col px-8 lg:px-20 py-20 bg-cwhite text-cblack items-start justify-center gap-10 lg:gap-20">
        <section className="flex flex-col lg:flex-row w-full justify-between gap-4 lg:gap-2 items-">
          <div className="flex flex-col gap-4 lg:gap-8">
            <p className="text-sm font-light font-sansation">Process</p>
            <h2 className="text-3xl lg:text-5xl font-sansation w-2/3">
              Experience the{" "}
              <span className="text-corange"> {" Design Process "}</span> with
              Us
            </h2>
          </div>
          <div className="flex flex-row gap-12 ">
            <Image
              src="/Images/process1.svg"
              alt="Process1 image"
              width={50}
              height={50}
              className="w-full"
            />{" "}
            <Image
              src="/Images/process2.svg"
              alt="Process1 image"
              width={50}
              height={50}
              className="hidden lg:flex lg:w-[50%]"
            />{" "}
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-6 lg:gap-14 ">
          <div className="flex flex-col gap-4 lg:gap-10">
            <Image
              src="/Images/logo.svg"
              alt="logo image"
              width={50}
              height={50}
              className="w-8 lg:w-12"
            />
            <h3 className="text-lg lg:text-2xl font-sansation ">
              Consultation and Concept Development
            </h3>
            <p>
              We start by understanding your needs and preferences, gathering
              inspiration, and developing a concept that aligns with your
              vision.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:gap-10">
            <Image
              src="/Images/logo.svg"
              alt="logo image"
              width={50}
              height={50}
              className="w-8 lg:w-12"
            />
            <h3 className="text-lg lg:text-2xl font-sansation ">
              Design and Quotation Planning
            </h3>
            <p>
              Our team of experienced designers will create detailed plans and
              renderings, ensuring every aspect of the design is carefully
              considered.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:gap-10">
            <Image
              src="/Images/logo.svg"
              alt="logo image"
              width={50}
              height={50}
              className="w-8 lg:w-12"
            />
            <h3 className="text-lg lg:text-2xl font-sansation ">
              Execution and Project Construction
            </h3>
            <p>
              Once the plans are finalized, our skilled craftsmen will bring the
              design to life, paying attention to every detail to ensure a
              flawless execution.
            </p>
          </div>
        </section>
        <div className="flex flex-row gap-4">
          <Link href="/" className="px-6 py-3 text-corange">
            Get Started
          </Link>
          <Link href="/" className="px-6 py-3 flex items-center ">
            Button <IoIosArrowForward />
          </Link>
        </div>
      </section>
    </>
  );
};
export default Process;
