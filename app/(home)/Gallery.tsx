import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <>
      {/* Gallery 10 */}
      <section className=" bg-corange text-cwhite px-8 lg:px-24 py-10 lg:py-20  flex flex-col gap-12 items-center  justify-center text-center">
        <h1>Gallery 10</h1>
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl lg:text-5xl font-sansation ">
            Inspiring Designs
          </h1>
          <p className="lg:text-xl text-cblack">
            Discover our diverse range of stunning interior design projects.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="flex flex-col gap-6">
            <Image
              src="/Images/gallery1.svg"
              alt="gallery image"
              width={100}
              height={100}
              className="w-fit"
            />
            <Image
              src="/Images/gallery2.svg"
              alt="gallery image"
              width={100}
              height={100}
              className="w-fit"
            />
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src="/Images/gallery3.svg"
              alt="gallery image"
              width={100}
              height={100}
              className="w-fit"
            />
            <Image
              src="/Images/gallery4.svg"
              alt="gallery image"
              width={100}
              height={100}
              className="w-fit"
            />
            <Image
              src="/Images/gallery5.svg"
              alt="gallery image"
              width={100}
              height={100}
              className="w-fit"
            />
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src="/Images/gallery6.svg"
              alt="gallery image"
              width={100}
              height={100}
              className="w-fit"
            />
            <Image
              src="/Images/gallery7.svg"
              alt="gallery image"
              width={100}
              height={100}
              className="w-fit"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
