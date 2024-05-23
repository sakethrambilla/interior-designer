import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <>
      {/* Testimonial 5 */}
      <section className="px-8 lg:px-20 py-20   flex flex-col gap-8 md:gap-12 items-start justify-center bg-cblack text-cwhite ">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-4xl font-sansation text-corange">
            Customer testimonials
          </h1>
          <p className=" md:text-lg">
            Hear what our clients have to say about us
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col gap-4 lg:gap-6">
            <span className="gap-2 flex">⭐⭐⭐⭐⭐</span>
            <p className="">
              {
                '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
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
          </div>
          <div className="flex flex-col gap-4 lg:gap-6">
            <span className="gap-2 flex">⭐⭐⭐⭐⭐</span>
            <p className="">
              {
                '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
