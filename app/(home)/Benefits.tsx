import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <>
      {/* Layout 104 */}
      <section className=" bg-white px-8 lg:px-20 py-4 lg:py-20   flex flex-col gap-14 text-cblack">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20  ">
          <h1 className="text-3xl lg:text-4xl font-sansation">
            Experience the Difference with Our {""}
            <span className="text-corange"> Expertise</span>
            {" and "}
            <span className="text-corange">Exceptional Customer Service</span>
          </h1>
          <div className="flex flex-col lg:text-sm gap-8 lg:gap-12 lg:max-w-[50%] ">
            <p className="w-full text-wrap lg:text-xl ">
              When you choose our services, you can expect nothing but the best.
              We bring years of experience, using only the finest materials, and
              providing exceptional customer service to ensure your complete
              satisfaction. Discover the difference we can make for your
              interior design project today.
            </p>
          </div>
        </div>

        <Image
          src="/Images/video.svg"
          alt="video tag"
          width={100}
          height={100}
          className="w-full rounded-3xl"
        />
      </section>
    </>
  );
};

export default Benefits;
