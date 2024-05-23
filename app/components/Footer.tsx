import Image from "next/image";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* Footer  3*/}
      <section className="flex flex-col px-8 lg:px-24 py-10 lg:py-40 bg-cwhite text-cblack items-center justify-start  ">
        <div className="flex flex-col  lg:flex-row w-full gap-20 justify-between py-20">
          <div className="flex flex-col gap-4 lg:gap-8 text-wrap">
            <Image
              src={"/Images/logobrand.svg"}
              alt="brand with logo"
              width={100}
              height={100}
              className="w-fit"
            />
            <div className="flex flex-col gap-2">
              <p className="font-sansation">Address</p>
              <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-sansation">Contact</p>
              <p className="underline">1800 123 4567</p>
              <p className="underline">info@relume.io</p>
            </div>
            <div className="flex flex-row gap-2">
              <FaFacebookSquare />
              <FaInstagram />
              <FaLinkedin />
              <FaXTwitter />
              <FaYoutube />
            </div>
          </div>
          <div className="flex flex-row gap-24 lg:px-10">
            <div className="flex flex-col gap-4">
              <p className="font-sansation text-corange">Column One</p>
              <p>Link One</p>
              <p>Link One</p>
              <p>Link One</p>
              <p>Link One</p>
              <p>Link One</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-sansation text-corange">Column One</p>
              <p>Link One</p>
              <p>Link One</p>
              <p>Link One</p>
              <p>Link One</p>
              <p>Link One</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 py-10  border-t-2 border-black justify-between w-full">
          <span>© 2024 Growwebon. All rights reserved.</span>
          <div className="flex flex-col gap-2 text-sm lg:flex-row">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookeis Settings</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
